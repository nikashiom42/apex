import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, CheckCircle2, Scale, Users, Clock, Award, Shield, Briefcase } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    "Drafting and analysis of contracts, agreements, and legal documents",
    "Representation before state and private organizations",
    "Organizing partners' meetings and drafting powers of attorney",
    "Legal consultations and assistance",
    "Civil and administrative court representation",
    "Public procurement and tender support",
    "Licenses and permits procedures",
    "Accounts receivable recovery",
    "Administrative complaints and proceedings",
    "Trademark and trade name registration"
  ];

  const benefits = [
    { icon: Shield, text: "Professional liability insurance (30,000 GEL)" },
    { icon: Users, text: "Team of 5 lawyers and attorneys" },
    { icon: Clock, text: "24/7 service availability" },
    { icon: CheckCircle2, text: "3-month trial period" },
    { icon: Award, text: "No additional fees for winning disputes" },
    { icon: Briefcase, text: "Free consultations for employees" }
  ];

  const whyUs = [
    "Served by 5 corporate lawyers and 5 attorneys simultaneously",
    "Full responsibility for quality and accuracy",
    "No paid or unpaid leave obligations",
    "Simple service termination process",
    "No fines or compensation required",
    "Every issue reviewed by entire team",
    "Significantly higher qualification level",
    "Monthly service from 590 GEL (VAT included)",
    "Handle any workload or complexity easily",
    "All lawyers constantly informed about your matters"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img 
            src={logo} 
            alt="Giorgi Zarnadze Law Firm" 
            className="h-12 transition-transform duration-300 hover:scale-105"
          />
          <Button 
            variant="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, hsl(0 58% 28%) 0%, hsl(0 45% 35%) 100%)'
        }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <img 
              src={logo} 
              alt="Giorgi Zarnadze Law Firm" 
              className="h-32 md:h-40 mx-auto mb-8"
            />
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Excellence in Legal Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Serving Georgian businesses since 2010 with professional, accessible, and client-oriented legal solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-accent text-accent-foreground hover:bg-accent/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-8 animate-slide-up">
              <Scale className="w-12 h-12 text-primary mr-4" />
              <h2 className="text-4xl font-bold text-foreground">About Us</h2>
            </div>
            <Card className="p-8 md:p-12 shadow-lg border-border hover:shadow-xl transition-all duration-300 animate-scale-in">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                LTD Giorgi Zarnadze Legal Company has been operating on the Georgian market since 2010 and serves various private companies and legal entities. To date, our company has provided services to more than 5,000 legal entities.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Our aim is to deliver service that is individualized, accessible, and client-oriented. Our company is represented by a team of highly qualified and experienced lawyers who offer a wide range of legal services to legal entities.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Since 2021, we are proud members of the Georgian Chamber of Commerce and Industry, the Asia–Africa Chamber of Commerce and Industry, the Entrepreneurs' Association, and the Georgian Small and Medium Enterprises Association. We maintain strategic partnerships with the International Black Sea University and the University of Georgia, while sponsoring the European Law Students' Association and the International School of Intellect and Education.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border group cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-foreground font-medium">{benefit.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Our Legal Services</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 rounded-lg hover:bg-muted transition-all duration-300 group cursor-pointer"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110" />
                <p className="text-foreground/80">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Why Choose Us?</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {whyUs.map((reason, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary"
                >
                  <p className="text-foreground flex items-start">
                    <span className="text-accent font-bold mr-3 text-xl flex-shrink-0">{index + 1}.</span>
                    <span>{reason}</span>
                  </p>
                </Card>
              ))}
            </div>
            <Card className="mt-12 p-8 bg-primary text-primary-foreground shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
              <p className="text-lg leading-relaxed">
                We serve companies operating in various sectors including construction, distribution, insurance, manufacturing, medical, educational, transportation, and many other industries. Our extensive experience ensures we understand your specific business needs.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className="py-24 bg-background relative overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(0 58% 28%) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Get In Touch</h2>
          <Card className="max-w-2xl mx-auto p-8 md:p-12 shadow-xl border-border">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:info@zarnadzelawfirm.ge" className="text-muted-foreground hover:text-primary transition-colors">
                    info@zarnadzelawfirm.ge
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <a href="tel:+995XXXXXXXXX" className="text-muted-foreground hover:text-primary transition-colors">
                    +995 XXX XXX XXX
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group cursor-pointer hover:translate-x-2 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Tbilisi, Georgia</p>
                </div>
              </div>
              <div className="pt-8 border-t border-border">
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <img src={logo} alt="Giorgi Zarnadze Law Firm" className="h-16 opacity-90" />
            </div>
            <div className="text-center md:text-right">
              <p className="text-primary-foreground/80 mb-2">© 2024 Giorgi Zarnadze Law Firm. All rights reserved.</p>
              <p className="text-primary-foreground/60 text-sm">Serving Georgian businesses since 2010</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
