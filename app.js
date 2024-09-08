function pesquisar() {



    let section = document.getElementById("resultados-pesquisa")
    console.log(section)

let campoPesquisa = document.getElementById("campo-pesquisa").value

if (campoPesquisa ==""){
    section.innerHTML="Campo pesquisa em Branco"
    return
} 


campoPesquisa= campoPesquisa.toLowerCase()

    let resultados = "";
    let time="" ;
    let epilogo="";
    let titulos="";
    let tags="";

    for (let dado of dados) {
        
        time = dado.time.toLowerCase()
        epilogo = dado.epilogo.toLowerCase()
        titulos = dado.titulos.toLowerCase() 
        tags = dado.tags.toLowerCase()

    if(time.includes(campoPesquisa) || epilogo.includes(campoPesquisa) || titulos.includes(campoPesquisa) || tags.includes(campoPesquisa))
        { 
        
        

        resultados +=
            `
<div class="item-resultado">
<h2>
    ${dado.time}
</h2>
<p class="descricao-meta">${dado.epilogo}</p>
<p class="descricao-meta">Titulos:${dado.titulos}</p>
<a href=${dado.link} target="_bank">Mais informações</a>
</div>
`
        

    }
}
if(!resultados)
    {
        resultados ="Dados nao localizados, Time de eSport nao cadastrada na base de dados..."
    }
    section.innerHTML = resultados
}
