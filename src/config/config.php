<?php

//pastas
define('CONTROLLER_PATH' , realpath(dirname(__FILE__) . '/../controller'));
define('VIEW_PATH', realpath(dirname(__FILE__) . '/../view'));
define('TEMPLATE_PATH', realpath(dirname(__FILE__) . '/../view/template'));

//Arquivos
require_once(realpath(dirname(__FILE__) . '/loader.php'));