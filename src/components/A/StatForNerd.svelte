<script>
    import { xScroll} from "../../store/scroll";
</script>


<div class="stat" style:left={`${$xScroll}px`}>
    <span>
        <slot></slot>
    </span>
</div>

<style lang="scss">
    .stat{
        position: fixed;
        top: 0;
        width: 15em;
        height: 7em;
        border: 2px solid black;
        background-color: white;
        z-index: 1000;
        display: flex;
        justify-content: center;
        align-items: center;
        span{
            font-size: .75em;
        }
    }
</style>
