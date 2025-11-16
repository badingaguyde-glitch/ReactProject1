import { useEffect, useState } from 'react';
import './App.css';
import Arama from './Arama';
import FavoriPaneli from './FavoriPaneli';
import KitapListesi from './KitapListesi';
import { useMemo } from 'react';
import KategoriFiltre from './KategoriFiltre';


function App() {
  //Lsite des livres
  const kitaplar=[
    { id: 1, baslik: "Simyacı", yazar: "Paulo Coelho", kategori: "Roman" },
  { id: 2, baslik: "1984", yazar: "George Orwell", kategori: "Distopya" },
  { id: 3, baslik: "Sefiller", yazar: "Victor Hugo", kategori: "Klasik" },
  { id: 4, baslik: "Hayvan Çiftliği", yazar: "George Orwell", kategori: "Roman" },
  { id: 5, baslik: "Küçük Prens", yazar: "Antoine de Saint-Exupéry", kategori: "Cocuk" },
  { id: 6, baslik: "Suç ve Ceza", yazar: "Fyodor Dostoyevski", kategori: "Klasik" },
  { id: 7, baslik: "Yüzyıllık Yalnızlık", yazar: "Gabriel Garcia Marquez", kategori: "Roman" },
  { id: 8, baslik: "Fahrenheit 451", yazar: "Ray Bradbury", kategori: "Distopya" },
  { id: 9, baslik: "Dönüşüm", yazar: "Franz Kafka", kategori: "Klasik" },
  { id: 10, baslik: "Bülbülü Öldürmek", yazar: "Harper Lee", kategori: "Roman" }
];
// Dıff2rents 2tqts
  const [aramaMetni,setAramaMetni]=useState(()=>{
    return localStorage.getItem("aramaMetni")||"";
  });
  const [kategori,setKategori]=useState(()=>{
    return localStorage.getItem("kategori")||"Tümü";
  });
  const [favoriler,setFavoriler]=useState(()=>{
    const kayit=localStorage.getItem("favoriler");
    return kayit ? JSON.parse(kayit):[];
  });

  //Enregistrement dans le local storage
  useEffect(()=>{
    localStorage.setItem("aramaMetni",aramaMetni);
  },[aramaMetni]);
  useEffect(()=>{
    localStorage.setItem("kategori",kategori);
  },[kategori]);
  useEffect(()=>{
    localStorage.setItem("favoriler",JSON.stringify(favoriler));
  },[favoriler]);

  const filtrelemis=useMemo(()=>{
    return kitaplar.filter((k)=>{
      const baslikMatch=k.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
      const kategoriMatch=kategori==="Tümü" || k.kategori===kategori;
      const yazarMatch=k.yazar.toLowerCase().includes(aramaMetni.toLowerCase());
      return (baslikMatch || yazarMatch) && kategoriMatch;
    })
  },[aramaMetni,kategori,kitaplar]);

  const handleFavori=(id)=>{
    setFavoriler((prevFavoriler)=>
      prevFavoriler.includes(id) ? prevFavoriler.filter((f)=>f !== id) : [...prevFavoriler, id]
    );
  };
  const handleFavoriKaldir=(id)=>{
    setFavoriler((prevFavoriler)=>
      prevFavoriler.filter((f)=>f !== id)
    );
  }

  return (
    <>
      <h1>Mini Kitaplik</h1>
      <div>
        <Arama aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <KategoriFiltre kategori={kategori} setKategori={setKategori} />
      </div>
      <div>
        <div>
        <FavoriPaneli kitaplar={kitaplar} favoriler={favoriler} favorilerKaldir={handleFavoriKaldir} />
      </div>
      <KitapListesi kitaplar={filtrelemis} favoriler={favoriler} handleFavori={handleFavori} />
      </div>
    </>
  )
}

export default App
