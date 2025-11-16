import fs from 'fs';

const filePath = './lib/personalize.json';

let handler = async (m) => {
    const data = JSON.parse(fs.readFileSync(filePath));

    const imagenes = data.global?.imagenes?.length > 0 
        ? data.global.imagenes 
        : data.default.imagenes;

    if (!imagenes.length) {
        m.reply('❌ No hay imagenes configuradas.');
        return;
    }

    const imagenesList = imagenes.map((url, index) => `${index + 1}. ${url}`).join('\n');
    m.reply(`🎥 *imágenes configuradas:*\n\n${imagenesList}`);
};

handler.help = ['viewbanner'];
handler.tags = ['owner'];
handler.command = ['viewbanner'];
handler.owner = true

export default handler;
