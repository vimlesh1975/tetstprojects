

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
    '9   पठानकोट में आर्मी कैंप के गेट के पास ग्रेनेड धमाका, सभी चौकियां हाई अलर्ट पर - NDTV India',
    '10  तानाशाहों के लिए ना गाएं, मारे गए पत्रकार खशोगी की मंगेतर की सिंगर से अपील - आज तक',
    '11  El Salvador President Nayib Bukele Said We Will Build World First Bitcoin City Power',
    '12  अमेरिका में डॉलर की बारिश: चलते ट्रक से सड़क पर नोटों से भरे कई बैग उड़े, हाईवे पर कारें खड़ी कर लूटने लगे लोग',
    '13  ताइवान के आसमान पर चीन ने उड़ाए परणामु बम गिराने वाले विमान, बढ़ा तनाव - Hindustan हिंदी',
    '14  Airtel Prepaid Recharge : एयरटेल ने महंगा कर दिया प्रीपेड रिचार्ज, जानें अब कितने का हुआ कौन सा प्लान',
    '15  Paytm के शेयरों में तबाही जारी, आज फिर 15% टूटे शेयर, दो दिनों में विजय शर्मा की वेल्थ 78.10 करोड़',
    '16  Share Market Today : सेंसेक्स हुआ धड़ाम, 1100 से ज्यादा अंकों की गिरावट, Nifty भी लुढ़का',
    '17  पेट्रोल-डीजल हो सकता है और भी सस्ता! कीमतों में कटौती की उम्मीद - Hindustan हिंदी',
    '18  Bigg Boss 15, 22 Nov Written Updates: प्रतीक-करण के बीच हुई धक्का-मुक्की',
    '19  Malaika Arora जालीदार ड्रेस पहनने की वजह से हुईं ट्रोल, लोग बोले ‘सबकुछ दिख जाए, ऐसा भी क्या फैशन',
    '20  मुझे मुंबई आने में डर लगता है, परमबीर सिंह की दलील पर SC ने दिया ये आदेश - आज तक',
    '21  अनुपमा सीरियल में Rupali Ganguly की मां का किरदार निभा चुकीं एक्ट्रेस Madhavi Gogate का निधन',
    '22   मुख्यमंत्री योगी आदित्यनाथ ने दी मुलायम सिंह को जन्मदिन की बधाई, जानिए क्या कहा',
    '23   दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    '24   चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    '25   मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    '26   Shaurya Chakra: शादी के 10 महीने में हुए शहीद, I LOVE YOU कहकर पत्नी ने दी थी अंतिम विदाई',
    '27   पाक को खदेड़ने वाले वीर का हुआ अभिनंदन, मेजर विभूति और सूबेदार सोमबीर को शौर्य चक्र',
    '28   Lucknow Kisan Mahapanchayat: कृषि कानूनों की वापसी 70 साल में किसान आंदोलनों की सबसे बड़ी जीत',
    '29   Pollution: दिल्ली में ट्रकों की एंट्री पर बैन जारी, वर्क फ्रॉम होम 26 नवंबर तक बढ़ा - Aaj Tak',
    '30   पठानकोट में आर्मी कैंप के गेट के पास ग्रेनेड धमाका, सभी चौकियां हाई अलर्ट पर - NDTV India',
    '31  तानाशाहों के लिए ना गाएं, मारे गए पत्रकार खशोगी की मंगेतर की सिंगर से अपील - आज तक',
    '32  El Salvador President Nayib Bukele Said We Will Build World First Bitcoin City Power',
    '33  अमेरिका में डॉलर की बारिश: चलते ट्रक से सड़क पर नोटों से भरे कई बैग उड़े, हाईवे पर कारें खड़ी कर लूटने लगे लोग',
    '34  ताइवान के आसमान पर चीन ने उड़ाए परणामु बम गिराने वाले विमान, बढ़ा तनाव - Hindustan हिंदी',
    '35  Airtel Prepaid Recharge : एयरटेल ने महंगा कर दिया प्रीपेड रिचार्ज, जानें अब कितने का हुआ कौन सा प्लान',
    '36  Paytm के शेयरों में तबाही जारी, आज फिर 15% टूटे शेयर, दो दिनों में विजय शर्मा की वेल्थ 78.10 करोड़',
    '37  Share Market Today : सेंसेक्स हुआ धड़ाम, 1100 से ज्यादा अंकों की गिरावट, Nifty भी लुढ़का',
    '38  पेट्रोल-डीजल हो सकता है और भी सस्ता! कीमतों में कटौती की उम्मीद - Hindustan हिंदी',
    '39  Bigg Boss 15, 22 Nov Written Updates: प्रतीक-करण के बीच हुई धक्का-मुक्की',
    '40  Malaika Arora जालीदार ड्रेस पहनने की वजह से हुईं ट्रोल, लोग बोले ‘सबकुछ दिख जाए, ऐसा भी क्या फैशन',
    '41  मुझे मुंबई आने में डर लगता है, परमबीर सिंह की दलील पर SC ने दिया ये आदेश - आज तक',
    '42  अनुपमा सीरियल में Rupali Ganguly की मां का किरदार निभा चुकीं एक्ट्रेस Madhavi Gogate का निधन'

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
                if (i > 3) {
                    newGroup.getElementsByTagName('g')[i - 4].getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = ' ';//space is necessary to maintainn the the width
                }
                i += 1;
                var nummerofLinesHavingContent = 0
                Array.from(newGroup.children).forEach(element => {
                    if (element.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent !== " ") {
                        nummerofLinesHavingContent += 1;
                    }
                } )
                console.log('Nummer of Lines Having Content=', nummerofLinesHavingContent)
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
