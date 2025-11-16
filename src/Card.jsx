import './index.css';

function Card({id,baslik,yazar,kategori,favorideMi,onFavori}) {
    return (
        <div className="card">
        <div>
            <h3>{baslik}</h3>
            <p>{yazar}-{kategori}</p>
        </div>
        <div>
            <button className="FavoriButton" onClick={() => onFavori(id)}>
                {favorideMi ? "★" : "☆"}
            </button>
        </div>
        </div>
    )
}

export default Card;