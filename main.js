const colunas = document.querySelectorAll(".colunaAcessos");

// função para quando selecionar um item do tipo "draggable"

document.addEventListener("dragstart", (e) =>{
    e.target.classList.add("dragging");
});

// função para quando soltar o item dentro da Div

document.addEventListener("dragend", (e) =>{
    e.target.classList.add("dragging");
});

// forEach para cada coluna, para que em cada coluna seja adicionado o evento dragover

colunas.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        const dragging = document.querySelector(".draggin");
        const applyAfter = getNewPosition(item, e.clientY);

        if(applyAfter) {
            applyAfter.insertAdjacentElement("afterned", dragging);
        }else {
            item.prepend(dragging);
        }
    });
});

function getNewPosition(coluna, clientY) {
    const cards = colunas.querySelectorAll(".nivelAcessos:not(.draggin)");
    let result;

    for(let refer_card of cards) {
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;

        if(posY >= boxCenterY) result = refer_card;
    }
    return result;
}