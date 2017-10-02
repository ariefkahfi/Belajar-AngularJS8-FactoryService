app.controller('formController',function ($scope,userFactory){
    
    function cleanUp(){
       $scope.nama = "";
       $scope.alamat = "";
       $scope.gender = "";
    }
    
    
    $scope.submitInsert = function (){
          var modelNama = $scope.nama;
          var modelAlamat = $scope.alamat;
          var modelGender = $scope.gender;
          
          
          if(modelNama === '' || modelNama === undefined  
                  || modelAlamat === '' || modelAlamat === undefined 
                  || modelGender === '' || modelGender === undefined){
              alert('Masih ada form yang kosong');
          }else{
              userFactory.insert(modelNama,modelAlamat,modelGender);
              cleanUp();
          }
          
        };
});


