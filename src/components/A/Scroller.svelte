<script lang="ts">
  import {minMax} from "../../lib/mathHelper";
  import {xScroll, winWidth} from "../../store/scroll";
  import {onDestroy, onMount} from "svelte";
  import {resizeEvent} from "../../lib/use/resize";
  import { browser} from "$app/environment";

  let scroller
  export let clientWidth
  export let boxProgress
  export let offsetTrigger = 0
  export let xClient = 0
  const resize = () => {
    xClient = (scroller?.getBoundingClientRect()?.left || 0).toFixed(4)
  }
  onMount(() => {
    if (browser){
      document.addEventListener('elementResize', resize)
      resize()
    }
  })
  onDestroy(() => {
    if (browser)
      document.removeEventListener('elementResize', resize)
  })
  $: boxProgress = minMax(($xScroll - xClient + $winWidth * (1- offsetTrigger))/ (clientWidth || 10))
</script>

<div bind:this={scroller} bind:clientWidth {...$$restProps} use:resizeEvent>
    <slot></slot>
</div>
