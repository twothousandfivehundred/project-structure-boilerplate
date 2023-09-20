# Do. Or Do Not. There Is No Try: Becoming a React Jedi Master

https://docs.google.com/presentation/d/1wEo-ujvQEglMYe2k5i3YKpv72x6GxAc3mp6wjAYl_I0/edit?usp=sharing

## Speech

Hi Im James Gill ive been a developer for close to 20 years in industry ive
built tiny little landing pages on my own to commercial SaaS projects with 40+
developers i am now the CTO at 2500, where the credo is build cool shit, change
the world, and dont be a dick ok.. enough emojis.. i wont do that to you again

today we're going to talk about do. or do not. there is no try becoming a React
Jedi Master this is likely going to be part 1 of a series related to leveling up
at react, so watch this space! lets add some context

so let's be real, why even talk about this

change is inevitable let me paint you a picture

- you build an application for a client with a team of a few devs, everything
  works great
- the client asks to add some new features, no worries, you pop them in
- now they want to remove some features, and add others, thats a little bit more
  complicated, you'd not considered needing to split those things apart, little
  code smelly in places, but its out the door
- guess what, theyre back, update one of the features, remove a couple and add
  another one. You really werent anticipating that last one. You've been pretty
  speedy to do those last few changes, so why should this be any different? Time
  pressure pushes and you get a little bit bubblegum and stickytape. You're not
  proud of it, but it works
- cut to 12 sprints later, the project is really complicated, and you find
  yourself tracing through half a dozen files to read and understand what a
  function is trying to do. Productivity is slow, morale is grinding, and things
  are super fragile.

Now imagine the client wants to create a new version of the app, or you want to
move from something like angular to react because of deprecation, or performance
reasons. You end up copying over complicated legacy code because its either too
painful/too critical/or too time consuming to migrate properly. Effectively
bringing with it all the nastiness that last application had.

dont let the hate flow through you. It sounds like a nightmare. And it is. And
im sure if this scenario hasnt happened to you yet, it almost certainly will in
your career.

all good things are built upon solid foundations and simply put, the best solid
foundation, is project and component structure a consistent, repeatable, and
reasonable approach to this can pave the way for applications as they grow and
change

im sure you've seen plenty of tutorials on Todo lists and simple games. Usually
only a couple of components. What can get difficult to find, is anything to
point to how to build more "life like" applications. Ones with hundreds of
components and dozens of pages.

So lets cover some principles of what we're aiming for with our ideal project
and component structure. it must be

- logical/intuitive
  - new developers coming in to our application should be able to find their way
    around with minimal explanation
- repeatable
  - when we go to write something, we should already know where that thing
    should live, based upon what it needs to do
- lastly, it should be flexible but opinionated (like my wife)
  - we need to be able to have our structure not just allow for the growth of
    our application, but assist with it. And it needs to indicate to us when we
    do something away from its standard

With that being said. I present to you.. ACCCHSS (aches? achoos? yeah, i am
taking suggestions for better names). It works on the concept of nesting, and
has some basic rules that give it "unlimited power".. in any case.. cue epic
jedi training montage.

1. Project folder structure
   - assets
   - constants
   - components
   - contexts
   - hooks
   - scenes
   - services

let's start with

- assets

  - typically in your application you're going to have some media that you want
    to expose to the world. Think images, fonts, favicons, and the like. Any
    media files you want to directly import into your working files should live
    here.
  - but why?
    - as your application grows it can be incredibly useful to be able to guage
      the scale of your media assets. Images and video are also one of the few
      types of file that you'd want to run batch jobs on (think cropping,
      quality change, etc)
  - the rules
    - Certain media files you will want to avoid being "built" with your
      application and instead just carried over to your output, these likely
      live in something like a "public" folder, and should be kept external to
      your src directory.
    - group by type (subfolders, as makes sense)

- constants

  - your application is likely going to require some configuration. this space
    is designed to house static or immutable values.
  - but why?
    - as much as possible we want to avoid "magic strings" peppered throughout
      your application, especially ones that you use frequently. The term "magic
      string" is used to describe hardcoded values like public keys, route
      paths, time formatting options etc. Having these centralised allows them
      to be easily changed later, and encourages building with configuration in
      mind.
  - the rules
    - constants never change at runtime
    - should relate to whole application
    - named files or folder/index depending upon siblings/decendants

