const aa= document.getElementsByClassName('fname')[0].getElementsByTagName('tspan')[0]
console.log(aa.textContent)

const firstName=aa.textContent.split(' ')[0];
const lastName=aa.textContent.split(' ')[1];
// console.log(aa.innerText.split(' ')[0])
aa.innerHTML=(`<tspan style="font-family: Impact;">${firstName}</tspan> <tspan style="font-family: cursive;">${lastName}</tspan>`)