<script>
	import {
		RadioButtonGroup,
		RadioButton,
		Button,
		TextInput,
		Toggle,
		Row,
		Grid,
		Column
	} from 'carbon-components-svelte';
	import Add16 from 'carbon-icons-svelte/lib/Add16';
	import Rocket16 from 'carbon-icons-svelte/lib/Rocket16';

	import { goto } from '$app/navigation';

	import { user } from './stores';

	let teams = ['Core', 'GMSEC', 'SDA', 'SQA'];
	let newTeam = '';

	const addTeam = () => {
		teams = teams.concat(newTeam);
		newTeam = '';
	};

	const goVote = () => {
		console.info('user: ', $user);
		goto('/vote');
	};
</script>

<svelte:head>
	<title>Setup</title>
</svelte:head>

<div>
	<h1>Welcome</h1>
	<Grid padding>
		<Row>
			<p>
				This is a very basic agile poker voting system. Enter your name, pick a team, and start.
				Scrummasters need to select that toggle so they can use the setup and clear buttons.
			</p>
		</Row>
		<Row>
			<Column>
				<TextInput
					id="name-text"
					name="name"
					labelText="Your name"
					placeholder="Enter your name"
					bind:value={$user.name}
				/>
			</Column>
			<Column>
				<Toggle
					id="scrummmaster-toggle"
					name="scrummaster"
					labelText="Are you the scrummaster?"
					labelA="No"
					labelB="Yes"
					bind:toggled={$user.scrummaster}
				/>
			</Column>
		</Row>
		<Row>
			<Column>
				<RadioButtonGroup
					legend="Team List"
					name="team"
					id="team-selection"
					orientation="vertical"
					legendText="Team"
					bind:selected={$user.team}
				>
					{#each teams as team}
						<RadioButton labelText={team} value={team} />
					{/each}
				</RadioButtonGroup>
			</Column>
			<Column />
		</Row>
		<Row>
			<Column>
				<p>Don't see your team? Create a new one:</p>
				<TextInput
					id="new-team-text"
					name="new-team"
					placeholder="Enter the name of a new team"
					bind:value={newTeam}
				/>
			</Column>
			<Column>
				<Button kind="secondary" id="add-team-button" on:click={() => addTeam()} icon={Add16}
					>Add new team</Button
				>
			</Column>
		</Row>
		<Row>
			<Button type="submit" id="create-user-button" icon={Rocket16} on:click={() => goVote()}
				>Start Voting</Button
			>
		</Row>
	</Grid>
</div>
