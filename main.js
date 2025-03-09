document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector("form");
  const searchInput = document.querySelector("input[type='text']");

  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm) {
      console.log(`Searching for: ${searchTerm}`);
      // Here, you would typically filter recipes or fetch data
    }
  });
});
