import fs from 'fs';

const filePath = './lib/personalize.json';

let handler = async (m, { conn }) => {
    try {
        const data = JSON.parse(fs.readFileSync(filePath));

        // Cargar datos globales y predeterminados
        const globalConfig = data.global;
        const defaultConfig = data.default;

        const botName = globalConfig.botName || defaultConfig.botName;
        const currency = globalConfig.currency || defaultConfig.currency;
        const videos = globalConfig.videos.length > 0 ? globalConfig.videos : defaultConfig.videos;

        const randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];

        const menuMessage = `
╭──〕${botName} 〕
├̟̇❀ 𝑫𝒆𝒔𝒂𝒓𝒓𝒐𝒍𝒍𝒂𝒅𝒐 𝑷𝒐𝒓 : 
├̟̇❀ ${dev}
├̟̇❀ 𝑽𝒆𝒓𝒔𝒊𝒐́𝒏 : 
╰──────────╼

💬¡Hola ! Soy ${botName}, aquí tienes la lista de comandos ✨
💰 Moneda actual: ¥ ${currency}

Checa nuestro Canal Oficial de WhatsApp en donde se publican actualizaciones:
https://whatsapp.com/channel/0029Vaj5mivLdQegrUZ1Xl3M

Canal secundario:
https://whatsapp.com/channel/0029VbBCHSsJZg41QE3Ibl3O

╭── ⋆⋅🎀⋅⋆ ──╮
│ 🎨 𝙿𝙴𝚁𝚂𝙾𝙽𝙰𝙻𝙸𝚉𝙰𝙲𝙸Ó𝙽 🌸
│ ✧ .setname 🖋️
│ ✧ .setbanner 🖼️
│ ✧ .setmoneda 💰
│ ✧ .viewbanner 📜
│ ✧ .deletebanner 🚮
│ ✧ .resetpreferences 🔄
╰── ⋆⋅🚀⋅⋆ ──╯

╭── ⋆⋅🎀⋅⋆ ──╮
│ 🎩 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙲𝙸Ó𝙽 ⚙️
│ ✧ .ban ➩ .kick 🚫 Expulsa a los usuarios (Solo Admins)
│ ✧ .getplugin 🔌
│ ✧ .getpack 📦
│ ✧ .store 🛒
│ ✧ .status 💻
│ ✧ .ping ⏳
│ ✧ .on / .off 🔌 Activa o desactiva configuraciones 
╰── ⋆⋅🚀⋅⋆ ──╯

╭── ⋆⋅🎀⋅⋆ ──╮
│ 🎲 𝚁𝙰𝙽𝙳𝙾𝙼 🎭
│ ✧ .rw ➩ .rollwaifu 💖
│ ✧ .winfo 💖
│ ✧ .c ➩ .claim 📜
│ ✧ .harem 💑
│ ✧ .addrw 📝
│ ✧ .alya ➩ .bot 💖
│ ✧ .kaori 💖
╰── ⋆⋅🚀⋅⋆ ──╯

╭── ⋆⋅🎀⋅⋆ ──╮
│ 📥 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚂 🎵
│ ✧ .play ➩ nombre de la canción 🎶 (audio)
│ ✧ .play2 ➩ nombre de la canción 🎥 (video)
│ ✧ .tt ➩ .tiktok ➩ enlace de TikTok 🎞️
│ ✧ .ttp ➩ .ttph ➩ enlace de tiktok slides 📷
│ ✧ .yt ➩ .ytv ➩ enlace de YouTube 🎥
│ ✧ .yta ➩ enlace de YouTube 🎵
│ ✧ .sp ➩ .Spotify enlace de Spotify 🎼
│ ✧ .fb ➩ link de facebook 🎥 (video)
╰── ⋆⋅🚀⋅⋆ ──╯

╭── ⋆⋅🎀⋅⋆ ──╮
│ ⚔️ 𝚁𝙿𝙶 🏹
│ ✧ .w ➩ .work 💼
│ ✧ .slut 😈
│ ✧ .robar 💰
│ ✧ .deposit (cantidad) 🏦
│ ✧ .retirar (cantidad) 🏧
│ ✧ .transferir (cantidad) @usuario 🔁
│ ✧ .perfil 🆔
╰── ⋆⋅🚀⋅⋆ ──╯

╭── ⋆⋅🎀⋅⋆ ──╮
│ 💕 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙰𝙽𝙸𝙼𝙴 🎭
│ ✧ .abrazar 🤗
│ ✧ .aburrido 😑
│ ✧ .bañarse 🛁
│ ✧ .bleh 😝
│ ✧ .comer 🍙
│ ✧ .dance 💃🕺
│ ✧ .enojado 😡
│ ✧ .feliz 😊
│ ✧ .kiss 😘
│ ✧ .love ❤️
│ ✧ .matar 🔪
│ ✧ .morder 🦷
│ ✧ .nalguear 🍑
│ ✧ .punch 👊
│ ✧ .saludar 👋
│ ✧ .bofetada 🖐️
│ ✧ .dormir 😴
╰── ⋆⋅🚀⋅⋆ ──╯

╭── ⋆⋅🎀⋅⋆ ──╮
│ 🛠️𝚑𝚎𝚛𝚛𝚊𝚖𝚒𝚎𝚗𝚝𝚊𝚜🛠️
│ ✧ .gemini 🌟
╰── ⋆⋅🚀⋅⋆ ──╯

╭── ⋆⋅🎀⋅⋆ ──╮
│ 👑 𝙾𝚆𝙽𝙴𝚁 🛠️
│ ✧ .update 🔄
│ ✧ .dsowner ➩ .purgar 🗑️
│ ✧ .join 🎎
│ ✧ .ono / .offoS
╰── ⋆⋅🚀⋅⋆ ──╯

> ${copy} ${author}
`;

        await conn.sendMessage(
            m.chat,
            {
                video: { url: randomVideoUrl },
                gifPlayback: true,
                caption: menuMessage,
                mentions: [m.sender]
            }
        );
    } catch (error) {
        conn.reply(m.chat, `❌ Error al cargar el menú: ${error.message}`, m);
    }
};

