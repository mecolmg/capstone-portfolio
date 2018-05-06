<template>
  <div class="portfolio">
    <div class="uk-child-width-1-2@s uk-grid-match" uk-grid>
      <div><div class="uk-card uk-card-hover uk-card-default uk-card-body" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
        <div uk-grid>
          <div class="uk-width-2-3">
            <h3 class="uk-card-title">What is this?</h3>
            <p>
              This is a portfolio of my work done in
              the CS 4644: Creative Computing Studio.
            </p>
          </div>
          <div class="uk-width-1-3 uk-align-center">
            <img class="vt-logo" src="https://www.assets.cms.vt.edu/images/Standard/Standard_RGB.svg">
          </div>
        </div>
      </div></div>
      <div><div class="uk-card uk-card-hover uk-card-primary uk-card-body uk-animation-slide-top" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
        <div uk-grid>
          <div class="uk-width-1-3 uk-flex uk-flex-middle">
            <div class="profile-pic-wrapper">
              <img class="profile-pic" src="../assets/profile-pic.jpg">
            </div>
          </div>
          <div class="uk-width-2-3">
            <h3 class="uk-card-title">Who am I?</h3>
            <p>
              I am Colm Gallagher.
              <br>
              A Senior at Virginia Tech.
              <br>
              A Computer Scientist and Computer Engineer.
            </p>
          </div>
        </div>
      </div></div>
    </div>
    <div class="parallax-under-specified
                uk-card uk-card-default uk-align-center
                uk-overflow-hidden"
        uk-parallax="bgx:-100,100; invert: 100; viewport: 0.8;">
      <img src="../assets/projects-under-specified.png">
    </div>
    <h1 class="uk-heading-primary uk-text-center sticky-header"
        uk-parallax="blur: 10, 0; viewport: 0.8;"
        uk-sticky="bottom: #sketch-problems">
      Sketch Problems
    </h1>
    <div id="sketch-problems">
      <div class="uk-grid-match" uk-grid>
        <div class="uk-width-1-2@m">
          <div id="sp1" class="uk-card uk-card-hover uk-card-primary uk-card-body" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
            <h3 class="uk-card-title">Sketch Problem 1: Introductions</h3>
            <p>
              For Sketch Problem 1, we were tasked with introducing a team of
              4 class members through some sort of technology. With those
              constraints, my team came up with the idea to create a conversation
              between the two most common smart home devices, the Amazon Alexa and
              Google Home. The two smart speakers commentated our team's introductions
              as if it were a fashion show, using designed responses to trigger each other.
            </p>
          </div>
        </div>
        <div class="uk-width-1-2@m">
          <div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow="animation: push; autoplay: true; min-height: 350;">
            <ul class="uk-slideshow-items">
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/home-and-alexa.jpg" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Google Home and Amazon Alexa</h3>
                </div>
              </li>
            </ul>
            <a class="slideshow-buttons uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="slideshow-buttons uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
          </div>
        </div>
      </div>
      <div class="uk-grid-match uk-flex-wrap-reverse" uk-grid>
        <div class="uk-width-1-2@m">
          <div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow="animation: push; min-height: 350; autoplay: true; autoplay-interval: 3000; pause-on-hover: true;">
            <ul class="uk-slideshow-items">
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/twine.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Twine Storyboard</h3>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/story-intro.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Story Introduction</h3>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/navigation.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Story Navigation</h3>
                  <p class="uk-margin-remove">Users can navigation throughout the ship from this screen</p>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/choose-method.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Choose Your Own</h3>
                  <p class="uk-margin-remove">Users can choose the murder method to change the story</p>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/winning-screen.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Winning Screen</h3>
                  <p class="uk-margin-remove">
                    Depending on how you play, anyone could be the murderer.
                    In this case the Scientist was the culprit!
                  </p>
                </div>
              </li>
            </ul>
              <a class="slideshow-buttons uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
              <a class="slideshow-buttons uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
            </div>
          </div>
          <div class="uk-width-1-2@m">
            <div id="sp2" class="uk-card uk-card-hover uk-card-primary uk-card-body" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
              <h3 class="uk-card-title">Sketch Problem 2: Narrative</h3>
              <p>
                For Sketch Problem 2, we were tasked with creating a narrative
                through technology, and have it focus on the semester theme
                "Systems of Truth." My new team for this sketch problem chose to
                create a digital choose-your-own adventure murder-mystery game,
                with the catch being that there was no specific murderer.
                Depending on how you played the game, every crew member on our
                spaceship had motive, and if the correct evidence is found, they
                will admit to the murder.
              </p>
            </div>
          </div>
        </div>
      <h1 class="uk-heading-primary uk-text-center sticky-header"
          uk-parallax="color: #000000, #2196F3, #f44336, #4CAF50, #673AB7; blur: 10, 0; viewport: 0.7">
        "Systems of Truth"
      </h1>
      <div class="uk-grid-match" uk-grid>
        <div class="uk-width-1-2@m">
          <div id="sp3" class="uk-card uk-card-hover uk-card-primary uk-card-body" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
            <h3 class="uk-card-title">Sketch Problem 3: Artist Inspired Pecha Kucha</h3>
            <p>
              For Sketch Problem 3, we were tasked with creating a Pecha Kucha presentation
              (a presentation with 10 slides, each played for exactly 10 seconds) about an
              artist we were inspired by, and a project idea which he or she inspired. After
              research, I came upon the work of Golan Levin and was inspired by his "QR Codes for
              Digital Nomads" piece, where he spray-painted a QR code in an area to give a brief
              message to the scanner about that area. This concept reminded me of "bloodstains"
              from the hit game Dark Souls, and I came up with an idea that take this idea and
              implement it using Augmented Reality similar to how Pokemon Go works. The bloodstains
              could then be placed anywhere in the world for people to find, without vandalizing any
              property.
            </p>
            <a href="https://goo.gl/B1F8Fn" class="uk-button uk-button-danger uk-align-right">View the entire Pecha Kucha</a>
          </div>
        </div>
        <div class="uk-width-1-2@m">
          <div class="uk-position-relative uk-visible-toggle uk-light" uk-slideshow="animation: push; autoplay: true; min-height: 550; autoplay-interval: 3000; pause-on-hover: true;">
            <ul class="uk-slideshow-items">
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/golan.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Golan Levin</h3>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/qrcodes.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">QR Codes for Digital Nomads</h3>
                  <p class="uk-margin-remove">
                    One of Golan Levin's projects, which he cut out QR Code stencils
                    which he would then spray-paint around a city, to act as little messages
                    about the surrounding area
                  </p>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/qrcodes2.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Example QR Code Messages</h3>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/bloodstains.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Bloodstains from Dark Souls</h3>
                  <p class="uk-margin-remove">
                    Bloodstains in the video game Dark Souls represent messages left by players
                    to other players on the map. Some messages give useful tips, while others are
                    are jokes, or tricks meant to mislead you.
                  </p>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/pokemongo.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Pokemon Go</h3>
                  <p class="uk-margin-remove">
                    I was going to base my design for this mobile app project on Pokemon Go which
                    shows that the technology is available in the palm of our hands to complete
                    such a project.
                  </p>
                </div>
              </li>
            </ul>
            <a class="slideshow-buttons uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a class="slideshow-buttons uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
          </div>
        </div>
      </div>
      <div class="uk-grid-match uk-flex-wrap-reverse" uk-grid>
        <div class="uk-width-1-2@m">
          <div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow="animation: push; min-height: 500; autoplay: true; autoplay-interval: 3000; pause-on-hover: true;">
            <ul class="uk-slideshow-items">
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/fatman-start.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Fat-Man Start Page</h3>
                  <p class="uk-margin-remove">
                    You can see our groups members high-up on the leaderboard.
                  </p>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/fatman-ready.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Fat-Man Game</h3>
                  <p class="uk-margin-remove">
                    In this case, Fat-Man had just gotten eaten by the Broccoli, and
                    is sent back to the beginning.
                  </p>
                </div>
              </li>
              <li>
                <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
                  <img src="../assets/fatman-level2.png" alt="" uk-cover>
                </div>
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
                  <h3 class="uk-margin-remove">Fat-Man Level 2</h3>
                  <p class="uk-margin-remove">
                    There were actually 20 generated levels created from the GitHub
                    project we forked.
                  </p>
                </div>
              </li>
            </ul>
              <a class="slideshow-buttons uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
              <a class="slideshow-buttons uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
            </div>
          </div>
          <div class="uk-width-1-2@m">
            <div id="sp4" class="uk-card uk-card-hover uk-card-primary uk-card-body" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
              <h3 class="uk-card-title">Sketch Problem 4: Overconstrained and Underspecified</h3>
              <p>
                For Sketch Problem 4, we were tasked with creating a project which would
                combine 4 unique skills that each of our team-members possessed. However,
                the team-members must teach the basics of their unique skill to the other
                members, and they must implement part of that skill. My team developed a
                Pac-Man clone, which we dubbed "Fat-Man," with the twist being that the game
                could be played with up to four controllers attached, with each controller only
                having control over a portion of the actual controls, and eating the required
                power-up pellets would randomize which controls the controller had. This led to
                chaos and made for a very fun game. This project combined Video Game
                Design, Pixel Art, Single-Board Computers, and Music.
              </p>
            </div>
          </div>
        </div>
    </div>
    <h1 class="uk-heading-primary uk-text-center sticky-header"
        uk-parallax="blur: 5, 0; viewport: 0.8;"
        uk-sticky="bottom: #final-project">
      Final Project
    </h1>
    <div id="final-project">
      <div id="feeltime-poster" class="uk-card uk-card-hover uk-card-primary uk-width-1-1 uk-margin-medium-top uk-margin-medium-bottom" uk-scrollspy="cls: uk-animation-scale-up; repeat: true">
        <img src="../assets/feeltime-poster.png">
      </div>
      <div class="uk-flex-wrap-reverse" uk-grid>
        <div class="uk-width-2-3@m">
          <div class="uk-child-width-expand@s uk-text-center" uk-grid-parallax>
            <div>
              <div class="uk-card uk-card-hover uk-card-default uk-grid-margin">
                <img src="../assets/happy.png">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-padding-small">
                  <h3 class="uk-margin-remove">Happy</h3>
                </div>
              </div>
              <div class="uk-card uk-card-hover uk-card-default uk-grid-margin">
                <img src="../assets/sad.png">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-padding-small">
                  <h3 class="uk-margin-remove">Sad</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-hover uk-card-default uk-grid-margin">
                <img src="../assets/fear.png">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-padding-small">
                  <h3 class="uk-margin-remove">Fear</h3>
                </div>
              </div>
              <div class="uk-card uk-card-hover uk-card-default uk-grid-margin">
                <img src="../assets/disgust.png">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-padding-small">
                  <h3 class="uk-margin-remove">Disgust</h3>
                </div>
              </div>
            </div>
            <div>
              <div class="uk-card uk-card-hover uk-card-default uk-grid-margin">
                <img src="../assets/anger.png">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-padding-small">
                  <h3 class="uk-margin-remove">Anger</h3>
                </div>
              </div>
              <div class="uk-card uk-card-hover uk-card-default uk-grid-margin">
                <img src="../assets/surprise.png">
                <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-padding-small">
                  <h3 class="uk-margin-remove">Surprise</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="uk-width-1-3@m">
          <div class="uk-card uk-card-hover uk-card-secondary uk-card-body uk-grid-margin" uk-scrollspy="cls: uk-animation-slide-right; repeat: true">
            <h3 class="uk-card-title">Universal Facial Expressions</h3>
            <p>
              There is an interesting read from the American Psychological Association
              that has become the basis for many emotion recognition applications in
              recent history. The scientific briefing outlines a number of studies done
              on the universality of facial expressions across all cultures, defining
              particular facial movements and key features for the following emotions:
              Joy, Surprise, Contempt, Sadness, Anger, Disgust, and Fear.
            </p>
            <p>
              For our project, we used the
              <a href="https://azure.microsoft.com/en-us/services/cognitive-services/face/">
                Microsoft Cognitive Services API
              </a>
              to calculate estimated emotional values from images we captured using a
              webcam, and used those emotional values to create visualizations like
              the ones seen here. The goal was to use these visualizations to create a
              conversation between two users through emotions rather than direct communication.
            </p>
            <a href="http://www.apa.org/science/about/psa/2011/05/facial-expressions.aspx" class="uk-button uk-button-danger uk-align-right">Read the APA Briefing</a>
          </div>
        </div>
      </div>
      <h1 class="uk-heading-primary uk-text-center"
          uk-parallax="blur: 5, 0; viewport: 0.8;">
        ICAT Day
      </h1>
      <div class="uk-position-relative uk-visible-toggle uk-dark" uk-slideshow="animation: push; autoplay: true; min-height: 600; max-height: 1000; autoplay-interval: 6000;">
        <ul class="uk-slideshow-items">
          <li>
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
              <img src="../assets/feeltime-demo.png" alt="" uk-cover>
            </div>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
              <h3 class="uk-margin-remove">ICAT Demo Setup</h3>
              <p class="uk-margin-remove">
                Come ICAT Day, we decided to take a new twist on our project, and focus much of
                the attention towards the collection of facial data as people interacted with it.
                We did this to better meet the "Traces" theme for ICAT Day, and to add another layer
                to the project because we were not able to pull out "Gut Reactions" from users in
                most scenarios, and instead had to focus on prompting emotions for communication.
              </p>
            </div>
          </li>
          <li>
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
              <img src="../assets/feeltime-tech.png" alt="" uk-cover>
            </div>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
              <h3 class="uk-margin-remove">FeelTime Technology Design</h3>
              <p class="uk-margin-remove">
                A Python script takes pictures of a person’s face in response to the given image and sends it to Microsoft’s API for emotion analysis. The top emotion is then written to the other person’s database. The Java program running on their computer reads the emotion from the database and displays the corresponding visualization and plays the corresponding music.
              </p>
            </div>
          </li>
          <li>
            <div class="uk-position-cover uk-animation-kenburns uk-animation-reverse uk-transform-origin-center-left">
              <img src="../assets/feeltime-news.png" alt="" uk-cover>
            </div>
            <div class="uk-overlay uk-overlay-primary uk-position-bottom uk-text-center uk-transition-slide-bottom">
              <h3 class="uk-margin-remove">News Article Prompts</h3>
              <p class="uk-margin-remove">
                We tested out a few different types of images to prompt users to express their emotions
                through facial expressions, and we concluded with presenting with news articles on ICAT
                day. The article headings cycle through as users have conversations through facial expressions,
                and are pulled from a variety of sources such as BBC, CNN, The Onion, ClickHole, and Fox.
                We picked a variety of news sources, to demonstrate how potential biases can potentially be
                traced by peoples reactions to articles given the new source.
              </p>
            </div>
          </li>
        </ul>
        <a class="slideshow-buttons uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="slideshow-buttons uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
      </div>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss" scoped>
.portfolio {
  @media (max-width: 400px) {
    margin: 8px;
  }
  @media (min-width: 400px) {
    margin: 36px;
  }
  @media (min-width: 1040px) {
    margin: 36px auto;
  }
  max-width: 1000px;
}

.profile-pic-wrapper {
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid white;
}

.parallax-under-specified {
  background-color: black;
  background-image: url('../assets/projects-under-specified.png');
  background-size: contain;
  background-repeat: no-repeat;
  img {
    opacity: 0;
  }
}

.sticky-header {
  background-color: white;
}

#sp1 {
  background-color: #2196F3;
}
#sp2 {
  background-color: #f44336;
}
#sp3 {
  background-color: #4CAF50;
}
#sp4 {
  background-color: #673AB7;
}

#sp2-img1 {
  background-image: url('../assets/twine.png');
  background-size: cover;
  min-height: 200px;
}
.uk-position-center-right {
  text-align: right;
}
</style>
