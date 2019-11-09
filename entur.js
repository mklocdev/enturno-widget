(function() {

  'use strict';
  angular
  .module('app', [])
  .controller('enturCtrl', ['$scope', 'OHService', function($scope, OHService) {

    this.$onInit = function() {
        $scope.lineCode = OHService.getItem('LineCode').state
        $scope.stopPlaceName = OHService.getItem('StopPlaceName').state
        $scope.transportMode = OHService.getItem('TransportMode').state
        $scope.directionOne = OHService.getItem('Direction01_FrontDisplay').state
        $scope.directionTwo = OHService.getItem('Direction02_FrontDisplay').state
        $scope.directionOneDepartures = getDirectionOneDepartures($scope, OHService);
        $scope.directionTwoDepartures = getDirectionTwoDepartures($scope, OHService);

        var keys = Object.keys($scope);

        if (!keys) {
            $scope.maxDepartures = 5;
        } else {
            $scope.maxDepartures = $scope.config.displayed_departures;
        }

        var total = parseInt($scope.maxDepartures);
        $scope.tot = keys;
        var range = [];
        for(var i=0;i<total;i++) {
          range.push(i);
        }
        $scope.range = range;
    }

    OHService.onUpdate($scope, 'RealTime_Departure01_Time1', function () {
        $scope.directionOneDepartures = getDirectionOneDepartures($scope, OHService);
        $scope.directionTwoDepartures = getDirectionTwoDepartures($scope, OHService);
    });
}]);

function getDirectionOneDepartures(scope, OHService) {
    var depDirOne1 = {
        time: OHService.getItem('RealTime_Departure01_Time1').state,
        isLive: OHService.getItem('RealTime_Departure01_IsReal1').state
    };
    var depDirOne2 = {
        time: OHService.getItem('RealTime_Departure01_Time2').state,
        isLive: OHService.getItem('RealTime_Departure01_IsReal2').state
    };
    var depDirOne3 = {
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
    return [depDirOne1, depDirOne2, depDirOne3, depDirOne4, depDirOne5];
}

function getDirectionTwoDepartures(scope, OHService) {
    var depDirTwo1 = {
        time: OHService.getItem('RealTime_Departure02_Time1').state,
        isLive: OHService.getItem('RealTime_Departure02_IsReal1').state
    };
    var depDirTwo2 = {
        time: OHService.getItem('RealTime_Departure02_Time2').state,
        isLive: OHService.getItem('RealTime_Departure02_IsReal2').state
    };
    var depDirTwo3 = {
        time: OHService.getItem('RealTime_Departure02_Time3').state,
        isLive: OHService.getItem('RealTime_Departure02_IsReal3').state
    };
    var depDirTwo4 = {
        time: OHService.getItem('RealTime_Departure02_Time4').state,
        isLive: OHService.getItem('RealTime_Departure02_IsReal4').state
    };
    var depDirTwo5 = {
        time: OHService.getItem('RealTime_Departure02_Time5').state,
        isLive: OHService.getItem('RealTime_Departure02_IsReal5').state
    };
    return [depDirTwo1, depDirTwo2, depDirTwo3, depDirTwo4, depDirTwo5];
}
})();
