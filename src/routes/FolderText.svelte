<script lang="ts">
    import Scroller from "../components/A/Scroller.svelte";
    import {newRange} from "$lib/mathHelper";
    import StatForNerd from "../components/A/StatForNerd.svelte";
    import ListofFolder from "./ListofFolder.svelte";
    import {teleport} from "../lib/use/teleport";
    let boxProgress = 0
    let clientWidth = 1000
    $: folderProgress = newRange(boxProgress, 1/3 + .1, 1)
    $: unBlurProgress = newRange(boxProgress, 1/3, 1/3 + .1)
    $: blurProgress = newRange(boxProgress, 1/3 + .1, 1/3 + .2)
    $: opacity = `${((unBlurProgress - blurProgress) * 100).toFixed(2)}%`
    $: moveProgress = newRange(boxProgress, 1/3, 1)
    $: left = `${moveProgress * clientWidth * 2 /3 }px`
</script>


<Scroller class="folder-flying-wrapper white flex-row" bind:boxProgress bind:clientWidth>
    <div class="folder-flying grid5" style:left>
        <h2 class="folder-heading" style:opacity>
            We dig deep and understand your business which enables us to deliver more than just a perfect Website layout</h2>
        <div class="folder-wrapper"></div>
    </div>
    {#if moveProgress > 0}
    <div use:teleport={'outside'} style:opacity={`${unBlurProgress * 100}%`} class="list-of-folder">
        <ListofFolder folderProgress={folderProgress}/>
    </div>
    {/if}
</Scroller>

<style lang="scss">
  :global(.folder-flying-wrapper){
    width: 300vw;
    position: relative;
    .folder-flying{
      position: relative;
      padding-left: 5em;
      width: 100vw;
      .folder-heading{
        width: 10em;
        grid-row: 2/5;
      }
      .box{
        width: 200px;
        height: 200px;
        background-color: red;
      }
    }
    .list-of-folder{
    }
  }

</style>