handler.help = ['menu'];
handler.tags = ['info'];
handler.command = ['menu'];

export default handler;

/* estilos de menu

┎───•✧•───⌬
┃
┖───•✧•  


╭──〕ᴀʟɪsᴀ ʙᴏᴛ - ᴍᴅ 〕
├̟̇❀ 𝑫𝒆𝒔𝒂𝒓𝒓𝒐𝒍𝒍𝒂𝒅𝒐 𝑷𝒐𝒓 : 
├̟̇❀ 𝑬𝒎𝒎𝒂 𝓥𝓲𝓸𝓵𝓮𝓽'𝓼 𝓥𝓮𝓻𝓼𝓲𝒐́𝓷
├̟̇❀ 𝑽𝒆𝒓𝒔𝒊𝒐́𝒏 : 
╰──────────╼*/

//────୨ৎ────

/*import fetch from 'node-fetch'
import fs from 'fs'
import axios from 'axios'
import moment from 'moment-timezone'
import { commands } from '../lib/commands.js'

let handler = async (m, { conn, args, usedPrefix }) => { 
  try {

    const cmdsList = commands
    let now = new Date()
    let colombianTime = new Date(now.toLocaleString('en-US', { timeZone: 'America/Argentina/Buenos_Aires' }))
    let tiempo = colombianTime.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric', 
    }).replace(/,/g, '')

    let tiempo2 = moment.tz('America/Argentina/Buenos_Aires').format('hh:mm A')

    let sessionFolder = './plugins'
    let subSessions = fs.existsSync(sessionFolder) ? fs.readdirSync(sessionFolder) : []
    let plugins = subSessions.length

    let isOficialBot = conn.user.jid === globalThis.conn.user.jid

    let botType = isOficialBot ? '𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨 💋' : '𝐒𝐮𝐛-𝐁𝐨𝐭'

const jam = moment.tz('America/Argentina/Buenos_Aires').locale('id').format('HH:mm:ss')
const ucapan = jam < '05:00:00' ? 'Buen día' : jam < '11:00:00' ? 'Buen día' : jam < '15:00:00' ? 'Buenas tardes' : jam < '18:00:00' ? 'Buenas tardes' : jam < '19:00:00' ? 'Buenas tardes' : jam < '23:59:00' ? 'Buenas noches' : 'Buenas noches';

let menu = `\n\n`
    
menu += `*¡𝗛𝗼𝗹𝗮 𝗨𝘀𝘂𝗮𝗿𝗶𝗼, 𝙎𝙤𝙮 ${botname}* \n`
menu += `Aǫᴜɪ ᴇsᴛᴀ ʟᴀ ʟɪsᴛᴀ ᴅᴇ ᴄᴏᴍᴀɴᴅᴏs: \n\n`
menu += `╭┈ ↷\n`
menu += `│ ✐ 𝓓𝓮𝓿𝓮𝓵𝓸𝓹𝓮𝓭 𝓫𝔂  𝑪𝑯𝑰𝑁𝑰𝑻𝑨 | ᵒᶠᶦᶜᶦᵃˡ\n`
menu += `│ ✐ ꒷ꕤ🍒ദ ɪɴsᴛᴀɢʀᴀᴍ ෴\n`
menu += `│ https://www.instagram.com/its.chinitaaa_\n`
menu += `│ ✐ ᴛɪᴘᴏ: ${botType}\n`
menu += `╰━━━━━━━━━━\n`
    const categoryArg = args[0]?.toLowerCase();
    const categories = {};

    for (const command of cmdsList) {
      const category = command.category || 'otros';
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(command);
    }

    if (categoryArg && !categories[categoryArg]) {
      return m.reply(`⭐ La categoría *${categoryArg}* no encontrada.`);
    }

    for (const [category, cmds] of Object.entries(categories)) {
      if (categoryArg && category.toLowerCase() !== categoryArg) {
        continue;
      }
      const catName = category.charAt(0).toUpperCase() + category.slice(1)
      menu += `\n˚ ₊ ‧  ꒰🍒꒱  — \`『 ${catName} 』\`  \n`
      cmds.forEach(cmd => {
      const match = usedPrefix.match(/[#\/+.!-]$/);
const separator = match ? match[0] : '';
      const cleanPrefix = separator ? separator : usedPrefix;
      const aliases = cmd.alias.map(a => {
  const aliasClean = a.split(/[\/#!+.\-]+/).pop().toLowerCase();
      return `${cleanPrefix}${aliasClean}`}).join(' › ');
        menu += `✿ *${aliases}* ${cmd.uso ? `+ ${cmd.uso}` : ''}\n`;
        menu += `> _*${cmd.desc}*_\n`;
      });
    }

  const canales = Object.entries(global.my)
  .reduce((acc, [key, value]) => {
    if (key.startsWith('ch')) {
      const index = key.slice(2)
      const nombre = global.my[`name${index}`]
      if (nombre) {
        acc.push({ id: value, nombre })
      }
    }
    return acc
  }, [])

const channelRD = canales[Math.floor(Math.random() * canales.length)]

 await conn.sendMessage(m.chat, {
document: await (await fetch(banner)).buffer(),
fileName: '^1.0.0  | Lastest 💋',
mimetype: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
fileLength: '0',
pageCount: '1',
caption: menu.trim(),
contextInfo: {
forwardingScore: 0,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: channelRD.id,
serverMessageId: '0',
newsletterName: channelRD.nombre
},
externalAdReply: {
title: botname,
body: dev, 
showAdAttribution: false,
thumbnailUrl: banner,
mediaType: 1,
previewType: 0,
renderLargerThumbnail: true,
mediaUrl: null,
sourceUrl: null,
}
}}, { quoted: m })

  } catch (e) {
    await m.reply(`🕸 Error [${e}]`)
  }
}

handler.help = ['menu', 'help']
handler.tags = ['info']
handler.command = ['menu', 'help'] 
export default handler
*/
