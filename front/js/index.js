$(document).ready(function () {
    $("#enviar").click(function () {
        let rosto = $("#dropdown").val();
        $.ajax({
            type: "GET",
            url: "command?command=".concat(rosto),
            success: function (res) {
                console.log(res);
            }
        });
    });
});