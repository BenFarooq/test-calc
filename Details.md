# Details
I'm not a big fan of create-react-app and usually configure my projects manually. The bare minimum is:
* React, TS, webpack
* Jest as a test runner and for unit-testing
* Cypress for component testing (analog of Enzyme or React Testing Library). They have added official components tests support just yet. 
* Cypress for e2e testing
* Storybook for components documenting (they are not really documented, just app rendered)

Description said to use Redux and prefer Typescript, so I've used a Redux Toolkit. Also I've used styled-components to style elements.

How it works:
* All calculation logic (reducers) is written in reducers in Calculator/calculatorSlice. 
* Also that file exports actionCreators - entities that should be dispatched to Redux-store.
* Calculator component (.tsx):
  * receives actual field values from Redux-store via selectors (described in Calculator/calculatorSlice). Namely: values and isNothingToClean/isNothingToSum flags. 
  * renders input fields. In callbacks they dispatches actions provided by appropriate actionCreators.
  * focuses first input by "ref" on "Clear" click (see inpit1Ref.current.focus())
* Application component:
  * imports instance of Redux-store and puts it in \<Provider>. It allows to connect \<Calculator> component in any place down the tree.
  * styles main HTML-elements via styled-components

Storybook:
* Basically Storybook used for documenting components (such as Button in our case). But I've just render the whole \<Application> just because I'm able to.

Tests:
* unit-tests:
  * may be run via `npm run test:unit`
  * covers all reducer logic is tested in "calculatorSlice.unit.tests.tsx"
* component tests:
  * may be run via `npm run test:components:browser"`
  * \<Application> has structural test (checks that all inputs/buttons are present). Structural test is an analog of snapshot-testing. Writing them takes time, but gives much more beneficial and stable tests.
* e2e-tests (cypress/integration/Application.e2e.tests.tsx):
  * may be run via `npm run test:e2e:browser"`
  * covers all cases from description. e2e tests are height-level tests that describe whole application behavior. Also they may be used as live-documentation.
