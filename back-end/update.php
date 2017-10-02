<?php

include './pdo/CRUD.php';

$oldId = $_POST['id'];
$nama = $_POST['nama'];
$alamat = $_POST['alamat'];

$crud = new CRUD();

$crud->update($nama, $alamat, $oldId);


