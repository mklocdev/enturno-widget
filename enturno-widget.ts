<!-- For more information goto: https://github.com/klocsson/enturno-widget -->

<style>
@media (min-width: 300px) {
    .col-md-border:not(:last-child) {
			border-right: 1px solid #d7d7d7;
    }
    .col-md-border + .col-md-border {
			border-left: 1px solid #d7d7d7;
			margin-left: -1px;
    }
  	.entur-to-upper:first-letter {
    	text-transform: uppercase;
		}
  	.entur-condition {
  		height: 2em;
 		}
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

<div id="container">
  <div class="vertical-top">
    <div id="direction01">
			<div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-11">
          <h2 class="text-left">{{itemValue('StopPlaceName')}}</h2>
          <div id="line-direction" class="entur-top-padding">
						<h3 class="text-left">{{itemValue('LineCode')}} - {{itemValue('Direction01_FrontDisplay')}}</h3>
          </div>
        </div>
      </div>
			<div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure01_Time1') | date:'HH:mm'}}</h3>
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure01_Time2') | date:'HH:mm'}}</h3>
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure01_Time3') | date:'HH:mm'}}</h3>
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure01_Time4') | date:'HH:mm'}}</h3>
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure01_Time5') | date:'HH:mm'}}</h3>
        </div>
		</div>
    <div id="direction02" class="entur-top-padding">
			<div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-11">
          <h3 class="text-left">{{itemValue('LineCode')}} - {{itemValue('Direction02_FrontDisplay')}}</h3>
        </div>
      </div>
			<div class="row">
        <div class="col-md-1">
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure02_Time1') | date:'HH:mm'}}</h3>
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure02_Time2') | date:'HH:mm'}}</h3>
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure02_Time3') | date:'HH:mm'}}</h3>
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure02_Time4') | date:'HH:mm'}}</h3>
        </div>
        <div class="col-md-2">
          <h3 class="text-left">{{itemValue('RealTime_Departure02_Time5') | date:'HH:mm'}}</h3>
        </div>
		</div>
	</div>
</div>
