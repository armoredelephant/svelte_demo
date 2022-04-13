<script>
	import { Router, Route, Link } from "svelte-navigator";
	import Pokemon from "./Pokemon.svelte";
</script>

<Router>
	<header>
		<h1>History</h1>
		
		<nav>
			<Link to="/">Base</Link>
			<Link to="pokemon">Pokemon</Link>
		</nav>
	</header>

	<main>
		<Route path="pokemon" component={Pokemon} />
		<Route>
			<h2>Home</h2>
		</Route>
	</main>
</Router>