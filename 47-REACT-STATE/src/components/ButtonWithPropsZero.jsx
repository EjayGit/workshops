function ButtonWithProps({num, setNum}){
    function handleClick(){
        setNum(0);
    }
    return <button onClick={handleClick}>Zero me! {num}</button>
}

export default ButtonWithProps;