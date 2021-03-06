// Turite HTML dokumentą, kuriame yra pateiktas vienas div su id=”main”.

// UŽDUOTIS: Sukurti jam (jo vidui) tokį markup naudojant JavaScipt:

// ┌─┐┬ ┬┌─┐┌─┐┬┌─  ┬  ┬┌┐┌┌─┐  
// │  ├─┤├┤ │  ├┴┐  │  ││││├┤   25
// └─┘┴ ┴└─┘└─┘┴ ┴  ┴─┘┴┘└┘└─┘

// <h2> tag’as su tekstu;
let ch2 = document.createElement('h2');

let ch2Text = document.createTextNode('Hello im h2 tag');

ch2.appendChild(ch2Text);

document.querySelector('#main').appendChild(ch2);

// <p> tag’as su tekstu;
let cP = document.createElement('p');

let cPtext = document.createTextNode('Hello im p tag');

cP.appendChild(cPtext);

document.querySelector('#main').appendChild(cP); //also we can use document.body.appendChild(cP)


// <ul> tag’as, kurio viduje yra 5 <li> su paveiksliukais;
    let ul=document.createElement('ul');
    for(i=0;i<5;i++)
    {
        let li=document.createElement('li');
        li.innerHTML=`<a href="https://www.qries.com/">
        <img alt="Qries" src="https://www.qries.com/images/banner_logo.png"
        width="150" height="70">`;
        ul.appendChild(li);
    }
    document.querySelector('#main').appendChild(ul);

// <p> tag’as su tekstu.
let cP2 = document.createElement('p');

let cPtext2 = document.createTextNode('Hello im p tag 2');

cP2.appendChild(cPtext2);

document.querySelector('#main').appendChild(cP2);


	


