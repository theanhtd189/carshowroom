﻿$(document).ready(function () {
    CKEDITOR.replace("SelectDocument");
    $("#selectImage").click(function () {
        var finder = new CKFinder();
        finder.selectActionFunction = function (fileUrl) {
            $("#ImagePath").val(fileUrl);
        };
        finder.popup();
    });

});