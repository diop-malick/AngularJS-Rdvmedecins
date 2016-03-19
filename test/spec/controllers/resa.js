'use strict';

describe('Controller: ResaCtrl', function () {

  // load the controller's module
  beforeEach(module('rdvmedecinsApp'));

  var ResaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResaCtrl = $controller('ResaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResaCtrl.awesomeThings.length).toBe(3);
  });
});
