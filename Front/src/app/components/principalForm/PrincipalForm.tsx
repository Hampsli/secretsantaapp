"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import PersonForm from "../PersonForm/PersonForm";


export default function PrincipalForm() {
  const [formRows, setFormRows] = useState([{}]);
  const [DataSetFamilyMembers, setDataSetFamilyMebers] = useState([]);
  const [DataSetRelations, setDataSetRelations] = useState([]);
  const router = useRouter();


  const addRelation = (member1: any, member2: any) => {
    if (member2 !== null) {
      setDataSetRelations([...DataSetRelations, { p1: member1, p2: member2 }]);
    }
  };
  const handleNewMember = (e) => {
    e.preventDefault();
    setFormRows([...formRows, { id: formRows.length - 1 + 1 }]);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    const cleanDataSet = DataSetRelations.filter(x=> x !== null);
    const response = await fetch('http://localhost:8080/api/secret-santa-part-three',{
      cache: 'no-store',
      method: 'POST',
      headers:{
        'Access-Control-Allow-Credentials': "true",        
        'Access-Control-Allow-Origin':'http://localhost:3000',
        'Content-Type': 'application/json'
            },
      body:JSON.stringify({
        relations:cleanDataSet,
        members: DataSetFamilyMembers
      })
    });
    if (response.ok) {
      const responseData = await response.json();
      localStorage.setItem("combinations", JSON.stringify(responseData));
      router.push(`/Showlist`)
    } 
  };

  return (
    <form key="form" onSubmit={handleSubmit}>
    <div key={"content"} className="mb-32 pt-5 pb-5 grid grid-cols-3 gap-4 text-left bg-white mt-20">
        <div className="col-start-3">
            <button name={'addMember'} className=" bg-blue-500 text-white font-bold py-4 px-4 rounded" onClick={handleNewMember}>
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
            <div key={'not'}></div>
          );
        })}
        <div key={'LastButton'} className="col-start-3">
        <button name={'submit'} className="bg-green-500 text-white font-bold py-4 px-4 rounded" type="submit">
            {" "}
            Create secret santa list
          </button>
        </div>
    </div>
    </form>
  );
}
