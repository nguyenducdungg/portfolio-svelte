<script lang="ts">
  import Scroller from "../components/A/Scroller.svelte";
  import {newRange} from "$lib/mathHelper";

  let boxProgress = 0
  let clientWidth = 1000
  $: leftProgress = newRange(boxProgress, .5, 1)
  $: left = `${(leftProgress * clientWidth / 2).toFixed(2)}px`
</script>


<Scroller class="change-to-black" bind:boxProgress bind:clientWidth>
    <div class="vision" style:left>
        <h2>
            A visionary creator of <br> online experiences.
        </h2>
    </div>
    <div class="toBlack">

    </div>
</Scroller>


<style lang="scss">
    :global(.change-to-black){
      display: flex;
      flex-direction: row;
      background: white;
      > div{
        height: 100vh;
      }
      .vision{
        width: 100vw;
        color: black;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
      }
      .toBlack{
        width: 100vw;
        position: relative;
        background-color: #fff;
        mix-blend-mode: difference;
      }
    }

</style>
