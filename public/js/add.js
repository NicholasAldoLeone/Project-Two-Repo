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
        fd.append("description", $("#product_description").val().trim())
        console.log(fd);


        $.ajax({
            url: "/product",
            type: "post",
            data: fd,
            contentType: false,
            processData: false
        }).then(function (res) {
            var newProduct = {
                name: fd.get("name"),
                department: fd.get("department"),
                cost: fd.get("cost"),
                description: fd.get("description"),
                image: res.imageUrl

            }
        });
    });
});
