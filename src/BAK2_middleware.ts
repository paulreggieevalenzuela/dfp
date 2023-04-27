import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized({ req, token }) {
      console.log('token:', token);

      // `/admin` requires admin role
      if (req.nextUrl.pathname.startsWith('/account')) {
        return true;
        // return token?.userRole === "admin"
      }
      // the rest of matchers only requires the user to be logged in
      return !!token;
    },
  },
});

export const config = {
  matcher: ['/account/:path*', '/my-projects', '/team-projects'],
};
