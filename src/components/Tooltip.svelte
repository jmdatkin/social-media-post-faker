<script>

</script>

<span class="tooltip">
    <span class="tooltip-icon">
    <i>
    i
    </i>
    </span>
    <div class="tooltip-info">
        <slot></slot>
    </div>
</span>

<style>
    span.tooltip {
        display: inline-block;
    }

    span.tooltip-icon {
        width: 15px;
        height: 15px;
        border-radius: 50%;
        border: solid 1px #ccc;
        background-color: lavender;
        display: block;
        text-align: center;
        cursor: pointer;
    }

    div.tooltip-info {
        position: absolute;
        z-index: 999;
        border-radius: 3px;
        background-color: rgba(0,0,0,0.8);
        border: solid 1px #222;
        color: white;
        padding: 0.75rem 1rem;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.2s;
    }

    span.tooltip-icon:hover + div.tooltip-info {
        opacity: 1;
    }
</style>