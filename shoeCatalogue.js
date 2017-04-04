
var shoeData=document.querySelector(".shoeData");
var unOrdered =document.getElementById('#output');
var drop=document.querySelector('#drop');
var myTemplate=document.querySelector('.myTemplate').innerHTML;
var button = document.querySelector('.search');


var myTemplateInstance = Handlebars.compile(myTemplate);

var data = [
  { brand:'rubi',color:'blue',size:"5",in_stock:"5"},
  { brand:'aldo',color:'red',size:"6",in_stock:"7"}
];

var prdctDrpDwn = document.querySelector('#prdctDrpDwn');
var brandDrpDwn = document.querySelector('#brandDrpDwn');
var colorDrpDwn = document.querySelector('#colorDrpDwn');
var sizeDrpDwn = document.querySelector('#sizeDrpDwn');

var brands = document.getElementsByName('brand');
var colors = document.getElementsByName('color');
var sizes = document.getElementsByName('size');

button.addEventListener('click', function () {
  if(brandDrpDwn.value === brands[0].textContent && colorDrpDwn.value === colors[0].textContent && sizeDrpDwn.value === sizes[0].textContent)
  {unOrdered.innerHTML= myTemplateInstance(data[0]);}
});
// var value=myTemplateInstance(data);
// document.getElementById("output").innerHTML=data;



var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slideShow");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

// function searchShoes(){
//   const li=document.createElement('li');
//   li.textContent=text;
//   ul.appendChild('li');
//
// }

//
// drop.addEventListener('change',function(e){
//   console.log(e.target.value);
//   var selectedShoe=shoeData.value;
//
//   var allShoes=document.querySelectorAll('li');
//   var value=myTemplateInstance(data);
//     for(var i=0;i<allShoes.length;i++){
//       if(allShoes[i].innerHTML.startsWith(e.target.value)){
//         document.getElementById("output").innerHTML=shoeData.value;
//       }
//     }
// });



// console.log(allShoes);
//     document.getElementById('li').innerHTML=li.value;
// }
// else{
//   allShoes[i].style.display='none'
// }
// }
// });
