fetch(`https://624094e02aeb48a9af754d5f.mockapi.io/ticket`)
  .then((resolve) => {
    console.log(resolve);
    return resolve.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const markup = `<li>${user.character}</li>
         <li>${user.name}</li>

    `;
      document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
    });
  });
