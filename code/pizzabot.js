const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80

//Put your Javscript code here:

setTimeout(function() {
  alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

  let orderName = prompt("Enter the name of the pizza you want to order today.");

  function checkOrderName() {
    if (orderName === "Vegetarian Pizza" || orderName === "Vegetarian" || orderName === "Hawaiian Pizza" || ordered === "Hawaiian" || orderName === "Pepperoni Pizza") {
      alert(`You ordered ${orderName}`);
    } else {
      prompt(`We don't have that order right now, please try again`)
    }
  };

  let orderQuantity = prompt(`And how many of ${orderName}/s do you want?`)
  alert(orderQuantity);

let cost = totalCost(orderQuantity, pizzaPrice) {
    let orderTotal = orderQuantity * pizzaPrice
    return orderTotal
  }

    alert(`Great, Ill get started on your ${orderQuantity} ${orderName} pizza/s right away, it will cost ${cost} kr`)

}, 2);

setTimeout()
