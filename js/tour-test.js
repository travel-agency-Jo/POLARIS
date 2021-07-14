
'use strict';
//#region  sum
let italy = document.getElementById('demoFormItaly');
let greece = document.getElementById('demoFormGreece');
let singaporece = document.getElementById('demoFormSingapore');
let switz = document.getElementById('demoFormSwitzerland');
let tahiti = document.getElementById('demoFormTahiti');
let brazil = document.getElementById('demoFormBrazil');

let doSum=function(city){
  let chBoxes=document.querySelectorAll(`#${city.id} input[type=checkbox]`);
  let initvalueEl=document.querySelector(`#${city.id} input[name=total]`);
  let initvalue=parseInt(initvalueEl.getAttribute('data-value'));
  let total=initvalue;
  chBoxes.forEach((item)=>{
    if(item.checked){
      total+=parseInt(item.value);
    }
  });
  initvalueEl.value=total;
};



greece.addEventListener('submit',function(event){
  event.preventDefault();
  doSum(greece);
  let countryName=this.id.split('rm')[1];
  let arr=tours.filter((item)=>{
    return item.tripName !== countryName;
  });
  tours=arr;
  new Trips(this);
  localStorage.setItem('tours',JSON.stringify(tours));
});
singaporece.addEventListener('submit',function(event){
  event.preventDefault();
  doSum(singaporece);
  let countryName=this.id.split('rm')[1];
  let arr=tours.filter((item)=>{
    return item.tripName !== countryName;
  });
  tours=arr;
  new Trips(this);
  localStorage.setItem('tours',JSON.stringify(tours));
});
switz.addEventListener('submit',function(event){
  event.preventDefault();
  doSum(switz);
  let countryName=this.id.split('rm')[1];
  let arr=tours.filter((item)=>{
    return item.tripName !== countryName;
  });
  tours=arr;
  new Trips(this);
  localStorage.setItem('tours',JSON.stringify(tours));
});
tahiti.addEventListener('submit',function(event){
  event.preventDefault();
  doSum(tahiti);
  let countryName=this.id.split('rm')[1];
  let arr=tours.filter((item)=>{
    return item.tripName !== countryName;
  });
  tours=arr;
  new Trips(this);
  localStorage.setItem('tours',JSON.stringify(tours));
});
brazil.addEventListener('submit',function(event){
  event.preventDefault();
  doSum(brazil);
  let countryName=this.id.split('rm')[1];
  let arr=tours.filter((item)=>{
    return item.tripName !== countryName;
  });
  tours=arr;
  new Trips(this);
  localStorage.setItem('tours',JSON.stringify(tours));
});

italy.addEventListener('submit',function(event){
  event.preventDefault();
  doSum(italy);
  let countryName=this.id.split('rm')[1];
  let arr=tours.filter((item)=>{
    return item.tripName !== countryName;
  });
  tours=arr;
  new Trips(this);
  localStorage.setItem('tours',JSON.stringify(tours));
});
//#endregion sum

//#region savedata
let tours=new Array();
function Trips(country){
  this.tripName=country.id.split('rm')[1];
  this.totals=country.total.value;
  this.extraTours=new Array();
  this.getExtraTours=function(){
    let chBoxes=document.querySelectorAll(`#${country.id} input[type=checkbox]`);
    chBoxes.forEach((item)=>{
      this.extraTours.push({city:item.name,checked:item.checked});
    });
  };
  this.flagSrc=country.getAttribute('flag')
  this.getExtraTours();
  tours.push(this);
}

//#endregion
