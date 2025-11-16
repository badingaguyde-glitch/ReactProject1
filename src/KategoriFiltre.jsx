import React from "react";
function KategoriFiltre({kategori,setKategori}){
    const onChangeHandler=(e)=>{
        setKategori(e.target.value);
    }
    return(
        <select value={kategori} onChange={onChangeHandler}>
            <option value="Tümü">Tümü</option>
            <option value="Klasik">Klasik</option>
            <option value="Roman">Roman</option>
            <option value="Distopya">Distopya</option>  
            <option value="Cocuk">Cocuk</option>
        </select>
    );
}

export default KategoriFiltre;