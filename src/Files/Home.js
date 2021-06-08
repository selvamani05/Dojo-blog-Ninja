const Home = () => {

    const handleClick = () => {
        console.log("Hello Nonjas")
    }

    const handleClickAgain = (name) => {
        console.log('hello' + name)
    }

    return (
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={ handleClick }>Click Me</button>
            <button onClick={ () => { handleClickAgain(' mario') } }>Click Me Again!</button>
        </div>
    );
}

export default Home;