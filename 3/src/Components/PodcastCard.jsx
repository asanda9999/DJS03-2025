// src/components/PodcastCard.jsx
import React from "react";
import { genres } from "../data"; 

function getGenreTitles(genreIds) {
  if (!Array.isArray(genreIds)) return [];
  return genreIds.map((id) => {
    const genre = genres.find((g) => g.id === id);
    return genre ? genre.title : "Unknown";
  });
}


export default function PodcastCard({ title, image, genreIds, onClick, date }) {
  const genreTitles = getGenreTitles(genreIds);

  return (
    <div className="podcast-card" onClick={onClick}>
      <img
        src={image}
        alt={title}
        className="podcast-card-image"
      />
      <h3>{title}</h3>
      <div className="tags podcast-card-tags">
        {genreTitles.map((genre, i) => (
          <span key={i} className="tag">
            {genre}
          </span>
        ))}
      </div>
      {date && (
        <p className="podcast-card-date">
          {new Date(date).toLocaleDateString()}
        </p>
      )}
    </div>
  );
}
