import React from 'react'
import './Homepage.css'
import { useState, useEffect } from 'react'


export default function Homepage() {

    const [ timelinesURL ] = useState('https://survivethefive-server.herokuapp.com/timelines/')
    const [ timelines, setTimelines ] = useState('')
    const [ gradeOptions ] = useState(['Kinder', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th'])
    const [ subjectOptions ] = useState(['Science', 'Social Studies', 'ELA', 'Math'])

    useEffect(() => {
        fetch(timelinesURL)
            .then(response => response.json())
            .then(timelinesApi => setTimelines(timelinesApi))
    }, [])

    const renderGradeOptions = () => {
        return gradeOptions.map(grade => {
            return <option value={grade} key={grade}>{grade}</option>})
    }
    const renderSubjectOptions = () => {
        return subjectOptions.map(subject => {
            return <option value={subject} key={subject}>{subject}</option>})
    }

return (
    <div className='homepage'>
        <h2 className="homepageTitle">Select From the Following</h2>
        <div className="homepageButtonBox">
            <select>
                <option value="grade">Grade</option>
                { renderGradeOptions() }
            </select>
            <select>
                <option value="grade">Subject</option>
                { renderSubjectOptions() }
            </select>
        </div>
        <div className="homepageSearchButtonBox">
            <button className="searchButton">Search</button>
        </div>
    </div>
)
}
