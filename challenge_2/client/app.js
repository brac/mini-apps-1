$(document).ready(()=>{
    
    // Set variable for original user input and converted csv data
    var input;
    var csvData;

    // Get user's input
    $('#submit').on('click', (event)=>{
        event.preventDefault();
        input = $('textarea').val();
        console.log('input: ', input);
        //console.log(typeof input);
        app.send(input);
    });

    var app = {
        
        server: 'http://127.0.0.1:3000/mo__csv_generator',
        headers: '',

        // POST the input to the server (JS format)
        send: (input) => {
            $.ajax({
                type: 'POST',
                url: app.server,
                data: input, 
                contentType: 'application/json',
                success: (data) => {
                    console.log('POST: data from server', data);
                    console.log('Data sent');
                    app.fetch(data);
                },
                error: (error) => {
                    console.log('POST failed');
                }
            });
        }, 

        // GET CSV data from the server
        fetch: (data) => {
            $.ajax({
                type: 'GET',
                url: app.server,
                data: data,
                success: (data) => {
                    console.log('GET: data from server:', data);
                    console.log('Data received');
                    csvData = data;

                    app.render(data);

                }, 
                error: (error) => {
                    console.log('GET Failed');
                }
            });
        },

        render: (data) => {
            var splited = data.split('\n');
            console.log('splited:', splited);
            
            // Render the table headers
            var table = $('<table></table>');
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





