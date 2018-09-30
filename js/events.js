/**
 * JavaScript introduktion: 02
 * klasse: D2 
 * dato: 2018.02.08
 * lektioner: 6
 **/

/**
 * LISTER OG LOOPS
 **/

// hvordan man skriver en liste (filer til et galleri)
var galleri = [
	"foto.jpg",
	"foto02.jpg"
];

// hvordan man afvikler en serie af kommandoer med en funktion
function visBillede( billede ) {
    
	document.write('<article>'
		+ '<img src="images/'
		+ billede
		+ '" alt="billede" class="mini">'
		+ '</article>');
    console.log( "skriver fra billede" );
    
}


// et loop
for (var i=0;i<galleri.length;i++){
    
    visBillede( galleri[i] );
}



// klik klik
document.getElementById("etKlik").onclick = function() {myFunction()};

// her er den funktion, der startes:
function myFunction() {
    document
		.getElementById("etKlik")
		.innerHTML = "Du klikker på mig nu!";
}
