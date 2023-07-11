$(() => {

    // Demonstrate .html getter
    console.log("jQuery:")
    console.log($('article.html').html());

    // Demonstrate JS equivalent
    const htmlArticle = document.querySelector('article.html');
    console.log("JavaScript:")
    console.log(htmlArticle.innerHTML);

    // Demonstrate .html as a setter
    $('#html-button').on('click', () => {
        $('article.html').html(`
            <h2>Something different in here</h2>
            <h2>Everything else is gone</h2>
        `);
    });

    // Demonstrate JS equivalent
    const htmlJSButton = document.querySelector('#js-html-button');
    htmlJSButton.addEventListener('click', (e) => {
        htmlArticle.innerHTML = `
            <p>JS Test</p>
        `;
    })


    // Demonstrate .append
    $('#html-append-button').on('click', () => {
        $('article.html').append(`
            <p>New Content</p>
        `)
    });

    // Demonstrate JS equivalent
    const htmlAppendJSButton = document.querySelector('#js-html-append-button');
    htmlAppendJSButton.addEventListener('click', () => {
        let newPara = document.createElement('p');
        newPara.innerText = "Test";
        newPara.addEventListener('click', function(){
            newPara.remove();
        })
        htmlArticle.appendChild(newPara);
    })

    // Demonstrate .css as getter
    console.log($('article.css div').css('height'));

    // Demonstrate JS Equivalent
    const cssSquare = document.querySelector('article.css div');
    console.log(cssSquare.style)


    // Demonstrate .css as setter
    $('#css-button').on('click', () => {
        $('article.css div').css({
            height: "600px",
            width: "600px"
        })
    });

    // Demonstrate JS Equivalent
    let changeCssButton = document.querySelector('#js-css-button');
    changeCssButton.addEventListener('click', () => {
        cssSquare.style.cssText = 'height: 600px; width: 600px;';
    });


    // Demonstrate .addClass
    $('#add-class-button').on('click', () => {
        $('article.class div').first().addClass('jeremy')
    });
    // Demonstrate .removeClass
    $('#remove-class-button').on('click', () => {
        $('article.class div').first().removeClass('jeremy')
    });
    // Demonstrate .toggleClass
    $('#toggle-class-button').on('click', () => {
        $('article.class div').first().toggleClass('jeremy')
    });

    // Demonstrate JS Equivalent
    // Declare variables for the box we want to change
    const classBox = document.querySelector('article.class > div');
    // Declare variables for each button
    const addClassButton = document.querySelector('#js-add-class-button');
    const removeClassButton = document.querySelector('#js-remove-class-button');
    const toggleClassButton = document.querySelector('#js-toggle-class-button');


    addClassButton.addEventListener('click', () => {
        classBox.classList.add('jeremy');
    });
    removeClassButton.addEventListener('click', () => {
        classBox.classList.remove('jeremy');
    });
    toggleClassButton.addEventListener('click', () => {
        classBox.classList.toggle('jeremy');
    });





    // Dark mode to be used as an example
    $('#dark-mode-button').on('click', () => {
        $('body').toggleClass('dark-mode');
    });

});