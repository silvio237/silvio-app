import { withAuth } from "@kinde-oss/kinde-auth-nextjs/server";

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|$).*)',
  ],
};

export default withAuth// Appel correct du middleware withAuth
