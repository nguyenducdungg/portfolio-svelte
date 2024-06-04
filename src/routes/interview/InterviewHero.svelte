<script lang="ts">
  import interviewHero from '../../lib/assets/interviewHero.jpg'
</script>

<div class="grid5 interview-hero">
    <h1 class="last-name">Duc</h1>
    <h1 class="first-name">Dung</h1>
</div>

<div class="hero-image">
    <img src={interviewHero} alt="">
</div>

<style lang="scss">
  .interview-hero{
    width: 55vw;
    position: relative;
    z-index: 2;
    > h1{
      padding-left: .1em;
    }
    .last-name{
      grid-row-start: 2;
    }
    .first-name{
      grid-row-start: 4;
    }
  }

  .hero-image{
    aspect-ratio: 3232/3928;
    > img{
      width: 100%;
      height: 100%;
    }
  }

</style>
