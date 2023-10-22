const doc = document;
const contentText = doc.querySelector('.contentText');
const btn = doc.querySelector('.btn');
let count = 0;

btn.innerHTML = 'Хочеш Більше інформації - тицяй';

btn.onclick = function() {
    if(count == 0) {
        btn.innerHTML = 'Менше інформації';
        contentText.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Saepe at, facilis velit sequi vitae quaerat nemo in repudiandae distinctio omnis dolor perspiciatis et provident eveniet.'
        count = 1;
    } else {
        btn.innerHTML = 'Хочеш Більше інформації - тицяй';
        contentText.innerHTML = '';
        count = 0;
    }

}











