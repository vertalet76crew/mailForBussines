function faq() {
    const container = document.querySelector('[data-faq="container"]');
    container.addEventListener('click', (e) => clickHandler(e));
    function clickHandler(e) {
        const faqRightItem = e.target.closest('.faq__right-item');
        if (faqRightItem) {
            const answer = faqRightItem.querySelector('[data-click="close"]');
            const btn = faqRightItem.querySelector('[data-click="btn"]');
            answer.classList.toggle('faq__right-answer_active');
            btn.classList.toggle('faq__open-close_active');
        }
    }
}

export default faq;
