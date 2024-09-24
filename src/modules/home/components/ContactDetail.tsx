import {
  useGlobalContext,
  useGlobalStateContext,
} from "../contexts/GlobalContext";

const ContactDetailState = () => {
  console.log("==== Render ContactDetailState ====");
  const { contactDetail } = useGlobalStateContext();
  return (
    <div>
      <div>Name : </div>
      <div>
        {contactDetail.firstName} {contactDetail.lastName}
      </div>
    </div>
  );
};

const ContactDetailInput = () => {
  console.log("==== Render ContactDetailInput ====");
  const [{ contactDetail }, dispatch] = useGlobalContext();
  return (
    <div className="space-y-4">
      <input
        type="text"
        className="p-3 border border-gray-200 rounded w-full"
        placeholder="First Name"
        value={contactDetail.firstName}
        onChange={(e) =>
          dispatch({
            type: "setFirstName",
            payload: {
              key: "contactDetail",
              value: e.target.value,
            },
          })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={contactDetail.lastName}
        className="p-3 border border-gray-200 rounded w-full"
        onChange={(e) =>
          dispatch({
            type: "setLastName",
            payload: {
              key: "contactDetail",
              value: e.target.value,
            },
          })
        }
      />
    </div>
  );
};

export default function ContactDetail() {
  return (
    <div className="bg-white p-3 rounded  space-y-4">
      <div>Contact Detail</div>
      <ContactDetailState />
      <ContactDetailInput />
    </div>
  );
}
