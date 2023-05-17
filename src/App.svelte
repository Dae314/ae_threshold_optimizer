<script>
	import { onMount, tick } from 'svelte';
	const take_cost = 48;
	const retry_cost = 4;
	const rec_samples = 30;
	const default_samples = '1e9\n2e9\n3e9\n4e9\n5e9';
	let stam = 1000;
	let raw_samples = default_samples;
	let samples;
	let optimal_thresh = 0;
	let curComp = 'A';
	const init_dmg_data = localStorage.getItem(curComp);
	if(init_dmg_data) raw_samples = init_dmg_data;
	
	$: samples = raw_samples.split('\n').map(e => Number(e));
	$: moreSamples = samples.length <= rec_samples ? rec_samples - samples.length : 0;

	onMount(() => {
		calculate();
	})
	
	function calculate() {
		const sample_min = Math.min(...samples);
		const sample_max = Math.max(...samples);
		let scale;
		if(sample_min >= 1e12) {
			scale = 1e11;
		} else	if(sample_min >= 1e9) {
			scale = 1e8;
		} else if(sample_min >= 1e6) {
			scale = 1e5;
		} else if(sample_min >= 1e3) {
			scale = 100;
		} else {
			scale = 10;
		}
		const min = Math.round(sample_min/scale)*scale;
		const max = Math.round(sample_max/scale)*scale;
		const step = (max - min)/20;
		let results = [];
		for(let i = min; i <= max; i+=step) {
			results.push(thresholdEV(i));
		}
		console.log(results)
		optimal_thresh = min + results.indexOf(Math.max(...results))*step;
		saveData();
	}
	
	// Calculate the expected damage for a given threshold at stamina
	function thresholdEV(threshold) {
		const samples_gt_thresh = samples.filter(e => e > threshold);
		if(samples_gt_thresh.length === 0) return 0;
		const p_dmg_gt_thresh = samples_gt_thresh.length/samples.length;
		const avg_dmg_gt_thresh = samples_gt_thresh.reduce((a, b) => a + b) / samples_gt_thresh.length;
		const e_stam_cost = p_dmg_gt_thresh*take_cost + (1-p_dmg_gt_thresh)*retry_cost;
		const e_total_att = Math.floor(stam/e_stam_cost);
		const e_dmg_att = Math.floor(p_dmg_gt_thresh*e_total_att);
		return e_dmg_att*avg_dmg_gt_thresh;
	}
	
	function handleTake() {
		if(stam >= take_cost) {
			stam -= take_cost;
			calculate();
		}
	}
	
	function handleRetry() {
		if(stam >= retry_cost) {
			stam -= retry_cost;
			calculate();
		}
	}

	async function changeComp(comp) {
		curComp = comp;
		const dmg_data = localStorage.getItem(comp);
		raw_samples = dmg_data ? dmg_data : default_samples;
		await tick();
		calculate();
	}

	function saveData() {
		localStorage.setItem(curComp, raw_samples);
	}
</script>

<nav>
	<button type="button" class="navButton" class:selected={curComp === 'A'} on:click={() => changeComp('A')}>A Comp</button>
	<button type="button" class="navButton" class:selected={curComp === 'B'} on:click={() => changeComp('B')}>B Comp</button>
	<button type="button" class="navButton" class:selected={curComp === 'C'} on:click={() => changeComp('C')}>C Comp</button>
	<button type="button" class="navButton" class:selected={curComp === 'D'} on:click={() => changeComp('D')}>D Comp</button>
	<button type="button" class="navButton" class:selected={curComp === 'E'} on:click={() => changeComp('E')}>E Comp</button>
</nav>
<main>
	<div class="col">
		<section>
			<label for="sample-input">Damage Samples (recommend at least {moreSamples} more):</label>
			<textarea id="sample-input" name="sample-input" bind:value={raw_samples} on:blur={calculate}></textarea>
		</section>
	</div>
	<div class="col">
		<section id="stamSect">
			<div id="stamInputArea">
				<label for="stamina-input">Remaining Stamina:</label>
				<input id="stamina-input" name="stamina-input" type=number bind:value={stam} on:input={calculate} />
			</div>
			<button type="button" on:click={calculate}>Refresh</button>
		</section>
		<section>
			<p>Retry if damage is less than:<br/>
			{optimal_thresh.toLocaleString('en-US')}</p>
		</section>
		<section id="buttonSect">
			<button class="updateButton" type="button" on:click={handleTake} disabled={stam < take_cost}>Take Damage</button>
			<button class="updateButton" type="button" on:click={handleRetry} disabled={stam < take_cost}>Retry</button>
		</section>
	</div>
</main>


<style>
	nav {
		width: 100%;
		display: flex;
	}
	main {
		display: grid;
		grid-template-columns: repeat(auto-fill, 300px);
		height: 100%;
		width: 100%;
	}
	label {
		color: #ECEFF4;
		margin-bottom: 5px;
	}
	#sample-input {
		background-color: #2E3440;
		color: #ECEFF4;
		width: 150px;
		height: 400px;
		font-size: 0.8rem;
	}
	section {
		border-bottom: 1px solid #ECEFF4;
		display: flex;
		flex-direction: column;
		padding: 5px;
		color: #ECEFF4;
	}
	input {
		outline: none;
		border: 1px solid #ECEFF4;
		border-radius: 5px;
		background-color: #2E3440;
		color: #ECEFF4;
		width: 70px;
	}
	textarea {
		outline: none;
		border: 1px solid #ECEFF4;
		border-radius: 5px;
	}
	button {
		width: fit-content;
	}
	#stamSect, #buttonSect {
		flex-direction: row;
	}
	#stamInputArea {
		flex-direction: column;
		margin: 0px 5px;
	}
	.updateButton {
		margin-right: 5px;
	}
	.navButton {
		margin-right: 5px;
		transition: all 0.2s;
	}
	.navButton.selected {
		background-color: #ECEFF4;
		color: #2E3440;
	}
	p {
		margin: 0;
	}
</style>
