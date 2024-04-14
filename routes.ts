/**
 * An array of routes that are acessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = [
  "/"
];


/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in user to /settings
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register"
];


/**
 * The prefix for API authentication routes
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default path after loggin in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/admin";  