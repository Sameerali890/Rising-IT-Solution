// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Countrydata from "../CountryData.json";

function Country() {
  const [countryid, setCountryid] = useState("");
  const [state, setState] = useState([]);
  const [stateid, setStateid] = useState("");

  const handlecounty = (e) => {
    const getcountryId = e.target.value;
    const getStatedata = Countrydata.find(
      (country) => country.country_id === getcountryId
    ).states;
    setState(getStatedata);
    setCountryid(getcountryId);
    //console.log(getcountryId);
  };

  const handlestate = (e) => {
    const stateid = e.target.value;
    //console.log(stateid);
    setStateid(stateid);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Get Country id" + countryid + " And " + stateid);
  };

  return (
          <div className="">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="">
                <label className="font-semibold text-sm"> Country</label>
                <div className="text-black">
                  <select
                    name="country"
                    className="form-control  w-[100%] h-[50px] rounded-md"
                    onChange={(e) => handlecounty(e)}
                  >
                    <option className="" value="">--Select Country--</option>
                    {Countrydata.map((getcountry, index) => (
                      <option name="Country" value={getcountry.country_id} key={index}>
                        {getcountry.country_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="">
                <label className="form-label text-sm font-semibold"> State</label>
                <div className="text-black">
                  <select
                    name="states"
                    className="form-control w-[100%] h-[50px] rounded-md"
                    onChange={(e) => handlestate(e)}
                  >
                    <option value="">--Select State--</option>
                    {state.map((getstate, index) => (
                      <option name="State" value={getstate.state_id} key={index}>
                        {getstate.state_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
          </div>
     
  );
}

export default Country;
