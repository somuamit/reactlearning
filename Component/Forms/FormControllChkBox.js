import { useState } from "react";

export default function FormControllChkBox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <form>
      <label htmlFor="color">
        <input type="checkbox" name="color" checked={isChecked} onChange={handleChange}/>
        Blue
      </label>

      {isChecked && <div>Blue is selected!</div>}
    </form>
  );
}

