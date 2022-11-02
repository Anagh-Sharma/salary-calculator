// Abstraction layer
// - Listen to "Click" from Presentation/View Layer
// - Function to take input and send to Model/Data Layer
// - Function to recieve output from Model/Data Layer
// - Function to send output to Presentation/View Layer

import {salaryOperations} from './model.js'

// import salaryOperations from '.model.js'

window.addEventListener('load', bindEvents);
function bindEvents(){
    document.getElementById('compute').addEventListener('click', computeAllowances)
    // var basicSalaryValue = window.document.getElementById('basicSalary').value;
    // console.log('Basic salary is', basicSalaryValue);
}

function computeAllowances(){
    // Function to take input and send to Model/Data Layer
    var basicSalaryValue = window.document.getElementById('basicSalary').value;
    console.log('Basic salary is', basicSalaryValue);
    salaryOperations.basicSalary = basicSalaryValue;
    console.log('HRA is : ', salaryOperations.hra());

    // Breaking DRY principle
    // const pTag = createPTag('HRA', salaryOperations.hra());
    // document.getElementById('output').appendChild(pTag);

    // const pTag2 = createPTag('HRA', salaryOperations.da());
    // document.getElementById('output').appendChild(pTag2);

    // Using a loop instead to fulfil DRY principle
    for(let key in salaryOperations){
        if(key == 'basicSalary'){
            continue;
        }

        // Associative array to dynamically access object instead of . operator
        const val = salaryOperations[key]();
        const pTag = createPTag(key.toUpperCase(), val);
        document.getElementById('output').appendChild(pTag);
    }
}


function createPTag(label, value){
    const pTag = document.createElement('p');
    pTag.innerText = `${label} is ${value}`;
    return pTag;
}
