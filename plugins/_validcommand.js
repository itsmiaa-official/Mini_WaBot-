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
let chtxt = ` ֯　ׅ🇨➪ㅤ *𝙐𝙨𝙪𝙖𝙧𝙞𝙤 ›* ${m.pushName}

 ׄ ➪ ׅ り *𝘾𝙤𝙢𝙖𝙣𝙙𝙤 𝙐𝙨𝙖𝙙𝙤 ›* #${command}
 ׄ ✰ ׅ り *𝙑𝙞𝙨𝙞𝙩𝙖 ›* instagram.com/_.benjaxzz
 ׄ ➪ ׅ り *𝘽𝙤𝙩 ›* ${wm}
 ׄ ✰ ׅ り *𝙑𝙚𝙧𝙨𝙞𝙤́𝙣 𝙙𝙚𝙡 𝘽𝙤𝙩›* ${vs}`

let ppch = await this.profilePictureUrl(m.sender, 'image').catch(_ => "https://files.catbox.moe/ez2zgm.jpg")
global.conn.sendMessage(my.ch2, { text: chtxt,
contextInfo: { 
externalAdReply: {
title: "「 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊́𝙉 𝙂𝙀𝙉𝙀𝙍𝘼𝙇 」",
body: '✧ ¡𝙉𝙪𝙚𝙫𝙤 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 𝙪𝙨𝙖𝙙𝙤! ✧',
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
    await m.reply(`✿ El comando *${comando}* no existe.\n> Usa *${usedPrefix}help* para ver la lista de comandos disponibles.`);
  }
}
