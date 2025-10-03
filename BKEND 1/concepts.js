console.log("Start")

setTimeout(() => {
    console.log("Inside of set time out..gonna take 2 whole seconds...")
}, 2000)

console.log("END")

try{
    const data = FileSystem.readFileSync("sample.txt",'ytf8')
    console.log(data)
}
catch (err){
    console.log(err)
}
