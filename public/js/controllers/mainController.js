app.controller('mainCtrl', ['$scope', 'mainService', '$state', function($scope, mainService, $state){

  //getting data from service
  $scope.contactList = mainService.contactList;
  $scope.message = mainService.message;

  //add a new contact from the form and create a "contact" object
  $scope.addContact = function (e) {

    var contact = {
      firstName: $scope.fName,
      lastName: $scope.lName,
      email: $scope.email
    };

    //pass data to service, navigate to home page and invoke population of list
    mainService.addContact(contact);
    $state.go('home');
    mainService.getAllContacts();
  },

  //navigate from "home" to "addContact" page
  $scope.goToAdd = function() {
    $state.go('addContact');

  },

  //navigate from "addContact" to "home" page 
  $scope.goHome = function() {
    $state.go('home');
    mainService.message ="";
  }


}]);
