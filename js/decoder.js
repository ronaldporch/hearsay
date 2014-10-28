var decoder = {
  getPassword: function() {
    this.password = prompt("Enter the password")
  },
  getUrl: function() {
    search = window.location.search
    pattern = /\?(.*)$/

    matches = search.match(pattern)
    this.url = matches[1]
  },
  decode: function() {
      alert(CryptoJS.AES.decrypt(this.url, this.password).toString(CryptoJS.enc.Utf8))
  },
  unlock: function() {
    this.getUrl()
    this.getPassword()
    this.decode()
  }
}

module.exports = decoder;
