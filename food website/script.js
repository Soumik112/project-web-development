        // AOS Animation

        AOS.init({
            duration: 1000,
            offset: 50
        });

        // Size Checkbox Logic
        const sizeCheckboxes = document.querySelectorAll('.size input[type="checkbox"]');
        sizeCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                sizeCheckboxes.forEach(cb => {
                    if (cb !== this) {
                        cb.checked = false;
                    }
                });
            });
        });


        // Coupon Navigation Logic

        const coupons = [
        { img: 'img1.png', name: 'Buttermilk fried chicken', oldPrice: '$25.00', newPrice: '$19.99' },
        { img: 'img2.jpg', name: 'Chicken Nuggets', oldPrice: '$20.00', newPrice: '$14.99' },
        { img: 'img3.jpg', name: 'Grilled Chicken Breast', oldPrice: '$30.00', newPrice: '$24.99' }
        ];

        let currentCouponIndex = 0;
        const couponImage = document.querySelector('.coupon-image');
        const couponName = document.querySelector('.coupon-details h3');
        const oldPrice = document.querySelector('.coupon-details .price');
        const newPrice = document.querySelector('.coupon-details .discounted-price');

        function updateCoupon(index) {
            const coupon = coupons[index];
            couponImage.style.backgroundImage = `url(${coupon.img})`;
            couponName.textContent = coupon.name;
            oldPrice.textContent = coupon.oldPrice;
            newPrice.textContent = coupon.newPrice;
        }
        
        document.getElementById('next-btn').addEventListener('click', function () {
            currentCouponIndex = (currentCouponIndex + 1) % coupons.length;
            updateCoupon(currentCouponIndex);
        });
        
        document.getElementById('prev-btn').addEventListener('click', function () {
            currentCouponIndex = (currentCouponIndex - 1 + coupons.length) % coupons.length;
            updateCoupon(currentCouponIndex);
        });

        updateCoupon(currentCouponIndex);
        