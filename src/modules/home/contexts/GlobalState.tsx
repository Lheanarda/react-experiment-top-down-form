interface Media {
  reviewMediaUrl: string;
  reviewMediaId: string;
}

export interface State {
  contactDetail: {
    firstName: string;
    lastName: string;
  };
  travelerDetail: {
    firstName: string;
    lastName: string;
  };
}

type Key = "contactDetail" | "travelerDetail";
export type Action =
  | { type: "setFirstName"; payload: { key: Key; value: string } }
  | { type: "setLastName"; payload: { key: Key; value: string } };
