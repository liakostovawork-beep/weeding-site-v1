import weddingImg from "../assets/wedding-photo.jpg";
import { useState } from "react";

export const MainImage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const calculateDaysPassed = () => {
    const startDate = new Date("2020-08-08");
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    startDate.setHours(0, 0, 0, 0);

    const difference = today.getTime() - startDate.getTime();
    return Math.round(difference / (1000 * 60 * 60 * 24));
  };

  const daysTogether = calculateDaysPassed();

  return (
    <section className="hero-section" id="start">
      <div
        className={`flip-card ${isFlipped ? "is-flipped" : ""}`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src={weddingImg}
              alt="Лия и Иван"
              className="photo-placeholder"
            />
          </div>
          <div className="flip-card-back">
            <div className="back-content">
              <h3>Смеем се заедно вече {daysTogether} дни.</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
