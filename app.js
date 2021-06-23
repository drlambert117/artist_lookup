
$(document).ready(function () {
    console.log("ready function called.");

    //Button Click on Enter
    $("#countryCodeTextInput").keyup(function (event) {
        if (event.keyCode == 13) {
            $("#LookupButton").click();
        }
    });
    //Button Click calls callWebService() Function
    $("#LookupButton").on("click", callWebService);
});

function callWebService() {
    console.log("Certified")
}
