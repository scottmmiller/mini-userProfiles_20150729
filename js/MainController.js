(function() {
   angular
   .module('userProfiles')
   .controller('MainController', MainController);

   function MainController(mainService) {

      var vm = this;

      vm.getUsers = getUsers;

      function getUsers() {
         vm.users = mainService.getUsers();
      };

      vm.getUsers();

   };
})();
