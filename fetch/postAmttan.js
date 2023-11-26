
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
        Toastify({
            text: 'Захиалга амжилттай',
            backgroundColor: 'green',
        }).showToast();
    })
    .catch((error) => {
        console.error('Error:', error);
        Toastify({
            text: 'Захиалга амжилтгүй',
            backgroundColor: 'red',
        }).showToast();
    });
};
document.addEventListener('DOMContentLoaded', () => {
const addProductButton8 = document.getElementById('addProductButton8')
const addProductButton9 = document.getElementById('addProductButton9')
const addProductButton10 = document.getElementById('addProductButton10')
const addProductButton11 = document.getElementById('addProductButton11')
    
    
    
    if(addProductButton8){
        addProductButton8.addEventListener('click',()=>{
            const productDetails = {
                name: document.getElementById('category8').innerText,
                price: parseInt(document.getElementById('price8').innerText.replace(/[^0-9]/g, '')),
                category: document.getElementById('name1').innerText,
            };
            addNewProduct(productDetails);
        })
    }
    if(addProductButton9){
        addProductButton9.addEventListener('click',()=>{
            const productDetails = {
                name: document.getElementById('category9').innerText,
                price: parseInt(document.getElementById('price9').innerText.replace(/[^0-9]/g, '')),
                category: document.getElementById('name1').innerText,
            };
            addNewProduct(productDetails);
        })
    }
    if(addProductButton10){
        addProductButton10.addEventListener('click',()=>{
            const productDetails = {
                name: document.getElementById('category10').innerText,
                price: parseInt(document.getElementById('price10').innerText.replace(/[^0-9]/g, '')),
                category: document.getElementById('name1').innerText,
            };
            addNewProduct(productDetails);
        })
    }
    if(addProductButton11){
        addProductButton11.addEventListener('click',()=>{
            const productDetails = {
                name: document.getElementById('category11').innerText,
                price: parseInt(document.getElementById('price11').innerText.replace(/[^0-9]/g, '')),
                category: document.getElementById('name1').innerText,
            };
            addNewProduct(productDetails);
        })
    }
});



