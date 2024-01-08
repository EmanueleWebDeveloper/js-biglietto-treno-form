function calcolaPrezzo() {
    const costoKilometro = 0.21;
    const risultatoHtml = document.getElementById('risultato');

    const nomeCognome = document.getElementById('NomeeCognome').value;
    const numeroKilometri = parseFloat(document.getElementById('numeroKilometri').value);
    const etaPasseggero = parseInt(document.getElementById('etaPasseggero').value);

    let prezzoBiglietto = costoKilometro * numeroKilometri;

    if (etaPasseggero < 18) {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.2);
        risultatoHtml.value = `Ciao ${nomeCognome}, il prezzo del biglietto è: ${prezzoBiglietto.toFixed(2)}€ con uno sconto del 20% perché sei minorenne.`;
    } else if (etaPasseggero >= 65) {
        prezzoBiglietto = prezzoBiglietto - (prezzoBiglietto * 0.4);
        risultatoHtml.value = `Ciao ${nomeCognome}, il prezzo del biglietto è: ${prezzoBiglietto.toFixed(2)}€ con uno sconto del 40% perché sei over 65.`;
    } else {
        risultatoHtml.value = `Ciao ${nomeCognome}, il prezzo del biglietto è: ${prezzoBiglietto.toFixed(2)}€.`;
    }
}