// Deze code zorgt voor het laten zien van de current time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
		var s = today.getSeconds();

		h = checkTime(h);
		m = checkTime(m);
		s = checkTime(s);

    document.getElementById('txt').innerHTML =
    h + ":" + m + ":" + s;
    // Deze code zorgt ervoor dat de achtergrond van de pagina verandert wanneer het dag of nacht is
    if (h < 24 && h >= 12) {
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('artur-dyadchenko-582550-unsplash.jpg')";
    }
    else if (h < 12) {
        document.getElementsByTagName('body')[0].style.backgroundImage = "url('nathan-anderson-108136-unsplash.jpg')";

    }
    var t = setTimeout(startTime, 500);
}
    /*Dit stukje zorgt ervoor dat er bij de tijden 1 t/m 9 een 0
    voor deze getallen verschijnt zodat er altijd 2 cijfers staan*/
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
// Deze code laat de current date zien
var d = new Date();

var month = d.getMonth()+1;
var day = d.getDate();
var year = d.getFullYear();

var currentDate =
    (month<10 ? '0' : '') + month + '/' +
    (day<10 ? '0' : '') + day + '/' +
    year.toString().substring(2);
/*Door middel van deze code wordt er Good day laten zien als het dag is en Good night wanneer
het nacht is. Ook zorgt het ervoor dat deze groeten knipperen en een ander kleurtje krijgen*/
document.getElementById('message').innerHTML = currentDate;

function animate() {
    var hour = new Date().getHours();
    var timeline = new TimelineMax({ repeat: -1, ease: Power1.easeInOut });

	if (hour < 24 && hour >= 12 ) {
	    document.getElementById("morning").innerHTML = "Good day!";
	    timeline.to('#morning', 1, {color: 'black' });
	}
	else if (hour < 12) {
	    document.getElementById("night").innerHTML = "Good night!";
      timeline.to('#night', 1, { top: 0, color: 'red' });

	}
}
startTime();
animate();
