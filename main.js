// para utilizar a funcionalidade do drag and drop utilizei o video ( https://www.youtube.com/watch?v=uO-SuUhDI7k&t=41s&ab_channel=WillDev), como exemplo

const columns = document.querySelectorAll(".colunaDeAcesso");

document.addEventListener("dragstart", (evento) => {
  evento.target.classList.add("dragging");
});

document.addEventListener("dragend", (evento) => {
  evento.target.classList.remove("dragging");
});

columns.forEach((item) => {
  item.addEventListener("dragover", (evento) => {
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition(item, evento.clientY);

    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging);
    } else {
      item.prepend(dragging);
    }
  });
});

function getNewPosition(column, posY) {
  const cards = column.querySelectorAll(".item:not(.dragging)");
  let result;

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) result = refer_card;
  }

  return result;
}