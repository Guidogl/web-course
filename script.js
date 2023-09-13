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
    const articlesFetchResult = await getArticles();

    console.log(articlesFetchResult);

    const latestNews = document.getElementById('articles-latest');

    articlesFetchResult.articles
        .filter((article) => article.category === 'Technology')
        .forEach((article) => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-latest');

            const articleImage = document.createElement('img');
            // articleImage.classList.add('article-latest-image');
            articleImage.src = article.image;

            const articleMainDetails = document.createElement('div');
            articleMainDetails.classList.add('article-latest-main');

            const articleTitle = document.createElement('h3');
            articleTitle.textContent = article.title;

            const articleDate = document.createElement('h3');
            articleDate.textContent = article.date;

            articleMainDetails.appendChild(articleTitle);
            articleMainDetails.appendChild(articleDate);

            const articleText = document.createElement('p');
            articleText.textContent = article.description;

            articleElement.appendChild(articleImage);
            articleElement.appendChild(articleMainDetails);
            // articleElement.appendChild(articleDate);
            articleElement.appendChild(articleText);

            latestNews.appendChild(articleElement);
        });


    const breakingNews = document.getElementById('articles-breaking');

    articlesFetchResult.articles
        .filter((article) => article.category === 'News')
        .forEach((article) => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-breaking');

            const articleImage = document.createElement('img');
            articleImage.classList.add('article-breaking-image');
            articleImage.src = article.image;

            const articleMainDetails = document.createElement('div');
            articleMainDetails.classList.add('article-breaking-main');

            const articleTitle = document.createElement('h3');
            articleTitle.textContent = article.title;

            const articleDate = document.createElement('h3');
            articleDate.textContent = article.date;

            articleMainDetails.appendChild(articleTitle);
            articleMainDetails.appendChild(articleDate);

            articleElement.appendChild(articleImage);
            articleElement.appendChild(articleMainDetails);
            // articleElement.appendChild(articleDate);

            breakingNews.appendChild(articleElement);
        });

    // const greetingElement = document.getElementById('greeting');

    // // Call helper function to get a greeting message  
    // const greeting = greet();

    // // Update the DOM with the greeting message  
    // greetingElement.textContent = greeting;
}


document.addEventListener('DOMContentLoaded', startApplication);  