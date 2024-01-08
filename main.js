const costoKilometro = 0.21;

let numeroKilometri = prompt( "quanti kilometri devi percorrere?" );
let etaPasseggero = prompt ( "quanti anni ha il passeggero?" );

const risultatoHtml = document.getElementById(`risultato`);
console.log ( risultatoHtml )

let prezzoBiglietto = costoKilometro * numeroKilometri

if( etaPasseggero < 18 ){
    prezzoBiglietto = prezzoBiglietto - ( prezzoBiglietto * 0.2 )
    risultatoHtml.innerHTML = `il prezzo del biglietto è: ${prezzoBiglietto.toFixed(2)}€ con uno sconto del 20% perchè minorenne` 
} else if ( etaPasseggero >= 65){
    prezzoBiglietto = prezzoBiglietto - ( prezzoBiglietto * 0.4 )
    risultatoHtml.innerHTML = `il prezzo del biglietto è: ${prezzoBiglietto.toFixed(2)}€ con uno sconto del 40% perchè over 65` 
} else {
    risultatoHtml = `il prezzo del biglietto è :${prezzoBiglietto.toFixed(2)}€`
}