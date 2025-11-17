import fs from 'fs';

const filePath = './lib/personalize.json';

// Datos predeterminados
const defaultData = {
    default: {
        botName: "𝐒𝐮𝐦𝐢 𝐒𝐚𝐤𝐮𝐫𝐚𝐬𝐚𝐰𝐚",
        currency: "Starcoins",
        imagenes: [
            "https://files.catbox.moe/9su2ju.jpg",
            "https://files.catbox.moe/9su2ju.jpg",
            "https://files.catbox.moe/9su2ju.jpg"
        ]
    },
    global: {
        botName: null,
        currency: null,
        imagenes: []
    }
};

let handler = async () => {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify(defaultData, null, 2));
            console.log('✅ Archivo personalize.json creado.');
        } else {
            const data = JSON.parse(fs.readFileSync(filePath));
            let updated = false;

            // Reparar estructura default
            if (!data.default) {
                data.default = defaultData.default;
                updated = true;
            } else {
                if (!data.default.botName) { data.default.botName = defaultData.default.botName; updated = true; }
                if (!data.default.currency) { data.default.currency = defaultData.default.currency; updated = true; }
                if (!Array.isArray(data.default.imagenes)) { data.default.imagenes = defaultData.default.imagenes; updated = true; }
            }

            // Reparar estructura global
            if (!data.global) {
                data.global = defaultData.global;
                updated = true;
            } else {
                if (data.global.botName === undefined) { data.global.botName = null; updated = true; }
                if (data.global.currency === undefined) { data.global.currency = null; updated = true; }
                if (!Array.isArray(data.global.imagenes)) { data.global.imagenes = []; updated = true; }
            }

            if (updated) {
                fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
                console.log('🔧 Archivo personalize.json reparado automáticamente.');
            }
        }
    } catch (error) {
        console.error(`❌ Error al procesar personalize.json: ${error.message}`);
    }
};

handler();

export default handler;
