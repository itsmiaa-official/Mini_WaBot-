import fetch from "node-fetch";
import yts from "yt-search";

const CAUSA_API_KEY = 'causa-53f9867cf7fdec8a';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  const name = conn.getName(m.sender);

  if (!args[0]) {
    return conn.reply(m.chat, `> ✰ *¡Hey ${name}!* ¿Qué buscas?\n\nEjemplo:\n${usedPrefix}play + canción`, m, { contextInfo });
  }

  const isMode = ["audio", "video"].includes(args[0].toLowerCase());
  const queryOrUrl = isMode ? args.slice(1).join(" ") : args.join(" ");

  // --- LÓGICA DE DESCARGA DIRECTA ---
  if (isMode && /youtube\.com|youtu\.be/i.test(queryOrUrl)) {
    const mode = args[0].toLowerCase();
    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
  

    try {
      const apiUrl = `https://rest.apicausas.xyz/api/v1/descargas/youtube?url=${encodeURIComponent(queryOrUrl)}&type=${mode}&apikey=${CAUSA_API_KEY}`;
      const res = await fetch(apiUrl);
      const json = await res.json();

      if (!json.status || !json.data) throw new Error("La API no devolvió datos válidos.");

      const { title, download } = json.data;
      const downloadUrl = download.url;

      if (mode === 'audio') {
        // Enviar como audio (se puede cambiar a document si falla)
        await conn.sendMessage(m.chat, { 
          audio: { url: downloadUrl }, 
          mimetype: "audio/mp4", // MP4 es más compatible para audios de YT
          fileName: `${title}.mp3`,
          ptt: false // Cambia a true si quieres que sea nota de voz
        }, { quoted: m });
        await m.react("🎧");
      } else {
        await conn.sendMessage(m.chat, { 
          video: { url: downloadUrl }, 
          caption: `🎬 *Título:* ${title}`, 
          mimetype: "video/mp4"
        }, { quoted: m });
        await conn.sendMessage(m.chat, { react: { text: '📽', key: m.key } })
  
      }
      return;
    } catch (e) {
      console.error("Error en descarga:", e);
      await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } })
  
      return conn.reply(m.chat, `💔 *¡Rayos!* Hubo un problema al procesar el audio. Puede que el servidor esté saturado.`, m);
    }
  }

  // --- LÓGICA DE BÚSQUEDA ---
  await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
  
  try {
    const search = await yts(queryOrUrl);
    const video = search.videos[0];

    if (!video) return conn.reply(m.chat, `😵 No encontré nada con: "${queryOrUrl}"`, m);

    const caption = `
*⎯⎯ㅤㅤִㅤㅤ୨   ❀  ୧ㅤㅤִ   ㅤ⎯⎯*
> ➪ <${video.title}>
   *⎯⎯ㅤㅤִㅤㅤ୨   ❒  ୧ㅤㅤִ   ㅤ⎯⎯*
> ₊·( ❀ ) \`Duración »\` *${video.timestamp}*
> ₊·( ꕥ ) \`Vistas »\` *${video.views.toLocaleString()}*
> ₊·( ✥ ) \`Calidad »\` 130kbps
> ₊·( ꕤ ) \`Enlace »\` ${video.url}
   *⎯⎯ㅤㅤִㅤㅤ୨   ❒  ୧ㅤㅤִ   ㅤ⎯⎯*
`;

    // IMPORTANTE: Los botones interactivos de WhatsApp Business API fallan en muchos mods/versiones.
    // Si no funcionan, usa un mensaje de texto normal con las opciones.
    const buttons = [
      { buttonId: `${usedPrefix}${command} audio ${video.url}`, buttonText: { displayText: '🎵 Audio' }, type: 1 },
      { buttonId: `${usedPrefix}${command} video ${video.url}`, buttonText: { displayText: '📹 Video' }, type: 1 }
    ];

    await conn.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption,
      footer: '\`Selecciona una opción abajo\`',
      buttons,
      headerType: 4,
    }, { quoted: m });

  } catch (e) {
    console.error("Error en búsqueda:", e);
    conn.reply(m.chat, `💔 Error en la búsqueda.`, m);
  }
};

handler.help = ['play <texto>'];
handler.tags = ['descargas'];
handler.command = ['play', 'yt', 'playaudio']

export default handler;

