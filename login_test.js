// Login check script using environment variables
// Usage: USERNAME=admin PASSWORD=secret123 node login_test.js

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;

function checkLogin(username, password) {
  if (!username || !password) {
    console.error("Error: USERNAME and PASSWORD environment variables are required.");
    console.error("Usage: USERNAME=admin PASSWORD=secret123 node login_test.js");
    process.exit(1);
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    console.log("Login SUCCESS: Welcome, " + username + "!");
    return true;
  } else {
    console.log("Login FAILED: Invalid username or password.");
    return false;
  }
}

checkLogin(USERNAME, PASSWORD);
