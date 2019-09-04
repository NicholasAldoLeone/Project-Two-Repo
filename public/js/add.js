$(document).ready(function () {
    $("#file").on("change", function () {
        readURL(this);
        console.log("File changed");
    });

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $("#img").attr("src", e.target.result);
            };

            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#add-product").click(function () {
        var fd = new FormData();
        var file = $("#file").prop("files")[0];
        fd.append("file", file);
        fd.append("name", $("#product_name").val().trim())
        fd.append("department", $("#product_department").val())
        fd.append("cost", $("#product_cost").val())
        fd.append("stock", $("#total_stock").val())
        fd.append("description", $("#product_description").val().trim())
        // console.log(fd);


        $.ajax({
            url: "/product",
            type: "post",
            data: fd,
            contentType: false,
            processData: false
        }).then(function(res) {
            console.log(res);
            var newProduct = {
                product_name: fd.get("name"),
                product_department: fd.get("department"),
                product_cost: fd.get("cost"),
                total_stock: fd.get("stock"),
                product_description: fd.get("description"),
                product_image: res.location
            }
            location.reload();
        });
    });

    $(document).on("click", "#post-btn", function(){
        var review  = {
            title: "user",
            body: $("#review-text").val(),
            ProductId: $(this).val()
            
        }

        $.ajax({
            url: "/api/review",
            type: "post",
            data: review,
        }).then(function(){
            location.reload();
        })
    })
});
