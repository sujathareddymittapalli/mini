console.log("in order js");
function addOrder(itemName,priceValue){


let foodItemValue = JSON.parse(sessionStorage.getItem("foodItems"));
for (var key in foodItemValue){
 if(foodItemValue[key].name == itemName){
return false;
 }
}

let foodItems = [];
if(foodItemValue != null){
	foodItems = foodItemValue;
}
if(itemName != null){

foodItems.push({name:itemName,price:priceValue});
sessionStorage.setItem('foodItems', JSON.stringify(foodItems));
}
let divElement = "";
if(foodItems.length >1){
document.getElementById("cartItems").innerHTML =  "";
}else if(foodItems.length == 1){
document.getElementById("cartImage").style="display:none";
document.getElementById("cartEmpty").style="display:none";
}
foodItems.forEach(cartFunction);
function cartFunction(foodItem,index){
divElement = "<div class=\"card m-2\" id = \"checkoutItems-"+foodItem.name+"\" style=\"width: 18rem;\"><div class=\"card-body\"><span class=\"card-text\"><i class=\"fa fa-cutlery c-green\"></i> "+foodItem.name+"</span> <div class=\"d-flex justify-content-between mt-2\"><div><span class=\"card-text\">Rs:"+foodItem.price+"</span></div><div class=\"btn-group mr-2\" role=\"group\"><button type=\"button\" class=\"btn btn-secondary\">-</button><button type=\"button\" class=\"btn btn-secondary\">1</button><button type=\"button\" class=\"btn btn-secondary\">+</button></div></div></div></div>";
let div = document.createElement('div');
div.innerHTML = divElement;
document.getElementById("cartItems").appendChild(div);
divElement = "";
}


}
