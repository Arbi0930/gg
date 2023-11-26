document.addEventListener('DOMContentLoaded', () => {
    const fetchProduct = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products')
            const products = await response.json();
            console.log('Fetched products:', products);

            const productList = document.getElementById('productList');
            products.forEach(product => {
                const li = document.createElement('li')

                li.innerHTML = `
                    <img src="${product.imgUrl}" alt="${product.name}">
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p>${product.price}₮</p>
                    </div>
                `;
                productList.appendChild(li);
            });

        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };

    // Call fetchProduct when the page loads
    fetchProduct();
});
