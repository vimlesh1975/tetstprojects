var filter1 = document.getElementsByTagName('defs')[0];
filter1.innerHTML = '<filter id="filter1" x="0" y="0" width="100%" height="100%"> <feSpecularLighting result="spec1" specularExponent="12" lighting-color="yellow"> <fePointLight x="0" y="0" z="14" > <animate attributeName="x" values="-467.5;517.5;517.5" keyTimes="0;0.5; 1" dur="3s" repeatCount="indefinite" /> </fePointLight> </feSpecularLighting> <feComposite in="SourceGraphic" in2="spec1" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" /> </filter>'
var allRectangles = document.getElementsByTagName('rect');

Array.from(allRectangles).forEach((element) => {
    element.style.filter = 'url(#filter1)';
});

const scriptgsap = document.createElement("script");
scriptgsap.src = "./js/gsap.min.js";
scriptgsap.setAttribute("type", "text/javascript");
var outAnimation;
var elements = document.querySelectorAll('rect, image, text, path, circle');

const data1 =  [
    {
      name: 'Isabella Grace Stone',
      age: 25,
      email: 'isabella.stone@example.com',
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



scriptgsap.onload = function () {
    setTimeout(() => {
        // timeout is nessaesaary to set all variable set by client.
        const sortedElements = Array.from(elements).sort(function (a, b) {
            return a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        });

        document.body.style.opacity = 1;


        setInterval(() => {
            Object.keys(data1[0]).forEach(key => {
                if (document.getElementById(key)) {
                    var idTemplate = document.getElementById(key);
                    var idtext = idTemplate.getElementsByTagName('text')[0];
                    var idimage = idTemplate.getElementsByTagName('image')[0];
                    if (idtext != undefined) {
                        idTemplate.getElementsByTagName('text')[0].getElementsByTagName('tspan')[0].innerHTML = data1[dataIndex][key];
                        idTemplate.style.display = "block";
                    }
                    else if (idimage != undefined) {
                        idTemplate.getElementsByTagName('image')[0].setAttribute('xlink:href', data1[dataIndex][key]);
                        idTemplate.getElementsByTagName('image')[0].setAttribute('preserveAspectRatio', 'none');
                        idTemplate.style.display = "block";
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
                // console.log(element.transform.animVal[0].matrix.e)
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


        }, 2000);

        outAnimation = () => {
            sortedElements.forEach((element, index) => {
                const scalefactor = element.parentNode.getCTM().a;
                gsap.set(element, { x: -2100 / scalefactor, opacity: 0 });
                gsap.from(element, {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: (sortedElements.length - index - 1) * 0.03,
                    ease: "power2.out"
                });
            });

        }
    }, 100);

    // setTimeout(() => {
    //     outAnimation();
    // }, 4000);
};



document.body.appendChild(scriptgsap);
