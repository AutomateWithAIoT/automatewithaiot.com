const staticPaths = new Set(["/","/About.webp","/Cb.svg","/Contact_1.webp","/Contact_2.webp","/Feature_1.webp","/Feature_2.webp","/Feature_3.webp","/Footer.webp","/Hero.webp","/Privacy-Policy/","/Terms-Conditions/","/UseCases_1.webp","/UseCases_2.webp","/about/","/app/auth/Login/","/app/auth/Login/Forgot-password/","/app/auth/PasswordReset/","/app/auth/Signup/","/app/dashboard/","/app/dashboard/alerts/","/app/dashboard/analytics/","/app/dashboard/devices/","/app/dashboard/pet-tracking/","/app/dashboard/settings/","/blogs/1/","/blogs/2/","/blogs/3/","/blogs/Blog_1.webp","/blogs/Blog_2.webp","/blogs/Blog_3.webp","/contact/","/f6s.svg","/favicon.webp","/logo-dark.webp","/logo-light.webp","/manifest.json","/q-manifest.json","/qwik-prefetch-service-worker.js","/robots.txt","/service-worker.js","/sitemap.xml","/testimonials/Image_1.webp","/testimonials/Image_2.webp","/testimonials/Image_3.webp","/testimonials/Image_4.webp","/testimonials/Image_5.webp"]);
function isStaticPath(method, url) {
  if (method.toUpperCase() !== 'GET') {
    return false;
  }
  const p = url.pathname;
  if (p.startsWith("/build/")) {
    return true;
  }
  if (p.startsWith("/assets/")) {
    return true;
  }
  if (staticPaths.has(p)) {
    return true;
  }
  if (p.endsWith('/q-data.json')) {
    const pWithoutQdata = p.replace(/\/q-data.json$/, '');
    if (staticPaths.has(pWithoutQdata + '/')) {
      return true;
    }
    if (staticPaths.has(pWithoutQdata)) {
      return true;
    }
  }
  return false;
}
export { isStaticPath };