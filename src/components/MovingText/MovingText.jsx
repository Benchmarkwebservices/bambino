import React from "react";

const movingText = [
  {
    white: "🔥 Welcome to Bambino's Kebabs! 🔥 ",
    yellow: "....",
  },
  {
    white: "| Try our new Spicy Chicken Kebab 🌶️ ",
    yellow: "....",
  },
  {
    white: "| Free delivery on orders over $30 🚚 ",
    yellow: "....",
  },
  {
    white: "| Order now and get 10% off your first order! 🎉 ",
    yellow: "....",
  },
  {
    white: "| Open daily from 10 AM to 11 PM ⏰ ",
    yellow: "....",
  },
  {
    white: "| Taste the best kebabs in town! 🌯 ",
    yellow: "....",
  },
];

export default function MovingText() {
  return (
    <div className="ak-moving-section-wrap ak-normal text-uppercase">
      <div className="ak-moving-section-in">
        {movingText?.map((text, i) => (
          <div className="ak-moving-section" key={i}>
            <h2>
              {text.white} <span>{text.yellow}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
