<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en-gb">

    <!--    https://www.cloudways.com/blog/connect-mysql-with-php/-->
    <!--    https://madmimi.com/-->
    <!--    https://mailchimp.com/monkey-rewards/?utm_source=freemium_newsletter&utm_medium=email&utm_campaign=monkey_rewards&aid=ec607a78c8c22d43252e703bd&afl=1-->
    <?php
    //declaring variables
    $message = "";
$verifiedMessage = "";
// Database Connection 
$conn = mysqli_connect("ahmetince.co.uk","ahmet871_blog","Mertmert2004","ahmet871_BlogDB");
if (mysqli_connect_errno($conn)) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
} ?>

    <head>
        <!--     adapted to have a responsive design but not 100% of a mobile view from - https://webdesign.tutsplus.com/articles/quick-tip-dont-forget-the-viewport-meta-tag--webdesign-5972 -->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <!-- using the custom css -->    
        <link rel="stylesheet" href="../../css/project_style.css"/>
        <link rel="stylesheet" href="../../css/nav_bar.css"/>
        <link rel="stylesheet" href="../../css/magnific-popup.css"/>
        <link rel="stylesheet" href="../../css/footer.css"/>
        <link rel="shortcut icon" href="http://ahmetince.co.uk/logo.png" type="image/png" />

        <link rel="stylesheet" href="../../css/subscribe_blog.css"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat|Poppins" rel="stylesheet">
        <script src="../js/nav_bar.js"></script>
        <script src="../js/back_to_top.js"></script>

        <!--        webgl libraries-->
        <script type="text/javascript" src="../../js/three.js"></script>
        <script type="text/javascript" src="../../js/jquery.js"></script>
        <script type="text/javascript" src="../../js/stats.js"></script>
        <script src="../../js/rotating_cube.js"></script>

        <!--        google analytics-->
        <script src="../../js/google_analytics.js"></script>

        <link rel="stylesheet" href="../../css/share.css" />

        <title>Book Review: Way of the Peaceful Warrior</title>
    </head>

    <body>
        <!--        Navigation bar-->
        <div id="navigation">

        </div>
        <script> $(function() {
                $("#navigation").load("../nav_bar_diff_folders.html");
            });
        </script>

        <!--        share-->
        <div class="share"> 

            <iframe src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fahmetince.co.uk%2Fblogs%2Fbook_reviews%2Fway_of_the_peaceful_warrior.html&layout=button_count&size=small&mobile_iframe=true&width=69&height=20&appId" width="69" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>

            <script src="//platform.linkedin.com/in.js" type="text/javascript"> lang: en_US</script>
            <script type="IN/Share" data-url="http://ahmetince.co.uk/blogs/book_reviews/way_of_the_peaceful_warrior.html"></script>
        </div>

        <!--            Subscribe for blog-->
        <div class="subscribeBox">
            <form name="phpForm" action="test_review.php" method="post">
                <p>
                    Subscribe to my Blog posts
                </p>
                <input class="subscribeEmail" type="email" id="subscribe" name="subscribe" placeholder="Enter your e-mail" required>
                <input class="subscribeButton" type="submit" name="subscribeButton" value="Subscribe">

                <?php
                //if register button is succesfully clicked then send data from textboxes into these variables
                if (isset($_POST['subscribeButton']))
                {   
                    $eM   = $_POST['subscribeEmail'];
                    $notConfirmed = 0;


                    if ( !preg_match('/^([\w\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/',$eM) ){
                        echo "Please enter a valid e-mail";
                    }
                    else{

                        //options for bcrypt uses blowfish encryption, including salt for improving encryption.
                        $options = [
                            'cost' => 11,
                            'salt' => mcrypt_create_iv(22, MCRYPT_DEV_URANDOM),
                        ];
                        //hash the email 
                        $hashEmail = password_hash($eM, PASSWORD_BCRYPT, $options);

                        //DO; if email is found and its confirmed then output else if the email is found but not confirmed then also output a message]
                        
                        //finding the email using mysqli_query framework.
                        $emails = mysqli_query($conn, "SELECT * FROM test_Blog_Subs where email='$eM'");
                        //return the rows of the search
                        $rows = mysqli_affected_rows($conn);
                        //if any email is found then output a message 
                        if($rows >=1){
                            $message = "This email is already subscribed.";
                        }
//                        else if
                        //if not insert the data in table
                        else{
                            //insert values into rows
                            $sql = mysqli_query($conn, "INSERT INTO test_Blog_Subs (email, emailHash, isEmailConfirmed)
                            VALUES ('$eM','$hashEmail', '0')");

                            //adapted to send an email with dynamically created website from - https://code.tutsplus.com/tutorials/how-to-implement-email-verification-for-new-members--net-3824

                            //Sending email with verificaiton link 
                            $to      = $eM; // email of the registered member
                            $subject = 'E-mail Confirmation for ahmetince.co.uk/blog'; 
                            $body = 
                                '
                            Hi there,
                            
                            In order to complete the subscription, please click on the link below to confirm your e-mail address and start receiving my weekly blog posts.
                            
                            ----------------------------------------------------------------------------------------------------------------

                            Please click on this link to confirm:
                           this link change http://stuweb.cms.gre.ac.uk/~ai6935u/web_cw/email_activation.php?email_address='.$eM.'&email_hash='.$hashEmail.'';

                            $headers = 'From: my email address' . "\r\n"; // headers
                            $status = mail($to, $subject, $body, $headers); // Sending email

                            if($status)
                            { 
                                $verifiedMessage ="A confirmation e-mail including a link has been sent to $eM";
                            } else { 
                                echo '<p>Something went wrong, Please try again!</p>'; 
                            }
                        }
                    }}

                //close connection
                mysqli_close($conn);

                ?>
            </form>
        </div>

        <section class="BlogSection">
            <p class="Header">Way of the Peaceful Warrior</p>
            <p><i>Posted on 10/09/2018</i></p>
            <!--            - <i>Page Hits: </i><a href="http://www.amazingcounters.com"><img border="0" src="http://cc.amazingcounters.com/counter.php?i=3226588&amp;c=9680077" alt="AmazingCounters.com"/></a>-->
            <img src="way-of-the-peaceful-warrior.jpg" alt="Book Cover" width="250" height="333">

            <p>Interestingly enough, this is my first ever blog post and what is better than sharing one of the best books I’ve ever read as a first blog post? There could be a plenty of other topics but oh well. I just want everyone to have a quick glimpse on this book at least. 
            </p>
            <p><i>“Warriors, warriors we call ourselves. We fight for splendid virtue, for high endeavour, for sublime wisdom, therefore we call ourselves warriors” – Aunguttara Nikaya.</i></p>
            <p>As the book itself; it contains three main chapters and three sub chapters for each. The book is 210 pages long and doesn't contain any images which leaves to your own imagination. And Dan Millman has done a great job of making the reader re-live the situation/moment even if it's imaginary, sorcery or real.</p>
            <p>Though as soon as i started reading, i couldn't get myself off of it. I have experienced this kind of feeling couple of times and it was only the times at the release of a new Battlefield game and i just couldn't help but play the shit out of it for a good period of time. Thus, i give props to Dan Millman and thank <a class="githubLink" href="https://www.youtube.com/channel/UCFxdcuY-S6yjZGq_2cjilHg" target="_blank">John Sonmez</a> for recommending. </p>
            <p>So, let's get straight to the point, as the book's title suggests "A Book That Changes Lives", it certainly made me realise some aspects in life and expanded my perspective on situations, failures and problems i face/d and take good lessons from it. As a whole, i really became more relaxed and a calmer person who really learned listen to understand rather than to respond. I, again, remembered the truths and lessons that i had to apply in life and mould in the character that i wanted to be, 'A Warrior'.</p>
            <p>To conclude, Dan Millman's approach is somewhat in a fictional sense but not so fictional if you get what i mean. He puts you through many feelings which define the whole purpose; to free the mind and being in the moment. This allows you to express all kinds of emotions you currently possess and just let it out, hence you come to the realisation that it's never worth it to keep it within yourself. This is how you let go of the weight you've been carrying on your shoulders all this time and learn to be yourself but more importantly 'Being a Warrior', and a 'A Peaceful Warrior'. </p>
            <p >Consequently, I recommend this book heavily for everyone and insist for the ones who really want to develop themselves. I bought a second hand copy for £3 which was in a some-what good condition from <strong><a class="githubLink" href="https://www.ebay.co.uk/itm/Way-of-the-Peaceful-Warrior-by-Millman-Dan-Paperback-Book-The-Cheap-Fast-Free/302031794719?ssPageName=STRK%3AMEBIDX%3AIT&_trksid=p2060353.m1438.l2649" target="_blank">worldofbooks08</a></strong> supplier on eBay.</p>

            <ul class="Buzz_Words">
                <li>Philosophy</li>
                <li>Spiritual</li>
                <li>Inspirational</li>
                <li>Journey</li>
                <li>Being a Warrior</li>
            </ul>

            <!--        Commenting-->

            <div id="disqus_thread"></div>
            <script>

                /**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

                var disqus_config = function () {
                    this.page.url = 'http://ahmetince.co.uk/blogs/book_reviews/way_of_the_peaceful_warrior.html';  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = 'Way_of_the_peaceful_warrior'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };

                (function() { // DON'T EDIT BELOW THIS LINE
                    var d = document, s = d.createElement('script');
                    s.src = 'https://http-ahmetince-co-uk.disqus.com/embed.js';
                    s.setAttribute('data-timestamp', +new Date());
                    (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>

        </section>

        <!--footer-->
        <div id="footer">
        </div>
        <script> 
            $(function() {
                $("#footer").load("../footer_diff_folders.html");
            });
        </script>



        <!-- jQuery 1.7.2+ or Zepto.js 1.0+ -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>

        <button onclick="autoScrollFunction()" id="autoScrollButton">Back to top</button>

    </body>
</html>