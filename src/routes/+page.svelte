<script lang="ts">
	const testApi = () => {
		// eslint-disable-next-line no-console
		console.log('test');
		// fetch from /api/test via get
		fetch('/api/test', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				// eslint-disable-next-line no-console
				console.log(data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};
</script>

<button on:click={() => testApi()}>Test</button>
