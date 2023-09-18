import { getArticles } from './fetch.js';

export const renderHomePage = async () => {
    const articlesFetchResult = await getArticles('articles/articles.json');

    const latestNews = document.getElementById('articles-latest');

    articlesFetchResult.articles
        .filter((article) => article.category === 'Technology')
        .forEach((article) => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-latest');

            const articleImage = document.createElement('img');
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
            breakingNews.appendChild(articleElement);
        });
};