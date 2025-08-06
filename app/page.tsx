import {
  Main,
  Nav,
  Section,
  Container,
  Header,
  Grid,
  Flex,
  Prose,
} from "@/components/site/ds";
import { Form } from "@/components/site/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Shield, Clock, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <Main>
      {/* Navigation */}
      <Nav>
        <Container>
          <Flex justify="between" align="center">
            <Header as="h3" className="text-2xl font-bold">
              Premium Floors
            </Header>
            <Flex gap={6} className="hidden md:flex">
              <a
                href="#services"
                className="hover:text-primary transition-colors"
              >
                Services
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </a>
            </Flex>
            <Button size="sm" className="md:hidden">
              Menu
            </Button>
          </Flex>
        </Container>
      </Nav>

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-slate-50 to-slate-100">
        <Container>
          <Grid columns={2} className="items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Veteran-Owned Business
              </Badge>
              <Header as="h1" className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Home with{" "}
                <span className="text-primary">Premium Flooring</span>
              </Header>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Expert installation, premium materials, and veteran discounts.
                Get your free consultation and estimate today.
              </p>
              <Flex gap={4} className="flex-wrap">
                <Button size="lg">Get Free Estimate</Button>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Flex>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏠</div>
                  <p className="text-muted-foreground">
                    Beautiful Flooring Gallery
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Trust Indicators */}
      <Section>
        <Container>
          <Grid columns={4} className="text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Happy Customers</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <p className="text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24hr</div>
              <p className="text-muted-foreground">Response Time</p>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Services Section */}
      <Section id="services" className="bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <Header as="h2" className="text-3xl md:text-4xl font-bold mb-4">
              Our Premium Flooring Services
            </Header>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From hardwood to luxury vinyl, we install all types of flooring
              with precision and care.
            </p>
          </div>
          <Grid columns={3}>
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Hardwood Installation</CardTitle>
                <CardDescription>
                  Classic hardwood floors that add value and beauty to your home
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Sanding & refinishing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Custom staining
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Professional installation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Luxury Vinyl Planks</CardTitle>
                <CardDescription>
                  Waterproof, durable, and beautiful flooring for any room
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    100% waterproof
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Pet & kid friendly
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Easy maintenance
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Tile & Stone</CardTitle>
                <CardDescription>
                  Elegant tile installations for bathrooms, kitchens, and more
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Custom patterns
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Grout sealing
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Professional finish
                  </li>
                </ul>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <Container>
          <Grid columns={2} className="items-center">
            <div>
              <Header as="h2" className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Premium Floors?
              </Header>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">
                      Veteran-Owned & Operated
                    </h3>
                    <p className="text-muted-foreground">
                      Special discounts for veterans and active military. We
                      understand service and deliver excellence.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Licensed & Insured</h3>
                    <p className="text-muted-foreground">
                      Full licensing and insurance coverage for your peace of
                      mind. No hidden fees or surprises.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">On-Time Completion</h3>
                    <p className="text-muted-foreground">
                      We respect your time and schedule. Projects completed on
                      time, every time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎖️</div>
                  <p className="text-muted-foreground">
                    Veteran Discounts Available
                  </p>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section className="bg-muted/50">
        <Container>
          <div className="text-center mb-12">
            <Header as="h2" className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </Header>
          </div>
          <Grid columns={3}>
            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4">
                  "Premium Floors transformed our living room with beautiful
                  hardwood. The veteran discount was a nice bonus, and the work
                  was impeccable."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-muted-foreground">
                      Veteran Customer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4">
                  "Professional, on-time, and the luxury vinyl planks look
                  amazing. Highly recommend for anyone needing quality flooring
                  work."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold">MJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Mary Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Kitchen Remodel
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4">
                  "The tile work in our bathroom is stunning. Clean,
                  professional, and they even helped us choose the perfect grout
                  color."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="font-semibold">RW</span>
                  </div>
                  <div>
                    <p className="font-semibold">Robert Wilson</p>
                    <p className="text-sm text-muted-foreground">
                      Bathroom Renovation
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Contact Form Section */}
      <Section id="contact">
        <Container>
          <Grid columns={2} className="items-center">
            <div>
              <Header as="h2" className="text-3xl md:text-4xl font-bold mb-4">
                Get Your Free Estimate Today
              </Header>
              <p className="text-xl text-muted-foreground mb-8">
                Fill out the form and we'll get back to you within 24 hours with
                a detailed quote. Veterans receive special pricing!
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Serving the Greater Metro Area</span>
                </div>
              </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Request Free Estimate</CardTitle>
                <CardDescription>
                  Get a detailed quote for your flooring project
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form
                  fields={[
                    {
                      name: "name",
                      type: "text",
                      label: "Full Name",
                      validation: { required: true },
                    },
                    {
                      name: "email",
                      type: "email",
                      label: "Email Address",
                      validation: {
                        required: true,
                        validationType: "email",
                      },
                    },
                    {
                      name: "phone",
                      type: "tel",
                      label: "Phone Number",
                      phoneFormat: "us",
                      validation: {
                        required: true,
                        validationType: "phone",
                      },
                    },
                    {
                      name: "message",
                      type: "textarea",
                      label: "Tell us about your project",
                      rows: 4,
                      validation: {
                        required: true,
                        minLength: 10,
                      },
                    },
                    {
                      name: "is_veteran",
                      type: "yesno",
                      label: "Are you a veteran or active military?",
                      yesLabel: "Yes, I'm a veteran",
                      noLabel: "No, I'm not a veteran",
                      validation: { required: true },
                    },
                  ]}
                  webhookUrl="https://formspree.io/f/YOUR_FORM_ID"
                  showSuccessMessage={true}
                  successMessage="Thank you! We'll contact you within 24 hours with your free estimate."
                  resetOnSubmit={true}
                  submitText="Get Free Estimate"
                />
              </CardContent>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* Footer */}
      <Section className="bg-slate-900 text-white">
        <Container>
          <Grid columns={4}>
            <div>
              <Header as="h3" className="text-xl font-bold mb-4">
                Premium Floors
              </Header>
              <p className="text-slate-300">
                Veteran-owned flooring company delivering quality and
                excellence.
              </p>
            </div>
            <div>
              <Header as="h4" className="font-semibold mb-4">
                Services
              </Header>
              <ul className="space-y-2 text-slate-300">
                <li>Hardwood Installation</li>
                <li>Luxury Vinyl Planks</li>
                <li>Tile & Stone</li>
                <li>Flooring Repair</li>
              </ul>
            </div>
            <div>
              <Header as="h4" className="font-semibold mb-4">
                Contact
              </Header>
              <ul className="space-y-2 text-slate-300">
                <li>(555) 123-4567</li>
                <li>info@premiumfloors.com</li>
                <li>Veteran Discounts Available</li>
              </ul>
            </div>
            <div>
              <Header as="h4" className="font-semibold mb-4">
                License & Insurance
              </Header>
              <ul className="space-y-2 text-slate-300">
                <li>Licensed Contractor</li>
                <li>Fully Insured</li>
                <li>Bonded</li>
                <li>Warranty Included</li>
              </ul>
            </div>
          </Grid>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Premium Floors. All rights reserved.</p>
          </div>
        </Container>
      </Section>
    </Main>
  );
}
