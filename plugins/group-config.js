let handler = async (m, { conn, command }) => {
  try {
    let groupMetadata = await conn.groupMetadata(m.chat);
    let groupAnnouncement = groupMetadata.announce;

    if (command === 'close') {
      if (groupAnnouncement === true) {
        return conn.reply(m.chat, `⚠️ El grupo ya está cerrado.`, m);
      }
      await conn.groupSettingUpdate(m.chat, 'announcement')
        .then(() => {
         await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
          // conn.reply(m.chat, `🔥 El grupo ha sido cerrado correctamente.`, m);
        })
        .catch((err) => conn.reply(m.chat, `❌ Error al cerrar el grupo: ${err.message}`, m));
    } else if (command === 'open') {
      if (groupAnnouncement === false) {
        return conn.reply(m.chat, `⚠️ El grupo ya está abierto.`, m);
      }
      await conn.groupSettingUpdate(m.chat, 'not_announcement')
        .then(() => {
         await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
          //conn.reply(m.chat, `🔥 El grupo ha sido abierto correctamente.`, m);
        })
        .catch((err) => conn.reply(m.chat, `❌ Error al abrir el grupo: ${err.message}`, m));
    } else {
      return conn.reply(m.chat, `❌ *Error, reportelo al grupo de Soporte.*`, m);
    }
  } catch (e) {
    console.error(e);
    conn.reply(m.chat, `❌⚠️ *Error al realizar la configuración del grupo:* ${e.message}.`, m);
  }
};

handler.help = ['close', 'open'];
handler.tags = ['group'];
handler.command = ['close', 'open'];
handler.admin = true;
handler.botAdmin = true;

export default handler;
