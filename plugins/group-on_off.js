let handler = async (m, { conn, args, command }) => {
  const setting = args[0]?.toLowerCase();
  const chatData = global.db.data.chats[m.chat];

  if (!setting) {
    return m.reply(
      `🫟 Debes especificar la *función* que deseas activar o desactivar.`
    );
  }

  const status = command === 'on';
  const reply = (name) =>
    m.reply(`🎋 La función *${name}* ha sido *${status ? 'activada' : 'desactivada'}* en este grupo.`);

  switch (setting) {
    case 'antilinks':
    case 'antienlaces':
      chatData.antilink = status;
      reply('Anti Enlaces');
      break;

    case 'rpg':
    case 'economia':
      chatData.rpg = status;
      reply('Economía');
      break;

    case 'gacha':
      chatData.gacha = status;
      reply('Gacha');
      break;

    case 'adminonly':
    case 'onlyadmin':
      chatData.adminonly = status;
      reply('Solo Admins');
      break;

    case 'nsfw':
      chatData.nsfw = status;
      reply('NSFW');
      break;

    case 'welcome':
      chatData.welcome = status;
      reply('Bienvenida');
      break;

      // inicio
      case 'goodbye'':
      case 'despedida':
      chatData.goodbye = status;
      reply('despedida');
      break;
    // fin
      
    case 'alerts':
    case 'alertas':
      chatData.alerts = status;
      reply('Alertas');
      break;

    default:
      m.reply(
        `🫟 Opción no *válida*\n\n📌 *Opciones disponibles:*\n- welcome\n- antienlaces\n- economia\n- gacha\n- nsfw\n- soloadmin\n- alertas\n\n✨ *Ejemplo:* ${command} welcome`
      );
      break;
  }
};

handler.help = ['on', 'off'];
handler.tags = ['group'];
handler.command = ['on', 'off'];
handler.admin = true;
// handler.botAdmin = true;

export default handler;
