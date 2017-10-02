<?php
     require 'AbstractConnection.php';


class CRUD extends AbstractConnection {
    
    
        
    public function createConnection (){
        return parent::callConnection("mysql:host=localhost;dbname=angular_service1", "arief", "arief");
    }
    
    
    public function insertData($nama,$alamat,$gender){
        
        $prepare = $this->createConnection()->prepare("insert into user (nama,alamat,gender) values (:nama,:alamat,:gender)");
     
        $prepare->bindParam("nama", $nama, PDO::PARAM_STR);
        $prepare->bindParam("alamat", $alamat, PDO::PARAM_STR);
        $prepare->bindParam("gender", $gender,PDO::PARAM_STR);
        
        $b = $prepare->execute();
        
        if($b){
           echo "Data berhasil dimasukkan ke dalam database"; 
        }else{
           echo "Data gagal dimasukkan ke dalam database" ;
        }
    }
    
    public function update($nama,$alamat,$oldId){
        $st=  $this->createConnection()->prepare("update user set nama = ? , alamat = ? where id = ? ");
        $st->bindParam(1, $nama);
        $st->bindParam(2, $alamat);
        $st->bindParam(3, $oldId);
        
        $st->execute();
        
    }
    
    public function delete($id){
        $st = $this->createConnection()->prepare("delete from user where id = ? ");
        $st->bindParam(1, $id, PDO::PARAM_INT);
        $st->execute();
    }
    
    public function selectOne($id){
       $st = $this->createConnection()->prepare("select * from user where id = ? "); 
       $st->bindParam(1, $id, PDO::PARAM_INT);
       $st->execute();
       
       $rs = $st->fetch(PDO::FETCH_ASSOC);
       
       echo json_encode($rs);
       
    }
    
    public function selectData(){
        $arr = array();
        
        $st = $this->createConnection()->query("select * from user");
        
        $st->execute();
        
        while($rs = $st->fetch(PDO::FETCH_ASSOC)){
            array_push($arr, $rs);
        }
        
        echo json_encode($arr);
    }
    
}
