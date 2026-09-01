function UserDetails() {
    let username = prompt("Enter your name: ");
    let password = prompt("Enter your password: ");

    return { username, password };
}

function matchPassword(callback) {
    let user = callback();

    if (user.username === "Narayan" && user.password === "1234") {
        console.log("Welcome Narayan");
    } else {
        console.log("Invalid username or password");
    }
}

matchPassword(UserDetails);