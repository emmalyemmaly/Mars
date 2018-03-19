// Dit is de TweenMax code die ervoor zorgt dat de omeet, mars en de maan bewegen
TweenMax.from("#moon", 4, {opacity:0, right: 1000, rotation: 360, repeat: -1, repeatDelay: 5, delay: 3})
TweenMax.from("#komeet", 4, {left: 800, bottom: 1000, repeat: -1, repeatDelay: 6, ease:Bounce.easeOut, delay: 1})

var timeLine = new TimelineMax();
timeLine.from("#mars", 10, {top: 800, ease: Circ.easeOut, repeatDelay: 6, delay: 6});
timeLine.to ("#mars", 10, {rotation: 360, ease: Circ.easeOut, repeat: -1})
