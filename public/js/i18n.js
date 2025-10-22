/**
 * i18n.js - Çoklu dil desteği
 * Tarif Ai web sitesi için çeviri yardımcıları
 */

const supportedLanguages = ['tr', 'en'];
const defaultLanguage = 'tr';

let currentLanguage = defaultLanguage;

const translations = {
    tr: {
        app: {
            name: 'Tarif Ai',
            slogan: 'Akşama ne pişirsem sorunuza çözüm sunan AI destekli tarif uygulaması'
        },
        nav: {
            home: 'Ana Sayfa',
            features: 'Özellikler',
            testimonials: 'Yorumlar',
            download: 'İndir',
            contact: 'İletişim',
            language: 'Dil',
            privacy: 'Gizlilik Politikası',
            howItWorks: 'Nasıl Çalışır?'
        },
        hero: {
            badge: 'Yapay zeka ile hazırlanan tarif rehberi',
            title: 'Tarif Ai ile Yemek Yapmak Artık Daha Kolay',
            subtitle: 'Sahip olduğunuz malzemelere göre lezzetli tarifler bulun, akşama ne pişireceğim sorusuna yanıt alın',
            cta: 'Hemen İndir',
            secondaryCta: 'Daha Fazla Bilgi',
            highlight1: 'Dakikalar içinde kişiselleştirilmiş menüler',
            highlight2: 'Diyet, vegan ve sporcu planlarına uygun öneriler',
            highlight3: 'Ünlü şeflerden ilham alan tarif koleksiyonları',
            metricLabel: 'Tarif kombinasyonu',
            metricCaption: 'Malzemelerinize göre her gün yeni öneriler'
        },
        features: {
            title: 'Neden Tarif Ai?',
            subtitle: 'Yapay zeka destekli uygulamamız ile yemek pişirmeyi kolaylaştırıyoruz',
            feature1: {
                title: 'Akıllı Tarif Önerileri',
                description: 'Sahip olduğunuz malzemelere göre en uygun tarifleri sunar'
            },
            feature2: {
                title: 'Menü Planlama',
                description: 'Özel günler, misafirler veya diyet kısıtlamaları için menüler oluşturur'
            },
            feature3: {
                title: 'Çeşitli Kategoriler',
                description: 'Ana yemekler, tatlılar, çorbalar ve daha fazlası için kategorilere ayrılmış tarifler'
            },
            feature4: {
                title: 'Favorileri Kaydet',
                description: 'Beğendiğiniz tarifleri kaydederek daha sonra kolayca erişin'
            },
            feature5: {
                title: 'Şef Menüleri',
                description: 'Ünlü şeflerin menülerinden ilham alın'
            },
            feature6: {
                title: 'Özel Diyet Seçenekleri',
                description: 'Vejetaryen, vegan, glutensiz ve daha birçok diyet için özel tarifler'
            }
        },
        howItWorks: {
            title: 'Nasıl Çalışır?',
            step1: {
                title: 'Malzemeleri Seçin',
                description: 'Elinizde bulunan malzemeleri seçin veya arayın'
            },
            step2: {
                title: 'Tarif veya Menü İsteyin',
                description: 'Tarif Ai, seçtiğiniz malzemelerle yapılabilecek en iyi tarifleri veya menüleri önerir'
            },
            step3: {
                title: 'Lezzeti Keşfedin',
                description: 'Detaylı tarifler, malzeme miktarları ve pişirme yöntemleriyle hemen yemek yapmaya başlayın'
            }
        },
        testimonials: {
            title: 'Kullanıcılarımız Ne Diyor?',
            testimonial1: {
                text: 'Artık akşama ne pişireceğim konusunda hiç stres yapmıyorum. Tarif Ai benim için mükemmel öneriler sunuyor!',
                author: 'Ayşe K.'
            },
            testimonial2: {
                text: 'Uygulama sayesinde çok fazla yeni tarif öğrendim. Tarif Ai ile evdeki malzemelerle neler yapabileceğimi görmek çok keyifli.',
                author: 'Mehmet Y.'
            },
            testimonial3: {
                text: 'Misafirlerim için hazırladığım menü için Tarif Ai’den harika öneriler aldım. Hepsi çok beğendiler.',
                author: 'Zeynep S.'
            }
        },
        download: {
            title: 'Hemen İndirin',
            subtitle: 'Tarif Ai\'yi şimdi indirin ve mutfakta yaratıcılığınızı keşfedin',
            appStore: 'App Store\'dan İndir',
            googlePlay: 'Google Play\'den İndir'
        },
        contact: {
            title: 'İletişime Geçin',
            subtitle: 'Sorularınız için bize ulaşın',
            email: 'E-posta',
            message: 'Mesajınız',
            send: 'Gönder',
            address: 'İletişim',
            supportEmail: 'tarifaiapp@gmail.com'
        },
        footer: {
            links: 'Bağlantılar',
            social: 'Sosyal Medya',
            copyright: '© 2025 Tarif Ai. Tüm hakları saklıdır.',
            terms: 'Kullanım Koşulları',
            privacy: 'Gizlilik Politikası',
            developedBy: 'NAISoft tarafından geliştirilmiştir'
        },
        privacy: {
            title: 'Gizlilik Politikası',
            introText: 'Tarif Ai olarak kullanıcılarımızın gizliliğine büyük önem veriyoruz. Bu gizlilik politikası, uygulamamızın veri toplama, kullanma ve paylaşma yaklaşımını açıklamaktadır.',
            dataCollection: 'Veri Toplama Yaklaşımımız',
            dataCollectionText: 'Tarif Ai uygulaması minimal veri toplama prensibini benimsemektedir:',
            noPersonalData: 'Kişisel Veri Toplamıyoruz',
            noUsageAnalysis: 'Kullanım Analizi Yapmıyoruz',
            noThirdParty: 'Üçüncü Parti Paylaşımı Yok',
            dataUsage: 'Veri Kullanımı',
            dataUsageText: 'Tarif Ai, kullanıcı deneyimini geliştirmek için cihaz üzerinde çalışır. Kullanıcıların tarif arama geçmişi veya kişisel tercihleri cihaz üzerinde tutulur.',
            dataSecurity: 'Veri Güvenliği',
            dataSecurityText: 'Tarif Ai, kullanıcı bilgilerinin güvenliği için gerekli teknik önlemleri alır. Uygulama, internet bağlantısı olmadan da çalıştığı için veri paylaşımı minimum düzeydedir.',
            policyChanges: 'Politika Değişiklikleri',
            policyChangesText: 'Bu gizlilik politikasında yapılacak değişiklikler uygulama güncellemeleri ile birlikte duyurulacaktır.',
            contact: 'İletişim',
            contactText: 'Bu gizlilik politikası hakkında sorularınız veya geribildirimleriniz için <a href="mailto:tarifaiapp@gmail.com">tarifaiapp@gmail.com</a> adresinden bizimle iletişime geçebilirsiniz.',
            lastUpdated: 'Son Güncelleme: 14.05.2025'
        }
    },
    en: {
        app: {
            name: 'Tarif Ai',
            slogan: 'AI-powered recipe app that solves your what to cook tonight dilemma'
        },
        nav: {
            home: 'Home',
            features: 'Features',
            testimonials: 'Testimonials',
            download: 'Download',
            contact: 'Contact',
            language: 'Language',
            privacy: 'Privacy Policy',
            howItWorks: 'How It Works?'
        },
        hero: {
            badge: 'AI-crafted recipe companion',
            title: 'Cooking Made Easier with Tarif Ai',
            subtitle: 'Find delicious recipes based on ingredients you have and solve the what to cook tonight dilemma',
            cta: 'Download Now',
            secondaryCta: 'Learn More',
            highlight1: 'Personalized menus in minutes',
            highlight2: 'Options for diet, vegan and athlete plans',
            highlight3: 'Collections inspired by renowned chefs',
            metricLabel: 'Recipe combinations',
            metricCaption: 'Fresh suggestions every day for your pantry'
        },
        features: {
            title: 'Why Tarif Ai?',
            subtitle: 'We make cooking easier with our AI-powered app',
            feature1: {
                title: 'Smart Recipe Suggestions',
                description: 'Provides the most suitable recipes based on ingredients you have'
            },
            feature2: {
                title: 'Menu Planning',
                description: 'Creates menus for special occasions, guests, or dietary restrictions'
            },
            feature3: {
                title: 'Various Categories',
                description: 'Recipes categorized for main courses, desserts, soups, and more'
            },
            feature4: {
                title: 'Save Favorites',
                description: 'Save your favorite recipes for easy access later'
            },
            feature5: {
                title: 'Chef Menus',
                description: 'Get inspired by menus from famous chefs'
            },
            feature6: {
                title: 'Special Diet Options',
                description: 'Special recipes for vegetarian, vegan, gluten-free, and many other diets'
            }
        },
        howItWorks: {
            title: 'How It Works?',
            step1: {
                title: 'Select Ingredients',
                description: 'Choose or search for ingredients you have on hand'
            },
            step2: {
                title: 'Request Recipe or Menu',
                description: 'Tarif Ai suggests the best recipes or menus possible with your selected ingredients'
            },
            step3: {
                title: 'Discover Flavors',
                description: 'Start cooking immediately with detailed recipes, ingredient amounts, and cooking methods'
            }
        },
        testimonials: {
            title: 'What Our Users Say',
            testimonial1: {
                text: 'I no longer stress about what to cook for dinner. Tarif Ai offers perfect suggestions for me!',
                author: 'Amy K.'
            },
            testimonial2: {
                text: "Thanks to the app, I've learned so many new recipes. It's exciting to see what I can make with ingredients at home using Tarif Ai.",
                author: 'Mike Y.'
            },
            testimonial3: {
                text: 'I got great suggestions from Tarif Ai for the menu I prepared for my guests. They all loved it.',
                author: 'Sarah S.'
            }
        },
        download: {
            title: 'Download Now',
            subtitle: 'Download Tarif Ai now and discover your creativity in the kitchen',
            appStore: 'Download from App Store',
            googlePlay: 'Download from Google Play'
        },
        contact: {
            title: 'Get in Touch',
            subtitle: 'Contact us for your questions',
            email: 'Email',
            message: 'Your Message',
            send: 'Send',
            address: 'Contact',
            supportEmail: 'tarifaiapp@gmail.com'
        },
        footer: {
            links: 'Links',
            social: 'Social Media',
            copyright: '© 2025 Tarif Ai. All rights reserved.',
            terms: 'Terms of Use',
            privacy: 'Privacy Policy',
            developedBy: 'Developed by NAISoft'
        },
        privacy: {
            title: 'Privacy Policy',
            introText: 'At Tarif Ai, we place great importance on our users\' privacy. This policy explains how we collect, use, and share data within the app.',
            dataCollection: 'Our Data Collection Approach',
            dataCollectionText: 'Tarif Ai follows a minimal data collection principle:',
            noPersonalData: 'We Do Not Collect Personal Data',
            noUsageAnalysis: 'No Usage Analytics',
            noThirdParty: 'No Third-party Sharing',
            dataUsage: 'Data Usage',
            dataUsageText: 'Tarif Ai runs on-device to enhance your experience. Recipe history or personal preferences remain stored locally on your device.',
            dataSecurity: 'Data Security',
            dataSecurityText: 'Tarif Ai implements necessary technical safeguards to keep your information secure. Because the app can run offline, data sharing stays at a minimum.',
            policyChanges: 'Policy Changes',
            policyChangesText: 'Any changes to this privacy policy will be announced alongside app updates.',
            contact: 'Contact',
            contactText: 'For questions or feedback about this privacy policy, reach us at <a href="mailto:tarifaiapp@gmail.com">tarifaiapp@gmail.com</a>.',
            lastUpdated: 'Last Updated: 14.05.2025'
        }
    }
};

