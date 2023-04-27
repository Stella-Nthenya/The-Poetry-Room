// dom_elements
const filter_poems_form = document.getElementById("filter_poems_form");
const select_author = document.getElementById("authors");
const filter_btn = document.getElementById("poem_filter_btn");
const poems_div = document.getElementById("poems_list");
const nav_links = document.getElementsByClassName("nav-links");
// this is from https://github.com/public-apis/public-apis#books > https://github.com/thundercomb/poetrydb#
const poems_api = "https://poetrydb.org/";

// reading http request
async function get_resource(path = "", params = {}) {
  const url = new URL(poems_api + path);
  const response = await fetch(url);
  return response.json();
}