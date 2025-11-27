function fnMedia(){
    let janeiro =0,  fevereiro=0 , marco=0, media=0 
    janeiro = Number( document.getElementById("janeiro_2018").value)
    fevereiro = Number ( document.getElementById("fevereiro_2018").value)
    marco = Number ( document.getElementById("marco_2018").value)
    media= (janeiro+fevereiro+marco)/3
    document.getElementById("resultadoMedia").innerHTML=`Média de ${media}`
    document.getElementById("janeiro_2018").value
    

}