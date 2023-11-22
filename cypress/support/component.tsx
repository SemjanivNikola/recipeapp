// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "../../src/index.css";
import "../../src/routes/App.css";

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from "cypress/react18";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";

Cypress.Commands.add("mount", (component, options = {}) => {
  const { routerProps, reduxStore = store, ...mountOptions } = options;

  const wrapped = (
    <Provider store={reduxStore}>
      <BrowserRouter {...routerProps}>{component}</BrowserRouter>
    </Provider>
  );

  return mount(wrapped, mountOptions);
});

// TODO: Create get method that finds and return element on UI by data-cy 

// Example use:
// cy.mount(<MyComponent />)