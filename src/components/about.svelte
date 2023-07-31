<script lang="ts">
    import { Flex, Image } from "@svelteuidev/core";
    import Me from "../images/me.jpg";

    const goodStuff = [
        "Born & lives in Portugal 🇵🇹",
        "Graduated in 2015 in Computer Science 💻",
        "Is a programmer 👩‍💻",
        "Also loves to cook 🧑‍🍳",
        "Listening to music 🎵",
        "Running 👟, cycling 🚴‍♀️ and exercise 💪",
    ];
</script>

<Flex justify="space-between" direction="row">
    <Image src={Me} radius="md" alt="Pedro Flores" width={250} height={250} />
    <Flex direction="column">
        {#each goodStuff as element}
            <p>{element}</p>
        {/each}
    </Flex>
</Flex>
