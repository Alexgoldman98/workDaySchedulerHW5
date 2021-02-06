//global variables
var ninSlot = document.querySelector("#nin")
var tenSlot = document.querySelector("#ten")
var ellSlot = document.querySelector("#ell")
var tweSlot = document.querySelector("#twe")
var oneSlot = document.querySelector("#one")
var twoSlot = document.querySelector("#two")
var thrSlot = document.querySelector("#thr")
var fouSlot = document.querySelector("#fou")
var fivSlot = document.querySelector("#fiv")

const nin = moment(9, 'HH')._i;
const ten = moment(10, 'HH')._i;
const ell = moment(11, 'HH')._i;
const twe = moment(12, 'HH')._i;
const one = moment(13, 'HH')._i;
const two = moment(14, 'HH')._i;
const thr = moment(15, 'HH')._i;
const fou = moment(16, 'HH')._i;
const fiv = moment(17, 'HH')._i;
const late = moment(18, 'HH')._i;

const currentDay =  moment().format("dddd, MMMM Do YYYY, h:mm a");

let time = moment().format("HH");
let currentTime = parseInt(time);

const changeColour = [nin, ten, ell, twe, one, two, thr, fou, fiv]
const slotArray = [ninSlot, tenSlot, ellSlot, tweSlot, oneSlot, twoSlot, thrSlot, fouSlot, fivSlot]

document.getElementById("currentDay").innerHTML = currentDay

//set currentTime equal to the value of the time slots
getTime()
      function getTime(){
        if (nin < currentTime < ten){
          let currentTime = nin;
        } else if (ten < currentTime < ell){
          let currentTime = ten
        } else if (ell < currentTime < twe){
          let currentTime = ell
        } else if (twe < currentTime < one){
          let currentTime = twe
        } else if (one < currentTime < two){
          let currentTime = one
        } else if (two < currentTime < thr){
          let currentTime = two
        } else if (thr < fou){
          let currentTime = thr
        } else if (fou < currentTime < fiv){
          let currentTime = fou
        } else if (fiv < currentTime < late){
          let currentTime = fiv
        } else {
          let currentTime = late
        }
      changeCol()
      }

      console.log(currentTime)
  

//for loop to change the colour of different time slots depending on what time it is
  function changeCol(){
      for(let i=0; i<changeColour.length; i++ ){
        if (changeColour[i] < currentTime) {
        slotArray[i].classList.add('table-secondary', 'm-2')
      } else if (changeColour[i] === currentTime){
        slotArray[i].classList.add('table-danger', 'm-2')
      } else if (changeColour[i] > currentTime){
        slotArray[i].classList.add('table-success', 'm-2')
      }
    }
  }

//Saving entered text to local storage
//save nin 
function saveNin(){ 
    var inputNin = document.getElementById("ninText");
    localStorage.setItem("ninStore", inputNin.value)
}

  if (localStorage.getItem("ninStore") === null){
    document.getElementById('ninText').removeAttribute("placeholder")
    document.getElementById('ninText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("ninStore"))

      var getNine = JSON.stringify(localStorage.getItem('ninStore'))
      document.getElementById('ninText').removeAttribute("placeholder")
      document.getElementById('ninText').setAttribute('placeholder', getNine )
      return false;
});}

//clear nin

function clearNin(){
  localStorage.removeItem('ninStore')
}

//save ten
function saveTen(){ 
    var inputTen = document.getElementById("tenText");
    localStorage.setItem("tenStore", inputTen.value)
}

  if (localStorage.getItem("tenStore") === null){
    document.getElementById('tenText').removeAttribute("placeholder")
    document.getElementById('tenText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("tenStore"))

      var getTen = JSON.stringify(localStorage.getItem('tenStore'))
      document.getElementById('tenText').removeAttribute("placeholder")
      document.getElementById('tenText').setAttribute('placeholder', getTen )
      return false;
});}

//clear ten
function clearTen(){
  localStorage.removeItem('tenStore')
}

//save ell
function saveEll(){ 
    var inputEll = document.getElementById("ellText");
    localStorage.setItem("ellStore", inputEll.value)
}

  if (localStorage.getItem("ellStore") === null){
    document.getElementById('ellText').removeAttribute("placeholder")
    document.getElementById('ellText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("ellStore"))

      var getEll = JSON.stringify(localStorage.getItem('ellStore'))
      document.getElementById('ellText').removeAttribute("placeholder")
      document.getElementById('ellText').setAttribute('placeholder', getEll )
      return false;
});}

