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
            "language": "Dil",
            "privacy": "Gizlilik Politikası",
            "howItWorks": "Nasıl Çalışır?"
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
        },
        "privacy": {
            "title": "Gizlilik Politikası",
            "introduction": "Giriş",
            "introText": "TarifAI olarak kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu gizlilik politikası, uygulamamızın veri toplama, kullanma ve paylaşma yaklaşımını açıklamaktadır.",
            "dataCollection": "Veri Toplama Yaklaşımımız",
            "dataCollectionText": "TarifAI uygulaması minimal veri toplama prensibini benimsemektedir:",
            "noPersonalData": "Kişisel Veri Toplamıyoruz: Kullanıcılarımızdan kişisel bilgiler (isim, e-posta, telefon numarası vb.) talep etmiyor veya toplamıyoruz.",
            "noUsageAnalysis": "Kullanım Analizi Yapmıyoruz: Kullanıcıların uygulama içi davranışlarını takip etmiyor veya analiz etmiyoruz.",
            "noLocationData": "Konum Verisi Almıyoruz: Kullanıcılarımızın konum bilgilerini talep etmiyor veya takip etmiyoruz.",
            "localData": "Yerel Veri Depolama",
            "localDataText": "TarifAI uygulaması aşağıdaki bilgileri yalnızca cihazınızda depolar:",
            "preferences": "Tercihleriniz: Seçtiğiniz malzemeler ve tariflere ait veriler sadece cihazınızda saklanır.",
            "cache": "Önbellek Verileri: Uygulama performansını artırmak için bazı veriler (örn. tarifler, görseller) cihazınızda önbelleğe alınabilir.",
            "localDataNote": "Bu veriler hiçbir şekilde sunucularımıza aktarılmaz ve tamamen cihazınızda tutulur.",
            "apiUsage": "API Kullanımı",
            "apiUsageText": "Uygulamamız yalnızca tarif önerileri almak, menüler sunmak için sunucularımızla iletişim kurar. Bu iletişim sırasında:",
            "anonymousData": "Seçtiğiniz malzemelerin listesi, istenilen menü tipleri anonim olarak gönderilir.",
            "noIdentity": "Kullanıcı kimliği veya tanımlayıcı bilgiler gönderilmez.",
            "minimalData": "Sadece tarif önerilerini alabilmek için gerekli olan minimal veri aktarılır.",
            "dataSharing": "Veri Paylaşımı",
            "dataSharingText": "TarifAI, kullanıcı verilerini üçüncü taraflarla paylaşmaz. Uygulamamızın operasyonları için kullandığımız tek veri aktarımı, tarif önerileri için API çağrılarıdır.",
            "dataDeletion": "Veri Silme",
            "dataDeletionText": "Uygulamayı cihazınızdan kaldırdığınızda, tüm yerel veriler otomatik olarak silinir. Sunucularımızda kalıcı olarak saklanan herhangi bir kullanıcı verisi olmadığı için, ek bir silme işlemine gerek yoktur.",
            "childrenPrivacy": "Çocukların Gizliliği",
            "childrenPrivacyText": "Uygulamamız tüm yaş grupları için uygundur ve çocuklar için özel olarak kişisel veri toplamaz.",
            "policyChanges": "Politika Değişiklikleri",
            "policyChangesText": "Bu gizlilik politikasında yapılacak değişiklikler uygulama güncellemeleri ile birlikte duyurulacaktır.",
            "contact": "İletişim",
            "contactText": "Bu gizlilik politikası hakkında sorularınız veya geribildirimleriniz için <a href=\"mailto:tarifaiapp@gmail.com\" style=\"color: #D32F2F; font-weight: 700; font-size: 1.1em;\">tarifaiapp@gmail.com</a> adresinden bizimle iletişime geçebilirsiniz.",
            "lastUpdated": "Son Güncelleme: 14.05.2025"
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
            "language": "Language",
            "privacy": "Privacy Policy",
            "howItWorks": "How It Works?"
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
            "title": "How It Works?",
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
        },
        "privacy": {
            "title": "Privacy Policy",
            "introduction": "Introduction",
            "introText": "At TarifAI, we place great importance on the privacy of our users. This privacy policy explains our approach to data collection, usage, and sharing within the application.",
            "dataCollection": "Our Data Collection Approach",
            "dataCollectionText": "TarifAI follows a minimal data collection principle:",
            "noPersonalData": "We Do Not Collect Personal Data: We do not request or collect personal information from our users (such as name, email, phone number, etc.).",
            "noUsageAnalysis": "We Do Not Analyze Usage: We do not track or analyze user behavior within the app.",
            "noLocationData": "We Do Not Access Location Data: We do not request or track users' location information.",
            "localData": "Local Data Storage",
            "localDataText": "The TarifAI app stores the following data only on your device:",
            "preferences": "Your Preferences: The ingredients you select and data related to your chosen recipes are stored only on your device.",
            "cache": "Cache Data: Some data (e.g., recipes, images) may be cached locally to improve app performance.",
            "localDataNote": "This data is never transferred to our servers and remains entirely on your device.",
            "apiUsage": "API Usage",
            "apiUsageText": "Our application communicates with our servers solely for the purpose of providing recipe suggestions and menu recommendations. During this process:",
            "anonymousData": "The list of selected ingredients and the desired menu types are sent anonymously.",
            "noIdentity": "No user identity or identifiable information is transmitted.",
            "minimalData": "Only the minimal data required to obtain recipe suggestions is transmitted.",
            "dataSharing": "Data Sharing",
            "dataSharingText": "TarifAI does not share user data with third parties. The only data transmission involved in our app operations is API calls for recipe suggestions.",
            "dataDeletion": "Data Deletion",
            "dataDeletionText": "When you uninstall the app from your device, all local data is automatically deleted. Since we do not store any persistent user data on our servers, no additional deletion process is necessary.",
            "childrenPrivacy": "Children's Privacy",
            "childrenPrivacyText": "Our app is suitable for all age groups and does not specifically collect personal data from children.",
            "policyChanges": "Policy Changes",
            "policyChangesText": "Any changes to this privacy policy will be announced alongside app updates.",
            "contact": "Contact",
            "contactText": "If you have any questions or feedback regarding this privacy policy, please contact us at <a href=\"mailto:tarifaiapp@gmail.com\" style=\"color: #D32F2F; font-weight: 700; font-size: 1.1em;\">tarifaiapp@gmail.com</a>.",
            "lastUpdated": "Last Updated: May 14, 2025"
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
            // Eğer çeviri HTML içeriyorsa innerHTML kullan, aksi halde textContent
            if (translation.includes('<') && translation.includes('>')) {
                element.innerHTML = translation;
            } else {
                element.textContent = translation;
            }
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
