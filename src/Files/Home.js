import { useState } from "react";

const Home = () => {

    // let name = "mario";

    const [name, setName] = useState('Mario');

    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName('Luigi');
        setAge('30');
        console.log(age);
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={ handleClick }>Click Me</button>

        </div>
    );
}

export default Home;