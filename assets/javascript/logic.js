function twitch() {
    var twitchUrl= ""
}
function giphy() {
    var giphyUrl= "https://giphy.p.mashape.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=10&q=funny+cat"
    var query = $(this).attr('data-person') // built text input apply to end of q=
    $.ajax({
        url: giphyUrl,
        method: "GET",
        headers: {"X-Mashape-Key": "rVAKBl1pWxmshN2KI8WzLgDtQvXSp1CLTDhjsnjZT2bL5VZLaQ",
                  "Accept": "application/json"  },
    })
        .done(function (response) {
            var results = response
            console.log(results)
        })
}
function igdb() {
    var igdbUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,url&search=overwatch"
    var query  = $(this).attr('data-person') // build the text input apply to end of search =
    $.ajax({
        url: igdbUrl,
        method: "GET",
        headers: {"X-Mashape-Key": "rVAKBl1pWxmshN2KI8WzLgDtQvXSp1CLTDhjsnjZT2bL5VZLaQ",
                    "Accept": "application/json"},
    })
        .done(function (response) {
            var results = response
            console.log(results)
        })
}
igdb()