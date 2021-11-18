window.addEventListener('DOMContentLoaded',(event) =>{
    createInnerHtml();
});
// Template litreal ES6 feature
const createInnerHtml=()=>{
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    let empPayrollData =createEmployeePayrollJSON()[1];
    const innerHtml = `${headerHtml}
     <tr>
         <td><img class="profile" src="" alt=""></td>
         <td>${ empPayrollListLocal._Name}</td>
         <td>${empPayrollListLocal._Gender}</td>
         <td> <div class='dept-label'>HR</div>
              <div class='dept-label'>Finance</div>
         </td>
         <td>300000</td>
         <td>1 Nov 2020</td>
         <td>
             <img name="1" onclick="remove(this)" src=" "alt="delete">
             <img name="1" onclick="update(this)" src=" "alt="Edit">
         </td>
        </tr>
    `;
                 document.querySelector('#table-display').innerHtml = innerHtml;

}
const createEmployeePayrollJSON = () =>{
    let empPayrollListLocal =[
        {
            _Name:'Akshay Somwanshi',
            _Gender:'male',
            _Department:['Engineering','Finance'],
            _Salary:'500000',
            _StartDate:'29 Oct 2021',
            _note:'',
            _id: new Date().getTime(),
            _profilePic:''
        },
        {
            _Name:'Kiran Sharma',
            _Gender:'female',
            _Department:['sales'],
            _Salary:'600000',
            _StartDate:'29 Oct 2022',
            _note:'',
            _id: new Date().getTime() +1,
            _profilePic:''
        }
    ];
    return empPayrollListLocal;
}