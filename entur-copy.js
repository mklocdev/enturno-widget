(function() {

  'use strict';
  angular
  .module('app', [])
  .controller('enturCtrl', ['$scope', 'OHService', function($scope, OHService) {

    var depDirOne1 = {
        time: OHService.getItem('RealTime_Departure01_Time1').state,
        isLive: OHService.getItem('RealTime_Departure01_IsReal1').state
    };
    var depDirOne2 = {
        time: OHService.getItem('RealTime_Departure01_Time2').state,
        isLive: OHService.getItem('RealTime_Departure01_IsReal2').state
    };
    var depDirOneO3 = {
        time: OHService.getItem('RealTime_Departure01_Time3').state,
        isLive: OHService.getItem('RealTime_Departure01_IsReal3').state
    };
    var depDirOne4 = {
        time: OHService.getItem('RealTime_Departure01_Time4').state,
        isLive: OHService.getItem('RealTime_Departure01_IsReal4').state
    };
    var depDirOne5 = {
        time: OHService.getItem('RealTime_Departure01_Time5').state,
        isLive: OHService.getItem('RealTime_Departure01_IsReal5').state
    };
    $scope.departuresDirOne = [depDirOne1, depDirOne2, depDirOne3, depDirOne4, depDirOne5];

    OHService.onUpdate($scope, 'RealTime_Departure01_Time1', function () {
        var depDirOne1 = {
            time: OHService.getItem('RealTime_Departure01_Time1').state,
            isLive: OHService.getItem('RealTime_Departure01_IsReal1').state
        };
        var depDirOne2 = {
            time: OHService.getItem('RealTime_Departure01_Time2').state,
            isLive: OHService.getItem('RealTime_Departure01_IsReal2').state
        };
        var depDirOneO3 = {
            time: OHService.getItem('RealTime_Departure01_Time3').state,
            isLive: OHService.getItem('RealTime_Departure01_IsReal3').state
        };
        var depDirOne4 = {
            time: OHService.getItem('RealTime_Departure01_Time4').state,
            isLive: OHService.getItem('RealTime_Departure01_IsReal4').state
        };
        var depDirOne5 = {
            time: OHService.getItem('RealTime_Departure01_Time5').state,
            isLive: OHService.getItem('RealTime_Departure01_IsReal5').state
        };
        $scope.departuresDirOne = [depDirOne1, depDirOne2, depDirOne3, depDirOne4, depDirOne5];
    });
}]);
})();
