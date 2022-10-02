<script>
    export let checked;
    export let label;
</script>

<span class="inputswitch">
    <label class="inputswitch-text-label">
        {label}
        <label class="inputswitch-label">
            <input type="checkbox" bind:checked />
            <span class="inputswitch-slider" />
        </label>
    </label>
</span>

<!-- <style>
    input[type="checkbox"] {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    label {
        cursor: pointer;
        text-indent: -9999px;
        width: 50px;
        height: 30px;
        background: grey;
        display: block;
        border-radius: 100px;
        position: relative;
    }

    label:after {
        content: "";
        position: absolute;
        top: 5px;
        left: 5px;
        width: 20px;
        height: 20px;
        background: #fff;
        border-radius: 90px;
        transition: 0.3s;
    }

    /* input:hecked + label { */
    label:has(input:checked) {
        background: #55bdda;
    }

    /* input:checked + label:after { */
    label:has(> input:checked):after {
        left: calc(100% - 5px);
        transform: translateX(-100%);
    }

    label:active:after {
        width: 23px;
    }
</style> -->
<style global>
    input[type="checkbox"] {
        height: 0;
        width: 0;
        visibility: hidden;
    }

    .inputswitch-text-label {
        display: flex;
        flex-direction: column;
    }

    .inputswitch-label {
        position: relative;
        display: inline-block;
        width: 45px;
        height: 25px;
    }

    .inputswitch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: grey;
        -webkit-transition: 0.4s;
        transition: 0.4s;

        border-radius: 34px;
    }

    .inputswitch-slider:after {
        position: absolute;
        content: "";
        height: 17px;
        width: 17px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: 0.3s;
        -webkit-transition: 0.3s;

        border-radius: 50%;
    }

    input:checked + .inputswitch-slider {
        background: #6fb9dd;
    }

    input:checked + .inputswitch-slider:after {
        left: calc(100% - 4px);
        transform: translateX(-100%);
    }

    .inputswitch-slider:active:after {
        width: 18px;
    }
</style>
