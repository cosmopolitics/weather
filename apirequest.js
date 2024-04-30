//var weater = document.getElementById("weater");
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
        //console.log(data)
        globalData = data;
    })
    .catch(error => {
        console.error('Error:', error);
    });

function weatherparser() {
    const input = document.getElementById('searc');
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("myUL");
    const li = ul.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName("a")[0].innerText;

        if (a.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 1000);
    });
}

function weatherdata(quality) {
    const dis = document.getElementById("dis");
    resolveAfter2Seconds();
    dis.innerText = globalData["current"][quality];
    dis.style.display = "";
    console.log(globalData["current"][quality]);

}

