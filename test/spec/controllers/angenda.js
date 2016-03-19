'use strict';

describe('Controller: AngendaCtrl', function () {

  // load the controller's module
  beforeEach(module('rdvmedecinsApp'));

  var AngendaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AngendaCtrl = $controller('AngendaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AngendaCtrl.awesomeThings.length).toBe(3);
  });
});
