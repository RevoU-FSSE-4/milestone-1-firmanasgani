const API_URL = "https://quotes.crowintheglass.com";


function getQuotes() {
  let html = ''
  
  fetch(API_URL + `/api/v1/characters/quotes`, {
    method: "get",
  })
    .then((response) => response.json())
    .then((data) => {
      data.map((row) => {
        html = html + `
        <article>
          <img src="${API_URL}/public/${row.picture}" class="img-article" alt="${row.charaName}">
          <p class="text-quote">"${row.quote}"</p>
          <p class="text-name">${row.charaName}</p>
        </article>`
      })

      document.getElementById('article').innerHTML = html
    });
}

function getOccupation() {
  let html = ''
  fetch(API_URL + `/api/v1/characters/occupation`, {
    method: 'get'
  }).then((res) => res.json()
  ).then((data) => {
    data.map((row) => {
      html = html + `<li onclick="getPeople('${row.occupation}')">${row.occupation}</li>`
    })

    document.getElementById('list').innerHTML = html
  })
}

function getPeople(param) {
  let html = ''
  fetch(API_URL + '/api/v1/characters/occupation/'+param, {
    method: 'get',
  }).then((res) => res.json()).then((data) => {
    data.map((row) => {
      html = html + `
        <div class="people">
          <img src="${API_URL}/public/${row.pathPict}" alt="${row.altPict}" class="img-article">
          <p class="text-quote">${row.charaName}</p>
        </div>
      `
    })

    document.getElementById('data-row').innerHTML = html
  })
}

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function addSubs()  {
  var email = document.getElementById('email')
  if(email.value === '') {
    return alert('Email is blank')
  }

  if(!validateEmail(email.value)) {
    return alert('That is not email')
  }

  document.getElementById('text').innerText = 'Subscribed!'
  alert('Hi ' + email.value + ', please check your email for verification.')

  setTimeout(function() {
    document.getElementById('text').innerText = 'Subscribe'
    email.value = ''
  }, 5000)
}