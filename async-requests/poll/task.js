document.addEventListener('DOMContentLoaded', () => {
    const titleEl = document.getElementById('poll__title');
    const answersEl = document.getElementById('poll__answers');

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {
            const res = JSON.parse(xhr.responseText);
            console.log(res);
            const {title, answers} = res.data;
            titleEl.innerText = title;

            answers.forEach(answer => {
                const answerEl = createEl('button', 'poll__answer', answer);

                answerEl.onclick = () => {
                    alert('Спасибо, ваш голос засчитан!');
                };

                answersEl.appendChild(answerEl);
            })
        }
    }

    xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhr.send();
})

function createEl(tagName, className, text) {
    const element = document.createElement(tagName);
    element.classList.add(className);
    element.innerText = text;
    return element;
}