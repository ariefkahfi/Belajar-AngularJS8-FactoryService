<?php
include './pdo/CRUD.php';

$nama = $_POST['nama'];
$alamat = $_POST['alamat'];
$gender = $_POST['gender'];

$crud = new CRUD();

$crud->insertData($nama, $alamat,$gender);
