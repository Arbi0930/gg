document.addEventListener('DOMContentLoaded', () => {
    const fetchProduct = async () => {
        try {
            const response = await fetch('http://localhost:3000/api/products');
            const products = await response.json();
            console.log('Fetched products:', products);

            const orderSummary = document.getElementById('orderSummary');
            let totalPrice = 0;

            const tableBody = orderSummary.querySelector('table tbody');

// Бүтээгдэхүүнийг давтаж, хүснэгтийн мөрүүдийг үүсгэнэ
            products.forEach(product => {
                const tr = document.createElement('tr');

                tr.innerHTML = `
                    <td>${product.name}</td>
                    <td>${product.price}₮</td>
                `;
                tableBody.appendChild(tr);

                // Бүтээгдэхүүн бүрийн үнийг нэмж нийт дүнг тооцно
                totalPrice += product.price;
            });

// Захиалгын хураангуйг нийт үнээр шинэчилнэ
            const totalCell = orderSummary.querySelector('.total-cell');
            if (totalCell) {
                totalCell.textContent = `${totalPrice}₮`;
            }

        } catch (error) {
            console.error('Error fetching products:', error.message);
        }
    };

    // Хуудсыг ачаалах үед fetchProduct холбогдоно
    fetchProduct();
});
