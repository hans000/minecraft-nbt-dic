const fs = require('fs')
const path = require('path')

const dic = readData('./src/dic')

fs.writeFileSync('./dist/dic.json', JSON.stringify(dic, null, 4))

function readData(dir, result = {}) {
    fs.readdirSync(dir).forEach(p => {
        try {
            const pa = path.resolve(dir, p)
            if (fs.statSync(pa).isFile()) {
                const data = JSON.parse(fs.readFileSync(pa).toString())
                Object.assign(result, {
                    [path.basename(p, '.json')]: data
                })
            } else {
                readData(pa, result)
            }
        } catch (error) {
            console.log(p, error);
        }
    })
    return result
}