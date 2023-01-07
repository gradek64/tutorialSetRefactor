const navLinks = document.querySelectorAll(".nav .links li");

Array.from(navLinks).forEach((e, i) => {
  console.log(e.innerText);
});

//search box
//search input event;
let filters = {};
const searchFilter = document.getElementById("search");
searchFilter.addEventListener("input", function (evt) {
  filters.searchText = evt.target.value.toLowerCase();
  renderList(filters);
});

const renderList = (filters) => {
  Array.from(navLinks).filter((e, i) => {
    //incudes() is also a String method
    const searchTextFilter = e.innerText
      .toLowerCase()
      .trim()
      .includes(filters.searchText);
    searchTextFilter
      ? (navLinks[i].style.display = "block")
      : (navLinks[i].style.display = "none");
  });
};
