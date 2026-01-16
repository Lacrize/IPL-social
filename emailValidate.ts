export function isValidEmail(email: string): boolean {
    if (!email.includes("@")) {
        return false;
    }
    if (email.startsWith("@") || email.endsWith("@")) {
        return false;
    }
    return true;
}

