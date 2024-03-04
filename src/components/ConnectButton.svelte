<script lang="ts">
	import { createWeb3Modal } from '@web3modal/wagmi';

	import { holesky, sepolia, type Chain } from 'viem/chains';
	import { createConfig, getChainId, http, injected, reconnect, switchChain } from '@wagmi/core';
	import { walletConnect } from '@wagmi/connectors';
	import { chains as customChains } from '$lib';

	const projectId = 'd2617bcfdd3e342d8f37aa63a80482ad';

	$: status = '';

	function createTransports(chains: readonly Chain[]) {
		const transports = chains.reduce(
			(acc, chain) => {
				const { id } = chain;
				return { ...acc, [id]: http() };
			},
			{} as Record<number, ReturnType<typeof http>>
		);

		return transports;
	}

	// replace customChains with this and suddenly it works
	const configuredChains = [holesky, sepolia];

	export const config = createConfig({
		chains: customChains,
		connectors: [walletConnect({ projectId, showQrModal: false }), injected()],
		transports: createTransports(customChains)
	});

	reconnect(config);

	export const modal = createWeb3Modal({
		wagmiConfig: config,
		projectId
	});

	const switchManually = async () => {
		// switch between chains
		try {
			const currentChain = getChainId(config);

			if (currentChain === holesky.id) {
				await switchChain(config, { chainId: sepolia.id });
			} else {
				await switchChain(config, { chainId: holesky.id });
			}
			status = 'switched';
		} catch (err: unknown) {
			if (err instanceof Error) {
				status = err.message;
			}
		}
	};
</script>

<w3m-button />

<button on:click={() => switchManually()}> manual switch network </button>
<br />
Manual switch response:<br />
{status}
