var botaoH = document.getElementById("historia")
var botaoIP = document.getElementById("iP")
var botaoDO = document.getElementById("dO")

function historiaBirigui(){
    Swal.fire({
        title: 'Birigui',
        text: 'Birigui foi fundada em 7 de dezembro de 1911 por Nicolau da Silva Nunes, um imigrante português. Ela ficou conhecida como a "Cidade Pérola" após a visita de um jornalista em 1934. Birigui ganhou reconhecimento nacional e internacional como a "Capital Brasileira do Calçado Infantil" devido ao crescimento da indústria de calçados. O município foi estabelecido em 8 de dezembro de 1921 e experimentou desenvolvimento agrícola, industrial e melhorias na infraestrutura, como telégrafo, telefone e eletricidade.',
        imageUrl: './img/download.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'História de Birigui'
    })
}

function indicacaoProcedencia(){
    Swal.fire(
        'Indicação de Procedência',
        'Identifica produtos que são característicos de uma determinada região ou localidade, onde a produção, transformação ou extração devem ser realizadas nessa área específica. É necessário que pelo menos uma etapa de produção, transformação ou extração ocorra nessa região.',
        'question'
    )
}

function denominacaoOrigem(){
    Swal.fire(
        'Denominação de Origem',
        'É uma espécie de IP que se aplica a produtos cujas características sejam exclusivas de uma determinada região, incluindo fatores naturais e humanos, tais como clima, solo e tradição local de produção. Em outras palavras, o produto deve ser produzido, processado e elaborado na respectiva região para poder ser classificado como DO.',
        'question'
    )
}

botaoH.addEventListener("click", historiaBirigui)
botaoIP.addEventListener("click", indicacaoProcedencia)
botaoDO.addEventListener("click", denominacaoOrigem)


// 

var barra = document.getElementById("barraPesquisa")
var mapa = document.getElementById("m")
var ig = document.getElementById("ig")
var v = document.getElementById("v")
var pr = document.getElementById("pr")
var s = document.getElementById("s")

function abre() {
    mapa.style.display = "none"
    ig.style.display = "none"
    v.style.display = "none"
    pr.style.display = "none"
    s.style.display = "none"

    var valor = this.value

    switch (valor) {
        case "ig":
            ig.style.display = "block"
            break
        case "v":
            v.style.display = "block"
            break
        case "pr":
            pr.style.display = "block"
            break
        case "mapa":
            mapa.style.display = "block"
            break
        case "s":
            s.style.display = "block"
            
        default:
            break;
    }
}

barra.addEventListener("change", abre)