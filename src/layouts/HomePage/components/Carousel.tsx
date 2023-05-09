import { ReturnCard } from "./ReturnCard";
import { useEffect, useState } from "react";
import CardModel from "../../../models/CardModel";
import { fetchCards } from "../services/apiCalls";

export const Carousel = () => {
  const [cards, setCards] = useState<CardModel[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    fetchCards()
      .then((response) => {
        const loadedCards: CardModel[] = [];
        const responseData = response._embedded.cards;
        for (const key in responseData) {
          loadedCards.push({
            id: responseData[key].id,
            name: responseData[key].name,
            power: responseData[key].power,
            toughness: responseData[key].toughness,
            description: responseData[key].description,
            artist: responseData[key].artist,
            img: responseData[key].img,
          });
        }
        setCards(loadedCards);
        setIsLoading(false);
      })
      .catch((error: any) => {
        setIsLoading(false);
        setHttpError(error.message);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="container m-5">
        <p>Loading...</p>
      </div>
    );
  }

  if (httpError) {
    return (
      <div className="container m-5">
        <p>{httpError}</p>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ height: 550 }}>
      <div className="homepage-carousel-title">
        <h3>Browse in our gallery.</h3>
      </div>
      <div id="carouselExampleControls" className="carousel carousel-dark slide mt-5 d-none d-lg-block" data-bs-interval="false">
        {/* Desktop */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row d-flex justify-content-center align-items-center">
              {cards.slice(0, 3).map((card) => (
                <ReturnCard card={card} key={card.id} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {cards.slice(3, 6).map((card) => (
                <ReturnCard card={card} key={card.id} />
              ))}
            </div>
          </div>
          <div className="carousel-item">
            <div className="row d-flex justify-content-center align-items-center">
              {cards.slice(6, 9).map((card) => (
                <ReturnCard card={card} key={card.id} />
              ))}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Mobile */}
      <div className="d-lg-none mt-3">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="text-center">{<ReturnCard card={cards[0]} key={cards[0].id} />}</div>
        </div>
      </div>
      <div className="homepage-carousel-title mt-3">
        <a className="btn btn-outline-secondary btn-lg" href="#">
          View More
        </a>
      </div>
    </div>
  );
};
