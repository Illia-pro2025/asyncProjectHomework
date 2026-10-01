import fetching from "./module/fetching";
import { notice } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
const BASE_URL =
  " https://pixabay.com/api/?image_type=photo&orientation=horizontal";
const API_KEY = "57644876-a11ec509590919cab7f9be31e";
const loadButton = document.querySelector(".load-button");
const listContainer = document.querySelector(".gallery");
const searchButton = document.querySelector(".search-button");
const input = document.querySelector(".input");
const element = document.body;
let page = 1;
let query;
element.scrollIntoView({
  behavior: "smooth",
  block: "end",
});
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  query = input.value.trim();
  listContainer.innerHTML = "";
  if (query === "") {
    notice({ text: "Please enter a search term!" });
    return;
  }
  page = 1;
  fetching(BASE_URL, API_KEY, page, listContainer, query);
});

loadButton.addEventListener("click", () => {
  page++;
  notice({
    text: "the succes pagination",
  });
  fetching(BASE_URL, API_KEY, page, listContainer, query);
});
fetching(BASE_URL, API_KEY, page, listContainer, query);
