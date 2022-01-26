const elementi  = []
class Igraliste{
    constructor(x){
        this.x = x;
        this.y = x * 2;
    }
    static napraviElement(kontejner, i, j){
        let e = document.createElement("DIV");
        kontejner.appendChild(e);
        elementi.push( {htmlElement : e, x: i, y: j})   
    }
}

const figure = {
    duga: [ [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0], [0, 0, 1, 0]],
    kocka:  [ [0, 0 , 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]],
}

function napravi_figuru(n){
    for(let i = 0; i<4; i++){
        for(let j = 0; j<4; j++){
            elementi.forEach(element =>{
                if(element.x == i + 3 && element.y == j+n){
                    if(figure.duga[j][i] == 1){
                        element.htmlElement.style.background = "red";
                        console.log(`i:${i} J:${j}, el:${element.htmlElement}`)
                    }
                }
            });
        }
    }
}


const kontejnerElement = document.querySelector("#kontejner");

let igraliste =  new Igraliste(10);

for(let j = 0; j<igraliste.y; j++){
    for(let i=0; i<igraliste.x; i++){
        Igraliste.napraviElement(kontejner, i, j);
    }
}