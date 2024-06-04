<script lang="ts">
import FolderIcon from "../components/A/FolderIcon.svelte";
import {getProcessFactory} from "../lib/mathHelper";
export let folderProgress = 0;
const getProgress = getProcessFactory(.5, 5)

const folderList = [
  {
    title: 'Branding agency',
    index: 3,
  },
  {
    title: 'Digital agency',
    index: 0,
  },
  {
    title: 'Digital product',
    index: 2,
  },
  {
    title: 'Start up',
    index: 4,
  },
  {
    title: 'Corporate',
    index: 1,
  },
]

$: console.log(getProgress(0, folderProgress))
</script>

<div class="folder-wrapper">
    {#each folderList as folder, index}
        <FolderIcon class="folder" index={folder.index} title={folder.title}
                    progress={getProgress(folder.index, folderProgress * .9)}/>
    {/each}
</div>



<style lang="scss">
  .folder-wrapper{
    position: fixed;
    top: 0;
    bottom: 0;
    right: -10vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > :global(.folder){
      height: 37vh;

      + :global(.folder){
        margin-top: -80%;
      }
    }

  }
</style>
