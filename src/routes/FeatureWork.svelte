
<script lang="ts" context="module">
    import atlas from '$lib/assets/Atlas + feinkost.jpg'
    import froztech from '$lib/assets/Froztech.jpg'
    import hotel23 from '$lib/assets/Hotel23.png'
    import Work from "./Work.svelte";
    import type {WorkType} from "../lib/types";
    import {resizeEvent} from "../lib/use/resize";
    import { goto } from '$app/navigation';

  const handleClick =  ()=> goto("https://www.instagram.com/dung.roman/")
    export const workList: WorkType[]  =[
        {
            title: 'F<br>r<br>o<br>z<br>t<br>e<br>c<br>h',
            role: 'Design and develop',
            image: froztech,
            aspect: 1.33
        },
        {
            title: 'Atlas <span>+ feinkost</span>',
            role: 'Design and develop',
            image: atlas,
            aspect: 2

        },
        {
            title: 'H<br>o<br>t<br>e<br>l<br>2<br>3',
            role: 'Develop',
            image: hotel23,
            aspect: 1
        }
    ]
</script>

<div class="feature-work-wrapper flex-row black" use:resizeEvent>
    <div class="feature-work flex-row">
        <div class="grid5 stampWrapper">
            <div class="stamp-block  flex-center">
                <div class="stamp">
                    <div class="stamp-square">
                    </div>
                    <div class="stamp-bottom flex-row">
                        <div class="chinese-wrapper flex-center">
                            <img src="/icon/一%20步%20一%20个%20脚%20印.svg" alt="One step, one footprint,"
                                 class="chinese-letter">
                        </div>
                        <div class="stamp-archive">
                            <h4>Archive 2021-23</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="follow">
                <div class="top-line"></div>
                <div class="follow-text flex-center cursor-pointer" on:click={handleClick}>
                    <h6>Follow me on</h6>
                    <h4>Instagram</h4>
                </div>
            </div>
        </div>
        <div class="feature-heading grid5">
            <h1 class="feature">Feature</h1>
            <h1 class="work">work</h1>
        </div>
    </div>
    {#each workList as work, index}
        <Work {work} {index}/>
    {/each}
</div>

<style lang="scss">
    .feature-work-wrapper{
      background-color: $black;
      margin-left: -5px;
      position: relative;
      border-right: 3px solid white;
      > * {
        height: 100%;
      }
      .feature-work{
        //min-width: 100vw;
      }
      .stampWrapper{
        border: 0 solid $white;
        border-width: 0 3px;
        .stamp-block{
          grid-row: 1/5;
          padding: 0 2.67em;
          .stamp{
            flex-direction: column;
            .stamp-square{
              width: 7.67em;
              aspect-ratio: 1;
              background: url('/image/noise.jpg');
              background-size: cover;
            }
            .stamp-bottom{
              .chinese-wrapper{
                flex:1;
                border-right: 1px solid white;
                padding-top: 1em;
                .chinese-letter{
                  width: 2.7em;
                }
              }
              .stamp-archive{
                position: relative;
                width: 3em;
                padding-top: 1em;
                h4{
                  position: absolute;
                  white-space: nowrap;
                  left: 50%;
                  transform-origin: 0 100%;
                  transform: rotate(90deg) translateX(-1em) translateY(50%);
                }
              }
            }
          }
        }
        .follow{
          position: relative;
          .top-line{
            position: absolute;
            height: 1px;
            background-color: $white;
            top: 0;
            right: 1em;
            left: 1em;
          }
          .follow-text{
            flex-direction: column;
            height: 100%;
          }
        }
      }
      .feature-heading{
        padding: 0 5em;
        h1{
          text-transform: none;
        }
        .feature{
          grid-row-start: 2;
        }
        .work{
          grid-row-start: 4;
        }
      }
    }
</style>

