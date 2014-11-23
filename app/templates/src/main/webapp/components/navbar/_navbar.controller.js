'use strict';

angular.module('<%=angularAppName%>')
    .controller('NavbarController', function ($scope, $location, $state, Auth, Principal) {
        $scope.isLoggedIn = Principal.isAuthenticated;
        $scope.isInRole = Principal.isInRole;
        $scope.$state = $state;

        $scope.logout = function () {
            Auth.logout();
            $state.go('home');
        };
    });
