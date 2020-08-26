var instagram = {}
var signInFunc = require('../testsAssets/instagramLogin')
var hashTagFunc = require('../testsAssets/instagramSearchHashtag')
var tapFirstUserFunc = require('../testsAssets/tapFirstUserFunc')
var likePostFunc = require('../testsAssets/likePost')
var followUserFunc = require('../testsAssets/followUser')
 
module.exports = {
   before: browser => {
       instagram = browser.page.instagramPage()
       instagram
           .navigate()
   },
   after: browser => {
       browser
           .end()
   },
   'log in to instagram': browser => {
      signInFunc(instagram)
   },
  
   'getting to unfollow' : browser => {
       instagram   
       .click('@profilePicButton')
       .pause(1000)
       // .click('@mainFollowingButton')
       .pause(1000)
   },
   'unfollowing followed' : browser => {
       for (let i = 0; i < 270; i++) {
       instagram
       .click('@mainFollowingButton')
       .pause(1000)
       .click('@trueFollowingButton')
       .pause(1000)
       .click('@unfollowNotif')
       .pause(1000)
       .click('@xButton')
       .pause(1000)
       }
      
   },
 
   'Search person': browser => {
       hashTagFunc(instagram)
   },
   'Click first user and like': browser => {
       tapFirstUserFunc(instagram)
   },
  
   'Loop through next users and like/follow': browser => {
       for (let i = 0; i < 175; i++) {
       likePostFunc(instagram)
       //followUserFunc(instagram)
       }
   },
}
