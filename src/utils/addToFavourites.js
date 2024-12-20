export default function addToFavourites(obj) {
  if (!localStorage.getItem("favs")) {
    localStorage.setItem("favs", JSON.stringify([]));
  }
  const currentFavs = JSON.parse(localStorage.getItem("favs"));
  currentFavs.push(obj);
  localStorage.setItem("favs", JSON.stringify(currentFavs));
}
