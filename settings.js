import { watchFile, unwatchFile } from "fs"
import chalk from "chalk"
import { fileURLToPath } from "url"

global.botNumber = ""

global.owner = ["573243768166"]

global.botname = '𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳'
global.namebot = '𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳'
global.bot = '⏤͟͟͞͞𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 💋🔥'
global.packname = '𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳'
global.wm = '𝕮𝖍𝖎𝖓𝖆𝕸𝖎𝖙𝖟𝖚𝖐𝖎 🔥🇨🇳'
global.author = '𝕮𝖍𝖎𝖓𝖆 🔥💋'
global.dev = '© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄʜɪɴᴀ 🔥'

global.banner = 'https://files.catbox.moe/bw463n.jpg'
global.icon = 'https://files.catbox.moe/57djkj.jpg'
global.currency = 'StarCoins'
global.sessions = 'sessions/session-bot'
global.jadi = 'sessions/session-sub'

global.api = { 
url: 'https://api.stellarwa.xyz',
key: 'Diamond'
}

global.my = {
  ch: '120363402839382986@newsletter', 
  name1: 'ᥴһіᥒᥲ mі𝗍zᥙkі • ᥆𝖿іᥴіᥲᥣ ᥴһᥲᥒᥒᥱᥣ',

  ch2: '120363419164978167@newsletter', 
  name2: 'ᥴһіᥒᥲ mі𝗍zᥙkі • ᥆𝖿іᥴіᥲᥣ 𝗍ᥱs𝗍',
}

const file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright(`Update "${file}"`))
  import(`${file}?update=${Date.now()}`)
})
