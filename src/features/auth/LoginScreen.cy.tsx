// import "../../../cypress/support/routerComponent";
import LoginScreen from "./LoginScreen";

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom') as any,
//   useNavigate: () => mockedUsedNavigate,
// }));

describe("<LoginScreen />", () => {
  it("renders", () => {
    cy.mount(<LoginScreen />);
  });
});
