<!-- For more information goto: https://github.com/klocsson/enturno-widget -->

<style>
@media (min-width: 992px) {
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
}
</style>

    <h4>{{itemValue('LineCode')}} - {{itemValue('Direction01_FrontDisplay')}}</h4>
<div id="container">

  <div class="row">
    <div class="col-md-3 col-md-border">
      <h4>{{itemValue('RealTime_Departure01_Time1') | date:'HH:mm'}}</h4>
    </div>
    <div class="col-md-3 col-md-border">
      <h4>{{itemValue('RealTime_Departure01_Time2') | date:'HH:mm'}}</h4>
    </div>
    <div class="col-md-3 col-md-border">
      <h4>{{itemValue('RealTime_Departure01_Time3') | date:'HH:mm'}}</h4>
    </div>
    <div class="col-md-3 col-md-border">
      <h4>{{itemValue('RealTime_Departure01_Time4') | date:'HH:mm'}}</h4>
    </div>
    <div class="col-md-3 col-md-border">
      <h4>{{itemValue('RealTime_Departure01_Time5') | date:'HH:mm'}}</h4>
    </div>
  </div>

</div>
