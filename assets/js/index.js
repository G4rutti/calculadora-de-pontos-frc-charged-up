const mobilidade1Auto = document.getElementById("moblilidade-1")
const pecasDeJogo1Auto = document.getElementById("pecasDoJogo-1Auto")
const textoPecasDeJogo1Auto = pecasDeJogo1Auto.options[pecasDeJogo1Auto.selectedIndex].value;
const pecasDeJogo2Auto = document.getElementById("pecasDoJogo-2Auto")
const textoPecasDeJogo2Auto = pecasDeJogo2Auto.options[pecasDeJogo2Auto.selectedIndex].value;
const pecasDeJogo3Auto = document.getElementById("pecasDoJogo-3Auto")
const textoPecasDeJogo3Auto = pecasDeJogo3Auto.options[pecasDeJogo3Auto.selectedIndex].value;
const encaixadoENaoAcionadoAuto = document.getElementById("encaixadoENaoAcionadoAuto")
const encaixadoEAcionadoAuto = document.getElementById("encaixadoEAcionadoAuto")
var ptsChargeStationAuto = 0



const verificarPontosAutonomo = () => {
    var ptsAutonomo = 0
    if(mobilidade1Auto.checked){
        ptsAutonomo += 3
    }
    ptsAutonomo += (parseInt(textoPecasDeJogo1Auto) * 3)
    ptsAutonomo += (parseInt(textoPecasDeJogo2Auto) * 4)
    ptsAutonomo += (parseInt(textoPecasDeJogo3Auto) * 6)
    if(encaixadoENaoAcionadoAuto.checked){
        ptsAutonomo += 8 
        ptsChargeStationAuto += 8
    }
    if(encaixadoEAcionadoAuto.checked){
        ptsAutonomo += 12
        ptsChargeStationAuto += 12
    }
    console.log(ptsAutonomo)
}



