/**
 * Panorama
 **/

var billede = document.getElementById("panorama");
var knap = document.getElementById("knap");
// rewind = true / false
  
knap.addEventListener( "click", knapKlik );
  
function knapKlik() {
      
	billede.className += "panorer";
              
}
