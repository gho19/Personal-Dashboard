//https://api.nytimes.com/svc/topstories/v2/home.json?api-key=yourkey

//II5mh8CjFDnzdS2TmRxqujG4l7pdG9Gq

let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=II5mh8CjFDnzdS2TmRxqujG4l7pdG9Gq"

let headlines = document.getElementById("headlines");

fetch(url)
.then(response => response.json())
.then(data => {
console.log(data);

data.results.map(article => {

    // Gets title from JSon
    console.log(article.title);

    // Create the <a href=""> in js to access in HTML
    let a = document.createElement("a");
    a.setAttribute("href", article.url)
    a.innerHTML = article.title;

    // Create the <p> in js to access in HTML
    let p = document.createElement("p");
    p.innerHTML = article.abstract;

    let img = document.createElement("img");
    img.setAttribute("src", article.multimedia[0].url)

    // Add element within <div> tag
    headlines.append(img);
    headlines.appendChild(a);
    headlines.appendChild(p);

  })

})
