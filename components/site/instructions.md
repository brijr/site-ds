# Site Component Library Instructions

## Overview

This component library provides a set of React components designed for building clean, consistent websites. All components use Tailwind CSS for styling and accept common props for customization.

**Important**: This project uses shadcn/ui. You have access to ALL shadcn components (Button, Card, Dialog, Form, etc.) in addition to these custom site components. Always prefer using existing components from this design system or shadcn/ui rather than creating new ones.

## Design System Guidelines

1. **Always use existing components** - Never create custom components if one already exists in this library or shadcn/ui
2. **Maintain consistency** - Follow the established patterns and styling conventions
3. **Use the design tokens** - Stick to the predefined spacing (gap-4), container widths (max-w-5xl), and typography scales
4. **Prefer composition** - Build complex layouts by composing these simple components rather than writing custom CSS
5. **Respect the system** - Don't override core styles unless absolutely necessary

## Import Statements

```tsx
// Site components
import {
  Main,
  Nav,
  Section,
  Container,
  Header,
  Grid,
  Flex,
  Prose,
} from "@/components/site";

// shadcn/ui components (examples)
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// ... any other shadcn component
```

## Components

### Layout Components

#### Main

Wraps the main content area of your page.

```tsx
<Main className="min-h-screen">{/* Page content */}</Main>
```

#### Nav

Navigation wrapper with built-in container constraints.

```tsx
<Nav containerClassName="flex justify-between items-center">
  {/* Navigation items */}
</Nav>
```

#### Section

Semantic section wrapper with vertical padding.

```tsx
<Section className="bg-muted">
  <Container>{/* Section content */}</Container>
</Section>
```

#### Container

Centers content with max-width constraint (max-w-5xl).

```tsx
<Container>{/* Contained content */}</Container>
```

### Typography Components

#### Header

Dynamic heading component that renders h1-h6 based on the `as` prop.

```tsx
<Header as="h1">Page Title</Header>
<Header as="h2" className="text-muted-foreground">Subtitle</Header>
```

#### Prose

Rich text wrapper that styles all child HTML elements (paragraphs, lists, links, etc.).

```tsx
<Prose isArticle isSpaced>
  <h1>Article Title</h1>
  <p>This content will be automatically styled.</p>
  <ul>
    <li>Lists get custom bullets</li>
    <li>Links are styled</li>
  </ul>
</Prose>
```

Props:

- `isArticle`: Renders as `<article>` tag and adds max-width for readability
- `isSpaced`: Adds proper spacing between elements

### Layout Components

#### Grid

Responsive grid layout with automatic breakpoints.

```tsx
<Grid columns={3}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

Columns (1-4) are responsive:

- 1 column: Always single column
- 2 columns: 1 on mobile, 2 on sm+
- 3 columns: 1 on mobile, 2 on sm, 3 on lg+
- 4 columns: 1 on mobile, 2 on sm, 4 on lg+

#### Flex

Flexible box layout with gap-4 default spacing.

```tsx
<Flex justify="between" align="center">
  <div>Left content</div>
  <div>Right content</div>
</Flex>

<Flex direction="column" className="md:flex-row">
  <div>Responsive flex direction</div>
  <div>Second item</div>
</Flex>
```

Props:

- `direction`: "row" | "column" | "row-reverse" | "column-reverse"
- `wrap`: boolean for flex-wrap
- `justify`: "start" | "end" | "center" | "between" | "around" | "evenly"
- `align`: "start" | "end" | "center" | "baseline" | "stretch"

## Common Props

All components accept:

- `className`: Additional Tailwind classes
- `id`: HTML id attribute
- `style`: Inline styles
- `children`: React children

## Usage Patterns

### Basic Page Structure

```tsx
<Main>
  <Nav>
    <Container>
      <Flex justify="between" align="center">
        <Header as="h3">Logo</Header>
        <Flex gap={6}>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </Flex>
      </Flex>
    </Container>
  </Nav>

  <Section>
    <Container>
      <Header as="h1">Welcome</Header>
      <Prose>
        <p>Your content here...</p>
      </Prose>
    </Container>
  </Section>
