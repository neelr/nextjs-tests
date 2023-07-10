// generate random title for the page
function generateTitle() {
    const nouns = [
        "dog",
        "cat",
        "bird",
        "fish",
        "lizard",
        "snake",
        "hamster",
    ];
    const adjectives = [
        "happy",
        "sad",
        "angry",
        "sleepy",
        "hungry",
        "thirsty",
        "excited",
    ];
    const verb = [
        "winning",
        "losing",
        "eating",
        "sleeping",
        "drinking",
        "running",
        "jumping",
    ];
    // capitalize the first letter of the title
    const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

    const random = (arr) => arr[Math.floor(Math.random() * arr.length)];
    return `${capitalize(random(adjectives))} ${random(nouns)} found ${random(verb)}!`;
}

export default (req, res) => {
    res.statusCode = 200;
    res.json({
        "title": generateTitle(),
    });
};