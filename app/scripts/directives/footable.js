'use strict';

angular.module("rdvmedecinsApp").directive('footable', ['$timeout', 'utils', function ($timeout, utils) {
  return {
    link: function (scope, element, attrs) {
      utils.debug("directive footable");
      $timeout(function () {
        $("#creneaux").footable();
      })
    }
  }
}]);