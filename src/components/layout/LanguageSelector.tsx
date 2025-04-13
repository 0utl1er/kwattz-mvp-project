
import React from 'react';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useLanguage, Language } from "@/context/LanguageContext";

const languages = [
  { code: 'en' as Language, name: 'English' },
  { code: 'es' as Language, name: 'Español' },
  { code: 'fr' as Language, name: 'Français' },
  { code: 'pt' as Language, name: 'Português' },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  
  const selectedLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (lang: typeof languages[0]) => {
    setLanguage(lang.code);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-2 text-white">
          <Globe className="h-4 w-4" />
          <span>{selectedLanguage.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang)}
            className={`cursor-pointer ${lang.code === language ? 'font-bold' : ''}`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
