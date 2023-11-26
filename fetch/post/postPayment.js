document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.querySelector('.payment form');
    const totalCell = document.querySelector('.total-cell');
    const productList = document.getElementById('productList');
    const orderSummary = document.getElementById('orderSummary'); 

    paymentForm.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    // Include any necessary payment details here
                }),
            });

            if (response.ok) {
                const result = await response.json();

                // Show success alert
                Swal.fire({
                    title: 'Төлбөр амжилттай!',
                    text: 'Таны захиалга амжилттай төлбөрлөгдлөө.',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });

                // Reset total price to 0₮
                if (totalCell) {
                    totalCell.textContent = '0₮';
                }

                // Clear products from the list
                if (productList) {
                    productList.innerHTML = '';
                }

                // Clear order summary content
                if (orderSummary) {
                    orderSummary.innerHTML = '';
                }

                // Clear local storage 
                localStorage.removeItem('cart');
                window.location.href = '../../index.html#products';


                console.log('Төлбөрийн үр дүн:', result);
            } else {
                // Show error alert
                Swal.fire({
                    title: 'Төлбөрийг төлж чадсангүй!',
                    text: response.statusText,
                    icon: 'error',
                });

                console.error('Төлбөрийг төлж чадсангүй:', response.statusText);
            }
        } catch (error) {
            // Show error alert
            Swal.fire({
                title: 'Төлбөрийн төлөх үйл явцад гарсан алдаа!',
                text: error.message,
                icon: 'error',
            });

            console.error('Төлбөрийн төлөх үйл явцад гарсан алдаа:', error.message);
        }
    });
});
