<script>
    export let value = "";
</script>

<div class="inputtext">
    <input type="text" bind:value={value}/>
</div>

<style>
    div.inputtext {
        padding: 0.75rem;
        margin: 0
    }
</style>