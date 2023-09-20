# Helpful React bits for polished development

## Speech

Hi Im James Gill ive been a developer for close to 20 years in industry ive
built tiny little landing pages on my own to commercial SaaS projects with 40+
developers i am now the CTO at 2500, where the credo is build cool shit, change
the world, and dont be a dick

Today is part 2 of a series related to leveling up at react, where we're going
to build upon our evolving boilerplate project that we introduced in part 1. If
you missed this you can find a link to this project structure boilerplate at the
top of my linktree, or by searching github for twothousandfivehundred

In this episode, we'll explore some helpful patterns to bring to your own
project. We'll cover,

- using JSS with CSS variables;
  - and building upon an internal styling system
- creating Polymorphic typescript components
- and finally, using polymorphism and JSS to build
  - a Typography component
  - and tips for consistency, maintainability, and reuseability

Okay, lets jump in.

### using JSS with CSS variables

There are a number of styling libraries out there for react (styled components,
emotion, tailwind, JSS to name a few). Each have their pros and cons, and to
dive in to each individually would take up more time than i have today.

Regardless, there is trouble on the horizon for most CSS-in-JS solutions that is
worth mentioning. With the release of React 18 and more notably the industry
shift toward Server Side Rendering as a preference, most CSS in JS libraries
were brought into the spotlight as they created issues with injecting styles
during runtime (both from a performance, and a concurrent rendering
perspective). While some libraries have chosen to throw their hands up in horror
and abandon ship, some of the more tenacious have pushed to work with react
developers to come up with a solution. Everyone is still in a little bit of a
holding pattern until a decision is made about the best way to solve these
problems though. In my opinion, there is enough loyalty FOR CSS-in-JS within the
react community that the likihood support is completely dropped for runtime CSS
is incredibly low. I predict SOME kind of solution will pop-up in the form of a
public API from react.

Now, with that caveat in mind, and before you all go ditching CSS-in-JS in favor
of something like tailwind (shudder) or css-modules, let me show you one of the
ways you can use JSS in combination with CSS variables to effectively remove the
need for runtime CSS-in-JS, while still gaining all of the benefits of a JS
solution.

Out of the box, JSS works by calculating your styles, scoping them, injecting
the scoped style definition into the `head` of your document, and then applying
the CSS class to your component.

Let's look at a basic component that uses JSS. Here we have a basic controlled
progress bar. It receives a progress value from a hook, that represent the
percentage completeness of the thing that is progressing. Here we can see that
the `useStyles` hook returns to us an object of CSS classnames, that we apply to
the div. If we inspect the head of our document for this progress bar element,
you can see our scoped style definition, and its classname matching that applied
to our component's element. If we look at the style definition, we can see it
doesnt do anything dynamic (yet!), we are going to want to change the `width`
property as the `progress` value changes.

So how do we pass the value of progress in to our styles?

Let's use JSS's default way of passing dynamic values, we update the `useStyles`
hook, and pass the `progress` value into it, making it available inside our
styles either at the whole style level, or at the per property level. Yay, it's
working.

So what's wrong with this?

Well, in order to facilitate dynamic values, JSS stops outputting a static style
definition in the `head` of our document. It's holding it all in memory, and
during runtime, applying it. This is pretty taxing on the DOM, and is a
nightmare to work with for SSR. Your goal should be to end up with fully
serialisable CSS styles.

So how do we solve for this?

Well, we can offload the runtime changes directly to CSS using variables and
inline styles. i know, i know, inline styles.. well, before you grab your
torches and pitchforks, and rally behind the numerous places you've probably
read or seen that decree inline styles as bad practice, im gunna tell you they
are only as bad as you let them be. The examples you've probably seen look
something like this:

`<div style={{width: '20%'}} />`

and I would whole heartedly agree with you, this is bad practice. Shallow
equality checking is going to fail, as each time this component is called, we
are creating a new object. However, with good use of memoization inline styles
can be made as performant as any other variable you use as an attribute or prop.

Let's upgrade our `Progress` example to avoid passing the progress variable
directly into the `useStyles` hook, and instead calculate and memoize an inline
style using a CSS variable. Now, JSS can continue to output static CSS, but we
retain the ability to update styles dynamically.

Why not just put the `width` property in the calculated style, i hear you ask?

This harks back to my first presentation. You want to keep similar concerns
grouped together. In my mind, passing a variable from JS to CSS is not the
responsibility of your styling, nor is calculating CSS properties the
responsibility of your logic. Keep your styling in your styling and your logic
in your logic, then keep your hooks responsible for interfacing between the two.
The benefits of this approach allows you to opt in to runtime use of your
styling, and, with a fairly trivial amount of code, extract your styles out to
flat CSS. Also, I would advise against adding tests to your styling, but the
creation of your CSS variables from your JS is a perfect thing to test. My
advice to you about JSS, if you're planning on using it, would be to pretend
that the ability to pass props into the `useStyles` hook doesnt exist, and use
CSS variables any time you need dynamic styles.

So let's summarize:

- JSS provides a convenient API with great separation of concerns
- dynamic JSS styles cannot be serialized, and as such are not performant, and
  will hit problems with SSR
- inline styles arent necessarily bad, you just have to treat them right
- use CSS variables to create dynamisism

### internal styling system

