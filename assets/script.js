// Get localStorage data
let gb = localStorage.getItem('gb')
if (gb === null) {
    gb = 0;
}else{
    gb = parseInt(gb);
}
let cc = localStorage.getItem('cc')
if (cc === null) {
    cc = 0;
}else{
    cc = parseInt(cc);
}
let sugar = localStorage.getItem('sugar')
if (sugar === null) {
    sugar = 0;
}else{
    sugar = parseInt(sugar);
}
// First, tell us your name
let yourName = "Samuel Fisher" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
// let gb = 0;     // Gingerbread - moved to localStorage
// let cc = 0;     // Chocolate Chip - moved to localStorage
// let sugar = 0;   // Sugar Sprinkle - moved to localStorage

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`
// Intialize the table.
document.querySelector("#qty-gb").textContent = gb;
document.querySelector("#qty-cc").textContent = cc;
document.querySelector("#qty-sugar").textContent = sugar;

// Intialize Total Cookie count
let totalCookies = gb + cc + sugar;
//GINGERBREAD
// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gb = gb + 1;
    totalCookies = gb + cc + sugar;
    document.querySelector("#qty-gb").textContent = gb;
    document.querySelector("#qty-total").textContent = totalCookies;
    localStorage.setItem('gb', gb);
    console.log(totalCookies);
})
// Event listener for clicks on the "-" button for Gingerbread cookies
document.getElementById('minus-gb').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    gb = gb - 1;
    if (gb < 0) {
        gb = 0;    
    }
    totalCookies = gb + cc + sugar;
    document.querySelector("#qty-gb").textContent = gb;
    document.querySelector("#qty-total").textContent = totalCookies;
    localStorage.setItem('gb', gb);
    console.log(totalCookies);
})

// TODO: Hook up event listeners for the rest of the buttons

//CHOCOLATE CHIP
// Event listener for clicks on the "+" button for Choclate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    cc = cc + 1;
    totalCookies = gb + cc + sugar;
    document.querySelector("#qty-cc").textContent = cc;
    document.querySelector("#qty-total").textContent = totalCookies;
    localStorage.setItem('cc', cc);
    console.log(totalCookies);
})
// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    // TODO: Write the code to be run when the "-" button for "Chocolate Chip" is clicked
    cc = cc - 1;
    if ( cc < 0) {
        cc = 0;    
    }
    totalCookies = gb + cc + sugar;
    document.querySelector("#qty-cc").textContent = cc;
    document.querySelector("#qty-total").textContent = totalCookies;
    localStorage.setItem('cc', cc);
    console.log(totalCookies);
})

//SUGAR
// Event listener for clicks on the "+" button for Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    // TODO: Write the code to be run when the "+" button for "Sugar" is clicked
    sugar = sugar + 1;
    totalCookies = gb + cc + sugar;
    document.querySelector("#qty-sugar").textContent = sugar;
    document.querySelector("#qty-total").textContent = totalCookies;
    localStorage.setItem('sugar', sugar);
    console.log(totalCookies);
})
// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    // TODO: Write the code to be run when the "-" button for "sugar" is clicked
    sugar = sugar - 1;
    if (sugar < 0) {
        sugar= 0;    
    }
    totalCookies = gb + cc + sugar;
    document.querySelector("#qty-sugar").textContent = sugar;
    document.querySelector("#qty-total").textContent = totalCookies;
    localStorage.setItem('sugar', sugar);
    console.log(totalCookies);
})
