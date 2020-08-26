var user = {
    name: "gregoryomoma",
    password: "Bigbody27"
 }
  
 module.exports = (instagram) => {
        instagram
        .verify.visible("@instagramLogo")
        .verify.visible("@username")
        .verify.visible("@password")
        .verify.visible("@loginButton")
        .pause(1000)
        .setValue('@username', [user.name, instagram.api.Keys.ENTER])
        .setValue('@password', [user.password, instagram.api.Keys.ENTER])
        .click('@notificationButton')
        .pause(2000)  
 }