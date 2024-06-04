<script lang="ts">
    import {teleport} from "../../lib/use/teleport";
    let value = ''
    let toggle = false
</script>

<input type="checkbox" bind:checked={toggle}>
<h2>Hello this is the inside</h2>
<input type="text" bind:value>
<h3 use:teleport={'outside'} class="teleport">The value is {value}</h3>

<style lang="scss">
    h3.teleport{
      display: none;
      color: white;
    }
</style>
