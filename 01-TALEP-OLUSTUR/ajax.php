<?php
include_once("../ProcessFunctions.php");
$pf = new ProcessFunctions();
$option = $pf->fnc->post("OPTION");
$baglanti = $pf->bahadir->kanbanDb->create("baglanti");

switch ($option)
{
    case 'GET_PRODUCT':

        $CODE = $pf->fnc->post("CODE");

        $PRODUCT = $baglanti->Select("SELECT NAME FROM PRODUCTS WHERE CODE = '$CODE'")[0];


        echo json_encode($PRODUCT);

    break;

}
?>