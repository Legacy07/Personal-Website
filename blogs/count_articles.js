 <!--    count how many articles there are-->
        <script> 
            function countArticles() {
//                count flex classes which contains articles in each of them
                var numItems = $('.flex').length;
                //get the side header and append it with the amount of articles there are 
                var x = document.getElementsByClassName("sideHeader");
                x[0].innerHTML += "(" + numItems + ")";
            }
        </script>