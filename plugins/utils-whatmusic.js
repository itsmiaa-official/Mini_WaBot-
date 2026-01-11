
import fetch from 'node-fetch';
import { ffmpeg } from '../lib/converter.js';

let handler = async (m, { conn, usedPrefix, command }) => {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || '';
    if (!/audio|video/.test(mime)) throw `Reply to an audio or video file with ${usedPrefix + command}`;
    
    m.reply('Wait a moment, I\'m listening to the song...');
    
    try {
        let media = await q.download();
        let ext = mime.split('/')[1] || 'mp3';
        

        let cut = await ffmpeg(media, [
            '-t', '10', 
            '-vn',      
            '-ac', '2', 
            '-ar', '44100' 
        ], ext, 'mp3');
        
        let minifiedBuffer = cut.data;
        
cal
        if (cut.delete) await cut.delete();

        let base64Data = minifiedBuffer.toString('base64');
        
        const response = await fetch('https://whatmusic.hostrta.win/recognize', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                filename: 'sample_cut.mp3',
                b64: base64Data
            })
        });

        if (!response.ok) {
            throw new Error(`API responded with ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('WhatMusic Response:', data);

        if (data && (data.success === true || data.status === true) && (data.track || data.metadata)) {
            let res = data.track || data.metadata;
            let txt = `🎵 *Music Recognition Found* 🎵\n\n`;
            txt += `🎤 *Artist:* ${res.artist || 'Unknown'}\n`;
            txt += `🎼 *Title:* ${res.title || 'Unknown'}\n`;
            if (res.album) txt += `💿 *Album:* ${res.album}\n`;
            if (res.releaseDate || res.release_date) txt += `📅 *Release Date:* ${res.releaseDate || res.release_date}\n`;
            if (res.genre) txt += `🎼 *Genre:* ${res.genre}\n`;
            if (res.label) txt += `🏷️ *Label:* ${res.label}\n`;
            
           
            if (res.spotify) txt += `\n🟢 *Spotify:* ${res.spotify}`;
            if (res.youtube) txt += `\n🔴 *YouTube:* ${res.youtube}`;
            
            if (res.coverArt) {
                await conn.sendMessage(m.chat, { image: { url: res.coverArt }, caption: txt }, { quoted: m });
            } else {
                await conn.reply(m.chat, txt, m);
            }
        } else {
             
             let errorMsg = `Could not identify the song.`;
             if (data && data.message) errorMsg += `\nMessage: ${data.message}`;
             await conn.reply(m.chat, errorMsg, m);
        }

    } catch (e) {
        console.error(e);
        await conn.reply(m.chat, `Error identifying song: ${e.message}`, m);
    }
};

handler.help = ['whatmusic', 'shazam'];
handler.tags = ['tools'];
handler.command = ['whatmusic','shazam','findsong'];

export default handler;
