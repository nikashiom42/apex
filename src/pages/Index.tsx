import { motion, useScroll, useTransform } from "framer-motion";
import { Scale, Users, FileText, Building, Award, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
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
            className="h-12 w-auto"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">About</a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />
          <img 
            src={heroBg} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        <div className="container mx-auto max-w-6xl relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              Legal Excellence<br />
              <span className="text-muted-foreground">Redefined</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            >
              Expert legal representation combining Georgian expertise with international standards
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="text-base px-8 py-6 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-secondary relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2 
                className="text-5xl font-light tracking-tight text-foreground mb-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                About Us
              </motion.h2>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Giorgi Zarnadze Law Firm stands as a beacon of legal excellence in Georgia, seamlessly blending local expertise with international standards. Our commitment to delivering personalized, strategic legal solutions has earned us the trust of individuals and businesses alike.
              </motion.p>
              <motion.p 
                className="text-lg text-muted-foreground leading-relaxed"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                With a team of 5 experienced lawyers and 5 dedicated attorneys, we provide comprehensive legal services that address the diverse needs of our clients with precision and care.
              </motion.p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10+", label: "Years Experience", delay: 0 },
                { value: "500+", label: "Cases Won", delay: 0.1 },
                { value: "10", label: "Legal Experts", delay: 0.2 },
                { value: "98%", label: "Success Rate", delay: 0.3 }
              ].map((stat) => (
                <motion.div 
                  key={stat.label}
                  className="bg-background p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105 group cursor-pointer"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: stat.delay }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl font-light mb-2 group-hover:text-primary transition-colors duration-300">{stat.value}</div>
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
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-5xl font-light tracking-tight text-foreground mb-6">
              Our Legal Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
                icon: Scale,
                title: "Civil Law",
                description: "Expert representation in civil disputes, contracts, and property matters with meticulous attention to detail."
              },
              {
                icon: Building,
                title: "Corporate Law",
                description: "Strategic legal counsel for businesses, from formation to complex commercial transactions."
              },
              {
                icon: FileText,
                title: "Litigation",
                description: "Aggressive courtroom advocacy protecting your rights with proven trial experience."
              },
              {
                icon: Users,
                title: "Family Law",
                description: "Compassionate guidance through divorce, custody, and family legal matters."
              },
              {
                icon: Award,
                title: "Intellectual Property",
                description: "Protecting your innovations, trademarks, and creative works with comprehensive IP services."
              },
              {
                icon: FileText,
                title: "Real Estate Law",
                description: "Complete legal support for property transactions, disputes, and development projects."
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                variants={staggerItem}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-500 group hover:scale-105 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-12 h-12 mb-6 text-foreground group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                </motion.div>
                <h3 className="text-2xl font-light mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-20">
            <h2 className="text-5xl font-light tracking-tight text-foreground mb-6">
              Why Choose Us
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-12"
          >
            {[
              {
                title: "Local Expertise, Global Standards",
                description: "Deep understanding of Georgian law combined with international best practices."
              },
              {
                title: "Client-Centered Approach",
                description: "Personalized strategies focused on your specific goals and circumstances."
              },
              {
                title: "Proven Track Record",
                description: "Consistent success across diverse legal matters with measurable results."
              },
              {
                title: "Comprehensive Services",
                description: "Full-spectrum legal support from initial consultation to final resolution."
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                variants={staggerItem}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex gap-6 group cursor-pointer"
                whileHover={{ x: 10 }}
              >
                <motion.div 
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-light text-lg group-hover:scale-110 group-hover:bg-primary transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {index + 1}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-light mb-3 text-foreground group-hover:text-primary transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h2 className="text-5xl font-light tracking-tight text-foreground mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Schedule a consultation with our legal experts
            </p>
          </motion.div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Phone, label: "Phone", value: "+995 XXX XXX XXX" },
              { icon: Mail, label: "Email", value: "info@gzlawfirm.ge" },
              { icon: MapPin, label: "Address", value: "Tbilisi, Georgia" }
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
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <contact.icon className="w-8 h-8 mx-auto mb-4 text-foreground group-hover:text-primary transition-colors duration-300" strokeWidth={1.5} />
                </motion.div>
                <div className="text-sm text-muted-foreground mb-2">{contact.label}</div>
                <div className="text-foreground">{contact.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <img src={logo} alt="Giorgi Zarnadze Law Firm" className="h-10 w-auto" />
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
