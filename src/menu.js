
function menu(){
    
    const container = document.querySelector(".content");
    
    //create elements
    const title = document.createElement("h1");
    // const paragraph = document.createElement("p");
    // const achieve = document.createElement("h2");
    const list = document.createElement("ul");
    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    const listItem3 = document.createElement("li");

    //adds relevent text to items
    title.textContent = "Menu";
    // paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    // achieve.textContent = "Book a table now!";
    listItem1.textContent = "Beef Burger";
    listItem2.textContent = "Chili con carne";
    listItem3.textContent = "Roast Beef";

    //clear child items fist
    container.innerHTML = "";

    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);
    //add elements to container
    container.appendChild(title);
    // container.appendChild(paragraph);
    // container.appendChild(achieve);
    container.appendChild(list);

    
};

export default menu;
