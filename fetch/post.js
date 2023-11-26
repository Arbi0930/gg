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
    const buttons = document.querySelectorAll('.products__button');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productDetails = {
        name: document.getElementById('category1').innerText,
        price: parseInt(document.getElementById('price1').innerText.replace(/[^0-9]/g, '')),
        category: document.getElementById('name1').innerText,
    };
            addNewProduct(productDetails);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    
    // const buttons = document.querySelectorAll('.products__button');
    const buttons = document.getElementById("addProductButton2");
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const productDetails = {
        name: document.getElementById('category2').innerText,
        price: parseInt(document.getElementById('price2').innerText.replace(/[^0-9]/g, '')),
        category: document.getElementById('name1').innerText,
    };
            addNewProduct(productDetails);
        });
    });
});