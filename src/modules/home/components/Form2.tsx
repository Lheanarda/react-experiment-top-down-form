import { useContextIdentifier } from "../contexts/DynamicContext";

const identifier = "contactDetail";
const form = "travelerForm";
const field = "title";
const field2 = "nationality";
export default function Form2() {
  console.log("render form 2");
  const [state, dispatch] = useContextIdentifier(identifier);

  const value = state[form][field];
  const value2 = state[form][field2];
  const handleChange = (val: string, fieldId: string) => {
    dispatch({
      type: "updateData",
      payload: {
        formId: form,
        fieldId,
        value: val,
      },
    });
  };
  return (
    <div className="bg-white p-3 rounded  space-y-4">
      <div>Form2</div>
      <input
        type="text"
        placeholder="name"
        value={value}
        className="p-3 border border-gray-200 rounded w-full"
        onChange={(e) => handleChange(e.target.value, field)}
      />
      <input
        type="text"
        placeholder="Nationality"
        value={value2}
        className="p-3 border border-gray-200 rounded w-full"
        onChange={(e) => handleChange(e.target.value, field2)}
      />
    </div>
  );
}
