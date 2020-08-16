let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search');

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    
    //Get input data
    let word = input.value;

    //Call API get data
    if(word === ''){
        alert("Word is required");
        return;
    }

    getData(word);
})
