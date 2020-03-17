const Koa = require('koa')
const React = require('react')
const ReactDOM = require('react-dom/server')
const StyleContext = require('isomorphic-style-loader/StyleContext')

const App = require('./component')

const app = new Koa()

app.use((ctx) => {
  const css = new Set()
  const x = new Set();
  const insertCss = (...styles) => {
    styles.forEach(style => {
      x.add(style._getContent());
      const s = style._getCss();
      css.add(s);
    });
  };
  const content = ReactDOM.renderToString(
    <StyleContext.Provider value={{ insertCss }}>
      <App />
    </StyleContext.Provider>
  );

  ctx.status = 200
  ctx.body = `<!doctype html>
  <html>
    <head>
      <style>${[...css].join('')}</style>
    </head>
    <body>
      <div id="root">${content}</div>
    </body>
  </html>
  `
})

app.listen(8888, () => {
  console.log('server start')
})
