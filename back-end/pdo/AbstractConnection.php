<?php

abstract  class AbstractConnection {
    
   
    protected function callConnection($dsn , $username , $password){
       return new PDO($dsn, $username, $password);
    }
}
