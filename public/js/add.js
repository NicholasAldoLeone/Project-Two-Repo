$("#add-btn").on("click", function (event) {
    event.preventDefault();

    var newProduct = {
        product_name: $("#name").val().trim(),
        product_department: $("#department").val().trim(),
        product_cost: $("#cost").val().trim(),
        product_description: $("#description").val().trim(),
        product_reviews: $("#reviews").val().trim()

    }

    console.log(newProduct);

    $.post("/api/new", newProduct).then(function (data) {
        console.log(data);
    })
})