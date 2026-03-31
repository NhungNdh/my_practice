// Login check script using environment variables
// Set required credentials via environment variables before running

require("dotenv").config();

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const VALID_USERNAME = process.env.VALID_USERNAME;
const VALID_PASSWORD = process.env.VALID_PASSWORD;

function checkLogin(username, password) {
  if (!username || !password) {
    console.error("Error: Missing required credentials.");
    process.exit(1);
  }

  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    console.log("Login successful.");
    return true;
  } else {
    console.log("Login failed: Invalid username or password.");
    return false;
  }
}

checkLogin(USERNAME, PASSWORD);
