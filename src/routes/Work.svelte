<script lang="ts">
    import type {WorkType} from "../lib/types";

    export let work :WorkType
    export let index: number

</script>
<div class="work grid5 black" data-index={index}>
    <p class="tag">Archive 2022-23</p>
    <div class="image-wrapper">
        <img src={work.image} alt={work.title} class="work-image" style:aspect-ratio={work.aspect}>
    </div>
    <h2 class="work-title">
        {@html work.title}
    </h2>
    <p class="work-role">
        {work.role}
    </p>
</div>

<style lang="scss">
    .work{
      position: relative;
      border-left: 3px solid white;
      padding: 0 5em;
      grid-template-columns: 1fr auto;
      .tag{
        position: absolute;
        left: .5em;
        top:-.5em;
        transform-origin: 0 100%;
        transform: rotate(90deg);
      }
      .work-title{
        display: flex;
        flex-direction: column;
      }
      .image-wrapper{
        .work-image{
          height: 100%;
        }
      }
      &[data-index="0"]{
        .image-wrapper{
          grid-row: 1/5
        }
        .work-title{
          line-height: 1;
          margin-left: 1em;
          text-align: center;
        }
        .work-role{
          grid-row-start: 5;
        }
      }
      &[data-index="1"]{
        .image-wrapper{
          grid-row: 3/6;
          grid-column: 1/3;
        }
        .work-title{
          margin-top: auto;
          line-height: 1;
          grid-row-start: 2;
          >:global(span){
            margin-left: 1em;
          }
        }
        .work-role{
          margin-top: auto;
          grid-row-start: 2;
        }
      }
      &[data-index="2"]{
        .image-wrapper{
          grid-row: 2/6;
          grid-column: 2/3;
        }
        .work-title{
          margin: auto 1em auto auto;
          grid-row: 2/6;
          grid-column: 1/2;
          line-height: 1;
          text-align: center;
        }
        .work-role{
          margin: auto 0 0 auto;
          grid-row: 1/2;
          grid-column: 2/3;
        }
      }
    }


</style>
