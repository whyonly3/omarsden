$(document).ready(function () {
    var config = {
        apiKey: "AIzaSyBMxgWIvoUenp7EeSVDTWZ_moYKSA0LZS8",
        authDomain: "omars-den.firebaseapp.com",
        databaseURL: "https://omars-den.firebaseio.com",
        storageBucket: "omars-den.appspot.com",
        messagingSenderId: "283220849230"
    };
    firebase.initializeApp(config);
    var database = firebase.database()
    $('#search').on('click',function (e) {
        e.preventDefault();
        var searchInput = $('#query-input').val().trim()
        searchInput = searchInput.replace(/ /g, "+")
        var giphyUrl = "https://giphy.p.mashape.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=6&q=" + searchInput
        var twitchUrl = "https://api.twitch.tv/kraken/streams/?game=" + searchInput +"&limit=1"
        var igdbUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,url,cover,summary,rating&search=" + searchInput
        giphyDisplay(giphyUrl)
        twitchDisplay(twitchUrl)
        igdbDisplay(igdbUrl)
        $('#query-input').val('')
        return false;
    })
function giphyDisplay(giphyUrl) {
    $.ajax({
        url: giphyUrl,
        method: "GET",
        headers: {
            "X-Mashape-Key": "rVAKBl1pWxmshN2KI8WzLgDtQvXSp1CLTDhjsnjZT2bL5VZLaQ",
            "Accept": "application/json"
        }
    })
        .done(function (response) {
            $('.row').empty()
            var results = response.data
            if (results == " ") {
                console.log('there are no gifs')
            }
            console.log(results)
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>")
                gifDiv.addClass("col-sm-4")
                var gifImage = $('<img>')
                gifImage.attr("src",results[i].images.original.url)
                gifImage.addClass('image')
                gifDiv.append(gifImage)
                $('.game-image').val(results)
                $('.row').prepend(gifDiv)
            }
        })
}
function twitchDisplay(twitchUrl) {
    $.ajax({
        url: twitchUrl,
        method: "GET",
        headers: {"Client-ID": "ncvflt70y19rx0ayfvplqquyzqpilx"}
    })
        .done(function (response) {
            $('#twitch-stream').empty()
            var results = response.streams[0]
            if (results == "") {
                console.log("there are no streams")
            }
            console.log(results)
            var stream = $("<iframe>")
            stream.attr("src", "https://player.twitch.tv/?channel=" + results.channel.name)
            stream.addClass('stream')
            $('#twitch-stream').prepend(stream)
        })
}
function igdbDisplay (igdbUrl) {
    $.ajax({
        url: igdbUrl,
        method: "GET",
        headers: {
            "X-Mashape-Key": "rVAKBl1pWxmshN2KI8WzLgDtQvXSp1CLTDhjsnjZT2bL5VZLaQ",
            "Accept": "application/json"
        }
    })
        .done(function (response) {
            var results = response[0]
            console.log(results)
        })
}
})
