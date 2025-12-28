import "./Card.css";
import saveIcon from "../../images/unsaved.svg";
import savedIcon from "../../images/saved.svg";

export default function Card({
  id,
  title,
  description,
  image,
  distance,
  onShowOnMap,
  onToggleFavorite,
  isFavorite,
  user,
}) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />

      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>

        <p className="card__distance">
          Distância: {
            typeof distance === "number"
              ? distance < 1
                ? `${Math.round(distance * 1000)} m`
                : `${distance.toFixed(2)} km`
              : "Calculando..."
          }
        </p>


        {user && (
          <button className="card__save-btn" onClick={() => onToggleFavorite(id)}>
            <img src={isFavorite ? savedIcon : saveIcon} alt={isFavorite ? "Salvo" : "Salvar"} className="card__save-icon" />
          </button>
        )}

        <p className="card__touched" onClick={onShowOnMap}>
          Mostrar no Mapa
        </p>
      </div>
    </div >
  );
}