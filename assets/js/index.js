const resultado = document.getElementById('resultado')
const paragrafo = document.getElementById('Final')

const mobilidade1Auto = document.getElementById("moblilidade-1")
const pecasDeJogo1Auto = document.getElementById("pecasDoJogo-1Auto")
const pecasDeJogo2Auto = document.getElementById("pecasDoJogo-2Auto")
const pecasDeJogo3Auto = document.getElementById("pecasDoJogo-3Auto")
const encaixadoENaoAcionadoAuto = document.getElementById("encaixadoENaoAcionadoAuto")
const encaixadoEAcionadoAuto = document.getElementById("encaixadoEAcionadoAuto")
var classificacao = 0
var ptsChargeStation = 0
var linksPontuados = 0
const pecasDeJogo1Tele = document.getElementById("pecasDoJogo-1TeleOp")
const pecasDeJogo2Tele = document.getElementById("pecasDoJogo-2TeleOp")
const pecasDeJogo3Tele = document.getElementById("pecasDoJogo-3TeleOp")
const encaixadoENaoAcionadoTele = document.getElementById("encaixadoENaoAcionadoAuto")
const encaixadoEAcionadoTele = document.getElementById("encaixadoEAcionadoAuto")
const parque = document.getElementById('parque')
const linksFeitos = document.getElementById("3LinksFeito")
const links = document.getElementById('linkes')

function pegarValor(nomeId){
    return parseInt(document.getElementById(nomeId).value)
}

const verificarPontosAutonomo = () => {
    var ptsAutonomo = 0
    if(mobilidade1Auto.checked){
        ptsAutonomo += 3
    }
    ptsAutonomo += (pecasDeJogo1Auto.value * 3)
    ptsAutonomo += (pecasDeJogo2Auto.value * 4)
    ptsAutonomo += (pecasDeJogo3Auto.value * 6)
    if(encaixadoENaoAcionadoAuto.checked){
        ptsAutonomo += 8 
        ptsChargeStation += 8
    }
    if(encaixadoEAcionadoAuto.checked){
        ptsAutonomo += 12
        ptsChargeStation += 12
    }
    return ptsAutonomo
}

const verificarPontosTeleoperado = () => {
    var ptsTeleoperado = 0
    ptsTeleoperado += (pecasDeJogo1Tele.value * 2)
    ptsTeleoperado += (pecasDeJogo2Tele.value * 3)
    ptsTeleoperado += (pecasDeJogo3Tele.value * 5)
    if(linksFeitos.checked){
        ptsTeleoperado += 5
    }
    if(links.value > 4){
        classificacao += 1
    }
    if(encaixadoENaoAcionadoTele.checked){
        ptsTeleoperado += 6
        ptsChargeStation += 6
    }
    if(encaixadoEAcionadoTele.checked){
        ptsTeleoperado += 10
        ptsChargeStation += 10
    }
    if(encaixadoEAcionadoTele.checked){
        ptsTeleoperado += 2
    }
    return ptsTeleoperado
}

const juntarTiposDePontos = () => {
    return verificarPontosAutonomo() + verificarPontosTeleoperado()
}

const etapaFinal = () => {
    if(resultado.value == "Vitoria"){
        classificacao += 2
    }
    else if(resultado.value == "Empate"){
        classificacao += 1
    }
    if(ptsChargeStation >= 26){
        classificacao += 1
    }

    paragrafo.innerText = `
    Você fez ${classificacao} pontos de classificação. E fez uma pontuação geral de ${juntarTiposDePontos()}
    `
    ptsChargeStation = 0
    linksPontuados = 0
    classificacao = 0

}