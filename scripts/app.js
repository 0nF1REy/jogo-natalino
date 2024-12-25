// Variáveis ||

const checkbox = document.querySelector('#check1');
const checkbox2 = document.querySelector('#check2');
const checkbox3 = document.querySelector('#check3');
const checkbox4 = document.querySelector('#check4');
const checkbox5 = document.querySelector('#check5');
const buttonReset = document.querySelector('.box_button');

// Caixa de seleção desativada ||

checkbox.onclick = function () {
    if (checkbox.checked === true) {
        check1.disabled = true;
    }
};
checkbox2.onclick = function () {
    if (checkbox2.checked === true) {
        check2.disabled = true;
    }
};
checkbox3.onclick = function () {
    if (checkbox3.checked === true) {
        check3.disabled = true;
    }
};
checkbox4.onclick = function () {
    if (checkbox4.checked === true) {
        check4.disabled = true;
    }
};
checkbox5.onclick = function () {
    if (checkbox5.checked === true) {
        check5.disabled = true;
    }
};

// Caixa de seleção redefinida ||

buttonReset.onclick = function () {
    check1.disabled = false;
    check1.checked = false;

    check2.disabled = false;
    check2.checked = false;

    check3.disabled = false;
    check3.checked = false;

    check4.disabled = false;
    check4.checked = false;

    check5.disabled = false;
    check5.checked = false;
}

// Neves ||

function createSnowflakes() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = ['❄', '❅', '❆'][Math.floor(Math.random() * 3)];


    snowflake.style.left = Math.random() * 100 + 'vw';


    snowflake.style.animationDuration = Math.random() * 3 + 4 + 's';


    snowflake.style.fontSize = Math.random() * 2 + 2 + 'rem';


    snowflake.style.zIndex = Math.floor(Math.random() * 20) + 5;


    document.body.appendChild(snowflake);


    setTimeout(() => {
        snowflake.remove();
    }, 8000);
}

setInterval(createSnowflakes, 200);

// Caixa de alerta ||

window.onload = function () {

    const alertBox = document.createElement("div");
    alertBox.innerHTML = "&#x2744; Feliz Natal &#x2744;";  // Floco de neve

    Object.assign(alertBox.style, {
        position: "fixed",
        top: "50px",
        right: "50px",
        padding: "10px 20px",
        color: "#afeeee",
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: "'Roboto', sans-serif",
        borderRadius: "20px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
        border: "none",
        textAlign: "center",
        opacity: "0",
        transform: "translateY(-20px)",
        transition: "opacity 0.5s, transform 0.5s, box-shadow 0.5s ease-in-out",
        background: "linear-gradient(135deg,  #CC231E, #34A65F, #CC231E)",
        backgroundSize: "400% 400%",
        animation: "glow 2s ease-in-out infinite",
    });

    document.body.appendChild(alertBox);


    setTimeout(() => {
        alertBox.style.opacity = "1";
        alertBox.style.transform = "translateY(0)";
    }, 1500);


    setTimeout(() => {
        alertBox.style.opacity = "0";
        alertBox.style.transform = "translateY(-20px)";
        setTimeout(() => alertBox.remove(), 500);
    }, 3500);
};

const style = document.createElement("style");
style.innerHTML = `
@keyframes glow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}
`;
document.head.appendChild(style);







