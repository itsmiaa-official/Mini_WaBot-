export async function before(m, { conn }) {

var canal = 'https://whatsapp.com/channel/0029Vb73g1r1NCrTbefbFQ2T'
var canal2 = 'https://whatsapp.com/channel/0029Vb6GYInD8SDuyzHk3f3l'
var canal3 = 'https://whatsapp.com/channel/0029Vb6KW2Y0AgW5RA4QIS1B'
var api = 'https://instagram.com/_.benjaxzz'
var git = 'https://github.com/benjaxzz'
var md = 'https://github.com/benjaxzz/Nyxira-v2'

globalThis.redes = [canal, canal2, canal3, api, git, md].getRandom()

  const canales = Object.entries(global.my)
  .reduce((acc, [key, value]) => {
    if (key.startsWith('ch')) {
      const index = key.slice(2)
      const nombre = global.my[`name${index}`]
      if (nombre) {
        acc.push({ id: value, nombre })
      }
    }
    return acc
  }, [])

const channelRD = canales[Math.floor(Math.random() * canales.length)]

global.fake = { contextInfo: { isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '0', newsletterName: channelRD.nombre, }, externalAdReply: { showAdAttribution: true, title: packname, body: dev, mediaUrl: null, description: null, previewType: "PHOTO", thumbnailUrl: icon, sourceUrl: redes, mediaType: 1, renderLargerThumbnail: false }}}

global.rcanal = {
  contextInfo: {
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: channelRD.id,
      newsletterName: channelRD.nombre,
      serverMessageId: '0'
    }
  }
}

}
