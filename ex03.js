function fnMedia(){
    let janeiro=0, feveiro=0, marco=0, media= 0
    janeiro= document.getElementById("janeiro_2018").value
    feveiro = document.getElementById("fevereiro_2018").value
    marco = document.getElementById("marco_2018").value
    media= janeiro+feveiro+marco
    document.getElementById("resultadoMedia").innerHTML=`Média de ${media}`
    

}