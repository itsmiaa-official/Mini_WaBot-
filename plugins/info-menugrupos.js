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

˚ ₊ ‧  ꒰👥꒱  — \`『 Grupo 』\`
✿ *#bot* + _<on|off>_
> _*Activa y desactiva el bot en el grupo.*_
✿ *#promote* + _<mention>_
> _*Promueve a un usuario a administrador.*_
✿ *#setprimary* + _<mention>_
> _*Establece un bot como primario del grupo.*_
✿ *#demote* + _<mention>_
> _*Degrada a un usuario de administrador.*_
✿ *#close › #open* 
> _*Cierra y abre el grupo.*_
✿ *#groupinfo › #gp* 
> _*Muestra la información del grupo.*_
✿ *#on › #off* + _<welcome|alerts|alertas|antilinks|antienlaces|onlyadmin|adminonly|nsfw>_
> _*Desactiva o activa las configuraciones del grupo.*_
✿ *#tag › #hidetag* + _<text>_
> _*Menciona a todos los usuarios del grupo.*_
✿ *#kick* + _<mention>_
> _*Expulsa a un usuario del grupo.*_
✿ *#kickall › #purgar* 
> _*Expulsa a todos los usuarios del grupo (modo purga).*_
✿ *#link › #linkgrupo* 
> _*Obtiene el enlace mágico del grupo.*_
✿ *#tagall* 
> _*Menciona a todos los usuarios con estilo.*_
✿ *#gpdesc › #groupdesc* 
> _*Cambia la descripción del grupo.*_
✿ *#gpbanner › #groupimg* 
> _*Cambia la imagen del grupo.*_
✿ *#gpname › #groupname* 
> _*Cambia el nombre del grupo.*_`;

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
handler.command = ['menu','menugrupo']

export default handler;
