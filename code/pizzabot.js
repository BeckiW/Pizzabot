const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80


alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);

let orderName = prompt("Enter the name of the pizza you want to order today.");

  function checkOrderName() {
    if (orderName === 'Vegetarian Pizza' || orderName === 'Vegetarian' || orderName === 'Hawaiian Pizza' || ordered === 'Hawaiian' || orderName === 'Pepperoni Pizza') {
      alert(`You ordered ${orderName}`);
    } else {
      prompt(`We don't have that order right now, please try again`)
    }
  };

  let orderQuantity = prompt(`And how many of ${orderName}/s do you want?`)
  alert(orderQuantity);

const totalCost = (orderQuantity, pizzaPrice) => {
    let orderTotal = orderQuantity * pizzaPrice
    return orderTotal
  }

  let cost = totalCost(orderQuantity, pizzaPrice)

  const calculateTime = (orderQuantity) => {

    if (orderQuantity == 1 || orderQuantity == 2) {
      return 10
    } else if (orderQuantity == 3 || orderQuantity == 4 || orderQuantity == 5) {
        return 15
    } else {
        return 20
    }
  }

  let cookingTime = calculateTime(orderQuantity)

  alert(`Great, Ill get started on your ${orderQuantity} ${orderName} pizza/s right away, it will cost ${cost} kr. The pizzas will take ${cookingTime} minutes.`)
