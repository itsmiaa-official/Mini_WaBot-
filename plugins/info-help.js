import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let mentionedJid = await m.mentionedJid
let userId = mentionedJid && mentionedJid[0] ? mentionedJid[0] : m.sender
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

await conn.sendMessage(m.chat, { react: { text: '🤍', key: m.key } })
  
let txt = `
> . ﹡ ﹟ ➪ ׄ ⬭ *¡ʜᴏʟᴀ!* @${userId.split('@')[0]}

*ㅤꨶ〆⁾ ㅤׄㅤ⸼ㅤׄ *͜♰* ㅤ֢ㅤ⸱ㅤᯭִ*
ㅤ𓏸𓈒ㅤׄ *sᴏʏ ::* ${botname}
ׅㅤ𓏸𓈒ㅤׄ *ᴅᴇᴠᴇʟᴏᴘᴇʀ ::* ${author}
ׅㅤ𓏸𓈒ㅤׄ *ᴛɪᴘᴏ ::* ${(conn.user.jid == global.conn.user.jid ? '𝗣rᎥᩥᥒᥴi⍴ᥲᥣ' : '𝗦ᥙᑲ-𝗕𑄝𝗍')}
ׅㅤ𓏸𓈒ㅤׄ *ᴠᴇʀsɪᴏɴ ::* ${vs}

ׅㅤ𓏸𓈒ㅤׄ *ᴜsᴇʀs ::* ${totalreg}
ׅㅤ𓏸𓈒ㅤׄ *ᴄᴏᴍᴍᴀɴᴅs ::* ${totalCommands}
ׅㅤ𓏸𓈒ㅤׄ *ɪɴsᴛᴀɢʀᴀᴍ ::* instagram.com/_.benjaxzz

乂 *𝖫𝗂𝗌𝗍𝖺 𝖽𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌* 乂

ׄꤥ ╾ׅ╼ㅤׄㅤꤪꤨ \`ᴀɴɪᴍᴇ\` ㅤꤪꤨ   ╾ׅ╼ㅤׄꤥㅤׅ
֯　ׅ🍃ֶ֟፝֯ㅤ /angry _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /bath _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /bite › /morder _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /bleh _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /blowkiss _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /blush _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /bonk _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /bored › /aburrido _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /bully _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /call _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /clap _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /coffee › /cafe _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /cold _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /comfort _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /cringe _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /cry _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /cuddle _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /curious _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /dance _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /dramatic › /drama _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /draw _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /drunk _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /eat › /nom › /comer _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /gaming _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /handhold _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /happy › /feliz _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /heat _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /highfive _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /hug _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /impregnate › /preg _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /jump _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /kill _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /kiss › /muak _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /kisscheek › /beso _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /laugh _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /lick _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /love › /amor _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /nope _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /pat _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /peek _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /pout _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /punch _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /push _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /run › /correr _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /sad › /triste _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /scared _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /scream _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /seduce _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /shy › /timido _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /sing _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /slap _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /sleep _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /smile _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /smoke › /fumar _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /smug _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /sniff _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /snuggle _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /spit › /escupir _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /stare _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /step › /pisar _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /think _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /thinkhard _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /tickle _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /trip _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /walk _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /wave _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /wink _<mention>_
*.・。.・゜✭・ . ・✫・゜・。.*

  ׄꤥ ╾ׅ╼ㅤׄㅤꤪꤨ \`ᴅᴏᴡɴʟᴏᴀᴅs\` ㅤꤪꤨ   ╾ׅ╼ㅤׄꤥㅤׅ
֯　ׅ🍃ֶ֟፝֯ㅤ /facebook › /fb _<url>_.
֯　ׅ🍃ֶ֟፝֯ㅤ /mediafire › /mf _<url|query>_
֯　ׅ🍃ֶ֟፝֯ㅤ /play › play2 › /mp3 › /mp4 › /playaudio › /playvideo _<url|query>_
֯　ׅ🍃ֶ֟፝֯ㅤ /tiktok › /tt _<url|query>_
*.・。.・゜✭・ . ・✫・゜・。.*

  ׄꤥ ╾ׅ╼ㅤׄㅤꤪꤨ \`ɢʀᴜᴘᴏ\` ㅤꤪꤨ   ╾ׅ╼ㅤׄꤥㅤׅ
֯　ׅ🍃ֶ֟፝֯ㅤ /bot _<on|off>_
֯　ׅ🍃ֶ֟፝֯ㅤ /group open/close
֯　ׅ🍃ֶ֟፝֯ㅤ /demote _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /gpbanner › /groupimg 
֯　ׅ🍃ֶ֟፝֯ㅤ /gpdesc › groupdesc 
֯　ׅ🍃ֶ֟፝֯ㅤ /gpname › /groupname 
֯　ׅ🍃ֶ֟፝֯ㅤ /groupinfo › /gp 
֯　ׅ🍃ֶ֟፝֯ㅤ /kick _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /kickall › /purgar 
֯　ׅ🍃ֶ֟፝֯ㅤ /link › /linkgrupo 
֯　ׅ🍃ֶ֟፝֯ㅤ /on › /off _<welcome|alerts|alertas|antilinks|antienlaces|onlyadmin|adminonly|nsfw>_
֯　ׅ🍃ֶ֟፝֯ㅤ /promote _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /setprimary _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /tag › /hidetag _<text>_
֯　ׅ🍃ֶ֟፝֯ㅤ /tagall 
*.・。.・゜✭・ . ・✫・゜・。.*

  ׄꤥ ╾ׅ╼ㅤׄㅤꤪꤨ  \`ɪᴀ\` ㅤꤪꤨ   ╾ׅ╼ㅤׄꤥㅤׅ
֯　ׅ🍃ֶ֟፝֯ㅤ /ia › /chatgpt _<query>_
*.・。.・゜✭・ . ・✫・゜・。.*

  ׄꤥ ╾ׅ╼ㅤׄㅤꤪꤨ \`ɪɴғᴏ\` ㅤꤪꤨ   ╾ׅ╼ㅤׄꤥㅤׅ
֯　ׅ🍃ֶ֟፝֯ㅤ /menu › /help
֯　ׅ🍃ֶ֟፝֯ㅤ /ping › /p 
֯　ׅ🍃ֶ֟፝֯ㅤ /uptime 
*.・。.・゜✭・ . ・✫・゜・。.*

  ׄꤥ ╾ׅ╼ㅤׄㅤꤪꤨ \`ɴsғᴡ\` ㅤꤪꤨ   ╾ׅ╼ㅤׄꤥㅤׅ
֯　ׅ🍃ֶ֟፝֯ㅤ /anal _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /blowjob › /bj _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /boobjob _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /cum _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /danbooru › /dbooru _<tag>_
֯　ׅ🍃ֶ֟፝֯ㅤ /fap › /paja _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /footjob _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /fuck › /coger _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /gelbooru › /gbooru _<tag>_
֯　ׅ🍃ֶ֟፝֯ㅤ /grabboobs _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /grope _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /lickpussy _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /sixnine › /69 _<mention>_.
֯　ׅ🍃ֶ֟፝֯ㅤ /spank › /nalgada _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /suckboobs _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /undress › /encuerar _<mention>_
*.・。.・゜✭・ . ・✫・゜・。.*

  ׄꤥ ╾ׅ╼ㅤׄㅤꤪꤨ \`sᴏᴄᴋᴇᴛs\` ㅤꤪꤨ   ╾ׅ╼ㅤׄꤥㅤׅ
֯　ׅ🍃ֶ֟፝֯ㅤ /bots › /sockets 
֯　ׅ🍃ֶ֟፝֯ㅤ /leave 
֯　ׅ🍃ֶ֟፝֯ㅤ /logout 
֯　ׅ🍃ֶ֟፝֯ㅤ /qr › /code 
֯　ׅ🍃ֶ֟፝֯ㅤ /self _<on|off>_
*.・。.・゜✭・ . ・✫・゜・。.*

  ׄꤥ ╾ׅ╼ㅤׄㅤꤪꤨ \`ᴜᴛɪʟs\` ㅤꤪꤨ   ╾ׅ╼ㅤׄꤥㅤׅ
֯　ׅ🍃ֶ֟፝֯ㅤ /brat _<texto>_
֯　ׅ🍃ֶ֟፝֯ㅤ /get _<url>_
֯　ׅ🍃ֶ֟፝֯ㅤ /getpic › /pfp _<mention>_
֯　ׅ🍃ֶ֟፝֯ㅤ /hd 
֯　ׅ🍃ֶ֟፝֯ㅤ /sticker › /s
*.・。.・゜✭・ . ・✫・゜・。.*
`.trim()
await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [userId],
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: my.ch,
serverMessageId: '0',
newsletterName: my.name1
},
externalAdReply: {
title: `${botname} | ${vs}`,
body: dev,
mediaType: 1,
mediaUrl: redes,
sourceUrl: redes,
thumbnail: await (await fetch(banner)).buffer(),
showAdAttribution: false,
containsAutoReply: true,
renderLargerThumbnail: false
}}}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler
