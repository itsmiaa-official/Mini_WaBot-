let handler = async (m, { conn, command }) => {

  if (!m.isGroup)
    return conn.sendMessage(m.chat, { text: '❌ Este comando solo funciona en grupos.' }, { quoted: m });

  if (!m.isAdmin && !m.isOwner)
    return conn.sendMessage(m.chat, { text: '❌ Solo administradores pueden usar este comando.' }, { quoted: m });

  if (command === 'open' || command === 'abrir') {
    await conn.groupSettingUpdate(m.chat, 'not_announcement');

    return conn.sendMessage(
      m.chat,
      { text: '✅ *Grupo abierto*\n\nAhora todos los miembros pueden enviar mensajes.' },
      { quoted: m }
    );
  }

  if (command === 'close' || command === 'cerrar') {
    await conn.groupSettingUpdate(m.chat, 'announcement');

    return conn.sendMessage(
      m.chat,
      { text: '🔒 *Grupo cerrado*\n\nSolo los administradores pueden enviar mensajes.' },
      { quoted: m }
    );
  }
};

handler.help = ['open', 'abrir', 'close', 'cerrar'];
handler.tags = ['group'];
handler.command = ['open', 'abrir', 'close', 'cerrar'];

export default handler;
