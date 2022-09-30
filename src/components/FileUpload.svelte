<script>
    import Button from "./Button.svelte";

    export let onUpload;

    document.querySelector('input[type="file"]')
    .addEventListener("change", function(e) {
        let files = e.target.files;
        onUpload(files);
    });

</script>

<div class="fileupload">
    <input type="file" id="upload" />
</div>