

//add gspa
const scriptgsap = document.createElement("script");
scriptgsap.src = "./js/gsap.min.js";
scriptgsap.setAttribute("type", "text/javascript");


var data1 = [
    'मुख्यमंत्री योगी आदित्यनाथ ने दी मुलायम सिंह को जन्मदिन की बधाई, जानिए क्या कहा',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी',
    'मंत्रिमंडल विस्तार से क्या ख़त्म हो जाएगी अशोक गहलोत और सचिन पायलट गुट की कलह?',
    'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
    'चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी'
]


//  data1 = [
//     'मुख्यमंत्री योगी आदित्यनाथ ने दी मुलायम सिंह को जन्मदिन की बधाई, जानिए क्या कहा',
//     'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
//     'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',
//     'दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India',

   
// ]
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
    if (lefttoright) {
        timeline.fromTo(newGroup, { x: targetX }, { x: 1920, duration: -targetX / 300, ease: 'linear' });
    }
    else {
        timeline.fromTo(newGroup, { x: 1920 }, { x: targetX, duration: -targetX / 200, ease: 'linear' });
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
    const speed=300;
    if (lefttoright) {
        timeline.fromTo(newGroup, { x: targetX }, { x: 1920, duration: (-targetX + 1920) / speed, ease: 'linear' });
    }
    else {
        timeline.fromTo(newGroup, { x: 1920 }, { x: targetX, duration: (-targetX + 1920) / speed, ease: 'linear' });
    }
}


scriptgsap.onload = function () {
    scrollbyGsapwithmanytexts();
    // scrollbyGsapwithsingletext();
}
document.body.appendChild(scriptgsap);
