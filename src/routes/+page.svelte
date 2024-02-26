<script lang="ts">
	import { createWeb3Modal } from '@web3modal/wagmi';

	import { holesky, sepolia } from 'viem/chains';
	import { createConfig, http, injected, reconnect } from '@wagmi/core';
	import { walletConnect } from '@wagmi/connectors';

	const projectId = 'd2617bcfdd3e342d8f37aa63a80482ad';

	const chains = [holesky, sepolia] as const;

	
	function createTransports(chains: readonly Chain[]) {
	const transports = chains.reduce((acc, chain) => {
		const { id } = chain;
		return { ...acc, [id]: http() };
	}, {} as Record<number, ReturnType<typeof http>>);

	return transports;
	}

	export const config = createConfig({
		chains: [...chains],
		connectors: [walletConnect({ projectId, showQrModal: false }), injected()],
		transports: createTransports(chains)
	});

	reconnect(config);

	export const modal = createWeb3Modal({
		wagmiConfig: config,
		projectId
	});
</script>

<w3m-button />
