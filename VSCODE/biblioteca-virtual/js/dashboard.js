/**
 * Controlador principal del dashboard
 * Maneja la navegación y las diferentes secciones
 */

import authManager from "./utils/auth.js"
import booksManager from "./utils/books.js"
import loansManager from "./utils/loans.js"

class DashboardController {
  constructor() {
    this.currentSection = "catalog"
    this.currentUser = null
    this.init()
  }

  /**
   * Inicializa el dashboard
   */
  init() {
    // Verificar autenticación
    authManager.requireAuth()
    this.currentUser = authManager.getCurrentUser()

    this.setupUI()
    this.setupEventListeners()
    this.loadSection("catalog")
  }

  /**
   * Configura la interfaz inicial
   */
  setupUI() {
    // Mostrar nombre del usuario
    document.getElementById("userName").textContent = this.currentUser.name
  }

  /**
   * Configura los event listeners
   */
  setupEventListeners() {
    // Navegación del sidebar
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const section = e.target.dataset.section
        this.loadSection(section)
      })
    })

    // Botón de logout
    document.getElementById("logoutBtn").addEventListener("click", () => {
      authManager.logout()
    })

    // Búsqueda de libros
    document.getElementById("searchBtn").addEventListener("click", () => {
      this.searchBooks()
    })

    document.getElementById("searchInput").addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.searchBooks()
      }
    })

    // Filtro de categorías
    document.getElementById("categoryFilter").addEventListener("change", (e) => {
      this.filterBooks(e.target.value)
    })

    // Generar reporte
    document.getElementById("generateReport").addEventListener("click", () => {
      this.generateReport()
    })

    // Modal
    this.setupModal()
  }

  /**
   * Carga una sección específica
   * @param {string} sectionName - Nombre de la sección
   */
  loadSection(sectionName) {
    // Actualizar navegación activa
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active")
    })
    document.querySelector(`[data-section="${sectionName}"]`).classList.add("active")

    // Mostrar sección correspondiente
    document.querySelectorAll(".content-section").forEach((section) => {
      section.classList.remove("active")
    })
    document.getElementById(sectionName).classList.add("active")

    // Cargar contenido específico
    switch (sectionName) {
      case "catalog":
        this.loadCatalog()
        break
      case "loans":
        this.loadUserLoans()
        break
      case "reports":
        this.loadReports()
        break
    }

    this.currentSection = sectionName
  }

  /**
   * Carga el catálogo de libros
   */
  loadCatalog() {
    const books = booksManager.getAllBooks()
    this.renderBooks(books)
  }

  /**
   * Renderiza la lista de libros
   * @param {Array} books - Lista de libros a renderizar
   */
  renderBooks(books) {
    const booksGrid = document.getElementById("booksGrid")

    if (books.length === 0) {
      booksGrid.innerHTML = '<p class="text-center">No se encontraron libros.</p>'
      return
    }

    booksGrid.innerHTML = books
      .map(
        (book) => `
            <div class="book-card" data-book-id="${book.id}">
                <h3>${book.title}</h3>
                <p><strong>Autor:</strong> ${book.author}</p>
                <p><strong>Categoría:</strong> ${this.getCategoryName(book.category)}</p>
                <p><strong>ISBN:</strong> ${book.isbn}</p>
                <p class="book-description">${book.description}</p>
                <span class="book-status status-${book.status}">
                    ${this.getStatusText(book.status)}
                </span>
                ${
                  book.status === "available"
                    ? `<button class="btn-primary reserve-btn" data-book-id="${book.id}" style="margin-top: 12px; width: 100%;">
                        Reservar
                    </button>`
                    : ""
                }
            </div>
        `,
      )
      .join("")

    // Event listeners para reservar
    document.querySelectorAll(".reserve-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const bookId = Number.parseInt(e.target.dataset.bookId)
        this.showReserveModal(bookId)
      })
    })
  }

  /**
   * Busca libros según el término ingresado
   */
  searchBooks() {
    const query = document.getElementById("searchInput").value.trim()
    const books = query ? booksManager.searchBooks(query) : booksManager.getAllBooks()
    this.renderBooks(books)
  }

  /**
   * Filtra libros por categoría
   * @param {string} category - Categoría a filtrar
   */
  filterBooks(category) {
    const books = booksManager.filterByCategory(category)
    this.renderBooks(books)
  }

  /**
   * Carga los préstamos del usuario actual
   */
  loadUserLoans() {
    const loans = loansManager.getLoansWithDetails(this.currentUser.id)
    this.renderUserLoans(loans)
  }

  /**
   * Renderiza los préstamos del usuario
   * @param {Array} loans - Lista de préstamos
   */
  renderUserLoans(loans) {
    const loansTable = document.getElementById("loansTable")

    if (loans.length === 0) {
      loansTable.innerHTML = '<p class="text-center">No tienes préstamos activos.</p>'
      return
    }

    loansTable.innerHTML = loans
      .map(
        (loan) => `
            <div class="loan-item">
                <div class="loan-info">
                    <h4>${loan.bookTitle}</h4>
                    <p><strong>Autor:</strong> ${loan.bookAuthor}</p>
                    <p><strong>Fecha inicio:</strong> ${this.formatDate(loan.startDate)}</p>
                    ${loan.endDate ? `<p><strong>Fecha límite:</strong> ${this.formatDate(loan.endDate)}</p>` : ""}
                    <span class="book-status status-${loan.status}">
                        ${this.getStatusText(loan.status)}
                    </span>
                </div>
                <div class="loan-actions">
                    ${
                      loan.status === "reserved"
                        ? `<button class="btn-primary convert-btn" data-loan-id="${loan.id}">
                            Confirmar Préstamo
                        </button>`
                        : ""
                    }
                    ${
                      loan.status === "active"
                        ? `<button class="btn-secondary return-btn" data-loan-id="${loan.id}">
                            Devolver
                        </button>`
                        : ""
                    }
                </div>
            </div>
        `,
      )
      .join("")

    // Event listeners para acciones
    document.querySelectorAll(".convert-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const loanId = Number.parseInt(e.target.dataset.loanId)
        this.convertToLoan(loanId)
      })
    })

    document.querySelectorAll(".return-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const loanId = Number.parseInt(e.target.dataset.loanId)
        this.returnBook(loanId)
      })
    })
  }

  /**
   * Carga la sección de reportes
   */
  loadReports() {
    // Los reportes se generan al hacer clic en el botón
    const reportsContent = document.getElementById("reportsContent")
    reportsContent.innerHTML = '<p class="text-center">Haz clic en "Generar Reporte" para ver las estadísticas.</p>'
  }

  /**
   * Genera y muestra el reporte de préstamos
   */
  generateReport() {
    const bookStats = booksManager.getBookStats()
    const loanStats = loansManager.getLoanStats()
    const activeLoans = loansManager
      .getLoansWithDetails()
      .filter((loan) => loan.status === "active" || loan.status === "reserved")

    const reportsContent = document.getElementById("reportsContent")
    reportsContent.innerHTML = `
            <div class="report-stats">
                <div class="stat-card">
                    <h3>${bookStats.total}</h3>
                    <p>Total de Libros</p>
                </div>
                <div class="stat-card">
                    <h3>${bookStats.available}</h3>
                    <p>Libros Disponibles</p>
                </div>
                <div class="stat-card">
                    <h3>${loanStats.active}</h3>
                    <p>Préstamos Activos</p>
                </div>
                <div class="stat-card">
                    <h3>${loanStats.reserved}</h3>
                    <p>Reservas Pendientes</p>
                </div>
            </div>
            
            <h3 style="margin: 24px 0 16px 0; color: var(--text-primary);">Préstamos Activos</h3>
            <div class="loans-table">
                ${activeLoans
                  .map(
                    (loan) => `
                    <div class="loan-item">
                        <div class="loan-info">
                            <h4>${loan.bookTitle}</h4>
                            <p><strong>Usuario:</strong> ${loan.userName}</p>
                            <p><strong>Fecha:</strong> ${this.formatDate(loan.startDate)}</p>
                            <span class="book-status status-${loan.status}">
                                ${this.getStatusText(loan.status)}
                            </span>
                        </div>
                    </div>
                `,
                  )
                  .join("")}
            </div>
        `
  }

  /**
   * Muestra el modal de reserva
   * @param {number} bookId - ID del libro a reservar
   */
  showReserveModal(bookId) {
    const book = booksManager.getBookById(bookId)
    const modal = document.getElementById("reserveModal")
    const bookDetails = document.getElementById("bookDetails")

    bookDetails.innerHTML = `
            <h4>${book.title}</h4>
            <p><strong>Autor:</strong> ${book.author}</p>
            <p><strong>Categoría:</strong> ${this.getCategoryName(book.category)}</p>
            <p>${book.description}</p>
        `

    modal.style.display = "block"

    // Configurar botón de confirmación
    const confirmBtn = document.getElementById("confirmReserve")
    confirmBtn.onclick = () => this.reserveBook(bookId)
  }

  /**
   * Reserva un libro
   * @param {number} bookId - ID del libro a reservar
   */
  reserveBook(bookId) {
    const reservation = loansManager.reserveBook(this.currentUser.id, bookId)

    if (reservation) {
      this.showMessage("¡Libro reservado exitosamente!", "success")
      this.closeModal()
      this.loadCatalog() // Recargar catálogo
    } else {
      this.showMessage("No se pudo reservar el libro.", "error")
    }
  }

  /**
   * Convierte una reserva en préstamo
   * @param {number} loanId - ID de la reserva
   */
  convertToLoan(loanId) {
    const loan = loansManager.convertToLoan(loanId)

    if (loan) {
      this.showMessage("¡Préstamo confirmado!", "success")
      this.loadUserLoans() // Recargar préstamos
    } else {
      this.showMessage("No se pudo confirmar el préstamo.", "error")
    }
  }

  /**
   * Registra la devolución de un libro
   * @param {number} loanId - ID del préstamo
   */
  returnBook(loanId) {
    const loan = loansManager.returnBook(loanId)

    if (loan) {
      this.showMessage("¡Libro devuelto exitosamente!", "success")
      this.loadUserLoans() // Recargar préstamos
    } else {
      this.showMessage("No se pudo registrar la devolución.", "error")
    }
  }

  /**
   * Configura el modal
   */
  setupModal() {
    const modal = document.getElementById("reserveModal")
    const closeBtn = document.querySelector(".close")

    closeBtn.onclick = () => this.closeModal()

    window.onclick = (event) => {
      if (event.target === modal) {
        this.closeModal()
      }
    }
  }

  /**
   * Cierra el modal
   */
  closeModal() {
    document.getElementById("reserveModal").style.display = "none"
  }

  /**
   * Obtiene el nombre legible de una categoría
   * @param {string} category - Categoría
   * @returns {string} Nombre legible
   */
  getCategoryName(category) {
    const categories = {
      ficcion: "Ficción",
      ciencia: "Ciencia",
      historia: "Historia",
      tecnologia: "Tecnología",
    }
    return categories[category] || category
  }

  /**
   * Obtiene el texto legible de un estado
   * @param {string} status - Estado
   * @returns {string} Texto legible
   */
  getStatusText(status) {
    const statuses = {
      available: "Disponible",
      borrowed: "Prestado",
      reserved: "Reservado",
      active: "Activo",
      returned: "Devuelto",
    }
    return statuses[status] || status
  }

  /**
   * Formatea una fecha
   * @param {string} dateString - Fecha en formato ISO
   * @returns {string} Fecha formateada
   */
  formatDate(dateString) {
    const date = new Date(dateString)
    return date.toLocaleDateString("es-ES")
  }

  /**
   * Muestra un mensaje al usuario
   * @param {string} message - Mensaje a mostrar
   * @param {string} type - Tipo de mensaje
   */
  showMessage(message, type) {
    const existingMessage = document.querySelector(".message")
    if (existingMessage) {
      existingMessage.remove()
    }

    const messageDiv = document.createElement("div")
    messageDiv.className = `message ${type}`
    messageDiv.textContent = message
    messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 16px 24px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 1000;
            animation: slideIn 0.3s ease-out;
            ${type === "success" ? "background-color: #27ae60;" : "background-color: #e74c3c;"}
        `

    document.body.appendChild(messageDiv)

    setTimeout(() => {
      messageDiv.remove()
    }, 3000)
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new DashboardController()
})
