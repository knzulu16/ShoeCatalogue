var shoes = [
  {ProductType:'Pump',
  Brand:'Rubi',
  Color:'Blue',
  Size:"5",
  Price:'R1500.00',
  in_stock:"5"},

  {
  ProductType:'Buckles',
  Brand:'Aldo',
  Color:'Brown',
  Size:"6",
  Price:"R2000",
  in_stock:"7",

},
  { ProductType:'Lace-UPS',
    Brand:'Aldo',
    Color:'Pink',
    Size:'7',
    Price:'R2500.00',
    in_stock:'8'
  },
  { ProductType:'Lace-UPS',
    Brand:'Lacoste',
    Color:'Black',
    Size:'6',
    Price:'R1500.00',
    in_stock:'10'
  },
  {ProductType:'Sneaker',
    Brand:'Rubi',
    Color:'White',
    Size:'8',
    Price:'R1200.00',
    in_stock:'12'
  }
];

var myTemplate= document.querySelector('#myTemplate').innerHTML;
var myTemplateInstance = Handlebars.compile(myTemplate);
var results = myTemplateInstance({data:shoes});
document.querySelector('.shoeDisplay').innerHTML += results;
var search = document.querySelector('.search');

search.addEventListener('click',filterData);

function filterData(){

var allShoes = document.querySelectorAll('.shoeDisplay');
var selectedProduct=document.querySelector('.productDrpDwn');
var selectedBrandName=document.querySelector('.brandDrpDwn');
var selectedColor = document.querySelector('.colorDrpDwn');
var selectedSize= document.querySelector('.sizeDrpDwn');
var selectedPrice=document.querySelector('.priceDrDwn');

var filteredList = [];
conosole.log(filteredList);
  for (var i = 0; i < shoes.length; i++){
    //  console.log(shoes[i]);
    if(selectedProduct.value == shoes[i].ProductType &&
        selectedBrandName.value ==shoes[i].Brand &&
        selectedColor.value ==shoes[i].Color &&
        selectedSize.value == shoes[i].Size){
        filteredList.push(shoes);

      }
  }

  document.getElementsByClassName('shoeFilter').innerHTML;

  // console.log(filteredList(shoes[i]));
// var data=""
// for(var i in data){
//   selectedColor.push(color);
// }


}





function AddText(){
  console.log('hgvbytf', document.querySelector('#ProductType').value);
  shoes.push({
    ProductType:document.querySelector('#ProductType').value,
    Brand:document.querySelector('#Brand').value,
    Color:document.querySelector('#Color').value,
    Size:document.querySelector('#Size').value,
    Price:document.querySelector('#Price').value,
    in_stock:document.querySelector('#Stock').value
  });

  var results = myTemplateInstance({data:shoes});
  document.querySelector('.shoeDisplay').innerHTML = results;
  }

























//This will display the result of your template combined with the data on the screen.



//
//
//
// //
// var colorSelect=document.querySelector(".colorTemplate").innerHTML;
// colorSelect=Handlebars.compile(colorSelect);
// var sizeSelect=document.querySelector(".sizeTemplate").innerHTML;
// sizeSelect=Handlebars.compile(sizeSelect);
// var brandSelect=document.querySelector('.brandTemplate').innerHTML;
// brandSelect=Handlebars.compile(brandSelect);
// //
// function searchButton(){
// var array=[];
// for(var i=0;i<shoes.length;i++){
//   // console.log(data[i]);
//   if(selectedBrandName.value === shoes[i].Brand &&selectedColor.value === shoes[i].Color &&
//     selectedSize.value === shoes[i].Size && selectedPrice.value===shoes[i].Price)
//   {
//     array.push(shoes[i]);
//     unOrdered.innerHTML= myTemplateInstance(shoes[i]);
//
//   }
//
//   // var selectedProduct= document.getElementById('prdctDrpDwn');
//
//   var selectedBrandName=document.getElementById('brandDrpDwn');
//   var selectedColor = document.getElementById('colorDrpDwn');
//   var selectedSize= document.getElementById('sizeDrpDwn');
//   var selectedPrice=document.getElementById('PriceDrDwn');
//   // var brands = document.getElementsByName('brand');
//   // var colors = document.getElementsByName('color');
//   // var sizes = document.getElementsByName('size');
//
// var list=document.querySelector("data");
// var unOrdered =document.getElementById('output');
// // var drop=document.querySelector('#drop');
// // var myTemplate=document.querySelector('#myTemplate').innerHTML;
// var templateScript=document.querySelector("#myTemplate").innerHTML;
// var results=myTemplateInstance({shoeData:data})
// document.querySelector(".tbody").innerHTML = results;
// var button = document.querySelector('.search');
//
//
// // button.addEventListener('click', function(e){
// //   // search.e.target.value;
// //
// // });
//
//   // console.log(selectedBrandName.value);
//     // unOrdered[i].style.display='block'
//             // document.getElementById("output").innerHTML=
//             // output.innerHTML = myTemplateInstance(data);
//             // var source = document.getElementById('display').innerHTML;
//
//   else{
//     data[i].style.display = "none";
//   }
//
// }
// }
//
//
//
//
//
//
//
//
//
//
// // var value=myTemplateInstance(data);
// // document.getElementById("output").innerHTML=data;
//
//
//
//
//
//
var myIndex = 0;

function carousel(){
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
carousel();
//
// // function searchShoes(){
// //   const li=document.createElement('li');
// //   li.textContent=text;
// //   ul.appendChild('li');
// //
// // }
//
// //
// // drop.addEventListener('change',function(e){
// //   console.log(e.target.value);
// //   var selectedShoe=shoeData.value;
// //
// //   var allShoes=document.querySelectorAll('li');
// //   var value=myTemplateInstance(data);
// //     for(var i=0;i<allShoes.length;i++){
// //       if(allShoes[i].innerHTML.startsWith(e.target.value)){
// //       }
// //     }
// // });
//
//
//
// // console.log(allShoes);
// //     document.getElementById('li').innerHTML=li.value;
// // }
// // else{
// //   allShoes[i].style.display='none'
// // }
// // }
// // });
