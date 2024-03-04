
export const chains = [
    {
        id: 17000,
        name: 'Holesky',
        nativeCurrency: { name: 'Holesky Ether', symbol: 'ETH', decimals: 18 },
        rpcUrls: {
            default: {
                http: ['https://ethereum-holesky.publicnode.com'],
            },
        },
        blockExplorers: {
            default: {
                name: 'Etherscan',
                url: 'https://holesky.etherscan.io',
            },
        },
        contracts: {
            multicall3: {
                address: '0xca11bde05977b3631167028862be2a173976ca11',
                blockCreated: 77,
            },
            ensRegistry: {
                address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e',
                blockCreated: 801613,
            },
            ensUniversalResolver: {
                address: '0x2548a7E09deE955c4d97688dcB6C5b24085725f5',
                blockCreated: 815385,
            },
        },
        testnet: true,
    }, {
        id: 11_155_111,
        name: 'Sepolia',
        nativeCurrency: { name: 'Sepolia Ether', symbol: 'SEP', decimals: 18 },
        rpcUrls: {
            default: {
                http: ['https://rpc.sepolia.org'],
            },
        },
        blockExplorers: {
            default: {
                name: 'Etherscan',
                url: 'https://sepolia.etherscan.io',
                apiUrl: 'https://api-sepolia.etherscan.io/api',
            },
        },
        contracts: {
            multicall3: {
                address: '0xca11bde05977b3631167028862be2a173976ca11',
                blockCreated: 751532,
            },
            ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
            ensUniversalResolver: {
                address: '0xBaBC7678D7A63104f1658c11D6AE9A21cdA09725',
                blockCreated: 5_043_334,
            },
        },
        testnet: true,
    }
] as const;