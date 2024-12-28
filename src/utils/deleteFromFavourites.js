import { toast } from "react-toastify";

export default function deleteFromFavourites(id) {
  if (!localStorage.getItem("favs")) {
    return toast.error("Немає улюблених фільмів");
  }
  const currentFavs = JSON.parse(localStorage.getItem("favs"));
  const updatedFavs = currentFavs.filter(
    (movie) => movie.mal_id.toString() !== id.toString()
  );
  localStorage.setItem("favs", JSON.stringify(updatedFavs));
  return JSON.parse(localStorage.getItem("favs"));
}
