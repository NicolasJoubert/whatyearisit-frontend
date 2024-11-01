fetch("http://localhost:3000/year")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    document.querySelector("#year").innerHTML =
      `    <div id="year">${data.year}</div>`;
  });
