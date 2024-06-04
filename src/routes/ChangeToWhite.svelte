<script lang="ts">
    import Scroller from "../components/A/Scroller.svelte";
    import {getProcessFactory} from "../lib/mathHelper";
    import FolderText from "./FolderText.svelte";
    import {resizeEvent} from "../lib/use/resize";

    const services = ['Research', 'Strategy', 'Design', 'Develop', 'Maintain']
    const services_length = services.length
    let boxProgress = 0
    let clientWidth = 1000
    $: left = `${(boxProgress * clientWidth).toFixed(2)}px`
    const getProgress = getProcessFactory(.5,5)
</script>

<div class="change-to-white-scroll flex-row" use:resizeEvent>
    <Scroller class="service-wrapper" bind:boxProgress bind:clientWidth offsetTrigger={1}>
        <div class="grid5 change-to-white" style:display={boxProgress === 1 ? 'none': 'grid'} style:left>
            {#each services as service, index}
                <div class="service black">
                    <div class="service-overlay"
                         style={`transform:translateY(${- getProgress(services_length - 1 -index, boxProgress) * 99.5}%)`}
                    ></div>
                    <h2>{service}</h2>
                </div>
            {/each}
        </div>
    </Scroller>
    <FolderText/>
</div>>

<style lang="scss">
  .change-to-white-scroll{
    position: relative;
    z-index: 10;
    width: 400vw;
    > *{
      height: 100%;
    }

  }
  :global(.service-wrapper){
    z-index: 10;
    position: relative;
    width: 100vw;
    margin-left: 5px;
    .change-to-white{
      position: relative;
      row-gap: 0;
      width: calc(100% + 5px);
      margin-left: -5px;
      .service{
        position: relative;
        display: flex;
        overflow: hidden;
        & + .service{
          border-top: 1px solid $white;
        }
        h2{
          margin: auto auto auto 5rem;
        }
        .service-overlay{
          position: absolute;
          width: 100%;
          height: 101%;
          background-color: $white;
          left: 0;
          top: 100%;

        }
      }
    }
  }
</style>

