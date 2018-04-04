$(document).ready(()=>{
    
    // Set variable for original user input and converted csv data
    var input;
    var csvData;

    // Get user's input
    $('#submit').on('click', (event)=>{
        event.preventDefault();
        input = $('textarea').val();
        console.log('input: ', input);
        app.send(input);
    });

    var app = {
        
        server: 'http://127.0.0.1:3000/mo__csv_generator',
        headers: '',

        // POST the input to the server (JS format)
        send: (input) => {
            fetch(app.server, {
                body: input,
                headers: {
                    'content-type': 'application/json'
                },
                method: 'POST',
            })
            .then((response) => {
                return response.text();
            })
            .catch((error)=> console.error('Error:', error))
            .then((response) => {
                console.log('Success:', response);
                app.render(response);
            });

            // $.ajax({
            //     type: 'POST',
            //     url: app.server,
            //     data: input, 
            //     contentType: 'application/json',
            //     success: (data) => {
            //         console.log('POST: data from server', data);
            //         console.log('Data sent');
            //         app.render(data);
            //     },
            //     error: (error) => {
            //         console.log('POST failed');
            //     }
            // });
        }, 

        render: (data) => {
            var splited = data.split('\n');
            console.log('splited:', splited);

            $('#sales').remove();

            // Render the table headers
            var table = $('<table id="sales"></table>');
            
            var headers = splited[0];
            var headersArray = headers.split(',').slice(0,6);

            // create a table for headers 
            var row = $('<tr></tr>');
            $(table).append(row);
            $(row).append(`<th>id</th>`);
            headersArray.forEach((data)=> {
                $(row).append(`<th>${data}</th>`);
            });
            $('body').prepend(table);

            // Render the rest of data 
            var restData = splited.slice(1);
            restData.forEach((array)=> {
                var row = $('<tr></tr>');
                var eachPerson = array.split(',').slice(0,7);
                eachPerson.forEach((person)=> {
                    $(row).append(`<td>${person}</td>`);
                });
                $('table').append(row);
            });

        }
    }


});





