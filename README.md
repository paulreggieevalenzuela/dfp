<div align="center">
  <h1>Design Force Client Portal</h1>
  <p>by <a href="#">500 Designs Software Engineering Team</a></p>
</div>

# Table of contents

<!--ts-->

- [Features](#features)
- [Getting Started](#getting-started)
- [Standards / Patterns / Best Practices](#standards-patterns-and-best-practices)
  - [KISS](#kiss)
  - [DRY](#dry)
  - [Separation of concerns](#separation-of-concerns)
  - [Styling](#styling)
  - [Typescript](#typescript)
- [Naming Conventions](#naming-conventions)
- [Repo PR Requirements](#repo-pr-requirements) before merging
<!--te-->

# Features

- ⚡️ Next.js 12
- ⚛️ React 18
- ✨ TypeScript
- 😎 [Carbon Design System](https://react.carbondesignsystem.com/?path=/story/getting-started-welcome--welcome)
- 💨 [Tailwind CSS](https://tailwindcss.com/docs/installation) — Non-opinionated utility only css library with Just in time mode.
- 📥 [Redux Toolkit](https://redux-toolkit.js.org/) — For enterprise level state management, has built-in middleware, data fetching and caching
- 🎣 [React Hook Form](https://react-hook-form.com/) - Performat and lightweight form package for loading cached values and validation
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🃏 Jest — Configured for unit testing
- 🤖 Conventional Commit Lint — Make sure you & your teammates follow conventional commit

<br/>
<br/>

# Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br/>
<br/>

# Standards, Patterns, and Best Practices

## KISS

- Avoid making unnecessary functions taken from other projects,
  each project is custom and must match only its Figma components with pixel accuracy as much as possible.
  If there are obvious reusable components (i.e buttons, forms) that can be used on other projects add them here to our company react boiletplate [repo](https://github.com/500-Designs/500d-react-boilerplate) and render at /kitchen-sink page.
- Avoid unnecessary reuse of existing components when a simpler implementation is available, this prevents spaghetti code and side-effects. Example: The fancy dropdown menus found on this kitchen sink [page](https://design-force-portal.vercel.app/kitchen-sink/input-dropdown) has too much going on. For a basic form that needs a dropdown input, just use native html tags `select > option` and apply existing css. No need to create a new component.

## DRY

- but keep it simple
- All reusable compoents at an atom, element, block (before section) level are are demoed in this template
  /kitchen-sink
- Resuable intefaces and customHooks are stored in /types and /utils respectively
- For each new React project, get aquanted with components presented in the /kitchen-sink,
  then add more or add variants to existing ones as needed based on project mockups/requirements

## Separation of concerns

- keep stylsheets purely declarative of styles
- Put logic ie. conditionals, calculations, loops inside functions component or helper files.

## Styling

- Before coding pages, components must be built and be presented in /kitchen-sink for QA
- Design of the UI is basd on IBM design language, hence well be using [Carbon components](https://react.carbondesignsystem.com/?path=/docs/getting-started-welcome--welcome) and styling them as needed. Style mods for carbon components are in /styles/carbon-theme
- Match components to items presented in Figma's component screen, if not present then just refer to it's instance in the pages
- Colors are set in tailwind.config.js
- Vanilla css can be used alongside tailwind syntax inside the stylesheet files like so:
  ```bash
  .ComponentName {
    @apply max-w-[1200px] w-full mx-auto;
    margin-bottom: 112px;
  }
  ```
  However, once you got the hang of tailwind there's always an abitary class equivalent for vanilla css:
  like the ff. `margin-bottom: 112px; margin-left:auto; margin-right:auto;` is equivalent to
  `@apply mb-[112px] mx-auto`;
- Use only inline tailwind styles at minimum, only for quick layout mods i.e. `className='flex-col gap-5'`, the rest, place in css modules, this keeps the least band-aids and makes cleaner code.
- Put all css in css modules - i.e. ComponentName.module.css(or scss)
- So each component css module must only have styles for it's referenced component.
- For now, we are free to add any descriptive classnames to component's child elements as long as they're styles are contained in the corresponding css module for that component. i.e. Card.module.scss and use CamelCase for the component module.

  - option 1: using classname like "content"
    `<div className={styleModuleVariableName.Card}>...<article className="content">...</article></div>`
    and style through `.Card:global { .content {...}}`
  - option 2: no className at all and just target element style through nesting `.Card:global { > article {...}}`
    `

- TBA: /kitchen-sink page will be replaced with auto generated storybook

## Icons Usage

- Figma mockups make use of icons mostly found in [Carbon Icons library](https://carbondesignsystem.com/guidelines/icons/library)
- If icon is not in carbon you may use icons from here: [React Icons](https://react-icons.github.io/react-icons)

## Typescript

- Provide explicit types for all values (esp. with props), avoid using 'any' as much as possible
- Take the previous state into account while updating the state i.e.
- Use TS-free TSX (JS free JSX) as much as possible - If logic is a one-liner, then using it in the TSX is fine
- Use functional components and hooks, no class components and constructors as much as possible
- store mockdata (pre API integration) in a separate file
- Multiple component definition per file, is not allowed
- Keep components small and separate your functionalities
- Use JavaScript destructuring to remove redundancy.
- Always prefer passing objects
- Use short circuit operators for Conditional rendering
- Use folder components

<br/>
<br/>

## Testing:

- Jest with react-testing-library will be implemented down to road to represent a stories acceptance criteria in automated unit/integration test
- Automated Cypress automated testing will also be added down the road once the QA team is ready to use it.

# Naming Conventions

- UpperCamelCase - component / interface / type / enum / decorator / type parameters
- lowerCamelCase - variable / parameter / function / method / property / module alias
- UPPERCASE - global constants, keep this to a minimal i.e. environment variables such as API_BASE_URL and NODE_ENV
- Avoid using abbreviations in variables i.e. for "getTZ" use getTimeZone / getTimezone
- for typescript interface or types declared inside components file add suffix "Props"
  i.e. "type ButtonProps = {" or "interface ButtonProps {"

<br/>
<br/>

# Repo PR Requirements

- Pull latest 'dev' branch and create branch using the format {jira_story_id}-{name}. i.e. "DF-123-user-profile-ui"
- Make at least 1 commit per shift to your branch then push branch, even if unfinished or still a work in progress just use commit message i.e. "wip: user profile ui"
- Check for linter warnings/error, run:
  ```bash
  yarn lint:fix
  ```
- Check for code format inconsistencies, run:
  ```bash
  yarn format
  ```
- Make sure there are no build errors, so CI won't fail to check run:
  ```bash
  yarn build
  ```
- After finishing work on a story, create PR to 'dev' branch.
- kindly use PR title format: [jira_story_id] - story name, i.e. [DF-123] Modal component
- Lead developer will do code review(if needed) or if lead dev is absent another dev can approve it.
- If there are issues or overlooked build errors, or failed tests story will be set for rework/blocked

- TBA: The above commands are not automated yet, so individual discretion for linting and formatting is needed for now. auto linting, and formatting, is yet to setup in the app CI.
- Follow Commit message pattern [conventional commits](https://www.conventionalcommits.org) <br/>
  <e>i.e. "fix: button alignment", "chore: lint fixes", "feat: login form"<p>

- Successful 'dev' branch are auto deployed to [vercel hosted site](https://design-force-portal.vercel.app/)
  <br/>
  <br/>

# Recommended VsCode Extensions (optional)

- ESLint
- GitLens
- Prettier
- Tailwind CSS IntelliSense
