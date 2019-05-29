// count how many articles there are
function countArticles() {
    var numItems = 0;
    //              count flex classes which contains articles in each of them
    numItems = $('.card').length;
    //get the side header and append it with the amount of articles there are 
    var subHeader = document.getElementById("allArticlesSubHeader");
    //append it
    subHeader[0].innerHTML += "(" + numItems + ")";
}