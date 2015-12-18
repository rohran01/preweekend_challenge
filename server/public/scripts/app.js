$(document).ready(function(){
    console.log("Meow! (Really would you have expected something else from me?");

    $(".clicky-button").on('click', clickyButton);


});

function clickyButton(){
    var data = {};

    $.ajax({
        type: "GET",
        url: "/data",
        success: function(gremlins){
            data = gremlins;
            appendDom(data);
        }
    });


}

function logData(data){
    console.log(data);
}

function appendDom(data) {
    $('.container').append('<div>' + data.people + '</div>');
}

