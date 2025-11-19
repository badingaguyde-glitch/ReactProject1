import React from "react";

function FavoriPaneli({kitaplar,favoriler, favorilerKaldir}) {
    const favoriKitaplar=kitaplar.filter((k)=>favoriler.includes(k.id));

    return(
        <div id="Favoriler" style={{marginBottom:12}}>
            <h2>Favoriler ({favoriKitaplar.length})</h2>
            {favoriKitaplar.length===0 ? (
                <p>Henüz hic favori eklenmedi.</p>
            ):(
                <ul>
                    {favoriKitaplar.map((k)=>(
                        <li key={k.id}>
                            {k.baslik} - {k.yazar}
                            <button onClick={() => favorilerKaldir(k.id)}>X<br/></button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
export default FavoriPaneli;