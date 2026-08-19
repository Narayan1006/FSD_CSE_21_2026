function buy(){
    let list = prompt("Enter the item you want to buy");
    let quantity = prompt("Enter the quantity you want to buy" );
    let price = 0;
    switch(list){
        case "tea":
            price = 100;
            break;
        case "coffee":
            price = 150;
            break;
        case "milk":
            price = 200;
            break;
        default:
            alert("Item not found");
            return;
    }
    document.querySelector("#purchased-" + list).textContent = list + " -> " + quantity;
    document.querySelector(".box2").style.display = "block";
    alert("You have bought " + quantity + " " + list  + " and the total price is " + quantity * price);
}
