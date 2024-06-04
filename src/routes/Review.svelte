<script lang="ts">
  import Scroller from "../components/A/Scroller.svelte";
  import HeadingPop from "./HeadingPop.svelte";
  import {newRange} from "../lib/mathHelper";
  let boxProgress = 0
  let clientWidth
  $: moveProgress = newRange(boxProgress, 0.5, 1)
  $: blurProgress = newRange(boxProgress, 0.25, 1)
  $: left = `${((clientWidth || 0) * moveProgress / 2).toFixed(2)}px`
</script>

<Scroller bind:boxProgress bind:clientWidth class="wrapper flex-row">
    <div class="text" style:left>
        <div class="grid5">
            <div class="heading">
                <HeadingPop heading="If today you are a little bit better /n than you were yesterday, /n then that’s enough."
                            bind:animationProg={blurProgress}/>
                <div class="bottom">
                    <div class="line"></div>
                    <h6>David A. Bednar</h6>
                </div>
            </div>
        </div>
    </div>
</Scroller>

<style lang="scss">
    :global(.wrapper){
      position: relative;
      display: flex;
      width: 200vw;
      height: 100vh;
      .text{
        position: relative;
        width: 100vw;
        height: 100vh;
        padding-left: 7.67em;
        .heading{
          grid-row: 2/5;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .bottom{
            margin-top: auto;
            display: flex;
            align-items: center;
            .line{
              width: 3.5em;
              height: 3px;
              margin-right: 1em;
              background-color: black;
            }
          }
        }
      }
    }
</style>
