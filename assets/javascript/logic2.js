$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyBMxgWIvoUenp7EeSVDTWZ_moYKSA0LZS8",
        authDomain: "omars-den.firebaseapp.com",
        databaseURL: "https://omars-den.firebaseio.com",
        storageBucket: "omars-den.appspot.com",
        messagingSenderId: "283220849230"
    };
    var giphyUrl = "https://giphy.p.mashape.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=6&q=overwatch"
    var twitchUrl = "https://api.twitch.tv/kraken/streams/?game=overwatch&limit=1"
    var igdbUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,url&search=" + search

    firebase.initializeApp(config);
    var database = firebase.database()
    $('#search').on('click', function () {

    })
function giphyDisplay() {
    $.ajax({
        url: giphyUrl,
        method: "GET",
        headers: {
            "X-Mashape-Key": "rVAKBl1pWxmshN2KI8WzLgDtQvXSp1CLTDhjsnjZT2bL5VZLaQ",
            "Accept": "application/json"
        }
    })
        .done(function (response) {
            $('#queryImgDisplay').empty()
            var results = response.data
            if (results == " ") {
                console.log('there are no gifs')
            }
            console.log(results)
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>")
                gifDiv.addClass("gifDiv")
                var gifImage = $('<img>')
                gifImage.attr("src",results[i].images.original.url)
                gifImage.addClass('image')
                gifDiv.append(gifImage)
                $('#queryImgDisplay').prepend(gifDiv)
            }
        })
}
function twitchDisplay() {
    $.ajax({
        url: twitchUrl,
        method: "GET",
        headers: {"Client-ID": "ncvflt70y19rx0ayfvplqquyzqpilx"}
    })
        .done(function (response) {
            $('#twitch-stream').empty()
            var results = response.streams
            if (results == "") {
                console.log("there are no streams")
            }
            console.log(results)
            var streamDiv = $("<div>")
            streamDiv.addClass('streamDiv')
            var gifStream = $("<iframe>")
            gifStream.attr("src", "https://player.twitch.tv/?channel=" + results[0].channel.name)
            streamDiv.append(gifStream)
            $('#twitch-stream').prepend(streamDiv)
                //src="https://player.twitch.tv/?channel=valkia" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe><a href="https://www.twitch.tv/valkia?tt_medium=live_embed&tt_content=text_link" style="padding:2px 0px 4px; display:block; width:345px; font-weight:normal; font-size:10px; text-decoration:underline;">Watch live video from Valkia on www.twitch.tv</a>
        })
}
function igdbDisplay () {
    $.ajax({
        url: igdbUrl,
        method: "GET",
        headers: {
            "X-Mashape-Key": "rVAKBl1pWxmshN2KI8WzLgDtQvXSp1CLTDhjsnjZT2bL5VZLaQ",
            "Accept": "application/json"
        }
    })
}
    igdbDisplay()
    twitchDisplay()
    giphyDisplay()
})
