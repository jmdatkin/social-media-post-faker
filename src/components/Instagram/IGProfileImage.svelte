<script>
    export let story = false;
</script>

<div class="ig-post-profile-image">
    {#if story}
    <img class="post-gen-ig-story-indicator" src="ig_story_indicator.png" />
    {/if}
    <div
        class="ig-post-profile-image-container"
        aria-disabled="false"
        role="button"
        style="cursor: pointer;"
        tabindex="0"
    >
        <span
            class="ig-post-profile-image-wrapper"
            role="link"
            style="width: 32px; height: 32px;"
            tabindex="-1"
        >
            <img
                alt="tychomusic's profile picture"
                class="ig-post-profile-image-image"
                crossorigin="anonymous"
                draggable="false"
                src="avatar.jpg"
            /></span
        >
    </div>
</div>

<style>
    .ig-post-profile-image {
        display: block;
        height: -moz-fit-content;
        width: -moz-fit-content;
        position: relative;
    }

    .ig-post-profile-image-container {
        align-items: center;
        align-self: center;
        display: block;
        flex: none;
        justify-content: center;
        position: relative;
    }

    .post-gen-ig-story-indicator {
        position: absolute;
        top: -5px;
        left: -5px;
        width: 42px;
        height: 42px;
    }

    span.ig-post-profile-image-wrapper {
        border: 1px solid rgba(var(--web-always-black), 0.0975);
        border-radius: 50%;
        bottom: 0;
        content: "";
        left: 0;
        pointer-events: none;
        position: absolute;
        right: 0;
        top: 0;
        width: 32px;
        height: 32px;
        background-color: rgb(var(--ig-secondary-background));
        border-radius: 50%;
        box-sizing: border-box;
        display: block;
        flex: 0 0 auto;
        overflow: hidden;
        position: relative;
    }

    img.ig-post-profile-image-image {
        border: 0;
        font: inherit;
        font-size: inherit;
        font-size: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        vertical-align: baseline;
        width: 100%;
    }
</style>
