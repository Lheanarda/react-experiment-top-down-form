import {
  useGlobalContext,
  useGlobalStateContext,
} from "../contexts/GlobalContext";
import { useGlobalStateContext2 } from "../contexts/GlobalContext2";

const TravelerDetailState = () => {
  console.log("==== Render TravelerDetailState ====");
  const { travelerDetail } = useGlobalStateContext();
  return (
    <div>
      <div>Name : </div>
      <div>
        {travelerDetail.firstName} {travelerDetail.lastName}
      </div>
    </div>
  );
};

const TravelerDetailInput = () => {
  console.log("==== Render TravelerDetailInput ====");
  const [{ travelerDetail }, dispatch] = useGlobalContext();
  return (
    <div className="space-y-4">
      <input
        type="text"
        className="p-3 border border-gray-200 rounded w-full"
        placeholder="First Name"
        value={travelerDetail.firstName}
        onChange={(e) =>
          dispatch({
            type: "setFirstName",
            payload: {
              key: "travelerDetail",
              value: e.target.value,
            },
          })
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        value={travelerDetail.lastName}
        className="p-3 border border-gray-200 rounded w-full"
        onChange={(e) =>
          dispatch({
            type: "setLastName",
            payload: {
              key: "travelerDetail",
              value: e.target.value,
            },
          })
        }
      />
    </div>
  );
};

const PlaceholderComp = () => {
  console.log("==== Render Placeholder ====");
  const { contactDetail } = useGlobalStateContext2();
  return <div>PLACEHOLDER COMP {contactDetail.firstName}</div>;
};
export default function TravelerDetail() {
  return (
    <div className="bg-white p-3 rounded  space-y-4">
      <div>Traveler Detail</div>
      <TravelerDetailState />
      <TravelerDetailInput />
      <PlaceholderComp />
    </div>
  );
}