function translatePageTitle() {
    document.title = `Tarif Ai - ${getTranslation('app.slogan')}`;
}

function changeHtmlLang(lang) {
    document.documentElement.lang = lang;
}

function getTranslation(key) {
    const keys = key.split('.');
    let value = translations[currentLanguage];

    for (const k of keys) {
        if (value && Object.prototype.hasOwnProperty.call(value, k)) {
            value = value[k];
        } else {
            console.warn(`Translation key "${key}" not found for language "${currentLanguage}"`);
            return key;
        }
    }

    return value;
}

function applyTranslations() {
    translatePageTitle();
    changeHtmlLang(currentLanguage);

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key);

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            if (element.placeholder) {
                element.placeholder = translation;
            } else {
                element.value = translation;
            }
        } else if (typeof translation === 'string' && translation.includes('<')) {
            element.innerHTML = translation;
        } else {
            element.textContent = translation;
        }
    });
}

function changeLanguage(lang) {
    if (supportedLanguages.includes(lang)) {
        currentLanguage = lang;
        localStorage.setItem('tarifai_language', lang);
        applyTranslations();
        console.log(`Dil değiştirildi: ${lang}`);
    }
}

function getSavedLanguage() {
    const saved = localStorage.getItem('tarifai_language');
    return supportedLanguages.includes(saved) ? saved : defaultLanguage;
}

window.changeLanguage = changeLanguage;

document.addEventListener('DOMContentLoaded', () => {
    currentLanguage = getSavedLanguage();
    applyTranslations();
});
