app.controller('listController',function ($scope,userFactory,userService){
    
    $scope.ok = false;

    $scope.doDelete = function (id){
       userService.delete(id);  
       $scope.reloadData();
    };
    
    
    $scope.reloadData = function (){

      userService.selectAll().then(function ok(data){
            console.log(data);
            $scope.data = data.data;
       });
        
    };
    
    $scope.viewForm = function (id){
       $scope.updateId = id;
       
       if($scope.ok === false){
         $scope.ok = true;  
       }else{
         $scope.ok = false;  
       }
    };
    
    $scope.reloadFormUpdate = function (){
      $scope.updateNama = "";
      $scope.updateAlamat = "";
    };
    
    $scope.doUpdate = function (){
        var modelNama  = $scope.updateNama ;
        var modelAlamat = $scope.updateAlamat ;
        
        
        if(modelNama === '' || modelNama === undefined || modelAlamat === '' || modelAlamat === undefined){
            alert('Masih ada form yang kosong');
        }else{
            userFactory.update(modelNama,modelAlamat,$scope.updateId);
            $scope.ok = false;
            $scope.reloadData();
            $scope.reloadFormUpdate();
        }
        
        
        
    };
    
    $scope.reloadData();
    
});