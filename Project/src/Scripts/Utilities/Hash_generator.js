export default function generateSHA256(password) {
    return CryptoJS.SHA256(password).toString();
}