export const savingText = (load, button) =>
  load
    ? (button.textContent = "Сохранение...")
    : (button.textContent = "Сохранить");
