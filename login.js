/*const loginBtn = document.querySelector(".loginBtn");

const form = document.querySelector("form");

const matric = document.getElementById("matricNumber");
const password = document.getElementById("accountPwd");


form.addEventListener("submit", e => {
  e.preventDefault();
})

loginBtn.addEventListener("click", e => {
  
  let matricNum = matric.value;
  let pwd = password.value;
  
  signIn(matricNum, pwd);
  
  console.log(matricNum, "\n", pwd);
});

 const signIn = async () => {
  await fetch("http://127.0.0.1:9690/")
}

const signIn = async (matricNum, pwd) => {
  try {
    let res = await fetch("http://127.0.0.1:9690/dashboard",
      { 
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        {
        matricNumber: matricNum,
        password: pwd
        })
      }
    );
  } catch (err) {
    console.log("Something went wrong!");
  }
}
*/