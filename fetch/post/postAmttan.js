
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
        // alert('Захиалга амжилттай');
    })
    .catch((error) => {
        console.error('Error:', error);
        // alert('Захиалга амжилтгүй');
    });
};
document.addEventListener('DOMContentLoaded', () => {
    for (let buttonNumber = 7; buttonNumber <= 11; buttonNumber++) {
        const addProductButton = document.getElementById(`addProductButton${buttonNumber}`);

        if (addProductButton) {
            addProductButton.addEventListener('click', () => {
                const imgUrlElement = document.getElementById(`img${buttonNumber}`);
                const productDetails = {
                    name: document.getElementById(`category${buttonNumber}`).innerText,
                    price: parseInt(document.getElementById(`price${buttonNumber}`).innerText.replace(/[^0-9]/g, '')),
                    category: document.getElementById(`category${buttonNumber}`).innerText,
                    imgUrl: imgUrlElement ? imgUrlElement.src : null
                };

                // Check if imgUrl
                if (productDetails.imgUrl === null) {
                    console.error('imgUrl хоосон байна.');
                    return;
                }

                addNewProduct(productDetails);

                // Display Awesome Alert message
                Swal.fire({
                    title: 'Захиалга Амжилттай!',
                    text: `Таны бүтээгдэхүүн ${productDetails.name} амжилттай захиаллаа.`,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
        }
    }
});


