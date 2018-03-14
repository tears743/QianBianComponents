export default class WebViewTools {



  static safeHtml =(html)=> {
    const script = `<script>
      function _autoHeight(){
        window.location.hash = Date.now();
        document.title = document.documentElement.offsetHeight;
        document.body.style.height = document.documentElement.offsetHeight;
      }
      window.addEventListener('load', _autoHeight)
    </script>`;
    if (!html) {
      return ''
    }
    return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
      <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no">
      <style media="screen">
        html,body{overflow: hidden;min-height:64px;}
        img{max-width: 100%}
      </style>
    </head>
    <body>
      ${html}
      ${script}
    </body>
  </html>
  `
  }
}
