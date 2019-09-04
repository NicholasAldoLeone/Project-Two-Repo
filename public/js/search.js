$(document).ready(function(){
    $(document).on("click", "#category-btn", function(){
        var object = {
            category: $("#category-search").val()
        }

        console.log(object);
        $.ajax({
            url: "/api/categories/" + object.category,
            method: "GET"
        }).then(function(){
           window.location.href = "/api/categories/" + object.category;
        })
    })
})