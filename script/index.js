fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res) => res.json())
  .then((data) => displayCategories(data.categories));

function displayCategories(categories) {
  const buttonContainer = document.getElementById("buttons");

  // Creating the category buttons dynamically And calling the loadCatagoryVideos function according to the category when button is clicked
  for (let item of categories) {
    const button = document.createElement("button");
    const div = document.createElement("div");
    div.innerHTML = `
    <button onclick = loadCatagoryVideos(${item.category_id})  class="btn">${item.category}</button>
    `;
    buttonContainer.appendChild(div);
  }
}

// function to load all ther vedios when 'All' button is clicked

function loadVideos(search = "") {
  fetch(
    `https://openapi.programming-hero.com/api/phero-tube/videos?title=${search}`
  )
    .then((res) => res.json())
    .then((data) => showVideos(data.videos));
}

// function to load the vedios
const loadCatagoryVideos = (id) => {
  // console.log(id);
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      showVideos(data.category);
    });
};

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
    //console.log(vid);

    const newCard = document.createElement("div");
    newCard.innerHTML = `
     <div class="card bg-base-100 w-96 shadow-sm flex flex-col gap-5 h-auto">
        <figure>
          <img class = "w-full h-[200px] object-cover" src=${
            vid.thumbnail
          } alt="Shoes" />
        </figure>
        <!-- card body -->
        <div class="avatar h-[120px] flex gap-10">
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
            ${
              vid.authors[0].verified == true
                ? ` <img
                class="h-5 w-5 ml-2"
                src="https://img.icons8.com/?size=96&id=U8PNLNMhOOtq&format=png"
                alt=""
              />`
                : ` <img
                class="h-5 w-5 ml-2"
                src="https://img.icons8.com/?size=100&id=owIPfgUDQ92m&format=png&color=000000"
                alt=""
              />`
            }
              
            </p>
            <p class="text-gray-400 text-sm">${vid.others.views} views</p>
          </div>
        </div>
        
       <div  class = 'flex justify-center items-center pb-5'> <button onclick =loadVideoDetails('${
         vid.video_id
       }') class="btn btn-wide  ">Details </button></div>
       
        
      </div>

  `;
    vedioContainer.appendChild(newCard);
  });
};

//function to load details of each vedio individually when details button is clicked

const loadVideoDetails = (id) => {
  // console.log("aaa");
  console.log(id);

  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => showVedioDetails(data.video.description));
};

const showVedioDetails = (details) => {
  console.log(details);

  document.getElementById("vedio_details").showModal();

  const detailsContainer = document.getElementById("details_container");
  detailsContainer.innerHTML = `
  <p class = 'text-xl font-bold'>${details}</p>
  `;
};

// fetching the input given by the user in the search bar
document.getElementById("input_search").addEventListener("keyup", (e) => {
  const searchInput = e.target.value;
  loadVideos(searchInput);
  console.log(searchInput);
});
