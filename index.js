// Write your code here...

fetch('http://localhost:3000/menu')
.then((resp) => resp.json())
.then((data) => renderMenu(data));

function renderMenu(menuArr){
    
    //locations
    const menuLocation = document.querySelector('#menu-items');
    const imageLocation = document.querySelector('#dish-image');
    const nameLocation = document.querySelector('#dish-name');
    const descriptionLocation = document.querySelector('#dish-description');
    const priceLocation = document.querySelector('#dish-price');
    const numberLocation = document.querySelector('#number-in-cart');

    let currentItem = menuArr[0];

    imageLocation.src = currentItem.image;
    nameLocation.innerText = currentItem.name;
    descriptionLocation.innerText = currentItem.description;
    priceLocation.innerText = currentItem.price;
    numberLocation.innerText = currentItem['number_in_bag'];

    menuArr.forEach(menuObj => {
        //creates menu list
        const itemSpan = document.createElement('span')
        itemSpan.innerText = menuObj.name;
        menuLocation.appendChild(itemSpan);

        //renders clicked item
        itemSpan.addEventListener('click', renderItem);

        function renderItem(){
            imageLocation.src = menuObj.image;
            nameLocation.innerText = menuObj.name;
            descriptionLocation.innerText = menuObj.description;
            priceLocation.innerText = menuObj.price;
            numberLocation.innerText = menuObj['number_in_bag'];

            currentItem = menuObj;
        }
    });

    const cartForm = document.querySelector('#cart-form');

    cartForm.addEventListener('submit', (e) => handleSubmit(e))

    function handleSubmit(e){
        e.preventDefault();
        //console.log(document.querySelector('#cart-amount').value)
        const numAdd = parseInt(document.querySelector('#cart-amount').value)
        currentItem['number_in_bag'] += numAdd;
        //console.log(currentItem['number_in_bag']);
        numberLocation.innerText = currentItem['number_in_bag']
    }
}