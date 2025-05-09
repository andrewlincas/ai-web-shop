const baseUrl = "https://ai-web-shop.onrender.com/";

const wait = (seconds) => new Promise((res) => setTimeout(res, seconds * 1000));

async function periodicallyPing() {
  const urls = [
    "",
    "orders",
    "products",
    "cart",
    ...Array.from({ length: 12 }, (_, i) => i + 1).map(
      (id) => `products/${id}`
    ),
  ];
  while (true) {
    const randomTime = Math.floor(Math.random() * 35) + 20;
    console.log("Next ping in ", randomTime);
    await wait(randomTime);
    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    console.log(`Pinging ${baseUrl}${randomUrl}`);
    try {
      const res = await fetch(`${baseUrl}${randomUrl}`);
      if (res.ok) console.log("Success");
      else console.log("Fail");
    } catch (error) {
      console.log("Ошбика сети");
    }
  }
}

periodicallyPing();
