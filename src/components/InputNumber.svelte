<script>
    export let value;
    export let label;
</script>

<div class="inputnumber">
    {#if label}
        <label>
            {label}
            <input type="number" bind:value />
        </label>
    {:else}
        <input type="number" bind:value />
    {/if}
</div>

<style>
    div.inputnumber {
        margin-bottom: 6px;
    }

    input {
        padding: 0.55rem;
        margin: 0;
    }

    label {
        display: flex;
        flex-direction: column;
    }
</style>
