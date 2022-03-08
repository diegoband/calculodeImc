const form = document.querySelector('.formulario');
const resultado = document.querySelector('.resultado');
const pegarPeso = form.querySelector('#peso');
const pegarAltura = form.querySelector('#altura')

form.addEventListener('submit', eventPreCalc);

function eventPreCalc(event) {
    event.preventDefault();

    const peso = Number(pegarPeso.value);
    const altura = Number(pegarAltura.value)
    if (!peso) {
       setResultado('Peso invalido', false)
       return;
    }
    if (!altura) {
        setResultado('Altura invalida', false);
        return;
    };
    console.log(peso, altura)
    const imc = imcCalculo(peso, altura);
    const classificandoImc = classificarImc(imc);
    const msg = `Este é o seu IMC ${imc} e vc está ${classificandoImc}`
    setResultado(msg, true);
}

function classificarImc(imc) {
    if (imc <= 18) return 'Abaixo do peso'
    if (imc > 18.1 && imc < 24.99) return 'Peso Normal'
    if (imc > 25 && imc < 29.99) return 'Peso Sobrepeso'
    if (imc > 30 && imc < 34.99) return 'Peso Obesidade grau I'
    if (imc > 35 && imc < 39.99) return 'Peso Obesidade grau II'
    if (imc > 40) return 'Peso Obesidade grau III'
}

function imcCalculo(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
    
}

function criarParagrafo() {
    const paragrafo = document.createElement('p');
    return paragrafo;
}

function setResultado(msg, valorBolean) {
    resultado.innerHTML = '';
    const paragrafo1 = criarParagrafo();
    if (valorBolean) {
        paragrafo1.classList.add('paragrafo-resultado');
    } else {
        paragrafo1.classList.add('bad');
    }    
    paragrafo1.innerHTML = msg
    resultado.appendChild(paragrafo1)
}