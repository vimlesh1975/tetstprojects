const aa = document.getElementById('clock').getElementsByTagName('text')[0].getElementsByTagName('tspan')[0];
// console.log(aa)
// aa.textContent = ''
updatestring('clock','');
updatestring('date','');
function padTwoDigit(number) {
    return number.toString().padStart(2, '0');
}
setInterval(() => {
    const bb = new Date()
    updatestring('clock',padTwoDigit(bb.getHours()) + ":" + padTwoDigit(bb.getMinutes()) + ":" + padTwoDigit(bb.getSeconds()));
    updatestring('date',padTwoDigit(bb.getDate()) + ":" + padTwoDigit(bb.getMonth()+1) + ":" + padTwoDigit(bb.getFullYear()));
}, 1000);

