// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

// do {
//   // Ask for the user's name using prompt
//   userName = prompt("Please enter your name (letters and spaces only):");

//   // Check if the input contains only letters and spaces
//   if (!/^[A-Za-z\s] + $/.test(userName)) {
//       alert("Invalid input. Please use only letters and spaces for your name.");
//   }
// } while (!userName); // Keep asking until a valid name is provided

// // Step 1c: Create a new alert with a personalized greeting
// alert(`Hi ${userName}!`);

do {
  // Ask for the user's name using prompt
  userName = prompt("Please enter your name (letters and spaces only):");

  // Check if the input contains only letters and spaces
  if (userName && !/^[A-Za-z\s]+$/.test(userName)) {
      alert("Invalid input. Please use only letters and spaces for your name.");
      userName = null; // Reset userName to null to continue the loop
  } else if (!userName) {
      alert("Please enter a valid name.");
  }
} while (!userName); // Keep asking until a valid name is provided

// Step 1c: Create a new alert with a personalized greeting
alert(`Hi ${userName}!`);

// Step 2 - Food choice
// Your code goes here

// Step 2: Food choice using prompt
let foodChoice;

do {
    // Ask for the user's food choice using prompt
    foodChoice = prompt("Please select a food type by entering a number:\n1. Pizza\n2. Pasta\n3. Salad");

    // Check if the input is not 1, 2, or 3
    if (foodChoice !== "1" && foodChoice !== "2" && foodChoice !== "3") {
        alert("Invalid input. Please select a valid option (1, 2, or 3).");
        foodChoice = null; // Reset foodChoice to null to continue the loop
    }
} while (!foodChoice); // Keep asking until a valid choice is provided

// Determine the chosen food type based on user input
let chosenFood;
switch (foodChoice) {
    case "1":
        chosenFood = "Pizza";
        break;
    case "2":
        chosenFood = "Pasta";
        break;
    case "3":
        chosenFood = "Salad";
        break;
    default:
        chosenFood = "null";
}

// Display a confirmation message using alert
alert(`Great choice, ${userName}! You have selected ${chosenFood}. Please select a subtype.`);

// Step 3 - Subtype choice
// Your code goes here

// Step 3: Subtype choice based on the selected food type
let chosenSubtype;
if (chosenFood === "Pizza") {
  do {
    // Ask for the user's pizza subtype choice using prompt
    const pizzaChoice = prompt("Please select a pizza subtype by entering a number:\n1. Margherita\n2. Pepperoni\n3. Veggie");

    // Check if the input is not 1, 2, or 3
    if (pizzaChoice !== "1" && pizzaChoice !== "2" && pizzaChoice !== "3") {
        alert("Invalid input. Please select a valid option (1, 2, or 3).");
    } else {
        // Set chosenSubtype based on pizzaChoice
        switch (pizzaChoice) {
            case "1":
                chosenSubtype = "Margherita";
                break;
            case "2":
                chosenSubtype = "Pepperoni";
                break;
            case "3":
                chosenSubtype = "Veggie";
                break;
            default:
                chosenSubtype = "null";
        }
    }
} while (!chosenSubtype); // Keep asking until a valid subtype is provided
} else if (chosenFood === "Pasta") {
  do {
    // Ask for the user's pasta subtype choice using prompt
    const pastaChoice = prompt("Please select a pasta subtype by entering a number:\n1. Spaghetti\n2. Fettuccine\n3. Penne");

    // Check if the input is not 1, 2, or 3
    if (pastaChoice !== "1" && pastaChoice !== "2" && pastaChoice !== "3") {
        alert("Invalid input. Please select a valid option (1, 2, or 3).");
    } else {
        // Set chosenSubtype based on pastaChoice
        switch (pastaChoice) {
            case "1":
                chosenSubtype = "Spaghetti";
                break;
            case "2":
                chosenSubtype = "Fettuccine";
                break;
            case "3":
                chosenSubtype = "Penne";
                break;
            default:
                chosenSubtype = "Unknown";
        }
    }
} while (!chosenSubtype); // Keep asking until a valid subtype is provided
} else if (chosenFood === "Salad") {
do {
    // Ask for the user's salad subtype choice using prompt
    const saladChoice = prompt("Please select a salad subtype by entering a number:\n1. Caesar Salad\n2. Greek Salad\n3. Garden Salad");

    // Check if the input is not 1, 2, or 3
    if (saladChoice !== "1" && saladChoice !== "2" && saladChoice !== "3") {
        alert("Invalid input. Please select a valid option (1, 2, or 3).");
    } else {
        // Set chosenSubtype based on saladChoice
        switch (saladChoice) {
            case "1":
                chosenSubtype = "Caesar Salad";
                break;
            case "2":
                chosenSubtype = "Greek Salad";
                break;
            case "3":
                chosenSubtype = "Garden Salad";
                break;
            default:
                chosenSubtype = "Unknown";
        }
    }
} while (!chosenSubtype); // Keep asking until a valid subtype is provided
} else {
chosenSubtype = "N/A"; // Subtypes are not applicable for unknown food types
}

// Display a confirmation message for the chosen subtype using alert
alert(`Excellent choice, ${userName}! You have selected ${chosenFood} - ${chosenSubtype}. Please specify if this order is for a child or an adult.`);

// Step 4 - Age
// Your code goes here

// Step 4: Age specification
let ageChoice;

do {
    // Ask for the user's age choice using prompt
    ageChoice = prompt("Is this food intended for a child or an adult?\nEnter 'child' or 'adult':").toLowerCase();

    // Check if the input is not 'child' or 'adult'
    if (ageChoice !== "child" && ageChoice !== "adult") {
        alert("Invalid input. Please enter 'child' or 'adult'.");
    }
} while (ageChoice !== "child" && ageChoice !== "adult"); // Keep asking until a valid choice is provided

// Determine the cost based on age specification
let cost;
if (ageChoice === "child") {
    if (chosenFood === "Pizza") {
        cost = 5; // Child's pizza cost
    } else if (chosenFood === "Pasta") {
        cost = 4; // Child's pasta cost
    } else if (chosenFood === "Salad") {
        cost = 3; // Child's salad cost
    } else {
        cost = 0; // Unknown food cost
    }
} else if (ageChoice === "adult") {
    if (chosenFood === "Pizza") {
        cost = 10; // Adult's pizza cost
    } else if (chosenFood === "Pasta") {
        cost = 8; // Adult's pasta cost
    } else if (chosenFood === "Salad") {
        cost = 7; // Adult's salad cost
    } else {
        cost = 0; // Unknown food cost
    }
}

// Step 5 - Order confirmation
// Your code goes here

// Display the order message and cost using alert
if (cost > 0) {
  // Confirm the order
  let confirmation;
  do {
    confirmation = prompt(`Your order is:\n${chosenFood} - ${chosenSubtype}\nTotal Cost: ${cost} euros\n\nType 'confirm' to place the order:`).toLowerCase();

    // Warn the user if they do not type "confirm"
    if (confirmation !== "confirm") {
      alert(`Please type 'confirm' to place the order.`);
    }
  } while (confirmation !== "confirm");

  // Place the order
  alert(`Thank you, ${userName}! Your order has been placed. Enjoy your meal!`);
} else {
  alert(`Sorry, we couldn't process your order. Please make a valid selection.`);
}