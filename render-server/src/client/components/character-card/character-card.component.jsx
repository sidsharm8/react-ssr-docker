import React from "react";
//import "./character-card.styles.scss";
import {
  CardContainer,
  CardProfile,
  CardProfileImage,
  CardProfileName,
  CardProfileNameText,
  CardProfileMeta,
  CardInfo,
  CardInfoRow,
  CardInfoColumn1,
  CardInfoColumn2,
} from "./character-card.styles";

const CharacterCard = ({ character }) => {
  const diffYears = (date) => {
    return Math.abs(
      new Date().getUTCFullYear() - new Date(date).getUTCFullYear()
    );
  };
  return (
    <CardContainer data-testid="card-container">
      <CardProfile>
        <CardProfileImage src="placeholder-image.webp" data-src={character.image} className="lazy" alt="[TODO ALT TEXT]" />
        <CardProfileName>
          <CardProfileNameText>{character.name}</CardProfileNameText>
          <CardProfileMeta>
            <span>id: {character.id} - </span>
            <span>created {diffYears(character.created)} years ago</span>
          </CardProfileMeta>
        </CardProfileName>
      </CardProfile>
      <CardInfo>
        <CardInfoRow>
          <CardInfoColumn1>Status</CardInfoColumn1>
          <CardInfoColumn2>{character.status}</CardInfoColumn2>
        </CardInfoRow>
        <CardInfoRow>
          <CardInfoColumn1>Species</CardInfoColumn1>
          <CardInfoColumn2>{character.species}</CardInfoColumn2>
        </CardInfoRow>
        <CardInfoRow>
          <CardInfoColumn1>Gender</CardInfoColumn1>
          <CardInfoColumn2>{character.gender}</CardInfoColumn2>
        </CardInfoRow>
        <CardInfoRow>
          <CardInfoColumn1>Origin</CardInfoColumn1>
          <CardInfoColumn2>{character.origin.name}</CardInfoColumn2>
        </CardInfoRow>
        <CardInfoRow>
          <CardInfoColumn1>Last Location</CardInfoColumn1>
          <CardInfoColumn2>{character.location.name}</CardInfoColumn2>
        </CardInfoRow>
      </CardInfo>
    </CardContainer>
  );
};

export default CharacterCard;
