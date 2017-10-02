app.service('userService',function($http,$q){
  
    
   
    
   this.delete = function (modelId){
      $http({
        method:"GET",
        url:"/angular_service1/back-end/delete.php",
        params:{id:modelId}
      }).then(function ok(response){
          console.log(response);
      },function error(response){
          console.log(response);
      });  
   };
   
  
   
   this.selectAll = function (){
      
      var deferred = $q.defer();
      
      $http.get('/angular_service1/back-end/select.php').then(
              function ok(response){
                  deferred.resolve(response);
              },function error(response){
                  deferred.reject(response);
              });
      
      return deferred.promise;
      
  };
    
   this.findOne = function (modelId){
      
      var defer = $q.defer();
       
      $http({
        method:"GET",
        url:"/angular_service1/back-end/selectOne.php",
        params:{id:modelId}
      }).then(
              
      function ok(response){
        defer.resolve(response); 
        //console.log(response);          
      },
  
      function error(response){
        defer.reject(response);
        //console.log(response);  
      }); 
   
      return defer.promise;
   };
   
});