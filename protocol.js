let {protocol} = require('electron')
let path = require('path')
let {readFile} = require('fs');
let {URL} = require('url')

module.exports = function (scheme) {
  protocol.registerBufferProtocol(
    scheme,
    (request, respond) => {
      let pathName = new URL(request.url).pathname
      pathName = decodeURI(pathName) // Needed in case URL contains spaces

      readFile(path.join(__dirname, pathName), (error, data) => {
        if (error) {
          console.error(`Failed to read ${pathName} on ${scheme} protocol`, error)
        }
        const extension = path.extname(pathName).toLowerCase()
        let mimeType = ''

        if (extension === '.js') {
          mimeType = 'text/javascript'
        } else if (extension === '.html') {
          mimeType = 'text/html'
        } else if (extension === '.css') {
          mimeType = 'text/css'
        } else if (extension === '.svg' || extension === '.svgz') {
          mimeType = 'image/svg+xml'
        } else if (extension === '.json') {
          mimeType = 'application/json'
        }

        respond({mimeType, data})
      })
    },
    error => {
      if (error) {
        console.error(`Failed to register ${scheme} protocol`, error)
      }
    }
  )
}