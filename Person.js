import React from 'react'

export default function Person({person,key}) {
    return (
        <div>
            <h2>
                I m {person.name}, my score is {person.subject1},{person.subject2},{person.subject3}
            </h2>
        </div>
    )
}
