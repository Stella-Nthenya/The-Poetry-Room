// dom_elements
const filter_poems_form = document.getElementById("filter_poems_form");
const select_author = document.getElementById("authors");
const filter_btn = document.getElementById("poem_filter_btn");
const poems_div = document.getElementById("poems_content");
const nav_links = document.getElementsByClassName("nav-links");
// this is from https://github.com/public-apis/public-apis#books > https://github.com/thundercomb/poetrydb#
const poems_api = "https://poetrydb.org/";
let by_poet;

// reading http request
async function get_resource(path = "", params = {}) {
  const url = new URL(poems_api + path);
  const response = await fetch(url);
  return response.json();
}

// Fetch the whole poems list data
get_resource((path = "author")).then(function (poets) {
  if (poets) {
    poets["authors"].forEach((poet) => {
      // Create an option element
      const option = document.createElement("option");

      // Add text value to option
      option.text = poet;

      // Add the populated option element into the select, with each iteration
      select_author.add(option);
    });
  } else {
    console.log("Retrieved poets data is empty");
  }
});

// filter button functionality
filter_poems_form.addEventListener("submit", function (event) {
  // prevents reloading of the page
  event.preventDefault();
  // removes previously loaded content
  poems_div.innerHTML = "";

  let author_path;

  if (select_author.value) {
    // from the api documentation
    author_path = "author/" + select_author.value.replace(" ", "%20");
  }

  if (author_path) {
    get_resource((path = author_path)).then(function (data) {
      data.forEach(function ({ title, author, lines }) {
        // display retrieved poem content
      });
    });
  } else {
    alert("No choice made for author");
  }
});
