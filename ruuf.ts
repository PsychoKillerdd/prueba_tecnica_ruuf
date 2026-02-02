const bigSquere = (y: number, x: number): number => y * x;
const square = (a: number, b: number): number => a * b;
const roof: number = bigSquere(2, 4);
const panel: number = square(1, 2);
const result: number = roof / panel;


interface Calculate {
    highRoof: number,
    widthRoof: number,
    highPanel: number,
    widthPanel: number
}

const totalPanels = (params: Calculate): number => {
    // * const totalRoofArea:number = params.highRoof * params.widthRoof
    const widthPanelsTotal: number = Math.floor(params.widthRoof / params.widthPanel);
    const highPanelsTotal: number = Math.floor(params.highRoof / params.highPanel);
    const totalPanelsNormal: number = widthPanelsTotal * highPanelsTotal;
    // * totalPanelsArea es el area de los primeros paneles, estos paneles dejan un resto y si en ese resto queda espacio hay que revisar si caben paneles
    // * const totalPanelsArea:number = widthPanelsTotal * highPanelsTotal;
    // ?pero esto no es suficiente debo saber el resto del alto y el largo
    // *const restArea:number = totalRoofArea - totalPanelsArea;
    // ! ahora debo girar esto en 90 grados para revisar si caben paneles dados vuelta

    //resto
    const restWidth = params.widthRoof - (params.widthPanel * widthPanelsTotal);
    const restHeight = params.highRoof - (params.highPanel * highPanelsTotal);

    const verticalRotated = Math.floor(restWidth / params.highPanel) *
        Math.floor(params.highRoof / params.widthPanel);
    const horizontalRotated = Math.floor(params.widthRoof / params.highPanel) *
        Math.floor(restHeight / params.widthPanel);

    const option1: number = totalPanelsNormal + verticalRotated;
    const option2: number = totalPanelsNormal + horizontalRotated;
    return Math.max(option1, option2);
};

console.log(totalPanels({highRoof: 3, widthRoof: 5, highPanel: 2, widthPanel: 1}));
console.log(totalPanels({highRoof: 2, widthRoof: 4, highPanel: 1, widthPanel: 2}));
console.log(totalPanels({highRoof:3, widthRoof: 5, highPanel: 1, widthPanel: 2}));
console.log(totalPanels({highRoof: 1, widthRoof: 10, highPanel: 2, widthPanel: 2}));




