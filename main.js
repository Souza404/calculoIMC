function returnClassification(peso, altura){
  let imc = peso / altura ** 2;

  if (imc < 18.5)
    return `IMC: ${imc.toFixed(2)} | Abaixo do peso`;
  else if (imc >= 18.6 && imc <= 24.9)
    return `IMC: ${imc.toFixed(2)} | Saudável`;
  else if (imc >= 25.0 && imc <= 29.9)
    return `IMC: ${imc.toFixed(2)} | Peso em excesso`;
  else if (imc >= 30.0 && imc <= 34.9)
    return `IMC: ${imc.toFixed(2)} | Obesidade I`;
  else if (imc >= 35.0 && imc <= 39.9)
    return `IMC: ${imc.toFixed(2)} | Obesidade II`;
  else if (imc >= 40.0)
    return `IMC: ${imc.toFixed(2)} | Obesidade III`;
  else 
    return "Informe valores válidos!";
}

function calcIMC(){
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value;
  const result = returnClassificatio(peso, altura);
  alert(result);
}
