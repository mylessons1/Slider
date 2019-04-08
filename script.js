var range=document.querySelector('.number');
var rangeNum=document.querySelector('.range-num');
range.oninput= function () {
    //console.log(this.value);
    rangeNum.style.left=this.value +'%';
    rangeNum.innerHTML=this.value;
};
