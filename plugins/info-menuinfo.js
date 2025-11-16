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


˚ ₊ ‧  ꒰📝꒱  — \`『 Info 』\`
✿ *#menu › #help* + _<category>_
> _*Muestra la lista de comandos.*_
✿ *#ping › #p* 
> _*Muestra la velocidad del Bot.*_
✿ *#staff* 
> _*Muestra los colaboradores de la bot.*_
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
handler.command = ['menuinfo'];

export default handler;
