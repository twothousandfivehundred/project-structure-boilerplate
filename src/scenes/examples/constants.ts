import ExamplePolymorphic from './scenes/polymorphic';
import ExampleProgress from './scenes/progress';
import ExampleTypography from './scenes/typography';

export const examples = [
  {
    slug: 'progress',
    title: 'JSS with CSS variables',
    component: ExampleProgress,
  },
  {
    slug: 'polymorphic',
    title: 'Polymorphic Components',
    component: ExamplePolymorphic,
  },
  {
    title: 'Typography',
    slug: 'typography',
    component: ExampleTypography,
  },
];
