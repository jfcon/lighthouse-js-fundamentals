var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var whileLoop = 0;
while (whileLoop < ingredients.length){
    console.log(ingredients[whileLoop]);
    whileLoop++;
}

// Write a for loop that prints out the contents of ingredients:
for (var forLoop = 0; forLoop < ingredients.length; forLoop++){
    console.log(ingredients[forLoop]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var backwards = (ingredients.length-1); backwards >= 0; backwards--){
    console.log(ingredients[backwards]);
}