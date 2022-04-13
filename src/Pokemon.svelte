<script>
    async function fetchPokemon() {
        const url = `https://pokeapi.co/api/v2/pokemon`
        const response = await fetch(url)
        const { results } = await response.json()
        const pokemon = await Promise.all(results.map(({url}) => fetch(url).then(res => res.json())))
        if (pokemon) return pokemon;
        throw new Error("bad call");
    }
</script>
  
<div class="Pokemon">
<h2>Pokemon</h2>
    {#await fetchPokemon()}
        <p>loading</p>
    {:then pokemon}
        {#each pokemon as {name, sprites}}
        <div style="display: inline-block; padding: 0 2rem;">
            <h2>{name}</h2>
            <img src={sprites.front_default} alt={name}>
            </div>
        {/each}
    {:catch} 
        <p>error</p>
    {/await}
</div>
  