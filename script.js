//two variables that will hold the values of loading-text and bg css
const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

//laod will hold the % the text is done loading
let load=0;
//setInterval will call the blurring funtion every 40ms
let interval = setInterval(blurring, 40);

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
//function that will map a range of numbers to another range of numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
//funtion that will handle the bluring effect of the webpage
function blurring(){
    
    load++;//increment
    if(load > 99) {//once load=100, clear the intervals (stop calling burring funtion)
        clearInterval(interval)
    }

    console.log(load);

    loadText.innerText = `${load}%`;//writes the value of load to the text value of loadText
    loadText.style.opacity= scale(load, 0, 100, 1, 0);//opacity of loadText scales accoringly to the value of load
    bg.style.filter = `blur(${scale(load, 0, 100, 50, 0)}px)`;//blur of bg scales accordingly to the value of laod
}