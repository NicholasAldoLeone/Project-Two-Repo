$(document).ready(function(){
    $(document).on("click", "#category-btn", function(){
        var object = {
            category: $("#category-search").val()
        }

        console.log(object);
        $.ajax({
            url: "/api/categories/" + object.category,
            type: "get",
            data: object
        }).then(function(){
           
        })
    })
})