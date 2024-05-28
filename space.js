$(document).ready(function() {
    
    const apiUrl = 'http://api.open-notify.org/astros.json';
    
    const corsProxy = 'https://cors-anywhere.herokuapp.com/';

    
    $.ajax({
        url: corsProxy + apiUrl,
        dataType: 'json',
        success: function(data) {
            
            console.log(data['number']);
            
            
            $('#number-of-people').text(data['number']);

            
            const peopleList = $('#people-list');
            
            
            data['people'].forEach(function(person) {
                
                const listItem = $('<li>').text(`${person.name} (${person.craft})`);
                
                peopleList.append(listItem);
            });
        },
        error: function(jqXHR, textStatus, errorThrown) {
            
            console.error('Error fetching data from the API', textStatus, errorThrown);
        }
    });
});
