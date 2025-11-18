/**
 * Módulo de gestión de préstamos
 * Maneja reservas, préstamos y devoluciones
 */

import storage from "./storage.js"
import booksManager from "./books.js"

class LoansManager {
  /**
   * Obtiene todos los préstamos
   * @returns {Array} Lista de préstamos
   */
  getAllLoans() {
    return storage.getData("loans")
  }

  /**
   * Obtiene préstamos de un usuario específico
   * @param {number} userId - ID del usuario
   * @returns {Array} Préstamos del usuario
   */
  getUserLoans(userId) {
    const loans = this.getAllLoans()
    return loans.filter((loan) => loan.userId === userId)
  }

  /**
   * Obtiene préstamos activos (no devueltos)
   * @returns {Array} Préstamos activos
   */
  getActiveLoans() {
    const loans = this.getAllLoans()
    return loans.filter((loan) => loan.status === "active" || loan.status === "reserved")
  }

  /**
   * Reserva un libro para un usuario
   * @param {number} userId - ID del usuario
   * @param {number} bookId - ID del libro
   * @returns {Object|null} Reserva creada o null si no es posible
   */
  reserveBook(userId, bookId) {
    const book = booksManager.getBookById(bookId)

    if (!book || book.status !== "available") {
      return null
    }

    // Crear reserva
    const reservation = {
      userId: userId,
      bookId: bookId,
      startDate: new Date().toISOString().split("T")[0],
      endDate: null,
      status: "reserved",
      type: "reservation",
    }

    const createdReservation = storage.addItem("loans", reservation)

    // Actualizar estado del libro
    booksManager.updateBookStatus(bookId, "reserved")

    return createdReservation
  }

  /**
   * Convierte una reserva en préstamo
   * @param {number} loanId - ID de la reserva
   * @returns {Object|null} Préstamo actualizado
   */
  convertToLoan(loanId) {
    const loan = this.getLoanById(loanId)

    if (!loan || loan.status !== "reserved") {
      return null
    }

    // Calcular fecha de devolución (30 días)
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 30)

    const updatedLoan = storage.updateItem("loans", loanId, {
      status: "active",
      type: "loan",
      endDate: endDate.toISOString().split("T")[0],
    })

    // Actualizar estado del libro
    booksManager.updateBookStatus(loan.bookId, "borrowed")

    return updatedLoan
  }

  /**
   * Registra la devolución de un libro
   * @param {number} loanId - ID del préstamo
   * @returns {Object|null} Préstamo actualizado
   */
  returnBook(loanId) {
    const loan = this.getLoanById(loanId)

    if (!loan || loan.status !== "active") {
      return null
    }

    const updatedLoan = storage.updateItem("loans", loanId, {
      status: "returned",
      returnDate: new Date().toISOString().split("T")[0],
    })

    // Actualizar estado del libro
    booksManager.updateBookStatus(loan.bookId, "available")

    return updatedLoan
  }

  /**
   * Obtiene un préstamo por su ID
   * @param {number} loanId - ID del préstamo
   * @returns {Object|null} Préstamo encontrado
   */
  getLoanById(loanId) {
    const loans = this.getAllLoans()
    return loans.find((loan) => loan.id === loanId) || null
  }

  /**
   * Obtiene préstamos con información de libros y usuarios
   * @param {number} userId - ID del usuario (opcional)
   * @returns {Array} Préstamos con información completa
   */
  getLoansWithDetails(userId = null) {
    const loans = userId ? this.getUserLoans(userId) : this.getAllLoans()
    const books = booksManager.getAllBooks()
    const users = storage.getData("users")

    return loans.map((loan) => {
      const book = books.find((b) => b.id === loan.bookId)
      const user = users.find((u) => u.id === loan.userId)

      return {
        ...loan,
        bookTitle: book ? book.title : "Libro no encontrado",
        bookAuthor: book ? book.author : "",
        userName: user ? user.name : "Usuario no encontrado",
      }
    })
  }

  /**
   * Genera estadísticas de préstamos
   * @returns {Object} Estadísticas de préstamos
   */
  getLoanStats() {
    const loans = this.getAllLoans()

    return {
      total: loans.length,
      active: loans.filter((l) => l.status === "active").length,
      reserved: loans.filter((l) => l.status === "reserved").length,
      returned: loans.filter((l) => l.status === "returned").length,
    }
  }
}

export default new LoansManager()
