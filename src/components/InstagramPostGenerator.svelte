<script>
    import InstagramPost from "./InstagramPost.svelte";

    let options = {
        profile_name: "tychomusic",
        location: "New York, NY",
        caption: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non mi sed nunc gravida pharetra eu eget massa. In turpis nibh, ultricies non sapien vitae, placerat mollis purus.`,
        liked: false,
        more: true,
        num_likes: "2,478",
        num_comments: 25,
        num_slideshow_steps: 5,
        active_slideshow_index: 1,
    };
</script>

<div class="post-gen">
    <InstagramPost {options} />

    <label for="profile_name">Profile Name</label>
    <input id="profile_name" type="text" bind:value={options.profile_name} />

    <label for="location">Location</label>
    <input id="location" type="text" bind:value={options.location} />

    <label for="post_caption">Post Caption</label>
    <textarea id="post_caption" bind:value={options.caption} />

    <label for="check_liked">Liked</label>
    <input id="check_liked" type="checkbox" bind:checked={options.liked} />

    <label for="check_more">Show 'more'</label>
    <input id="check_liked" type="checkbox" bind:checked={options.more} />

    <label for="num_likes">Likes</label>
    <input id="num_likes" type="text" bind:value={options.num_likes} />

    <label for="num_comments">Comments</label>
    <input id="num_comments" type="text" bind:value={options.num_comments} />

    <label for="num_slideshow_steps">Num. Posts in Album</label>
    <input
        id="num_slideshow_steps"
        type="number"
        bind:value={options.num_slideshow_steps}
    />

    <label for="active_slideshow_index">Active Post</label>
    <input
        id="active_slideshow_index"
        type="number"
        bind:value={options.active_slideshow_index}
    />
</div>
