export const ERC721 = {
	"compiler": {
		"version": "0.8.22+commit.4fc1097e"
	},
	"language": "Solidity",
	"output": {
		"abi": [
			{
				"inputs": [],
				"stateMutability": "nonpayable",
				"type": "constructor"
			},
			{
				"inputs": [],
				"name": "ERC721EnumerableForbiddenBatchMint",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"name": "ERC721IncorrectOwner",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "ERC721InsufficientApproval",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "approver",
						"type": "address"
					}
				],
				"name": "ERC721InvalidApprover",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					}
				],
				"name": "ERC721InvalidOperator",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"name": "ERC721InvalidOwner",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "receiver",
						"type": "address"
					}
				],
				"name": "ERC721InvalidReceiver",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					}
				],
				"name": "ERC721InvalidSender",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "ERC721NonexistentToken",
				"type": "error"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "ERC721OutOfBoundsIndex",
				"type": "error"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "approved",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "Approval",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"indexed": false,
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "ApprovalForAll",
				"type": "event"
			},
			{
				"anonymous": false,
				"inputs": [
					{
						"indexed": true,
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"indexed": true,
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "Transfer",
				"type": "event"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "approve",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"name": "balanceOf",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "getApproved",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					}
				],
				"name": "getNFTsByOwner",
				"outputs": [
					{
						"internalType": "uint256[]",
						"name": "",
						"type": "uint256[]"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					}
				],
				"name": "isApprovedForAll",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "mint",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "name",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "ownerOf",
				"outputs": [
					{
						"internalType": "address",
						"name": "",
						"type": "address"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					},
					{
						"internalType": "bytes",
						"name": "data",
						"type": "bytes"
					}
				],
				"name": "safeTransferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "operator",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "approved",
						"type": "bool"
					}
				],
				"name": "setApprovalForAll",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "bytes4",
						"name": "interfaceId",
						"type": "bytes4"
					}
				],
				"name": "supportsInterface",
				"outputs": [
					{
						"internalType": "bool",
						"name": "",
						"type": "bool"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "symbol",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "tokenByIndex",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "index",
						"type": "uint256"
					}
				],
				"name": "tokenOfOwnerByIndex",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "tokenURI",
				"outputs": [
					{
						"internalType": "string",
						"name": "",
						"type": "string"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [],
				"name": "totalSupply",
				"outputs": [
					{
						"internalType": "uint256",
						"name": "",
						"type": "uint256"
					}
				],
				"stateMutability": "view",
				"type": "function"
			},
			{
				"inputs": [
					{
						"internalType": "address",
						"name": "from",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "to",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "tokenId",
						"type": "uint256"
					}
				],
				"name": "transferFrom",
				"outputs": [],
				"stateMutability": "nonpayable",
				"type": "function"
			}
		],
		"devdoc": {
			"errors": {
				"ERC721EnumerableForbiddenBatchMint()": [
					{
						"details": "Batch mint is not allowed."
					}
				],
				"ERC721IncorrectOwner(address,uint256,address)": [
					{
						"details": "Indicates an error related to the ownership over a particular token. Used in transfers.",
						"params": {
							"owner": "Address of the current owner of a token.",
							"sender": "Address whose tokens are being transferred.",
							"tokenId": "Identifier number of a token."
						}
					}
				],
				"ERC721InsufficientApproval(address,uint256)": [
					{
						"details": "Indicates a failure with the `operator`’s approval. Used in transfers.",
						"params": {
							"operator": "Address that may be allowed to operate on tokens without being their owner.",
							"tokenId": "Identifier number of a token."
						}
					}
				],
				"ERC721InvalidApprover(address)": [
					{
						"details": "Indicates a failure with the `approver` of a token to be approved. Used in approvals.",
						"params": {
							"approver": "Address initiating an approval operation."
						}
					}
				],
				"ERC721InvalidOperator(address)": [
					{
						"details": "Indicates a failure with the `operator` to be approved. Used in approvals.",
						"params": {
							"operator": "Address that may be allowed to operate on tokens without being their owner."
						}
					}
				],
				"ERC721InvalidOwner(address)": [
					{
						"details": "Indicates that an address can't be an owner. For example, `address(0)` is a forbidden owner in EIP-20. Used in balance queries.",
						"params": {
							"owner": "Address of the current owner of a token."
						}
					}
				],
				"ERC721InvalidReceiver(address)": [
					{
						"details": "Indicates a failure with the token `receiver`. Used in transfers.",
						"params": {
							"receiver": "Address to which tokens are being transferred."
						}
					}
				],
				"ERC721InvalidSender(address)": [
					{
						"details": "Indicates a failure with the token `sender`. Used in transfers.",
						"params": {
							"sender": "Address whose tokens are being transferred."
						}
					}
				],
				"ERC721NonexistentToken(uint256)": [
					{
						"details": "Indicates a `tokenId` whose `owner` is the zero address.",
						"params": {
							"tokenId": "Identifier number of a token."
						}
					}
				],
				"ERC721OutOfBoundsIndex(address,uint256)": [
					{
						"details": "An `owner`'s token query was out of bounds for `index`. NOTE: The owner being `address(0)` indicates a global out of bounds index."
					}
				]
			},
			"events": {
				"Approval(address,address,uint256)": {
					"details": "Emitted when `owner` enables `approved` to manage the `tokenId` token."
				},
				"ApprovalForAll(address,address,bool)": {
					"details": "Emitted when `owner` enables or disables (`approved`) `operator` to manage all of its assets."
				},
				"Transfer(address,address,uint256)": {
					"details": "Emitted when `tokenId` token is transferred from `from` to `to`."
				}
			},
			"kind": "dev",
			"methods": {
				"approve(address,uint256)": {
					"details": "See {IERC721-approve}."
				},
				"balanceOf(address)": {
					"details": "See {IERC721-balanceOf}."
				},
				"getApproved(uint256)": {
					"details": "See {IERC721-getApproved}."
				},
				"isApprovedForAll(address,address)": {
					"details": "See {IERC721-isApprovedForAll}."
				},
				"name()": {
					"details": "See {IERC721Metadata-name}."
				},
				"ownerOf(uint256)": {
					"details": "See {IERC721-ownerOf}."
				},
				"safeTransferFrom(address,address,uint256)": {
					"details": "See {IERC721-safeTransferFrom}."
				},
				"safeTransferFrom(address,address,uint256,bytes)": {
					"details": "See {IERC721-safeTransferFrom}."
				},
				"setApprovalForAll(address,bool)": {
					"details": "See {IERC721-setApprovalForAll}."
				},
				"supportsInterface(bytes4)": {
					"details": "See {IERC165-supportsInterface}."
				},
				"symbol()": {
					"details": "See {IERC721Metadata-symbol}."
				},
				"tokenByIndex(uint256)": {
					"details": "See {IERC721Enumerable-tokenByIndex}."
				},
				"tokenOfOwnerByIndex(address,uint256)": {
					"details": "See {IERC721Enumerable-tokenOfOwnerByIndex}."
				},
				"tokenURI(uint256)": {
					"details": "See {IERC721Metadata-tokenURI}."
				},
				"totalSupply()": {
					"details": "See {IERC721Enumerable-totalSupply}."
				},
				"transferFrom(address,address,uint256)": {
					"details": "See {IERC721-transferFrom}."
				}
			},
			"version": 1
		},
		"userdoc": {
			"kind": "user",
			"methods": {},
			"version": 1
		}
	},
	"settings": {
		"compilationTarget": {
			"contracts/ERC721.sol": "ArtToken"
		},
		"evmVersion": "shanghai",
		"libraries": {},
		"metadata": {
			"bytecodeHash": "ipfs"
		},
		"optimizer": {
			"enabled": false,
			"runs": 200
		},
		"remappings": []
	},
	"sources": {
		"@openzeppelin/contracts@5.0.0/interfaces/draft-IERC6093.sol": {
			"keccak256": "0x60c65f701957fdd6faea1acb0bb45825791d473693ed9ecb34726fdfaa849dd7",
			"license": "MIT",
			"urls": [
				"bzz-raw://ea290300e0efc4d901244949dc4d877fd46e6c5e43dc2b26620e8efab3ab803f",
				"dweb:/ipfs/QmcLLJppxKeJWqHxE2CUkcfhuRTgHSn8J4kijcLa5MYhSt"
			]
		},
		"@openzeppelin/contracts@5.0.0/token/ERC721/ERC721.sol": {
			"keccak256": "0x13dd061770956c8489b80cfc89d9cdfc8ea2783d953691ea037a380731d52784",
			"license": "MIT",
			"urls": [
				"bzz-raw://ed37f0f86e7fe31659e48c3a2a5920a92dd7f13c85cf8991fb79fe5f01e08efd",
				"dweb:/ipfs/QmUtm9bQGvjr9hHGwkPWrbgFmVqzaJcxjkaYDex2oGsonS"
			]
		},
		"@openzeppelin/contracts@5.0.0/token/ERC721/IERC721.sol": {
			"keccak256": "0x5ef46daa3b58ef2702279d514780316efaa952915ee1aa3396f041ee2982b0b4",
			"license": "MIT",
			"urls": [
				"bzz-raw://2f8f2a76e23b02fc69e8cd24c3cb47da6c7af3a2d6c3a382f8ac25c6e094ade7",
				"dweb:/ipfs/QmPV4ZS4tPVv4mTCf9ejyZ1ai57EEibDRj7mN2ARDCLV5n"
			]
		},
		"@openzeppelin/contracts@5.0.0/token/ERC721/IERC721Receiver.sol": {
			"keccak256": "0x7f7a26306c79a65fb8b3b6c757cd74660c532cd8a02e165488e30027dd34ca49",
			"license": "MIT",
			"urls": [
				"bzz-raw://d01e0b2b837ee2f628545e54d8715b49c7ef2befd08356c2e7f6c50dde8a1c22",
				"dweb:/ipfs/QmWBAn6y2D1xgftci97Z3qR9tQnkvwQpYwFwkTvDMvqU4i"
			]
		},
		"@openzeppelin/contracts@5.0.0/token/ERC721/extensions/ERC721Enumerable.sol": {
			"keccak256": "0x36797469c391ea5ba27408e6ca8adf0824ba6f3adea9c139be18bd6f63232c16",
			"license": "MIT",
			"urls": [
				"bzz-raw://0dcf8bb9f7c29d678de34a051b4a71cf27ae56464678696c6913cbbfc75d548a",
				"dweb:/ipfs/QmSfdgU9V2dXh9oajUxgF9hU1aPnpd1PEMtcchoANsCNmW"
			]
		},
		"@openzeppelin/contracts@5.0.0/token/ERC721/extensions/IERC721Enumerable.sol": {
			"keccak256": "0x3d6954a93ac198a2ffa384fa58ccf18e7e235263e051a394328002eff4e073de",
			"license": "MIT",
			"urls": [
				"bzz-raw://1f58c799bd939d3951c94893e83ef86acd56989d1d7db7f9d180c515e29e28ff",
				"dweb:/ipfs/QmTgAxHAAys4kq9ZfU9YB24MWYoHLGAKSxnYUigPFrNW7g"
			]
		},
		"@openzeppelin/contracts@5.0.0/token/ERC721/extensions/IERC721Metadata.sol": {
			"keccak256": "0x37d1aaaa5a2908a09e9dcf56a26ddf762ecf295afb5964695937344fc6802ce1",
			"license": "MIT",
			"urls": [
				"bzz-raw://ed0bfc1b92153c5000e50f4021367b931bbe96372ac6facec3c4961b72053d02",
				"dweb:/ipfs/Qmbwp8VDerjS5SV1quwHH1oMXxPQ93fzfLVqJ2RCqbowGE"
			]
		},
		"@openzeppelin/contracts@5.0.0/utils/Context.sol": {
			"keccak256": "0x75a4ee64c68dbd5f38bddd06e664a64c8271b4caa554fb6f0607dfd672bb4bf3",
			"license": "MIT",
			"urls": [
				"bzz-raw://0c4e6cb30d3601e2f7af5af09e265508147cb275a8dcd99d6f7363645cc56867",
				"dweb:/ipfs/QmNgFkoXNWoUbAyw71rr1sKQ95Rj2GfvYiWg79xEYDn2NY"
			]
		},
		"@openzeppelin/contracts@5.0.0/utils/Strings.sol": {
			"keccak256": "0x55f102ea785d8399c0e58d1108e2d289506dde18abc6db1b7f68c1f9f9bc5792",
			"license": "MIT",
			"urls": [
				"bzz-raw://6e52e0a7765c943ef14e5bcf11e46e6139fa044be564881378349236bf2e3453",
				"dweb:/ipfs/QmZEeeXoFPW47amyP35gfzomF9DixqqTEPwzBakv6cZw6i"
			]
		},
		"@openzeppelin/contracts@5.0.0/utils/introspection/ERC165.sol": {
			"keccak256": "0x9e8778b14317ba9e256c30a76fd6c32b960af621987f56069e1e819c77c6a133",
			"license": "MIT",
			"urls": [
				"bzz-raw://1777404f1dcd0fac188e55a288724ec3c67b45288e49cc64723e95e702b49ab8",
				"dweb:/ipfs/QmZFdC626GButBApwDUvvTnUzdinevC3B24d7yyh57XkiA"
			]
		},
		"@openzeppelin/contracts@5.0.0/utils/introspection/IERC165.sol": {
			"keccak256": "0x4296879f55019b23e135000eb36896057e7101fb7fb859c5ef690cf14643757b",
			"license": "MIT",
			"urls": [
				"bzz-raw://87b3541437c8c443ccd36795e56a338ed12855eec17f8da624511b8d1a7e14df",
				"dweb:/ipfs/QmeJQCtZrQjtJLr6u7ZHWeH3pBnjtLWzvRrKViAi7UZqxL"
			]
		},
		"@openzeppelin/contracts@5.0.0/utils/math/Math.sol": {
			"keccak256": "0x005ec64c6313f0555d59e278f9a7a5ab2db5bdc72a027f255a37c327af1ec02d",
			"license": "MIT",
			"urls": [
				"bzz-raw://4ece9f0b9c8daca08c76b6b5405a6446b6f73b3a15fab7ff56e296cbd4a2c875",
				"dweb:/ipfs/QmQyRpyPRL5SQuAgj6SHmbir3foX65FJjbVTTQrA2EFg6L"
			]
		},
		"@openzeppelin/contracts@5.0.0/utils/math/SignedMath.sol": {
			"keccak256": "0x5f7e4076e175393767754387c962926577f1660dd9b810187b9002407656be72",
			"license": "MIT",
			"urls": [
				"bzz-raw://7d533a1c97cd43a57cd9c465f7ee8dd0e39ae93a8fb8ff8e5303a356b081cdcc",
				"dweb:/ipfs/QmVBEei6aTnvYNZp2CHYVNKyZS4q1KkjANfY39WVXZXVoT"
			]
		},
		"contracts/ERC721.sol": {
			"keccak256": "0x96c7c092f1228fd6f29e0b98f1a0882122efa02601dcc951ec4b746ce481d978",
			"license": "MIT",
			"urls": [
				"bzz-raw://c0f7c93f822ff618b4e922b36a5b6a4be726bcb62133af407de709d882d2a493",
				"dweb:/ipfs/QmRJ1qzFRtqQkX2MEhcBDj43MLTxiC4WWpwHUenoi7Vre9"
			]
		}
	},
	"version": 1
}