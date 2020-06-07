// src/App.test.js

import React from "react";
import { render } from "@testing-library/react";
import CharacterCard from "./character-card.component";

const mockCharacter = {
  created: "2017-11-04T18:48:46.250Z",
  episode: [
    "https://rickandmortyapi.com/api/episode/1",
    "https://rickandmortyapi.com/api/episode/2",
  ],
  gender: "Male",
  id: 1,
  image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  location: {
    name: "Earth (Replacement Dimension)",
    url: "https://rickandmortyapi.com/api/location/20",
  },
  name: "Rick Sanchez",
  origin: {
    name: "Earth (C-137)",
    url: "https://rickandmortyapi.com/api/location/1",
  },
  species: "Human",
  status: "Alive",
  type: "",
  url: "https://rickandmortyapi.com/api/character/1",
  __v: 0,
  _id: "5ed0d02836ee7d3308a60c27",
};

test("renders without crashing", () => {
  const { getByTestId } = render(<CharacterCard character={mockCharacter} />);

  expect(getByTestId("card-container")).toBeDefined();
});
