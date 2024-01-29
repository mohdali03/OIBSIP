import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    '/',
    '/api/webhook',
    '/menu',
    '/myorder',
    '/about',
    
  ],
  ignoredRoutes: [
    '/api/webhook',
  ]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
