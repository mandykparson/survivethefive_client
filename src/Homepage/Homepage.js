import React from 'react'
import './Homepage.css'
import { useState, useEffect } from 'react'

export default function Homepage() {

    const [ timelinesURL ] = useState('http://127.0.0.1:8000/timelines/')
    const [ timelines, setTimelines ] = useState('')
    const [ gradeOptions, setGradeOptions ] = useState('')

    useEffect(() => {
        fetch(timelinesURL)
            .then(response => response.json())
            .then(timelinesApi => console.log(timelinesApi))
    }, [])

    // const renderGradeOptions = () => {
    //     return 
    // }

return (
    <div className='homepage'>
        <div className="homepageButtonBox">
            <select>
                <option value="grade">Grade</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
            </select>
            <select>
                <option value="grade">Subject</option>
                <option value="vegetable">Vegetable</option>
                <option value="meat">Meat</option>
            </select>
            <button className="searchButton">Search</button>
        </div>
    </div>
)
}
