<!-- For more information goto: https://github.com/klocsson/enturno-widget -->

<style>
@media (min-width: 300px) {
    .vertical-top {
      margin: 0;
      position: absolute;
      top: 5%;
    }
  	.entur-top-padding {
  		padding-top: 5%;
  	}
}
</style>

<div id="container" oc-lazy-load="['/static/enturno-widget/enturno.js']">
  <div class="vertical-top" ng-controller="enturCtrl">
    <div id="direction01" class="entur-top-padding">
			<div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-11">
          <h2 class="text-left">{{stopPlaceName}}</h2>
          <h3 class="text-left">{{lineCode}} - {{directionOne}}</h3>
        </div>
      </div>
			<div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-2" data-ng-repeat="i in range">
  				<h3 ng-style="{{directionOneDepartures[i].isLive}} ? {'color': config.realtime_color} : {'color': ''}">{{directionOneDepartures[i].time | date:'HH:mm:ss'}}</h3>
      	</div>
      </div>
		</div>
	</div>
</div>
