import pkg from "whatsapp-web.js";
import qrcode from "qrcode-terminal";

const { Client, LocalAuth } = pkg;

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  },
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("✅ WhatsApp bot ready");
});

client.on("message", (msg) => {
  if (msg.body.toLowerCase() === "cekpromo") {
    msg.reply("⏳ Sedang cek promo, tunggu notifikasi...");
  }
});

global.sendWhatsapp = (text) => {
  const number = process.env.WA_TARGET + "@c.us";
  client.sendMessage(number, text);
};

client.initialize();
