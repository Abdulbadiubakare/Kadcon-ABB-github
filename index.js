function myFunction(){
  document.getElementById("sidebar").style.display = "none";
}
function openForm() {
  document.getElementById("logform").style.display = "initial";
}

function closeForm() {
  document.getElementById("logform").style.display = "none";
}


function shoesdt(){ // open shoes details
  document.getElementById("shoesdt").style.display = "block"
}
function shoeclosedt() { //close shes details
  document.getElementById("shoesdt").style.display = "none"
}


function watchdt(){
  document.getElementById("watchdt").style.display = "block"
}
function watchclosedt() {
  document.getElementById("watchdt").style.display = "none"
}

function bagdt(){
  document.getElementById("bagdt").style.display = "block"
}
function bagclosedt() {
  document.getElementById("bagdt").style.display = "none"
}

function mobiledt(){
  document.getElementById("mobiledt").style.display = "block"
}
function mobileclosedt() {
  document.getElementById("mobiledt").style.display = "none"
}

function laptopdt(){
  document.getElementById("laptopdt").style.display = "block"
}
function laptopclosedt() {
  document.getElementById("laptopdt").style.display = "none"
}

function clothedt(){
  document.getElementById("clothedt").style.display = "block"
}
function clotheclosedt() {
  document.getElementById("clothedt").style.display = "none"
}



function openAboutitem(){
  document.getElementById("aboutitem").style.display = "block"
}

function closeItem(){
  document.getElementById("aboutitem").style.display = "none"
}
function openMenu(){
  document.getElementById("sidebar").style.display = "block";
}
function closeMenu(){
  document.getElementById("sidebar").style.display = "none"
}


//close the sidebar when u click on any place around the page
var modal = document.getElementById('sidebar');
        
        window.onclick = function(event){
          if (event.target == model) {
            model.style.display = 'none';
          }
        } 

