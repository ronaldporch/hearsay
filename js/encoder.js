var encoder = {
  setMessage: function() {
    this.message = document.getElementById('message').value
  },
  getPassword: function() {
    this.password = prompt("Enter Password")
  },
  setUrl: function() {
    this.url = this.encrypt()
  },
  replaceMessageWithUrl: function () {
    document.getElementById('message').value = "file:///home/rock/rails_projects/hearsay/decoder.html?" + this.url
  },
  encrypt: function() {
    cypher = CryptoJS.AES.encrypt(this.message, this.password)
    console.log("Verified: " +
      CryptoJS.AES.decrypt(cypher, this.password).toString(CryptoJS.enc.Utf8))
    return cypher
  },
  protect: function() {
    this.setMessage()
    this.getPassword()
    this.setUrl()
    this.replaceMessageWithUrl()
  }
}

module.exports = encoder;
