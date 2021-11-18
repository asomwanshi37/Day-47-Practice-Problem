let empPayrollList;
window.addEventListener('DOMContentLoaded',(event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelectorAll(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
    localStorage.removeItem('editEmp');
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ? 
                        JSON.parse(localStorage.getItem('EmployeePayrollList')):[];
}

const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    if (empPayrollList.length ==0) return;
    let innerHtml = `${headerHtml}`;
    for ( const employeePayrollData of empPayrollList){
        innerHtml = `${innerHtml}
          <tr>
           <td><img class="profile" src="${employeePayrollData._profilePic}" alt="></td>
           <td>${employeePayrollData._Name}</td>
           <td>${employeePayrollData._Gender}</td>
           <td>${employeePayrollData._Department}</td>
           <td>${employeePayrollData._Salary}</td>
           <td>${stringifyDate(employeePayrollData._StartDate)}</td>
           <td>
             <img id="${employeePayrollData._Id}" onclick="remove(this)"
               src="" alt="delete">
             <img id="${employeePayrollData._Id}" onclick="update(this)"
               src="" alt="edit">
               
            </td>
          </tr>
          
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}