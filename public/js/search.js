$(document).ready(function () {
    $(document).on("click", "#category-btn", function () {
        var object = {
            category: $("#category-search").val()
        }

        console.log(object);
        $.ajax({
            url: "/api/categories/" + object.category,
            method: "GET"
        }).then(function () {
            window.location.href = "/api/categories/" + object.category;
        })
    })

    $(document).on("click", "#name-btn", function () {
        var object = {
            name: $("#name-search").val()
        }

        console.log(object);
        $.ajax({
            url: "/api/names/" + object.name,
            method: "GET"
        }).then(function () {
            window.location.href = "/api/names/" + object.name;
        })
    })
})