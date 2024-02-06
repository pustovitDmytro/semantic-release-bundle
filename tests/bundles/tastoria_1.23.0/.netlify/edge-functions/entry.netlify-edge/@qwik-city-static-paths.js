const staticPaths = new Set(["/_headers","/favicon.ico","/fonts/PlayfairDisplay-ExtraBoldItalic.ttf","/images/logo_128.png","/images/logo_144.png","/images/logo_152.png","/images/logo_192.png","/images/logo_256.png","/manifest.json","/q-manifest.json","/qwik-prefetch-service-worker.js","/service-worker.js","/sitemap.xml"]);
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