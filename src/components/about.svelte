<script lang="ts">
    import Me from "../images/me.jpg";
    import { Avatar, List, ListItem } from "svelte-materialify";
</script>

<div class="d-flex flex-row justify-space-between">
    <Avatar size="250px">
        <img src={Me} alt="Pedro Flores" width="250" height="250" />
    </Avatar>
    <List disabled>
        <ListItem>Born in Portugal</ListItem>
        <ListItem>Graduated in 2015 in Computer Science</ListItem>
        <ListItem>Is a programmer 🤟</ListItem>
        <ListItem>Also loves to cook 🧑‍🍳</ListItem>
        <ListItem>And listening to music 🎵</ListItem>
    </List>
</div>

