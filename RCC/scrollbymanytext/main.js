

//add gspa
const scriptgsap = document.createElement("script");
scriptgsap.src = "./js/gsap.min.js";
scriptgsap.setAttribute("type", "text/javascript");


var data1 = [
    '1   मुख्यमंत्री योगी आदित्यनाथ ने दी मुलायम सिंह को जन्मदिन की बधाई, जानिए क्या कहा',
    '2   दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    '3   चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    '4   मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    '5   Shaurya Chakra: शादी के 10 महीने में हुए शहीद, I LOVE YOU कहकर पत्नी ने दी थी अंतिम विदाई',
    '6   पाक को खदेड़ने वाले वीर का हुआ अभिनंदन, मेजर विभूति और सूबेदार सोमबीर को शौर्य चक्र',
    '7   Lucknow Kisan Mahapanchayat: कृषि कानूनों की वापसी 70 साल में किसान आंदोलनों की सबसे बड़ी जीत',
    '8   Pollution: दिल्ली में ट्रकों की एंट्री पर बैन जारी, वर्क फ्रॉम होम 26 नवंबर तक बढ़ा - Aaj Tak',

]

const dynamicscroll = () => {
    var originalGroup = document.getElementById('scroll');
    originalGroup.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = data1[0]
    const newGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    newGroup.appendChild(originalGroup);
    document.getElementsByTagName('svg')[0].appendChild(newGroup);
    const dataElements = [];
    dataElements.push(originalGroup) // Make a deep copy

    for (let i = 0; i < data1.length - 1; i++) {
        const clonedGroup = originalGroup.cloneNode(true);
        clonedGroup.setAttribute("id", 'scroll' + i);
        const bbox = originalGroup.getBBox();
        const clonedX = bbox.x + bbox.width + 30;
        clonedGroup.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].setAttribute("x", clonedX);
        clonedGroup.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = data1[i + 1]
        newGroup.appendChild(clonedGroup);
        dataElements.push(clonedGroup)

        originalGroup = document.getElementById('scroll' + i);
    }
    var targetX = -newGroup.getBBox().width - 10;

    var timeline = gsap.timeline({ repeat: -1 });

    const speed = 300;

    timeline.fromTo(newGroup, { x: 1920 }, { x: targetX, duration: (-targetX + 1920) / speed, ease: 'linear' });

    var children = newGroup.children;
    for (let i = children.length - 1; i > 0; i--) {
        newGroup.removeChild(children[i]);
    }
    var i = 1
    timeline.eventCallback("onUpdate", function () {
        const tail = newGroup.transform.baseVal[0].matrix.e + newGroup.getBBox().width;
        if (tail < 1920) {
            if (i < dataElements.length) {
                newGroup.appendChild(dataElements[i]);
                if (i > 4) {
                    newGroup.getElementsByTagName('g')[i - 5].getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = ' ';
                }
                i += 1;
            }
            else if (tail < 0) {
                timeline.pause()
                newGroup.innerHTML = '';

                for (let i = 0; i < dataElements.length; i++) {
                    dataElements[i].getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = data1[i];
                }
                newGroup.appendChild(dataElements[0])
                i = 1
                setTimeout(() => {
                    timeline.play()
                }, 100);
            }
        }
    });
}




const scrollbyGsapwithmanytexts = () => {

    const lefttoright = false;
    // const lefttoright=true;
    var originalGroup = document.getElementById('scroll');
    originalGroup.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = data1[0]
    const newGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    newGroup.appendChild(originalGroup);
    document.getElementsByTagName('svg')[0].appendChild(newGroup);

    for (let i = 0; i < data1.length - 1; i++) {
        const clonedGroup = originalGroup.cloneNode(true);
        clonedGroup.setAttribute("id", 'scroll' + i);
        const bbox = originalGroup.getBBox();
        const clonedX = bbox.x + bbox.width + 30;
        clonedGroup.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].setAttribute("x", clonedX);
        clonedGroup.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = data1[i + 1]
        newGroup.appendChild(clonedGroup);
        originalGroup = document.getElementById('scroll' + i);
    }
    var targetX = -newGroup.getBBox().width - 100;
    var timeline = gsap.timeline({ repeat: -1 });

    const speed = 300;
    if (lefttoright) {
        timeline.fromTo(newGroup, { x: targetX }, { x: 1920, duration: (-targetX + 1920) / speed, ease: 'linear' });
    }
    else {
        timeline.fromTo(newGroup, { x: 1920 }, { x: targetX, duration: (-targetX + 1920) / speed, ease: 'linear' });
    }
}

const scrollbyGsapwithsingletext = () => {
    const lefttoright = false;
    // const lefttoright=true;
    var originalGroup = document.getElementById('scroll');
    originalGroup.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = data1.join("  ");
    const newGroup = document.createElementNS("http://www.w3.org/2000/svg", "g");
    newGroup.appendChild(originalGroup);
    document.getElementsByTagName('svg')[0].appendChild(newGroup);


    var targetX = -newGroup.getBBox().width - 100;
    var timeline = gsap.timeline({ repeat: -1 });
    const speed = 300;
    if (lefttoright) {
        timeline.fromTo(newGroup, { x: targetX }, { x: 1920, duration: (-targetX + 1920) / speed, ease: 'linear' });
    }
    else {
        timeline.fromTo(newGroup, { x: 1920 }, { x: targetX, duration: (-targetX + 1920) / speed, ease: 'linear' });
    }
}


scriptgsap.onload = function () {
    // scrollbyGsapwithmanytexts();
    // scrollbyGsapwithsingletext();
    dynamicscroll();
}
document.body.appendChild(scriptgsap);
