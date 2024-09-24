export type MonthDayYear = {
  month: number;
  year: number;
  day: number;
};
export enum STATUS {
  FAILURE = "FAILURE",
  SUCCESS = "SUCCESS",
  SUCCESS_DO_NOT_CONTINUE = "SUCCESS_DO_NOT_CONTINUE",
}
export type ValidationProps = {
  validations?: {
    type: string;
    value?: any;
    errorMessage?: string;
  }[];
};
export type Checker = {
  [key: string]: (fieldValue: any, validationValue?: any) => STATUS;
};

/** UTILS */
export const objectToDate = (obj?: MonthDayYear) => {
  if (!!obj && obj === Object(obj))
    return new Date(obj.year, obj.month - 1, obj.day);
  else return;
};

export const dateToObject = (value: Date) => {
  if (!value) return;
  return {
    month: value.getMonth() + 1,
    day: value.getDate(),
    year: value.getFullYear(),
  };
};

export const isValidDate = (obj?: MonthDayYear) => {
  return obj && obj.year && obj.month && obj.day;
};

/** RULES GENERATOR from district VD */
export const CHECKER: Checker = {
  required: (value) => {
    const valueType = typeof value;
    switch (valueType) {
      case "boolean":
        return value ? STATUS.SUCCESS : STATUS.FAILURE;
      case "string":
        return value.length > 0 ? STATUS.SUCCESS : STATUS.FAILURE;
      case "object":
        if (value instanceof Array)
          return value.length > 0 ? STATUS.SUCCESS : STATUS.FAILURE;
        if (value instanceof Object)
          return Object.keys(value).length > 0
            ? STATUS.SUCCESS
            : STATUS.FAILURE;
        return STATUS.SUCCESS;
      default:
        return STATUS.FAILURE;
    }
  },

  optional: (value) => {
    return STATUS.SUCCESS;
    // DRNUtil can be imported!!
    // return DRNUtil.isObjectNotNullUndefinedEmpty(value)
    //   ? STATUS.SUCCESS
    //   : STATUS.SUCCESS_DO_NOT_CONTINUE;
  },

  minLength: (value, minLength) => {
    const isValid = value && value.length >= minLength;
    return isValid ? STATUS.SUCCESS : STATUS.FAILURE;
  },

  maxLength: (value, maxLength) => {
    const isValid = value && value.length <= maxLength;
    return isValid ? STATUS.SUCCESS : STATUS.FAILURE;
  },

  regex: (value, pattern) => {
    const regex = new RegExp(pattern.pattern, pattern.flags);
    const isValid = value.match(regex);
    return isValid ? STATUS.SUCCESS : STATUS.FAILURE;
  },

  minValue: (value, minValue) => {
    const isValid = value >= minValue;
    return isValid ? STATUS.SUCCESS : STATUS.FAILURE;
  },

  maxValue: (value, maxValue) => {
    const isValid = value <= maxValue;
    return isValid ? STATUS.SUCCESS : STATUS.FAILURE;
  },

  minDate: (value, minValue) => {
    if (!isValidDate(value)) return STATUS.FAILURE;
    const dateValue = objectToDate(value);
    const minDateValue = objectToDate(minValue);
    const isInRange = dateValue! >= minDateValue!;
    return isInRange ? STATUS.SUCCESS : STATUS.FAILURE;
  },

  maxDate: (value, maxValue) => {
    if (!isValidDate(value)) return STATUS.FAILURE;
    const dateValue = objectToDate(value);
    const minDateValue = objectToDate(maxValue);
    const isInRange = dateValue! <= minDateValue!;
    return isInRange ? STATUS.SUCCESS : STATUS.FAILURE;
  },
};
export const validate =
  (
    validations: ValidationProps["validations"] = [],
    checkers: Checker = CHECKER
  ) =>
  (value: any): string | null => {
    for (const validation of validations) {
      let checker = checkers[validation.type];
      if (checker) {
        // if checker does not exist, continue
        const result = checker(value, validation.value);

        if (result === STATUS.SUCCESS_DO_NOT_CONTINUE) {
          return null;
        } else if (result === STATUS.FAILURE) {
          return validation.errorMessage || " "; // return error when one validation fails
        }
      }
    }
    return null; // return success when all validations pass
  };

// validateValue function , from Field Component
// import { Rule, ValidationResult, validate } from "@traveloka/validation";
const validateMock = (rules: any) => (value: any) => {};
export function validateValue(rules: any, value: any) {
  validateMock(rules)(value);
}
