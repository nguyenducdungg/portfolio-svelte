<script lang="ts">
  import * as _ from 'lodash-es'
  import {getProcessFactory, minMax} from "../lib/mathHelper";
  export let heading = ''
  export let animationProg

  const animationTime = 0.25
  const headingArr = heading.split(' ')
  const arr = _
    .chain(_.range(0, headingArr.length))
    .filter(i => headingArr[i] !== '/n')
    .shuffle()
    .value()

  const getProcess = getProcessFactory(animationTime, arr.length)
  class MyClass {
    get [Symbol.toStringTag]() {
      return 'MyClass';
    }
  }

</script>

<h2>
    {#each headingArr as head, key}
        {#if head === '/n'}
            <br>
        {:else }
            <span style:opacity={`${getProcess(_.indexOf(arr, parseInt(key)),animationProg).toFixed(2)}`}>
                {head}
            </span>
        {/if}
    {/each}
</h2>
