
function homePage(){
    //select the container
    const container = document.querySelector(".content");
    
    //create elements
    const title = document.createElement("h1");
    const paragraph = document.createElement("p");
    const achieve = document.createElement("h2");
    const list = document.createElement("ul");
    const listItem1 = document.createElement("li");
    const listItem2 = document.createElement("li");
    const listItem3 = document.createElement("li");

    //adds relevent text to items
    title.textContent = "Welcome to the spotted cow!";
    paragraph.textContent = "Here at the spotted cow we only serve the finest food and drink. we specilise in beef and have some of the finest steaks in the local area. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    achieve.textContent = "Here are our awards we have won!";
    listItem1.textContent = "Best Beef";
    listItem2.textContent = "Best Resteraunt";
    listItem3.textContent = "Best Dressed";

    //clear child items fist
    container.innerHTML = "";

    //adds list items to list
    list.appendChild(listItem1);
    list.appendChild(listItem2);
    list.appendChild(listItem3);

    //add elements to container
    container.appendChild(title);
    container.appendChild(paragraph);
    container.appendChild(achieve);
    container.appendChild(list);

    
};

export default homePage;



