const ajax = new XMLHttpRequest();
const newURL = 'https://api.hnpwa.com/v0/news/1.json'

ajax.open('GET', newURL, false);
ajax.send();

const newsFeed = JSON.parse(ajax.response)
const ul = document.createElement('ul');

for(let i = 0; i < newsFeed.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = newsFeed[i].title;
    ul.appendChild(li)
}

document.getElementById('root').appendChild(ul);