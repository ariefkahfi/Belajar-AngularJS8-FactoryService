<?php
include './pdo/CRUD.php';


$id = $_GET['id'];

$crud = new CRUD();

$crud->delete($id);