// we can use li in ordered list and unordered list
const ele = document.querySelector(".button1");
const babu = document.querySelector(".babu");
const input = document.querySelector(".bes");
const list = document.createElement("ol");
const clear =document.getElementById("clear")

ele.addEventListener("click", function() {
    const inputvalue = input.value;
    const listItem = document.createElement("li");
    listItem.textContent = inputvalue;


   
    // Add click event to delete list item
    listItem.addEventListener("click", function() {
        if(babu){
            listItem.remove(); // Remove the clicked list item
        }
        
    });

    
    list.appendChild(listItem);
    babu.appendChild(list);
 
  
});
clear.addEventListener("click", function() {
    const listItems = document.querySelectorAll(".babu li");
    listItems.forEach(function(item) {
        item.remove();
    });
});




 









