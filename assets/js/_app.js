function index()  {
    let html = `  
    <article>
        <img src="assets/img/albert_camus1.webp" class="img-article">
        <p class="text-quote">"There is no need for you to end this war. There is no need for you to end this war</p>
  </article>`

  let article = ''

  for(i=0; i<6; i++) {
    article = article + html
  }

  document.getElementById('article').innerHTML = article
}
