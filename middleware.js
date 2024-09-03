// middleware.js

export function middleware(req, res, next) {
  const { pathname } = req.nextUrl;
  const normalizedPathname = pathname.toLowerCase();

  if (pathname !== normalizedPathname) {
    return res.redirect(301, normalizedPathname);
  }

  return next();
}

export const config = {
  matcher: "/((?!_next).*)", // Match all routes except Next.js internal routes
};
