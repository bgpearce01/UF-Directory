angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {

    };
    $scope.deleteListing = function(index) {
      Listings.splice(index, 1); //splice to delete listing 
    };
    $scope.showDetails = function(index) {
      
    };
  }
]);