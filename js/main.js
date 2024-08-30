handleData();

const goldFlagEl = document.querySelector('.gold-flag');
const silverFlagEl = document.querySelector('.silver-flag');
const bronzeFlagEl = document.querySelector('.bronze-flag');

const goldCountEl = document.querySelector('.gold-TMC');
const silverCountEl = document.querySelector('.silver-TMC');
const bronzeCountEl = document.querySelector('.bronze-TMC');

const queryCountry = document.querySelector('.query-country');
const queryBronze = document.querySelector('.query-bronze');
const querySilver = document.querySelector('.query-silver');
const queryGold = document.querySelector('.query-gold');
const queryTotal = document.querySelector('.query-total-medal');

const searchField = document.querySelector('#search-field');
const searchBtn = document.querySelector('#search-btn');

async function getData() {
  try {
    const res = await fetch('https://apis.codante.io/olympic-games/countries');
    const countries = await res.json();
    const data = countries.data;
    data.sort((a, b) => b.total_medals - a.total_medals);
    console.log(data)

    goldFlagEl.src = data[0].flag_url;
    silverFlagEl.src = data[1].flag_url;
    bronzeFlagEl.src = data[2].flag_url;

    // goldCountEl.textContent = data[0].total_medals;
    // silverCountEl.textContent = data[1].total_medals;
    // bronzeCountEl.textContent = data[2].total_medals;

    return data;
  } catch {
    const err = 'Error: Could not retrieve data!';
    console.log(err);
  }
}

async function handleData() {
  const data = await getData();
  searchBtn.addEventListener('click', () => {
    const input = searchField.value.toUpperCase();
    const foundObject = data.find((item) => item.id === input);
    queryCountry.scrollIntoView({ behavior: 'smooth' });
    queryCountry.src = foundObject.flag_url;
    queryTotal.textContent = `Total medals: ${foundObject.total_medals}`;
    input.value = '';
  });
}
