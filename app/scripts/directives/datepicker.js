'use strict';


///Datepicker
angular.module('rdvmedecinsApp')
    .directive("mydatepicker", function() {
        return {
            restrict: "E",
            scope: {
                ngModel: "=",
                dateOptions: "=",
                opened: "=",
            },
            link: function($scope, element, attrs) {

                //ui-bootstrap Datepicker options
                $scope.dateOptions = {
                    dateDisabled: disabled,
                    formatYear: 'yy',
                    showWeeks: false,
                    maxDate: new Date(2020, 5, 22),
                    minDate: new Date(),
                };
                $scope.inlinedateOptions = {
                    formatYear: 'yyyy',
                    minDate: new Date(),
                    showWeeks: false
                };

                $scope.open = function(event) {
                    console.log("open");
                    event.preventDefault();
                    event.stopPropagation();
                    $scope.opened = true;
                };

                // Disable weekend selection
                function disabled(data) {
                    var date = data.date,
                        mode = data.mode;
                    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
                }

                $scope.formats = ['dd-MMMM-yyyy','dd/MM/yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
                $scope.format = $scope.formats[1];
                $scope.altInputFormats = ['M!/d!/yyyy'];

                $scope.clear = function() {
                    $scope.ngModel = null;
                };
            },
            templateUrl: 'views/datepicker.html'
        }
    })

// plugin pickadate
.directive('pluginPickadate', function() {
    return {
        restrict: 'C',
        scope: {
            options: "=datepickerOptions"
        },
        link: function(scope, element, attrs) {
            $(element).pickadate(scope.options);
        }
    }
});