document.addEventListener("DOMContentLoaded",()=>{
const allBorder=document.getElementById('all');
const border=document.getElementById('Border');
const all_value=document.getElementById('all_value');
const border_value=document.getElementById('border_value');
const code=document.getElementById('code');
const continer=document.querySelector('.continer');
const btncopy=document.querySelector('#btncopy');
const border_styleElement=document.getElementById('border_style');

var radius=10;
var border_style ="double";
var border_size=3;
var coding="";
function allBordersUpdate(){
    radius=allBorder.value;
    border_size=border.value;
    all_value.innerText=radius+"px";
    border_value.innerText= border_size+"px";
    coding=`
    border-radius:${radius}px;
    border:${border_size}px ${border_style} black;
    `;
    code.value=coding;
    continer.style.cssText=coding;
  
}

allBorder.addEventListener("mousemove",allBordersUpdate);
allBorder.addEventListener("change",allBordersUpdate);


border.addEventListener("mousemove",allBordersUpdate);
border.addEventListener("change",allBordersUpdate);


btncopy.addEventListener('click',()=>{
    document.querySelector('textarea').select();
    document.execCommand('copy');
    alert("code copied!!")
});
allBordersUpdate();


border_styleElement.addEventListener('change',function(){
    border_style=this.value;
    allBordersUpdate();
})
});


    