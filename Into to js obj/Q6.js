let user = { name: "Alice", role: "admin", active: false };

let message;

if (user.role === "admin") {
    if (user.active) {
        message = "Admin Access Granted!";
    } else {
        message = "Admin Access Revoked";
    }
} else if (user.role === "user") {
    if (user.active) {
        message = "User Access Granted!";
    } else {
        message = "User Access Revoked";
    }
} else {
    message = "Access Denied";
}

console.log(message);
