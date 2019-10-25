
var topics = ['cleveland', 'movies', 'bmw', 'hair'];



//where we delete the movie button to create new movie buttons
$("#new-buttons").empty();

//where the giphy button is being created
//looping through the array of topics
function renderbuttons() {
    for (var i = 0; i < topics.length; i++) {
        var topicButton = $("<button>");
        topicButton.addClass('topics')
        topicButton.attr("data-name", topics[i]);
        topicButton.text(topics[i]);
        $("#new-buttons").append
        console.log("Topics =" + topics + "_");
    }
}
renderbuttons();

//populate page with new buttons
$("#new-topic").on("click", function (event) {
    var newInput = $("#newInput").val().trim();
    if (newInput === "") {
        alert("Please provide a topic")
    }
    else {
        topics.push(newInput)
    }
});

//showing the gifs
$("#new-topic").on("click", function () {
    var newInput = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newInput + "&api_key=9vU0IE74X70ZgkLyB8WgYHbC3IXiSPFR" + apiKey;
    console.log(queryURL)
    $.ajax({
        url: apiUrl,
        method: "GET"
    })
        .done(function (response) {
            cosole.log(response);
            var results = response.data
            $("#gifimg").empty

            for (var i = 0; i < topics.length; i++) {
                var gifDiv = $("<div>");
                var gifImage = $("<img>");
                var p = $("<p>").text("Rating: " + topics[i].rating);
                //not entirely sure what this does? I think maybe 
                gifImage.attr("src", data[i].images.fixed_height.url);
                gifImage.attr("data-still", data[i].images.fixed_height.url);
                gifImage.attr("data-animate", data[i].images.fixed_height.url);
                gifImage.attr("data.state", data[i].images.fixed_height.url);
            }
            //append gif rating and images
            gifDiv.append(p);
            gifDiv.append(gifImage);

        })
})








