let handler = async (m, { conn, args }) => {
  const isSocketOwner = [
    conn.user.jid,
    ...(global.owner || []).map(n => n + '@s.whatsapp.net'),
  ].includes(m.sender);

  if (!isSocketOwner) {
    return m.reply('🕸 Solo el propietario del socket puede usar este comando.');
  }

  const groupId = args[0] || m.chat;

  try {
    await conn.sendMessage(m.chat, { text: `${botName} 🌸 se despide del grupo.\n> fue un honor compartir con ustedes.` }, { quoted: m });
    await conn.groupLeave(groupId);
  } catch (error) {
    console.error(error);
    m.reply('🕸 No se pudo abandonar el grupo. Intenta nuevamente.');
  }
};

handler.help = ['leave'];
handler.tags = ['jadibot'];
handler.command = ['leave'];

export default handler;
