


// Let's say you have a search input that fetches data from an API every time the user types. 
// Without debouncing, every keystroke would trigger a request, which is inefficient. Debouncing
// helps to limit the number of API calls.

let count = 0;
const getData = () => {
    console.log("Fetching data from API", count++);
}

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        args = arguments
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, args)
        }, delay);
    }
}

const betterFunction = debounce(getData, 300);