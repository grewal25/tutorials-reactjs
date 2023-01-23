import {useState} from 'react';


function Login(){
    const [login, setLogin] = useState(true);
    const elem = <p>It is a login page</p>;
    const elem2 = <p>It is a sign up page</p>;

    function handleClick(){
        setLogin(!login)
    }

    return(<>
    <button onClick = {handleClick}>click me</button>
    {login ? elem : elem2}
    </>)
}

export default Login;

// true and false --> false
/// true and true --> true