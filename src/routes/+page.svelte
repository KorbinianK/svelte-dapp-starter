<script lang="ts">
	import { createWeb3Modal } from '@web3modal/wagmi';

	import { holesky, sepolia } from 'viem/chains';
	import { createConfig, http, injected, reconnect } from '@wagmi/core';
	import { walletConnect } from '@wagmi/connectors';

	const projectId = 'd2617bcfdd3e342d8f37aa63a80482ad';

	const chains = [holesky, sepolia];

	const transports = chains.reduce((acc, { id }) => ({ ...acc, [id]: http() }), {});

	export const config = createConfig({
		//@ts-expect-error "This is also a bug in the library, it should accept an array of chains."
		chains: [...chains],
		connectors: [walletConnect({ projectId, showQrModal: false }), injected()],
		transports
	});

	reconnect(config);

	export const modal = createWeb3Modal({
		wagmiConfig: config,
		projectId
	});
</script>

<w3m-button />
