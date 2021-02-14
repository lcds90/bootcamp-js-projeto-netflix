async function getMovies(divTitle, divDesc, divImg) {
  var dados = new Array();
  theMovieDb.movies.getPopular(
    {},
    (movies) => {
      movies = JSON.parse(movies);

      if (movies.results && movies.results.length > 0) {
       

        movies.results.forEach((obj, i) => {
          let div = document.createElement("div");
          div.classList.add("item");
        //   console.log(obj);
          let release = obj.release_date;
          release = release.replace("-", "/");
          release = release.replace("-", "/");

          let html = `
          <span class="item-titulo">
          <span class="item-down">
          <i class="fas fa-info"></i>
          <i class="fas fa-arrow-down"></i></span>
          <span class="item-desc-after">
          ${obj.title}<br><hr>
          <span class="item-date">
          Data de lançamento: ${release}<br>
          Nota: ${obj.vote_average}<br>
          Quantidade de votos: ${obj.vote_count}
          </span><br>
          </span>
          </span>
          <span class="item-descricao">
          <span class="item-up">
          <i class="fas fa-info"></i>
          <i class="fas fa-arrow-up"></i>
          </span>
          <span class="item-desc">${obj.overview}</span>
          </span>
          <img class="box-filme" src="https://image.tmdb.org/t/p/w500${obj.poster_path}" alt="">
          `;
          div.innerHTML = html;
          document.querySelector(".owl-carousel").append(div);
        });
      }
    },
    (err) => {
      console.log(err);
    }
  );
  console.log(dados);
  return dados;
}

async function main() {
  getMovies().then((v) => {});
}

main();
