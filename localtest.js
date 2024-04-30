
let globalData = [];
fetch("http://api.weatherapi.com/v1/current.json?key=ca0dfea76cc549a291e220504240204&q=Sacramento")
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        resolveAfter2Seconds();
        console.log(data);
        logger(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 1000);
    });
}

async function logger(data) {
    resolveAfter2Seconds();
    console.log(data["current"]["temp_f"]);
}
