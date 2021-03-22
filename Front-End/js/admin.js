const endPointRoot = "/assignment1/v1/quotes";
const DELETE = 'DELETE';
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
let qArray = [];
let countQuotes = 0;
const xhttp = new XMLHttpRequest();

addQuote = ({author, isAdmin, quote}) => {
    const div = document.createElement("div");
    div.setAttribute("id", `quote-${countQuotes}`);

    const inputQuote = document.createElement("textarea");
    inputQuote.setAttribute("type", "text");
    inputQuote.setAttribute("id", `input-quote-${countQuotes}`);
    inputQuote.value = quote;

    const inputAuthor = document.createElement("input");
    inputAuthor.setAttribute('type', 'text');
    inputAuthor.setAttribute("id", "inputAuthor" + quoteCounter);
    inputAuthor.value = author;

    let root = document.getElementById("root");
}
