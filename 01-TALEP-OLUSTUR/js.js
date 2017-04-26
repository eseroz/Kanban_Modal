$("#header_import_panel").hide();
$("#footer_import_panel").hide();
$(".userGroupTitle").closest("table").remove();
var _Tarih = new Date();
var _Yil = _Tarih.getFullYear();

var _TALEP_LISTESI = [];

//var _PARENT_MSSQL_CASE_ID = $("#form\\[PARENT_MSSQL_CASE_ID\\]").val();
//var _PARENT_PROCESS_UID = $("#form\\[PARENT_PROCESS_UID\\]").val();
//var _PARENT_CASE_ID = $("#form\\[PARENT_CASE_ID\\]").val();
//var _PARENT_TASK_UID = $("#form\\[PARENT_TASK_UID\\]").val();
//var _PARENT_USER_UID = $("#form\\[PARENT_USER_UID\\]").val();
//var _DYNAFORM = $("#48233032258985513709859026653482");
var _AJAX_PATH = "/BAHADIR_BPMS/BPROCESS/00-KANBAN/01-TALEP-OLUSTUR/ajax.php";
//var _PROCESS_UID = $("#form\\[PROCESS_UID\\]").val();
//var _PM_CASE_ID = $("#form\\[CASE_ID\\]").val();
//var _TASK_UID = $("#form\\[TASK_UID\\]").val();
//var _USER_UID = $("#form\\[USER_UID\\]").val();

$(document).ready(function () {

    setTimeout(function () {
        $(".page_loader_container").remove();
    }, 5000);


    $("[name='txtUrunKodu']").focusout(function () {

        var formData = new FormData();
        formData.append("OPTION", "GET_PRODUCT");
        formData.append("CODE", $(this).val());

        $.ajax({
            type: 'POST',
            dataType: 'json',
            data: formData,
            processData: false,
            contentType: false,
            url: _AJAX_PATH,
            success: function (PRODUCT) {
                $("[name='txtUrunKodu']").attr("product-id", PRODUCT.ID);
                $("[name='txtAciklama']").val(PRODUCT.NAME);
                $("[name='txtMiktar']").focus();
            },
            error: function (a,b,c) {
                console.log(a);
                console.log(b);
                console.log(c);
            }
        });
    });

    $("[name='btnListeyeEkle']").click(function () {

        var PRODUCT_ID = $("[name='txtUrunKodu']").attr("product-id");
        var URUN_KODU = $("[name='txtUrunKodu']").val();
        var ACIKLAMA = $("[name='txtAciklama']").val();
        var MIKTAR = $("[name='txtMiktar']").val();

        if (URUN_KODU != "" && ACIKLAMA != "" && MIKTAR != "") {
            var obj = { 'PRODUCT_ID':PRODUCT_ID, 'URUN_KODU': URUN_KODU, 'ACIKLAMA': ACIKLAMA, 'MIKTAR': MIKTAR };
            _TALEP_LISTESI.push(obj);
            $("tbody").find("tr").remove();
            for (var i = 0; i < _TALEP_LISTESI.length; i++) {
                $("tbody").append('<tr><td>' + (i + 1) + '</td><td style="width:150px;">' + _TALEP_LISTESI[i].URUN_KODU + '</td><td>' + _TALEP_LISTESI[i].ACIKLAMA + '</td><td style="width:150px;">' + _TALEP_LISTESI[i].MIKTAR + '</td><td style="width:150px;"></td></tr>');
            }
        }

    });

    var $submit = $("#form\\[btnSubmit\\]");
    $submit.click(function () {
       
        var formData = new FormData();
        formData.append("OPTION", "INSERT_ORDER");
        formData.append("ORDER_CODE", $("#form\\[SIPARIS_KODU\\]").val());
        formData.append("ORDER_LIST", JSON.stringify(_TALEP_LISTESI));

        $.ajax({
            type: 'POST',
            dataType: 'text',
            data: formData,
            processData: false,
            contentType: false,
            url: _AJAX_PATH,
            success: function (RESULT) {
                console.log(RESULT);
            },
            error: function (a, b, c) {
                console.log(a);
                console.log(b);
                console.log(c);
            }
        });

    });
});

