<script>
    export let direction = 'horizontal';
</script>

<div class={direction === 'horizontal' ? 'divider divider-horiz' : 'divider divider-vert'}></div>

<style>
    div.divider {
        border-color: rgb(183, 183, 183);
    }

    div.divider-horiz {
        margin: 10px 0;
        height: 0;
        border-top-style: solid;
        border-top-width: 1px;
    }

    div.divider-vert {
        margin: 0 10px;
        width: 0;
        border-left-style: solid;
        border-left-width: 1px;
    }
</style>