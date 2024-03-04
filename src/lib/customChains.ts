
export const chains = [
    {
        "id": 17000,
        "name": "Holesky",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": {
            "public": {
                "http": [
                    "https://ethereum-holesky.blockpi.network/v1/rpc/public"
                ]
            },
            "default": {
                "http": [
                    "https://ethereum-holesky.blockpi.network/v1/rpc/public"
                ]
            }
        }
    },
    {
        "id": 11155111,
        "name": "Sepolia",
        "nativeCurrency": {
            "name": "Ether",
            "symbol": "ETH",
            "decimals": 18
        },
        "rpcUrls": {
            "public": {
                "http": [
                    "https://gateway.tenderly.co/public/sepolia	"
                ]
            },
            "default": {
                "http": [
                    "https://gateway.tenderly.co/public/sepolia	"
                ]
            }
        }
    }
] as const;