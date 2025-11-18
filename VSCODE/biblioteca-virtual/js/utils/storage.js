/**
 * Módulo para manejo del almacenamiento local
 * Simula una base de datos usando localStorage
 */

class StorageManager {
  constructor() {
    this.initializeData()
  }

  /**
   * Inicializa los datos en localStorage si no existen
   */
  async initializeData() {
    try {
      // Cargar usuarios
      if (!localStorage.getItem("users")) {
        const usersResponse = await fetch("./db/users.json")
        const usersData = await usersResponse.json()
        localStorage.setItem("users", JSON.stringify(usersData.users))
      }

      // Cargar libros
      if (!localStorage.getItem("books")) {
        const booksResponse = await fetch("./db/books.json")
        const booksData = await booksResponse.json()
        localStorage.setItem("books", JSON.stringify(booksData.books))
      }

      // Cargar préstamos
      if (!localStorage.getItem("loans")) {
        const loansResponse = await fetch("./db/loans.json")
        const loansData = await loansResponse.json()
        localStorage.setItem("loans", JSON.stringify(loansData.loans))
      }
    } catch (error) {
      console.error("Error inicializando datos:", error)
    }
  }

  /**
   * Obtiene datos de una tabla específica
   * @param {string} table - Nombre de la tabla
   * @returns {Array} Array de datos
   */
  getData(table) {
    const data = localStorage.getItem(table)
    return data ? JSON.parse(data) : []
  }

  /**
   * Guarda datos en una tabla específica
   * @param {string} table - Nombre de la tabla
   * @param {Array} data - Datos a guardar
   */
  setData(table, data) {
    localStorage.setItem(table, JSON.stringify(data))
  }

  /**
   * Agrega un nuevo elemento a una tabla
   * @param {string} table - Nombre de la tabla
   * @param {Object} item - Elemento a agregar
   */
  addItem(table, item) {
    const data = this.getData(table)
    const newId = Math.max(...data.map((item) => item.id), 0) + 1
    item.id = newId
    data.push(item)
    this.setData(table, data)
    return item
  }

  /**
   * Actualiza un elemento en una tabla
   * @param {string} table - Nombre de la tabla
   * @param {number} id - ID del elemento
   * @param {Object} updates - Actualizaciones a aplicar
   */
  updateItem(table, id, updates) {
    const data = this.getData(table)
    const index = data.findIndex((item) => item.id === id)
    if (index !== -1) {
      data[index] = { ...data[index], ...updates }
      this.setData(table, data)
      return data[index]
    }
    return null
  }

  /**
   * Elimina un elemento de una tabla
   * @param {string} table - Nombre de la tabla
   * @param {number} id - ID del elemento a eliminar
   */
  deleteItem(table, id) {
    const data = this.getData(table)
    const filteredData = data.filter((item) => item.id !== id)
    this.setData(table, filteredData)
  }
}

export default new StorageManager()
