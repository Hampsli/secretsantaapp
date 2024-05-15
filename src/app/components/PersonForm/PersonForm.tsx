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
    <div className="row" key={index}>
      <input
        type="text"
        name="name"
        className="col"
        onBlur={handleChange}
      ></input>
      <select className="col" onChange={(e) => setHasRelation(e.target.value)}>
        <option value={"0"}>does not have a direct family member</option>
        <option value={"1"}>is a direct relative of</option>
      </select>
      {hasRelation === "1" ? (
        <select className="col" onChange={handleSelectChange} defaultValue={"notOption"}>
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
