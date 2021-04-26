
let x = 0; 
let y = 0;
/* creat 9 index for every squer */
let index1=""
let index2=""
let index3=""
let index4=""
let index5=""
let index6=""
let index7=""
let index8=""
let index9=""

/* creat function to add X or O every square */


const squareOne = ()=>{

   if(x%2 === 0){

    const addX = document.querySelector("#prch1");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index1="o"
   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch1") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "

   index1="x"


   }
   const d =document.querySelector(".buxch1")
   d.remove();
   chek()
   ++x;

}

const squareTwo = ()=>{

   if(x%2 === 0){

    const addX = document.querySelector("#prch2");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index2="o"

   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch2") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "

   index2="x"

   }
   const d =document.querySelector(".buxch2")
   d.remove();
   chek()
   ++x;


}

const squareThree = ()=>{

   if(x%2 === 0){

    const addX = document.querySelector("#prch3");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index3="o"

   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch3") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "

   index3="x"

   }
   const d =document.querySelector(".buxch3")
   d.remove();
   chek()
   ++x;


}

const squareFour = ()=>{

   if(x%2 === 0){

    const addX = document.querySelector("#prch4");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index4="o"

   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch4") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "

   index4="x"
   }
   const d =document.querySelector(".buxch4")
   d.remove();
   chek()
   ++x;


}

const squareFive = ()=>{

   if(x%2 === 0){
    const addX = document.querySelector("#prch5");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index5="o"
   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch5") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "
   index5="x"

   }
   const d =document.querySelector(".buxch5")
   d.remove();
   chek()

   ++x;


}

const squareSix = ()=>{

   if(x%2 === 0){

    const addX = document.querySelector("#prch6");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index6="o"

   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch6") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "

   index6="x"

   }
   const d =document.querySelector(".buxch6")
   d.remove();
   chek()

   ++x;


}

const squareSeven = ()=>{

   if(x%2 === 0){

    const addX = document.querySelector("#prch7");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index7="o"

   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch7") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "

   index7="x"

   }
   const d =document.querySelector(".buxch7")
   d.remove();
   chek()

   ++x;

}

const squareEight = ()=>{

   if(x%2 === 0){

    const addX = document.querySelector("#prch8");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index8="o"

   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch8") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "

   index8="x"

   }
   const d =document.querySelector(".buxch8")
   d.remove();
   chek()

   ++x;


}

const squareNine = ()=>{

   if(x%2 === 0){

    const addX = document.querySelector("#prch9");
    addX.innerHTML = "o"
    document.getElementById("nextOne").innerHTML = " X "
    index9="o"

   }
    if(x%2 !== 0){
   const addO = document.querySelector("#prch9") 
   addO.innerHTML = "x"
   document.getElementById("nextOne").innerHTML = " o "

   index9="x"

   }
   const d =document.querySelector(".buxch9")
   d.remove();
   chek()
   ++x;
}

/* cryate function chek when anyone wins finsh game  */


const chek = () => {
   if (index1=== "x" && index2==="x" && index3==="x"){
      document.getElementById("prch1").style.color="red";
      document.getElementById("prch2").style.color="red";
      document.getElementById("prch3").style.color="red";
      winnerX();
      
   }

   if (index1=== "o" && index2==="o" && index3==="o"){
      document.getElementById("prch1").style.color="red";
      document.getElementById("prch2").style.color="red";
      document.getElementById("prch3").style.color="red";
      winnerO();
   }

   if (index4=== "x" && index5==="x" && index6==="x"){
      document.getElementById("prch4").style.color="red";
      document.getElementById("prch5").style.color="red";
      document.getElementById("prch6").style.color="red";
      winnerX();
   }
   if (index4=== "o" && index5==="o" && index6==="o"){
      document.getElementById("prch4").style.color="red";
      document.getElementById("prch5").style.color="red";
      document.getElementById("prch6").style.color="red";
      winnerO();
   }
   if (index7=== "x" && index8==="x" && index9==="x"){
      document.getElementById("prch7").style.color="red";
      document.getElementById("prch8").style.color="red";
      document.getElementById("prch9").style.color="red";
      winnerX();
   }
   if (index7=== "o" && index8==="o" && index9==="o"){
      document.getElementById("prch7").style.color="red";
      document.getElementById("prch8").style.color="red";
      document.getElementById("prch9").style.color="red";
      winnerO();
   }

   if (index1=== "x" && index4==="x" && index7==="x"){
      document.getElementById("prch1").style.color="red";
      document.getElementById("prch4").style.color="red";
      document.getElementById("prch7").style.color="red";
      winnerX();
   }
   if (index1=== "o" && index4==="o" && index7==="o"){
      document.getElementById("prch1").style.color="red";
      document.getElementById("prch4").style.color="red";
      document.getElementById("prch7").style.color="red";
      winnerO();
   }
   if (index2=== "x" && index5==="x" && index8==="x"){
      document.getElementById("prch2").style.color="red";
      document.getElementById("prch5").style.color="red";
      document.getElementById("prch8").style.color="red";
      winnerX();
   }
   if (index2=== "o" && index5==="o" && index8==="o"){
      document.getElementById("prch2").style.color="red";
      document.getElementById("prch5").style.color="red";
      document.getElementById("prch8").style.color="red";
      winnerO();
   }

   if (index3=== "x" && index6==="x" && index9==="x"){
      document.getElementById("prch3").style.color="red";
      document.getElementById("prch6").style.color="red";
      document.getElementById("prch9").style.color="red";
      winnerX();
   }
   if (index3=== "o" && index6==="o" && index9==="o"){
      document.getElementById("prch3").style.color="red";
      document.getElementById("prch6").style.color="red";
      document.getElementById("prch9").style.color="red";
      winnerO();
   }

   if (index1=== "x" && index5==="x" && index9==="x"){
      document.getElementById("prch1").style.color="red";
      document.getElementById("prch5").style.color="red";
      document.getElementById("prch9").style.color="red";
      winnerX();
   }
   if (index1=== "o" && index5==="o" && index9==="o"){
      document.getElementById("prch1").style.color="red";
      document.getElementById("prch5").style.color="red";
      document.getElementById("prch9").style.color="red";
      winnerO();
   }
   if (index3=== "x" && index5==="x" && index7==="x"){
      document.getElementById("prch3").style.color="red";
      document.getElementById("prch5").style.color="red";
      document.getElementById("prch7").style.color="red";
      winnerX();
      }
   if (index3=== "o" && index5==="o" && index7==="o"){
      document.getElementById("prch3").style.color="red";
      document.getElementById("prch5").style.color="red";
      document.getElementById("prch7").style.color="red";
      winnerO();
   }
      
}


/* function wineer x It will become red */

const winnerX =()=>{
   document.getElementById("result").innerHTML = " X "
   setTimeout(function(){

      location.reload()
    }, 1000);

}
/* function wineer o It will become red */

const winnerO =()=>{
   document.getElementById("result").innerHTML = " O "

   setTimeout(function(){

      location.reload()
    }, 1000);

}



















    
