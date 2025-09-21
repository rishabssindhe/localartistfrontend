import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            // English
            en: {
                translation: {
                    navbar: { title: "🎨 Local Artists", login: "Login", logout: "Logout" },
                    role: {
                        title: "Local Artisans Marketplace",
                        subtitle: "Empowering sellers. Inspiring customers. Powered by AI ✨",
                        customerBtn: "I am a Customer",
                        customerDesc: "Browse beautiful handmade creations, chat with our AI assistant, and find the perfect art for you.",
                        startExploring: "Start Exploring",
                        sellerBtn: "I am a Seller",
                        sellerDesc: "Upload your art, get AI-powered descriptions and fair price suggestions, and connect with buyers.",
                        adminBtn: "I am an Admin",
                        adminDesc: "Verify sellers, manage artworks, and keep the marketplace running smoothly for everyone.",
                        goAdmin: "Go Admin",
                    },
                    login: {
                        enter_email: "Enter your email",
                        enter_password: "Enter your password",
                        login: "Login",
                    },
                },
            },

            // Hindi
            hi: {
                translation: {
                    navbar: { title: "🎨 स्थानीय कलाकार", login: "लॉगिन", logout: "लॉगआउट" },
                    role: {
                        title: "स्थानीय कलाकारों का बाज़ार",
                        subtitle: "विक्रेताओं को सशक्त बनाना। ग्राहकों को प्रेरित करना। AI द्वारा संचालित ✨",
                        customerBtn: "मैं ग्राहक हूँ",
                        customerDesc: "सुंदर हस्तनिर्मित कृतियों को देखें, हमारे AI सहायक से चैट करें, और उपयुक्त कला खोजें।",
                        startExploring: "खोज शुरू करें",
                        sellerBtn: "मैं विक्रेता हूँ",
                        sellerDesc: "अपनी कला अपलोड करें, AI-निर्दिष्ट विवरण और उचित मूल्य सुझाव प्राप्त करें, और खरीदारों से जुड़ें।",
                        adminBtn: "मैं प्रशासक हूँ",
                        adminDesc: "विक्रेताओं को सत्यापित करें, कृतियों का प्रबंधन करें, और मार्केटप्लेस को सुचारू रूप से चलाएँ।",
                        goAdmin: "जाएँ प्रशासक",
                    },
                    login: {
                        enter_email: "अपना ईमेल दर्ज करें",
                        enter_password: "अपना पासवर्ड दर्ज करें",
                        login: "लॉगिन",
                    },
                },
            },

            // Kannada
            kn: {
                translation: {
                    navbar: { title: "🎨 ಸ್ಥಳೀಯ ಕಲಾವಿದರು", login: "ಲಾಗಿನ್", logout: "ಲಾಗ್‌ಔಟ್" },
                    role: {
                        title: "ಸ್ಥಳೀಯ ಕಲಾವಿದರ ಮಾರುಕಟ್ಟೆ",
                        subtitle: "ಮಾರಾಟಗಾರರಿಗೆ ಶಕ್ತಿ ನೀಡುವುದು. ಗ್ರಾಹಕರಿಗೆ ಪ್ರೇರಣೆ ನೀಡುವುದು. AI ಮೂಲಕ ✨",
                        customerBtn: "ನಾನು ಗ್ರಾಹಕ",
                        customerDesc: "ಅದ್ಭುತ ಕೈನಿರ್ಮಿತ ಕಲಾಕೃತಿಗಳನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ, ನಮ್ಮ AI ಸಹಾಯಕರೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ, ಮತ್ತು ಸೂಕ್ತ ಕಲೆಯನ್ನು ಹುಡುಕಿ.",
                        startExploring: "ಅನ್ವೇಷಣೆಯನ್ನು ಪ್ರಾರಂಭಿಸಿ",
                        sellerBtn: "ನಾನು ಮಾರಾಟಗಾರ",
                        sellerDesc: "ನಿಮ್ಮ ಕಲೆ ಅಪ್ಲೋಡ್ ಮಾಡಿ, AI-ನಿರ್ದೇಶಿತ ವಿವರಣೆ ಮತ್ತು ನ್ಯಾಯಸಮ್ಮತ ಬೆಲೆ ಸಲಹೆಗಳನ್ನು ಪಡೆಯಿರಿ, ಮತ್ತು ಖರೀದಿದಾರರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ.",
                        adminBtn: "ನಾನು ಆಡಳಿತಗಾರನು",
                        adminDesc: "ಮಾರಾಟಗಾರರನ್ನು ಪರಿಶೀಲಿಸಿ, ಕಲಾಕೃತಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ, ಮತ್ತು ಮಾರುಕಟ್ಟೆಯನ್ನು ಸುಗಮವಾಗಿ ನಡೆಸಿ.",
                        goAdmin: "ಹೋದಿರಿ ಆಡಳಿತ",
                    },
                    login: {
                        enter_email: "ನಿಮ್ಮ ಇಮೇಲ್ ನಮೂದಿಸಿ",
                        enter_password: "ನಿಮ್ಮ ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ",
                        login: "ಲಾಗಿನ್",
                    },
                },
            },
        },
        fallbackLng: "en",
        interpolation: { escapeValue: false },
    });

export default i18n;
const BASE_URL = "http://localhost:3000"; // change to live URL after deployment