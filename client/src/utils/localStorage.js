class LocalStorage {
  static getMerch() {
    return JSON.parse(window.localStorage.getItem('currentMerch') || '{}')
  }

  static setMerch(data) {
    window.localStorage.setItem('currentMerch', JSON.stringify(data))
  }

  static get(name) {
    JSON.parse(window.localStorage.getItem(name))
  }

  static set(name, data) {
    window.localStorage.setItem(name, data)
  }
}
export default LocalStorage
