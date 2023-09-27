// Selecting the button element with the class "generate-meme-btn"
const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");

// Selecting the <img> element inside the element with the class "meme-generator"
const memeImage = document.querySelector(".meme-generator img");

// Selecting the element with the class "meme-title"
const memeTitle = document.querySelector(".meme-generator .meme-title");

// Selecting the element with the class "meme-author"
const memeAuthor = document.querySelector(".meme-generator .meme-author");

// This function updates the details displayed on the webpage
const updateDetails = (url, title, author) => {
    // Set the "src" attribute of the <img> element to the provided URL
    memeImage.setAttribute("src", url);

    // Set the innerHTML of the element with the class "meme-title" to the provided title
    memeTitle.innerHTML = title;

    // Set the innerHTML of the element with the class "meme-author" to the author information
    memeAuthor.innerHTML = `Meme by: ${author}`;
}

// This function generates a meme
const generateMeme = () => {
    // Fetch data from the meme API
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json()) // Convert the response to JSON
    .then((data)=> {
        // Call the updateDetails function with the fetched data
        updateDetails(data.url, data.title, data.author);
    });
}

// Add a click event listener to the "Generate Meme" button
generateMemeBtn.addEventListener("click", generateMeme);

generateMeme();