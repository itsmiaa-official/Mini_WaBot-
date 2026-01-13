import { WAMessageStubType } from '@whiskeysockets/baileys'

const IMAGE_URL = 'https://files.catbox.moe/a8o9db.jpg'

async function generarBienvenida({ userId, groupMetadata, chat }) {
  const username = `@${userId.split('@')[0]}`

  const fecha = new Date().toLocaleDateString('es-ES', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const groupSize = groupMetadata.participants.length + 1
  const desc = typeof groupMetadata.desc === 'string'
    ? groupMetadata.desc
    : 'Sin descripción'

  const mensaje = (chat.sWelcome || 'Edita con el comando "setwelcome"')
    .replace(/{usuario}/g, username)
    .replace(/{grupo}/g, `*${groupMetadata.subject}*`)
    .replace(/{desc}/g, desc)

  const caption = `❀ 𝖡𝗂𝖾𝗇𝗏𝖾𝗇𝗂𝖽𝗈 𝖺 *${groupMetadata.subject}*
✰ *${username}*

• Disfruta tu estadía en el grupo!!! ★

> ✐ Usa *#help* para ver los comandos.
> ☄︎ mitzuki.vercel.app`

return { pp: IMAGE_URL, caption, mentions: [userId] }
  //return { caption, mentions: [userId] }
}

async function generarDespedida({ userId, groupMetadata, chat }) {
  const username = `@${userId.split('@')[0]}`

  const fecha = new Date().toLocaleDateString('es-ES', {
    timeZone: 'America/Argentina/Buenos_Aires',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })

  const groupSize = groupMetadata.participants.length - 1
  const desc = typeof groupMetadata.desc === 'string'
    ? groupMetadata.desc
    : 'Sin descripción'

  const mensaje = (chat.sBye || 'Edita con el comando "setbye"')
    .replace(/{usuario}/g, username)
    .replace(/{grupo}/g, groupMetadata.subject)
    .replace(/{desc}/g, `*${desc}*`)

  const caption = `❀ 𝖠𝖽𝗂𝗈𝗌 𝖽𝖾 *${groupMetadata.subject}*

✰ *${username}*

• Vuelve pronto al grupo!!! ★

> ✐ Usa *#help* para ver los comandos.
> ☄︎ mitzuki.vercel.app`
  
return { pp: IMAGE_URL, caption, mentions: [userId] }
  // return { caption, mentions: [userId] }
}

let handler = m => m

handler.before = async function (m, { conn, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return !0

  const chat = global.db.data.chats[m.chat]
  if (!chat) return !0

  const primaryBot = chat.primaryBot
  if (primaryBot && conn.user.jid !== primaryBot) throw !1

  const userId = m.messageStubParameters[0]

  // 🔥 BIENVENIDA
  if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    const { caption, mentions } =
      await generarBienvenida({ userId, groupMetadata, chat })

    await conn.sendMessage(
      m.chat,
      {
        text: caption,
        contextInfo: {
          mentionedJid: mentions,
          externalAdReply: {
            title: botname,
            body: dev,
            mediaType: 1,
            thumbnailUrl: IMAGE_URL,
            renderLargerThumbnail: true,
            showAdAttribution: false,
            sourceUrl: 'https://www.instagram.com/its.chinitaaa_'
          }
        }
      },
      { quoted: null }
    )
  }

  // 🔥 DESPEDIDA
  if (
    chat.welcome &&
    (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE ||
     m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE)
  ) {
    const { caption, mentions } =
      await generarDespedida({ userId, groupMetadata, chat })

    await conn.sendMessage(
      m.chat,
      {
        text: caption,
        contextInfo: {
          mentionedJid: mentions,
          externalAdReply: {
            title: botname,
            body: dev,
            mediaType: 1,
            thumbnailUrl: IMAGE_URL,
            renderLargerThumbnail: true,
            showAdAttribution: false,
            sourceUrl: 'https://www.instagram.com/its.chinitaaa_'
          }
        }
      },
      { quoted: null }
    )
  }
}

export { generarBienvenida, generarDespedida }
export default handler



/*
• _Ahora somos ${groupSize} Miembros._
ꕥ Fecha » ${fecha}
  */


/*
import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  const chat = globalThis.db.data.chats[m.chat];
  const nombre = globalThis.db.data.users[m.messageStubParameters[0]]?.name || {};
  const botId = conn.user.jid;

  const ppUrl = await conn.profilePictureUrl(m.messageStubParameters[0], 'image')
    .catch(() => "https://files.catbox.moe/469tnf.jpg");

  const name = nombre || conn.getName(m.messageStubParameters[0]);
  const actionUser = m.key.participant ? await conn.getName(m.key.participant) : null;

  const actionMessages = {
    [WAMessageStubType.GROUP_PARTICIPANT_ADD]: actionUser ? `\n┊➤ *Agregado por ›* @${m.key.participant.split`@`[0]}` : '',
    [WAMessageStubType.GROUP_PARTICIPANT_REMOVE]: actionUser ? `\n┊➤ *Eliminado por ›* @${m.key.participant.split`@`[0]}` : '',
    [WAMessageStubType.GROUP_PARTICIPANT_LEAVE]: ''
  };

  const userss = m.messageStubParameters[0];
  const formatText = (template, memberCount) => {
    return template
      .replace('@user', `@${userss.split`@`[0]}`)
      .replace('@group', groupMetadata.subject)
      .replace('@date', new Date().toLocaleString())
      .replace('@users', `${memberCount}`)
      .replace('@type', actionMessages[m.messageStubType])
      .replace('@desc', groupMetadata.desc?.toString() || '✿ Sin Desc ✿');
  };

  let memberCount = participants.length;
  if (m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) memberCount += 1;
  else if ([WAMessageStubType.GROUP_PARTICIPANT_REMOVE, WAMessageStubType.GROUP_PARTICIPANT_LEAVE].includes(m.messageStubType)) memberCount -= 1;

const welcomeMessage = formatText(chat.sWelcome || `╭┈──̇─̇─̇────̇─̇─̇──◯◝
┊ \`「 𝐖𝐄𝐋𝐂𝐎𝐌𝐄 」\`
│  ────୨ৎ────
┊  \`𝗡𝗼𝗺𝗯𝗿𝗲: ›\` @user
┊  \`𝗚𝗿𝘂𝗽𝗼: ›\` @group
┊┈─────̇─̇─̇─────◯◝ @type
┊★ *Usa /menu para ver los comandos.*
┊★ *Ahora somos @users miembros.*
┊ ︿︿︿︿︿︿︿︿︿︿︿
╰─────────────────╯`, memberCount);

  const byeMessage = formatText(chat.sBye || `╭┈──̇─̇─̇────̇─̇─̇──◯◝
┊ \`「 𝐆𝐎𝐎𝐃𝐁𝐘𝐄 」\`
┊  ────୨ৎ────
┊  \`𝗡𝗼𝗺𝗯𝗿𝗲:\` › @user
┊┈─────̇─̇─̇─────◯◝ @type
┊★ *Ojalá que vuelva pronto.*
┊★ *Ahora somos @users miembros.*
┊ ︿︿︿︿︿︿︿︿︿︿︿
╰─────────────────╯`, memberCount);

  const leaveMessage = formatText(chat.sBye || byeMessage, memberCount);
  const mentions = [userss, m.key.participant];

  const fakeContext = {
    contextInfo: {
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: my.ch2,
        serverMessageId: '',
        newsletterName: my.name2
      },
      externalAdReply: {
        title: namebot,
        body: dev,
        mediaUrl: null,
        description: null,
        previewType: "PHOTO",
        thumbnailUrl: icon,
        sourceUrl: redes,
        mediaType: 1,
        renderLargerThumbnail: false
      },
      mentionedJid: mentions
    }
  };

        if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_ADD) {
    let caption = welcomeMessage;
    await conn.sendMessage(m.chat, { image: { url: ppUrl }, caption, ...fakeContext });
  }

        if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_LEAVE) {
    let caption = byeMessage;
    await conn.sendMessage(m.chat, { image: { url: ppUrl }, caption, ...fakeContext });
  }
        if (chat.welcome && m.messageStubType === WAMessageStubType.GROUP_PARTICIPANT_REMOVE) {
    let caption = welcomeMessage;
    await conn.sendMessage(m.chat, { image: { url: ppUrl }, caption, ...fakeContext });
  }
}

*/
