> [!IMPORTANT]
> **Este proyecto está en constante evolución. Estamos comprometidos en ofrecer a nuestra comunidad un Bot increíble. Te invitamos a instalarlo y para estar al tanto de todas las novedades.**

<p align="center"> 
<img src="https://files.catbox.moe/if757e.jpg" alt="SakuraBot-MD" style="width: 75%; height: auto; max-width: 100px;">

<p align="center"> 
<a href="#"><img title="SakuraBot-MD" src="https://img.shields.io/badge/¡Disfruta de un Bot totalmente gratuito, con múltiples funciones y de código abierto! -purple?colorA=%239b33b0&colorB=%231c007b&style=for-the-badge"></a> 
</p>

---

## 🪻 Descripción 

`Luna Bot` es un bot de WhatsApp multifuncional basado en `baileys`. Este bot ofrece una variedad de características para mejorar tu experiencia en WhatsApp.

---

## 🪻 Características

- Respuestas automáticas
- Gestión de grupos
- Juegos interactivos
- Integración con APIs externas

---

## Instalación por Termux
> [!IMPORTANT]
> **No garantizamos un funcionamiento perfecto en Termux, aunque trabajamos constantemente para asegurar una buena compatibilidad. Si experimentas lentitud o errores, por favor envía una solicitud con la evidencia correspondiente para que nuestro equipo pueda solucionarlo. Si el problema persiste, te recomendamos considerar los servicios de alojamiento de bots.**

<details>
  <summary><b>🍄 Instalación Manual</b></summary>

> *Comandos para instalar de forma manual*
```bash
termux-setup-storage
```
```bash
apt update && apt upgrade && pkg install -y git nodejs ffmpeg imagemagick yarn
```
```bash
git clone https://github.com/ittschinitaaa/Mitzuki-China && cd Mitzuki-China
```
```bash
yarn install
```
```bash
npm install
```
```bash
npm start
```
> *Si aparece **(Y/I/N/O/D/Z) [default=N] ?** use la letra **"y"** y luego **"ENTER"** para continuar con la instalación.*
</details>

<details>
  <summary><b>🪻 Comandos para mantener más tiempo activo el Bot</b></summary>

> *Ejecutar estos comandos dentro de la carpeta Luna*
```bash
termux-wake-lock && npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs 
``` 
#### Opciones Disponibles
> *Esto eliminará todo el historial que hayas establecido con PM2:*
```bash 
pm2 delete index
``` 
> *Si tienes cerrado Termux y quiere ver de nuevo la ejecución use:*
```bash 
pm2 logs 
``` 
> *Si desea detener la ejecución de Termux use:*
```bash 
pm2 stop index
``` 
> *Si desea iniciar de nuevo la ejecución de Termux use:*
```bash 
pm2 start index
```
---- 
### En caso de detenerse
> _Si despues que ya instalastes tu bot y termux te salta en blanco, se fue tu internet o reiniciaste tu celular, solo realizaras estos pasos:_
```bash
cd && cd Luna && npm start
```
----
### Obtener nuevo código QR 
> *Detén el bot, haz click en el símbolo (ctrl) [default=z] usar la letra "z" + "ENTER" hasta que salga algo verdes similar a: `SakuraBot-MD $`*
> **Escribe los siguientes comando uno x uno :**
```bash 
cd && cd Luna && rm -rf sessions/session-bot && npm run qr
```
----
### Obtener nuevo código de teléfono 
```bash 
cd && cd Luna && rm -rf sessions/session-bot && npm run code
```
</details>

<details>
<summary><b>🫛 Actualizar Luna Bot</b></summary>

> **Utiliza esta opción únicamente si deseas actualizar a la última versión de Luna Bot. Hemos implementado un método ingenioso mediante comandos para realizar la actualización, pero ten en cuenta que al usarla se eliminarán todos los archivos de la versión actual y se reemplazarán con los de la nueva versión. Solo se conservará la base de datos, por lo que será necesario volver a vincular el Bot.**  

**Comandos para actualizar Luna Bot de forma automática**

```bash
grep -q 'bash\|wget' <(dpkg -l) || apt install -y bash wget && wget -O - https://raw.githubusercontent.com/ittschinitaaa/Luna/master/update.sh | bash 
```
#### Para que no pierda su progreso en Luna Bot, estos comandos realizarán un respaldo de su `datos.json` y se agregará a la versión más reciente.
> *Estos comandos solo funcionan para TERMUX, REPLIT, LINUX*
</details>


</details>

---

### 🌾 Colaboradores
[![China](https://github.com/miaoficial02.png?size=50)](https://github.com/miaoficial02) 

---
### 🌾 Autora Del Proyecto
[![China](https://github.com/ittschinitaaa.png?size=100)](https://github.com/ittschinitaaa) 
