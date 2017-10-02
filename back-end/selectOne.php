<?php
include './pdo/CRUD.php';

$crud = new CRUD();

$id = $_GET['id'];

$crud->selectOne($id);