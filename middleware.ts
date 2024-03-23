// without a defined matcher, this one line applies next-auth to the entire
// Project


export { default } from "next-auth/middleware";


// This is a matcher. It applies next-auth only to matching routes - can be regex
export const config = { matcher: ["/client", "/", "/server"] }