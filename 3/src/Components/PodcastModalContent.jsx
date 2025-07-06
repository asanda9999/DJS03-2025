import React from "react";
import { genres } from "../data";

function getGenreTitleById(id) {
  const genre = genres.find((g) => g.id === id);
  return genre ? genre.title : "Unknown";
}

export default function PodcastModalContent({ podcast }) {
  if (!podcast) return null;
  return (
    <div className="modal-flex">
      <img
        src={podcast.image}
        alt={podcast.title}
        className="modal-podcast-image"
      />
      <div className="modal-podcast-details">
        <h2>{podcast.title}</h2>
        <h3>Description</h3>
        <p className="modal-podcast-description">{podcast.description}</p>
        <h3>Genres</h3>
        <div className="modal-podcast-genres">
          {podcast.genres &&
            podcast.genres.map((genreId) => (
              <span key={genreId} className="tag">
                {getGenreTitleById(genreId)}
              </span>
            ))}
        </div>
        <div className="modal-podcast-date">
          Last updated: {new Date(podcast.updated).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </div>
      </div>
    </div>
  );
} 