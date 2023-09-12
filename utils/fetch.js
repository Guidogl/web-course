export const getArticles = async () => {
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