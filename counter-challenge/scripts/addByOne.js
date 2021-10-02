const counter = document.querySelector(".counter"); //select the <p> element
const counterButton = document.querySelector(".counter-button"); // select the <button> element

let num = 0; 
counter.innerHTML = num; // define what to display on the <p> element

const addByOne = ()=>{ //increment num by one and modify the DOM
    num = num + 1;
    counter.innerHTML = num;
}

counterButton.addEventListener('click', () => addByOne()); //call the function when clicking the button 


