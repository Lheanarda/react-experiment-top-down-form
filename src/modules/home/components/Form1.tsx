import { useContextIdentifier } from "../contexts/DynamicContext";

const identifier = "travelerDetail";
const form = "travelerForm";
const field = "name.first";
export default function Form1() {
  console.log("render form 1");
  const [state, dispatch] = useContextIdentifier(identifier);

  const value = state[form][field];
  const handleChange = (val: string) => {
    dispatch({
      type: "updateData",
      payload: {
        formId: form,
        fieldId: field,
        value: val,
      },
    });
  };
  return (
    <div className="bg-white p-3 rounded  space-y-4">
      <div>Form1</div>
      <input
        type="text"
        placeholder="name"
        value={value}
        className="p-3 border border-gray-200 rounded w-full"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
