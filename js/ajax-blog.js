"use strict"

    $.ajax(`/data/blog.json`)
        .done((blogs) => {

        for (let blog of blogs) {
            const blogCard = $('<div class="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary"></div>')
            blogCard.html(`
                <h1 class="display-4 fst-italic">${blog.title}</h1>
                <p class="lead my-3">${blog.content}</p>
                <p class="lead mb-0">${blog.date}</p>
                <p>${blog.categories}</p>
                
            `)
                $('#posts').append(blogCard)
        }






        });