const scrollbyjs = () => {
    var myGroup = document.getElementById('f0');
    document.getElementById('f0').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].setAttribute('x', '0');
    document.getElementById('f0').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].textContent = ` ⏺️ मुख्यमंत्री योगी आदित्यनाथ ने दी मुलायम सिंह को जन्मदिन की बधाई, जानिए क्या कहा ⏺️ दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India ⏺️ चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी ⏺️ Shaurya Chakra: शादी के 10 महीने में हुए शहीद, I LOVE YOU कहकर पत्नी ने दी थी अंतिम विदाई ⏺️ पाक को खदेड़ने वाले वीर का हुआ अभिनंदन, मेजर विभूति और सूबेदार सोमबीर को शौर्य चक्र ⏺️ Lucknow Kisan Mahapanchayat: कृषि कानूनों की वापसी 70 साल में किसान आंदोलनों की सबसे बड़ी जीत ⏺️ Pollution: दिल्ली में ट्रकों की एंट्री पर बैन जारी, वर्क फ्रॉम होम 26 नवंबर तक बढ़ा - Aaj Tak ⏺️ पठानकोट में आर्मी कैंप के गेट के पास ग्रेनेड धमाका, सभी चौकियां हाई अलर्ट पर - NDTV India ⏺️ तानाशाहों के लिए ना गाएं, मारे गए पत्रकार खशोगी की मंगेतर की सिंगर से अपील - आज तक ⏺️ अमेरिका में डॉलर की बारिश: चलते ट्रक से सड़क पर नोटों से भरे कई बैग उड़े, हाईवे पर कारें खड़ी कर लूटने लगे लोग ⏺️ ताइवान के आसमान पर चीन ने उड़ाए परणामु बम गिराने वाले विमान, बढ़ा तनाव - Hindustan हिंदी ⏺️ Airtel Prepaid Recharge : एयरटेल ने महंगा कर दिया प्रीपेड रिचार्ज, जानें अब कितने का हुआ कौन सा प्लान ⏺️ Paytm के शेयरों में तबाही जारी, आज फिर 15% टूटे शेयर, दो दिनों में विजय शर्मा की वेल्थ 78.10 करोड़ ⏺️ Share Market Today : सेंसेक्स हुआ धड़ाम, 1100 से ज्यादा अंकों की गिरावट, Nifty भी लुढ़का ⏺️ पेट्रोल-डीजल हो सकता है और भी सस्ता! कीमतों में कटौती की उम्मीद - Hindustan हिंदी ⏺️ Bigg Boss 15, 22 Nov Written Updates: प्रतीक-करण के बीच हुई धक्का-मुक्की ⏺️ Malaika Arora जालीदार ड्रेस पहनने की वजह से हुईं ट्रोल, लोग बोले ‘सबकुछ दिख जाए, ऐसा भी क्या फैशन ⏺️ मुझे मुंबई आने में डर लगता है, परमबीर सिंह की दलील पर SC ने दिया ये आदेश - आज तक ⏺️ अनुपमा सीरियल में Rupali Ganguly की मां का किरदार निभा चुकीं एक्ट्रेस Madhavi Gogate का निधन`
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

const lefttoright=false;
// const lefttoright=true;

const scrollbyGsap = () => {
    const scriptgsap = document.createElement("script");
    scriptgsap.src = "./js/gsap.min.js";
    scriptgsap.setAttribute("type", "text/javascript");
    scriptgsap.onload = function () {
        var myGroup = document.getElementById('f0').getElementsByTagName('text')[0];
        var tspanElement = document.getElementById('f0').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0];
        tspanElement.textContent = ` ⏺️ मुख्यमंत्री योगी आदित्यनाथ ने दी मुलायम सिंह को जन्मदिन की बधाई, जानिए क्या कहा ⏺️ दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India ⏺️ चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी ⏺️ Shaurya Chakra: शादी के 10 महीने में हुए शहीद, I LOVE YOU कहकर पत्नी ने दी थी अंतिम विदाई ⏺️ पाक को खदेड़ने वाले वीर का हुआ अभिनंदन, मेजर विभूति और सूबेदार सोमबीर को शौर्य चक्र ⏺️ Lucknow Kisan Mahapanchayat: कृषि कानूनों की वापसी 70 साल में किसान आंदोलनों की सबसे बड़ी जीत ⏺️ Pollution: दिल्ली में ट्रकों की एंट्री पर बैन जारी, वर्क फ्रॉम होम 26 नवंबर तक बढ़ा - Aaj Tak ⏺️ पठानकोट में आर्मी कैंप के गेट के पास ग्रेनेड धमाका, सभी चौकियां हाई अलर्ट पर - NDTV India ⏺️ तानाशाहों के लिए ना गाएं, मारे गए पत्रकार खशोगी की मंगेतर की सिंगर से अपील - आज तक ⏺️ अमेरिका में डॉलर की बारिश: चलते ट्रक से सड़क पर नोटों से भरे कई बैग उड़े, हाईवे पर कारें खड़ी कर लूटने लगे लोग ⏺️ ताइवान के आसमान पर चीन ने उड़ाए परणामु बम गिराने वाले विमान, बढ़ा तनाव - Hindustan हिंदी ⏺️ Airtel Prepaid Recharge : एयरटेल ने महंगा कर दिया प्रीपेड रिचार्ज, जानें अब कितने का हुआ कौन सा प्लान ⏺️ Paytm के शेयरों में तबाही जारी, आज फिर 15% टूटे शेयर, दो दिनों में विजय शर्मा की वेल्थ 78.10 करोड़ ⏺️ Share Market Today : सेंसेक्स हुआ धड़ाम, 1100 से ज्यादा अंकों की गिरावट, Nifty भी लुढ़का ⏺️ पेट्रोल-डीजल हो सकता है और भी सस्ता! कीमतों में कटौती की उम्मीद - Hindustan हिंदी ⏺️ Bigg Boss 15, 22 Nov Written Updates: प्रतीक-करण के बीच हुई धक्का-मुक्की ⏺️ Malaika Arora जालीदार ड्रेस पहनने की वजह से हुईं ट्रोल, लोग बोले ‘सबकुछ दिख जाए, ऐसा भी क्या फैशन ⏺️ मुझे मुंबई आने में डर लगता है, परमबीर सिंह की दलील पर SC ने दिया ये आदेश - आज तक ⏺️ अनुपमा सीरियल में Rupali Ganguly की मां का किरदार निभा चुकीं एक्ट्रेस Madhavi Gogate का निधन`
        var targetX = -tspanElement.getBBox().width;
        var timeline = gsap.timeline({ repeat: -1 });
        if (lefttoright){
            timeline.fromTo(myGroup, { x:targetX}, { x: 1920, duration:-targetX/300, ease: 'linear' });
        }
        else{
            timeline.fromTo(myGroup, { x:1920}, { x: targetX, duration:-targetX/300, ease: 'linear' });
        }
    }
    document.body.appendChild(scriptgsap);
}

// scrollbyjs();

scrollbyGsap();