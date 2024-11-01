fetch(
  "https://whatyearisit-backend-d8mbnpjlt-nicolasjouberts-projects.vercel.app/year"
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    document.querySelector("#year").innerHTML =
      `    <div id="year">${data.year}</div>`;
  });
