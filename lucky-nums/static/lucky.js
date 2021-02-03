/** processForm: get data from form and make AJAX call to our API. */

async function processForm(evt) {
    evt.preventDefault();

    const name  = $('#name').val();
    const year  = $('#year').val();
    const email = $('#email').val();
    const color = $('#color').val();

    const formInput = {name, year, email, color};
    
    const baseUrl   = 'http://127.0.0.1:5000';
    const resp      = await axios.post(`${baseUrl}/api/get-lucky-num`, formInput);
    handleResponse(resp);

    $('#lucky-form').trigger('reset');
}


/** handleResponse from lucky-num API. */

function handleResponse(resp) {
    if (resp.data.errors){
        for (let key of Object.keys(resp.data.errors)){
            $(`#${key}-err`).text(`${resp.data.errors[`${key}`]}`);
        }
    }
    else {
        const num_txt    = `Your lucky number is ${resp.data.num.num}. Fun fact: ${resp.data.num.fact}`;
        const yr_txt    = `Fun fact about your birth year ${resp.data.year.year}: ${resp.data.year.fact}`;
        
        const numP      = document.createElement('p');
        const yrP       = document.createElement('p');

        numP.innerText  = num_txt;
        yrP.innerText   = yr_txt;

        $('#lucky-results').append(numP, yrP);
    }
}


$("#lucky-form").on("submit", processForm);
