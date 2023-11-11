import { ForwardRefExoticComponent } from "react";

export default function withFormController<T>(WrappedComponent: ForwardRefExoticComponent<T>) {
  const Component = (props: T) => {
    console.log("p >> ", props);
    WrappedComponent.displayName = `withLogger(${WrappedComponent.displayName || WrappedComponent.name})`;
    return <WrappedComponent {...props} />;
  };

  return Component;
}
