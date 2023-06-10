
const scrollbyGsap = () => {
    const scriptgsap = document.createElement("script");
    scriptgsap.src = "./js/gsap.min.js";
    scriptgsap.setAttribute("type", "text/javascript");
    scriptgsap.onload = function () {
        // Assuming you have included GSAP library in your HTML file
        var myGroup = document.getElementsByClassName('f0');
        // var targetX = -myGroup.getBBox().width;
        var timeline = gsap.timeline({ repeat: -1 });
        // timeline.to(myGroup, { fill:'red', duration:10});
        timeline.to(myGroup, { x:1920, duration:10});
    }
    document.body.appendChild(scriptgsap);

}

scrollbyGsap();