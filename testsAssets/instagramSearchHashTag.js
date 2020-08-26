var blackHashtag = [
    {search: '#blacklove'},
    {search: '#blackmendontcheat'},
    {search: '#blackcouples'},
    {search: '#melanin'},
 ]
  
 var fitness = [
    {search: '#vshred'},
    {search: '#vshredprogress'},
    {search: '#getfit'},
    {search: '#blackfitness'},
    {search: '#fitnessjourney'},
    {search: '#fitnessgoals'},
    {search: '#fitnessgains'},
    {search: '#weightloss'},
    {search: '#gymfitness'},
    {search: '#gymsharkmen'},
    {search: '#lafitness'},
    {search: '#crunchFitness'},
    {search: '#afrofitness'},
    {search: '#blackfitnessgoals'},
    {search: '#gains'},
 ]
  
 var development = [
    {search: '#iosdeveloper'},
    {search: '#blackdeveloper'},
    {search: '#iosdev'},
    {search: '#webdev'},
    {search: '#webdeveloper'},
    {search: '#fullstackdeveloper'},
    {search: '#softwaredeveloper'},
    {search: '#softwaredevelopers'},
    {search: '#uxdesigner'},
    {search: '#productdesigner'},
    {search: '#productmanager'},
    {search: '#QAEngineer'},
    {search: '#mobiledeveloper'},
    {search: '#blackdevelopers'},
    {search: '#blacksoftwareengineer'},
    {search: '#blackpeopleInTech'},
    {search: '#blackCoders'},
    {search: '#blackPeopleCode'},
    {search: '#blacktech'},
    {search: '#blackmatters'},
    {search: '#blacksuccess'},
 ]
 var christian = [
    {search: '#blackjesus'},
    {search: '#jesusisblack'},
    {search: '#blackjews'},
    {search: '#blackmenforchrist'},
    {search: '#jesusismyrock'},
 ]
  
  
 module.exports = (instagram) => {
        instagram
  
        // var arr = development
        // var index = arr[Math.floor(Math.random() * arr.length)]
        // let searchTerm = index.search
        // console.log('${searchTerm}')
        //.setValue('@searchBar', ["${searchTerm}", instagram.api.Keys.ENTER])
        .setValue('@searchBar', [development[0].search, instagram.api.Keys.ENTER])
        .pause(2000)
        .click("@firstUser")
        .pause(2000)        
 }
 