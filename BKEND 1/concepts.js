// console.log("Start")

// setTimeout(() => {
//     console.log("Inside of set time out..gonna take 2 whole seconds...")
// }, 2000)

// console.log("END")

// try{
//     const data = FileSystem.readFileSync("sample.txt",'ytf8')
//     console.log(data)
// }
// catch (err){
//     console.log(err)
// }

// const os = require('os')

// console.log("Platform : ", os.platform())
// console.log("CPU cores : ",os.cpus().length)
// console.log("Free memory :", os.freemem()/1073741824)
// console.log("Uptime : ",os.uptime()/86400,"days")

// const url = require('url')

// const myUrl = new URL('https://example.com:8000/path?name=John&age=100')

// console.log(myUrl.hostname) //example.com
// console.log(myUrl.pathname) //path
// console.log(myUrl.searchParams.get('name')) //John

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {"content-type" : 'text/plain'})
    res.end("Hello from nodejs HTTP server!!!")
})

server.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})


