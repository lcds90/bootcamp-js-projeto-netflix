

async function getMovies() {
  theMovieDb.movies.getPopular(
    {},
    (movies) => {
      movies = JSON.parse(movies);

      if (movies.results && movies.results.length > 0) {
        movies.results.forEach((obj, i) => {
          let div = document.createElement("div");
          div.classList.add("item");
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
          document.querySelector(".carrosel-films .owl-carousel").append(div);
        });
      }
    },
    (err) => {
      console.log(err);
    }
  );
}

async function getSitcoms() {
  theMovieDb.tv.getPopular(
    {},
    (movies) => {
      movies = JSON.parse(movies);

      if (movies.results && movies.results.length > 0) {
        movies.results.forEach((obj, i) => {
          let div = document.createElement("div");
          div.classList.add("item");
          let release = obj.first_air_date;
          release = release.replace("-", "/");
          release = release.replace("-", "/");

          let html = `
          <span class="item-titulo">
          <span class="item-down">
          <i class="fas fa-info"></i>
          <i class="fas fa-arrow-down"></i></span>
          <span class="item-desc-after">
          ${obj.name}<br><hr>
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
          document.querySelector(".carrosel-tv .owl-carousel").append(div);
        });
      }
    },
    (err) => {
      console.log(err);
    }
  );
}


async function main() {
  await getMovies()
  await getSitcoms()

  document.querySelector("#films").addEventListener('click', (e)=>{
    document.querySelector(".carrosel-films").classList.remove('hide')
    document.querySelector(".carrosel-tv").classList.add('hide')
    document.querySelector(".filme-principal").classList.add('hide')
  })
  document.querySelector("#sitcoms").addEventListener('click', (e)=>{
    document.querySelector(".carrosel-tv").classList.remove('hide')
    document.querySelector(".carrosel-films").classList.add('hide')
    document.querySelector(".filme-principal").classList.add('hide')

  })
  document.querySelector(".logo").addEventListener('click', (e)=>{
    document.querySelector(".filme-principal").classList.remove('hide')
    document.querySelector(".carrosel-tv").classList.remove('hide')
    document.querySelector(".carrosel-films").classList.remove('hide')
  })
}

main();
