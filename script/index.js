fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories));

//   "category_id": "1001",
// "category": "Music"

function displayCategories(categories) {
  const buttonContainer = document.getElementById("buttons");

  for (let item of categories) {
    console.log(item);

    // create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    // add button to category container
    buttonContainer.appendChild(button);
  }
}

// authors
// :
// [{…}]
// category_id
// :
// "1001"
// description
// :
// "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey."
// others
// :
// {views: '100K', posted_date: '16278'}
// thumbnail
// :
// "https://i.ibb.co/L1b6xSq/shape.jpg"
// title
// :
// "Shape of You"
// video_id
// :
// "aaaa"

//fetching vedio api

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => showVideos(data.videos));
}

const showVideos = (vids) => {
  console.log(vids);
  const vedioContainer = document.getElementById("vedio-container");

  const newCard = document.createElement("div");

  vids.forEach((vid) => {
    // console.log(vid);
    const newCard = document.createElement("div");
    newCard.innerHTML = `
    <div class="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src= ${vid.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${vid.title}</h2>
    <p>${vid.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>

  `;
    vedioContainer.appendChild(newCard);
  });

  //vedioContainer.appendChild(newCard);
};

loadVideos();
