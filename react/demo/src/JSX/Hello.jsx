// jsx : javascrit syntax xml /extsatibale
// js vs jsx : 0.1 sec
// jsx : <></> : prenetn
// virutal Dom : real dom copy
// {varibale display}

import React from 'react'

function Hello() {

    // console.log("Hello javascript")
    let name = "Het"
    console.log(name)

    let htmldata = <ul>
        <li>hell</li>
        <li>hell</li>
        <li>hell</li>
        <li>hell</li>
    </ul>

    let person = {
        name :"harshil",
        age : 25,
        course : "front-end"
    }

    console.log(person)

  return (
    <div>
        <h1 className=''>Hello jsx component</h1>
        <h1>Name : {name}</h1>

        {htmldata}

        <h4>{person.course} : {person.name}</h4>

        <h1> sum : {10+77}</h1>

    </div>
  )
}

export default Hello