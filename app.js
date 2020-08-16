let input = document.querySelector('#input');
let searchBtn = document.querySelector('#search');
let apiKey = '0cb565e4-f236-4f13-9818-576048f6df6e';
let notFound = document.querySelector('.not__found');

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

async function getData(word) {

    // Ajax call
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`);
    const data = await response.json();

      // if empty result 
      if (!data.length) {
        notFound.innerText = ' No result found';
        return;
      }

       // If result is suggestions
      if (typeof data[0] === 'string') {
        let heading = document.createElement('h3');
        heading.innerText = 'Did you mean?'
        notFound.appendChild(heading);
        data.forEach(element => {
            let suggestion = document.createElement('span');
            suggestion.classList.add('suggested');
            suggestion.innerText = element;
            notFound.appendChild(suggestion);
            
        })
        return;
    }

}
