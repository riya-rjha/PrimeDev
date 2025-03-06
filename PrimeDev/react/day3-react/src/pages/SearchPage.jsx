import React from "react";
import Card from "../components/Card";

const cardStyle = {
    backgroundColor: "red"
}

const SearchPage = () => {
  const cards = [
    {
      title: "Invitation",
      text: "You are invited!",
    },
    {
      title: "Notice",
      text: "Please have a look at it",
    },
  ];

  return (
    <div>
      <header style={cardStyle}>Logo</header>
      <main>
        <h2>Search here...</h2>
        <input type="text" />
        <h1>Without map print card elements: </h1>
        <div>
          <h1>{cards[0].title}</h1>
          <h4>{cards[0].text}</h4>
        </div>
        <button>Search</button>
        <div>
          <h1>Using MAP function in arrays: </h1>
          {cards.map((card) => (
            <>
              <h1>{card.title}</h1>
              <p>{card.text}</p>
            </>
          ))}
        </div>
        <h1>Now I will use Card Component: </h1>
        {cards.map((card) => (
          <Card key={card.title} title={card.title} text={card.text} />
        ))}
      </main>
      <footer>&copy; Copyright</footer>
    </div>
  );
};

export default SearchPage;
