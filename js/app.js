//1. Удалить из списка не машины -->
const li = document.querySelectorAll('li');
li[2].remove();
li[4].remove();
//2. с помощью джаваскрипт добавить ко всем li элементам класс listItem  и к ul элементу класс list из style.css -->
const elementLi = document.querySelectorAll('li');
for(let li of elementLi) {
    li.classList.add('listItem')
}

const elementUl = document.querySelector('ul');
elementUl.classList.add('list')

const ul = document.querySelector('ul');
//3. добавить в начало списка новый элемент li с текстом Bugatti-->
const bugatti = document.createElement('li');
bugatti.innerText = 'Bugatti';
const firstLi = document.querySelector('li');
ul.insertBefore(bugatti,firstLi).classList.add('listItem');

//4. добавить в конец списка новый элемент li с текстом Ford-->
const ford = document.createElement('li');
ford.innerText = 'Ford';
ul.appendChild(ford).classList.add('listItem');
//5. Добавить в форму с помощью джаваскрипт инпут для имени, фамилии, пароля и подтверждения пароля
const form = document.querySelector('form');
const firstName = document.createElement('input');
const lastName = document.createElement('input');
const password = document.createElement('input');
const confirmPass = document.createElement('input');

firstName.setAttribute('type','text');
lastName.setAttribute('type','text');
password.setAttribute('type','password');
confirmPass.setAttribute('type','password');

const br = document.createElement('br');
const br1 = document.createElement('br');
const br2 = document.createElement('br');
const br3 = document.createElement('br');

form.append(br);
form.append('Name:',firstName);
form.append(br1);
form.append('Last Name:',lastName);
form.append(br2);
form.append('Password:',password);
form.append(br3);
form.append('Confirm password:',confirmPass);

firstName.placeholder = 'Name';
lastName.placeholder = 'Last Name';
password.placeholder = 'Password';
confirmPass.placeholder = 'Confirm Password';
//6. Добавить на страницу любую картинку м помощью джаваскрипт
const image = document.createElement('img');
image.src = 'images/02.jpeg';
document.querySelector('form').prepend(image);
//7. Удалить из параграфа класс red и italic
const p = document.querySelector('p');
p.classList.toggle('red');
p.classList.toggle('italic');
//8. С помощью джаваскрипт добавить в див h1 тэг с текстом - this is h1 tag
const h1 = document.createElement('h1');
h1.innerText = 'This is h1 tag,motherfucka!';
document.querySelector('#h1Wrapper').appendChild(h1);
//9. установить h1 тэгу цвет текста - синий и размер шрифта 40 пикселей
h1.style.color = 'blue';
h1.style.fontSize = '40px';