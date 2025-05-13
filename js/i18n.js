/**
 * i18n.js - Dil Değiştirme İşlevleri
 * TarifAI Web Sitesi için çoklu dil desteği
 */

// Varsayılan dil
let currentLanguage = 'tr';

// Çevirileri saklamak için nesne
let translations = {
    tr: {
        "app": {
            "name": "TarifAI",
            "slogan": "Akşama ne pişirsem sorunuza çözüm sunan AI destekli tarif uygulaması"
        },
        "nav": {
            "home": "Ana Sayfa",
            "features": "Özellikler",
            "testimonials": "Yorumlar",
            "download": "İndir",
            "contact": "İletişim",
            "language": "Dil"
        },
        "hero": {
            "title": "TarifAI ile Yemek Yapmak Artık Daha Kolay",
            "subtitle": "Sahip olduğunuz malzemelere göre lezzetli tarifler bulun, akşama ne pişireceğim sorusuna yanıt alın. Ünlü şeflerin özel menülerinden, sporcu ve diyet menülerine, vegan seçeneklerinden misafirleriniz için özel menü planlamalarına kadar tüm ihtiyaçlarınız için akıllı çözümler sunuyoruz.",
            "cta": "Hemen İndir",
            "secondaryCta": "Daha Fazla Bilgi",
            "menuFeatures": {
                "chefMenus": "Şeflerin Özel Menüleri",
                "veganMenus": "Vegan Menü Seçenekleri",
                "sportMenus": "Sporcu Menüleri",
                "guestMenus": "Misafir Menü Planlaması",
                "dietMenus": "Diyet Menüleri",
                "weeklyPlans": "Haftalık Menü Planı"
            }
        },
        "features": {
            "title": "Neden TarifAI?",
            "subtitle": "Yapay zeka destekli uygulamamız ile yemek pişirmeyi kolaylaştırıyoruz",
            "feature1": {
                "title": "Akıllı Tarif Önerileri",
                "description": "Sahip olduğunuz malzemelere göre en uygun tarifleri sunar"
            },
            "feature2": {
                "title": "Menü Planlama",
                "description": "Özel günler, misafirler veya diyet kısıtlamaları için menüler oluşturur"
            },
            "feature3": {
                "title": "Çeşitli Kategoriler",
                "description": "Ana yemekler, tatlılar, çorbalar ve daha fazlası için kategorilere ayrılmış tarifler"
            },
            "feature4": {
                "title": "Favorileri Kaydet",
                "description": "Beğendiğiniz tarifleri kaydederek daha sonra kolayca erişin"
            },
            "feature5": {
                "title": "Şef Menüleri",
                "description": "Ünlü şeflerin menülerinden ilham alın"
            },
            "feature6": {
                "title": "Özel Diyet Seçenekleri",
                "description": "Vejetaryen, vegan, glutensiz ve daha birçok diyet için özel tarifler"
            }
        },
        "howItWorks": {
            "title": "Nasıl Çalışır?",
            "step1": {
                "title": "Malzemeleri Seçin",
                "description": "Elinizde bulunan malzemeleri seçin veya arayın"
            },
            "step2": {
                "title": "Tarif veya Menü İsteyin",
                "description": "TarifAI, seçtiğiniz malzemelerle yapılabilecek en iyi tarifleri veya menüleri önerir"
            },
            "step3": {
                "title": "Lezzeti Keşfedin",
                "description": "Detaylı tarifler, malzeme miktarları ve pişirme yöntemleriyle hemen yemek yapmaya başlayın"
            }
        },
        "testimonials": {
            "title": "Kullanıcılarımız Ne Diyor?",
            "testimonial1": {
                "text": "Artık akşama ne pişireceğim konusunda hiç stres yapmıyorum. TarifAI benim için mükemmel öneriler sunuyor!",
                "author": "Ayşe K."
            },
            "testimonial2": {
                "text": "Uygulama sayesinde çok fazla yeni tarif öğrendim. Evdeki malzemelerle neler yapabileceğimi görmek çok keyifli.",
                "author": "Mehmet Y."
            },
            "testimonial3": {
                "text": "Misafirlerim için hazırladığım menü için harika öneriler aldım. Hepsi çok beğendiler.",
                "author": "Zeynep S."
            }
        },
        "download": {
            "title": "Hemen İndirin",
            "subtitle": "TarifAI'yi şimdi indirin ve mutfakta yaratıcılığınızı keşfedin",
            "appStore": "App Store'dan İndir",
            "googlePlay": "Google Play'den İndir"
        },
        "contact": {
            "title": "İletişime Geçin",
            "subtitle": "Sorularınız için bize ulaşın",
            "email": "E-posta",
            "message": "Mesajınız",
            "send": "Gönder",
            "address": "İletişim",
            "supportEmail": "tarifaiapp@gmail.com"
        },
        "footer": {
            "copyright": "© 2025 TarifAI. Tüm hakları saklıdır.",
            "terms": "Kullanım Koşulları",
            "privacy": "Gizlilik Politikası",
            "developedBy": "NAISoft tarafından geliştirilmiştir"
        }
    },
    en: {
        "app": {
            "name": "TarifAI",
            "slogan": "AI-powered recipe app that solves your 'what to cook tonight' dilemma"
        },
        "nav": {
            "home": "Home",
            "features": "Features",
            "testimonials": "Testimonials",
            "download": "Download",
            "contact": "Contact",
            "language": "Language"
        },
        "hero": {
            "title": "Cooking Made Easier with TarifAI",
            "subtitle": "Find delicious recipes based on ingredients you have, and get answers to what you should cook tonight. We offer smart solutions for all your needs, from famous chef menus to sports and diet menus, from vegan options to special menu planning for your guests.",
            "cta": "Download Now",
            "secondaryCta": "Learn More",
            "menuFeatures": {
                "chefMenus": "Special Chef Menus",
                "veganMenus": "Vegan Menu Options",
                "sportMenus": "Sports Nutrition Menus",
                "guestMenus": "Guest Menu Planning",
                "dietMenus": "Diet Menus",
                "weeklyPlans": "Weekly Meal Plans"
            }
        },
        "features": {
            "title": "Why TarifAI?",
            "subtitle": "We make cooking easier with our AI-powered app",
            "feature1": {
                "title": "Smart Recipe Suggestions",
                "description": "Provides the most suitable recipes based on ingredients you have"
            },
            "feature2": {
                "title": "Menu Planning",
                "description": "Creates menus for special occasions, guests, or dietary restrictions"
            },
            "feature3": {
                "title": "Various Categories",
                "description": "Recipes categorized for main courses, desserts, soups, and more"
            },
            "feature4": {
                "title": "Save Favorites",
                "description": "Save your favorite recipes for easy access later"
            },
            "feature5": {
                "title": "Chef Menus",
                "description": "Get inspired by menus from famous chefs"
            },
            "feature6": {
                "title": "Special Diet Options",
                "description": "Special recipes for vegetarian, vegan, gluten-free, and many other diets"
            }
        },
        "howItWorks": {
            "title": "How It Works",
            "step1": {
                "title": "Select Ingredients",
                "description": "Choose or search for ingredients you have on hand"
            },
            "step2": {
                "title": "Request Recipe or Menu",
                "description": "TarifAI suggests the best recipes or menus possible with your selected ingredients"
            },
            "step3": {
                "title": "Discover Flavors",
                "description": "Start cooking immediately with detailed recipes, ingredient amounts, and cooking methods"
            }
        },
        "testimonials": {
            "title": "What Our Users Say",
            "testimonial1": {
                "text": "I no longer stress about what to cook for dinner. TarifAI offers perfect suggestions for me!",
                "author": "Amy K."
            },
            "testimonial2": {
                "text": "Thanks to the app, I've learned so many new recipes. It's exciting to see what I can make with ingredients at home.",
                "author": "Mike Y."
            },
            "testimonial3": {
                "text": "I got great suggestions for the menu I prepared for my guests. They all loved it.",
                "author": "Sarah S."
            }
        },
        "download": {
            "title": "Download Now",
            "subtitle": "Download TarifAI now and discover your creativity in the kitchen",
            "appStore": "Download from App Store",
            "googlePlay": "Download from Google Play"
        },
        "contact": {
            "title": "Get in Touch",
            "subtitle": "Contact us for your questions",
            "email": "Email",
            "message": "Your Message",
            "send": "Send",
            "address": "Contact",
            "supportEmail": "tarifaiapp@gmail.com"
        },
        "footer": {
            "copyright": "© 2025 TarifAI. All rights reserved.",
            "terms": "Terms of Use",
            "privacy": "Privacy Policy",
            "developedBy": "Developed by NAISoft"
        }
    }
};

