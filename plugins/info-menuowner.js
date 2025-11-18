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
¡𝐇𝐨𝐥𝐚 𝐔𝐬𝐮𝐚𝐫𝐢𝐨! 𝐒𝐨𝐲 ${botName} 𝐀𝐪𝐮𝐢 𝐭𝐢𝐞𝐧𝐞𝐬 𝐥𝐚 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬.

╭━━I N F O-B O-T━━
┃Creador: ${author}
┃Baileys: Multi device
┃Usuario: *${m.pushName}*
╰━━━━━━━━━━━━━

\`𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 𝐩𝐚𝐫𝐚 𝐎𝐰𝐧𝐞𝐫𝐬\`

✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#update*
> ✧ Actualiza la bot a la última versión. 
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍  *#restart*
> ✧ Reinicia la Bot. 
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#bcprivado*
> ✧ La bot dará un aviso en chats privados. 
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#bcgrupos*
> ✧ La bot dará un aviso en Grupos.
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#kickall*
> ✧ La creadora vaciara un grupo.
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#setname*
> ✧ Cambia el nombre del bot. 
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#setbanner*
> ✧ Cambia el banner del bot.
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#setmoneda*
> ✧ Cambia la moneda del bot.
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#viewbanner*
> ✧ Ve el banner configurado.
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#delbanner*
> ✧ Elimina el banner configurado.
✶̸᳟ׄׄ🌸⠞̸̷̶ׁ֪ ─࡙ׄ─࠭╍ *#resetpreferences*
> ✧ Elimina la personalización.
`;
 
await conn.sendMessage(
  m.chat,
  {
    text: menuMessage,
    mentions: [m.sender],
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: my.ch,
        serverMessageId: '',
        newsletterName: my.name1 
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
handler.command = ['menuowner','helpowner'];

export default handler;
