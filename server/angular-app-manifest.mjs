
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 45032, hash: 'fda9a953b9b7006e11e5866c2929811f3c936182001a17147d6cb7302f7140ab', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1947, hash: '425f899ce5a234a79281245414e66be69bd1a4890ea7be287dd29dad1d3ffae6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 45828, hash: '4d400af53fd0add8b751472c812bee894b37645a0dddd0294d7e379819ff3fa8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5PSSGM4T.css': {size: 183044, hash: 'dNxsdI9DNgE', text: () => import('./assets-chunks/styles-5PSSGM4T_css.mjs').then(m => m.default)}
  },
};
