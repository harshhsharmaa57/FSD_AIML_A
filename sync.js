function register() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isRegistered = true; 

            if (isRegistered) {
                resolve("User Registered Successfully");
            } else {
                reject("Registration Failed");
            }
        }, 1000);
    });
}

function login() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isLoggedIn = true; 

            if (isLoggedIn) {
                resolve("Login Successful");
            } else {
                reject("Invalid Credentials");
            }
        }, 1000);
    });
}

async function main() {
    try {
        const registerMsg = await register();
        console.log(registerMsg);

        const loginMsg = await login();
        console.log(loginMsg);

        console.log("Welcome to the Dashboard!");
    } catch (error) {
        console.log("Error:", error);
    }
}

main();