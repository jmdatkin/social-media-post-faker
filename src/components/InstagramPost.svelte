<script>
    import IgBookmarkIcon from "./IGBookmarkIcon.svelte";
    import IgCommentIcon from "./IGCommentIcon.svelte";
    import IgHeartIcon from "./IGHeartIcon.svelte";
    import IgProfileImage from "./IGProfileImage.svelte";
    import IgSendIcon from "./IGSendIcon.svelte";

    export let options = {};

    // export let profileName = "tychomusic";
    // export let caption = "";
    // export let location = "New York, NY";
    // export let liked = false;
    // export let more = true;
    // export let num_likes = 21;
    // export let num_comments = 25;

    // export let num_slideshow_steps = 6;
    // export let active_slideshow_index = 1;
</script>

<div class="post-gen post-gen-ig">
    <div class="post-gen-ig-container">
        <div class="post-gen-ig-header">
            <div class="post-gen-ig-header-content">
                <header class="post-gen-ig-header-header">
                    <IgProfileImage />
                    <div class="post-gen-ig-profile-name-wrapper">
                        <div class="post-gen-ig-profile-name">
                            <span class="profile-name-text">
                                {options.profile_name}
                            </span>
                            <span class="post-location">
                                {options.location}
                            </span>
                        </div>
                    </div>
                </header>
            </div>
        </div>
        <div class="post-gen-ig-body">
            <div class="post-gen-ig-body-container">
                <div class="post-gen-ig-body-wrapper">
                    <div class="post-gen-ig-body-content">
                        <div class="post-gen-ig-body-content-inner">
                            <img
                                class="post-gen-ig-body-image"
                                src="bubble.jpg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="post-gen-ig-footer">
            <div class="post-gen-ig-footer-content">
                <div class="post-gen-ig-slideshow-indicator">
                    {#each Array(options.num_slideshow_steps) as step, idx }
                    <div class={idx === options.active_slideshow_index-1 ? 'slideshow-marker slideshow-marker-active' : 'slideshow-marker'} />
                    {/each}
                </div>
                <div class="post-gen-ig-icon-bar">
                    <div class="post-gen-ig-body-icons-start">
                        <IgHeartIcon liked={options.liked} />
                        <IgCommentIcon />
                        <IgSendIcon />
                    </div>
                    <div class="post-gen-ig-body-icons-end">
                        <IgBookmarkIcon />
                    </div>
                </div>
                <div class="post-gen-ig-footer-likes">{options.num_likes} likes</div>
                <div class="post-gen-ig-footer-caption">
                    <span class="caption-profile-name"> {options.profile_name} </span>
                    <span class="caption-text">
                        {options.caption}
                    </span>
                    {#if options.more}
                        <span class="caption-more">
                            ...&nbsp;<span class="caption-more-muted">more</span
                            >
                        </span>
                    {/if}
                </div>
                <div class="post-gen-ig-footer-comments">
                    View {options.num_comments} comments
                </div>
                <div class="post-gen-ig-footer-time-elapsed">1 day ago</div>
            </div>
        </div>
    </div>
</div>

<style>
    :root {
        --ig-primary-background: 255, 255, 255;
        --ig-secondary-text: 142, 142, 142;
        --ig-primary-text: 38, 38, 38;
        --ig-secondary-background: 250, 250, 250;
        --ig-primary-button: 0, 149, 246;
        --ig-elevated-separator: 219, 219, 219;
        --post-step-indicator: 168, 168, 168;
        --font-weight-system-semibold: 600;
    }

    @media (min-width: 640px) {
        .post-gen-ig {
            margin-bottom: 12px;
            /* background-color: rgb(var(--ig-primary-background)); */
            border: 1px solid rgb(var(--ig-elevated-separator));
            margin-left: -1px;
            margin-right: -1px;
        }
    }

    .post-gen-ig {
        border-radius: 8px;
        overflow: hidden;
        max-height: inherit;
        padding: 0;
        font: inherit;
        font-size: 14px;
        font-size: 100%;
        background-color: rgb(var(--ig-primary-background));
        color: rgb(var(--ig-primary-text));
        max-width: 470px;
        width: 100%;
        border: 1px solid rgb(var(--ig-elevated-separator));
    }

    .post-gen-ig-container {
        max-height: inherit;
        max-width: inherit;
        justify-content: center;
        flex-direction: column;
        align-items: stretch;
        align-content: stretch;
        display: flex;
        box-sizing: border-box;
        position: relative;
    }

    .post-gen-ig-header {
        background-color: rgb(var(--ig-primary-background));
        border-radius: 8px;
        border-bottom: 1px solid rgb(var(--post-separator));
        border-radius: 4px;
    }

    .post-gen-ig-header-content {
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        align-content: stretch;
        display: flex;
        box-sizing: border-box;
        position: relative;
    }

    header.post-gen-ig-header-header {
        margin: 8px 4px 8px 12px;
        padding: unset;
        align-items: center;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        flex-shrink: 1;
        max-width: calc(100% - 48px);
        position: relative;
    }

    .post-gen-ig-profile-name-wrapper {
        min-height: 40px;
        justify-content: center;
        align-items: flex-start;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 1;
        overflow: hidden;
        position: relative;
    }

    .post-gen-ig-profile-name {
        justify-content: center;
        margin-left: 10px;
        min-height: 40px;
        align-items: flex-start;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 1;
        /* margin-left: 12px; */
        overflow: hidden;
        position: relative;
        padding: 2px;
        /* top: 1px; */
    }

    span.profile-name-text {
        color: rgb(var(--ig-secondary-button));
        -moz-appearance: none;
        background: none;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        box-sizing: border-box;
        cursor: pointer;
        display: block;
        font-family: var(--font-family-system);
        font-size: 14px;
        font-weight: var(--font-weight-system-semibold);
        text-align: center;
        text-overflow: ellipsis;
        text-transform: inherit;
        -moz-user-select: none;
        width: auto;
    }

    span.post-location {
        font-size: 12px;
        line-height: 16px;
    }

    .post-gen-ig-body {
        background-color: rgb(var(--ig-primary-background));
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        position: relative;
    }

    .post-gen-ig-slideshow-indicator {
        position: absolute;
        width: 100%;
        /* background-color: red; */
        display: flex;
        justify-content: center; 
        min-height: 46px;
        margin: 15px 0;
    }

    div.slideshow-marker {
        border-radius: 50%;
        margin-right: 4px;
        height: 6px;
        transition: all 0.2s ease-in-out;
        width: 6px;
        background: rgb(var(--post-step-indicator));
    }

    div.slideshow-marker-active {
        background: rgb(var(--ig-primary-button));
    }

    .post-gen-ig-icon-bar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        box-sizing: border-box;
        padding-top: 0;
        padding-bottom: 6px;
        max-height: 46px;
        position: relative;
    }

    .post-gen-ig-body-icons-start {
        display: flex;
        flex-direction: row;
        /* padding: 0 12px 6px 12px; */
        flex-shrink: 1;
        box-sizing: border-box;
        /* max-height: 46px; */
        /* padding-top: 0;
        padding-bottom: 6px; */
        margin-left: -8px;
    }

    .post-gen-ig-body-icons-end {
        display: flex;
        flex-direction: row;
        /* padding: 0 12px 6px 12px; */
        flex-shrink: 1;
        box-sizing: border-box;
        /* max-height: 46px; */
        /* padding-top: 0;
        padding-bottom: 6px; */
        margin-left: -8px;
    }

    .post-gen-ig-body-image {
        object-fit: cover;
        height: 100%;
        width: 100%;
        top: 0;
        /* position: absolute; */
        left: 0;
        border: 0;
    }

    .post-gen-ig-footer {
        flex: 0 0 auto;
        justify-content: flex-start;
        flex-direction: column;
        align-items: stretch;
        align-content: stretch;
        display: flex;
        box-sizing: border-box;
        position: relative;
        /* padding: 0 12px 6px 12px; */
        padding-left: 12px;
        padding-right: 12px;
    }

    .post-gen-ig-footer-content {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        position: relative;
        border-radius: 8px;
    }

    .post-gen-ig-footer-likes {
        justify-content: flex-start;
        font-weight: var(--font-weight-system-semibold);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 14px;
        margin-bottom: 8px;
        display: inline !important;
        /* display: block; */
        /* margin: 0 !important; */
    }

    .post-gen-ig-footer-caption {
        margin-bottom: 8px;
    }

    span.caption-profile-name {
        font-weight: var(--font-weight-system-semibold);
    }

    span.caption-more {
    }
    span.caption-more-muted {
        color: rgb(var(--ig-secondary-text));
    }

    .post-gen-ig-footer-comments {
        color: rgb(var(--ig-secondary-text));
        margin-bottom: 8px;
    }

    .post-gen-ig-footer-time-elapsed {
        color: rgb(var(--ig-secondary-text));
        font-size: 10px;
        line-height: 10px;
        text-transform: uppercase;
        letter-spacing: 0.2px;
        margin-bottom: 12px;
        margin-top: 4px;
    }
</style>
