
function calculo(){
    var ad1 = document.getElementById("adulto");
    var c1 = document.getElementById("crianca");
    var t1 = document.getElementById("tempo");
    var adulto = Number(ad1.value);
    var crianca = Number(c1.value);
    var tempo = Number(t1.value);

    let carne = (adulto * 0.5 * tempo) + (crianca * 0.25 * tempo); 
    let cerveja = (adulto * 2 * tempo);
    let refrigerante = (adulto * 0.5 * tempo) + (crianca * 1 * tempo);
    console.log(carne, cerveja, refrigerante);
    document.getElementById("carninha").innerHTML = carne + "Kgs de Carne"
    document.getElementById("cervejinha").innerHTML = cerveja + "Litros de cerveja"
    document.getElementById("refrigerantinho").innerHTML = refrigerante + "Litros de Refrigerante"
    
    
    
}





