fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories));

function displayCategories(categories) {
  const buttonContainer = document.getElementById("buttons");

  for (let item of categories) {
    // console.log(item);

    // create a button
    const button = document.createElement("button");
    button.classList = "btn";
    button.innerText = item.category;

    console.log(item.category_id);

    // add button to category container
    buttonContainer.appendChild(button);
  }
}

// function to load all ther vedios

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => showVideos(data.videos));
}

// function to show all the videos

const showVideos = (vids) => {
  console.log(vids);
  const vedioContainer = document.getElementById("vedio-container");

  const newCard = document.createElement("div");

  vids.forEach((vid) => {
    // console.log(vid);
    const newCard = document.createElement("div");
    newCard.innerHTML = `
     <div class="card bg-base-100 w-96 shadow-sm flex flex-col gap-5 h-auto">
        <figure>
          <img class = "w-full h-[200px] object-cover" src=${vid.thumbnail} alt="Shoes" />
        </figure>
        <!-- card body -->
        <div class="avatar h-[180px] flex gap-10">
          <div
            id="profile-img"
            class="ring-primary h-12 w-12 rounded-full ml-5 mt-5 mr-0"
          >
            <img
              class=""
              src= ${vid.authors[0].profile_picture}
            />
          </div>
          <div class="profile-info w-full">
            <h2 class="font-bold text-xl pb-2">
              ${vid.title}
            </h2>
            <p class="flex text-sm text-gray-400">
              ${vid.authors[0].profile_name}
              <img
                class="h-5 w-5 ml-2"
                src="https://img.icons8.com/?size=96&id=U8PNLNMhOOtq&format=png"
                alt=""
              />
            </p>
            <p class="text-gray-400 text-sm">${vid.others.views} views</p>
          </div>
        </div>
      </div>

  `;
    vedioContainer.appendChild(newCard);
  });

  //vedioContainer.appendChild(newCard);
};

//loadVideos();
