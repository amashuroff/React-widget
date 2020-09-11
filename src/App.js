import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is React?',
        content: 'React is a Front-End Library'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library among engineers'
    },
    {
        title: 'how do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: "Color Red",
        value: 'red'
    },
    {
        label: "Color Green",
        value: 'green'
    },
    {
        label: "Color Blue",
        value: 'blue'
    }
]

export default () => {
    return (
    <div>
        <Dropdown options={options}/>
    </div>);
}