

  angular
       .module('users')
       .controller('UserController', [
          'userService', '$mdSidenav', '$mdBottomSheet', '$timeout', '$log',
          UserController
       ]);

  /**
   * Main Controller for the Angular Material Starter App
   * @param $scope
   * @param $mdSidenav
   * @param avatarsService
   * @constructor
   */
  function UserController( userService, $mdSidenav, $mdBottomSheet, $timeout, $log ) {
    var self = this;

    self.selected     = null;
    self.users        = [ ];
    self.selectUser   = selectUser;
    self.toggleList   = toggleUsersList;
    self.share = share;

    // Load all registered users

    userService
          .loadAllUsers()
          .then( function( users ) {
            self.users    = [].concat(users);
            self.selected = users[0];
          });

    // *********************************
    // Internal methods
    // *********************************

    /**
     * Hide or Show the 'left' sideNav area
     */
    function toggleUsersList() {
      $mdSidenav('left').toggle();
    }

    /**
     * Select the current avatars
     * @param menuId
     */
    function selectUser ( user ) {
      self.selected = angular.isNumber(user) ? $scope.users[user] : user;
    }

    /**
     * Show the Contact view in the bottom sheet
     */
    function share(selectedUser) {

        $mdBottomSheet.show({
          controller: UserSheetController,
          controllerAs  : "vm",
          templateUrl   : './bottomsheet.html',
          controller    : [ '$mdBottomSheet', UserSheetController],
          parent        : angular.element(document.querySelector('#content'))
      
        });

        /**
         * User ContactSheet controller
         */
        function UserSheetController() {
          this.user = selectedUser;
          this.items = [
            { name: 'Phone'       , icon: 'phone'       , icon_url: 'svg/phone.svg'},
            { name: 'Twitter'     , icon: 'twitter'     , icon_url: 'svg/twitter.svg'},
            { name: 'Google+'     , icon: 'google_plus' , icon_url: 'svg/google_plus.svg'},
            { name: 'Hangout'     , icon: 'hangouts'    , icon_url: 'svg/hangouts.svg'}
          ];
          this.performAction = function(action) {
            // The actually contact process has not been implemented...
            // so just hide the bottomSheet

            $mdBottomSheet.hide();
          };
        }
    }

  }