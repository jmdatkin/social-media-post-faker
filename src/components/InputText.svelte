<script>
    export let value;
    export let label;
</script>

<div class="inputtext">
    {#if label}
    <label>
        {label}
    <input type="text" bind:value={value}/>
    </label>
    {:else}
    <input type="text" bind:value={value}/>
    {/if}
</div>

<style>
    div.inputtext {
        margin-bottom: 6px;
    }

    input {
        padding: 0.55rem;
        margin: 0;
        width: 100%;
        /* border-radius: 2px; */
    }
</style>