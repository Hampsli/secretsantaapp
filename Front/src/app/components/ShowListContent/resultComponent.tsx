"use client";

import { useState } from "react";


export default function ResultComponent({firstPerson,secondPerson}:{firstPerson,secondPerson}) {
 console.log(firstPerson,secondPerson)
        return (
            <div className="pl-5 pr-5">
                <h2 >{firstPerson}</h2>
                <p >Gitf To</p>
                <h2 >{secondPerson}</h2>
            </div>
        )


}
