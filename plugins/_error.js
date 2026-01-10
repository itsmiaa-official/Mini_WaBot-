let handler = async (m, { conn, command }) => {
    try {
        // Aquí no hacemos nada, solo se usa para escuchar errores reales
        // Puedes probarlo ejecutando comandos que fallan
    } catch (err) {
        console.error("❌ Error detectado en plugin:", m.plugin || 'Desconocido');
        console.error("→ Comando:", command || 'Desconocido');
        console.error("→ Mensaje:", err.message);
        console.error("→ Stack:", err.stack);

        await conn.sendMessage(m.chat, {
            text: `🛑 *Error Detectado* 
*Plugin:* ${m.plugin || 'Desconocido'}
*Comando:* ${command || 'Desconocido'}
*Mensaje:* ${err.message}
*Stack:* \`\`\`${err.stack}\`\`\``
        }, { quoted: m });
    }
};

handler.help = ['debugerror'];
handler.tags = ['debug'];
handler.command = ['debugerror'];

export default handler;
