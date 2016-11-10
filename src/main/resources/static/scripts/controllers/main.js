angular.module('udemyApp')
  .controller('MainCtrl', function ($scope, $http) {
	  $http({
          method: 'GET',
          url: 'product-service/productsservice/v1/products'
      }).then(function(response) {
    	  $scope.products = response.data;
    	  console.log($scope.products);
      }, function(response) {
    	  console.error('Error requesting races');
      });
  });