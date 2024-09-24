import { selectURI } from "@apollo/client";

export const mockVDPayload = [
  {
    componentName: "SimpleForm",
    id: "travelerForm",
    type: "FORM",
    children: [
      {
        componentName: "SelectField",
        id: "title",
        type: "FIELD",
        children: [],
        marginBottom: "16",
        validations: [
          {
            type: "required",
            errorMessage: "Title is required",
          },
        ],
        title: "Title",
        options: [
          {
            label: "Mr.",
            value: "MR",
          },
          {
            label: "Mrs.",
            value: "MRS",
          },
          {
            label: "Ms.",
            value: "MISS",
          },
        ],
        styleSheet: {
          width: "33%",
        },
      },
      {
        componentName: "BookingNameContainer",
        id: "name",
        type: "VIEW",
        children: [
          {
            componentName: "HorizontalContainer",
            id: "nameHorizontalContainer",
            type: "VIEW",
            children: [
              {
                componentName: "InputField",
                id: "name.first",
                type: "FIELD",
                children: [],
                marginBottom: "16",
                paddingRight: "12",
                validations: [
                  {
                    type: "required",
                    errorMessage:
                      "First / Given Name & Middle Name (if any) is required",
                  },
                  {
                    type: "minLength",
                    errorMessage:
                      "Minimum length of First / Given Name & Middle Name (if any) is 2",
                    value: "2",
                  },
                  {
                    type: "regex",
                    errorMessage: "Sorry, only letters (a-z) are allowed",
                    value: {
                      pattern: "^[a-zA-Z ]*[a-zA-Z]+[a-zA-Z ]*$",
                      flags: [],
                    },
                  },
                ],
                label: "First / Given Name & Middle Name (if any)",
                inputType: "TEXT",
                keyboard: "NAME",
                helperText: "(without title and punctuation)",
                enabled: true,
                styleSheet: {
                  width: "50%",
                },
              },
              {
                componentName: "InputField",
                id: "name.last",
                type: "FIELD",
                children: [],
                marginBottom: "16",
                paddingLeft: "12",
                validations: [
                  {
                    type: "required",
                    errorMessage: "Family Name / Last Name is required",
                  },
                  {
                    type: "minLength",
                    errorMessage:
                      "Minimum length of Family Name / Last Name is 2",
                    value: "2",
                  },
                  {
                    type: "regex",
                    errorMessage: "Sorry, only letters (a-z) are allowed",
                    value: {
                      pattern: "^[a-zA-Z ]*[a-zA-Z]+[a-zA-Z ]*$",
                      flags: [],
                    },
                  },
                ],
                label: "Family Name / Last Name",
                inputType: "TEXT",
                keyboard: "NAME",
                helperText: "(without title and punctuation)",
                enabled: true,
                styleSheet: {
                  width: "50%",
                },
              },
            ],
            marginBottom: "0",
            validations: [],
            separator: false,
            styleSheet: {
              alignItems: "baseline",
              zIndex: "1",
            },
          },
          {
            componentName: "CheckboxField",
            id: "name.noLastName",
            type: "FIELD",
            children: [],
            marginBottom: "16",
            validations: [],
            label: "This person has no family name / last name",
          },
        ],
        marginBottom: "16",
        validations: [],
        styleSheet: {
          zIndex: "1",
        },
      },
      {
        componentName: "HiddenField",
        id: "name.regexName",
        type: "FIELD",
        children: [],
        marginBottom: "16",
        validations: [],
        value: "DEFAULT",
      },
      {
        componentName: "HorizontalContainer",
        id: "descriptionHorizontalContainer",
        type: "VIEW",
        children: [
          {
            componentName: "DateField",
            id: "birthDate",
            type: "FIELD",
            children: [],
            marginBottom: "16",
            paddingRight: "12",
            validations: [
              {
                type: "required",
                errorMessage: "Date of Birth is required",
              },
              {
                type: "minDate",
                errorMessage: "Earliest date for Date of Birth is 20-09-1924",
                value: {
                  month: "9",
                  day: "20",
                  year: "1924",
                },
              },
              {
                type: "maxDate",
                errorMessage: "Latest date for Date of Birth is 20-09-2012",
                value: {
                  month: "9",
                  day: "20",
                  year: "2012",
                },
              },
            ],
            label: "Date of Birth",
            helperText: "Adult Passenger (Age 12 and older)",
            minDate: {
              month: "9",
              day: "20",
              year: "1924",
            },
            maxDate: {
              month: "9",
              day: "20",
              year: "2012",
            },
            styleSheet: {
              width: "50%",
            },
          },
          {
            componentName: "CountryField",
            id: "nationality",
            type: "FIELD",
            children: [],
            marginBottom: "16",
            paddingLeft: "12",
            validations: [
              {
                type: "required",
                errorMessage: "Nationality is required",
              },
            ],
            title: "Nationality",
            styleSheet: {
              width: "50%",
            },
            fieldState: {
              value: "",
              error: null,
              isValid: false,
              isDirty: false,
              isPristine: true,
              rules: () => {},
            },
          },
        ],
        marginBottom: "0",
        validations: [],
        separator: false,
        styleSheet: {
          alignItems: "baseline",
        },
      },
      {
        componentName: "HiddenField",
        id: "travelerID.type",
        type: "FIELD",
        children: [],
        marginBottom: "16",
        validations: [],
        value: "PASSPORT",
      },
      {
        componentName: "InputField",
        id: "travelerID.number",
        type: "FIELD",
        children: [],
        marginBottom: "16",
        validations: [
          {
            type: "required",
            errorMessage: "Passport Number is required",
          },
          {
            type: "minLength",
            errorMessage: "Minimum length of Passport Number is 6",
            value: "6",
          },
          {
            type: "maxLength",
            errorMessage: "Maximum length of Passport Number is 16",
            value: "16",
          },
          {
            type: "regex",
            errorMessage: "Invalid Format",
            value: {
              pattern: "^(?=.*\\d)[a-zA-Z0-9]{6,9}$",
              flags: [],
            },
          },
        ],
        label: "Passport Number",
        inputType: "TEXT",
        keyboard: "DEFAULT",
        helperText:
          "For passengers below 18 years old, you may enter another valid ID number (e.g. birth certificate, student ID) or date of birth (ddmmyyyy)",
        enabled: true,
        styleSheet: {
          width: "66%",
        },
      },
      {
        componentName: "CountryField",
        id: "travelerID.countryOfIssuance",
        type: "FIELD",
        children: [],
        marginBottom: "16",
        validations: [
          {
            type: "required",
            errorMessage: "Country of Issue is required",
          },
        ],
        title: "Country of Issue",
        styleSheet: {
          width: "50%",
        },
      },
      {
        componentName: "DateField",
        id: "travelerID.expirationDate",
        type: "FIELD",
        children: [],
        marginBottom: "16",
        validations: [
          {
            type: "required",
            errorMessage: "Expiry Date is required",
          },
          {
            type: "minDate",
            errorMessage: "Earliest date for Expiry Date is 20-03-2025",
            value: {
              month: "3",
              day: "20",
              year: "2025",
            },
          },
          {
            type: "maxDate",
            errorMessage: "Latest date for Expiry Date is 20-09-2048",
            value: {
              month: "9",
              day: "20",
              year: "2048",
            },
          },
        ],
        label: "Expiry Date",
        minDate: {
          month: "3",
          day: "20",
          year: "2025",
        },
        maxDate: {
          month: "9",
          day: "20",
          year: "2048",
        },
        infoBox: {
          title: "This passport is expiring or have expired",
          text: "Passports must remain valid for a period of at least 6 months beyond the departure date for international travel or stops. You can proceed to book this flight, but please ensure that you:\n<ul>\n<li>Renew your passport before you travel.</li>\n<li>Update your passport details on the e-ticket in Traveloka App after your new passport is issued.</li>\n</ul>",
          icon: "",
          image: "",
          actionButton: {
            label: "Learn More",
            link: "https://trv.lk/valid-passport",
            type: "WEBVIEW",
          },
          conditions: [
            {
              type: "maxDate",
              value: {
                month: "3",
                year: "2025",
                day: "20",
              },
            },
          ],
        },
        styleSheet: {
          width: "50%",
        },
      },
      {
        componentName: "HiddenField",
        id: "travelerID.regex",
        type: "FIELD",
        children: [],
        marginBottom: "16",
        validations: [],
        value: "^(?=.*\\d)[a-zA-Z0-9]{6,9}$",
      },
    ],
    marginTop: "0",
    marginBottom: "0",
    marginLeft: "0",
    marginRight: "0",
    paddingTop: "16",
    paddingBottom: "16",
    paddingLeft: "16",
    paddingRight: "16",
    backgroundColor: "#ffffff",
    validations: [],
  },
  {
    componentName: "SimpleForm",
    id: "FLIGHT.FF",
    type: "FORM",
    children: [
      {
        componentName: "BoxAccordionField",
        id: "boxAccordionFF",
        type: "FIELD",
        children: [
          {
            componentName: "Paragraph",
            id: "ffProTip",
            type: "VIEW",
            children: [],
            marginBottom: "16",
            marginLeft: "0",
            marginRight: "0",
            validations: [],
            htmlText:
              "Name of frequent flyer account holder must be the same as name of passenger",
            style: "BODY_1",
            color: "#b3b3b3",
            linkHandler: "IN_APP_BROWSER",
          },
          {
            componentName: "Title",
            id: "ffTitle",
            type: "VIEW",
            children: [],
            marginBottom: "8",
            marginLeft: "0",
            marginRight: "0",
            validations: [],
            text: "Frequent Flyer",
            style: "TITLE_1",
          },
          {
            componentName: "IconTitle",
            id: "frequentFlyertravelportA.SQ",
            type: "VIEW",
            children: [],
            marginBottom: "16",
            marginLeft: "0",
            marginRight: "0",
            validations: [],
            text: "Singapore Airlines",
            imageUrl:
              "https://ik.imagekit.io/tvlkdev/image/imageResource/2015/12/17/1450350610403-aefa15ce3b8e59de9882926d198eb27f.png?tr=q-75",
            imageHeight: "20",
          },
          {
            componentName: "SelectField",
            id: "ffAccount[0]",
            type: "FIELD",
            children: [],
            marginBottom: "16",
            validations: [],
            title: "Frequent Flyer Program",
            options: [
              {
                label: "KrisFlyer",
                value: "SQKF",
              },
            ],
          },
          {
            componentName: "InputField",
            id: "ffNumber[0]",
            type: "FIELD",
            children: [],
            marginBottom: "16",
            validations: [],
            label: "Frequent Flyer Number",
            inputType: "TEXT",
            keyboard: "DEFAULT",
            enabled: true,
          },
        ],
        marginBottom: "0",
        paddingTop: "16",
        paddingBottom: "16",
        paddingLeft: "16",
        paddingRight: "16",
        validations: [],
        title: "Add Frequent Flyer Account",
        isCollapsed: true,
      },
    ],
    marginTop: "16",
    marginBottom: "0",
    marginLeft: "0",
    marginRight: "0",
    backgroundColor: "#ffffff",
    validations: [],
  },
];
