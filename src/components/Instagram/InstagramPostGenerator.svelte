<script>
    import Divider from "../Divider.svelte";
    import InputNumber from "../InputNumber.svelte";
    import InputSwitch from "../InputSwitch.svelte";
    import InputText from "../InputText.svelte";
    import InstagramPost from "./InstagramPost.svelte";
    import Textarea from "../Textarea.svelte";
    import FileUpload from "../FileUpload.svelte";
    import Tooltip from "../Tooltip.svelte";

    let options = {
        profile_name: "user",
        location: "New York, NY",
        caption: `Hello world! [@zuck]
[#hashtag]`,
        imageURL: "buddha.jpg",
        profileImageURL: "avatar.png",
        liked: false,
        more: true,
        num_likes: "2,478",
        num_comments: "View 25 comments",
        num_slideshow_steps: 5,
        active_slideshow_index: 1,
        see_translation: false,
        story: false,
        time_since: "1 day ago",
    };

    const handleMainUpload = function (file) {
        let fr = new FileReader();

        fr.onload = function () {
            options.imageURL = fr.result;
        };

        fr.readAsDataURL(file);
    };

    const handleProPicUpload = function (file) {
        let fr = new FileReader();

        fr.onload = function () {
            options.profileImageURL = fr.result;
        };

        fr.readAsDataURL(file);
    };
</script>

<div class="post-gen-wrapper">
    <section>
        <div class="post-gen-border">
            <InstagramPost {options} />
        </div>
    </section>
    <section>
        <InputText bind:value={options.profile_name} label="Profile Name" />
        <InputText bind:value={options.location} label="Location" />
        <InputText bind:value={options.time_since} label="Time Posted" />

        <!-- <textarea id="post_caption" bind:value={options.caption} /> -->
        <Textarea bind:value={options.caption} label="Post Caption">
            <Tooltip>
                Wrap text in square brackets ([, ]) for #hashtag or @mention-style formatting.
            </Tooltip>
        </Textarea>

        <div class="inputswitch-grid">
            <InputSwitch
                id="check_story"
                bind:checked={options.story}
                label="User Has Story"
            />

            <InputSwitch
                id="check_liked"
                bind:checked={options.liked}
                label="Liked"
            />

            <InputSwitch
                id="check_more"
                bind:checked={options.more}
                label="Show 'more'"
            />

            <InputSwitch
                id="check_see_translation"
                bind:checked={options.see_translation}
                label="Show 'See translation'"
            />
        </div>

        <InputText bind:value={options.num_likes} label="Likes" />

        <InputText bind:value={options.num_comments} label="Comments" />

        <InputNumber
            bind:value={options.num_slideshow_steps}
            label="Num. Posts in Album"
        />

        <InputNumber
            bind:value={options.active_slideshow_index}
            label="Active Post"
        />

        <div class="inputswitch-grid">
            <FileUpload onUpload={handleMainUpload} label="Main Image" />
            <FileUpload
                onUpload={handleProPicUpload}
                label="User Profile Image"
            />
        </div>
    </section>
</div>

<style>
    div.post-gen-wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.25em;
    }

    div.post-gen-border {
        padding: 15px;
    }

    div.inputswitch-grid {
        display: grid;
        gap: 0.5em;
        grid-template-columns: 1fr 1fr;
    }

    section {
        display: flex;
        flex-direction: column;
    }

    section:last-child {
        order: -1;
    }

    @media (max-width: 860px) {
        div.post-gen-wrapper {
            grid-template-columns: 1fr;
        }

        div.post-gen-border {
            padding: 0px;
        }

        section:last-child {
            order: unset;
        }
    }
</style>
