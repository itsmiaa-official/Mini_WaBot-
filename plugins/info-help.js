import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let mentionedJid = await m.mentionedJid
let userId = mentionedJid && mentionedJid[0] ? mentionedJid[0] : m.sender
let totalreg = Object.keys(global.db.data.users).length
let totalCommands = Object.values(global.plugins).filter((v) => v.help && v.tags).length

let txt = `
> ¡Hola! @${userId.split('@')[0]}, Soy *${botname}*, Aqui tienes la lista de comandos.


⭐ TIPO: » ${(conn.user.jid == global.conn.user.jid ? '𝗣rіᥒᥴі⍴ᥲᥣ 🌷' : '𝗦ᥙᑲ-𝗕᥆𝗍 ❤')}
🪻 VERSIÓN: » ${vs}
🍯 PLUGINS: » ${totalCommands}

ANIME:
⋆. ୨🌸୧˚⋆ /angry _<mention>_
> ✰ Estar enojado.
⋆. ୨🌸୧˚⋆ /bath _<mention>_
> ✰ Bañarse.
⋆. ୨🌸୧˚⋆ /bite • /morder _<mention>_
> ✰ Morder.
⋆. ୨🌸୧˚⋆ /bleh _<mention>_
> ✰ Sacar la lengua.
⋆. ୨🌸୧˚⋆ /blowkiss _<mention>_
> ✰ Lanzar un beso.
⋆. ୨🌸୧˚⋆ /blush _<mention>_
> ✰ Sonrojarse.
⋆. ୨🌸୧˚⋆ /bonk _<mention>_
> ✰ Golpear.
⋆. ୨🌸୧˚⋆ /bored • /aburrido _<mention>_
> ✰ Estar aburrido.
⋆. ୨🌸୧˚⋆ /bully _<mention>_
> ✰ Hacer bullying.
⋆. ୨🌸୧˚⋆ /call _<mention>_
> ✰ Llamar a alguien.
⋆. ୨🌸୧˚⋆ /clap _<mention>_
> ✰ Aplaudir.
⋆. ୨🌸୧˚⋆ /coffee • /cafe _<mention>_
> ✰ Tomar café.
⋆. ୨🌸୧˚⋆ /cold _<mention>_
> ✰ Mucho frío.
⋆. ୨🌸୧˚⋆ /comfort _<mention>_
> ✰ Consolar a alguien.
⋆. ୨🌸୧˚⋆ /cringe _<mention>_
> ✰ Sentir cringe.
⋆. ୨🌸୧˚⋆ /cry _<mention>_
> ✰ Llorar.
⋆. ୨🌸୧˚⋆ /cuddle _<mention>_
> ✰ Acurrucarse.
⋆. ୨🌸୧˚⋆ /curious _<mention>_
> ✰ Sentir curiosidad.
⋆. ୨🌸୧˚⋆ /dance _<mention>_
> ✰ Bailar.
⋆. ୨🌸୧˚⋆ /dramatic • /drama _<mention>_
> ✰ Hacer un drama.
⋆. ୨🌸୧˚⋆ /draw _<mention>_
> ✰ Hacer un dibujo.
⋆. ୨🌸୧˚⋆ /drunk _<mention>_
> ✰ Estar borracho.
⋆. ୨🌸୧˚⋆ /eat • /nom • /comer _<mention>_
> ✰ Comer.
⋆. ୨🌸୧˚⋆ /gaming _<mention>_
> ✰ Jugar videojuegos.
⋆. ୨🌸୧˚⋆ /handhold _<mention>_
> ✰ Tomar de la mano.
⋆. ୨🌸୧˚⋆ /happy • /feliz _<mention>_
> ✰ Saltos de felicidad.
⋆. ୨🌸୧˚⋆ /heat _<mention>_
> ✰ Sentir calor.
⋆. ୨🌸୧˚⋆ /highfive _<mention>_
> ✰ Chocar los cinco.
⋆. ୨🌸୧˚⋆ /hug _<mention>_
> ✰ Dar un abrazo.
⋆. ୨🌸୧˚⋆ /impregnate • /preg _<mention>_
> ✰ Embarazar.
⋆. ୨🌸୧˚⋆ /jump _<mention>_
> ✰ Saltar de felicidad.
⋆. ୨🌸୧˚⋆ /kill _<mention>_
> ✰ Asesinar.
⋆. ୨🌸୧˚⋆ /kiss • /muak _<mention>_
> ✰ Dar un beso.
⋆. ୨🌸୧˚⋆ /kisscheek • /beso _<mention>_
> ✰ Besar en la mejilla.
⋆. ୨🌸୧˚⋆ /laugh _<mention>_
> ✰ Reírse.
⋆. ୨🌸୧˚⋆ /lick _<mention>_
> ✰ Lamer.
⋆. ୨🌸୧˚⋆ /love • /amor _<mention>_
> ✰ Sentir atracción.
⋆. ୨🌸୧˚⋆ /nope _<mention>_
> ✰ Expresar desacuerdo.
⋆. ୨🌸୧˚⋆ /pat _<mention>_
> ✰ Dar una caricia.
⋆. ୨🌸୧˚⋆ /peek _<mention>_
> ✰ Espiar a alguien.
⋆. ୨🌸୧˚⋆ /pout _<mention>_
> ✰ Hacer pucheros.
⋆. ୨🌸୧˚⋆ /punch _<mention>_
> ✰ Dar un puñetazo.
⋆. ୨🌸୧˚⋆ /push _<mention>_
> ✰ Empujar a alguien.
⋆. ୨🌸୧˚⋆ /run • /correr _<mention>_
> ✰ Correr.
⋆. ୨🌸୧˚⋆ /sad • /triste _<mention>_
> ✰ Sentir tristeza.
⋆. ୨🌸୧˚⋆ /scared _<mention>_
> ✰ Estar asustado.
⋆. ୨🌸୧˚⋆ /scream _<mention>_
> ✰ Gritar fuerte.
⋆. ୨🌸୧˚⋆ /seduce _<mention>_
> ✰ Seducir.
⋆. ୨🌸୧˚⋆ /shy • /timido _<mention>_
> ✰ Sentir timidez.
⋆. ୨🌸୧˚⋆ /sing _<mention>_
> ✰ Cantarle a alguien.
⋆. ୨🌸୧˚⋆ /slap _<mention>_
> ✰ Dar una bofetada.
⋆. ୨🌸୧˚⋆ /sleep _<mention>_
> ✰ Dormir.
⋆. ୨🌸୧˚⋆ /smile _<mention>_
> ✰ Sonreír.
⋆. ୨🌸୧˚⋆ /smoke • /fumar _<mention>_
> ✰ Fumar.
⋆. ୨🌸୧˚⋆ /smug _<mention>_
> ✰ Presumir.
⋆. ୨🌸୧˚⋆ /sniff _<mention>_
> ✰ Olfatear a alguien.
⋆. ୨🌸୧˚⋆ /snuggle _<mention>_
> ✰ Acurrucarse con alguien.
⋆. ୨🌸୧˚⋆ /spit • /escupir _<mention>_
> ✰ Escupir.
⋆. ୨🌸୧˚⋆ /stare _<mention>_
> ✰ Mirar fijamente.
⋆. ୨🌸୧˚⋆ /step • /pisar _<mention>_
> ✰ Pisar.
⋆. ୨🌸୧˚⋆ /think _<mention>_
> ✰ Pensar.
⋆. ୨🌸୧˚⋆ /thinkhard _<mention>_
> ✰ Pensar intensamente.
⋆. ୨🌸୧˚⋆ /tickle _<mention>_
> ✰ Hacer cosquillas.
⋆. ୨🌸୧˚⋆ /trip _<mention>_
> ✰ Tropezar accidentalmente.
⋆. ୨🌸୧˚⋆ /walk _<mention>_
> ✰ Caminar.
⋆. ୨🌸୧˚⋆ /wave _<mention>_
> ✰ Saludar.
⋆. ୨🌸୧˚⋆ /wink _<mention>_
> ✰ Guiñar.

DOWNLOAD:
⋆. ୨🌸୧˚⋆ /facebook • /fb _<url>_
> ✰ Descarga videos de facebook.
⋆. ୨🌸୧˚⋆ /mediafire • /mf _<url|query>_
> ✰ Descarga archivos de mediafire.
⋆. ୨🌸୧˚⋆ /play • play2 • /mp3 • /mp4 • /playaudio • /playvideo _<url|query>_
> ✰ Descarga videos de youtube.
⋆. ୨🌸୧˚⋆ /tiktok • /tt _<url|query>_
> ✰ Descarga videos de tiktok.
╰───────────────✿

GRUPO:
⋆. ୨🌸୧˚⋆ /bot _<on|off>_
> ✰ Activa y desactiva el bot en el grupo.
⋆. ୨🌸୧˚⋆ /close • /open 
> ✰ Cierra y abre el grupo.
⋆. ୨🌸୧˚⋆ /demote _<mention>_
> ✰ Degrada a un usuario de administrador.
⋆. ୨🌸୧˚⋆ /gpbanner • /groupimg 
> ✰ Cambia la imagen del grupo.
⋆. ୨🌸୧˚⋆ /gpdesc • groupdesc 
> ✰ Cambia la descripción del grupo.
⋆. ୨🌸୧˚⋆ /gpname • /groupname 
> ✰ Cambia el nombre del grupo.
⋆. ୨🌸୧˚⋆ /groupinfo • /gp 
> ✰ Muestra la información del grupo.
⋆. ୨🌸୧˚⋆ /kick _<mention>_
> ✰ Expulsa a un usuario del grupo.
⋆. ୨🌸୧˚⋆ /kickall • /purgar 
> ✰ Expulsa a todos los usuarios del grupo (modo purga).
⋆. ୨🌸୧˚⋆ /link • /linkgrupo 
> ✰ Obtiene el enlace mágico del grupo.
⋆. ୨🌸୧˚⋆ /on • /off _<welcome|alerts|alertas|antilinks|antienlaces|onlyadmin|adminonly|nsfw>_
> ✰ Desactiva o activa las configuraciones del grupo.
⋆. ୨🌸୧˚⋆ /promote _<mention>_
> ✰ Promueve a un usuario a administrador.
⋆. ୨🌸୧˚⋆ /setprimary _<mention>_
> ✰ Establece un bot como primario del grupo.
⋆. ୨🌸୧˚⋆ /tag • /hidetag _<text>_
> ✰ Menciona a todos los usuarios del grupo.
⋆. ୨🌸୧˚⋆ /tagall 
> ✰ Menciona a todos los usuarios con estilo.

IA:
⋆. ୨🌸୧˚⋆ /ia • /chatgpt _<query>_
> ✰ Realiza una petición a chatgpt.

INFO:
⋆. ୨🌸୧˚⋆ /menu • /help _<category>_
> ✰ Muestra la lista de comandos.
⋆. ୨🌸୧˚⋆ /ping • /p 
> ✰ Muestra la velocidad del Bot.
⋆. ୨🌸୧˚⋆ /staff 
> ✰ Muestra los colaboradores de la bot.
⋆. ୨🌸୧˚⋆ /uptime 
> ✰ Muestra el tiempo activa de la bot.

NSFW:
⋆. ୨🌸୧˚⋆ /anal _<mention>_
> ✰ Hacer un anal.
⋆. ୨🌸୧˚⋆ /blowjob • /bj _<mention>_
> ✰ Dale una mamada a un usuario.
⋆. ୨🌸୧˚⋆ /boobjob _<mention>_
> ✰ Hacerle una rusa a un usuario.
⋆. ୨🌸୧˚⋆ /cum _<mention>_
> ✰ Venirse en alguien.
⋆. ୨🌸୧˚⋆ /danbooru • /dbooru _<tag>_
> ✰ Buscar imágenes en danbooru.
⋆. ୨🌸୧˚⋆ /fap • /paja _<mention>_
> ✰ Haserse una paja.
⋆. ୨🌸୧˚⋆ /footjob _<mention>_
> ✰ Hacer una paja con los pies a un usuario.
⋆. ୨🌸୧˚⋆ /fuck • /coger _<mention>_
> ✰ Coger a un usuario.
⋆. ୨🌸୧˚⋆ /gelbooru • /gbooru _<tag>_
> ✰ Buscar imágenes en gelbooru.
⋆. ୨🌸୧˚⋆ /grabboobs _<mention>_
> ✰ Agarrar las tetas de un usuario.
⋆. ୨🌸୧˚⋆ /grope _<mention>_
> ✰ Manosear las nalgas a un usuario.
⋆. ୨🌸୧˚⋆ /lickpussy _<mention>_
> ✰ Lamer un coño de un usuario.
⋆. ୨🌸୧˚⋆ /sixnine • /69 _<mention>_
> ✰ Hacer un 69 con un usuario.
⋆. ୨🌸୧˚⋆ /spank • /nalgada _<mention>_
> ✰ Darle una nalgada a un usuario.
⋆. ୨🌸୧˚⋆ /suckboobs _<mention>_
> ✰ Chupar las tetas de un usuario.
⋆. ୨🌸୧˚⋆ /undress • /encuerar _<mention>_
> ✰ Encuerate o encuera a un usuario.

SOCKETS:
⋆. ୨🌸୧˚⋆ /bots • /sockets 
> ✰ Muestra el número de sockets conectados.
⋆. ୨🌸୧˚⋆ /leave 
> ✰ El bot abandona el grupo actual.
⋆. ୨🌸୧˚⋆ /logout 
> ✰ Cierra la sesión del socket.
⋆. ୨🌸୧˚⋆ /qr • /code 
> ✰ Vincular un nuevo socket a tu número.
⋆. ୨🌸୧˚⋆ /self _<on|off>_
> ✰ Haz privado o público tu socket.

UTILS:
⋆. ୨🌸୧˚⋆ /brat _<texto>_
> ✰ Crea un sticker con texto.
⋆. ୨🌸୧˚⋆ /get _<url>_
> ✰ Realiza solicitudes get a páginas web.
⋆. ୨🌸୧˚⋆ /getpic • /pfp _<mention>_
> ✰ Ver la foto de perfil de un usuario.
⋆. ୨🌸୧˚⋆ /hd 
> ✰ Mejora la calidad de una imagen.
⋆. ୨🌸୧˚⋆ /sticker • /s 
> ✰ Convierte imágenes o videos a stickers.
`.trim()
await conn.sendMessage(m.chat, { 
text: txt,
contextInfo: {
mentionedJid: [userId],
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterJid: my.ch,
serverMessageId: '',
newsletterName: my.name1
},
externalAdReply: {
title: botname,
body: dev,
mediaType: 1,
mediaUrl: redes,
sourceUrl: redes,
thumbnail: await (await fetch(banner)).buffer(),
showAdAttribution: false,
containsAutoReply: true,
renderLargerThumbnail: true
}}}, { quoted: m })
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = ['menu', 'menú', 'help']

export default handler
