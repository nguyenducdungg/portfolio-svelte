<script lang="ts">
    import { resizeEvent} from "$lib/use/resize";
</script>

<div class="grid5 textDescription" use:resizeEvent>
    <div class="text">
        <p>Nguyen Duc Dung is a versatile and experienced software engineer,
          specializing in crafting visually appealing and user-friendly websites for clients across various domains.
          He is committed to delivering high-quality work that surpasses client expectations and continually 
          seeks ways to enhance his skills and stay at the forefront of the field.
          </p>
        <p>Outside of coding, you'll find him indulging in sports activities like soccer, badminton, hitting the gym, or swimming.</p>
    </div>
</div>

<style lang="scss">
    :global(.textDescription){
      height: 100vh;
      .text{
        grid-row: 2/5;
        margin-left: 7.67em;
        width: 21em;
        > * + * {
          margin-top: 2em;
        }
      }
    }
</style>
