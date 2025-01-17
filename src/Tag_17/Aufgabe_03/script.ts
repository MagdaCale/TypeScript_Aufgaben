


enum HtmlError {
    OK = 200,
    Redirect = 300,
    BadRequest = 400,
    InternalServerError = 500
}

debugger

function showHtmlError() {
    const random = Math.floor(Math.random() * 6)
    if (random === 0 || random === 1 || random === 2) {
        console.log(HtmlError.OK);
    } else if (random === 3) {
        console.log(HtmlError.Redirect);
    } else if (random === 4) {
        console.log(HtmlError.BadRequest);
    } else if (random === 5) {
        console.log(HtmlError.InternalServerError);
    }   
}


console.log(showHtmlError());