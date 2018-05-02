$(document).ready(
function(){

  var MAP_YAHOO_FP = {'nfl': {},'mlb': {},'nba': {}};
var MAP_ESPN_FP = {'nfl': {},'mlb': {},'nba': {}};
var MAP_CBS_FP = {'nfl': {},'mlb': {},'nba': {}};
var MAP_NFL_FP = {'nfl': {},'mlb': {},'nba': {}};
var MAP_MFL_FP = {'nfl': {},'mlb': {},'nba': {}};
var MAP_RT_FP = {'nfl': {},'mlb': {},'nba': {}};
var MAP_FLEA_FP = {'nfl': {},'mlb': {},'nba': {}};

for (var i=0; i<NFL_PLAYER_DATA.players.length; i++){
	var p = NFL_PLAYER_DATA.players[i];
	if (p.y){MAP_YAHOO_FP['nfl'][String(p.y)] = p.fp}
	if (p.e){MAP_ESPN_FP['nfl'][String(p.e)] = p.fp}
	if (p.c){MAP_CBS_FP['nfl'][String(p.c)] = p.fp}
	if (p.n){MAP_NFL_FP['nfl'][String(p.n)] = p.fp}
	if (p.m){MAP_MFL_FP['nfl'][String(p.m)] = p.fp}
	if (p.rt){MAP_RT_FP['nfl'][String(p.rt)] = p.fp}
	if (p.ff){MAP_FLEA_FP['nfl'][String(p.ff)] = p.fp}
}
});
  
