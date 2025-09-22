import React, {useState} from 'react';

const HandlingEvents = () => {
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [nameInput, setNameInput] = useState('');

    function handleMouseOver() {
        setIsMouseOver((prevState) => !prevState);
    }

    function handleSubmit(e) {
        e.preventDefault();
        alert(nameInput);
    }

    return (
        <>
            <h3>Synthetic Event System</h3>
            
            <button onClick={() => alert('Hello World')}>Click Me!</button>
            <h1 style={{color: isMouseOver ? 'green' : 'black'}} onMouseOver={handleMouseOver}>HELLO WORLD</h1>

            <hr />

            <h3>Event Bubbling</h3>
            <div style={{backgroundColor: 'green', padding:'10px'}} onClick={() => alert("Outer Div")}>
                Hello
                <div style={{backgroundColor: 'red'}} onClick={() => alert("Inner Div")}>World</div>
            </div>

            <h3>Event Bubbling with stopped propogation</h3>
            <div style={{backgroundColor: 'green', padding:'10px'}} onClick={() => alert("Outer Div")}>
                Hello
                <div style={{backgroundColor: 'red'}} onClick={(e) => {alert("Inner Div"); e.stopPropagation();}}>World</div>
            </div>

            <hr />

            <h3>Prevent Default</h3>
            <form onSubmit={handleSubmit}>
                <label for="name">Name: </label>
                <input name="name" id={'name'} type='text' onChange={(e) => setNameInput(e.target.value)} />&nbsp;
                <input type='submit' />
            </form>
        </>
    )
}

export default HandlingEvents;