// import "../../../cypress/support/routerComponent";

import LoginForm from "./LoginForm";

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom') as any,
//   useNavigate: () => mockedUsedNavigate,
// }));

describe("Test LoginForm component", () => {
  it("should render LoginForm component", () => {
    cy.mount(<LoginForm />);
  });

  it("should have 2 inputs for email and password", () => {
  })
});
