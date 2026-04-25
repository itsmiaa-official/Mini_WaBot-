import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

// coloca el numero para ser bot
global.botNumber = ""
// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.owner = ["923297474483","5492644996684"]

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.botname = '𝗡ᥡ᥊іrᥲ'
global.namebot = '𝗡ᥡ᥊іrᥲ'
global.vs = '2.0.𝟢 (Lite)'
global.bot = '𝗡ᥡ᥊іrᥲ'
global.packname = '𝗡ᥡ᥊іrᥲ'
global.wm = '𝗡ᥡ᥊іrᥲ 𝗪ᥲ'
global.author = '@_.𝗯𝗲𝗻𝗷𝗮𝘅𝘇𝘇'
global.dev = '𝗠𝗮𝗱𝗲 🤍 𝗪𝗶𝘁𝗵 𝗕𝘆 @_.𝗯𝗲𝗻𝗷𝗮𝘅𝘇𝘇'
global.copy = '𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 @_.𝗯𝗲𝗻𝗷𝗮𝘅𝘇𝘇'

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.banner = 'https://files.catbox.moe/eaw7el.png'
global.icon = 'https://files.catbox.moe/zxelx0.jpg'
global.currency = 'Dólares 💸'
global.sessions = 'sessions/session-bot'
global.jadi = 'sessions/session-sub'

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Diamond'
}

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.my = {
  ch: '120363345778623279@newsletter', 
  name1: `𑊐𑊐ㅤׅ  𝗡𝕪𝘅𝕚𝗿𝕒 𝗼𝕗𝗳𝗶𝕔𝗶𝕒𝗹 ℂ𝗵𝕒𝗻𝕟𝗲𝕝ㅤׄ  ത᪲`,

  ch2: '120363402839382986@newsletter', 
  name2: `=͟͟͞͞𝐒𝐩𝐚𝐜𝐞 𝐖𝐨𝐫𝐥𝐝 - 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐔𝐩𝐝𝐚𝐭𝐞'𝐬 ✰`,
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
