$("#header_import_panel").hide();
$("#footer_import_panel").hide();
$(".userGroupTitle").closest("table").remove();
var _Tarih = new Date();
var _Yil = _Tarih.getFullYear();

var _CURRENT_RECETE_SATIRLAR = [];
var _STOK_KATEGORI_LISTESI = [];
var _STOK_TIP_LISTESI = [];
var _STOK_SINIF_LISTESI = [];
var _OLCU_BIRIMI_LISTESI = [];
var _STOK_STATU_LISTESI = [];
var _RECETELER = [];

var _PARENT_MSSQL_CASE_ID = $("#form\\[PARENT_MSSQL_CASE_ID\\]").val();
var _PARENT_PROCESS_UID = $("#form\\[PARENT_PROCESS_UID\\]").val();
var _PARENT_CASE_ID = $("#form\\[PARENT_CASE_ID\\]").val();
var _PARENT_TASK_UID = $("#form\\[PARENT_TASK_UID\\]").val();
var _PARENT_USER_UID = $("#form\\[PARENT_USER_UID\\]").val();
var _DYNAFORM = $("#48233032258985513709859026653482");
var _AJAX_PATH = "/BAHADIR_BPMS/BPROCESS/02-PROFORMA-OLUSTURMA-SURECI/03-OZEL-URETIM-PROJE-BERATI-HAZIRLAMA/ajax.php";
var _PROCESS_UID = $("#form\\[PROCESS_UID\\]").val();
var _PM_CASE_ID = $("#form\\[CASE_ID\\]").val();
var _TASK_UID = $("#form\\[TASK_UID\\]").val();
var _USER_UID = $("#form\\[USER_UID\\]").val();



function AJAX_CALLBACK(DATA, PROCESS, SENDER) {

    switch (PROCESS) {

    }
}
