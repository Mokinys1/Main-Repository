function makeParagraph(text = 'text here',backgroundColor = 'grey', fontSize = '50px', color = 'blue' , ) {

    document.write(`<p style=" color:${color};font-size: ${fontSize};background-color: ${backgroundColor};">${text}</p>`);
}
    makeParagraph();
    console.assert(document.body.children.length = 1);
    console.assert(document.body.querySelector('p') !== null);

    
  

