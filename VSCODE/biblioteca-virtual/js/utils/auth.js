/**
 * Módulo de autenticación
 * Maneja login, registro y sesión de usuarios
 */

import storage from "./storage.js"

class AuthManager {
  constructor() {
    this.currentUser = this.getCurrentUser()
  }

  /**
   * Inicia sesión con email y contraseña
   * @param {string} email - Email del usuario
   * @param {string} password - Contraseña del usuario
   * @returns {Object|null} Usuario si las credenciales son correctas
   */
  login(email, password) {
    const users = storage.getData("users")
    const user = users.find((u) => u.email === email && u.password === password)

    if (user) {
      // Guardar sesión (sin la contraseña por seguridad)
      const userSession = { ...user }
      delete userSession.password
      localStorage.setItem("currentUser", JSON.stringify(userSession))
      this.currentUser = userSession
      return userSession
    }

    return null
  }

  /**
   * Registra un nuevo usuario
   * @param {Object} userData - Datos del usuario
   * @returns {Object|null} Usuario creado o null si el email ya existe
   */
  register(userData) {
    const users = storage.getData("users")

    // Verificar si el email ya existe
    if (users.find((u) => u.email === userData.email)) {
      return null
    }

    // Crear nuevo usuario
    const newUser = {
      ...userData,
      createdAt: new Date().toISOString().split("T")[0],
    }

    const createdUser = storage.addItem("users", newUser)

    // Iniciar sesión automáticamente
    return this.login(userData.email, userData.password)
  }

  /**
   * Cierra la sesión actual
   */
  logout() {
    localStorage.removeItem("currentUser")
    this.currentUser = null
    window.location.href = "index.html"
  }

  /**
   * Obtiene el usuario actual de la sesión
   * @returns {Object|null} Usuario actual o null
   */
  getCurrentUser() {
    const userData = localStorage.getItem("currentUser")
    return userData ? JSON.parse(userData) : null
  }

  /**
   * Verifica si hay un usuario autenticado
   * @returns {boolean} True si hay usuario autenticado
   */
  isAuthenticated() {
    return this.currentUser !== null
  }

  /**
   * Redirige a login si no está autenticado
   */
  requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.href = "index.html"
    }
  }
}

export default new AuthManager()
