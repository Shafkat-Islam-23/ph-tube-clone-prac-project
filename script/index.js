fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories));

function displayCategories(categories) {
  const buttonContainer = document.getElementById("buttons");

  for (let item of categories) {
    const button = document.createElement("button");

    button.innerText = item.category;
    button.onclick = () => {
      //document.getElementsByClassName("btn").;
      button.classList.remove("btn");
      // removing style from other buttons

      for (let item of categories) {
        button.classList.remove("btn");
      }

      button.classList.add("btn");
      loadCatagoryVideos(item.category_id);
    };

    buttonContainer.appendChild(button);
  }
}

// function to load all ther vedios

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((res) => res.json())
    .then((data) => showVideos(data.videos));
}

const loadCatagoryVideos = (id) => {
  // console.log(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      // const btnClass = document.getElementsByClassName("btn");
      //btnClass.classList.add("active");
      showVideos(data.category);
    });
};

//loadCatagoryVideos("1001");

const showVideos = (vids) => {
  const vedioContainer = document.getElementById("vedio-container");

  if (vids.length == 0) {
    vedioContainer.innerHTML = `
     <div
        class="col-span-full h-[600px] flex flex-col justify-center items-center text-center gap-5"
      >
        <img src="assets/Icon.png" alt="" />
        <h1 class="text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h1>
      </div>
    `;

    return;
  }

  vedioContainer.innerHTML = "";

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
};

//loadVideos();
