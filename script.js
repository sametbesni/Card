const honeycomb = [5, 6, 7, 8, 9, 8, 7, 6, 5];
const icons = ['🚀', '🎸', '🤖', '🫶', '🔥', '🕹️', '👾', '✨', '🌴', '🖥️', '💻', '⌨️', '💡', '🕶️', '⚙️', '🍒', '🧙‍♂️', '🎮', '👽', '🌌', '🎧', '🌒', '🌓', '🌔', '🎵', '🎶', '❤️', '🎙️', '📸', '🕰️', '🚀', '🎸', '🤖', '🫶', '🔥', '🕹️', '👾', '✨', '🌴', '🖥️', '💻', '⌨️', '💡', '🕶️', '⚙️', '🍒', '🦄', '📱', '🖨️', '📡', '🔬', '🔭', '🎚️', '🎛️', '🧬', '🔮', '🧲', '🛸', '🪐', '🌠', '👓', '🎶', '👾',];

let iconIndex = -1;
const container = document.querySelector('.container');
const switchButton = document.getElementById('switch');

honeycomb.forEach((column, index) => {
    const columnDiv = document.createElement('div');
    columnDiv.classList.add('column');
    columnDiv.style.setProperty('--column', index);

    for (let cellIndex = 0; cellIndex < column; cellIndex++) {
        iconIndex++;
        const hexagon = document.createElement('div');
        hexagon.classList.add('hexagon');
        hexagon.style.setProperty('--index', cellIndex);
        hexagon.style.setProperty('--icon', `'${icons[iconIndex]}'`);
        hexagon.innerText = icons[iconIndex];

        hexagon.addEventListener('click', () => {
            document.querySelectorAll('.hexagon').forEach(h => h.classList.toggle('waves'));
        });

        columnDiv.appendChild(hexagon);
    }
    container.appendChild(columnDiv);
});

// Switch butonuna tıklama olayı
switchButton.addEventListener('click', () => {
    switchButton.classList.toggle('active');
    document.body.classList.toggle('dark');
});