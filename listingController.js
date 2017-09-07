angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
        Listings.unshift({
              code: $scope.addItem.code.toUpperCase(),
              name: $scope.addItem.name,
              address: $scope.addItem.address,
              coordinates: {
                latitude: $scope.addItem.latitude,
                longitude: $scope.addItem.longitude,
              }
            });
    };
    $scope.deleteListing = function(index) {
      Listings.splice(index, 1); //splice to delete listing 
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = {
          name:  Listings[index].code + " " +  Listings[index].name,
          address: Listings[index].address,
          coordinates: "Longitude: " + Listings[index].coordinates.longitude + ", Latitude: " + Listings[index].coordinates.latitude
        }
    };
  }
]);