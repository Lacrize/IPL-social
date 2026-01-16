export function isValidEmail(email: string): boolean {
    if (!email.includes("@")) {
        return false;
    }
    if (email.startsWith("@") || email.endsWith("@")) {
        return false;
    }
    if (email.includes(" ")) {
        return false;
    }
    const parts = email.split("@");
    if(!parts[1].includes(".")) {
        return false;
    }
    return true;
}

