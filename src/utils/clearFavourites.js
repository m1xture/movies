export default function clearFavourites(confirmed) {
  if (confirmed) {
    localStorage.setItem("favs", JSON.stringify([]));
  }
}
