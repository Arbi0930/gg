function addNewProduct(productDetails) {
    fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDetails),
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then((data) => {
        console.log('Шинэ бүтээгдэхүүн:', data);
        alert('Захиалга амжилттай');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Захиалга амжилтгүй');
    });
};
document.addEventListener('DOMContentLoaded', () => {
const addProductButton4 = document.getElementById('addProductButton4');
const addProductButton5 = document.getElementById('addProductButton5')
const addProductButton6 = document.getElementById('addProductButton6')
const addProductButton7 = document.getElementById('addProductButton7')
if(addProductButton4){
    addProductButton4.addEventListener('click',()=>{
        const productDetails = {
            name: document.getElementById('category4').innerText,
            price: parseInt(document.getElementById('price4').innerText.replace(/[^0-9]/g, '')),
            category: document.getElementById('name2').innerText,
        };
        addNewProduct(productDetails);
    })
}
if(addProductButton5){
    addProductButton5.addEventListener('click',()=>{
        const productDetails = {
            name: document.getElementById('category5').innerText,
            price: parseInt(document.getElementById('price5').innerText.replace(/[^0-9]/g, '')),
            category: document.getElementById('name2').innerText,
        };
        addNewProduct(productDetails);
    })
}
if(addProductButton6){
    addProductButton6.addEventListener('click',()=>{
        const productDetails = {
            name: document.getElementById('category6').innerText,
            price: parseInt(document.getElementById('price6').innerText.replace(/[^0-9]/g, '')),
            category: document.getElementById('name2').innerText,
        };
        addNewProduct(productDetails);
    })
}
if(addProductButton7){
    addProductButton7.addEventListener('click',()=>{
        const productDetails = {
            name: document.getElementById('category7').innerText,
            price: parseInt(document.getElementById('price7').innerText.replace(/[^0-9]/g, '')),
            category: document.getElementById('name2').innerText,
        };
        addNewProduct(productDetails);
    })
}});