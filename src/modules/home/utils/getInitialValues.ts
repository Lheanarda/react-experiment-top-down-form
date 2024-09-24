interface Component {
  id: string;
  type: string;
  componentName: string;
  children?: Component[];
  isCollapsed?: boolean;
  value?: string | boolean;
  validations?: Array<{
    type: string;
    errorMessage: string;
    value?: any;
  }>;
}

interface InitialValue {
  value: any;
  error: any;
  isValid: boolean;
  isDirty: boolean;
  isPristine: boolean;
  rules: () => void;
}

type InitialValues = Record<string, InitialValue>;

const generateRules = (
  validations:
    | Array<{ type: string; errorMessage: string; value?: any }>
    | undefined
) => {
  // Replace with the actual rule generation logic from @utils/validation
  return () => {};
};

const processComponent = (component: Component): InitialValues => {
  const initialValues: InitialValues = {};

  const componentId = component.id;

  // only read FIELD component type
  if (component.type === "FIELD" && !component.isCollapsed) {
    let value: any = component.value || "";

    if (component.componentName === "CheckboxField") {
      value = false;
    } else if (component.componentName === "DateField") {
      value = { month: "", day: "", year: "" };
    }

    initialValues[componentId] = {
      value,
      error: null,
      isValid: false,
      isDirty: false,
      isPristine: true,
      rules: generateRules(component.validations),
    };
  } else if (component.children) {
    component.children.forEach((child) => {
      Object.assign(initialValues, processComponent(child));
    });
  }

  return initialValues;
};

export const getInitialValues = (
  components: Component[]
): Record<string, InitialValues> => {
  const initialValues: Record<string, InitialValues> = {};

  components.forEach((component) => {
    if (component.type === "FORM") {
      initialValues[component.id] = processComponent(
        component.children ? component : { ...component, children: [] }
      );
    }
  });

  return initialValues;
};

/**
 * there is two options
 * 1. append the field states in the vd payload data
 *    - will be hard to see overall data
 * 2. use existing data where we pull out the field form
 *    - issue : how to sync the data ?
 */
