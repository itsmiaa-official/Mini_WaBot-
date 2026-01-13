import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

// coloca el numero para ser bot
global.botNumber = ""
// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.owner = ["923297474483","5492644996684"]

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.botname = '𝕸𝖆𝖋𝖎𝖆 𝕭𝖔𝖙 🥷🏻'
global.namebot = '𝐌𝐚𝐟𝐢𝐚_𝐖𝐚'
global.vs = '𝟐.𝟎.𝟎'
global.bot = '𝐌𝐚𝐟𝐢𝐚-𝐁𝐨𝐭'
global.packname = '𝕸𝖆𝖋𝖎𝖆-𝕭𝖔𝖙 🥷🏻'
global.wm = '𝐌𝐚𝐟𝐢𝐚ᵇᵒᵗ''
global.author = '𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎'
global.dev = '𝗠𝗮𝗱𝗲 🩷 𝗪𝗶𝘁𝗵 𝗕𝘆 𝕮𝖍𝖎𝖓𝖆'
global.copy = '𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 𝕮𝖍𝖎𝖓𝖆'

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.banner = 'https://files.catbox.moe/w2rxig.jpg'
global.icon = 'https://files.catbox.moe/469tnf.jpg'
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
  name1: `ᯓ֟፝ ꒰ =͟͟͞͞𝐒𝐩𝐚𝐜𝐞 𝐖𝐨𝐫𝐥𝐝 - 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐂𝐡𝐚𝐧𝐧𝐞𝐥  ꒱ 🪐`,

  ch2: '120363402839382986@newsletter', 
  name2: `=͟͟͞͞𝐒𝐩𝐚𝐜𝐞 𝐖𝐨𝐫𝐥𝐝 - 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 𝐔𝐩𝐝𝐚𝐭𝐞'𝐬 ✰`,

 ch3: '120363407670600183@newsletter',
 name3: '', 
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
