class Hash {
  static get() {
    return window.location.hash;
  }

  static set(data) {
    window.location.hash = data;
  }
}
export default Hash;
