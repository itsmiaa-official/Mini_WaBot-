var handler = async (m, { conn, args }) => {

    if (!args[0]) {
        return conn.reply(
            m.chat,
            '🕸 Usa correctamente el comando:\n\n• *group open* → Abrir el grupo\n• *group close* → Cerrar el grupo',
            m
        );
    }

    if (args[0] === 'open') {
        await conn.groupSettingUpdate(m.chat, 'not_announcement');

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        return conn.reply(
            m.chat,
            '> ꕥ *Grupo abierto*',
            m
        );
    }

    if (args[0] === 'close') {
        await conn.groupSettingUpdate(m.chat, 'announcement');

        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
        return conn.reply(
            m.chat,
            '> ꕥ *Grupo cerrado*',
            m
        );
    }

    return conn.reply(
        m.chat,
        '🕸 Opción inválida.\nUsa:\n• group open\n• group close',
        m
    );
};

handler.help = ['group open', 'group close'];
handler.tags = ['group'];
handler.command = ['group'];
handler.admin = true;
handler.botAdmin = true;

export default handler;
