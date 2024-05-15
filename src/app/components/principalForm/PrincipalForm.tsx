"use client";

import React from "react";
import PersonForm from "../PersonForm/PersonForm";
import { useState } from "react";

export default function PrincipalForm() {
  const [formRows, setFormRows] = useState([{}]);
  const [DataSetFamilyMembers, setDataSetFamilyMebers] = useState([]);
  const [DataSetRelations, setDataSetRelations] = useState([{}]);

  const addRelation = (member1: any, member2: any) => {
    if (member2 !== null) {
      setDataSetRelations([...DataSetRelations, { p1: member1, p2: member2 }]);
    }
  };
  const handleSubmit = () => {};
  const handleNewMember = (e) => {
    e.preventDefault();
    setFormRows([...formRows, { id: formRows.length - 1 + 1 }]);
  };
  return (
    <div className="mb-32 grid text-left bg-white lg:mb-0 lg:w-full lg:max-w-5xl ">
      <form>
        <div className="row">
          <button className="col bg-green" onClick={handleNewMember}>
            {" "}
            add family member
          </button>
        </div>
        <PersonForm
          key={"host"}
          index={"host"}
          dataSet={DataSetFamilyMembers}
          onChangeNameText={(value: any) =>
            setDataSetFamilyMebers([...DataSetFamilyMembers, value])
          }
          onSelectChange={addRelation}
        />
        <PersonForm
          key={"m1"}
          index={"m1"}
          dataSet={DataSetFamilyMembers}
          onChangeNameText={(value: any) =>
            setDataSetFamilyMebers([...DataSetFamilyMembers, value])
          }
          onSelectChange={addRelation}
        />
        <PersonForm
          key={"m2"}
          index={"m2"}
          dataSet={DataSetFamilyMembers}
          onChangeNameText={(value: any) =>
            setDataSetFamilyMebers([...DataSetFamilyMembers, value])
          }
          onSelectChange={addRelation}
        />
        {formRows.map((row, index) => {
          return index !== 0 ? (
            <PersonForm
              key={"row" + index}
              index={index}
              dataSet={DataSetFamilyMembers}
              onChangeNameText={(value: any) =>
                setDataSetFamilyMebers([...DataSetFamilyMembers, value])
              }
              onSelectChange={addRelation}
            />
          ) : (
            <></>
          );
        })}
      </form>
    </div>
  );
}
