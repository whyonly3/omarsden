
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
    $('#search').on('click', function (e) {
        var query = $('#query-input').val().trim()
        alert("this is working!")
        database.ref('main-request').set({
            request : query
        })
    })

    database.ref('main-request').on('child_added', function (a, b) {
    var search = a.val()
        console.log(search)
    var twitchUrl = "https://api.twitch.tv/kraken/streams/?game=" + search + "&limit=1"
    var giphyUrl = "https://giphy.p.mashape.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=6&q=" + search
    var igdbUrl = "https://igdbcom-internet-game-database-v1.p.mashape.com/games/?fields=name,url&search=" + search
    var twitchAjax= $.ajax({
            url: twitchUrl,
            method: "GET",
            headers: {"Client-ID": "ncvflt70y19rx0ayfvplqquyzqpilx"}
        }),
        giphyAjax = $.ajax({
            url: giphyUrl,
            method: "GET",
            headers: {
                "X-Mashape-Key": "rVAKBl1pWxmshN2KI8WzLgDtQvXSp1CLTDhjsnjZT2bL5VZLaQ",
                "Accept": "application/json"
            },
        }),
        igdbAjax = $.ajax({
            url: igdbUrl,
            method: "GET",
            headers: {
                "X-Mashape-Key": "rVAKBl1pWxmshN2KI8WzLgDtQvXSp1CLTDhjsnjZT2bL5VZLaQ",
                "Accept": "application/json"
            },
        })
    $.when(twitchAjax,giphyAjax,igdbAjax).done(function (r1,r2,r3) {
        var twitchResponse = r1[0],
            giphyResponse = r2[0],
            igdbResponse = r3[0]
        console.log(twitchResponse)
        console.log()
    })


})




})