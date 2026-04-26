import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

// coloca el numero para ser bot
global.botNumber = ""
// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.owner = ["923297474483","5492644996684"]

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.botname = '𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎'
global.namebot = '𝕸𝖎𝖙𝖟𝖚𝖐𝖎'
global.vs = '2.0.𝟢 💋'
global.bot = '𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 💋'
global.packname = '𝕸𝖎𝖙𝖟𝖚𝖐𝖎-𝖂𝖆'
global.wm = '𝕮𝖍𝖎𝖓𝖆 𝗪ᥲ'
global.author = '@chn1tta'
global.dev = '𝗠𝗮𝗱𝗲 🤍 𝗪𝗶𝘁𝗵 𝗕𝘆 @chn1tta'
global.copy = '𝗣𝗼𝘄𝗲𝗿𝗲𝗱 𝗯𝘆 @chn1tta'

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.banner = 'https://files.catbox.moe/uq770g.jpg' // 'https://files.catbox.moe/eaw7el.png'
global.icon = 'https://files.catbox.moe/uq770g.jpg'
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
  ch: '120363408198325468@newsletter', 
  name1: `𑊐𑊐ㅤׅ  𝗡𝕪𝘅𝕚𝗿𝕒 𝗼𝕗𝗳𝗶𝕔𝗶𝕒𝗹 ℂ𝗵𝕒𝗻𝕟𝗲𝕝ㅤׄ  ത᪲`,

  ch2: '120363427412207120@newsletter', 
  name2: `𑊐𑊐ㅤׅ  𝗡𝕪𝘅𝕚𝗿𝕒 𝗼𝕗𝗳𝗶𝕔𝗶𝕒𝗹 𝕋𝗲𝕤𝘁ㅤׄ  ത᪲`,
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
