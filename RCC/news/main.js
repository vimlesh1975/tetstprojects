

//add gspa
const scriptgsap = document.createElement("script");
scriptgsap.src = "./js/gsap.min.js";
scriptgsap.setAttribute("type", "text/javascript");

//hide all elements
(Array.from(document.getElementsByTagName('g'))).forEach(element => {
    element.setAttribute('visibility', 'hidden');
});


const scrollbyGsap = () => {
    document.getElementById('scroll').setAttribute('visibility', 'visible');
    document.getElementById('scroll_strip').setAttribute('visibility', 'visible');
    const lefttoright = false;
    // const lefttoright=true;
    var myGroup = document.getElementById('scroll').getElementsByTagName('text')[0];
    var tspanElement = document.getElementById('scroll').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0];
    tspanElement.textContent = ` ⏺️ मुख्यमंत्री योगी आदित्यनाथ ने दी मुलायम सिंह को जन्मदिन की बधाई, जानिए क्या कहा ⏺️ दिल्ली में प्रदूषण के चलते कंस्ट्रक्शन एक्टिविटी पर लगा प्रतिबंध हटाया गया - NDTV India ⏺️ चलने नहीं देंगे रामायण एक्सप्रेस, संतों की वेशभूषा में वेटरों पर साधुओं की चेतावनी ⏺️ Shaurya Chakra: शादी के 10 महीने में हुए शहीद, I LOVE YOU कहकर पत्नी ने दी थी अंतिम विदाई ⏺️ पाक को खदेड़ने वाले वीर का हुआ अभिनंदन, मेजर विभूति और सूबेदार सोमबीर को शौर्य चक्र ⏺️ Lucknow Kisan Mahapanchayat: कृषि कानूनों की वापसी 70 साल में किसान आंदोलनों की सबसे बड़ी जीत ⏺️ Pollution: दिल्ली में ट्रकों की एंट्री पर बैन जारी, वर्क फ्रॉम होम 26 नवंबर तक बढ़ा - Aaj Tak ⏺️ पठानकोट में आर्मी कैंप के गेट के पास ग्रेनेड धमाका, सभी चौकियां हाई अलर्ट पर - NDTV India ⏺️ तानाशाहों के लिए ना गाएं, मारे गए पत्रकार खशोगी की मंगेतर की सिंगर से अपील - आज तक ⏺️ अमेरिका में डॉलर की बारिश: चलते ट्रक से सड़क पर नोटों से भरे कई बैग उड़े, हाईवे पर कारें खड़ी कर लूटने लगे लोग ⏺️ ताइवान के आसमान पर चीन ने उड़ाए परणामु बम गिराने वाले विमान, बढ़ा तनाव - Hindustan हिंदी ⏺️ Airtel Prepaid Recharge : एयरटेल ने महंगा कर दिया प्रीपेड रिचार्ज, जानें अब कितने का हुआ कौन सा प्लान ⏺️ Paytm के शेयरों में तबाही जारी, आज फिर 15% टूटे शेयर, दो दिनों में विजय शर्मा की वेल्थ 78.10 करोड़ ⏺️ Share Market Today : सेंसेक्स हुआ धड़ाम, 1100 से ज्यादा अंकों की गिरावट, Nifty भी लुढ़का ⏺️ पेट्रोल-डीजल हो सकता है और भी सस्ता! कीमतों में कटौती की उम्मीद - Hindustan हिंदी ⏺️ Bigg Boss 15, 22 Nov Written Updates: प्रतीक-करण के बीच हुई धक्का-मुक्की ⏺️ Malaika Arora जालीदार ड्रेस पहनने की वजह से हुईं ट्रोल, लोग बोले ‘सबकुछ दिख जाए, ऐसा भी क्या फैशन ⏺️ मुझे मुंबई आने में डर लगता है, परमबीर सिंह की दलील पर SC ने दिया ये आदेश - आज तक ⏺️ अनुपमा सीरियल में Rupali Ganguly की मां का किरदार निभा चुकीं एक्ट्रेस Madhavi Gogate का निधन`
    var targetX = -tspanElement.getBBox().width;
    var timeline = gsap.timeline({ repeat: -1 });
    if (lefttoright) {
        timeline.fromTo(myGroup, { x: targetX }, { x: 1920, duration: -targetX / 300, ease: 'linear' });
    }
    else {
        timeline.fromTo(myGroup, { x: 1920 }, { x: targetX, duration: -targetX / 300, ease: 'linear' });
    }
}

