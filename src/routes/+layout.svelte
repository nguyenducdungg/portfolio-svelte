<script lang="ts">
  import {onDestroy, onMount} from 'svelte'
  import { xScroll, limit, scroll, winWidth, winHeight,resizeObserver} from "../store/scroll";
  import Scrollbar from "smooth-scrollbar";
  import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
  import {HorizontalScrollPlugin} from '../lib/scroll.js'
  import { browser } from '$app/environment';

  onMount(() =>{
    if (browser){
      Scrollbar.use(HorizontalScrollPlugin as any, OverscrollPlugin /* you forgot this */);
      const scrollBar = Scrollbar.init(document.querySelector('#main'), {
        damping: 0.1
      });
      scrollBar.addListener((status) =>{
        $limit = status.limit.x
        $xScroll = status.offset.x
      })
      $scroll = scrollBar
    }
  })

  // scrollLocal.on('scroll', parseScroll)
  onDestroy(() => {
    if ($scroll.destroy)
      $scroll.destroy()
  })

  // handle window size
  function setWindow(){
    $winWidth = window.innerWidth
    $winHeight = window.innerHeight
  }
  onMount(() => setWindow())

</script>

<svelte:window on:resize={() => setWindow()}></svelte:window>
<div id="main">
    <div id="home">
        <slot></slot>
    </div>
</div>
<div id="outside"></div>
<style global lang="scss">
  .body{
    transform: none;
  }
  .main{
    display: flex;
  }
  #main{
    height: 100vh;
    width: 100vw;
  }
  #home{
    position: relative;
    height: 100vh;
    width: max-content;
    display: flex;
    overflow-y: hidden;
  }
</style>
