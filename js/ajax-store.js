"use strict"

//Your online tool store should load data from the JSON file using a get request and append the data to the
// table. You will need to use either $.ajax() or $.get(), and a .done() callback.
//     const tableBody = document.querySelector('#insertProducts');

    $.ajax(`/data/inventory.json`)
        .done((tools) => {
            console.log(tools)

            for (let tool of tools) {
                const row = $('<div class="col-sm-3 "></div>');
                row.html(`
                    <div class="card mb-4 rounded-3 shadow-sm border-danger">
                         <div class="card-header py-3 text-bg-danger border-danger">
                            <h4 class="my-0 fw-normal">${tool.title}</h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">${tool.price}$<small class="text-body-secondary fw-light"></small></h1>
                            <ul class="list-unstyled mt-3 mb-4">
                                <li>${tool.quantity} in stock</li>
                                <li>${tool.categories}</li>
                            </ul>
                            <button type="button" class="w-100 btn btn-lg btn-primary">Purchase</button>
                        </div>
                    </div>
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



