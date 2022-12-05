const myForm = document.querySelector('#my-form');
// const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  var name=event.target.usrName.value;
  var email=event.target.emailid.value;
  
  
    let obj={
        name,
        email
    };
    localStorage.setItem(obj.email,JSON.stringify(obj));
    showNewUserOnScreen(obj);
}
window.addEventListener("DOMContentLoaded", () =>{
  const localStorageObj=localStorage;
  const localStorageKeys=Object.keys(localStorageObj);
  for(var i=0;i<localStorageKeys.length;i++){
    const  key=localStorageKeys[i];
    const userDetailString=localStorageObj[key];
    const userDetailsObj=JSON.parse(userDetailString);
    showNewUserOnScreen(userDetailsObj);
  }
})
function showNewUserOnScreen(user){
  if(localStorage.getItem(user.email) !== null){
    removeUserFromScreen(email);
  }
  const parentNode=document.getElementById('listOfUsers');
  const childHTML = `<li id=${user.email}> ${user.name} - ${user.email}
                                        <button onclick=deleteUser('${user.email}')> Delete User </button>
                                        <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit User </button>
                                     </li>`
  parentNode.innerHTML=parentNode.innerHTML+childHTML;
}

function editUserDetails(emailId, name){

  document.getElementById('email').value = emailId;
  document.getElementById('name').value = name;
  deleteUser(emailId)
}

function deleteUser(emailId){
  console.log(emailId)
  localStorage.removeItem(emailId);
  removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId){
  const parentNode = document.getElementById('listOfUsers');
  const childNodeToBeDeleted = document.getElementById(emailId);
  if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted);
  }
  
}
