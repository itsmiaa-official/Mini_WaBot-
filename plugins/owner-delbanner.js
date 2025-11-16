import fs from 'fs';

const filePath = './lib/personalize.json';

let handler = async (m, { text }) => {
    if (!text) throw '❌ Debes proporcionar el enlace de la imagen que deseas eliminar.';

    const data = JSON.parse(fs.readFileSync(filePath));

    if (!data.global || !data.global.imagenes || !data.global.imagenes.includes(text)) {
        m.reply('❌ La imagen proporcionado no existe en la lista.');
        return;
    }

    // Eliminar el video de la lista global
    data.global.imagenes = data.global.imagenes.filter((url) => url !== text);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    m.reply('✅ imagen eliminado correctamente.');
};

handler.help = ['delbanner <link del video>'];
handler.tags = ['owner'];
handler.command = ['delbanner'];
handler.owner = true

export default handler;