//clear ell
function clearEll(){
  localStorage.removeItem('ellStore')
}

//save twe 
function saveTwe(){ 
    var inputTwe = document.getElementById("tweText");
    localStorage.setItem("tweStore", inputTwe.value)
}

  if (localStorage.getItem("tweStore") === null){
    document.getElementById('tweText').removeAttribute("placeholder")
    document.getElementById('tweText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("tweStore"))

      var getTwe = JSON.stringify(localStorage.getItem('tweStore'))
      document.getElementById('tweText').removeAttribute("placeholder")
      document.getElementById('tweText').setAttribute('placeholder', getTwe )
      return false;
});}

//clear twe
function clearTwe(){
  localStorage.removeItem('tweStore')
}

//save one 
function saveOne(){ 
    var inputOne = document.getElementById("oneText");
    localStorage.setItem("oneStore", inputOne.value)
}

  if (localStorage.getItem("oneStore") === null){
    document.getElementById('oneText').removeAttribute("placeholder")
    document.getElementById('oneText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("oneStore"))

      var getOne = JSON.stringify(localStorage.getItem('oneStore'))
      document.getElementById('oneText').removeAttribute("placeholder")
      document.getElementById('oneText').setAttribute('placeholder', getOne )
      return false;
});}

//clear one
function clearOne(){
  localStorage.removeItem('oneStore')
}

//save two 
function saveTwo(){ 
    var inputTwo = document.getElementById("twoText");
    localStorage.setItem("twoStore", inputTwo.value)
}

  if (localStorage.getItem("twoStore") === null){
    document.getElementById('twoText').removeAttribute("placeholder")
    document.getElementById('twoText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("twoStore"))

      var getTwo = JSON.stringify(localStorage.getItem('twoStore'))
      document.getElementById('twoText').removeAttribute("placeholder")
      document.getElementById('twoText').setAttribute('placeholder', getTwo )
      return false;
});}

//clear two
function clearTwo(){
  localStorage.removeItem('twoStore')
}

//save thr 
function saveThr(){ 
    var inputThr = document.getElementById("thrText");
    localStorage.setItem("thrStore", inputThr.value)
}

  if (localStorage.getItem("thrStore") === null){
    document.getElementById('thrText').removeAttribute("placeholder")
    document.getElementById('thrText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("thrStore"))

      var getThr = JSON.stringify(localStorage.getItem('thrStore'))
      document.getElementById('thrText').removeAttribute("placeholder")
      document.getElementById('thrText').setAttribute('placeholder', getThr)
      return false;
});}

//clear thr
function clearThr(){
  localStorage.removeItem('thrStore')
}

//save fou 
function saveFou(){ 
    var inputFou = document.getElementById("fouText");
    localStorage.setItem("fouStore", inputFou.value)
}

  if (localStorage.getItem("fouStore") === null){
    document.getElementById('fouText').removeAttribute("placeholder")
    document.getElementById('fouText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("fouStore"))

      var getFou = JSON.stringify(localStorage.getItem('fouStore'))
      document.getElementById('fouText').removeAttribute("placeholder")
      document.getElementById('fouText').setAttribute('placeholder', getFou)
      return false;
});}

//clear fou
function clearFou(){
  localStorage.removeItem('fouStore')
}

//save fiv
function saveFiv(){ 
    var inputFiv = document.getElementById("fivText");
    localStorage.setItem("fivStore", inputFiv.value)
}

  if (localStorage.getItem("fivStore") === null){
    document.getElementById('fivText').removeAttribute("placeholder")
    document.getElementById('fivText').setAttribute('placeholder', 'Enter text here' )
  } else {
  $(document).ready(function getString(){
      console.log(localStorage.getItem("fivStore"))

      var getFiv = JSON.stringify(localStorage.getItem('fivStore'))
      document.getElementById('fivText').removeAttribute("placeholder")
      document.getElementById('fivText').setAttribute('placeholder', getFiv)
      return false;
});}

//clear fiv
function clearFiv(){
  localStorage.removeItem('fivStore')
}
