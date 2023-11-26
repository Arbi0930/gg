// import Swal from 'sweetalert2';

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
        // Swal.fire({
        //     title: 'Захиалга Амжилттай!',
        //     text: `Таны бүтээгдэхүүн амжилттай хадгалагдлаа.`,
        //     icon: 'success',
        //     showConfirmButton: false,
        //     timer: 1500,
        // });
        console.log('Шинэ бүтээгдэхүүн:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
        // Swal.fire({
        //     title: 'Захиалга Амжилтгүй',
        //     text: `Бүтээгдэхүүнийг хадгалахдаа алдаа гарлаа.`,
        //     icon: 'error',
        //     showConfirmButton: true,
        //     confirmButtonText: 'Дээш',
        // });
    });
};

// document.addEventListener('DOMContentLoaded', () => {
// const addProductButton1 = document.getElementById('addProductButton1');
// const addProductButton2 = document.getElementById('addProductButton2');
// const addProductButton3 = document.getElementById('addProductButton3');

    
//     if (addProductButton1) {
//         addProductButton1.addEventListener('click', () => {
//             const productDetails = {
//                 name: document.getElementById('category1').innerText,
//                 price: parseInt(document.getElementById('price1').innerText.replace(/[^0-9]/g, '')),
//                 category: document.getElementById('name3').innerText,
//             };
//             addNewProduct(productDetails);
//         });
//     }
    
//     if (addProductButton2) {
//         addProductButton2.addEventListener('click', () => {
//             const productDetails = {
//                 name: document.getElementById('category2').innerText,
//                 price: parseInt(document.getElementById('price2').innerText.replace(/[^0-9]/g, '')),
//                 category: document.getElementById('name3').innerText,
//             };
//             addNewProduct(productDetails);
//         });
//     }
//     if(addProductButton3){
//         addProductButton3.addEventListener('click',()=>{
//             const productDetails = {
//                 name: document.getElementById('category3').innerText,
//                 price: parseInt(document.getElementById('price3').innerText.replace(/[^0-9]/g, '')),
//                 category: document.getElementById('name3').innerText,
//             };
//             addNewProduct(productDetails);
//         })
//     }
    
    
// });
document.addEventListener('DOMContentLoaded', () => {
    for (let buttonNumber = 1; buttonNumber <= 3; buttonNumber++) {
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



// document.addEventListener('DOMContentLoaded', () => {
//     // const buttons = document.querySelectorAll('.products_event');
//     // buttons.forEach((button, index) => {
//     //     button.addEventListener('click', () => {
//     //         const productDetails = {
//     //     name: document.getElementById('category1').innerText,
//     //     price: parseInt(document.getElementById('price1').innerText.replace(/[^0-9]/g, '')),
//     //     category: document.getElementById('name1').innerText,
//     // };
//     //         addNewProduct(productDetails);
//     //     });
//     // });
//     const buttons = document.getElementById('addProductButton1')
//     if(buttons = document.querySelectorAll('.products__button')){
//         button.addEventListener('click', () => {
//             const productDetails = {
//         name: document.getElementById('category1').innerText,
//         price: parseInt(document.getElementById('price1').innerText.replace(/[^0-9]/g, '')),
//         category: document.getElementById('name1').innerText,
//     };
//             addNewProduct(productDetails);
//         });
//     } else if(buttons = document.querySelectorAll('.products')){
//         button.addEventListener('click', () => {
//             const productDetails = {
//         name: document.getElementById('category1').innerText,
//         price: parseInt(document.getElementById('price1').innerText.replace(/[^0-9]/g, '')),
//         category: document.getElementById('name1').innerText,
//     };
//             addNewProduct(productDetails);
//         });
//     }
// });
