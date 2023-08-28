document.addEventListener('DOMContentLoaded', () => {
    const tabs = Array.from(document.querySelectorAll('.tab__navigation .tab'));
    const contents = Array.from(document.querySelectorAll('.tab__content'));

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            const currActiveTab = document.querySelector('.tab_active');
            const currActiveContent = document.querySelector('.tab__content_active');

            currActiveTab.classList.remove('tab_active');
            currActiveContent.classList.remove('tab__content_active');

            tab.classList.add('tab_active');
            contents[i].classList.add('tab__content_active');
        })
    });
})