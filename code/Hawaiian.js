let Hawaiian = 'Hawaiian pizza is a pizza topped with tomato sauce, cheese, pineapple, and back bacon or ham. Some versions may include peppers, mushrooms, bacon or pepperoni. Pineapple as a pizza topping divides public opinion: Hawaiian was the most popular pizza in Australia in 1999, accounting for 15% of pizza sales,[1] and a 2015 review of independent UK takeaways operating through Just Eat found the Hawaiian pizza to be the most commonly available. However, a 2016 survey of US adults had pineapple in the top three least favourite pizza toppings, ahead of anchovies and mushrooms. Greek-Canadian Sam Panopoulos claimed that he created the first Hawaiian pizza at the Satellite Restaurant in Chatham, Ontario, Canada in 1962. Inspired in part by his experience preparing Chinese dishes which commonly mix sweet and savoury flavours, Panopoulos experimented with adding pineapple, ham, bacon and other toppings which were not initially very popular.'


 const hawaiianPizza = (words) => {
   pizzaWords = words.split(" ")
   return pizzaWords.length
 }

 const pineappleCounter = (words) => {
  pineapple = words.match(/pineapple/gi)
  return pineapple.length
}

console.log("Words: " + hawaiianPizza(Hawaiian))
console.log("Number of times the word pineapple appears: " + pineappleCounter(Hawaiian))
