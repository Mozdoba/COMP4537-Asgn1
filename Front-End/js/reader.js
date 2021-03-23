const endPointRoot = "COMP4537/assignment1/v1/quotes";
const GET = 'GET';
const xhttp = new XMLHttpRequest();

const loadQuotes = (isAllQuotes) => {
  const url = isAllQuotes ? `${endPointRoot}?isAdmin=false` : `${endPointRoot}/1?isAdmin=false`
  xhttp.open(GET, url);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      console.log(this.response);
      document.getElementById("quotes-root").innerHTML = this.responseText;
    }
  }
}

