const resultado = document.getElementById('resultado')
const paragrafo = document.getElementById('Final')
const mobilidade1Auto = document.getElementById("moblilidade-1")
const pecasDeJogo1Auto = document.getElementById("pecasDoJogo-1Auto")
const pecasDeJogo2Auto = document.getElementById("pecasDoJogo-2Auto")
const pecasDeJogo3Auto = document.getElementById("pecasDoJogo-3Auto")
const encaixadoENaoAcionadoAuto = document.getElementById("encaixadoENaoAcionadoAuto")
const encaixadoEAcionadoAuto = document.getElementById("encaixadoEAcionadoAuto")
const pecasDeJogo1Tele = document.getElementById("pecasDoJogo-1TeleOp")
const pecasDeJogo2Tele = document.getElementById("pecasDoJogo-2TeleOp")
const pecasDeJogo3Tele = document.getElementById("pecasDoJogo-3TeleOp")
const encaixadoENaoAcionadoTele = document.getElementById("encaixadoENaoAcionadoTeleOp")
const encaixadoEAcionadoTele = document.getElementById("encaixadoEAcionadoTeleOp")
const parque = document.getElementById('parque')
const linksFeitos = document.getElementById("3LinksFeito")
const links = document.getElementById('linkes')

const faltaNormal = document.getElementById("faltaNormal")
const faltaTecnica = document.getElementById("faltaTecnica")

var linksPontuados = 0
var ptsAutonomo = 0
var ptsTeleoperado = 0
var ptsChargeStation = 0


// function pegarValor(nomeId){
//     return parseInt(document.getElementById(nomeId).value)
// }

function alterarQuantidadeDeOptions(seuId,idDeReferencia, qtd = 9){
        const quantidade = qtd - parseInt(document.getElementById(seuId).value)
        const select = document.getElementById(idDeReferencia)
        select.innerHTML = ""
        for(var i = 0; i <= quantidade; i++){
            select.innerHTML += `<option value="${i}">${i}</option>`
        }
}
function alterarClique(idDeTroca){
    if(document.getElementById(idDeTroca).checked){
        document.getElementById(idDeTroca).checked = false
    }
}
const verificarPontosAutonomo = () => {
    ptsAutonomo += (parseInt(mobilidade1Auto.value) * 3)
    // if(mobilidade1Auto.checked){
    //     ptsAutonomo += 3
    // }
    ptsAutonomo += (parseInt(pecasDeJogo1Auto.value) * 3)
    ptsAutonomo += (parseInt(pecasDeJogo2Auto.value) * 4)
    ptsAutonomo += (parseInt(pecasDeJogo3Auto.value) * 6)
    ptsAutonomo += (parseInt(encaixadoENaoAcionadoAuto.value) * 8)
    ptsAutonomo += (parseInt(encaixadoEAcionadoAuto.value * 12))
    ptsChargeStation += (parseInt(encaixadoENaoAcionadoAuto.value) * 8)
    ptsChargeStation += (parseInt(encaixadoEAcionadoAuto.value * 12))
    // if(encaixadoENaoAcionadoAuto.checked){
    //     ptsAutonomo += 8 
    // }
    // if(encaixadoEAcionadoAuto.checked){
    //     ptsAutonomo += 12
    // }
    console.log(ptsAutonomo) 
    document.getElementById('autonomo').style.display = 'none'
    document.getElementById('teleoperado').style.display = 'block'
}
const verificarPontosTeleoperado = () => {
    ptsTeleoperado += (parseInt(pecasDeJogo1Tele.value) * 2)
    ptsTeleoperado += (parseInt(pecasDeJogo2Tele.value) * 3)
    ptsTeleoperado += (parseInt(pecasDeJogo3Tele.value) * 5)
    ptsTeleoperado += (parseInt(encaixadoENaoAcionadoTele.value) * 6)
    ptsTeleoperado += (parseInt(encaixadoEAcionadoTele.value * 10))
    ptsChargeStation += (parseInt(encaixadoENaoAcionadoTele.value) * 6)
    ptsChargeStation += (parseInt(encaixadoEAcionadoTele.value * 10))
    if(linksFeitos.checked){
        ptsTeleoperado += 5
    }
    
    // if(encaixadoENaoAcionadoTele.checked){
    //     ptsTeleoperado += 6
    // }
    // if(encaixadoEAcionadoTele.checked){
    //     ptsTeleoperado += 10
    // }
    if(parque.checked){
        ptsTeleoperado += 2
    }
    console.log(ptsTeleoperado)
    document.getElementById('teleoperado').style.display = 'none'
    document.getElementById('faltas').style.display = 'block'
}
const juntarTiposDePontos = () => {
    return verificarPontosAutonomo() + verificarPontosTeleoperado()
}
const verificarPontosDeClassificacao = () => {
    var classificacao = 0
    if(resultado.value == "Vitoria"){
        classificacao += 2
    }
    if(resultado.value == "Empate"){
        classificacao += 1
    }
    if(verificarPontosDaChargeStation() >= 26){
        classificacao += 1
    }
    if(parseInt(links.value) >= 5){
        classificacao += 1
    }

    return classificacao
}
const contabilizarPontuacaoNegativa = () => {
    var resultado = 0
    resultado += (parseInt(faltaNormal.value) * 5)
    resultado += (parseInt(faltaTecnica.value) * 12)
    console.log(resultado)
    return resultado
}
const verificarPontosDaChargeStation = () => {
    return ptsChargeStation
}
const etapaFinal = () => {

    paragrafo.innerText = `
    Você fez ${verificarPontosDeClassificacao()} pontos de classificação. E fez uma pontuação geral de ${(ptsAutonomo + ptsTeleoperado) - contabilizarPontuacaoNegativa()}
    `
    
    linksPontuados = 0
    classificacao = 0
    ptsChargeStation = 0

    document.getElementById('botaoReiniciar').style.display = 'inline'

}

document.getElementById('faltasGerais')
.addEventListener('click', () => {
    document.getElementById('parteFinal').style.display = 'block'
    document.getElementById('faltas').style.display = 'none'
})