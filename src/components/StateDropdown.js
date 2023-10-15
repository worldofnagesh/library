import React, { useState } from "react";

const StateDropdown = ({sendDataToParent}) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [stateOptions, setStateOptions] = useState([]);

  const countries = ["US", "India"];

  const usStates = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
  
  const indiaStates = [
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

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setSelectedCountry(selectedCountry);


    if (selectedCountry === "US") {
      setStateOptions(usStates);
    } else if (selectedCountry === "India") {
      setStateOptions(indiaStates);
    } else {
      setStateOptions([]);
    }
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    // sessionStorage.setItem("statename", selectedState);
    sendDataToParent(e.target.value);
  };

  return (
    <div>
      <div className="form-group"style={{paddingLeft:'90px'}}>
        <label style={{paddingRight:'10px'}} htmlFor="country">Location</label>
        <select style={{width:'100px',height:'20px',fontSize:'12px'}} id="country" value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      
        <label htmlFor="state"></label>
        <select style={{width:'80px',height:'20px',fontSize:'12px'}}id="state" value={selectedState} onChange={handleStateChange}>
          <option value="">Select State</option>
          {stateOptions.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {/* <p>Selected State: {selectedState}</p> */}
      </div>
    </div>
  );
};

export default StateDropdown;

