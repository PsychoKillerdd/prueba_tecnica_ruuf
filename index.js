const bigSquere = (y,x) => y * x;
const  square = (a,b) => a * b;
let roof = bigSquere(2,4);
let panel = square(1,2);
result = roof/panel;
// if(typeof (result)
// console.log(result);
roof = bigSquere(1,10);
panel =  square(2,2);
result = roof/panel;
if(!Number.isInteger(result)){
    result = Math.floor(result);
}
console.log(result);

const totalPanels = (highRoof, widthRoof, highPanel,widthPanel ) => {
    const width = Math.floor(widthRoof / widthPanel);
    const high = Math.floor(highRoof / highPanel);
    return width * high;
};

const example3 = totalPanels(1,10,2,2)
console.log(example3)