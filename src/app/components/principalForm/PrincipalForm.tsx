"use client";

import React from "react";
import { useState } from "react";
import PersonForm from "../PersonForm/PersonForm";

export default function PrincipalForm() {
  const [formRows, setFormRows] = useState([{}]);
  const [DataSetFamilyMembers, setDataSetFamilyMebers] = useState([]);
  const [DataSetRelations, setDataSetRelations] = useState([{}]);

  const addRelation = (member1: any, member2: any) => {
    if (member2 !== null) {
      setDataSetRelations([...DataSetRelations, { p1: member1, p2: member2 }]);
    }
  };
  const handleNewMember = (e) => {
    e.preventDefault();
    setFormRows([...formRows, { id: formRows.length - 1 + 1 }]);
  };
  const handleSubmit = () => {
    const response = await 
  };

  return (
    <form key="form" onSubmit={handleSubmit}>
    <div key={"content"} className="mb-32 pt-5 pb-5 grid grid-cols-3 gap-4 text-left bg-white mt-20">
        <div className="col-start-3">
            <button className=" bg-blue-500 text-white font-bold py-4 px-4 rounded" onClick={handleNewMember}>
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
        <div className="col-start-3">
        <button className="bg-green-500 text-white font-bold py-4 px-4 rounded" type="submit">
            {" "}
            Create secret santa list
          </button>
        </div>
    </div>
    </form>
  );
}
