const showAndHide = document.querySelector('#btnShowHide');
const addStudent = document.querySelector('#addStudent-form');
const studentList = document.querySelector('#studentList');
const nameSearch = document.querySelector('#searchByName');
const facultySearch = document.querySelector('#searchByFaculty');
const prodiSearch = document.querySelector('#searchByProdi');

showAndHide.addEventListener('click', showAndHideFunction);
addStudent.addEventListener('submit', addStudentFunction);
studentList.addEventListener('click', removeStudentFunction);
nameSearch.addEventListener('keyup', searchByNameFunction);
facultySearch.addEventListener('keyup', searchByFacultyFunction);
prodiSearch.addEventListener('keyup', searchByProdiFunction);

function showAndHideFunction() {
  var x = document.querySelector("#showAndHide");
  
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function addStudentFunction(event){
  event.preventDefault();

  const studentID = document.querySelector('#studentID');
  const studentName = document.querySelector('#studentName');
  const studentGender = document.querySelector('input[name="studentGender"]:checked').value;
  const studentFaculty = document.querySelector('#studentFaculty');
  const studentProdi = document.querySelector('#studentProdi');

  const li = document.createElement('li');
  li.className = 'studentData';
  li.appendChild(document.createTextNode(`${studentID.value}   ${studentName.value}  ${studentGender}  ${studentFaculty.value} ${studentProdi.value} `));

  const a = document.createElement('a');
  a.className = 'delete';
  a.setAttribute('href', '#/');

  a.appendChild(document.createTextNode('Delete'));

  li.appendChild(a);

  const ul = document. querySelector('#studentList');
  ul.appendChild(li);

  studentID.value = '';
  studentName.value = '';
  studentFaculty.value = '';
  studentProdi.value = '';
}

function removeStudentFunction(event){
  if(event.target.classList.contains("delete")){
    const li = event.target.parentElement;
    studentList.removeChild(li);
  }
}

function searchByNameFunction(event){
  const searchText = event.target.value.toLowerCase();

  const allStudent = [...document.querySelectorAll('li')];

  allStudent.forEach(addStudent => {
    let studentName = addStudent.firstChild.textContent;

    if(studentName.toLowerCase().indexOf(searchText) != -1){
      addStudent.style.display = 'block';
    } else{
      addStudent.style.display = 'none';
    }
  })
}

function searchByFacultyFunction(event){
  const searchText = event.target.value.toLowerCase();

  const allStudent = [...document.querySelectorAll('li')];

  allStudent.forEach(addStudent => {
    let studentName = addStudent.firstChild.textContent;

    if(studentName.toLowerCase().indexOf(searchText) != -1){
      addStudent.style.display = 'block';
    } else{
      addStudent.style.display = 'none';
    }
  })
}

function searchByProdiFunction(event){
  const searchText = event.target.value.toLowerCase();

  const allStudent = [...document.querySelectorAll('li')];

  allStudent.forEach(addStudent => {
    let studentName = addStudent.firstChild.textContent;

    if(studentName.toLowerCase().indexOf(searchText) != -1){
      addStudent.style.display = 'block';
    } else{
      addStudent.style.display = 'none';
    }
  })
}