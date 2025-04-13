
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'en' | 'es' | 'fr' | 'pt';

// Define the context shape
type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: (key: string) => key,
});

// Translations object
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    'hero.title': 'Empowering Your Energy Decisions',
    'hero.subtitle': 'We help you understand and optimize your energy usage with AI-powered insights',
    'hero.cta': 'Get Started',
    
    // How it works
    'how.title': 'How It Works',
    'how.step1.title': 'Connect Your Data',
    'how.step1.desc': 'Link your utility accounts or upload your bills',
    'how.step2.title': 'AI Analysis',
    'how.step2.desc': 'Our AI analyzes your energy usage patterns',
    'how.step3.title': 'Get Recommendations',
    'how.step3.desc': 'Receive personalized recommendations to optimize your energy',
    
    // Benefits
    'benefits.title': 'Benefits',
    'benefits.card1.title': 'Save Money',
    'benefits.card1.desc': 'Reduce your energy bills by up to 20%',
    'benefits.card2.title': 'Go Green',
    'benefits.card2.desc': 'Lower your carbon footprint with smarter energy choices',
    'benefits.card3.title': 'Simple Setup',
    'benefits.card3.desc': 'Easy to use interface with quick setup process',
    
    // CTA Section
    'cta.title': 'Ready to Optimize Your Energy?',
    'cta.subtitle': 'Join thousands of customers saving on their energy bills',
    'cta.button': 'Get Started',
    
    // Footer
    'footer.about': 'About',
    'footer.pricing': 'Pricing',
    'footer.contact': 'Contact',
    'footer.terms': 'Terms',
    'footer.privacy': 'Privacy Policy',
    
    // Menu
    'menu.getStarted': 'Get Started',
  },
  es: {
    // Header
    'hero.title': 'Potenciando tus decisiones energéticas',
    'hero.subtitle': 'Te ayudamos a entender y optimizar tu consumo de energía con información basada en IA',
    'hero.cta': 'Comenzar',
    
    // How it works
    'how.title': 'Cómo Funciona',
    'how.step1.title': 'Conecta tus Datos',
    'how.step1.desc': 'Vincula tus cuentas de servicios o sube tus facturas',
    'how.step2.title': 'Análisis de IA',
    'how.step2.desc': 'Nuestra IA analiza tus patrones de uso de energía',
    'how.step3.title': 'Obtén Recomendaciones',
    'how.step3.desc': 'Recibe recomendaciones personalizadas para optimizar tu energía',
    
    // Benefits
    'benefits.title': 'Beneficios',
    'benefits.card1.title': 'Ahorra Dinero',
    'benefits.card1.desc': 'Reduce tus facturas de energía hasta un 20%',
    'benefits.card2.title': 'Sé Ecológico',
    'benefits.card2.desc': 'Reduce tu huella de carbono con elecciones energéticas más inteligentes',
    'benefits.card3.title': 'Configuración Simple',
    'benefits.card3.desc': 'Interfaz fácil de usar con proceso de configuración rápido',
    
    // CTA Section
    'cta.title': '¿Listo para optimizar tu energía?',
    'cta.subtitle': 'Únete a miles de clientes que ahorran en sus facturas de energía',
    'cta.button': 'Comenzar',
    
    // Footer
    'footer.about': 'Acerca de',
    'footer.pricing': 'Precios',
    'footer.contact': 'Contacto',
    'footer.terms': 'Términos',
    'footer.privacy': 'Política de Privacidad',
    
    // Menu
    'menu.getStarted': 'Comenzar',
  },
  fr: {
    // Header
    'hero.title': 'Optimisez vos décisions énergétiques',
    'hero.subtitle': 'Nous vous aidons à comprendre et à optimiser votre consommation d\'énergie grâce à des informations alimentées par l\'IA',
    'hero.cta': 'Commencer',
    
    // How it works
    'how.title': 'Comment ça marche',
    'how.step1.title': 'Connectez vos données',
    'how.step1.desc': 'Liez vos comptes de services publics ou téléchargez vos factures',
    'how.step2.title': 'Analyse IA',
    'how.step2.desc': 'Notre IA analyse vos habitudes de consommation d\'énergie',
    'how.step3.title': 'Obtenez des recommandations',
    'how.step3.desc': 'Recevez des recommandations personnalisées pour optimiser votre énergie',
    
    // Benefits
    'benefits.title': 'Avantages',
    'benefits.card1.title': 'Économisez de l\'argent',
    'benefits.card1.desc': 'Réduisez vos factures d\'énergie jusqu\'à 20%',
    'benefits.card2.title': 'Soyez écologique',
    'benefits.card2.desc': 'Réduisez votre empreinte carbone avec des choix énergétiques plus intelligents',
    'benefits.card3.title': 'Configuration simple',
    'benefits.card3.desc': 'Interface facile à utiliser avec un processus de configuration rapide',
    
    // CTA Section
    'cta.title': 'Prêt à optimiser votre énergie?',
    'cta.subtitle': 'Rejoignez des milliers de clients qui économisent sur leurs factures d\'énergie',
    'cta.button': 'Commencer',
    
    // Footer
    'footer.about': 'À propos',
    'footer.pricing': 'Tarification',
    'footer.contact': 'Contact',
    'footer.terms': 'Conditions',
    'footer.privacy': 'Politique de confidentialité',
    
    // Menu
    'menu.getStarted': 'Commencer',
  },
  pt: {
    // Header
    'hero.title': 'Potencializando suas decisões energéticas',
    'hero.subtitle': 'Ajudamos você a entender e otimizar seu consumo de energia com insights baseados em IA',
    'hero.cta': 'Começar',
    
    // How it works
    'how.title': 'Como Funciona',
    'how.step1.title': 'Conecte seus Dados',
    'how.step1.desc': 'Vincule suas contas de serviços públicos ou envie suas faturas',
    'how.step2.title': 'Análise de IA',
    'how.step2.desc': 'Nossa IA analisa seus padrões de uso de energia',
    'how.step3.title': 'Obtenha Recomendações',
    'how.step3.desc': 'Receba recomendações personalizadas para otimizar sua energia',
    
    // Benefits
    'benefits.title': 'Benefícios',
    'benefits.card1.title': 'Economize Dinheiro',
    'benefits.card1.desc': 'Reduza suas contas de energia em até 20%',
    'benefits.card2.title': 'Seja Ecológico',
    'benefits.card2.desc': 'Reduza sua pegada de carbono com escolhas energéticas mais inteligentes',
    'benefits.card3.title': 'Configuração Simples',
    'benefits.card3.desc': 'Interface fácil de usar com processo de configuração rápido',
    
    // CTA Section
    'cta.title': 'Pronto para otimizar sua energia?',
    'cta.subtitle': 'Junte-se a milhares de clientes economizando em suas contas de energia',
    'cta.button': 'Começar',
    
    // Footer
    'footer.about': 'Sobre',
    'footer.pricing': 'Preços',
    'footer.contact': 'Contato',
    'footer.terms': 'Termos',
    'footer.privacy': 'Política de Privacidade',
    
    // Menu
    'menu.getStarted': 'Começar',
  },
};

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Try to get saved language from localStorage or default to English
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage as Language) || 'en';
  });

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('language', language);
    // You could also update HTML lang attribute here
    document.documentElement.lang = language;
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Set language function
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook for using the language context
export const useLanguage = () => useContext(LanguageContext);
