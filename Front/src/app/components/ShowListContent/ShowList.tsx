"use client";

import React from "react";

export default function ShowList() {

  try{
    const DataSet = localStorage.getItem("combinations");
    console.log(DataSet);
  }catch (error){}

    const resultComponent = (firstPerson,secondPerson)=>{
        return (
            <div className="col-span-3 pl-5 pr-5">
                <h2>{firstPerson}</h2>
                <p>Gitf To</p>
                <h2>{secondPerson}</h2>
            </div>
        )
    }


  return (
    <div key={"content"} className="mb-32 pt-5 pb-5 grid grid-cols-3 gap-4 text-left bg-white mt-20">

    </div>
  );
}
