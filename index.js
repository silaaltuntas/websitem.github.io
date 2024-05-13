document.addEventListener('DOMContentLoaded', function() {
    // Tüm resimleri seç
    var images = document.querySelectorAll('.image-container img');

    // Her resim için tıklama olayını ekle
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            // Tıklama olayı gerçekleştiğinde resmi büyüten fonksiyonu çağır
            zoomIn(image);
        });
    });

    // Her resim için fare üzerine gelme olayını ekle
    images.forEach(function(image) {
        image.addEventListener('mouseenter', function() {
            // Fare üzerine gelme olayı gerçekleştiğinde gölge efekti ekleyen fonksiyonu çağır
            addShadow(image);
        });
    });

    // Her resim için fare dışına çıkma olayını ekle
    images.forEach(function(image) {
        image.addEventListener('mouseleave', function() {
            // Fare dışına çıkma olayı gerçekleştiğinde gölge efektini kaldıran fonksiyonu çağır
            removeShadow(image);
        });
    });

    // Resmi büyüten fonksiyon
    function zoomIn(image) {
        image.style.transform = 'scale(1.2)'; // Resmi büyüt
    }

    // Gölge efekti ekleyen fonksiyon
    function addShadow(image) {
        image.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)'; // Gölge efekti ekle
    }

    // Gölge efektini kaldıran fonksiyon
    function removeShadow(image) {
        image.style.boxShadow = ''; // Gölge efektini kaldır
    }
});



