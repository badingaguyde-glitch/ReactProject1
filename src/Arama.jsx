import React from "react";
import './index.css';

function Arama({aramaMetni,setAramaMetni}) {    
    const onChangeHandler=(e)=>{
        setAramaMetni(e.target.value);
    }

    return (
        <input
        id="arama"
        type="text"
        placeholder="Kitap veya yazar ara..."
        value={aramaMetni}
        onChange={onChangeHandler}
        />
    );
}

export default Arama;