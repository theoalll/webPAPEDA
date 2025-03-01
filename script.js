// Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelectorAll('.indicator');
    
    let currentIndex = 0;
    let autoSlideInterval;
    let autoSlideEnabled = true;
    
    // Set initial position
    updateCarousel();
    
    // Start auto slide
    startAutoSlide();
    
    // Function to start auto sliding
    function startAutoSlide() {
        if (autoSlideEnabled) {
            autoSlideInterval = setInterval(function() {
                currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
                updateCarousel();
            }, 5000);
        }
    }
    
    // Function to stop auto sliding
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideEnabled = false;
    }
    
    // Event listeners for buttons
    prevBtn.addEventListener('click', function() {
        stopAutoSlide();
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });
    
    nextBtn.addEventListener('click', function() {
        stopAutoSlide();
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            stopAutoSlide();
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Update carousel position and indicators
    function updateCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // FAQ Toggle Functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
    
    // Make carousel responsive on window resize
    window.addEventListener('resize', function() {
        updateCarousel();
    });
});
