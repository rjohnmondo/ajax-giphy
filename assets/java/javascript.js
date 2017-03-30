

var wrestlers =["John Cena", "The Rock", "The Undertaker", "Hulk Hogan", "AJ Styles"];

function displayWrestlerGiphy() {

	var wrest = $(this).attr("data-name");
// 	// var wrest = "The Undertaker"
	var address ="http://api.giphy.com/v1/gifs/search?q=";
	var apiKey = "dc6zaTOxFJmzC";

	queryURL = address + wrest +"&api_key=" + apiKey;

	console.log(queryURL);

	$.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {



             for (i=0; i < 10; i++)   	{

        	var wrestlerDiv = $("<div class='wrestler'>");
            var rating = response.data[i].rating;
//         	// var rating = response.rating;
//             var pOne = $("<p>").text("Rating: " + rating);
        	var pOne = $("<p>").text("Rating :"+ rating);
            
            wrestlerDiv.append(pOne);

            var imgURL = response.data[i].images.original.url;

//         	wrestlerDiv.append(pOne);
            var image = $("<img>").attr("src", imgURL);
//         	var imgURL = response.data[i]
            wrestlerDiv.append(image);

            $(".gifHolder").prepend(wrestlerDiv);
        }
//         	// console.log("The image for " + [i] + " is " + response.data[i].images.original.url);
//     	makeButtons();
        });
    }

function makeButtons(){

    $(".buttons-view").empty();

    for (i=0; i <wrestlers.length; i++){

        var a= $("<button>");
        a.addClass("wrestler");
        a.attr("data-name", wrestlers[i]);
        a.text(wrestlers[i]);
        $(".buttons-view").append(a);
        

    }// For Loop

}

$("#add-wrestler").on("click", function(event){
    event.preventDefault();

    var wrestler = $("#wrestler-input").val().trim();

    wrestlers.push(wrestler);

    makeButtons();



});

$(document).on("click",".wrestler", displayWrestlerGiphy);


 makeButtons();

 // ("#wrestler-input").empty();


// });

// }       

// displayWrestlerGiphy();