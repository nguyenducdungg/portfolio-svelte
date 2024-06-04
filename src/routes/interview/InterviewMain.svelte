<script lang="ts">
    import {onMount} from "svelte";
    import Interview2 from '$lib/assets/Interview2.jpg'
    import Interview3 from '$lib/assets/Interview3.jpg'
    import Interview4 from '$lib/assets/Interview4.jpg'

</script>


<div class="interview-main-wrapper ml-lg" >
    <div class="block">
        <div class="block-interview">
            <p class="name">Interviewer</p>
            <p>What inspired you to pursue front-end development, and could you share a bit about your
                journey to entering this field?</p>
        </div>

        <p class="name">Duc Dung</p>
        <p>From a young age, I always had a passion for the arts. I grew up in a traditional household, where my parents
            encouragedme to pursue a more traditional career path, such as engineering or law.</p>
        <p>However, I knew that my true calling was in the creative world, and I was drawn to art in all its forms. When
            I was younger, I dreamed of becoming a comic book artist, but I soon realized how difficult it was to make
            a living in that field.</p>
        <p>It was then that I discovered front-end development. I saw how this field allowed me to combine my love of
            art and design with the practical skills of coding and programming. I was inspired by the idea that I could
            use technology to bring my creative visions to life, and I knew that front-end development was the perfect
            path for me.</p>
        <div class="block-interview">
            <p class="name">Interviewer</p>
            <p>What do you believe makes your perspective as an artist valuable in front-end development?</p>
        </div>
    </div>

    <div class="block">
        <p class="name">Duc Dung</p>
        <p>As an artist, the first thing you learn is how to observe the world around you. I think this perspective is
            incredibly valuable in front-end development because it allows me to approach design from a user-centric
            perspective.</p>
        <p>Too often, front-end developers get bogged down in technical details and lose sight of the user's experience. But
            by bringing an artist's eye to the process, I can create designs that are both beautiful and user-friendly. I
            also believe that my artistic background gives me a unique perspective on color, typography, and layout that can
            help make websites and applications stand out from the crowd.</p>

        <div class="block-interview">
            <p class="name">Interviewer</p>
            <p>How would you describe your technical skillset in front-end development, and what are some of the areas where you
                excel?</p>
        </div>
    </div>
    <div class="interview-with-image first">
        <p class="name">Duc Dung</p>
        <p>My front-end development skills are constantly evolving through continuous learning and improvement. I specialize
            in CSS and animation and have experience with JavaScript and frameworks like React and Vue.js. My expertise also
            includes responsive design, accessibility, and optimizing website performance for the best user experience.</p>

        <div class="interview-img-2">
            <img src={Interview2} alt="">
        </div>
    </div>

    <div class="block">
        <div class="block-interview">
            <p class="name">Interviewer</p>
            <p>What kind of projects do you typically work on as a front-end developer, and what skills and techniques do
                you bring to ensure a successful outcome for your clients?</p>
        </div>
        <p class="name">Duc Dung</p>
        <p>I specialize in creating user-friendly websites and web applications. For a recent startup project, I designed
            and developed a responsive website that was visually appealing and provided a seamless user experience to drive
            sign-ups.</p>
        <p>Additionally, I've worked with several clients to develop custom web applications that allow them to easily manage
            and customize their website content without needing to know any coding. By focusing on providing a great user
            experience, I believe my skills as a developer can bring significant financial benefit for my clients.</p>
        <div class="block-interview">
            <p class="name">Interviewer</p>
            <p>Can you describe a particularly challenging project you worked on as a front-end developer and how you
                overcame any obstacles?</p>
        </div>
    </div>



    <div class="interview-with-image second">
        <div class="interview-img-3">
            <img src={Interview3} alt="">
            <div class="line"></div>
        </div>

        <p class="name">Duc Dung</p>
        <p>One of the most challenging projects I worked on as a front-end developer was for a large e-commerce website
            that needed to be completely overhauled. The website was outdated, slow, and difficult to navigate, and the
            client wanted a complete redesign that would provide a much better user experience. The biggest obstacle we
            faced was dealing with the sheer amount of data and content that needed to be migrated and integrated into
            the new design.</p>
    </div>

    <div class="block">
        <p>To overcome this challenge, we took a phased approach to the project, starting with a detailed analysis of the
            existing website and its content. We then created a comprehensive plan for migrating the content and redesigning
            the website, which included optimizing images and videos, consolidating redundant pages, and implementing a more
            efficient navigation system. Throughout the project, we also made sure to communicate regularly with the client,
            providing updates and soliciting feedback to ensure that we were on track.</p>
        <p>In the end, we were able to successfully deliver a modern and user-friendly e-commerce website that not only met
            the client's needs but also exceeded their expectations. The project taught me the importance of careful
            planning, clear communication, and a willingness to adapt and pivot when necessary</p>

        <div class="block-interview">
            <p class="name">Interviewer</p>
            <p>What do you see as the future of front-end development, and how do you see yourself contributing to this
                evolution?</p>
        </div>
    </div>
    <div class="block grid5">
        <div class="final-message">
            <p class="name">Duc Dung</p>
            <p>I believe that front-end development will continue to evolve in exciting ways, driven by advances in technology
                and changes in user behavior. One trend that I see gaining momentum is the use of machine learning and AI to
                create more personalized and engaging user experiences. </p>
            <p>As a front-end developer with a strong interest in art and design, I see myself playing a key role in this
                evolution by finding innovative ways to integrate technology with human creativity. I'm also excited to see
                how the web will continue to expand and evolve, and I look forward to being a part of the journey.</p>
        </div>
    </div>
</div>
<img src={Interview4} alt="" class="interview-img-4 ml-lg">



<style lang="scss">
  .interview-main-wrapper{
    overflow-y: hidden;
    padding: 1.5em 0;
    display: flex;
    flex-wrap: wrap;
    column-gap: 7.667em;
    > * {
      width: 21.3333333333em;
    }
      .name{
        font-weight: 600;
      }
      p, .block-interview{
        text-indent: 4rem;
        + p {
          margin-top: .7em;
        }
        + .name {
          margin-top: 1.5em;
        }
        + .block-interview {
          margin-top: 1.5em;
        }
      }
    .interview-with-image{
      height: calc(100% + 1.5em);

      display: flex;
      flex-direction: column;
      &.first{
        margin-bottom: -1.5em;
      }
      &.second{
        margin-top: -1.5em;
      }
      .interview-img-2{
        display: flex;
        margin-top: auto;
        margin-bottom: -1.5em;
        > img{
          margin-left: auto;
          width: 90%;
        }
      }
      .interview-img-3{
        display: flex;
        margin-bottom: 2em;
        margin-top: -1.5em;
        position: relative;
        .line{
          position: absolute;
          height: 100%;
          width: 8px;
          background-color: $white;
          left: 50%;
          transform: translateX(-50%);
        }
        > img{
          width: 100%;
        }
      }
    }
    .block{
      height: 100%;
    }

    .final-message{
      grid-row-start: 2;
    }
  }
  .interview-img-4{
    height: 100vh;
  }
</style>
