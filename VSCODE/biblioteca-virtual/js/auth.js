/**
 * Controlador para la página de autenticación
 * Maneja login y registro de usuarios
 */

import authManager from "./utils/auth.js"

class AuthController {
  constructor() {
    this.init()
  }

  /**
   * Inicializa los event listeners y la interfaz
   */
  init() {
    // Verificar si ya está autenticado
    if (authManager.isAuthenticated()) {
      window.location.href = "dashboard.html"
      return
    }

    this.setupEventListeners()
    this.showLoginForm()
  }

  /**
   * Configura los event listeners
   */
  setupEventListeners() {
    // Formulario de login
    const loginForm = document.getElementById("loginForm")
    loginForm.addEventListener("submit", (e) => this.handleLogin(e))

    // Formulario de registro
    const registerForm = document.getElementById("registerForm")
    registerForm.addEventListener("submit", (e) => this.handleRegister(e))

    // Enlaces para cambiar entre formularios
    document.getElementById("showRegister").addEventListener("click", (e) => {
      e.preventDefault()
      this.showRegisterForm()
    })

    document.getElementById("showLogin").addEventListener("click", (e) => {
      e.preventDefault()
      this.showLoginForm()
    })
  }

  /**
   * Maneja el envío del formulario de login
   * @param {Event} e - Evento del formulario
   */
  async handleLogin(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const email = formData.get("email")
    const password = formData.get("password")

    const user = authManager.login(email, password)

    if (user) {
      this.showMessage("¡Bienvenido! Redirigiendo...", "success")
      setTimeout(() => {
        window.location.href = "dashboard.html"
      }, 1000)
    } else {
      this.showMessage("Credenciales incorrectas. Intenta de nuevo.", "error")
    }
  }

  /**
   * Maneja el envío del formulario de registro
   * @param {Event} e - Evento del formulario
   */
  async handleRegister(e) {
    e.preventDefault()

    const formData = new FormData(e.target)
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      type: formData.get("type"),
      password: formData.get("password"),
    }

    const user = authManager.register(userData)

    if (user) {
      this.showMessage("¡Registro exitoso! Redirigiendo...", "success")
      setTimeout(() => {
        window.location.href = "dashboard.html"
      }, 1000)
    } else {
      this.showMessage("El email ya está registrado. Intenta con otro.", "error")
    }
  }

  /**
   * Muestra el formulario de login
   */
  showLoginForm() {
    document.getElementById("loginForm").classList.remove("hidden")
    document.getElementById("registerForm").classList.add("hidden")
  }

  /**
   * Muestra el formulario de registro
   */
  showRegisterForm() {
    document.getElementById("loginForm").classList.add("hidden")
    document.getElementById("registerForm").classList.remove("hidden")
  }

  /**
   * Muestra un mensaje al usuario
   * @param {string} message - Mensaje a mostrar
   * @param {string} type - Tipo de mensaje (success, error)
   */
  showMessage(message, type) {
    // Remover mensaje anterior si existe
    const existingMessage = document.querySelector(".message")
    if (existingMessage) {
      existingMessage.remove()
    }

    // Crear nuevo mensaje
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

    // Remover mensaje después de 3 segundos
    setTimeout(() => {
      messageDiv.remove()
    }, 3000)
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new AuthController()
})
