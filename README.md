🚗 RentalCar
RentalCar — це вебзастосунок для перегляду та бронювання автомобілів. Користувачі можуть фільтрувати авто за брендом, ціною та пробігом, переглядати детальну інформацію про кожен автомобіль та оформлювати бронювання через зручну форму.

🔧 Технології

React з використанням Vite для швидкої розробки
Redux Toolkit для керування станом
Formik та Yup для обробки форм та валідації
React Router для маршрутизації
React DatePicker для вибору дати
React Toastify для сповіщень
CSS Modules для стилізації компонентів

⚙️ Функціонал

📋 Каталог автомобілів з можливістю фільтрації за брендом, ціною та пробігом
🔍 Детальна сторінка авто з описом та зображенням
📅 Форма бронювання з вибором дати та валідацією введених даних
🔄 Кнопка "Clear filters" з'являється після застосування фільтрів
🔗 Навігація з можливістю повернення до попередньої сторінки
🚀 Встановлення та запуск

Клонування репозиторію:

git clone https://github.com/ABurianenko/rentalCar.git
cd rentalCar

Встановлення залежностей:

npm install

Запуск застосунку:

npm run dev

Відкриття в браузері:

Перейдіть за адресою http://localhost:5173

📁 Структура проєкту

```txt rentalCar/ 
├── public/
├── src/
│ ├── components/
│ │ ├── CarList/
│ │ ├── CatalogFilters/
│ │ ├── BookingForm/
│ │ └── ...
│ ├── pages/
│ │ ├── CatalogPage/
│ │ └── CarDetailsPage/
│ ├── redux/
│ │ ├── catalog/
│ │ ├── filters/
│ │ └── brands/
│ ├── constants/
│ ├── App.jsx
│ └── main.jsx
├── package.json
└── vite.config.js ```

👤 Автор
GitHub: [ABurianenko](https://github.com/ABurianenko)
