app.factory('userFactory',function($http,$httpParamSerializer){
   var userF = {};
   
   userF.update = function (modelNama , modelAlamat , oldId){
     $http({
        method:"POST",
        url:"/angular_service1/back-end/update.php",
        headers:{'Content-type':'application/x-www-form-urlencoded'},
        data:$httpParamSerializer({
            nama:modelNama,
            alamat:modelAlamat,
            id:oldId
        })
     }).then(function ok(response){
         
     },function error(response){
         
     });  
   };
   
   userF.insert = function (modelNama,modelAlamat,modelGender){
      $http({
          method:'POST',
          url:'/angular_service1/back-end/insert.php',
          headers:{'Content-type':'application/x-www-form-urlencoded'},
          data:$httpParamSerializer({
              nama:modelNama,
              alamat:modelAlamat,
              gender:modelGender
          })
      }).
              then(
              
              function ok(response){
                 console.log(response); 
             },
              
              function error(response){
                 console.log(response);   
              }

      ); 
   };
   
  
  
   
   return userF;
});
