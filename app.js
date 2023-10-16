let inpt = document.getElementById('inp')
let getnews = document.getElementById("newses")
let searchnews = () => {
    fetch(`https://newsapi.org/v2/everything?q=${inpt.value}&from=2023-09-16&sortBy=publishedAt&apiKey=330c21926ee641a784c841b3312654ed`)
.then(data => data.json())
// .then(data =>console.log(data))
.then(data => {
    if(inpt.value == ""){
        alert('can not read Empty input')
    }
    else{
        
    for(let i=0; i<data.articles.length;i++){
        // console.log(data.articles[i])
                      getnews.innerHTML += `
              <div class="card container mb-4 para">
          <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data.articles[i].title}</h5>
            <p class="card-text">${data.articles[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">${data.articles[i].author}</li>
            <li class="list-group-item">${data.articles[i].publishedAt}</li>
          </ul>
          <div class="card-body">
            <a href="${data.articles[i].url}" class="card-link">More About</a>
            
          </div>
        </div>`
        inpt.value = ""    
    }
}
    
})
.catch((err) => console.log(err))

}