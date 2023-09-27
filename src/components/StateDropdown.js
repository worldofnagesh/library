import React, { useState } from 'react';

const StateDropdown = () => {
  const indianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
  ];

  const [state, setstate] = useState('');

  const handleStateChange = (e) => {
    setstate(e.target.value);
  };

  return (
    <div class="form-group">
      <label style={{margin:"5px" ,paddingLeft:"90px"}} for="state">State</label>
      <select style={{width:"160px"}}  value={state} onChange={handleStateChange}>
        <option value="">Select a state</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
      {/* <p>Selected State: {state}</p> */}
    </div>
  );
};

export default StateDropdown;
{/* <label style={{margin:"5px" ,paddingLeft:"60px"}} for="password">Password  </label> */}
