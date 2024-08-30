document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.querySelector(".random-image");
    const fetchButton = document.querySelector(".fetch-button");

   
    const fetchRandomImage = () => {
        return fetch("https://picsum.photos/800/600")
            .then(response => {
                imageElement.src = response.url;
            })
            .catch(error => {
                console.error("Error fetching image:", error);
                imageElement.alt = "Sorry, something went wrong. Please try again.";
            });
    };


    fetchButton.addEventListener("click", () => {
        fetchButton.disabled = true;
        fetchRandomImage().finally(() => {
            fetchButton.disabled = false;
        });
    });
});
