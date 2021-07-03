//1.Change the existing list item from "Milk" to "Oat Milk".
const groceryList = document.getElementById('grocery-list')
const milkItem = groceryList.children[0]
milkItem.textContent = "Oat Milk"
//2.Query your unordered list using its id, and store it in a variable. 
const groceryUnorderedList = document.getElementById("grocery-list")
//Create a variable fruits which is an array you create, full of strings of your favorite fruits. 
const fruits = ["Rasberries","Tomatoes", "Blueberries","Strawberries"]
//Iterate over that array, 
fruits.forEach(fruit => {
    //and for each fruit, create a new list item, 
    const newFruitListItem = document.createElement("li")
    newFruitListItem.textContent = fruit
    //add the fruit name to your list item, and add the list item as a child //of your unordered list.
    groceryUnorderedList.appendChild(newFruitListItem)
})
//3.Create a new div for your pantry section. 
const pantryDiv = document.createElement("div")
//Add an id of pantry-section to the div. 
pantryDiv.id = 'pantry-section'
//pantryDiv.setAttribute('id','pantry-section')
//Add this div underneath your groceries-section, 
const groceriesDiv = document.getElementById('groceries-section')
//groceriesDiv.appendChild(pantryDiv)
groceriesDiv.after(pantryDiv)

//Add a header to this section to indicate what it's for.
const header = document.createElement("h1")
header.textContent = "In Our Pantry"
pantryDiv.append(header)
//Add a new ul tag inside the new pantry-section div using .appendChild to add an unordered list, with an id of pantry-list. 
const pantryList = document.createElement("ul")
pantryList.id = 'pantry-list'
pantryDiv.appendChild(pantryList)
//Add a few different list items to this list of things you already have in your kitchen using .innerHTML.
const newListItem = ["<li>Flour</li>","<li>Syrup</li>","<li>egg</li>"]
newListItem.forEach(newListItem =>{
    pantryList.innerHTML += newListItem
})
//Remove the last item from your pantry list and 
const lastItem = document.querySelector("#pantry-list li:last-child")
pantryList.removeChild(lastItem)
//add it to the shopping list.
groceryUnorderedList.appendChild(lastItem)​
//Add a third div in your body with an id of notes-section. 
const thirdDiv = document.createElement("div")
thirdDiv.id = 'notes-section'
const nextPantryDiv = document.getElementById("pantry-section")
nextPantryDiv.after(thirdDiv)
//Add a header to indicate that this is the "Notes" section.
const noteHeader = document.createElement("h2")
noteHeader.textContent = "Notes"
thirdDiv.append(noteHeader)
//Add a paragraph tag with some notes on what you want to make for the week.
const paraTag = document.createElement("p")
paraTag.textContent = "Italian pizza for this weekend!"
thirdDiv.appendChild(paraTag)
//Under the paragraph tag, also add a link to your favorite recipe, with the recipe name as the text appearing on your page.
const addLink = document.createElement("a")
addLink.textContent = "You can make savory Italian Pizza"
addLink.href = "https://www.abeautifulplate.com/the-best-homemade-margherita-pizza/"
thirdDiv.appendChild(addLink)