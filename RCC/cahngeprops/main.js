const setPosionf0=(x,y)=>{
    const elementId='f0'
    const gElement= document.getElementById(elementId);
    const textElement= document.getElementById(elementId).getElementsByTagName('text')[0];
    const tspanElement= document.getElementById(elementId).getElementsByTagName('text')[0].getElementsByTagName('tspan')[0];
    // console.log(gElement)
    
    // position at 0,0
    const ctm=gElement.getCTM();
    gElement.setAttribute('transform', `matrix(${ctm.a} ${ctm.b} ${ctm.c} ${ctm.d} 0 0)`)
    tspanElement.setAttribute('x', x)
    tspanElement.setAttribute('y', y+35)
}


const setPosionf1=(x,y)=>{
const elementId='f1'
const gElement= document.getElementById(elementId);
const rectElement= document.getElementById(elementId).getElementsByTagName('rect')[0];
// console.log(gElement)

// position at 0,0
const ctm=gElement.getCTM();
gElement.setAttribute('transform', `matrix(${ctm.a} ${ctm.b} ${ctm.c} ${ctm.d} 0 0)`)
rectElement.setAttribute('x', x)
rectElement.setAttribute('y', y)

}

//change fill 
document.getElementById('f1').getElementsByTagName('rect')[0].style.fill='yellow';


setPosionf0(0,0)
setPosionf1(200,200)