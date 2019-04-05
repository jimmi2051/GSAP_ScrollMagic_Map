function pathPrepare($el) {
    var lineLength = $el[0].getTotalLength();
    $el.css("stroke-dasharray", lineLength);
    $el.css("stroke-dashoffset", lineLength);
}

var $word = $("path#word");


// prepare SVG
pathPrepare($word);


// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = new TimelineMax()
    .add(TweenMax.to($word, 1, { strokeDashoffset: 0, ease: Linear.easeNone })) // draw word for 0.9

    .add(TweenMax.to("path#word", 1, { stroke: "red" , ease: Linear.easeNone }),0)			// change color during the whole thing
    .add(TweenMax.to("#svg_map", 1, { scale: 1,ease: Linear.easeNone }))

// build scene
var scene = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 700, offset:330 ,tweenChanges: true })
    .setTween(tween)
    .addTo(controller);

var tween_resize = new TimelineMax()
.add(TweenMax.to("#svg_map", 2, { scale: 3,ease: Linear.easeNone }))

var scene_resize = new ScrollMagic.Scene({ triggerElement: "#trigger1", duration: 400, offset: 400,repeat:2,yoyo:true })
    .setTween(tween_resize)
    .addIndicators({ name: "resize" }) // add indicators (requires plugin)
    .addTo(controller);
