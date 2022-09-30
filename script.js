console.log("see the application calculator");

document.getElementById('btn').addEventListener('click', operations);

function operations(){
    const form = document.getElementById('form');
    let operatingA = form['operatingA'];
    let operatingB = form['operatingB'];
    let add = parseInt(operatingA.value) + parseInt(operatingB.value);
    let subtract = parseInt(operatingA.value) - parseInt(operatingB.value);
    let multiply = parseInt(operatingA.value) * parseInt(operatingB.value);
    let split = parseInt(operatingA.value) / parseInt(operatingB.value);
    let module = parseInt(operatingA.value) % parseInt(operatingB.value);
    let exponentiation = parseInt(operatingA.value) ** parseInt(operatingB.value);

    if (isNaN(result)){
        result = 'the operations has no numbers '
    }
    document.getElementById('result').innerHTML = 
    `Results:<br> 
    Add: ${add}<br> 
    Subtract: ${subtract}<br>
    Multiply: ${multiply}<br>
    Split: ${split}<br>
    Module: ${module}<br>
    Exponentiation: ${exponentiation}<br>
    `;
    console.log(`Results: ${result}`)
}