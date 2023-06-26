var cofeeButton = document.querySelector(".cofee-button");
var lateeButton = document.querySelector(".latee-button");
var teaButton = document.querySelector(".tea-button");
var cappuccinoButton = document.querySelector(".cappuccino-button");

var orderList = document.querySelector(".order-list");

var priceOfCofee = 12;
var priceOfLatee = 20;
var priceOfTea = 15;
var priceOfCappuccino = 25;

var amount = document.querySelector(".amount");
var total = 0;

function buyCofee() {
  var div = document.createElement("div");
  div.classList.add("order-product");
  var starbucksCofee = document.createElement("p");
  starbucksCofee.classList.add("starbucks-cofee");
  starbucksCofee.innerHTML = "Coffee";
  div.appendChild(starbucksCofee);

  var cofeePrice = document.createElement("p");
  cofeePrice.classList.add("cofee-price");
  cofeePrice.innerHTML = "12.00 $";
  div.appendChild(cofeePrice);

  var trash = document.createElement("p");
  trash.innerHTML = "<i class='fa-solid fa-trash trash'></i>";
  div.appendChild(trash);
  orderList.appendChild(div);

  total = total + priceOfCofee;
  amount.innerHTML = total;

  trash.onclick = () => {
    div.remove();
    total = total - priceOfCofee;
    amount.innerHTML = total;
  };
}

function buyLatee() {
  var div = document.createElement("div");
  div.classList.add("order-product");
  var starbucksCofee = document.createElement("p");
  starbucksCofee.classList.add("starbucks-cofee");
  starbucksCofee.innerHTML = "Latee";
  div.appendChild(starbucksCofee);

  var cofeePrice = document.createElement("p");
  cofeePrice.classList.add("cofee-price");
  cofeePrice.innerHTML = "20.00 $";
  div.appendChild(cofeePrice);

  var trash = document.createElement("p");
  trash.innerHTML = "<i class='fa-solid fa-trash trash'></i>";
  div.appendChild(trash);
  orderList.appendChild(div);

  total = total + priceOfLatee;
  amount.innerHTML = total;

  trash.onclick = () => {
    div.remove();
    total = total - priceOfLatee;
    amount.innerHTML = total;
  };
}

function buyTea() {
  var div = document.createElement("div");
  div.classList.add("order-product");
  var starbucksCofee = document.createElement("p");
  starbucksCofee.classList.add("starbucks-cofee");
  starbucksCofee.innerHTML = "Tea";
  div.appendChild(starbucksCofee);

  var cofeePrice = document.createElement("p");
  cofeePrice.classList.add("cofee-price");
  cofeePrice.innerHTML = "15.00 $";
  div.appendChild(cofeePrice);

  var trash = document.createElement("p");
  trash.innerHTML = "<i class='fa-solid fa-trash trash'></i>";
  div.appendChild(trash);
  orderList.appendChild(div);

  total = total + priceOfTea;
  amount.innerHTML = total;

  trash.onclick = () => {
    div.remove();
    total = total - priceOfTea;
    amount.innerHTML = total;
  };
}

function buyCappuccino() {
  var div = document.createElement("div");
  div.classList.add("order-product");
  var starbucksCofee = document.createElement("p");
  starbucksCofee.classList.add("starbucks-cofee");
  starbucksCofee.innerHTML = "Cappuccino";
  div.appendChild(starbucksCofee);

  var cofeePrice = document.createElement("p");
  cofeePrice.classList.add("cofee-price");
  cofeePrice.innerHTML = "25.00 $";
  div.appendChild(cofeePrice);

  var trash = document.createElement("p");
  trash.innerHTML = "<i class='fa-solid fa-trash trash'></i>";
  div.appendChild(trash);
  orderList.appendChild(div);

  total = total + priceOfCappuccino;
  amount.innerHTML = total;

  trash.onclick = () => {
    div.remove();
    total = total - priceOfCappuccino;
    amount.innerHTML = total;
  };
}

cofeeButton.addEventListener("click", buyCofee);
lateeButton.addEventListener("click", buyLatee);
teaButton.addEventListener("click", buyTea);
cappuccinoButton.addEventListener("click", buyCappuccino);
