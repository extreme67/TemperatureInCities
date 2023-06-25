cities = ["Москва", "Нижний Новгород", "Омск", "Владивосток"];
temperature = [];

for (let i = 0; i < cities.length; i++) {
    temperature[i] = prompt(`Введите температуру для города ${cities[i]}`);
};

const div = document.getElementById('cities');

for (let i = 0; i < cities.length; i++) {
    div.insertAdjacentHTML('beforeend', `<p class="city">Температура в городе ${cities[i]}: ${temperature[i]}&deg;C</p>`);
}

const div1 = document.getElementById('temperature');

const max = Math.max(...temperature);
const min = Math.min(...temperature);

div1.insertAdjacentHTML('beforeend', `<p class="temperature__value">Максимальная температура: ${max}&deg;C</p>`);
div1.insertAdjacentHTML('beforeend', `<p class="temperature__value">Минимальная температура: ${min}&deg;C</p>`);