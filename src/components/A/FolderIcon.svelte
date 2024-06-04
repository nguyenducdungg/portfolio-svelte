<script lang="ts">
    import {onMount} from "svelte";
    import {newRange} from "$lib/mathHelper.js";

    export let index: string
    export let title: string
    export let progress: 0
    $:unBlurProg = newRange(progress, 0.2, 0.3)
    $:blurProg = newRange(progress, 0.55, 0.65)
    $:opacity = unBlurProg - blurProg
</script>

<div {...$$restProps} style:right={`${index * 3}vw`} style:z-index={10 - index}
    style:transform={`translateX(${- progress * 130}vw)`}
>
    <div class="hover" on:mousemove={() => console.log('Wtf')}>
        <svg width="333" height="414" viewBox="0 0 333 414" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-inside-1_212_70" fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 387.5C0.5 401.859 12.1406 413.5 26.5 413.5H76.5H192.5H308.5C321.755 413.5 332.5 402.755 332.5 389.5V24.5C332.5 11.2452 321.755 0.5 308.5 0.5H76.5C63.2452 0.5 52.5 11.2451 52.5 24.5L52.5 140.8V151.5V166.8C52.5 173.98 46.6797 179.8 39.5 179.8H22.5V179.806C10.0396 181.73 0.5 192.501 0.5 205.5L0.5 387.5Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 387.5C0.5 401.859 12.1406 413.5 26.5 413.5H76.5H192.5H308.5C321.755 413.5 332.5 402.755 332.5 389.5V24.5C332.5 11.2452 321.755 0.5 308.5 0.5H76.5C63.2452 0.5 52.5 11.2451 52.5 24.5L52.5 140.8V151.5V166.8C52.5 173.98 46.6797 179.8 39.5 179.8H22.5V179.806C10.0396 181.73 0.5 192.501 0.5 205.5L0.5 387.5Z" fill="white"/>
            <path d="M22.5 179.8V178.8H21.5V179.8H22.5ZM22.5 179.806L22.6526 180.794L23.5 180.663V179.806H22.5ZM26.5 412.5C12.6929 412.5 1.5 401.307 1.5 387.5H-0.5C-0.5 402.412 11.5883 414.5 26.5 414.5V412.5ZM76.5 412.5H26.5V414.5H76.5V412.5ZM192.5 412.5H76.5V414.5H192.5V412.5ZM308.5 412.5H192.5V414.5H308.5V412.5ZM331.5 389.5C331.5 402.203 321.203 412.5 308.5 412.5V414.5C322.307 414.5 333.5 403.307 333.5 389.5H331.5ZM331.5 24.5V389.5H333.5V24.5H331.5ZM308.5 1.5C321.203 1.5 331.5 11.7975 331.5 24.5H333.5C333.5 10.6929 322.307 -0.5 308.5 -0.5V1.5ZM76.5 1.5H308.5V-0.5H76.5V1.5ZM53.5 24.5C53.5 11.7974 63.7974 1.5 76.5 1.5V-0.5C62.6929 -0.5 51.5 10.6929 51.5 24.5H53.5ZM53.5 140.8L53.5 24.5H51.5L51.5 140.8H53.5ZM51.5 140.8V151.5H53.5V140.8H51.5ZM51.5 151.5V166.8H53.5V151.5H51.5ZM51.5 166.8C51.5 173.427 46.1274 178.8 39.5 178.8V180.8C47.232 180.8 53.5 174.532 53.5 166.8H51.5ZM39.5 178.8H22.5V180.8H39.5V178.8ZM23.5 179.806V179.8H21.5V179.806H23.5ZM1.5 205.5C1.5 193.002 10.6723 182.644 22.6526 180.794L22.3474 178.817C9.40692 180.816 -0.5 192 -0.5 205.5H1.5ZM1.5 387.5L1.5 205.5H-0.5L-0.5 387.5H1.5Z" fill="black" mask="url(#path-1-inside-1_212_70)"/>
        </svg>
        <h6 class="title">{title}</h6>
        <h6 class="text"
            style:opacity
        >Contrary to popular belief, Lorem Ipsum is not simply random text. It has
            roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of</h6>
    </div>
</div>

<style lang="scss">
    div{
      position: relative;
      aspect-ratio: 333/414;
      pointer-events: none;
      .hover{
        z-index: 1;
      }

      svg {
        height: 100%;
        width: 100%;
      }
      .title{
        position: absolute;
        left :.5em;
        bottom: .0em;
        rotate: -90deg;
        transform-origin: 0% 0%;
        font-weight: 600;
      }
      .text{
        position: absolute;
        left: 5em;
        top: 2em;
        right: 1em  ;
        transform-origin: 0 0;

      }
    }
</style>