const datetime = () => {
    document.getElementById('time').setAttribute('visibility', 'visible');
    document.getElementById('time_strip').setAttribute('visibility', 'visible');

    document.getElementById('date').setAttribute('visibility', 'visible');
    document.getElementById('date_strip').setAttribute('visibility', 'visible');

    updatestring('time', '');
    updatestring('date', '');
    function padTwoDigit(number) {
        return number.toString().padStart(2, '0');
    }
    setInterval(() => {
        const bb = new Date()
        updatestring('time', padTwoDigit(bb.getHours()) + ":" + padTwoDigit(bb.getMinutes()) + ":" + padTwoDigit(bb.getSeconds()));
        updatestring('date', padTwoDigit(bb.getDate()) + ":" + padTwoDigit(bb.getMonth() + 1) + ":" + padTwoDigit(bb.getFullYear()));
    }, 1000);
}

const bn = () => {
    document.getElementById('bn').setAttribute('visibility', 'visible');
    document.getElementById('bn_strip').setAttribute('visibility', 'visible');

    const aa = [
        'एसआरए प्रकल्पातल्या कथित घोटाळ्याप्रकरणी',
        'प्रकाश मेहतांच्या राजीनाम्याची मागणी एसआरए प्रकल्पातल्या कथित घोटाळ्याप्रकरणी करत',
        'विरोधी एसआरए प्रकल्पातल्या कथित घोटाळ्याप्रकरणी पक्षांकडून ',
        'विधिमंडळाच्या दोन्ही सभागृहांत गदारोळ',
        'एअर मार्शल हेमंत भागवत यांची भारतीय वायू सेनेच्या प्रशासकीय विभाग प्रमुखपदी नियुक्ती',
    ]
    var i = 0;
    setTimeout(() => {
        updatestring('bn', '.')
    }, 100);

    setInterval(() => {
        var myGroup = document.getElementById('bn');
        var timeline = gsap.timeline({ repeat: 0, repeatDelay: 3 });
        timeline.from(myGroup, { scaleX: 0, duration: 0.5 });
        updatestring('bn', aa[i].toString())
        i += 1;
        if (i > aa.length - 1) {
            i = 0;
        }
    }, 3000);
}

const logo = () => {
    document.getElementById('logo').setAttribute('visibility', 'visible');

    var myGroup = document.getElementById('logo');
    var timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    timeline.from(myGroup, { scaleX: 0, duration: 1 });

}
const locationband = () => {
    document.getElementById('location').setAttribute('visibility', 'visible');
    document.getElementById('location_strip').setAttribute('visibility', 'visible');

    updatestring('location', 'Live From Mumbai')
    var myGroup = document.getElementById('location');
    var timeline = gsap.timeline({ repeat: -1, repeatDelay: 3 });
    timeline.from(myGroup, { scaleX: 0, duration: 1 });

}

