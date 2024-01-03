let advertisements = [
  {
    title: "Ad 1",
    description: "This is the first advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact1@example.com",
  },
  {
    title: "Ad 2",
    description: "This is the second advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact2@example.com",
  },
  {
    title: "Ad 3",
    description: "This is the third advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact3@example.com",
  },
  {
    title: "Ad 4",
    description: "This is the fourth advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact4@example.com",
  },
  {
    title: "Ad 5",
    description: "This is the fifth advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact5@example.com",
  },
  {
    title: "Ad 6",
    description: "This is the sixth advertisement.",
    image: "https://via.placeholder.com/150",
    contact: "contact6@example.com",
  },
];

// Function to render advertisements
function renderAdvertisements(ads) {
  const advertisementsContainer = document.getElementById("advertisements");
  advertisementsContainer.innerHTML = "";

  ads.forEach((ad) => {
    const card = document.createElement("div");
    card.className = "card mb-4 col-md-4";

    const cardContent = `
        <img class="card-img-top" src="${ad.image}" alt="${ad.title}">
        <div class="card-body">
            <h5 class="card-title">${ad.title}</h5>
            <p class="card-text">${ad.description}</p>
            <p class="card-text" onclick="toggleContact('${
              ad.contact
            }')">Contact: ${isContactHidden ? "***" : ad.contact}</p>
        </div>
        <div class="card-footer text-center">
            <button class="btn btn-info btn-block" onclick="showDetails('${
              ad.contact
            }')">Details</button>
        </div>
    `;

    card.innerHTML = cardContent;
    advertisementsContainer.appendChild(card);
  });
}

// Function to filter advertisements by title
const filterInput = document.getElementById("filterTitle");
filterInput.addEventListener("input", function () {
  const filterText = this.value.toLowerCase();

  const filteredAds = filterText
    ? advertisements.filter((ad) => ad.title.toLowerCase().includes(filterText))
    : advertisements;

  // Update the displayed advertisements with the filtered ones
  renderAdvertisements(filteredAds);
});

// Function to toggle contact information
const toggleContactButton = document.getElementById("toggleContact");
let isContactHidden; // Declare but don't initialize here

function toggleContact(contact) {
  isContactHidden = !isContactHidden;
  renderAdvertisements();
}

// Function to show details when the "Details" button is clicked
function showDetails(contact) {
  alert("Contact: " + contact);
}

// Call the function to render advertisements on page load
window.onload = function () {
  // Initialize isContactHidden here
  isContactHidden = true;
  renderAdvertisements(advertisements);
};
