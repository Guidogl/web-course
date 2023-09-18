export const getArticles = async (url) => {
    /* Article text is generated using chatGPT */
    /* Images are from Unsplash */
    const response = await fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Error:', error);
        });

    return response;
}