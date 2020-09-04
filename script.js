document.getElementById("tituloI").addEventListener("change", function () {
    if(this.value !=""){
    const conteudo = document.getElementById("tituloI").value
    const myKey = "AIzaSyCb-bOTDsBF-RCkSPrMxmcC_gvD-omiZb8"
    const livros = document.getElementById("livros")
    livros.innerHTML = `    <div class="carregando">
    <h2 class="tituloCarregando">Carregando....</h2>
    <img src="https://media3.giphy.com/media/VseXvvxwowwCc/giphy.gif?cid=ecf05e47sc8npyr0nm25to1zw5xox2b5dy2pftq2keqh36ny&rid=giphy.gif" width="40%" alt="">
    </div>`


    const xhr = new XMLHttpRequest
    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=${conteudo}&key=${myKey}`)
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            const result = JSON.parse(xhr.responseText)
            livros.innerHTML = ``
            for (i = 0; i < result.items.length; i++) {
                var pubDate = result.items[i].volumeInfo.publishedDate
                var titulo = result.items[i].volumeInfo.title
                var autor = result.items[i].volumeInfo.authors
                var editora = result.items[i].volumeInfo.publisher
                var link = result.items[i].volumeInfo.infoLink
                console.log(link)
                if (pubDate === undefined) {
                    pubDate = ''
                }
                if (autor === undefined) {
                    autor = ''
                }
                if (editora === undefined) {
                    editora = ''
                }
                if (link==undefined){
                    link= ' '
                }
                
                livros.innerHTML += `    <div class="livro">
               <h2 class="tituloT">${titulo}</h2>
               <h3 class="autorT">Autor:${autor}</h3>
               <p class="dtPub">Ano de publicação:${pubDate}</p>
               <p class="editora">Editora:${editora}</p>
               <a href="${link}" class="linkLivro">Saiba mais</a>
           </div>`

            }
        }
    }
    xhr.send()
}
})


document.getElementById("autorI").addEventListener("change", function () {
    if(this.value !=""){
    const conteudo = document.getElementById("autorI").value
    const myKey = "AIzaSyCb-bOTDsBF-RCkSPrMxmcC_gvD-omiZb8"
    const livros = document.getElementById("livros")
    livros.innerHTML = `    <div class="carregando">
    <h2 class="tituloCarregando">Carregando....</h2>
    <img src="https://media3.giphy.com/media/VseXvvxwowwCc/giphy.gif?cid=ecf05e47sc8npyr0nm25to1zw5xox2b5dy2pftq2keqh36ny&rid=giphy.gif" width="50%" alt="">
    </div>`

  
    const xhr = new XMLHttpRequest
    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=inauthor:${conteudo}&key=${myKey}`)
    xhr.onreadystatechange = function () {
        if (xhr.status == 200 && xhr.readyState == 4) {
            const result = JSON.parse(xhr.responseText)
            livros.innerHTML = ``
            for (i = 0; i < result.items.length; i++) {
                var pubDate = result.items[i].volumeInfo.publishedDate
                var titulo = result.items[i].volumeInfo.title
                var autor = result.items[i].volumeInfo.authors
                var editora = result.items[i].volumeInfo.publisher
                var link = result.items[i].volumeInfo.infoLink
                console.log(link)
                if (pubDate === undefined) {
                    pubDate = ''
                }
                if (autor === undefined) {
                    autor = ''
                }
                if (editora === undefined) {
                    editora = ''
                }
                if (link==undefined){
                    link= ' '
                }
                
                livros.innerHTML += `    <div class="livro">
               <h2 class="tituloT">${titulo}</h2>
               <h3 class="autorT">Autor:${autor}</h3>
               <p class="dtPub">Ano de publicação:${pubDate}</p>
               <p class="editora">Editora:${editora}</p>
               <a href="${link}" class="linkLivro">Saiba mais</a>
           </div>`

            }
        }
    }
    xhr.send()


    
    }
})