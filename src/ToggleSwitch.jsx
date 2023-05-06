import React, { useState } from "react";

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="switch"></span>
      </label>
      <p>Switch is {isOn ? "on" : "off"}</p>
    </div>
  );
}

export default ToggleSwitch;
