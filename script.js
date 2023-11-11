const search = document.querySelector("#searchbox");
const btn = document.querySelector("#searchbtn");
const div = document.querySelector("#images");

async function searchMovie(query = "dragon ball") {
  const response = await axios.get(
    `https://api.tvmaze.com/search/shows?q=${query}`
  );
  //   console.log(response.data[0].show.image.original);
  return response.data;
}
// searchMovie();

search.addEventListener("input", () => {
  div.innerHTML = "";
});

async function movieLoad() {
  const showName = search.value;
  if (!showName) {
    alert("no data found");
  }

  const data = await searchMovie(showName);
  const lengthData = await data.length;
  console.log(data[0].show.image.original);
  for (let i = 0; i < lengthData; i++) {
    const img = document.createElement("img");
    const imgUrl = data[i].show.image.original;
    img.src = imgUrl;
    img.width = 300;
    img.height = 300;
    div.appendChild(img);
    console.log(data[i].show.image.original);
  }
}

btn.addEventListener("click", movieLoad);