- components

  - y'all know what a component is. and we'll cover the specifics of what lives
    inside a component folder in a bit. the intention here is to leverage
    nesting to define "family"s of components. components at this top level
    represent ones that can be used anywhere within your application. any
    components nested within them can only access their decendants and siblings.
    this mirrors react's uni-directional data binding, and single purpose
    component paradigms by keeping things focused "across" or "down" in the tree
  - but why?
    - keeping things "flat" leads to huge folders of hundreds of components
      being mingled together. You could try and "group" them by purpose or type,
      but this becomes difficult to parse for new developers to the project, and
      can make refactoring difficult.
  - the rules
    - named folder/index
    - components in this parent folder can be used anywhere
    - sub components within these folders can only import siblings or decendants

- contexts

  - one of the most powerful tools in your kit. gone are the days of immediately
    reaching for something like redux to provide application level state
    management. Contexts should be relatively simple components, deferring their
    complexity instead to hooks. They should be limited to managing a single
    feature or part of a feature
  - but why?
    - without getting into the benefits of contexts themselves, splitting your
      application state into features, keeps them easy to manage, and
      composeable
  - the rules
    - named folder/index
    - should contain hooks folder
    - limit scope to the management of one feature or part of a feature

- hooks

  - for the most part hooks provide the connection between logic and componentry
    (we'll cover more on this in a bit). With this in mind, your hooks should
    only contain themselves, and pure logic files. Hooks can call other hooks,
    but should never use JSX. They should also be nested within the component
    that uses them, or hoisted to this top level if used by multiple components
  - buy why?
    - the power of hooks comes from their reuseability and abstraction of logic.
      Their ability to "hook in" to react's data flow or trigger a rerender.
      with this in mind, again we build with modularity and composability in
      mind, and house our hook and logic files using the same nested approach we
      do with components
  - the rules
    - named folder/index
    - colocated logic file
    - can call other hooks
    - logic files should be pure

- scenes

  - these are essentially page level components. we keep them separate, as it
    makes associating the route of your application to the base component being
    rendered on that route easy to find. Scenes can contain within them
    components, constants, contexts, hooks, and child scenes, nesting each of
    them according to their own rules, and following a similar heirachical
    import limitation we talked about in components
  - buy why?
    - on large applications mixing either your page level components into the
      components directory, or having them sit as siblings in the root of the
      project can get difficult to differentiate from our purpose driven
      folders. for example, imagine having a route called 'settings', or
      'accounts' and how confusing that could be sitting next to our 'services'
      folder. or having to prefix or suffix the component to help identify it,
      breaking the association to application route, and either having them sit
      apart from one another, or prevent components from using similar prefix's
  - the rules
    - named folder/index
    - folder name should ideally match url "part", feature at minimum
    - can include components, constants, hooks, contexts and child scenes
    - any sub folders can only import siblings or descendants

- finally, services
  - You can (and should) think of these as libraries within your own project.
    Services are also opportunities to create "bridges" or interfaces to 3rd
    party libraries, by writing them self contained. This provides your
    application with a single point of reference, such that if you need to
    upgrade or replace that library, you only have to do it in one place,
    limiting the need for whole application refactoring.
  - but why?
    - getting into the habit of not using 3rd party libraries directly (and
      scattered) throughout your application, and instead creating your own
      "middleware" layer to them, will save you time, energy, and by extension
      money. They are very likely candidates to be split out into their own
      packages, and you should treat them as so.
  - the rules
    - named folder/index
    - self contained (ie. not relying on imports "up" from themselves)

Ive been using this project structure for nearly the last decade, any have
encouraged it in the companies i join. I can tell you it has saved a significant
amount of time, having things be intuitive, consistent and flexible. With any
aches, you’re gunna have a pain. The one pain I will note, is that you can end
up with some quite deep nesting (particularly in scenes). I have seen this cause
issues on windows machines, that have character limits to absolute file paths.
In this scenario, ive found that within scenes, you can remove the 'components'
sub-folder and have the Pascal cased folders as direct children. Similarly, long
import paths of `../../` hell can be visually confusing. Luckily, either through
tsconfig or webpack you can support absolute paths, or import aliasing to make
this a little nicer visually. And adds the benefit of being able to move files
around without the hassle of updating all your imports.

Great, so we know how our folders should be structured, and we know what needs
to go inside them, and their respective rules. Now let's get more granular and
cover an individual component, and how it should be structured.

## Components

Just like our change scenario we discussed before talking whole project
structure, a components structure can very easily fall to the dark side..
succumb to poor foundations. As we build and update more of our component, we
want it to adhere to the same three principles that we applied to our entire
project. We want them to be

- logical/intuitive
- repeatable
- flexible but opinionated

So let's look at an example component. Here we have a link component. Very
basic. It needs to either use react-router-dom's Link component for internal
links, or an anchor with target blank. We want to standardise these into a
single component for ease of use, and so that we get the benefits of 'no hard
refresh' when using internal links. (This is a little bit of a convoluted
example, as im aware react-router has a NavLink component that would take care
of this isSelected value for us). In any case, in this file we can see

