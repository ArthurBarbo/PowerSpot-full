import Map from "../Map/Map";
import Card from "../Card/Card";
import Articles from "../Articles/Articles";
import "./Main.css";
import { useState, useEffect, useRef } from "react";
import { getFavoriteCards, saveCard } from "../Api/cards.js";

export default function Main({ reloadTrigger, user }) {
  const [cards, setCards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState("all");
  const mapRef = useRef(null);


  useEffect(() => {
    if (user?.token) {
      getFavoriteCards(user.token).then((favIds) => {
        setFavorites(favIds);
      });
    } else {
      setFavorites([]);
    }
  }, [user]);

  const handleShowOnMap = (id) => {
    const mapElement = document.querySelector(".map__container");
    if (mapElement) mapElement.scrollIntoView({ behavior: "smooth" });

    window.dispatchEvent(new CustomEvent("showOnMap", { detail: id }));
  };

  const handleToggleFavorite = async (cardId) => {
    if (!user?.token) return;

    try {
      const updatedFavorites = await saveCard(cardId, user.token);
      setFavorites(updatedFavorites);
    } catch (err) {
      console.error("Erro ao favoritar card:", err);
    }
  };

  const favoriteCards = cards.filter((c) => favorites.includes(c.id));
  const cardsToRender = viewMode === "fav" ? favoriteCards : cards;

  return (
    <main className="main__container">
      <h2 className="main__text">
        {user ? (
          <>
            <span className="main__user-name">{user.name}</span>, aqui estão os pontos de recarga mais próximos!
          </>
        ) : (
          "Encontre os melhores pontos de recarga próximos a você!"
        )}
      </h2>

      <div className="main__filters">
        <button
          className={`main__filter-btn ${viewMode === "all" ? "active" : ""}`}
          onClick={() => setViewMode("all")}
        >
          Todos
        </button>

        {user && favorites.length > 0 && (
          <button
            className={`main__filter-btn ${viewMode === "fav" ? "active" : ""} main__filter-btn--appeared`}
            onClick={() => setViewMode("fav")}
          >
            Meus carregadores
          </button>
        )}
      </div>

      <div className={`main__cards ${viewMode === "fav" ? "main__cards--fav" : ""}`}>
        {cardsToRender.length > 0 ? (
          cardsToRender.map((c) => (
            <Card
              key={c.id}
              {...c}
              user={user}
              onShowOnMap={() => handleShowOnMap(c.id)}
              onToggleFavorite={() => handleToggleFavorite(c.id)}
              isFavorite={favorites.includes(c.id)}
            />
          ))
        ) : viewMode === "fav" ? (
          <p>Nenhum carregador favoritado ainda.</p>
        ) : null}
      </div>
      <Map setCardsForUI={setCards} reloadTrigger={reloadTrigger} />
      <Articles />
    </main>
  );
}