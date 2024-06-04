<script lang="ts">
  import {  winWidth, winHeight} from "../store/scroll";
  import {lerp, } from "../lib/mathHelper";
  import Scroller from "../components/A/Scroller.svelte";
  import {resizeEvent} from "../lib/use/resize";
  import horizontal from '../lib/assets/horizontal.png'

  let clientWidth
  let boxProgress = 0
  $: right = `${((1 - boxProgress ) * (clientWidth || 0)).toFixed(2)}px`
  $: helloWidth = `${lerp(320, $winWidth, boxProgress).toFixed(0)}px`
</script>


<div class="hero" use:resizeEvent>
    <div class="grid5">
        <h1 class="Ng text">
            Nguyen D.
        </h1>
        <h1 class="Dung text">
          Dung
        </h1>
        <h5 class="scroll text" >
            Scroll
        </h5>

    </div>
</div>
<Scroller bind:boxProgress bind:clientWidth >
    <div class="hero-scroller">
        <div class="hero-image"
             style:right style:width={helloWidth}
             style:aspect-ratio={$winWidth / $winHeight}
        ></div>
    </div>
</Scroller>




<style lang="scss">
  .hero{
    min-width: 100vw;
    height: 100vh;
    position: relative;
    .text{
      padding-left: 2rem;
    }
    .Ng{
      grid-row-start: 2;
    }
    .Dung{
      grid-row-start: 4;
    }
    .scroll{
      grid-row-start: 5;
      margin-left: .7em;
      margin-top: auto;
    }

    .shaking-image {
      animation: shake 2s infinite;
    }

    @keyframes shake {
      0% {
        transform: translate(0px, 0px) rotate(0deg);
      }
      10% {
        transform: translate(-1px, -2px) rotate(0deg);
      }
      20% {
        transform: translate(-3px, 0px) rotate(0deg);
      }
      30% {
        transform: translate(3px, 2px) rotate(0deg);
      }
      40% {
        transform: translate(1px, -1px) rotate(0deg);
      }
      50% {
        transform: translate(-1px, 2px) rotate(0deg);
      }
      60% {
        transform: translate(-3px, 1px) rotate(0deg);
      }
      70% {
        transform: translate(3px, 1px) rotate(0deg);
      }
      80% {
        transform: translate(-1px, -1px) rotate(0deg);
      }
      90% {
        transform: translate(1px, 2px) rotate(0deg);
      }
      100% {
        transform: translate(0px, 0px) rotate(0deg);
      }
    }
  }
  .hero-scroller{
    width: 120em;
    height: 100%;
    position: relative;
    .hero-image{
      position: absolute;
      bottom: 0;
      background: url("/image/HeroImage3.jpg");
      background-size: cover;
    }
  }



</style>
