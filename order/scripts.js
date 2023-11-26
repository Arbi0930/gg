// Get  cart total element
const cartTotal = document.querySelector('.order-summary td:last-child');
// Бүтээгдэхүүний тоо хэмжээ өөрчлөгдөхөд сагсны нийт дүнг шинэчилнэ
document.querySelectorAll('.cart li').forEach(li => {
  li.querySelector('input[type="number"]').addEventListener('change', () => {
    // Сагсны нийт хэмжээг бодно
    let subtotal = 0;
    document.querySelectorAll('.cart li').forEach(li => {
      const quantity = li.querySelector('input[type="number"]').value;
      const price = li.querySelector('.product-info p').textContent;
      subtotal += quantity * price;
    });

    // Сагсны нийт элементийг шинэчил
    cartTotal.textContent = `$${subtotal.toFixed(2)}`;
  });
});
