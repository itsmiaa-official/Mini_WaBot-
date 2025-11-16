import fs from 'fs';

const filePath = './lib/personalize.json';

let handler = async (m, { text }) => {
    if (!text) throw '❌ Debes proporcionar un enlace de video.';

    const data = JSON.parse(fs.readFileSync(filePath));

    // Validar si existe el campo global
    if (!data.global) data.global = { botName: null, currency: null, imagenes: [] };

    // Agregar el video al array
    data.global.imagenes.push(text);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    m.reply('✅ imagen agregada correctamente.');
};

handler.help = ['setbanner <link>'];
handler.tags = ['owner'];
handler.command = ['setbanner']
handler.owner = true

export default handler;
