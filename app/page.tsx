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
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const features = [
    {
      id: 1,
      title: "Modern Components",
      description:
        "Built with the latest React patterns and TypeScript for type safety and developer experience.",
      badge: "React 18",
    },
    {
      id: 2,
      title: "Design System",
      description:
        "Consistent styling with Tailwind CSS and a comprehensive component library built on shadcn/ui.",
      badge: "Tailwind",
    },
    {
      id: 3,
      title: "Responsive First",
      description:
        "Mobile-first design with responsive breakpoints that work beautifully on all devices.",
      badge: "Mobile Ready",
    },
    {
      id: 4,
      title: "Performance Optimized",
      description:
        "Server components by default with optimized bundle sizes and lightning-fast load times.",
      badge: "Server Components",
    },
    {
      id: 5,
      title: "Developer Experience",
      description:
        "IntelliSense support, TypeScript definitions, and comprehensive documentation for easy development.",
      badge: "TypeScript",
    },
    {
      id: 6,
      title: "Accessibility Ready",
      description:
        "Built with accessibility in mind, following WCAG guidelines and semantic HTML practices.",
      badge: "A11y",
    },
  ];

  return (
    <Main className="min-h-screen">
      {/* Navigation */}
      <Nav containerClassName="flex justify-between items-center">
        <Header as="h3">Site-DS</Header>
        <Flex className="hidden md:flex">
          <Button variant="ghost" size="sm">
            Documentation
          </Button>
          <Button variant="ghost" size="sm">
            Components
          </Button>
          <Button variant="ghost" size="sm">
            Examples
          </Button>
          <Button size="sm">Get Started</Button>
        </Flex>
      </Nav>

      {/* Hero Section */}
      <Section className="py-24 lg:py-32">
        <Container>
          <Flex direction="column" align="center" className="text-center">
            <Badge className="mb-8" variant="secondary">
              Built with Next.js 15 & React 19
            </Badge>
            <Header as="h1" className="mb-6 max-w-4xl">
              Build Beautiful Websites with a Modern Component Library
            </Header>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">
              A comprehensive design system combining custom site components
              with shadcn/ui. Create consistent, accessible, and performant web
              applications with ease.
            </p>
            <Flex className="flex-col sm:flex-row">
              <Button size="lg" className="mb-4 sm:mb-0">
                View Components
              </Button>
              <Button size="lg" variant="outline">
                Read Documentation
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="py-16 bg-muted/30">
        <Container>
          <Flex direction="column" align="center" className="text-center mb-16">
            <Header as="h2" className="mb-4">
              Everything You Need
            </Header>
            <p className="text-lg text-muted-foreground max-w-3xl">
              A complete toolkit for building modern web applications. From
              layout components to interactive elements, everything follows
              consistent design patterns.
            </p>
          </Flex>
          <Grid columns={3}>
            {features.map((feature) => (
              <Card key={feature.id} className="h-full">
                <CardHeader>
                  <Flex justify="between" align="start" className="mb-2">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </Flex>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>

      {/* Code Example Section */}
      <Section className="py-16">
        <Container>
          <Grid columns={2} className="gap-8 items-center">
            <div>
              <Header as="h2" className="mb-4">
                Simple, Composable Components
              </Header>
              <Prose isSpaced>
                <p>
                  Build complex layouts by composing simple, reusable
                  components. Every component follows consistent patterns and
                  accepts standard props for maximum flexibility.
                </p>
                <p>
                  The design system includes layout components (Container,
                  Section, Grid, Flex), typography components (Header, Prose),
                  and seamless integration with the complete shadcn/ui library.
                </p>
              </Prose>
              <Button className="mt-6">Explore Components</Button>
            </div>
            <Card className="p-6 bg-muted/50">
              <pre className="text-sm overflow-x-auto">
                <code>{`<Section>
  <Container>
    <Header as="h1">Page Title</Header>
    <Grid columns={3}>
      <Card>
        <CardHeader>
          <CardTitle>Feature One</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Description here...</p>
        </CardContent>
      </Card>
      {/* More cards... */}
    </Grid>
  </Container>
</Section>`}</code>
              </pre>
            </Card>
          </Grid>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="py-16 bg-primary text-primary-foreground">
        <Container>
          <Flex direction="column" align="center" className="text-center">
            <Header as="h2" className="mb-4 text-primary-foreground">
              Ready to Get Started?
            </Header>
            <p className="text-lg mb-8 max-w-2xl opacity-90">
              Join developers who are building faster with our modern component
              library. Get started in minutes with comprehensive documentation
              and examples.
            </p>
            <Flex className="flex-col sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="mb-4 sm:mb-0 bg-background text-foreground hover:bg-background/90"
              >
                View Documentation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Browse Examples
              </Button>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/* Footer */}
      <Section className="py-8 border-t">
        <Container>
          <Flex
            justify="between"
            align="center"
            className="flex-col md:flex-row"
          >
            <Header as="h6" className="mb-4 md:mb-0">
              Site-DS
            </Header>
            <p className="text-sm text-muted-foreground">
              Built with Next.js, React, TypeScript, and Tailwind CSS
            </p>
          </Flex>
        </Container>
      </Section>
    </Main>
  );
}