</Main>
```

### Feature Grid

```tsx
<Section>
  <Container>
    <Header as="h2" className="text-center mb-8">
      Features
    </Header>
    <Grid columns={3}>
      {features.map((feature) => (
        <div key={feature.id}>
          <Header as="h3">{feature.title}</Header>
          <p>{feature.description}</p>
        </div>
      ))}
    </Grid>
  </Container>
</Section>
```

### Article Layout

```tsx
<Main>
  <Section>
    <Container>
      <Prose isArticle isSpaced>
        <h1>{article.title}</h1>
        <p className="lead">{article.description}</p>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </Prose>
    </Container>
  </Section>
</Main>
```

## Best Practices

1. **Use semantic components**: Choose `Section`, `Nav`, and `Main` for better HTML structure
2. **Combine with Container**: Most sections should have a Container child for consistent spacing
3. **Header component for all headings**: Use the Header component with appropriate `as` prop instead of raw h1-h6
4. **Prose for rich text**: Wrap any user-generated or markdown content in Prose
5. **Grid for equal items**: Use Grid when items should be equal width
6. **Flex for unequal layouts**: Use Flex when you need more control over item sizing
7. **Override with className**: All components accept className for customization
8. **Use shadcn components**: For buttons, cards, forms, dialogs, etc., always use shadcn/ui components
9. **Stay within the system**: Don't create custom components when existing ones will work
10. **Consistent spacing**: Use the default gap-4 spacing unless there's a specific design requirement

## Responsive Design

- Components are mobile-first
- Breakpoints follow Tailwind defaults (sm: 640px, md: 768px, lg: 1024px)
- Grid and typography scale automatically
- Use className to add responsive utilities as needed

## Examples for AI - IMPORTANT: Follow These Patterns

### ⚠️ CRITICAL: Design System Usage Rules

- **NEVER create custom components** if one exists in this library or shadcn/ui
- **ALWAYS use the provided components** for consistency
- **STICK to the design system** spacing, typography, and layout patterns
- **COMBINE components** rather than writing custom HTML/CSS

When building a landing page:

```tsx
// Hero section with centered content
<Section className="py-24">
  <Container>
    <Flex direction="column" align="center" className="text-center">
      <Header as="h1">Build Better Websites</Header>
      <p className="text-xl text-muted-foreground max-w-2xl">
        Create beautiful, responsive websites with our component library
      </p>
      {/* Use shadcn Button component */}
      <Button size="lg" className="mt-8">Get Started</Button>
    </Flex>
  </Container>
</Section>

// Feature cards - using shadcn Card components
<Section>
  <Container>
    <Grid columns={3}>
      <Card>
        <CardHeader>
          <CardTitle>Fast</CardTitle>
          <CardDescription>Optimized for performance</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Lightning fast load times</p>
        </CardContent>
      </Card>
      {/* More cards... */}
    </Grid>
  </Container>
</Section>
```

When building a blog post:

```tsx
<Main>
  <Section>
    <Container>
      <article className="mx-auto max-w-3xl">
        <Header as="h1" className="mb-4">
          {post.title}
        </Header>
        <Flex className="text-sm text-muted-foreground mb-8">
          <time>{post.date}</time>
          <span className="mx-2">•</span>
          <span>{post.author}</span>
        </Flex>
        <Prose isArticle isSpaced>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Prose>
      </article>
    </Container>
  </Section>
</Main>
```

## Component Combinations with shadcn/ui

### Navigation with shadcn components

```tsx
<Nav>
  <Container>
    <Flex justify="between" align="center">
      <Header as="h3">Logo</Header>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink href="/about">About</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </Flex>
  </Container>
</Nav>
```

### Forms with shadcn components

```tsx
<Section>
  <Container>
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <Form>
          <div className="space-y-4">
            <Input placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Message" />
            <Button type="submit" className="w-full">
              Send
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  </Container>
</Section>
```

## Final Reminder

**You are building within an established design system.** Every decision should respect the existing components and patterns. Before creating anything custom, check if:

1. This site component library has what you need
2. shadcn/ui has a component for it
3. You can compose existing components to achieve the goal

Only as a last resort should you write custom components or styles.
