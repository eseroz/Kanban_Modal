<?php
include_once("../ProcessFunctions.php");
$pf = new ProcessFunctions();
$option = $pf->fnc->post("OPTION");
switch ($option)
{
    case 'GET_PRODUCT':

        $CODE = $pf->fnc->post("CODE");

        $PRODUCT = $pf->bahadir->kanbanDb->Select("SELECT NAME FROM PRODUCTS WHERE CODE = '$CODE'")[0];

        echo json_encode($PRODUCT);

    break;

}
?>