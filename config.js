/* Daily Five Club – настройки оплаты и выдачи.
   MODE:
   "external" – кнопка «Buy» ведёт на страницу оплаты платформы (Lemon Squeezy, Payhip, Stripe и т.п.),
                файл покупательница получает от платформы: письмом и на странице после оплаты.
   "onsite"   – оплата через ссылку Stripe Payment Link, после оплаты платформа возвращает на
                dailyfiveclub.com/thank-you/?p=moves|food|bundle, и там сразу кнопка «Download».
   Пока ссылки пустые, кнопки ведут к блоку цен и показывают «Coming soon». */
window.DFC = {
  MODE: "external",
  CHECKOUT: {
    moves: "https://app.lava.top/products/8cd9d994-7ba6-4d9e-8482-143cc399e633",   // ссылка на оплату «5-Minute Moves»
    food: "https://app.lava.top/products/24e14c73-33b3-42aa-8c26-cd17ae1e6bf7",    // ссылка на оплату «5-Minute Food Habits»
    bundle: "https://app.lava.top/products/6304086b-4637-45ea-864a-3cf7eb1ccb86"   // ссылка на оплату комбо «The 5-Minute Habit Plan»
  },
  // Только для MODE "onsite": откуда скачивать файл после оплаты.
  // Сами PDF в публичный репозиторий не кладём – ставим сюда ссылки на закрытое хранилище.
  DOWNLOAD: {
    moves: "",
    food: "",
    bundle: ""
  },
  CONTACT: "hello@dailyfiveclub.com"
};
