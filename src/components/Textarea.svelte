<script>
    export let value;
    export let label;
</script>

<div class="textarea">
    {#if label}
    <label>
        {label}
    <textarea bind:value={value}/>
    </label>
    {:else}
    <textarea bind:value={value}/>
    {/if}
</div>

<style>
    div.textarea {
        margin-bottom: 6px;
    }

    textarea {
        padding: 0.55rem;
        margin: 0;
        width: 100%;
        overflow:hidden;
        height: 120px;
        /* border-radius: 2px; */
    }
</style>