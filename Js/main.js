const signUpName = document.querySelector('#signUpName')
const signUpEmail = document.querySelector('#signUpEmail')
const signUpPass  = document.querySelector('#signUpPass')
const signUpBtn = document.querySelector('#signUpBtn')
const emailExist = document.querySelector('#emailExist')
 
let users = []

if (JSON.parse(localStorage.getItem('usersInfo')) != null){
    users = JSON.parse(localStorage.getItem('usersInfo'))
}


// signUp 
function signUp(){
    if (signUpName.value == '' || signUpEmail.value == '' || signUpPass.value == '' ){
        emailExist.innerHTML = `<span class="text-danger my-3">All inputs are required</span>`
    }else {
        for (let i = 0; i < users.length; i++) {
            if(users[i].email.toLowerCase() == signUpEmail.value.toLowerCase()){
                emailExist.innerHTML = `<span class="text-danger my-3">Email already exist</span>`
                return false
            }
        }
        getUserData()
        emailExist.innerHTML = `<span class="text-success my-3">success</span>`
    }
}

function getUserData(){
    let user = {
        name:signUpName.value,
        email:signUpEmail.value,
        pass : signUpPass.value
    }
    users.push(user)
    localStorage.setItem('usersInfo',JSON.stringify(users))
    location.href = '/index.html'
}


// events
signUpBtn?.addEventListener('click',function(){
    signUp()
})




// Sign in 

const signInEmail = document.querySelector('#signInEmail')
const signInPass = document.querySelector('#signInPass')
const logBtn = document.querySelector('#logBtn')
const checkInput = document.querySelector('#checkInput')



function signIn(){
    if ( signInEmail.value == '' || signInPass.value == '' ) {
        checkInput.innerHTML = `<span class="text-danger my-3">All inputs are required</span>`
    }else {
        for (let i = 0; i < users.length; i++) {
            if(signInEmail.value.toLowerCase() == users[i].email.toLowerCase() && signInPass.value == users[i].pass){
                checkInput.innerHTML = `<span class="text-success my-3">success</span>`
                localStorage.setItem('userName',JSON.stringify(users[i].name))
                location.href = '/home.html'
                return
            }
        }   
        checkInput.innerHTML = `<span class="text-danger my-3">You should sign up</span>`
    }
}

logBtn?.addEventListener('click',function(){
    signIn()
})


// homePage
const homePage = document.querySelector('#homeUser')
let loggedUser = localStorage.getItem('userName')

homePage.innerHTML = `<h2 class="text-info">Welcome ${loggedUser}</h2>`