let handler = async (m, { conn }) => {
    const start = new Date().getTime();
    const { key } = await conn.sendMessage(
        m.chat,
        { text: `Calculando uptime...🍒` },
        { quoted: m }
    );
    const end = new Date().getTime();

    const latency = end - start;

    // Uptime
    const uptime = process.uptime(); // en segundos
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const secondsUp = Math.floor(uptime % 60);
    const uptimeFormatted = `${hours}h ${minutes}m ${secondsUp}s`;

    // RAM
    const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);

    setTimeout(async () => {
        let response =
`﹒⌗﹒🍒 .˚₊‧  Hola, @${m.sender.split('@')[0]}.

🍫  .→﹒ Uptime Status .  ◌Ⳋ𝅄

🍒 \`Uptime:\` [ ${uptimeFormatted} ]`
        await conn.sendMessage(
            m.chat,
            { text: response, edit: key, mentions: [m.sender] },
            { quoted: m }
        );
    }, latency);
};

handler.help = ['uptime'];
handler.tags = ['info'];
handler.command = ['uptime'];

export default handler;
