
const applyDifferentfont=()=>{
    const aa= document.getElementsByClassName('fname')[0].getElementsByTagName('tspan')[0]
    const firstName=aa.textContent.split(' ')[0];
    const lastName=aa.textContent.split(' ')[1];
    aa.innerHTML=(`<tspan style="font-family: Impact;">${firstName}</tspan> <tspan style="font-family: cursive;">${lastName}</tspan>`)
}

applyDifferentfont();

var old_dataInsert = dataInsert;
dataInsert = function () {
    old_dataInsert.apply(this, arguments);
    for (var idCaspar in dataCaspar) {
        if (idCaspar.includes('f0')) {
            const aa= document.getElementsByClassName('fname')[0].getElementsByTagName('tspan')[0]
            const firstName=aa.textContent.split(' ')[0];
            const lastName=aa.textContent.split(' ')[1];
            aa.innerHTML=(`<tspan style="font-family: Impact;">${firstName}</tspan> <tspan style="font-family: cursive;">${lastName}</tspan>`)
        }
    }
};

