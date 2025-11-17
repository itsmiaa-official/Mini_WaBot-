import { WAMessageStubType } from '@whiskeysockets/baileys';

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return true;

  const chat = globalThis.db.data.chats[m.chat];
  const nombre = globalThis.db.data.users[m.messageStubParameters[0]]?.name || {};
  const botId = conn.user.jid;

  const ppUrl = await conn.profilePictureUrl(m.messageStubParameters[0], 'image')
    .catch(() => "https://stellarwa.xyz/files/1752115005119.jpg");

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
┊︶︶︶︶︶︶︶︶︶︶︶
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
        newsletterJid: "120363402839382986@newsletter",
        serverMessageId: '',
        newsletterName: "ᥴһіᥒᥲ mі𝗍zᥙkі • ᥆𝖿іᥴіᥲᥣ ᥴһᥲᥒᥒᥱᥣ"
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
