import React, { useState } from "react";
import "./styles.css";

const booksgenre = {
  Philosophy: [
    {
      name: "Philosophy: Who Needs It",
      about:
        " Who Needs It is a collection of essays by the philosopher Ayn Rand, published posthumously in 1982. It was the last book on which Rand worked during her lifetime."
    },
    {
      name: "The Virtue of Selfishness",
      about:
        "The Virtue of Selfishness: A New Concept of Egoism is a 1964 collection of essays by the philosopher Ayn Rand and the writer Nathaniel Branden. Most of the essays originally appeared in The Objectivist Newsletter. The book covers ethical issues from the perspective of Rand's Objectivist philosophy."
    },
    {
      name: "Ideal",
      about:
        "Ideal is a posthumously published 2015 novel by Ayn Rand. The July 7, 2015 first edition of the novel was published featuring the book version along with the 1936 Ayn Rand play Ideal."
    }
  ],
  Detective: [
    {
      name: "The Moonstone",
      about:
        "The Moonstone by Wilkie Collins is a 19th-century British epistolary novel. It is an early modern example of the detective novel, and established many of the ground rules of the modern genre. The story was serialised in Charles Dickens's magazine All the Year Round. Collins adapted The Moonstone for the stage in 1877"
    },
    {
      name: "Bloody Murder: From the Detective Story to the Crime Novel",
      about:
        "This is the wonderful, witty, and highly controversial work of a lifelong addict of detective fiction."
    },
    {
      name: "Sacred Games",
      about:
        "Sacred Games is a mystery/thriller novel by Vikram Chandra published in 2006. Upon release, it received critical acclaim and subsequently won the Vodafone Crossword Book Award."
    }
  ],
  Romance: [
    {
      name: "Fifty Shades of Grey",
      about:
        "Fifty Shades of Grey is a 2011 erotic romance novel by British author E. L. James. It became the first instalment in the Fifty Shades novel series that follows the deepening relationship between a college graduate, Anastasia Steele, and a young business magnate, Christian Grey."
    },
    {
      name: "Outlander",
      about:
        "Outlander is the first in a series of eight historical multi-genre novels by Diana Gabaldon. Published in 1991, it focuses on the Second World War-era nurse Claire Randall, who travels through time to 18th century Scotland and finds adventure and romance with the dashing Jamie Fraser."
    },
    {
      name: "A Walk to Remember",
      about:
        "A Walk to Remember is a novel by American writer Nicholas Sparks, released in October 1999. The novel, set in 1958–1959 in Beaufort, North Carolina, is a story of two teenagers who fall in love with each other despite the disparity of their personalities. A Walk to Remember is adapted in the film of the same name."
    }
  ]
};
export default function App() {
  const [genreSelected, setGenreSelected] = useState("Philosophy");

  function genreClickHandler(genre) {
    setGenreSelected(genre);
  }
  return (
    <div className="App">
      <h1>Books you should read must</h1>
      <h4>Here are the books I recommend to read.</h4>
      <div>
        {Object.keys(booksgenre).map((genre) => (
          <button onClick={() => genreClickHandler(genre)} className="genres">
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="book-container">
        <ul>
          {booksgenre[genreSelected].map((book) => (
            <li key={book.name} className="book-list">
              <h2> {book.name} </h2>
              <p style={{ fontSize: "smaller" }}> {book.about} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
