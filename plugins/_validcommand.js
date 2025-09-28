export async function before(m, { groupMetadata }) {
  if (!m.text || !globalThis.prefix.test(m.text)) {
    return;
  }

  const usedPrefix = globalThis.prefix.exec(m.text)[0];
  const command = m.text.slice(usedPrefix.length).trim().split(' ')[0].toLowerCase(); 

  const validCommand = (command, plugins) => {
    for (let plugin of Object.values(plugins)) {
      if (plugin.command && (Array.isArray(plugin.command) ? plugin.command : [plugin.command]).includes(command)) {
        return true;
      }
    }
    return false;
  };


  let chat = globalThis.db.data.chats[m.chat];
  let id = this.user.jid;
  let settings = globalThis.db.data.settings[id];
  let owner = [...globalThis.owner.map(([number]) => number)].map(v => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender)

  if (chat.adminonly) return;
  if (settings.self) return;
  if (!command) return;
  if (command === 'mute') return;
  if (chat.bannedGrupo && !owner) return

try {
let chtxt = ` ֯　ׅ🇨🇳ㅤ *𝐔𝐬𝐮𝐚𝐫𝐢𝐨 ›* ${m.pushName}

 ׄ 💋 ׅ り *𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐔𝐬𝐚𝐝𝐨 ›* #${command}
 ׄ 🔥 ׅ り *𝐕𝐢𝐬𝐢𝐭𝐚 ›* instagram.com/its.chinitaaa_
 ׄ 💋 ׅ り *𝐁𝐨𝐭 ›* ${wm}
 ׄ 🔥 ׅ り *𝐕𝐞𝐫𝐬𝐢𝐨́𝐧 𝐝𝐞𝐥 𝐛𝐨𝐭 ›* ^1.0.0`

let ppch = await this.profilePictureUrl(m.sender, 'image').catch(_ => "https://stellarwa.xyz/files/1757206448404.jpeg")
global.conn.sendMessage(my.ch, { text: chtxt,
contextInfo: { 
externalAdReply: {
title: "🇨🇳 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗖𝗜𝗢́𝗡 𝗚𝗘𝗡𝗘𝗥𝗔𝗟 🇨🇳",
body: '🔥 ¡𝙉𝙪𝙚𝙫𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙪𝙨𝙖𝙙𝙤! 🔥',
thumbnailUrl: ppch,
sourceUrl: redes,
mediaType: 2,
showAdAttribution: false,
renderLargerThumbnail: false
}}}, { quoted: null }) 
} catch (e) {
console.log(`[ 🐼  ]  Error al enviar el mensaje al canal.\n[ 🕸  ]  ${e}`)
}

  if (validCommand(command, globalThis.plugins)) {
  } else {
    const comando = command;
       // await m.reply(`╭╼❌ 𝐍𝐎 𝐄𝐗𝐈𝐒𝐓𝐄 ❌╾╮\n╰─ ─ ─ ─★─ ─ ─ ─╯\n╭ ───── ───── ╮\n│𝐄𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 ${comando}\n│𝐍𝐨 𝐞𝐱𝐢𝐬𝐭𝐞, 𝐔𝐬𝐚 *${usedPrefix}help* 𝐩𝐚𝐫𝐚\n│𝐯𝐞𝐫 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.\n╰ ───── ───── ╯`);
    await m.reply(`✿ El comando *${comando}* no existe.\n> Usa *${usedPrefix}help* para ver la lista de comandos disponibles.`);
  }
}
