import { commands } from '../lib/commands.js' // Ajusta según tu estructura
import moment from 'moment-timezone'

let handler = async (m, { conn, usedPrefix }) => {

  const name = await conn.getName(m.sender)
  const fecha = moment.tz('America/Argentina/Buenos_Aires').format('DD/MM/YYYY')
  const hora = moment.tz('America/Argentina/Buenos_Aires').format('HH:mm:ss')
  const uptime = clockString(process.uptime() * 1000)

  const isPrincipal = conn.user.jid === global.conn.user.jid
  const botType = isPrincipal ? '🤖 Bot Principal' : '🧩 Sub Bot'

  // Organizar comandos por categoría
  const categories = {}
  for (const cmd of commands) {
    if (!categories[cmd.category]) categories[cmd.category] = []
    categories[cmd.category].push(cmd)
  }

  let menu = `
╭─❀ 「 ${global.botname} 」 ❀─╮
✐ Hola *${name}* 💖
📌 Estado: ${botType}
📅 Fecha: ${fecha}
🕒 Hora: ${hora}
🔋 Uptime: ${uptime}
╰───────────────╯
`

  for (const cat of Object.keys(categories).sort()) {
    const catName = cat.charAt(0).toUpperCase() + cat.slice(1)
    menu += `\n╭─🍥 *${catName}* 🍥─╮\n`
    for (const cmd of categories[cat].sort((a, b) => a.name.localeCompare(b.name))) {
      const alias = cmd.alias && cmd.alias.length ? `${cmd.alias.join(', ')})` : ''
      const uso = cmd.uso ? `\nUso: ${usedPrefix}${cmd.name} ${cmd.uso}` : ''
      menu += `✿ ${usedPrefix}${cmd.name} ${alias}${uso}\n`
      menu += `> ✰ ${cmd.desc}\n`
    }
    menu += `╰───────────────✿\n`
  }

  await conn.sendMessage(m.chat, {
    text: menu.trim(),
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: my.ch, // <-- JID del canal
        newsletterName: my.name1,
        serverMessageId: 1
      },
      externalAdReply: {
        title: global.botname,
        body: global.dev,
        thumbnailUrl: banner, // <-- Imagen del menú
        mediaType: 1,
        renderLargerThumbnail: true,
        sourceUrl: "https://instagram.com/its.chinitaaa" // <-- Link al canal o red
      }
    }
  }, { quoted: m })
}

handler.help = ['menu']
handler.command = ['menu', 'menú', 'help']
handler.tags = ['main']

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return `${h}h ${m}m ${s}s`
}


/*import fs from 'fs'
import path from 'path'
import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {

  const name = await conn.getName(m.sender)
  const fecha = moment.tz('America/Argentina/Buenos_Aires').format('DD/MM/YYYY')
  const hora = moment.tz('America/Argentina/Buenos_Aires').format('HH:mm:ss')
  const uptime = clockString(process.uptime() * 1000)

  const isPrincipal = conn.user.jid === global.conn.user.jid
  const botType = isPrincipal ? '🤖 Bot Principal' : '🧩 Sub Bot'

  const pluginsPath = path.join(process.cwd(), 'plugins')
  const files = fs.readdirSync(pluginsPath).filter(f => f.endsWith('.js'))

  const categories = {}

  for (const file of files) {
    if (!file.includes('-')) continue

    const [cat, cmd] = file.replace('.js', '').split('-')
    if (!categories[cat]) categories[cat] = []
    categories[cat].push(cmd)
  }

  let menu = `
╭─❀ 「 ${global.botname} 」 ❀─╮
✐ Hola *${name}* 💖
📌 Estado: ${botType}
📅 Fecha: ${fecha}
🕒 Hora: ${hora}
🔋 Uptime: ${uptime}
╰───────────────╯
`

  for (const cat of Object.keys(categories).sort()) {
    const catName = cat.charAt(0).toUpperCase() + cat.slice(1)

    menu += `\n╭─🍥 *${catName}* 🍥─╮\n`
    for (const cmd of categories[cat].sort()) {
      menu += `✿ ${usedPrefix}${cmd}\n`
    }
    menu += `╰───────────────✿\n`
  }

await conn.sendMessage(m.chat, {
  text: menu.trim(),
  contextInfo: {
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: my.ch,
      newsletterName: my.name1,
      serverMessageId: 1
    },
    externalAdReply: {
      title: global.botname,
      body: global.dev,
      thumbnailUrl: banner,
      mediaType: 1,
      renderLargerThumbnail: true,
      sourceUrl: "https://instagram.com"
    }
  }
}, { quoted: m })
}

handler.help = ['menu']
handler.command = ['menu', 'menú', 'help']
handler.tags = ['main']

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return `${h}h ${m}m ${s}s`
}
*/
