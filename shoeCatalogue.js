var count= 0;
function carousel(){

  var x = document.getElementsByClassName("slideShow");
  for (var i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  count++;
  if (count > x.length){
    count = 1
  }
  x[count-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
carousel();






var search = document.querySelector('#search');
var brands = document.getElementsByName('Brand');
var colors = document.getElementsByName('Color');
var sizes = document.getElementsByName('Size');
var ProductType=document.getElementsByName('ProductType');
var Price=document.getElementsByName('Price');
var addButton=document.querySelector('.addButton');
var submitButton=document.querySelector('.search');
var shoeDisplay=document.querySelector('.shoeDisplay');
var shoeList='';
var shoes = [
  {ProductType:'Pump',
  Brand:'Rubi',
  Color:'Blue',
  Size:"5",
  Price:'R1500.00',
  in_stock:"5"},

  {
  ProductType:'Buckles',
  Brand:'Schutz',
  Color:'Brown',
  Size:"6",
  Price:"R2000",
  in_stock:"7",

},
  { ProductType:'EllyClay',
    Brand:'Aldo',
    Color:'Pink',
    Size:'7',
    Price:'R2500.00',
    in_stock:'8'
  },
  { ProductType:'Lace-UPS',
    Brand:'Indigo',
    Color:'Black',
    Size:'6',
    Price:'R1500.00',
    in_stock:'10'
  },
  {ProductType:'Sneaker',
    Brand:'Lacoste',
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




search.addEventListener('click',filterData);
function filterData(){
  var shoeDisplay = document.querySelectorAll('.shoeDisplay');
  var selectedProduct=document.querySelector('.productDrpDwn');
  var selectedBrandName=document.querySelector('.brandDrpDwn');
  var selectedColor = document.querySelector('.colorDrpDwn');
  var selectedSize= document.querySelector('.sizeDrpDwn');
  var selectedPrice=document.querySelector('.priceDrDwn');

  var filteredList = [];
  for (var i = 0; i < shoes.length; i++){
    var array = shoes[i];
    if(selectedProduct.value == array.ProductType&&
      selectedBrandName.value ==array.Brand&&
      selectedColor.value ==array.Color &&
      selectedSize.value == array.Size){
        filteredList.push(array);

      }
      else if(selectedColor.value ==array.Color &&
        selectedSize.value == array.Size){
              filteredList.push(array);
}
      else if(selectedSize.value == array.Size){
      filteredList.push(array);
}
    }
    var results = myTemplateInstance({data:filteredList});
    document.querySelector('.shoeDisplay').innerHTML = results;

  }
function AddText(){

       var ProductTypeValue = ProductType.value;
       var BrandValue = Brand.value;
       var ColorValue = Color.value;
       var SizeValue=Size.value;
       var PriceValue=Price.value;



  for(var i=0; i < shoes.length; i++){
    if(shoes[i].ProductType == document.querySelector('#ProductType').value) {
      return;
    }
  };
  for(var i=0; i < shoes.length; i++) {
    if(shoes[i].Color == document.querySelector('#Color').value) {
      return;
    }
  };
  for(var i=0; i < shoes.length; i++) {
    if(shoes[i].Brand == document.querySelector('#Brand').value) {
      return;
    }
  };
  for(var i=0; i < shoes.length; i++) {
    if(shoes[i].Size == document.querySelector('#Size').value){
      return;
    }
  };
  for(var i=0; i < shoes.length; i++) {
    if(shoes[i].Price == document.querySelector('#Price').value) {
      return;
    }

  };

  if(ProductType.value!== ''
      && Brand.value!== ''
      && Color.value!== ''
    && SizeValue!==''
  && PriceValue!==''){

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
}
//
// function uniqProductTList(dataList){
//   /*var ProductType=[];
//   var ProductTypeMap={};
//   for(var i=0;i<dataList.length;i++){
//     var ProductTypeData=dataList[i];
//     if(ProductTypeMap[ProductTypeData.ProductType]===undefined){
//       ProductTypeMap[ProductTypeData.ProductType]=colorData.ProductType;
//       ProductType.push(ProductTypeData.ProductType);
//     }
//
//   }
//   return ProductType;*/
//   return pushCategoryValue(colorData.ProductType)
// }
//
// function pushCategoryValue(value) {
//   var Type=[];
//   var TypeMap={};
//   for(var i=0;i<dataList.length;i++){
//     var TypeData=dataList[i];
//       if(TypeMap[category]===undefined){
//         ProductTypeMap[category]=value;
//         Type.push(TypeData);
//       }
//   }
//   return Type;
// }
// function uniqColorList(dataList){
//   /*var color=[];
//   var colorMap={};
//   for(var i=0;i<dataList.length;i++){
//     var colorData=dataList[i];
//     if(colorMap[colorData.Color]===undefined){
//       colorMap[colorData.Color]=colorData.Color;
//       color.push(colorData.Color);
//     }
//
//   }
//   return color;*/
//   pushCategoryValue(colorData.color)
// }
// function uniqbrandList(dataList){
//   var brand=[];
//   var brandMap={};
//   for(var i=0;i<dataList.length;i++){
//     var brandData=dataList[i];
//     if(brandMap[brandData.brand]===undefined){
//       brandMap[brandData.brand]=brandData.brand;
//       brand.push(brandData.brand);
//     }
//
//   }
//   return brand;
// }
//
// function uniqsizeList(dataList){
//   var size=[];
//   var sizeMap={};
//   for(var i=0;i<dataList.length;i++){
//     var sizeData=dataList[i];
//     if(sizeMap[sizeData.size]===undefined){
//       sizeMap[sizeData.size]=sizeData.size;
//       size.push(sizeData.size);
//     }
//
//   }
//   return size;
// }
// function uniqpriceList(dataList){
//   var price=[];
//   var priceMap={};
//   for(var i=0;i<dataList.length;i++){
//     var priceData=dataList[i];
//     if(priceMap[priceData.brand]===undefined){
//       priceMap[priceData.price]=priceData.price;
//       price.push(priceData.price);
//     }
//
//   }
//   return price;
// }
//
//
//
//
// function displayData(data, shoeList){
// var productType=uniqProductTList(data);
// var brand=uniqbrandList(data);
// var color=uniqColorList(data);
// var size=uniqsizeList(data);
// var price=uniqpriceList(data);
//
// shoeDisplay.innerHTML=myTemplateInstance({
//   productType:     productType.sort(),
//   brand:           brand.sort(),
//   color:           color.sort(),
//   size:            size.sort(),
//   price:           price.sort(function(a,b){
//     return a-b;
//   })
//
// })
// for(var a=0;a<data.length;a++){
//   var shoeData=data[a];
//   productType.push(shoeData);
//   brand.push(shoeData);
//   color.push(shoeData);
//   size.push(shoeData);
//   price.push(shoeData);
// }
// }
// shoeDisplay.addEventListener('click',function(evt){
// if(evt.target.name==='submitButton'){
//   var filteredProductType=[];
//   for(var j=0;j<ProductType.length;j++){
//     var product=ProductType[j];
//     if(product.value===product.value){
//       filteredProductType.push(product);
//     }
//   }
// }
// var results = myTemplateInstance({data:shoes});
// // AddText(filteredProductType);
// });



//
// shoeDisplay.addEventListener('click', function(evt){
//   if(evt.target.name==='submitButton'){
//
//   }
// })
//
//
// function displayData(info){
//
//   var color=uniqColor(info);
//   var size=uniqSize(info);
//   var price=uniqPrice(info);
//   shoeDisplay.innerHTML=myTemplate({
//     ProductType: ProductType.sort(),
//     Brand: Brand.sort(),
//     color: color.sort(),
//     size: size.sort(function (a,b){
//       return a-b;
//
//
//   })


























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
