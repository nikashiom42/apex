import { useLanguage } from "@/i18n/LanguageContext";
import { Language } from "@/i18n/translations";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const options: { value: Language; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "ru", label: "RU" },
  ];

  return (
    <div className="flex items-center gap-1 bg-secondary rounded-full p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => setLanguage(opt.value)}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-300 ${
            language === opt.value
              ? "bg-foreground text-background shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
