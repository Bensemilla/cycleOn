import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/",
    error: "/",
  },
});

export const config = { matcher: ["/profile"] };