/*import fetch from "node-fetch"
import yts from "yt-search"
import axios from "axios";

const youtubeRegexID = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]{11})/

const handler = async (m, { conn, text, usedPrefix, command }) => {
  
try {
if (!text.trim()) return conn.reply(m.chat, `🔔 *Por favor, ingresa el nombre o link del archivo a descargar.*`, m)

    let videoIdMatch = text.match(youtubeRegexID)
    let search = await yts(videoIdMatch ? 'https://youtu.be/' + videoIdMatch[1] : text)
    let video = videoIdMatch
      ? search.all.find(v => v.videoId === videoIdMatch[1]) || search.videos.find(v => v.videoId === videoIdMatch[1])
      : search.videos?.[0]

    if (!video) return conn.reply(m.chat, '❌ *No se encontraron resultados para tu búsqueda.*', m)
   
  //  await m.react('⏱️')
    const { title, thumbnail, timestamp, views, ago, url, author } = video
    const vistas = formatViews(views)
    const canal = author?.name || 'Desconocido'
    
    const infoMessage = 
    `*🎵 Titulo:* ${title}
    
> *🎬 Canal:* ${canal}
     
\`👀 Vistas:\` ${vistas}   
\`⏳ Duración:\` ${timestamp}
\`🤩 Calidad:\` 130kbps
\`📆 Publicado:\` ${ago}
\`🔗 Link:\` ${url}

${dev}`

    const thumb = (await conn.getFile(thumbnail))?.data
    const external = {
      contextInfo: {
        externalAdReply: {
          title: title,
          body: 'Descargando archivo',
          mediaType: 1,
          previewType: 0,
          mediaUrl: url,
          sourceUrl: url,
          thumbnail: thumb,
          renderLargerThumbnail: true
        }
      }
    }

    await conn.reply(m.chat, infoMessage, m, external)

    if (['playaudio','play'].includes(command)) {
      try {
        const res = await fetch(`https://api.vreden.my.id/api/v1/download/youtube/audio?url=${url}&quality=130`)
        const json = await res.json()
        
        if (!json.result?.download?.url) throw '*⚠️ No se obtuvo un enlace válido.*'

        await conn.sendMessage(m.chat, {
          audio: { url: json.result.download.url },
          mimetype: 'audio/mpeg', 
          fileName: json.result.download.filename || `${json.result.metadata?.title || title}.mp3`,
          contextInfo: {
            externalAdReply: {
              title: title,
              body: `${dev}`,
              mediaType: 1,
              tthumbnail thumb,
              mediaUrl: url,
              sourceUrl: url,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: m })

     //   await m.react('✅')
      } catch (e) {
        return conn.reply(m.chat, '*❌ No se pudo enviar el audio. El archivo podría ser demasiado pesado o hubo un error en la generación del enlace.*', m)
      }
    }
    
    else if (['playvideo','play2'].includes(command)) {
      try {
        const res = await fetch(`https://api.stellarwa.xyz/dow/ytmp4?url=${url}&apikey=Diamond`)
        const json = await res.json()

        if (!json.status || !json.data?.dl) throw '⚠️ *No se obtuvo enlace de video.*'
        const data = json.data

        const size = await getSize(data.dl)
        const sizeStr = size ? await formatSize(size) : 'Desconocido'

        let caption = `🎬 *Título:*
> ${data.title}`
       .trim()

        await conn.sendFile(
          m.chat,
          data.dl,
          `${data.title || 'video'}.mp4`,
          caption,
          m
        )

      //  await m.react('✅')
      } catch (e) {
        return conn.reply(m.chat, '⚠️ *No se pudo enviar el video. El archivo podría ser muy pesado o hubo un error en el enlace.*', m)
      }
    }

    else {
      return conn.reply(m.chat, '✧︎ Comando no reconocido.', m)
    }

  } catch (err) {
    return m.reply(`❌ *Ocurrió un error* \n${err}`)
  }
}

handler.command = handler.help = ['playaudio','play','playvideo', 'p]ay2']
handler.tags = ['descargas']

export default handler


function formatViews(views) {
  if (views === undefined) return "No disponible"
  if (views >= 1e9) return `${(views / 1e9).toFixed(1)}B (${views.toLocaleString()})`
  if (views >= 1e6) return `${(views / 1e6).toFixed(1)}M (${views.toLocaleString()})`
  if (views >= 1e3) return `${(views / 1e3).toFixed(1)}K (${views.toLocaleString()})`
  return views.toString()
}

async function getSize(downloadUrl) {
  try {
    const response = await axios.head(downloadUrl, { maxRedirects: 5 });
    const length = response.headers['content-length'];
    return length ? parseInt(length, 10) : null;
  } catch (error) {
    console.error("Error al obtener el tamaño:", error.message);
    return null;
  }
}

async function formatSize(bytes) {
  const units = ['B', 'KB', 'MB', 'GB'];
  let i = 0;
  if (!bytes || isNaN(bytes)) return 'Desconocido';
  while (bytes >= 1024 && i < units.length - 1) {
    bytes /= 1024;
    i++;
  }
  return `${bytes.toFixed(2)} ${units[i]}`;
}
*/
