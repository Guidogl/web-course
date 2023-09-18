import { renderHomePage } from './utils/homePage.js';
import { renderNewsPage } from './utils/newsPage.js';
import { renderPoliticsPage } from './utils/politicsPage.js';
import { renderEconomyPage } from './utils/economyPage.js';
import { renderTechnologyPage } from './utils/technologyPage.js';

async function startApplication() {
    // using switch statement to render different pages
    switch (window.location.pathname) {
        case '/':
            await renderHomePage();
            break;
        case '/index.html':
            await renderHomePage();
            break;
        case '/pages/news.html':
            await renderNewsPage();
            break;
        case '/pages/politics.html':
            await renderPoliticsPage();
            break;
        case '/pages/economy.html':
            await renderEconomyPage();
            break;
        case '/pages/technology.html':
            await renderTechnologyPage();
            break;
        default:
            await renderHomePage();
            break;
    };
}

document.addEventListener('DOMContentLoaded', startApplication);