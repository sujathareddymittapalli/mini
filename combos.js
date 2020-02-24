console.log("in combos js");
function addcombos(itemName,price){
	document.getElementById("cartImage").style="display:none";
	let div = document.createElement('div');
	div.innerHTML = "<div class=\"card m-2\" style=\"width: 18rem;\"><div class=\"card-body\"><span class=\"card-text\"><i class=\"fa fa-cutlery c-green\"></i> "+itemName+"</span> <div class=\"d-flex justify-content-between mt-2\"><div><span class=\"card-text\">Rs:"+price+"</span></div><div class=\"btn-group mr-2\" role=\"group\"><button type=\"button\" class=\"btn btn-secondary\">-</button><button type=\"button\" class=\"btn btn-secondary\">1</button><button type=\"button\" class=\"btn btn-secondary\">+</button></div></div></div></div>";
	console.log("Item Name:"+itemName);
	document.getElementById("cartItems").appendChild(div); 
	
}