const profile = () => {

    const data1 = [
        {
            name: 'Isabella Grace Stone',
            age: 25,
            email: 'isabella.stone@example.com isabella.stone@example.com',
            image: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
            name: 'Oliver Benjamin Smith',
            age: 30,
            email: 'oliver.smith@example.com',
            image: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
            name: 'Sophia Charlotte Lee',
            age: 35,
            email: 'sophia.lee@example.com',
            image: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
            name: 'Ethan Christopher Brown',
            age: 40,
            email: 'ethan.brown@example.com',
            image: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
            name: 'Ava Elizabeth Davis',
            age: 45,
            email: 'ava.davis@example.com',
            image: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
        {
            name: 'William Alexander Johnson',
            age: 50,
            email: 'william.johnson@example.com',
            image: 'https://randomuser.me/api/portraits/men/6.jpg',
        },
        {
            name: 'Madison Victoria Williams',
            age: 55,
            email: 'madison.williams@example.com',
            image: 'https://randomuser.me/api/portraits/women/7.jpg',
        },
        {
            name: 'Jameson Nathaniel Taylor',
            age: 60,
            email: 'jameson.taylor@example.com',
            image: 'https://randomuser.me/api/portraits/men/8.jpg',
        },
        {
            name: 'Chloe Isabelle Wilson',
            age: 65,
            email: 'chloe.wilson@example.com',
            image: 'https://randomuser.me/api/portraits/women/9.jpg',
        },
        {
            name: 'Jacob Matthew Anderson',
            age: 70,
            email: 'jacob.anderson@example.com',
            image: 'https://randomuser.me/api/portraits/men/10.jpg',
        },
    ];
    var dataIndex = 0
    // var elements = document.querySelectorAll('#name, #image, #age, #email, #profile_strip');
    var elements = document.querySelectorAll('#name text, #image image, #age text, #email text, #profile_strip rect');



    setTimeout(() => {
        // timeout is nessaesaary to set all variable set by client.
        const sortedElements = Array.from(elements).sort(function (a, b) {
            return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        });
        setInterval(() => {
            Object.keys(data1[0]).forEach(key => {
                if (document.getElementById(key)) {
                    var idTemplate = document.getElementById(key);
                    var idtext = idTemplate.getElementsByTagName('text')[0];
                    var idimage = idTemplate.getElementsByTagName('image')[0];
                    if (idtext != undefined) {
                        updatestring(key, data1[dataIndex][key]);
                    }
                    else if (idimage != undefined) {
                        updateimage(key, data1[dataIndex][key]);
                    }
                }
            });
            dataIndex = dataIndex + 1;
            if (dataIndex > (data1.length - 1)) {
                dataIndex = 0
            }
            sortedElements.forEach((element, index) => {
                var pathTransform = 0;
                if (element.tagName === 'path') {
                    pathTransform = element.transform.animVal[0].matrix.e
                }
                const scalefactor = element.parentNode.getCTM().a;
                gsap.set(element, { x: -2100 / scalefactor, opacity: 0 });
                gsap.to(element, {
                    x: (element.tagName === 'path') ? pathTransform : 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: index * 0.03,
                    ease: "back.inOut",
                });
            });

            Array.from(elements).forEach((element) => {
                element.setAttribute('visibility', 'visible');
            })
        }, 2000);
    }, 100);
}
const oneliner = () => {
    document.getElementById('oneliner').setAttribute('visibility', 'visible');
    document.getElementById('oneliner_strip').setAttribute('visibility', 'visible');
    var data1 = [];

    const fetchdata = () => {
        fetch('aa.csv')
            .then(response => response.text())
            .then(csvData => {
                // Process the CSV data
                const rows = csvData.split('\n');
                const headers = rows[0].split(',');

                var data1 = [];

                // Iterate over the rows
                for (let i = 1; i < rows.length; i++) {
                    const rowData = rows[i].split(',');

                    // Process each row of data
                    for (let j = 0; j < headers.length - 1; j++) {
                        const header = headers[j];
                        const value = rowData[j];
                        // Do something with the header and value
                        data1.push(value)
                        // console.log(header, value)
                    }
                }


                var timer1;
                clearInterval(timer1);
                var i = 0;
                timer1 = setInterval(() => {
                    updatestring('oneliner', data1[i]?.toString())
                    const aa = document.getElementById('oneliner').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0]
                    const firstName = aa.textContent.split(' ')[0];
                    const lastName = aa.textContent.split(' ')[1];
                    aa.innerHTML = (`<tspan style="font-family: gigi;">${firstName}</tspan> <tspan style="font-family: cursive;">${lastName}</tspan>`)
                    i += 1;
                    if (i > data1.length - 1) {
                        i = 0;
                        clearInterval(timer1);
                        fetchdata();
                        // return
                    }
                    var myGroup = document.getElementById('oneliner');
                    var timeline = gsap.timeline({ repeat: 0, repeatDelay: 3 });
                    timeline.from(myGroup, { scaleX: 0, duration: 0.5 });
                }, 2000);
            }
            )

            .catch(error => {
                // Handle any errors that occurred during the fetch
                console.error('Error fetching the CSV file:', error);
            });
    }


    fetchdata();

    setTimeout(() => {
        updatestring('oneliner', '.')
    }, 100);


}
scriptgsap.onload = function () {
    scrollbyGsap();
    datetime();
    bn();
    logo();
    locationband();
    profile();
    oneliner()
}
document.body.appendChild(scriptgsap);
