import React from "react";
import Card from "./Card";

function KitapListesi({kitaplar,favoriler,handleFavori}){
    if (kitaplar.length === 0){
        return <p>Hic kitap bulunmadi.</p>;
    }
    return (
        <div className="container">
            {kitaplar.map((k)=>(
                <Card
                key={k.id}
                {...k}
                favorideMi={favoriler.includes(k.id)}
                onFavori={() => handleFavori(k.id)}
                />
            ))}
        </div>
    );
} 

export default KitapListesi;