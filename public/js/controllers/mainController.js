app.controller('mainCtrl', ['$scope', 'mainService', '$state', function($scope, mainService, $state){
  console.log('arrrr');
  // console.log(mainService.showSuccessMessage);
  // $scope.showSuccessMessage = mainService.showSuccessMessage;
  $scope.contactList = mainService.contactList;

  $scope.addContact = function (e) {
    // console.log($state.params);
    console.log('add contact invoked!');
    if ($scope.name === '') { return; }

    var contact = {
      firstName: $scope.fName,
      lastName: $scope.lName,
      email: $scope.email
    };
    // mainService.showSuccessMessage = true;
    // console.log("success-- " + showSuccessMessage);
    console.log(contact);
    mainService.addContact(contact);
    $state.go('home');
    mainService.getAllContacts();
    // document.getElementById('close').style.display = "block";

  },

  $scope.toggleMessage = function() {
    // mainService.showSuccessMessage = false;
    // console.log("toggleMessage: " + mainService.showSuccessMessage);
    $state.go('addContact');

  },

  $scope.goHome = function() {
    console.log('sdsdsd');
    $state.go('home');
  }


}]);
