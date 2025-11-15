import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

// coloca el numero para ser bot
global.botNumber = ""
// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.owner = ["573243768166"]

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.botname = '𝐀𝐞𝐧𝐢𝐫𝐚 🍒'
global.namebot = '𝐀𝐞𝐧𝐢𝐫𝐚 𝐛𝐨𝐭 🍒'
global.bot = '𝐀𝐞𝐧𝐢𝐫𝐚'
global.packname = '𝐀́𝐄𝐍𝐈𝐑𝐀-𝐁𝐎𝐓 🍒'
global.wm = '𝐀𝐞𝐧𝐢𝐫𝐚-𝐌𝐃'
global.author = '𝑪𝑯𝑰𝑵𝑰𝑻𝑨 | ᵒᶠᶦᶜᶦᵃˡ'
global.dev = '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜɪɴᴀ 🔥'
global.copy = '𝐌𝐚𝐝𝐞 𝐰𝐢𝐭𝐡 𝐥𝐨𝐯𝐞 𝐛𝐲'

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.banner = 'https://files.catbox.moe/sgul0u.jpg'
global.icon = 'https://files.catbox.moe/57djkj.jpg'
global.currency = 'StarCoins'
global.sessions = 'sessions/session-bot'
global.jadi = 'sessions/session-sub'

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Diamond'
}

// ✼ •• ┈┈┈┈๑⋅⋯ ୨˚୧ ⋯⋅๑┈┈┈┈ •• ✼

global.my = {
  ch: '120363402839382986@newsletter', 
  name1: `🍒 𝗔𝗲𝗻𝗶𝗿𝗮 𝗯𝗼𝘁 🍒 • 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 𝗨𝗽𝗱𝗮𝘁𝗲'𝘀`,

  ch2: '120363419164978167@newsletter', 
  name2: `🍒 𝗔𝗲𝗻𝗶𝗿𝗮 𝗯𝗼𝘁 🍒 • 𝗖𝗵𝗮𝗻𝗻𝗲𝗹 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹`,
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
