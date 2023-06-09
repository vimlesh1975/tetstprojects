const scrollbyjs = () => {
    var myGroup = document.getElementById('f0');
    document.getElementById('f0').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].setAttribute('x', '0');
    document.getElementById('f0').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = 'My Name is Vimlesh Kumar मुंबई के मीरा रोड में श्रद्धा वालकर से भी भयानक हत्याकांड सामने आया है.  लिव इन रिलेशनशिप में रह रहे एक शख्स ने अपनी पार्टनर की निर्मम हत्या कर दी. फिर उसके शव के टुकड़े किए और कुकर में उबाले और शव के टुकड़ों को मिक्सी में पीसकर कर हर संभव तरीके से सारे सबूत मिटाने की कोशिश की, लेकिन इससे पहले कि वो सबूत मिटाने में कामयाब होता पड़ोसी को उस पर शक हो गया और पुलिस मौके पर पहुंच गई. पुलिस ने शव के टुकड़े बरामद कर आरोपी को गिरफ़्तार कर लिया. फ़िलहाल आरोपी अभी पुलिस की रिमांड पर है और उससे पुलिस की पूछताछ जारी है.'
    var matrixValue = myGroup.getAttribute('transform').slice(7, -1).split(' ');
    matrixValue[4] = 1920;

    setInterval(function () {
        matrixValue[4] -= 8;
        if (matrixValue[4] < -myGroup.getBBox().width) {
            matrixValue[4] = 1920;
        }
        myGroup.setAttribute('transform', 'matrix(' + matrixValue.join(' ') + ')');
    }, 40);
}



const scrollbyGsap = () => {
    const scriptgsap = document.createElement("script");
    scriptgsap.src = "./js/gsap.min.js";
    scriptgsap.setAttribute("type", "text/javascript");
    scriptgsap.onload = function () {
        // Assuming you have included GSAP library in your HTML file

        var myGroup = document.getElementById('f0');
        var tspanElement = document.getElementById('f0').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0];
        tspanElement.setAttribute('x', 0);
        tspanElement.textContent = 'My Name is Vimlesh Kumar मुंबई के मीरा रोड में श्रद्धा वालकर से भी भयानक हत्याकांड सामने आया है.  लिव इन रिलेशनशिप में रह रहे एक शख्स ने अपनी पार्टनर की निर्मम हत्या कर दी. फिर उसके शव के टुकड़े किए और कुकर में उबाले और शव के टुकड़ों को मिक्सी में पीसकर कर हर संभव तरीके से सारे सबूत मिटाने की कोशिश की, लेकिन इससे पहले कि वो सबूत मिटाने में कामयाब होता पड़ोसी को उस पर शक हो गया और पुलिस मौके पर पहुंच गई. पुलिस ने शव के टुकड़े बरामद कर आरोपी को गिरफ़्तार कर लिया. फ़िलहाल आरोपी अभी पुलिस की रिमांड पर है और उससे पुलिस की पूछताछ जारी है मुंबई के मीरा रोड में श्रद्धा वालकर से भी भयानक हत्याकांड सामने आया है.  लिव इन रिलेशनशिप में रह रहे एक शख्स ने अपनी पार्टनर की निर्मम हत्या कर दी. फिर उसके शव के टुकड़े किए और कुकर में उबाले और शव के टुकड़ों को मिक्सी में पीसकर कर हर संभव तरीके से सारे सबूत मिटाने की कोशिश की, लेकिन इससे पहले कि वो सबूत मिटाने में कामयाब होता पड़ोसी को उस पर शक हो गया और पुलिस मौके पर पहुंच गई. पुलिस ने शव के टुकड़े बरामद कर आरोपी को गिरफ़्तार कर लिया. फ़िलहाल आरोपी अभी पुलिस की रिमांड पर है और उससे पुलिस की पूछताछ जारी है.'

        // Get the initial x position
        var matrixValue = myGroup.getAttribute('transform').slice(7, -1).split(' ');
        matrixValue[4] = 1920;

        // Set the target x position
        var targetX = -myGroup.getBBox().width;

        // Create the animation using GSAP
        var timeline = gsap.timeline({ repeat: -1 });
        timeline.fromTo(myGroup, { x:1920}, { x: targetX, duration:-targetX/300, ease: 'linear' });
        console.log(timeline)


    }
    document.body.appendChild(scriptgsap);

}



// scrollbyjs();

scrollbyGsap();