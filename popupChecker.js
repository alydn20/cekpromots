import axios from "axios";
import cron from "node-cron";

let lastStatus = null;

async function checkPopup() {
  try {
    const res = await axios.post(
      "https://connect.treasury.id/promotion/pop-up",
      { popup_location: 1 },
      {
        headers: {
          accept: "application/json",
          authorization: `Bearer ${process.env.TOKEN_TREASURY}`,
          "content-type": "application/json",
          "x-app-version": "8.0.82",
          "x-language": "id",
          "x-platform": "android",
          "x-version": "1.0",
        },
      }
    );

    const status = res.data?.meta?.status;

    if (status !== lastStatus) {
      lastStatus = status;
      console.log("🔔 Popup status berubah:", status);
      global.sendWhatsapp?.(
        status === false
          ? "❌ Promo OFF"
          : "✅ Promo ON"
      );
    }
  } catch (err) {
    console.log("❌ Error cek popup:", err.message);
  }
}

// cek tiap 1 menit
cron.schedule("*/1 * * * *", checkPopup);
