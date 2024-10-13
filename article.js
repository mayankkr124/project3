// import {my_API_key} from "./config.js";

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b93f7a75a3msh13d0ea028853106p162884jsn28843abab7ea',
		'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
	}
};

const btn = document.querySelector('.btn');
const summary = document.querySelector('.summary');

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    const input = document.querySelector("#url").value;
    const url = `https://article-extractor-and-summarizer.p.rapidapi.com/summarize?url=${input}&lang=en&engine=2`;
    summary.innerText = "Please be patient, your summary is on the way..."
    fetch(url, options)
    .then(data => data.json())
    .then((data)=>{
        summary.innerText = data?.summary
        console.log(data?.summary)
    })
    .catch(error => {
        console.log(error)
    })
})


