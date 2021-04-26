# Testing

<a href="README.md">Main README file</a>

I used <a href="https://validator.w3.org/"> Markup Validation Service</a>,  <a href="https://jigsaw.w3.org/css-validator/">CSS Validation Service</a> and <a href="https://jshint.com/">JSHint</a> to check both HTML, CSS and Javascript using the direct input function of both services. CSS and Javascript came back with no issues flagged. However, Markup Validation Service came back with two warnings in my HTML code. These warnings indicated that there was use of unnessary Javascript in lines 17 and 18. After some investigation according to the EmailJS website both scripts are required in order to connect my form to EmailJS services, so I have left them in the code. 

I used Chromes inspect feature Lighthouse on my page, to improce the sites perfoamnce. The report found the following: 

* <b>Performance</b> - Scored 46 - This was the lowest scoring part of the Lighthouse test. The main points of criticism was "Time to Interactive", "Speed Index" and "Largest Contentful Paint". I was expecting that the creative decision to have a large image within the header would cause the website to score low when it came to load time, but hadn't taken into considersation how much this would effect the score. Following the test I experimented with different codecs and replaced a number of PNG's with compressed JPEG's in an attempt to improve this, but to now avail. 

* <b>Accessibility</b> - Scored 91 - This was a high scoring part of the Lighthouse test. The test flagged up small issues like "Heading elements are not in a sequentially-descending order" and "Links do not have a discernible name". However, all of these comments don't effect the overall performance of the site and are linked to creative decisons to prioritise the aesthic design by having the navigation bar at the top of the header, and use Font Awesome icons instead of text to link the cycling clubs social media accounts in the footer of the site.  

* <b>Best Practices</b> - Scored 87 - 

* <b>SEO</b>