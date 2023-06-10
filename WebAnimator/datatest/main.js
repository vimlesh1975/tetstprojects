const aa = [
    'एसआरए प्रकल्पातल्या कथित घोटाळ्याप्रकरणी',
    'प्रकाश मेहतांच्या राजीनाम्याची मागणी एसआरए प्रकल्पातल्या कथित घोटाळ्याप्रकरणी करत',
    'विरोधी एसआरए प्रकल्पातल्या कथित घोटाळ्याप्रकरणी पक्षांकडून ',
    'विधिमंडळाच्या दोन्ही सभागृहांत गदारोळ',
    'एअर मार्शल हेमंत भागवत यांची भारतीय वायू सेनेच्या प्रशासकीय विभाग प्रमुखपदी नियुक्ती',
]
var i = 0;
var element;
setTimeout(() => {
    // console.log(studio);
    // console.log(sheet);
    // console.log(sheet.sequence);
    // console.log(sheet.sequence.position);
    sheet.sequence.position = 0;
    element = canvas.getObjects()[0];
    updatestring('ccgf0', aa[i].toString())
}, 100);

setInterval(() => {
    sheet.sequence.position = 0;
    sheet.sequence.play({ range: [0, 2] });

    updatestring('ccgf0', aa[i].toString())
    i += 1;
    if (i > aa.length - 1) {
        i = 0;
    }
}, 3000);
