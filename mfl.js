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

$(document).ready(

function(){



jQuery("a").each(function(index){
	    	var href = jQuery(this).prop("href");
	    	if (href && href.indexOf){
		    	var idx1 = href.indexOf("/player?");
		    	var idx2 = href.indexOf("&P=");

		    	if (idx1 != -1 && idx2 > idx1){
		    		var mflId = href.substring(idx2 + "&P=".length);
		    		while (mflId.length > 0 && mflId[0] == '0'){
		    			mflId = mflId.substring(1);
		    		}
		    		 if (MAP_MFL_FP['nfl'][mflId]){
		    		 	var fpId = MAP_MFL_FP['nfl'][mflId];
		    		 	jQuery(this).addClass('fp-player-link').addClass('fp-id-' + fpId);
		    		 }
		    	} 
	    	}
	    });
showBets();

});
  
    function showBets(){
console.log('showing bets');
    jQuery.ajax({
        url : "http://206.189.127.27/api/bets/?format=json",
         dataType: "jsonp",
        async: true,
        success : function (data) {
        console.log(data, 'success');
            data.each(function(item){
                console.log(item);
                jQuery('#bets').append("<tr><td>"+item.id+"</td><td>"+item.title+"</td><td>"+item.first_side_bet+"</td><td>"+item.second_side_bet+"</td></tr>");
            });
        }
        ,
    error: function(xhr, status, error) {
        console.log(status + '; ' + error);
    }
    }).done( function (data) {
        console.log(data);
            data.each(function(item){
                console.log(item);
                jQuery('#bets').append("<tr><td>"+item.id+"</td><td>"+item.title+"</td><td>"+item.first_side_bet+"</td><td>"+item.second_side_bet+"</td></tr>");
            });
        });
}