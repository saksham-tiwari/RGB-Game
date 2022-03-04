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
    console.log(e.target);  // to get the element
    console.log();  // to get the element tag name alone
    if(e.target.classList.contains("box")){
        console.log(e.target.style.backgroundColor, mainCol);
        if(e.target.style.backgroundColor===mainCol){
            console.log("success");

            document.querySelector(".message").innerHTML="Success!!"
            document.querySelector(".top").style.backgroundColor=mainCol
            var boxes = document.querySelectorAll(".box")
            console.log(boxes);
            for(let i=0;i<boxes.length;i++){
                console.log(boxes[i]);
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
    console.log(document.querySelector(".colors").children.length);
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
    console.log(c1,c2,c3,rgb);

    const box1 = document.createElement("div")
    box1.classList.add("box")
    box1.id="box"+boxNum;
    boxNum++;
    box1.style.backgroundColor = rgb
    document.querySelector(".colors").appendChild(box1);
}
function gen6(){
    let x = Math.floor((Math.random() * 6));
    console.log(x);

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
    console.log(x);

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