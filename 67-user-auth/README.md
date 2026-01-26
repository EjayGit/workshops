# Auth with Clerk

(https://clerk.com/docs/nextjs/getting-started/quickstart)

1. Install Clerk.

2. Connect Clerk app with our Next app using the connection string.

3. Create proxy.js in the src folder, copy template and customise protected routes.

4. Provide our app with Clerk.
- Nest our app within <ClerkProvider> in the layout so all pages have access to it.

5. Sign up and Sign in routes
- Set up catch all segments in our routes
- Import signin and signup components in their respoective routes
- Add env vars to prioritise our custom login and to redirect user after authentication

6. User interface Clerk components
- Check <Header.jsx> component
