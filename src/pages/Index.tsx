import { motion } from "framer-motion";
import { Scale, Users, FileText, Building, Award, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

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
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <img src={logo} alt="Giorgi Zarnadze Law Firm" className="h-12 w-auto" />
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">About</a>
            <a href="#services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Services</a>
            <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-foreground mb-8">
              Legal Excellence<br />
              <span className="text-muted-foreground">Redefined</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              Expert legal representation combining Georgian expertise with international standards
            </p>
            <Button size="lg" className="text-base px-8 py-6 rounded-full">
              Schedule Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <motion.div {...fadeInUp} transition={{ duration: 0.8 }} className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-light tracking-tight text-foreground mb-6">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Giorgi Zarnadze Law Firm stands as a beacon of legal excellence in Georgia, seamlessly blending local expertise with international standards. Our commitment to delivering personalized, strategic legal solutions has earned us the trust of individuals and businesses alike.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a team of 5 experienced lawyers and 5 dedicated attorneys, we provide comprehensive legal services that address the diverse needs of our clients with precision and care.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-background p-8 rounded-2xl">
                <div className="text-4xl font-light mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-background p-8 rounded-2xl">
                <div className="text-4xl font-light mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Cases Won</div>
              </div>
              <div className="bg-background p-8 rounded-2xl">
                <div className="text-4xl font-light mb-2">10</div>
                <div className="text-sm text-muted-foreground">Legal Experts</div>
              </div>
              <div className="bg-background p-8 rounded-2xl">
                <div className="text-4xl font-light mb-2">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
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
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <service.icon className="w-12 h-12 mb-6 text-foreground" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4 text-foreground">{service.title}</h3>
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
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-light text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-3 text-foreground">{benefit.title}</h3>
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
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <Phone className="w-8 h-8 mx-auto mb-4 text-foreground" strokeWidth={1.5} />
              <div className="text-sm text-muted-foreground mb-2">Phone</div>
              <div className="text-foreground">+995 XXX XXX XXX</div>
            </div>
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <Mail className="w-8 h-8 mx-auto mb-4 text-foreground" strokeWidth={1.5} />
              <div className="text-sm text-muted-foreground mb-2">Email</div>
              <div className="text-foreground">info@gzlawfirm.ge</div>
            </div>
            <div className="text-center p-8 bg-secondary rounded-2xl">
              <MapPin className="w-8 h-8 mx-auto mb-4 text-foreground" strokeWidth={1.5} />
              <div className="text-sm text-muted-foreground mb-2">Address</div>
              <div className="text-foreground">Tbilisi, Georgia</div>
            </div>
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
