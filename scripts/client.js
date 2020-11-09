console.log('JS');

$(document).ready(onReady);

let allEmployees = [];

function onReady(){
    console.log('Hello from JQ');
    
    // Target button, give it onClick functionality
    $('.employeeSubmit').on('click', submitClick);
    
    
}

function submitClick(){
    console.log('submitButton clicked!');

    let firstName = $('#firstName').val();
    console.log('Employee firtname entered: ', firstName);
    
    let lastName = $('#lastName').val();
    console.log('Employee lastname entered: ', lastName);
    
    let emId = $('#id').val();
    console.log('Employee ID entered: ', emId);
    
    let emTitle = $('#title').val();
    console.log('Employee title: ', emTitle);
    
    let emSalary = $('#annualSalary').val();
    console.log('Employee annual salary: ', emSalary);

    $('#table').append(`<tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${emId}</td>
            <td>${emTitle}</td>
            <td>${emSalary}</td>
            <td>
                <button>
                    Delete
                </button>
            </td>
        </tr>`);

    event.preventDefault();
}

// function deleteEmployee(event){
//     console.log('Delete employee clicked');
    
//     let containRow = $(this)parent();

// }

function addMonthlySalary(){
    salaryMonthly = 0;
    let salaryTotal = 0;

    for (let i=0; i< allEmployees.length; i++){
        let employee = allEmployees[i];
        salaryTotal += parseInt(employee.salary);
    }

    
}

