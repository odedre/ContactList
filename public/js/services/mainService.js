app.factory('mainService', ['$http', function($http){
  var serviceData = {

    //contact list array
    contactList: [],

    //message to be displayed after adding a contact or if contact list is empty
     message: "",

     //load all contacts to home page
     getAllContacts: function(){

       return $http.get('/home').then(function(res){
         serviceData.fillTheList(res);
      })
      .catch(function(err){
        console.error(err);
      });
    },
    //check if list is empty and populate. If list is empty display emptyList
    fillTheList: function(res) {
      var emptyList = [{lastName: "Doe", firstName:"John", email: "Example E-mail"}];

      if(res.data.length ==0 ) {
        serviceData.contactList = emptyList;
        serviceData.message = 'You have 0 contacts';
      }
      else {
        angular.copy(res.data, serviceData.contactList);
      }
    },

    //add new contact to list
    addContact: function(contact) {
      return $http.post('/addContact/', contact).then(function(data) {
        serviceData.getAllContacts();
        serviceData.message = 'Contact Added!';
      });
    }
  }

  return serviceData;

}]);
