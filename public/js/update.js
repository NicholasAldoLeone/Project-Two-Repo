$(document).ready(function(){
    $(document).on("click", "#update-btn", function(){
        console.log("test")
        var product_id = $(this).val();

        var updateProduct = {
            id: $(this).val(),
            product_name: $("#" + product_id + "product-name").val(),
            product_department: $("#" + product_id + "product-department").val(),
            product_cost: $("#" + product_id + "product-price").val(),
            total_stock: $("#" + product_id + "total-stock").val(),
            product_description: $("#" + product_id + "description").val(),
            product_image: "default Image"

        }

        console.log(updateProduct);
        $.ajax({
            url: "/api/update/",
            method: "PUT",
            data: updateProduct
        }).then(function(){
            console.log("product updated!");
            location.reload();
        })
    })
})