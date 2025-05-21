/**
 * main.js - Ana JavaScript Fonksiyonları
 * TarifAI Web Sitesi
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // AOS (Animate On Scroll) kütüphanesini başlat
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Navbar Scrolled Efekti
    const navbar = document.querySelector('.navbar');
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    // Tıklandığında sayfa içi geçişlerde yumuşak kaydırma
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Eğer bu bir iç bağlantıysa (href'i # ile başlıyorsa)
            if (this.getAttribute('href').startsWith('#') && this.getAttribute('href').length > 1) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Navbar yüksekliğini hesaba kat
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Mobil menüyü kapat
                    const navbarCollapse = document.querySelector('.navbar-collapse');
                    if (navbarCollapse.classList.contains('show')) {
                        navbarCollapse.classList.remove('show');
                    }
                }
            }
        });
    });
    
    // İletişim formu gönderim işlemi
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Basit doğrulama
            if (!email || !message) {
                alert(currentLanguage === 'tr' ? 'Lütfen tüm alanları doldurun!' : 'Please fill in all fields!');
                return;
            }
            
            // Normalde burası bir API'ye istek göndererek formu işlerdi
            // Şimdilik sadece bir bildirim göster
            alert(currentLanguage === 'tr' ? 'Mesajınız gönderildi! Teşekkür ederiz.' : 'Your message has been sent! Thank you.');
            
            // Formu sıfırla
            contactForm.reset();
        });
    }
    
    // Sayfa içi gezinti bağlantıları için yumuşak kaydırma
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // # bağlantısı değilse ve sadece # değilse
            if (this.getAttribute('href') !== '#' && this.getAttribute('href').length > 1) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Navbar yüksekliğini hesaba kat
                    const navbarHeight = document.querySelector('.navbar').offsetHeight;
                    const targetPosition = targetElement.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Dil değiştirme butonlarını bul
    const turkishBtn = document.getElementById('lang-tr');
    const englishBtn = document.getElementById('lang-en');
    
    // Türkçe'ye geçiş
    if (turkishBtn) {
        turkishBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            window.changeLanguage('tr');
        });
    }
    
    // İngilizce'ye geçiş
    if (englishBtn) {
        englishBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.changeLanguage('en');
        });
    }
});
