var mainCol;
var boxNum = 0;
function loadFunc(){
    // let c1=Math.floor((Math.random() * 100) + 1);
    let x = Math.floor((Math.random() * 3)+1);
    genMainCol()
    gen3(x)
    document.querySelector(".colors").style.background="black"
    
}
window.onclick = e => {
    if(e.target.classList.contains("box")){
        if(e.target.style.backgroundColor===mainCol){

            document.querySelector(".message").innerHTML="Success!!"
            document.querySelector(".top").style.backgroundColor=mainCol
            var boxes = document.querySelectorAll(".box")
            for(let i=0;i<boxes.length;i++){
                boxes[i].style.backgroundColor=mainCol
                boxes[i].style.border= "1px white solid"
            }
        }
        else{
            document.querySelector(".message").innerHTML="Try Again!!"
            e.target.style.backgroundColor="black"
            e.target.style.border="none"
        }
    }

}


function genMainCol(){
    let c1 = Math.floor((Math.random() * 256));
    let c2 = Math.floor((Math.random() * 256));
    let c3 = Math.floor((Math.random() * 256));
    mainCol= "rgb("+c1+", "+c2+", "+c3+")"
    document.querySelector(".rgbcode").innerHTML=mainCol
    document.querySelector(".message").innerHTML=""
    document.querySelector(".top").style.backgroundColor="rgb(253, 213, 69)"

}

function newCol(){
    genMainCol()
    if(document.querySelector(".colors").children.length===3){
        let x = Math.floor((Math.random() * 3)+1);
        gen3()
    } else {
        
        gen6()
    }
}

function genBox(){

    let c1 = Math.floor((Math.random() * 256));
    let c2 = Math.floor((Math.random() * 256));
    let c3 = Math.floor((Math.random() * 256));
    let rgb = "rgb("+c1+","+c2+","+c3+")"

    const box1 = document.createElement("div")
    box1.classList.add("box")
    box1.id="box"+boxNum;
    boxNum++;
    box1.style.backgroundColor = rgb
    document.querySelector(".colors").appendChild(box1);
}
function gen6(){
    let x = Math.floor((Math.random() * 6));

    document.querySelector(".message").innerHTML=""
    document.querySelector(".top").style.backgroundColor="rgb(253, 213, 69)"

    const myNode = document.querySelector(".colors");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
    boxNum=0;
    let c=0;
    do{
        switch(c){
            case x:
                const box1 = document.createElement("div")
                box1.classList.add("box")
                box1.style.backgroundColor = mainCol
                document.querySelector(".colors").appendChild(box1);
                box1.id="box"+boxNum;
                boxNum++;
                c++
                break;
            default:
                genBox()
                c++

                break;
        }
    }while(c<6);
    

    
    // genBox()
    // genBox()
    // genBox()
    // genBox()
    // genBox()
    // genBox()
}
function gen3(){
    let x = Math.floor((Math.random() * 3));

    document.querySelector(".message").innerHTML=""
    document.querySelector(".top").style.backgroundColor="rgb(253, 213, 69)"

    const myNode = document.querySelector(".colors");
    while (myNode.lastElementChild) {
        myNode.removeChild(myNode.lastElementChild);
    }
    boxNum=0;
    let c=0;
    do{
        switch(c){
            case x:
                const box1 = document.createElement("div")
                box1.classList.add("box")
                box1.style.backgroundColor = mainCol
                document.querySelector(".colors").appendChild(box1);
                box1.id="box"+boxNum;
                boxNum++;
                c++
                break;
            default:
                genBox()
                c++

                break;
        }
    }while(c<3);
    


}