// Sayfa başlığını çevirir
function translatePageTitle() {
    document.title = 'TarifAI - ' + getTranslation('app.slogan');
}

// HTML dilini değiştirir
function changeHtmlLang(lang) {
    document.documentElement.lang = lang;
}

// Belirli bir anahtar için çeviri değerini döndürür
function getTranslation(key) {
    // Nokta notasyonuyla iç içe anahtar yolunu ayrıştır
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    // Her anahtarı iç içe izle
    for (const k of keys) {
        if (value && value[k] !== undefined) {
            value = value[k];
        } else {
            // Anahtar yoksa, uyarı göster ve anahtarın kendisini döndür
            console.warn(`Translation key "${key}" not found for language "${currentLanguage}"`);
            return key;
        }
    }
    
    return value;
}

// Dili değiştirir
function changeLanguage(lang) {
    if (lang && translations[lang]) {
        currentLanguage = lang;
        applyTranslations();
        
        // Tarayıcı yerel depolamasına dil tercihini kaydet
        localStorage.setItem('tarifai_language', lang);
        
        console.log(`Dil değiştirildi: ${lang}`);
    }
}

// Sayfadaki tüm metinleri çevirir
function applyTranslations() {
    // Sayfa başlığını çevir
    translatePageTitle();
    
    // HTML dilini değiştir
    changeHtmlLang(currentLanguage);
    
    // data-i18n özniteliği olan tüm öğeleri bul
    const elements = document.querySelectorAll('[data-i18n]');
    
    // Her bir öğe için çeviriyi uygula
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);
        
        // Öğenin içeriğini çeviriyle değiştir
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.placeholder) {
                element.placeholder = translation;
            } else {
                element.value = translation;
            }
        } else {
            element.textContent = translation;
        }
    });
}

// Tarayıcı yerel depolamasından dil tercihini al
function getSavedLanguage() {
    return localStorage.getItem('tarifai_language') || 'tr'; // Varsayılan olarak Türkçe
}

// Global olarak erişim için window nesnesine fonksiyonu ekle
window.changeLanguage = changeLanguage;

// Sayfa yüklendiğinde dil dosyalarını yükle ve uygula
document.addEventListener('DOMContentLoaded', () => {
    // Kaydedilmiş dil tercihi varsa uygula
    const savedLanguage = getSavedLanguage();
    if (savedLanguage && translations[savedLanguage]) {
        currentLanguage = savedLanguage;
    }
    
    // Çevirileri uygula
    applyTranslations();
});
