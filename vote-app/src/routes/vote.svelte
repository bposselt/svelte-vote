<script>
	import {
		RadioButtonGroup,
		RadioButton,
		Button,
		Row,
		Grid,
		Column
	} from 'carbon-components-svelte';
	import RequestQuote16 from 'carbon-icons-svelte/lib/RequestQuote16';
	import Alarm16 from 'carbon-icons-svelte/lib/Alarm16';
	import Reset16 from 'carbon-icons-svelte/lib/Reset16';

	import { user } from '../lib/stores';

	const points = [1, 2, 3, 5, 8, 13];

	const submitVote = () => {
		console.info('vote: ', $user.vote);
	};

	const showResults = () => {
		console.info('start countdown');
	};

	const clearResults = () => {
		console.info('clear results');
	};
</script>

<svelte:head>
	<title>Voting</title>
</svelte:head>

<div class="content">
	<h2>Team {$user.team} ::: {$user.name}</h2>

	<Grid padding>
		<Row>
			<Column>
				<RadioButtonGroup
					legend="Points List"
					name="vote"
					id="vote-selection"
					orientation="vertical"
					legendText="Points"
					bind:selected={$user.vote}
				>
					{#each points as point}
						<RadioButton labelText={point} value={point} />
					{/each}
				</RadioButtonGroup>

				<br clear="all" />
				<Button
					type="submit"
					id="vote-user-button"
					icon={RequestQuote16}
					on:click={() => submitVote()}>Vote</Button
				>
			</Column>

			<Column>results here</Column>
		</Row>
		{#if $user.scrummaster}
			<Row>
				<Column />
				<Column>
					<Button
						type="submit"
						id="start-vote-button"
						icon={Alarm16}
						on:click={() => showResults()}>Show Results</Button
					>
					<Button
						kind="secondary"
						id="clear-results-button"
						on:click={() => clearResults()}
						icon={Reset16}>Clear Results</Button
					>
				</Column>
			</Row>
		{/if}
	</Grid>
</div>
