let handler = async (m, { conn }) => {
    try {
        // Aquí puedes poner cualquier prueba que quieras
        throw new Error('Prueba de error para debug'); 
    } catch (err) {
        // Obtenemos el stack trace limpio
        let stack = err.stack || err.message || err.toString();
        // Recortamos para que no sea demasiado largo
        if (stack.length > 1000) stack = stack.slice(0, 1000) + '...';
        // Enviamos el error al chat
        await conn.sendMessage(m.chat, { 
            text: `🛑 *Error Detectado*\n\n*Mensaje:* ${err.message}\n*Stack:* \n${stack}`, 
            mentions: [m.sender]
        }, { quoted: m });
    }
};

handler.help = ['debug', 'error']
handler.tags = ['owner', 'info']
handler.command = ['debug', 'error']

export default handler;
