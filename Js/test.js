var circle = document.querySelector('.circle');
var images = document.querySelectorAll('.circle img');
var angle = 0;

// setInterval(function () {
//     angle += 1;
//     circle.style.transform = 'rotate(' + angle + 'deg)';
//     for (var i = 0; i < images.length; i++) {
//         images[i].style.transform = 'rotate(' + (-angle * (i + 1)) + 'deg)';
//     }
// }, 100);


function spin() {
    var intervalId = setInterval(function () {
        angle += 1;
        circle.style.transform = 'rotate(' + angle + 'deg)';
        // for (var i = 0; i < images.length; i++) {
        //     images[i].style.transform = 'rotate(' + (-angle * (i + 1)) + 'deg)';
        // }
    }, 0.001 * 0.001);

    setTimeout(function () {
        clearInterval(intervalId);
    }, 5000);

}

// var intervalId = setInterval(function spin() {
//     angle += 1;
//     circle.style.transform = 'rotate(' + angle + 'deg)';
//     // for (var i = 0; i < images.length; i++) {
//     //     images[i].style.transform = 'rotate(' + (-angle * (i + 1)) + 'deg)';
//     // }
// }, 0.001);

// setTimeout(function () {
//     clearfunction(intervalId);
// }, 5000);