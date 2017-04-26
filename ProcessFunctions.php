<?php
/**
 * Kanban Processs
 * @version 1.0
 * @author Eser
 */

include_once("../../../../../engine/classes/bahadir.php");

class ProcessFunctions
{
    public $fnc;
    public $bahadir;

    function __construct() {
        $this->fnc = new BFunctions();
        $this->bahadir = new Bahadir();
        //$this->fnc->GET_SESSION_GUID();
    }

}