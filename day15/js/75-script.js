import {students} from "../data/students.js"
const loadData = () => { 
let listEl="";
students.forEach((student,index)=>{
    listEl+=
`    <tr>
    <td>${index+1}</td>
    <td>${student.name}</td>
    <td>${student.point}</td>
</tr>`
})
document.querySelector("#tblStudents tbody").innerHTML=listEl
 }
 loadData()