- a name clash import rename
- inline typings
- a number of hooks, some with memoised logic calculations inside of them
- a conditional render to out either the anchor or Link (now InternalLink)
- its worth noting that these last three hooks are calculated regardless of the
  isExternal value, despite them only being necessary for InternalLinks (because
  we cant conditionally render hooks)

Lets imagine we want to test this component. we need to make sure that we test
for ... but unfortunately, there are parts of our component we cant add unit
tests for. namely ... This leads to not only poor reusability, but blindspots in
our test coverage, and having to bake too much "know how" from the component
into our tests

Now let's look at the same component, using a different structure

- a custom hook that returns the necessary component based upon href
- a hook that calls some pure logic memoizing its args
- a pure logic function that returns the correct component based upon more pure
  logic
- 2 split components responsible for their own renders
- a call to a centralised custom hook that conditionally adds the classname

How much easier is this now to test?

Sure, you've exchanged fewer files for test coverage and simpler components. And
any extra lines of code are mostly boilerplate react. So i ask you, in 6 months
time when you come back to this, which are you going to appreciate more? We're
not playing code golf. The things you, and your peers are going to appreciate in
the long run are

- ease of readability
- ease of testability
- ease of development

Let's cover the rules

- index.tsx
  - this is the only file containing tsx
  - it is only responsible for the view
  - at MOST logic in this file should be limited to basic ternary expressions
    for rendering, and perhaps classnames
- styles.ts
  - split your classnames out into their own file. i dont care if you're using
    styled-components, scss, jss, or tailwind (i mean i do care.. use jss, but
    thats for another day).
  - keep your views clean by keeping HOW something should look separate from
    WHAT is being rendered.
- types.ts
  - in the same vein as styling, where possible keep your types separate.
  - This provides you with not only cleaner view files, but the ability to more
    easily share your types across your project
- constants.ts
  - just like those defined at the root of your project, these should be pure,
    and immutable
- hooks/useX/index.ts
  - custom hooks are plain typescript, no tsx
  - they provide an interface between your view and your logic
  - they are responsible for making sure things only change when they need to
- hooks/useX/logic.ts
  - pure, bite sized functions
  - should be used for view logic
  - avoid baking business logic into these files, instead opting for a service
- components/
- contexts/
-
- co-located test files, just test what your file does, provide control over
  anything impure or external by mocking it.
  - index.spec.tsx
  - hooks/useX/index.spec.ts
  - hooks/useX/logic.spec.ts

And thats it. Project and component structure focused on the key principles of
being

- logical/intuitive
- repeatable
- flexible but opinionated

We've covered a lot of ground today, and almost certainly some of this will take
a minute to percolate. So I have made this entire test project public. It is an
evolving repo, and will feature in the upcoming parts of this series. you can
find a link to this project structure boilerplate at the top of my linktree, or
by searching github for twothousandfivehundred

As a little sneak peak, and id love to get some feedback or suggestions, here
are some of the items id love to talk to, in my next ramble:

https://forms.gle/PenSekarbTYdByG1A

- jss and using css variables with react
  - your internal styling library
    - zindex
    - breakpoints
    - colours
- polymorphic typescript components
- Typography component.. design and developer alignment
- animation components
