const hotelButton = document.querySelector('.hotel-search-button');
const hotelPopup = document.querySelector('.hotel-popup');
const hotelForm = document.querySelector('.popup')
const arrivalDate = document.querySelector('.arrival-date');
const departureDate = document.querySelector('.departure-date');
const adultGuests = document.querySelector('.adult-guests');
const childrenGuests = document.querySelector('.children-guests');

let isStorageSupport = true;
let storageAdults = "";
let storageChildren ="";

try {
  storageAdults = localStorage.getItem("adults");
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

hotelButton.addEventListener ("click", function(evt) {
    hotelPopup.classList.add('popup-shown');

    if (storageAdults, storageChildren) {
        adultGuests.value = storageAdults;
        childrenGuests.value =storageChildren;
      }

    arrivalDate.focus();
});

hotelForm.addEventListener("submit", function (evt) {
    if(!arrivalDate.value || !departureDate.value || !adultGuests.value || !childrenGuests.value) {
    evt.preventDefault();
    } else {
        if (isStorageSupport) {
            localStorage.setItem("adults", adultGuests.value);
            localStorage.setItem("children", childrenGuests.value);
        }
      }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (hotelPopup.classList.contains("popup-shown")) {
        evt.preventDefault();
        hotelPopup.classList.remove("popup-shown");
      }
    }
  });