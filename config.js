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
    moves: "",   // ссылка на оплату «5-Minute Moves»
    food: "",    // ссылка на оплату «5-Minute Food Habits»
    bundle: ""   // ссылка на оплату комбо «The 5-Minute Habit Plan»
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
