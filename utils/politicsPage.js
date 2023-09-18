import { getArticles } from './fetch.js';

export const renderPoliticsPage = async () => {
    const articlesFetchResult = await getArticles('/articles/articles.json');

    const latestNews = document.getElementById('page-articles');

    articlesFetchResult.articles
        .filter((article) => article.category === 'Politics')
        .forEach((article) => {
            const articleElement = document.createElement('div');
            articleElement.classList.add('article-section');

            const articleImage = document.createElement('img');
            articleImage.classList.add('article-igm');
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
};