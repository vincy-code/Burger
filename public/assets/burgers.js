$(document).ready(function () {
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".devour-btn").on("click", function () {
        var id = $(this).attr("data-burger");
        var devBurger = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devBurger
        }).then(
            function () {
                console.log("you ate the burger!");
                location.reload();
            }
        );
    })
});