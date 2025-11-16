import fs from 'fs';

const filePath = './lib/personalize.json';

let handler = async (m, { conn }) => {
    try {
        const data = JSON.parse(fs.readFileSync(filePath));

        const globalConfig = data.global;
        const defaultConfig = data.default;

        const botName = globalConfig.botName || defaultConfig.botName;
        const currency = globalConfig.currency || defaultConfig.currency;
        const imagenes = globalConfig.imagenes.length > 0 ? globalConfig.imagenes : defaultConfig.imagenes;

        const randomimagenesUrl = imagenes[Math.floor(Math.random() * imagenes.length)];

        const menuMessage = `
├┈ ↷ \`${botName}.\`
├┈• ✐; ₊˚✦୧︰ \`${vs}.\`
├┈┈・──・──・﹕₊˚ ✦・୨୧・        

⭐ ¡𝖧𝗈𝗅𝖺! 𝖲𝗈𝗒 ${botName}, 𝖺𝗊𝗎𝗂 𝗍𝗂𝖾𝗇𝖾𝗌 𝗅𝖺 𝗅𝗂𝗌𝗍𝖺 𝖽𝖾 𝖼𝗈𝗆𝖺𝗇𝖽𝗈𝗌 🌸
\`💰 𝖬𝗈𝗇𝖾𝖽𝖺 𝖺𝖼𝗍𝗎𝖺𝗅:\` ¥ ${currency}

\`Canal Oficial:\`
https://whatsapp.com/channel/0029Van1PcoFSAt50tWN4d0x

\`Canal secundario:\`
https://whatsapp.com/channel/0029Vb6GYInD8SDuyzHk3f3l


˚ ₊ ‧  ꒰🔞꒱  — \`『 Nsfw 』\`
✿ *#danbooru › #dbooru* + _<tag>_
> _*Buscar imágenes en danbooru.*_
✿ *#gelbooru › #gbooru* + _<tag>_
> _*Buscar imágenes en gelbooru.*_
✿ *#blowjob › #bj* + _<mention>_
> _*Dale una mamada a un usuario.*_
✿ *#boobjob* + _<mention>_
> _*Hacerle una rusa a un usuario.*_
✿ *#cum* + _<mention>_
> _*Venirse en alguien.*_
✿ *#fap › #paja* + _<mention>_
> _*Haserse una paja.*_
✿ *#anal* + _<mention>_
> _*Hacer un anal.*_
✿ *#grabboobs* + _<mention>_
> _*Agarrar las tetas de un usuario.*_
✿ *#footjob* + _<mention>_
> _*Hacer una paja con los pies a un usuario.*_
✿ *#grope* + _<mention>_
> _*Manosear las nalgas a un usuario.*_
✿ *#undress › #encuerar* + _<mention>_
> _*Encuerate o encuera a un usuario.*_
✿ *#sixnine › #69* + _<mention>_
> _*Hacer un 69 con un usuario.*_
✿ *#lickpussy* + _<mention>_
> _*Lamer un coño de un usuario.*_
✿ *#spank › #nalgada* + _<mention>_
> _*Darle una nalgada a un usuario.*_
✿ *#fuck › #coger* + _<mention>_
> _*Coger a un usuario.*_
✿ *#suckboobs* + _<mention>_
> _*Chupar las tetas de un usuario.*_

`;

await conn.sendMessage(
  m.chat,
  {
    text: menuMessage,
    mentions: [m.sender],
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: my.ch,//"120363345778623279@newsletter",
        serverMessageId: '',
        newsletterName: my.name1 //"Canal de prueba"  
      },
      externalAdReply: {
        title: `${botName}`,
        body: `${copy} ${author}`,
        thumbnailUrl: randomimagenesUrl,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }
);
    } catch (error) {
        conn.reply(m.chat, `❌ Error al cargar el menú: ${error.message}`, m);
    }
};

handler.help = ['menu'];
handler.tags = ['info'];
handler.command = ['menunsfw'];

export default handler;
