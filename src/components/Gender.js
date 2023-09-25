import React, { useState } from 'react';

function GenderRadioButtons() {
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
      <label style={{margin:"5px" , paddingLeft:"20px"}} for="gender">Gender</label>
      <label>
        <input
          type="radio"
          value="male"
          checked={selectedGender === 'male'}
          onChange={handleGenderChange}
        />
        Male
      </label>

      <label>
        <input
          type="radio"
          value="female"
          checked={selectedGender === 'female'}
          onChange={handleGenderChange}
        />
        Female
      </label>

      {/* <p>Selected gender: {selectedGender}</p> */}
    </div>
  );
}

export default GenderRadioButtons;
