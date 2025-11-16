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


˚ ₊ ‧  ꒰✏️꒱  — \`『 Personalice 』\`
✿ *#setname* + _<nombre>_
> _*cambia el nombre del bot.*_
✿ *#setbanner* + _<imagenURL>_
> _*cambia el banner dek bot.*_
✿ *#setmoneda* + _<moneda>_
> _*cambia la moneda del bot.*_
✿ *#viewbanner*
> _*ver el banner configurado.*_
✿ *#deletebanner*
> _*eliminar el banner configurado.*_
✿ *#resetpreferences*
> _*elimina la personalización.*_

˚ ₊ ‧  ꒰🏮꒱  — \`『 Anime 』\`
✿ *#peek* + _<mention>_
> _*Espiar a alguien.*_
✿ *#comfort* + _<mention>_
> _*Consolar a alguien.*_
✿ *#thinkhard* + _<mention>_
> _*Pensar intensamente.*_
✿ *#curious* + _<mention>_
> _*Sentir curiosidad.*_
✿ *#sniff* + _<mention>_
> _*Olfatear a alguien.*_
✿ *#stare* + _<mention>_
> _*Mirar fijamente.*_
✿ *#trip* + _<mention>_
> _*Tropezar accidentalmente.*_
✿ *#blowkiss* + _<mention>_
> _*Lanzar un beso.*_
✿ *#snuggle* + _<mention>_
> _*Acurrucarse con alguien.*_
✿ *#angry* + _<mention>_
> _*Estar enojado.*_
✿ *#bleh* + _<mention>_
> _*Sacar la lengua.*_
✿ *#bored › #aburrido* + _<mention>_
> _*Estar aburrido.*_
✿ *#clap* + _<mention>_
> _*Aplaudir.*_
✿ *#coffee › #cafe* + _<mention>_
> _*Tomar café.*_
✿ *#cold* + _<mention>_
> _*Mucho frío.*_
✿ *#sing* + _<mention>_
> _*Cantarle a alguien.*_
✿ *#tickle* + _<mention>_
> _*Hacer cosquillas.*_
✿ *#scream* + _<mention>_
> _*Gritar fuerte.*_
✿ *#push* + _<mention>_
> _*Empujar a alguien.*_
✿ *#nope* + _<mention>_
> _*Expresar desacuerdo.*_
✿ *#jump* + _<mention>_
> _*Saltar de felicidad.*_
✿ *#heat* + _<mention>_
> _*Sentir calor.*_
✿ *#gaming* + _<mention>_
> _*Jugar videojuegos.*_
✿ *#draw* + _<mention>_
> _*Hacer un dibujo.*_
✿ *#call* + _<mention>_
> _*Llamar a alguien.*_
✿ *#dramatic › #drama* + _<mention>_
> _*Hacer un drama.*_
✿ *#drunk* + _<mention>_
> _*Estar borracho.*_
✿ *#impregnate › #preg* + _<mention>_
> _*Embarazar.*_
✿ *#kisscheek › #beso* + _<mention>_
> _*Besar en la mejilla.*_
✿ *#laugh* + _<mention>_
> _*Reírse.*_
✿ *#love › #amor* + _<mention>_
> _*Sentir atracción.*_
✿ *#pout* + _<mention>_
> _*Hacer pucheros.*_
✿ *#punch* + _<mention>_
> _*Dar un puñetazo.*_
✿ *#run › #correr* + _<mention>_
> _*Correr.*_
✿ *#sad › #triste* + _<mention>_
> _*Sentir tristeza.*_
✿ *#scared* + _<mention>_
> _*Estar asustado.*_
✿ *#seduce* + _<mention>_
> _*Seducir.*_
✿ *#shy › #timido* + _<mention>_
> _*Sentir timidez.*_
✿ *#sleep* + _<mention>_
> _*Dormir.*_
✿ *#smoke › #fumar* + _<mention>_
> _*Fumar.*_
✿ *#spit › #escupir* + _<mention>_
> _*Escupir.*_
✿ *#step › #pisar* + _<mention>_
> _*Pisar.*_
✿ *#think* + _<mention>_
> _*Pensar.*_
✿ *#walk* + _<mention>_
> _*Caminar.*_
✿ *#hug* + _<mention>_
> _*Dar un abrazo.*_
✿ *#kill* + _<mention>_
> _*Asesinar.*_
✿ *#eat › #nom › #comer* + _<mention>_
> _*Comer.*_
✿ *#kiss › #muak* + _<mention>_
> _*Dar un beso.*_
✿ *#wink* + _<mention>_
> _*Guiñar.*_
✿ *#pat* + _<mention>_
> _*Dar una caricia.*_
✿ *#happy › #feliz* + _<mention>_
> _*Saltos de felicidad.*_
✿ *#bully* + _<mention>_
> _*Hacer bullying.*_
✿ *#bite › #morder* + _<mention>_
> _*Morder.*_
✿ *#blush* + _<mention>_
> _*Sonrojarse.*_
✿ *#wave* + _<mention>_
> _*Saludar.*_
✿ *#bath* + _<mention>_
> _*Bañarse.*_
✿ *#smug* + _<mention>_
> _*Presumir.*_
✿ *#smile* + _<mention>_
> _*Sonreír.*_
✿ *#highfive* + _<mention>_
> _*Chocar los cinco.*_
✿ *#handhold* + _<mention>_
> _*Tomar de la mano.*_
✿ *#cringe* + _<mention>_
> _*Sentir cringe.*_
✿ *#bonk* + _<mention>_
> _*Golpear.*_
✿ *#cry* + _<mention>_
> _*Llorar.*_
✿ *#lick* + _<mention>_
> _*Lamer.*_
✿ *#slap* + _<mention>_
> _*Dar una bofetada.*_
✿ *#dance* + _<mention>_
> _*Bailar.*_
✿ *#cuddle* + _<mention>_
> _*Acurrucarse.*_

˚ ₊ ‧  ꒰📲꒱  — \`『 Download 』\`
✿ *#play › #play2 › #mp3 › #mp4 › #playaudio › #playvideo* + _<url|query>_
> _*Descarga videos de youtube.*_
✿ *#facebook › #fb* + _<url>_
> _*Descarga videos de facebook.*_
✿ *#mediafire › #mf* + _<url|query>_
> _*Descarga archivos de mediafire.*_
✿ *#tiktok › #tt* + _<url|query>_
> _*Descarga videos de tiktok.*_

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
> _*Cambia el nombre del grupo.*_

˚ ₊ ‧  ꒰📝꒱  — \`『 Info 』\`
✿ *#menu › #help* + _<category>_
> _*Muestra la lista de comandos.*_
✿ *#ping › #p* 
> _*Muestra la velocidad del Bot.*_
✿ *#staff* 
> _*Muestra los colaboradores de la bot.*_

˚ ₊ ‧  ꒰🤖꒱  — \`『 Sockets 』\`
✿ *#bots › #sockets* 
> _*Muestra el número de sockets conectados.*_
✿ *#logout* 
> _*Cierra la sesión del socket.*_
✿ *#qr › #code* 
> _*Vincular un nuevo socket a tu número.*_
✿ *#leave* 
> _*El bot abandona el grupo actual.*_
✿ *#self* + _<on|off>_
> _*Haz privado o público tu socket.*_

˚ ₊ ‧  ꒰🖥꒱  — \`『 Ia 』\`
✿ *#ia › #chatgpt* + _<query>_
> _*Realiza una petición a chatgpt.*_

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

˚ ₊ ‧  ꒰🛠꒱  — \`『 Utils 』\`
✿ *#sticker › #s* 
> _*Convierte imágenes o videos a stickers.*_
✿ *#getpic › #pfp* + _<mention>_
> _*Ver la foto de perfil de un usuario.*_
✿ *#get* + _<url>_
> _*Realiza solicitudes get a páginas web.*_
✿ *#hd* 
> _*Mejora la calidad de una imagen.*_
✿ *#brat* + _<texto>_
> _*Crea un sticker con texto.*_`;

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
    },
    // 🔽🔽 AQUÍ VAN LOS BOTONES 🔽🔽
    buttons: [
      {
        buttonId: "#code",
        buttonText: { displayText: "𝖲𝖤𝖱-𝖡𝖮𝖳" },
        type: 1
      }
    ],
    headerType: 1
  }
);
        
/*await conn.sendMessage(
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
);*/
    } catch (error) {
        conn.reply(m.chat, `❌ Error al cargar el menú: ${error.message}`, m);
    }
};

handler.help = ['menu'];
handler.tags = ['info'];
handler.command = ['menu'];

export default handler;
