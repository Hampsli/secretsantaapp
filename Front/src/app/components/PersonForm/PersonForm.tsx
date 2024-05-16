"use client";
import React from "react";

export default function PersonForm({
  dataSet,
  onChangeNameText,
  onSelectChange,
  index
}: {
  dataSet: string[];
  onChangeNameText: any;
  onSelectChange: any;
  index:any
}) {
  const [hasRelation, setHasRelation] = React.useState("0");
  const [principalMember, setPrincipalMember] = React.useState();

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { value } = e.target;
    setPrincipalMember(value);
    onChangeNameText(value);
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;
    onSelectChange(principalMember, value);
  };

  return (
    <div className="col-span-3 pl-5 pr-5" key={"input"+index}>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Name
      </label>
      <input
        type="text"
        name="name"
        className="shadow appearance-none border rounded ml-2 mr-5 py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onBlur={handleChange}
        required
      ></input>
      <select className="shadow  border rounded ml-2 mr-5 py-2 px-5 text-gray-700 leading-tight  focus:shadow-outline" onChange={(e) => setHasRelation(e.target.value)}>
        <option value={"0"}>does not have a direct family member</option>
        <option value={"1"}>is a direct relative of</option>
      </select>
      {hasRelation === "1" ? (
        <select required={hasRelation === '1'} className="shadow  border rounded ml-2 mr-5 py-2 px-5 text-gray-700 leading-tight  focus:shadow-outline" onChange={handleSelectChange} defaultValue={"notOption"}>
          { dataSet.map((element, index) => {
              return element !== principalMember ? (
                <option key={element + index} value={element}>
                  {element}
                </option>
              ) : (
                <option key={"notOption"+index} value={"notOption"}>
                Select Family member
              </option>
              );
            })}
        </select>
      ):(<></>)}
    </div>
  );
}
