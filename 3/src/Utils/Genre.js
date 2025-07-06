import {genres}from "../data.js";
export function getGenreTitlesByIds(ids) {
  return ids
    .map(id => {
      const match = genres.find(g => g.id === id);
      return match ? match.title : null;
    })
    .filter(Boolean); 
}