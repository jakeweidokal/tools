const paintColors = [
  { name: 'High Reflective White', brand: 'Sherwin-Williams', code: '7757', lrv: '93', hex: '#F7F7F1' },
  { name: 'Extra White', brand: 'Sherwin-Williams', code: '7006', lrv: '86', hex: '#EEEFEA' },
  { name: 'Westhighland White', brand: 'Sherwin-Williams', code: '7566', lrv: '86', hex: '#F3EEE3' },
  { name: 'Greek Villa', brand: 'Sherwin-Williams', code: '7551', lrv: '84', hex: '#F0ECE2' },
  { name: 'Pure White', brand: 'Sherwin-Williams', code: '7005', lrv: '84', hex: '#EDECE6' },
  { name: 'Cold Foam', brand: 'Sherwin-Williams', code: '9504', lrv: '84', hex: '#EFECE3' },
  { name: 'Snowbound', brand: 'Sherwin-Williams', code: '7004', lrv: '83', hex: '#EDEAE4' },
  { name: 'Sanctuary', brand: 'Sherwin-Williams', code: '9583', lrv: '83', hex: '#E7E2D9' },
  { name: 'Alabaster', brand: 'Sherwin-Williams', code: '7008', lrv: '82', hex: '#EDEAE0' },
  { name: 'Arcade White', brand: 'Sherwin-Williams', code: '7100', lrv: '82', hex: '#F3EEE7' },
  { name: 'Pearly White', brand: 'Sherwin-Williams', code: '7009', lrv: '82', hex: '#E7E3D7' },
  { name: 'Creamy', brand: 'Sherwin-Williams', code: '7012', lrv: '81', hex: '#EEE7D9' },
  { name: 'Elder White', brand: 'Sherwin-Williams', code: '7014', lrv: '80', hex: '#E2DED8' },
  { name: 'Dove Wing', brand: 'Sherwin-Williams', code: '9611', lrv: '77', hex: '#CBBFAF' },
  { name: 'China White', brand: 'Sherwin-Williams', code: '9551', lrv: '77', hex: '#D4D2CB' },
  { name: 'Silver Satin', brand: 'Sherwin-Williams', code: '9622', lrv: '76', hex: '#EBEBE7' },
  { name: 'White Heron', brand: 'Sherwin-Williams', code: '7627', lrv: '76', hex: '#E7E1D7' },
  { name: 'Intimate White', brand: 'Sherwin-Williams', code: '6322', lrv: '74', hex: '#F0E1D8' },
  { name: 'White Duck', brand: 'Sherwin-Williams', code: '7010', lrv: '74', hex: '#E5DFD2' },
  { name: 'Shoji White', brand: 'Sherwin-Williams', code: '7042', lrv: '74', hex: '#E6DFD3' },
  { name: 'Classic Gray', brand: 'Sherwin-Williams', code: '9553', lrv: '74', hex: '#B4B2A9' },
  { name: 'Moderate White', brand: 'Sherwin-Williams', code: '6140', lrv: '74', hex: '#E9DECD' },
  { name: 'Aged White', brand: 'Sherwin-Williams', code: '9180', lrv: '74', hex: '#E8DECD' },
  { name: 'Patience', brand: 'Sherwin-Williams', code: '7555', lrv: '74', hex: '#E2D3BF' },
  { name: 'Aesthetic White', brand: 'Sherwin-Williams', code: '7035', lrv: '73', hex: '#E5DED3' },
  { name: 'Ballet White', brand: 'Sherwin-Williams', code: '9621', lrv: '71', hex: '#E0E3E2' },
  { name: 'Neutral Ground', brand: 'Sherwin-Williams', code: '7568', lrv: '70', hex: '#E2DACA' },
  { name: 'Drift of Mist', brand: 'Sherwin-Williams', code: '9166', lrv: '69', hex: '#DCD8D0' },
  { name: 'Canvas Tan', brand: 'Sherwin-Williams', code: '7531', lrv: '64', hex: '#DCD1BF' },
  { name: 'Accessible Beige', brand: 'Sherwin-Williams', code: '7036', lrv: '58', hex: '#D1C7B7' },
  { name: 'Moody Blue', brand: 'Sherwin-Williams', code: '6221', lrv: '27', hex: '#7A9192' },
  { name: 'White Blush', brand: 'Benjamin Moore', code: 'OC-86', lrv: '84.74', hex: '#F6F0E1' },
  { name: 'Palace White', brand: 'Benjamin Moore', code: 'OC-100', lrv: '73.17', hex: '#EBDEC7' },
  { name: 'Ocean Air', brand: 'Benjamin Moore', code: '2123-50', lrv: '71.84', hex: '#D3E1E1' },
  { name: 'Frappe', brand: 'Benjamin Moore', code: 'AF-85', lrv: '69.46', hex: '#E8D8C1' },
  { name: 'Natural Cream', brand: 'Benjamin Moore', code: 'OC-14', lrv: '64.78', hex: '#DBD3C5' },
  { name: 'Manchester Tan', brand: 'Benjamin Moore', code: 'HC-81', lrv: '63.24', hex: '#DBCFBB' },
  { name: 'Harbor Haze', brand: 'Benjamin Moore', code: '2136-60', lrv: '62.47', hex: '#C5D4D3' },
  { name: 'Natural Linen', brand: 'Benjamin Moore', code: '966', lrv: '59.84', hex: '#D8CBB7' },
  { name: 'Santorini Blue', brand: 'Benjamin Moore', code: '1634', lrv: '44.67', hex: '#A2B5B8' },
  { name: 'Raindance', brand: 'Benjamin Moore', code: '1572', lrv: '43.47', hex: '#A9B3AA' },
  { name: 'Mount Saint Anne', brand: 'Benjamin Moore', code: '1565', lrv: '41.9', hex: '#A3B0AE' },
  { name: 'Weekend Getaway', brand: 'Benjamin Moore', code: '473', lrv: '38.79', hex: '#A5AA92' },
  { name: 'Mauve Mist', brand: 'Benjamin Moore', code: '1264', lrv: '36.4', hex: '#BC989A' },
  { name: 'Sea Star', brand: 'Benjamin Moore', code: '2123-30', lrv: '32.99', hex: '#8A9E9D' },
  { name: 'Deep Mauve', brand: 'Benjamin Moore', code: '1265', lrv: '19.88', hex: '#966D6F' }
];

