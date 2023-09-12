const getArticles = async () => {
    /* Article text is generated using chatGPT */
    /* Images are from Unsplash */
    const response = await fetch('articles/articles.json')
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return response;
}

async function startApplication() {
    const articles = await getArticles();

    console.log(articles);

    // const greetingElement = document.getElementById('greeting');

    // // Call helper function to get a greeting message  
    // const greeting = greet();

    // // Update the DOM with the greeting message  
    // greetingElement.textContent = greeting;
}


document.addEventListener('DOMContentLoaded', startApplication);  