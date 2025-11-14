import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Users, FileText, Building, Award, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
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

const Index = () => {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.img 
            src={logo} 
            alt="Giorgi Zarnadze Law Firm" 
            className="h-16 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
            <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-[hsl(var(--logo-gold))] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--logo-gold))] after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-[hsl(var(--logo-gold))] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--logo-gold))] after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-[hsl(var(--logo-gold))] transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[hsl(var(--logo-gold))] after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </nav>
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
                Professional Legal<br />
                <span className="text-muted-foreground relative inline-block">
                  Services
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[hsl(var(--logo-gold))]" />
                </span>
              </motion.h1>
              <motion.p 
                className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              >
                Individualized, accessible, and client-oriented legal solutions since 2010
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
                  Schedule Consultation
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
                About Us
              </motion.h2>
              <motion.p 
                className="text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                LTD Giorgi Zarnadze Legal Company has been operating on the Georgian market since 2010 and serves various private companies and legal entities. To date, our company has provided services to more than 5,000 legal entities. Our aim is to deliver service that is individualized, accessible, and client-oriented.
              </motion.p>
              <motion.p 
                className="text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Our company is represented by a team of highly qualified and experienced lawyers who offer a wide range of legal services to legal entities.
              </motion.p>
              <motion.p 
                className="text-base text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The professionalism and individual approach of our lawyers and attorneys ensure the success of our clients. We value our clients' time and are ready to offer service that is results-oriented and tailored to their needs. Since 2021, Giorgi Zarnadze Legal Company has been a member of the Georgian Chamber of Commerce and Industry, as well as the Asia–Africa Chamber of Commerce and Industry. Since 2021, our company has also been a member of the Entrepreneurs' Association and the Georgian Small and Medium Enterprises Association. Since 2020, Giorgi Zarnadze Legal Company has been a partner of the International Black Sea University and the University of Georgia. Giorgi Zarnadze Legal Company is a sponsor of the European Law Students' Association and also a sponsor of the International School of Intellect and Education.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "14+", label: "Years Experience", delay: 0 },
                { value: "5000+", label: "Clients Served", delay: 0.1 },
                { value: "10", label: "Legal Experts", delay: 0.2 },
                { value: "24/7", label: "Availability", delay: 0.3 }
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
              Our Legal Services
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal solutions tailored to your unique needs
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: FileText,
                title: "Contract & Document Drafting",
                description: "Comprehensive drafting and analysis of contracts, agreements, charters, regulations, and all legal documentation."
              },
              {
                icon: Building,
                title: "Corporate Legal Services",
                description: "Full corporate support including partners' meetings, powers of attorney, and legal consultations for management and employees."
              },
              {
                icon: Scale,
                title: "Court Representation",
                description: "Filing civil and administrative claims with full legal representation until case completion. No additional fees for winning cases."
              },
              {
                icon: Users,
                title: "Legal Representation",
                description: "Representation before the National Enforcement Bureau, Public Service Hall, and various state and private organizations."
              },
              {
                icon: Award,
                title: "Intellectual Property",
                description: "Registration and patenting of trademarks and trade names at the National Intellectual Property Center."
              },
              {
                icon: FileText,
                title: "Specialized Services",
                description: "Public procurement support, licenses and permits, debt recovery, and administrative proceedings."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-500 group hover:scale-105 cursor-pointer"
              >
                <service.icon className="w-12 h-12 mb-6 text-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-110" strokeWidth={1.5} />
                <h3 className="text-xl font-light mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-6">
              Why Choose Us
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Full Team at Your Service",
                description: "You are served by 5 corporate lawyers and 5 attorneys simultaneously. Our entire team reviews every issue you face."
              },
              {
                title: "Professional Liability Insurance",
                description: "30,000 GEL professional liability insurance for legal services. We assume full responsibility for quality and accuracy."
              },
              {
                title: "24/7 Availability & Languages",
                description: "Services available 24/7 throughout Georgia in Georgian, Russian, and English. Accessible at any time."
              },
              {
                title: "Client Benefits & Trial Period",
                description: "3-month trial period, no additional fees for winning court cases, and free legal consultations for your employees on personal matters."
              },
              {
                title: "Affordable Monthly Service",
                description: "Monthly legal service starting from 590 GEL including VAT. Simple termination with no fines or compensation required."
              },
              {
                title: "Extensive Experience",
                description: "Operating since 2010 with each lawyer having at least 5 years of experience. Served companies across construction, distribution, insurance, manufacturing, medical, education, and transportation sectors."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
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
      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className="text-4xl font-light tracking-tight text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-base text-muted-foreground">
              Schedule a consultation with our legal experts
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Phone, label: "Phone", value: "+995 579 26 73 55" },
              { icon: Phone, label: "WhatsApp", value: "+995 579 26 73 55" },
              { icon: Mail, label: "Email", value: "Kanoncompany511@gmail.com" }
            ].map((contact, index) => (
              <motion.div 
                key={contact.label}
                className="text-center p-8 bg-secondary rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 group cursor-pointer"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <contact.icon className="w-8 h-8 mx-auto mb-4 text-foreground group-hover:text-primary transition-all duration-500 group-hover:scale-110" strokeWidth={1.5} />
                <div className="text-sm text-muted-foreground mb-2">{contact.label}</div>
                <div className="text-foreground text-sm px-2 break-normal">{contact.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logo} alt="Giorgi Zarnadze Law Firm" className="h-20 w-auto" />
            <p className="text-sm text-muted-foreground">
              © 2024 Giorgi Zarnadze Law Firm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
