app.factory('mainService', ['$http', function($http){
  var serviceData = {

    //contact list
    contactList: [],
    //message to be displayed if contact list is empty
     message: "",

     //load all contacts to home page
     getAllContacts: function(){
       console.log('getAllContacts');

       return $http.get('/home').then(function(res){
         serviceData.fillTheList(res);
      })
      .catch(function(err){
        console.error(err);
      });
    },
    //check if list is empty and populate
    fillTheList: function(res) {
      var emptyList = [{lastName: "Doe", firstName:"John", email: "Example E-mail"}];

      if(res.data.length ==0 ) {
        serviceData.contactList = emptyList;
        serviceData.message = 'You have 0 contacts';
      }
      else {
        angular.copy(res.data, serviceData.contactList);
        serviceData.message = '';
      }
    },

    addContact: function(contact) {
      console.log(contact);
      return $http.post('/addContact/', contact).then(function(data) {
        console.log(contact);
        serviceData.getAllContacts();
        console.log(serviceData.contactList);
        console.log(data.data);
        serviceData.message = 'Contact Added!'
      });
    }
  }


  return serviceData;


}]);