As an aside, while we're looking at JSS, let's have a quick look at using an
internal styling system.

We covered the use of a services space within your project in the last
presentation, and a styling system is a perfect candidate for a space like this.
As your UI becomes more and more fleshed out, youre going to find yourself
reaching for some consistent values for your styling. Some examples include
breakpoints, colors, spacing units, and zIndices. Scattering these as magic
numbers or strings through your codebase is going to make maintaining things
incredibly difficult. A centralized styling service gives you a one stop space
to manage everything related to your common styling values.

Also, the great thing about your JSS styles, is that they are within a
javascript environment; we can do all manner of cool patterns that make our
lives easier. Why not generate your min/max container widths and your breakpoint
values based upon a single base width? or even destructure common utilities like
a full position absolute helper, or better yet, manage all your top level layout
layer zIndices from one place, relative to one another? Super useful, and easy
to maintain.

### polymorphic typescript components

Ok, let's change tacks, let's have a look at polymorphic typescript components.

In react, polymorphism is a concept that allows us to define a single component,
but have it behave like or inherit characteristics of another.

Why would we need something like this?

Consider this `Box` component where we have a component that renders a `div`
around it's children. What happens if we want to be more semantically correct
when we use this component and instead render something like a `main` or
`section`?

We could add some arbitrary prop like `isSection` or `isMain`, but this is going
to quickly be hell to maintain. What if we could pass in a prop that represents
the component? Libraries like ChakraUI and MUI use props like an `as` or
`component` to let you pass in a component you want to render. Let's add an `as`
prop that defaults to `div`

Hmm, that wasnt so hard. However, problems arise when you want to stay type
safe. Right now our component isnt very smart, what if i have a polymorphic
component that could be an anchor tag? It should warn me if i dont include
required props like an href. How do we make sure we havent made a typo, or used
a bad html tag? And we dont want to kill our developer experience by loosing the
ability to suggest valid props when we ctrl+space. This is where we need to add
some smarts to our component.

Enter, typescript generics. Now, i could spend more than an hour walking you
through the complexities of generics, but we're on the clock today. So instead,
i'll show you the completed component, and the two generic types for creating
these polymorphic components (one with and one without a ref). It's very easy to
upgrade existing components to become polymorphic, as we pass existing type
definitions into these generics, making them highly reuseable.

Now we can create semantically correct, and type safe components throughout our
project. So let's summarize:

- polymorphism in react lets us create components that behave like other
  components
- we should avoid creating prop hell by using something like an `as` or
  `component` prop
- use typescript generics to provide strong typings for better developer
  experience, and prop safety
- good element semantics means better accessibility, and less unnecessary DOM
  nodes

### Typography component

Probably the place polymorphic components are MOST useful is in a Typography
component context.

Almost without exception, at some point youre going to need to display text. The
designer, or design team has put a lot of care and attention into the UI designs
you're trying to implement. And even in the most basic of layouts, you should be
striving to achieve a level of consistency across the sizing, kerning (letter
spacing), and leading (line height) for the typography throughout the designs.
You may end up with a contact sheet of your type that looks something like this,
or you may want to construct one from the various styles across the designs to
make it easier to refer to.

Creating a central reference sheet both design and development can share creates
a consistent space to point to. It outlines common building blocks from which
both teams can construct from, and avoids drift between designed and built UI.
With modern design tools like Sketch and Figma, you can even extrapolate these
reference values out into tokens. This allows easy in-place inspection of which
typographical token is being used.

So you've got your tokens, or reference sheet set up. What now?

Well, we integrate these values into our internal design system. First with a
fonts definition of all available weights and sizes. Then through some
typescript manipulation we construct a merged record of each size for each
weight.

Once our internal design system is set up, we can introduce a `Typography`
component that takes a `variant` prop. Note that the `variant` prop is based
upon the exported `typographyConstants` declared within the constants file. Here
we provide context about WHEN we should use these particular styles. You'll note
that we dont create names like `heading1` or `boldXl`. We do this for the same
reason that we dont name our colours after the colour they display, but instead
for the purpose they are looking to fulfil. Primary vs Dark Blue, Secondary vs
Cream. This provides us greater flexibility to adjust themes later without
unwanted side effects. You wouldnt want to have to change all places in your app
that reference `boldXl` if you needed to change your font sizing scale to now be
2xl for example. Or be using our polymorphic component to render an `h3` with
the variant of `heading1`. As such, the `typographyConstants` definition should
be the only place that references the typography styling values, everywhere else
should reference `typographyConstants`, or ideally use the `Typography`
component.

Now with some default values for `variant` and `as`, everytime we want to add
any text to the UI, instead of wrapping in a `span`, or a `p`, we use our
polymorphic `Typography` component. Its a few extra keystrokes, for a lifetime
of happiness.

By building structure, and consistency into your internal design system within
your code, you provide yourself with huge benefits for refactoring and
maintenance. So let's summarize:

- plan for change, it is inevitable.
- easy alignment between design and development is key to avoiding drift
- use an internal design system to centralize your values
- use contextual variants that reference your design system to make creating and
  maintaining code easier

Ive had to be a little quicker than normal today, so if ive gone over anything
too quickly and you want to check out a transcript of this talk, or the
boilerplate project, head over to my linktree, or by searching github for
twothousandfivehundred
