function faq() {
  const container = document.querySelector("[data-faq='container']");

  container.addEventListener("click", (e) => clickHandler(e));

  function clickHandler(e) {
    if (e.target.classList.contains("faq__open-close")) {
      const answer = e.target.parentElement.querySelector(
        "[data-click='close']"
      );
      answer.classList.toggle("faq__right-answer_active");

      e.target.classList.toggle("faq__open-close_active");
    }
  }
}

export default faq();
