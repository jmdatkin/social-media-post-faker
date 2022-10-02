<script>
    import { onMount } from "svelte";
    import Button from "./Button.svelte";

    export let onUpload;
    export let label;

    let uploadInput;

    const onDrop = function (e) {
        e.preventDefault();

        e.target.classList.remove("dragover", "dragging");

        if (e.dataTransfer.items) {
            let item = e.dataTransfer.items[0];
            if (item.kind !== "file") return;
            onUpload(e.dataTransfer.items[0].getAsFile());
        } else {
            onUpload(e.dataTransfer.files[0]);
        }
    };

    const onDragover = function (e) {
        e.preventDefault();
        e.target.classList.add("dragover");
    };

    const onDragstart = function (e) {
        e.target.classList.add("dragging");
    };

    const onDragend = function(e) {
        e.target.classList.remove("dragover", "dragging");
    }

    const onChange = function (e) {
        let files = e.target.files;
        onUpload(files[0]);
    };

    const triggerDialog = function () {
        uploadInput.click();
    };

    // onMount(() => {
    //     uploadInput.addEventListener("change", function (e) {
    //         let files = e.target.files;
    //         onUpload(files);
    //     });
    // });
</script>

<div class="fileupload">
    {#if label}
        <label>
            {label}
            <input type="file" bind:this={uploadInput} on:change={onChange} />
        </label>
        <div
            class="fileupload-drop-target"
            on:dragstart={onDragstart}
            on:drop={onDrop}
            on:dragover={onDragover}
            on:dragend={onDragend}
        >
        <button on:click={triggerDialog}>
            <img
                src="https://img.icons8.com/material-rounded/48/000000/upload--v1.png"
            />
        </button>
        </div>
    {:else}
        <input type="file" bind:this={uploadInput} />
        <div
            class="fileupload-drop-target"
            on:click={triggerDialog}
            on:dragstart={onDragstart}
            on:drop={onDrop}
            on:dragover={onDragover}
        >
        <button on:click={triggerDialog}>
            <img
                src="https://img.icons8.com/material-rounded/48/000000/upload--v1.png"
            />
        </button>
        </div>
    {/if}
</div>

<style>
    input[type="file"] {
        width: 0;
        height: 0;
        visibility: hidden;
    }
    
    button {
        width: 100%;
        height: 100%;
        background: transparent;
        border: 0;
        cursor: pointer;
    }

    div.fileupload-drop-target {
        width: 100%;
        height: 100px;
        display: flex;
        place-items: center;
        justify-content: center;
        border-radius: 3px;
        background-color: #ddd;
    }

    div.fileupload-drop-target:hover {
        
    }

    :global(div.fileupload-drop-target.dragover) {
        background-color: #fff;
    }

    img {
        pointer-events: none;
    }
</style>
