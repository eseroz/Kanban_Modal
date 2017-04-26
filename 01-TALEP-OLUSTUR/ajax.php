<?php
include_once("../ProcessFunctions.php");
$pf = new ProcessFunctions();
$option = $pf->fnc->post("OPTION");


switch ($option)
{
    case 'GET_PRODUCT':

        $CODE = $pf->fnc->post("CODE");
        $PRODUCT = $pf->bahadir->kanbanDb->Select("SELECT ID,NAME FROM PRODUCTS WHERE CODE = '$CODE'")[0];
        echo json_encode($PRODUCT);

    break;

    case 'INSERT_ORDER':

        $ORDER_LIST = json_decode($pf->fnc->post("ORDER_LIST"));
        $ORDER_CODE = $pf->fnc->post("ORDER_CODE");

        foreach ($ORDER_LIST as $ORDER_ITEM)
        {
            $PRODUCT_ID = $ORDER_ITEM->PRODUCT_ID;
            $QUANTITY = $ORDER_ITEM->MIKTAR;
            $INSERT_ORDER_ITEM = $pf->bahadir->mssqlDb->ExexQuery("INSERT INTO ORDERS (ORDER_CODE,PRODUCT_ID,QUANTITY) VALUES('$ORDER_CODE', $PRODUCT_ID, $QUANTITY)");
        }


        break;

}
?>