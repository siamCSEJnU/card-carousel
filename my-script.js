window.onload = function () {
  const carousel = document.querySelector(".carousel");
  const leftBtn = document.querySelector("#left-btn");
  const rightBtn = document.querySelector("#right-btn");

  let firstCardWidth;

  fetch("./book-description.json")
    .then((res) => res.json())
    .then((books) => {
      books.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = ` 
          <img src="${book.photo}" draggable="false" alt="${book.title}">
          <h3>${book.title}</h3>
          <p>${book.description.slice(0, 25)}...</p>
        `;
        carousel.appendChild(card);
      });
      firstCardWidth = document.querySelector(".card").offsetWidth;
    });

  leftBtn.addEventListener("click", () => {
    if (carousel.scrollLeft === 0) {
      carousel.scrollLeft = carousel.scrollWidth - carousel.offsetWidth;
    } else {
      carousel.scrollLeft -= firstCardWidth + 25;
    }
  });

  rightBtn.addEventListener("click", () => {
    if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
      carousel.scrollLeft = 0;
    } else {
      carousel.scrollLeft += firstCardWidth + 25;
    }
  });
};
