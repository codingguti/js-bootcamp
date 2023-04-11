let isGuestOneVegan = false
let isGuestTwoVegan = true

// Are both vegan? Only offer up vegan dishes. 
// At least one vegan?
// Else, offer up anything.

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("Here are vegan menus.")
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("Here is one vegan menu, and one non-vegan menu.")
} else {
    console.log("Here are non-vegan menus.")
}

