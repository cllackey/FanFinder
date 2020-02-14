var team_data = {};

team_data.nfl = [{"name":"Arizona Cardinals","logo_image":"images/nfl/arizona_cardinals.png"},{"name":"Atlanta Falcons","logo_image":"images/nfl/atlanta_falcons.png"},{"name":"Baltimore Ravens","logo_image":"images/nfl/baltimore_ravens.png"},{"name":"Buffalo Bills","logo_image":"images/nfl/buffalo_bills.png"},{"name":"Carolina Panthers","logo_image":"images/nfl/carolina_panthers.png"},{"name":"Chicago Bears","logo_image":"images/nfl/chicago_bears.png"},{"name":"Cincinnati Bengals","logo_image":"images/nfl/cincinnati_bengals.png"},{"name":"Cleveland Browns","logo_image":"images/nfl/cleveland_browns.png"},{"name":"Dallas Cowboys","logo_image":"images/nfl/dallas_cowboys.png"},{"name":"Denver Broncos","logo_image":"images/nfl/denver_broncos.png"},{"name":"Detroit Lions","logo_image":"images/nfl/detroit_lions.png"},{"name":"Green Bay Packers","logo_image":"images/nfl/green_bay_packers.png"},{"name":"Houston Texans","logo_image":"images/nfl/houston_texans.png"},{"name":"Indianapolis Colts","logo_image":"images/nfl/indianapolis_colts.png"},{"name":"Jacksonville Jaguars","logo_image":"images/nfl/jacksonville_jaguars.png"},{"name":"Kansas City Chiefs","logo_image":"images/nfl/kansas_city_chiefs.png"},{"name":"Los Angeles Chargers","logo_image":"images/nfl/los_angeles_chargers.png"},{"name":"Los Angeles Rams","logo_image":"images/nfl/los_angeles_rams.png"},{"name":"Miami Dolphins","logo_image":"images/nfl/miami_dolphins.png"},{"name":"Minnesota Vikings","logo_image":"images/nfl/minnesota_vikings.png"},{"name":"New England Patriots","logo_image":"images/nfl/new_england_patriots.png"},{"name":"New Orleans Saints","logo_image":"images/nfl/new_orleans_saints.png"},{"name":"New York Giants","logo_image":"images/nfl/new_york_giants.png"},{"name":"New York Jets","logo_image":"images/nfl/new_york_jets.png"},{"name":"Oakland Raiders","logo_image":"images/nfl/oakland_raiders.png"},{"name":"Philadelphia Eagles","logo_image":"images/nfl/philadelphia_eagles.png"},{"name":"Pittsburgh Steelers","logo_image":"images/nfl/pittsburgh_steelers.png"},{"name":"San Francisco 49ers","logo_image":"images/nfl/san_francisco_49ers.png"},{"name":"Seattle Seahawks","logo_image":"images/nfl/seattle_seahawks.png"},{"name":"Tampa Bay Buccaneers","logo_image":"images/nfl/tampa_bay_buccaneers.png"},{"name":"Tennessee Titans","logo_image":"images/nfl/tennessee_titans.png"},{"name":"Washington Redskins","logo_image":"images/nfl/washington_redskins.png"}];



var app = angular.module("app", [])


app.controller("MainCtrl", function($scope) {
	$scope.selected_teams = new Set();
	$scope.teams = team_data.nfl;
});