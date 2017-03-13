app.factory('mainService', ['$http', function($http){
  var serviceData = {
    contactList: [],

    //  showSuccessMessage: true,

     getAllContacts: function(){
       console.log('getAllContacts');
       var emptyList = {lastName: "Example", email: "you have 0 contacts"};
       return $http.get('/home').then(function(res){
        res.data.length===0 ? serviceData.contactList.push(emptyList) : angular.copy(res.data, serviceData.contactList);
        console.log(res.data.length);
      })
      .catch(function(err){
        console.error(err);
      });
    },

    addContact: function(contact) {
      console.log(contact);
      return $http.post('/addContact/', contact).then(function(data) {
        console.log(contact);
        serviceData.getAllContacts();
        console.log(serviceData.contactList);
        console.log(data.data);

      });
    }
  }


  return serviceData;


}]);
