"use client";

import ResultComponent from "./resultComponent";


export default function ShowList() {
  const santas = [];
  const receivers = [];
  const finalList = [];
  if (typeof window !== 'undefined') {
    const DataSet = localStorage.getItem("combinations") || '{}';
    const createList = () => {
      const data = JSON.parse(DataSet);
      if(Array.isArray(data)){
        data.forEach((element, index) => {
          if(index === 0){
            santas.push(element.p1)
            receivers.push(element.p2)
          }else{
            if(!santas.includes(element.p1)){
              santas.push(element.p1);
            }
            if(!receivers.includes(element.p2)){
              receivers.push(element.p2)
            }
          }
          
          });
      }
        for ( var i = 0; i < santas.length; i++ ) {
          finalList.push({santa:santas[i], receiver:receivers[i]  });
        }
    } 
    createList();
 }

  return (
    <div key={"content"} className="mb-32 pt-5 pb-5 grid grid-cols-3 gap-4 text-left text-black bg-white mt-20">
      {finalList && finalList.map((row,index)=>{
        return (
          <ResultComponent
            key={index}
            firstPerson={row.santa}
            secondPerson={row.receiver} />
        )
      })

      }
    </div>
  );
}
