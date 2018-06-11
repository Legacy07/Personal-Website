 // When the user scrolls down 20px from the top of the document, show the button
            window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
                if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                    document.getElementById("autoScrollButton").style.display = "block";
                } else {
                    document.getElementById("autoScrollButton").style.display = "none";
                }
            }

            // When the user clicks on the button, scroll to the top of the document
            function autoScrollFunction() {
//                document.body.scrollTop = 0;
//                document.documentElement.scrollTop = 0;
                $("html, body").animate({ scrollTop: 0 }, 600);
            }