<script lang="ts">
    import Me from "../images/me.jpg"
    import { Avatar, List, ListItem } from "svelte-materialify"

    const goodStuff = [
        "Born & lives in Portugal 🇵🇹",
        "Graduated in 2015 in Computer Science 💻",
        "Is a programmer 👩‍💻",
        "Also loves to cook 🧑‍🍳",
        "Listening to music 🎵",
        "Running 👟 and exercise 💪"
    ]
</script>

<div class="d-flex flex-row justify-space-between">
    <Avatar size="250px">
        <img src={Me} alt="Pedro Flores" width="250" height="250" />
    </Avatar>
    <List disabled>
        {#each goodStuff as element}
            <ListItem>{element}</ListItem>
        {/each}
    </List>
</div>
