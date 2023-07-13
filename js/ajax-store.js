"use strict"

//Your online tool store should load data from the JSON file using a get request and append the data to the
// table. You will need to use either $.ajax() or $.get(), and a .done() callback.
    const tableBody = document.querySelector('#insertProducts');

    $.ajax(`/data/inventory.json`)
        .done((tools) => {
            console.log(tools)

            for (let tool of tools) {
                const row = $('<tr>');
                row.html(`
                    <td>${tool.title}</td>
                    <td>${tool.quantity}</td>
                    <td>${tool.price}$</td>
                    <td>${tool.categories.join(', ')}</td>
                `)
                $('#insertProducts').append(row);
            }
            // for (let i = 0; i < tools.length; i++) {
            //     const row = document.createElement('tr')
            //     row.innerHTML = `
            //         <td>${tools[i].title}</td>
            //         <td>${tools[i].quantity}</td>
            //         <td>${tools[i].price}$</td>
            //         <td>${tools[i].categories.join(', ')}</td>
            //     `;
            //
            //     tableBody.appendChild(row);
            // }
            // for (let tool of tools) {
            //     const row = document.createElement('tr')
            //     row.innerHTML = `
            //         <td>${tool.title}</td>
            //         <td>${tool.quantity}</td>
            //         <td>${tool.price}$</td>
            //         <td>${tool.categories.join(', ')}</td>
            //     `;
            //
            //     tableBody.appendChild(row);
            // }

        });



