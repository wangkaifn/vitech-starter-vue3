import path from 'path'
import fs from 'fs'

import { MockMethod } from 'vite-plugin-mock'
export default [
  {
    url: '/api/get',
    method: 'get',
    response: ({}) => {
      return {
        code: 0,
        data: {
          name: 'vben',
        },
      }
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: {
        name: 'vben',
      },
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = ''
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk
        })
        req.on('end', () => resolve(undefined))
      })
      res.setHeader('Content-Type', 'text/plain')
      res.statusCode = 200
      res.end(`hello, ${reqbody}`)
    },
  },
  {
    url: '/api/text',
    method: 'get',
    rawResponse: async (req, res) => {
      const image = path.resolve(__dirname, '../public/192x192.png')
      fs.readFile(image, (err, data) => {
        if (err) {
          res.statusCode = 500
          res.setHeader('Content-Type', 'text/plain')

          res.end('Internal Server Error')
        } else {
          res.setHeader('Content-Type', 'image/png')
          res.statusCode = 200
          res.end(data)
        }
      })
    },
  },
] as MockMethod[]
