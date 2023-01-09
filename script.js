function toggleTheme() {

    var theme = document.getElementsByTagName('link')[0];
    if (theme.getAttribute('href') == 'StyleSheet1.css'){
        theme.setAttribute('href', 'StyleSheet2.css');
    } else {
        theme.setAttribute('href', 'StyleSheet1.css');
    }
    localStorage.setItem('sheet', theme.getAttribute('href'));
    
}

function changeWire(amount){
    localStorage.setItem('wireSize', amount);
    document.getElementsByClassName("column")[2].style.paddingTop = amount;

  }


window.onload = function(){
    var theme = document.getElementsByTagName('link')[0];
    if (!localStorage.hasOwnProperty('sheet')) {
        theme.setAttribute('href', "StyleSheet1.css");
    } else {
       theme.setAttribute('href', localStorage.getItem('sheet'));
        changeWire(localStorage.getItem('wireSize')); 
    }
    
    // TODO: Make the text box color persist even when someone refreshes the page
}