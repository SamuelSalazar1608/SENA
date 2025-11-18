/**
 * Módulo de gestión de libros
 * Maneja catálogo, búsquedas y operaciones con libros
 */

import storage from "./storage.js"

class BooksManager {
  /**
   * Obtiene todos los libros del catálogo
   * @returns {Array} Lista de libros
   */
  getAllBooks() {
    return storage.getData("books")
  }

  /**
   * Busca libros por título, autor o categoría
   * @param {string} query - Término de búsqueda
   * @returns {Array} Libros que coinciden con la búsqueda
   */
  searchBooks(query) {
    const books = this.getAllBooks()
    const searchTerm = query.toLowerCase()

    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.category.toLowerCase().includes(searchTerm),
    )
  }

  /**
   * Filtra libros por categoría
   * @param {string} category - Categoría a filtrar
   * @returns {Array} Libros de la categoría especificada
   */
  filterByCategory(category) {
    if (!category) return this.getAllBooks()

    const books = this.getAllBooks()
    return books.filter((book) => book.category === category)
  }

  /**
   * Obtiene un libro por su ID
   * @param {number} bookId - ID del libro
   * @returns {Object|null} Libro encontrado o null
   */
  getBookById(bookId) {
    const books = this.getAllBooks()
    return books.find((book) => book.id === bookId) || null
  }

  /**
   * Actualiza el estado de un libro
   * @param {number} bookId - ID del libro
   * @param {string} status - Nuevo estado (available, borrowed, reserved)
   * @returns {Object|null} Libro actualizado
   */
  updateBookStatus(bookId, status) {
    return storage.updateItem("books", bookId, { status })
  }

  /**
   * Obtiene libros disponibles para préstamo
   * @returns {Array} Libros disponibles
   */
  getAvailableBooks() {
    const books = this.getAllBooks()
    return books.filter((book) => book.status === "available")
  }

  /**
   * Obtiene estadísticas del catálogo
   * @returns {Object} Estadísticas de libros
   */
  getBookStats() {
    const books = this.getAllBooks()

    return {
      total: books.length,
      available: books.filter((b) => b.status === "available").length,
      borrowed: books.filter((b) => b.status === "borrowed").length,
      reserved: books.filter((b) => b.status === "reserved").length,
    }
  }
}

export default new BooksManager()
