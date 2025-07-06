
import React from "react";
import PodcastCard from "./PodcastCard";
import Modal from "../Modal.jsx";
import { genres } from "../data";

function getGenreTitleById(id) {
  const genre = genres.find((g) => g.id === id);
  return genre ? genre.title : "Unknown";
}

export default function PodcastContainer({ podcasts }) {
  const [selectedPodcast, setSelectedPodcast] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  if (!podcasts?.length) {
    return <p className="podcast-empty">No podcasts to show.</p>;
  }

  const handleCardClick = (podcast) => {
    setSelectedPodcast(podcast);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPodcast(null);
  };

  return (
    <>
      <section className="podcast-container">
        {podcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            title={podcast.title}
            image={podcast.image}
            genreIds={podcast.genres}
            onClick={() => handleCardClick(podcast)}
            date={podcast.updated}
          />
        ))}
      </section>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedPodcast && (
          <div className="modal-flex">
            <img
              src={selectedPodcast.image}
              alt={selectedPodcast.title}
              className="modal-podcast-image"
            />
            <div className="modal-podcast-details">
              <h2>{selectedPodcast.title}</h2>
              <h3>Description</h3>
              <p className="modal-podcast-description">{selectedPodcast.description}</p>
              <h3>Genres</h3>
              <div className="modal-podcast-genres">
                {selectedPodcast.genres &&
                  selectedPodcast.genres.map((genreId) => (
                    <span key={genreId} className="tag">
                      {getGenreTitleById(genreId)}
                    </span>
                  ))}
              </div>
              <div className="modal-podcast-date">
                Last updated: {new Date(selectedPodcast.updated).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
