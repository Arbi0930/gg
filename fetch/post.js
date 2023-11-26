function addNewProduct(productDetails) {
    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDetails),
    })
    .then((response) => response.json())
    .then((data) => {
        console.log('Шинэ бүтээгдэхүүн:', data);
        // Шинэ бүтээгдэхүүн нэмсний дараа шинэчлэгдсэн бүтээгдэхүүний жагсаалтыг татаж авна.
        fetchProducts();
    })
    .catch((error) => console.error('Error:', error));
}

function fetchProducts() {
    fetch('/api/products')
    .then((response) => response.json())
    .then((data) => {
        console.log('Products:', data);
    })
    .catch((error) => console.error('Error:', error));
}

document.getElementById('addProductButton1').addEventListener('click', function () {
    const newProductDetails = {
        name: 'Cookies',
        price: '5k',
        category: 'delicacies',
    };
    addNewProduct(newProductDetails);
});

// Fetch products 
document.addEventListener('DOMContentLoaded', function () {
    fetchProducts();
});