const colorList = document.getElementById('color-list');
const searchBar = document.getElementById('search-bar');
const comparisonColorsContainer = document.getElementById('comparison-colors');

let comparisonColors = [];

function createColorCard(color, isComparison) {
    const card = document.createElement('div');
    card.className = 'color-card';
    card.dataset.colorCode = color.code;

    const swatch = document.createElement('div');
    swatch.className = 'color-swatch';
    swatch.style.backgroundColor = color.hex;

    const info = document.createElement('div');
    info.className = 'color-info';

    const name = document.createElement('h3');
    name.textContent = color.name;

    const logo = document.createElement('img');
    logo.className = 'brand-logo';
    logo.src = getBrandLogo(color.brand);

    name.appendChild(logo);

    const details = document.createElement('p');
    details.textContent = `${color.brand} ${color.code} | LRV: ${color.lrv}`;

    info.appendChild(name);
    info.appendChild(details);

    if (isComparison) {
        const removeBtn = document.createElement('span');
        removeBtn.className = 'remove-btn';
        removeBtn.textContent = 'X';
        removeBtn.addEventListener('click', () => removeFromComparison(color));
        info.appendChild(removeBtn);
    }

    card.appendChild(swatch);
    card.appendChild(info);

    if (!isComparison) {
        card.addEventListener('click', () => addToComparison(color));
    }

    return card;
}

function getBrandLogo(brand) {
    if (brand === 'Sherwin-Williams') {
        return 'https://cdn.worldvectorlogo.com/logos/sherwin-williams-1.svg';
    } else if (brand === 'Benjamin Moore') {
        return 'https://cdn.worldvectorlogo.com/logos/benjamin-moore-paints-55665.svg';
    }
    return '';
}

function renderColors(colors) {
    colorList.innerHTML = '';
    colors.forEach(color => {
        const card = createColorCard(color, false);
        colorList.appendChild(card);
    });
}

function renderComparisonColors() {
    comparisonColorsContainer.innerHTML = '';
    comparisonColors.forEach(color => {
        const card = createColorCard(color, true);
        comparisonColorsContainer.appendChild(card);
    });
}

function addToComparison(color) {
    if (!comparisonColors.some(c => c.code === color.code)) {
        comparisonColors.push(color);
        renderComparisonColors();
    }
}

function removeFromComparison(color) {
    comparisonColors = comparisonColors.filter(c => c.code !== color.code);
    renderComparisonColors();
}

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredColors = paintColors.filter(color =>
        color.name.toLowerCase().includes(searchTerm) ||
        color.code.includes(searchTerm)
    );
    renderColors(filteredColors);
});

// Initial render
renderColors(paintColors);
