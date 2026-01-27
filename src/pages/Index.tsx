import { motion } from "framer-motion";
import { Scale, Users, FileText, Building, Award, Phone, Mail, MapPin, DollarSign, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo.jpg";
import officeImg from "@/assets/office.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-50px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 }
};

const serviceIcons = [FileText, Building, Scale, Users, Award, FileText];

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="container mx-auto px-6 py-2 flex items-center justify-between">
          <motion.img
            src={logo}
            alt="Giorgi Zarnadze Law Firm"
            className="h-16 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-foreground hover:text-[hsl(var(--logo-gold))] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--logo-gold))] after:transition-all after:duration-300 hover:after:w-full">{t.nav.about}</a>
              <a href="#services" className="text-sm font-medium text-foreground hover:text-[hsl(var(--logo-gold))] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--logo-gold))] after:transition-all after:duration-300 hover:after:w-full">{t.nav.services}</a>
              <a href="#contact" className="text-sm font-medium text-foreground hover:text-[hsl(var(--logo-gold))] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--logo-gold))] after:transition-all after:duration-300 hover:after:w-full">{t.nav.contact}</a>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
         <div className="absolute top-20 right-10 w-2 h-32 bg-[hsl(var(--logo-red))] opacity-60 rounded-full" />
        <div className="absolute bottom-10 left-10 w-2 h-24 bg-[hsl(var(--logo-gold))] opacity-60 rounded-full" />
        <div className="container mx-auto max-w-6xl relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            {/* Logo on the left */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="flex justify-center md:justify-start"
            >
              <img
                src={logo}
                alt="Giorgi Zarnadze Law Firm"
                className="w-full max-w-md h-auto"
              />
            </motion.div>

            {/* Text content on the right */}
            <div className="text-center md:text-left">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-6"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
              >
                {t.hero.titleLine1}<br />
                <span className="text-muted-foreground relative inline-block">
                  {t.hero.titleLine2}
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[hsl(var(--logo-gold))]" />
                </span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                {t.hero.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              >
                <Button
                  size="lg"
                  className="text-base px-8 py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t.hero.cta}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-secondary relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-4">
              <motion.h2
                className="text-4xl font-light tracking-tight text-foreground mb-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                {t.about.title}
              </motion.h2>
              <motion.p
                className="text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.about.paragraph1}
              </motion.p>
              <motion.p
                className="text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t.about.paragraph2}
              </motion.p>
              <motion.p
                className="text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {t.about.paragraph3}
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: t.about.stats.yearsValue, label: t.about.stats.yearsLabel, delay: 0 },
                { value: t.about.stats.clientsValue, label: t.about.stats.clientsLabel, delay: 0.1 },
                { value: t.about.stats.expertsValue, label: t.about.stats.expertsLabel, delay: 0.2 },
                { value: t.about.stats.availabilityValue, label: t.about.stats.availabilityLabel, delay: 0.3 }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  className="bg-background p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl font-light mb-2 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute right-0 top-1/4 w-1/3 h-1/2 opacity-10"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <img src={officeImg} alt="" className="w-full h-full object-cover rounded-l-3xl" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-6">
              {t.services.title}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {t.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-500 group hover:scale-105 cursor-pointer"
                >
                  <Icon className="w-12 h-12 mb-6 text-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  <h3 className="text-xl font-light mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Individual Services Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-6">
              {t.individualServices.title}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t.individualServices.subtitle}
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {t.individualServices.items.map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="flex items-center justify-between bg-background p-4 rounded-xl border border-border hover:shadow-md hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <DollarSign className="w-5 h-5 text-[hsl(var(--logo-gold))] flex-shrink-0" strokeWidth={1.5} />
                  <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-300 truncate">{item.title}</span>
                </div>
                <span className="text-sm font-medium text-foreground ml-4 flex-shrink-0 bg-secondary px-3 py-1 rounded-full">{item.price}</span>
              </motion.div>
            ))}
            <motion.div
              variants={staggerItem}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="md:col-span-2 text-center mt-4"
            >
              <p className="text-sm text-muted-foreground italic">{t.individualServices.otherServices}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-6">
              {t.whyChooseUs.title}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t.whyChooseUs.items.map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex flex-col group cursor-pointer bg-card p-6 rounded-2xl border border-border hover:shadow-lg hover:border-primary/50 transition-all duration-500 h-full"
                whileHover={{ y: -5 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-light text-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-500 mb-4">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-light mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-6">
              {t.contact.title}
            </h2>
            <p className="text-base text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8 mb-12"
          >
            {t.contact.items.map((contact, index) => {
              const icons = [Phone, Phone, Mail, Globe, Globe];
              const ContactIcon = icons[index];
              return (
                <motion.div
                  key={index}
                  className="text-center p-8 bg-background rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <ContactIcon className="w-8 h-8 mx-auto mb-4 text-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-110" strokeWidth={1.5} />
                  <div className="text-sm text-muted-foreground mb-2">{contact.label}</div>
                  <div className="text-foreground text-sm px-2 break-normal whitespace-pre-line">{contact.value}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Office Addresses */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h3 className="text-xl font-light text-foreground mb-6">{t.contact.addressLabel}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {t.contact.addresses.map((addr, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-background rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer"
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <MapPin className="w-6 h-6 mx-auto mb-3 text-[hsl(var(--logo-red))] group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                  <div className="text-sm font-medium text-foreground mb-1">{addr.city}</div>
                  <div className="text-sm text-muted-foreground">{addr.address}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logo} alt="Giorgi Zarnadze Law Firm" className="h-20 w-auto" />
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-sm text-muted-foreground">
                {t.footer.copyright}
              </p>
              <p className="text-xs text-muted-foreground">
                {t.footer.websiteBy} <a href="https://digitalalchemy.ge/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Digital Alchemy</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
