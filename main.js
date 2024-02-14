let noClicks = 0;

function noClick(element) {
    if (noClicks === 0){
        element.innerText = "Yes"
        noClicks++;
    } else {
        element.remove();
    }
}
