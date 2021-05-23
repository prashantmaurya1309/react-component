import { PersonOutline } from '@material-ui/icons'
import React from 'react'
import Person from './Person'

export default function NameList() {
    //const names=['Bruce','clark','Diana']
    const persons=[
        {
            id: 1,
            name: "Bruce Wayne",
            subject1: 80,
            subject2: 45,
            subject3:90
        },
        {
            id: 2,
            name: "Clark Kent",
            subject1: 80,
            subject2: 45,
            subject3:90
        },
        {
            id: 3,
            name: "Diana",
            subject1: 80,
            subject2: 45,
            subject3:91
        }
    ]
    const personList= persons.map(person=><Person key={person.id} person={person}/>)
    // component Person is caleed with props person and key

    return(
       <div>{personList}</div>
    )   
    
}
