let navbar=document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick=()=>{
navbar.classList.toggle('active');
searchform.classList.remove('active');
cartitem.classList.remove('active');
}
let searchform=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
searchform.classList.toggle('active');
navbar.classList.remove('active');
cartitem.classList.remove('active');
}
let cartitem=document.querySelector('.cart-items-container');
document.querySelector('#cart-btn').onclick=()=>{
cartitem.classList.toggle('active');
navbar.classList.remove('active');
searchform.classList.remove('active');
}
window.onscroll=()=>{
navbar.classList.remove('active');
searchform.classList.remove('active');
cartitem.classList.remove('active');
}
let mydialog=document.getElementById('mydialog');
function opendialog(){
mydialog.style.display='block';
}
function closedialog(){
mydialog.style.display='none';
}
function ok(){
    mydialog.style.display='none';
}
let fers=document.getElementById('fers');
function on(){
fers.style.display='none';
}