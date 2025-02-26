const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const length = 15;

// Password generation function
function createPassword_1() {
  
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}


function generatePasswords_1() {
    // Clear previous content
    document.getElementById('password_1').textContent = '';
    document.getElementById('password_2').textContent = '';

    // Generate two passwords using the function
    const password1 = createPassword_1(length);
    const password2 = createPassword_1(length);

    // Display the passwords
    document.getElementById('password_1').textContent = password1;
    document.getElementById('password_2').textContent = password2;
}



function createPassword_2() {


  
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}


function generatePasswords_2() {
    // Clear previous content
    document.getElementById('password_3').textContent = '';
    document.getElementById('password_4').textContent = '';

    // Generate two passwords using the function
    const password1 = createPassword_2(length);
    const password2 = createPassword_2(length);

    // Display the passwords
    document.getElementById('password_3').textContent = password1;
    document.getElementById('password_4').textContent = password2;
}



