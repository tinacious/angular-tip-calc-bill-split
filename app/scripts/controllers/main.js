'use strict';

angular.module('tipCalc')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.tip = 20;
    $scope.people = 1;
    $scope.amount = 100;

    // tipper
    $scope.updateTip = function() {
      $scope.tipAmount = $scope.amount * $scope.tip/100;
      $scope.total = $scope.amount + $scope.tipAmount;
      $scope.costPerPerson = $scope.total / $scope.people;
    };

    // bill splitter
    $scope.splitBill = false;

    $scope.toggleSplitBill = function() {
      $scope.splitBill = $scope.splitBill === false ? true : false;
    };

    // facebook share link
    $scope.url = 'http%3A%2F%2F' + $location.host() + $location.path();
  });