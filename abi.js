base_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "AccountBalanceOverflow",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "ArrayLengthsMismatch",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "NotOwnerNorApproved",
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
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToNonERC1155ReceiverImplementer",
		"type": "error"
	},
	{
		"inputs": [],
		"name": "TransferToZeroAddress",
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
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "isApproved",
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
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
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
				"indexed": false,
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"indexed": false,
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			}
		],
		"name": "TransferBatch",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
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
				"indexed": false,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransferSingle",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "value",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "URI",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "adminMint",
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
			},
			{
				"internalType": "uint256",
				"name": "id",
				"type": "uint256"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "result",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "owners",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			}
		],
		"name": "balanceOfBatch",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "balances",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseCA",
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
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "bridgeToOrFrom20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "bridgefrom20",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "coins",
		"outputs": [
			{
				"internalType": "contract coppercoins",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "eventCA",
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
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "externalburn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "externalmint",
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
				"name": "result",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_armySlot",
				"type": "uint8"
			}
		],
		"name": "returnHome",
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
				"internalType": "uint256[]",
				"name": "ids",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "amounts",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeBatchTransferFrom",
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
				"name": "id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
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
				"internalType": "bool",
				"name": "_ismerc",
				"type": "bool"
			},
			{
				"internalType": "uint8",
				"name": "_armySlot",
				"type": "uint8"
			},
			{
				"internalType": "uint256",
				"name": "_soldierType",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_weapon",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_offhand",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_armor",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_other",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "sendToWar",
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
				"name": "isApproved",
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
				"internalType": "address",
				"name": "_newAddress",
				"type": "address"
			}
		],
		"name": "setEventCA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newAddress",
				"type": "address"
			}
		],
		"name": "setWarCA",
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
				"name": "result",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "uri",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "warCA",
		"outputs": [
			{
				"internalType": "contract warcontract",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
city_abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "TIME_MULTIPLIER",
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
		"inputs": [],
		"name": "_seasonLength",
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
				"internalType": "int256",
				"name": "_temp",
				"type": "int256"
			}
		],
		"name": "_seasonalTemp",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "baseBuilding",
						"type": "uint8"
					},
					{
						"internalType": "uint16[5]",
						"name": "reasourceType",
						"type": "uint16[5]"
					},
					{
						"internalType": "uint32[6]",
						"name": "reasourceAmount",
						"type": "uint32[6]"
					},
					{
						"internalType": "int24[3]",
						"name": "popChanges",
						"type": "int24[3]"
					},
					{
						"internalType": "uint8",
						"name": "employees",
						"type": "uint8"
					}
				],
				"internalType": "struct City.Buildingcost",
				"name": "_buildingInfo",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "_building",
				"type": "uint256"
			}
		],
		"name": "addBuildingData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32[8]",
						"name": "amount",
						"type": "uint32[8]"
					},
					{
						"internalType": "int16[8]",
						"name": "ingrediant",
						"type": "int16[8]"
					},
					{
						"internalType": "uint32[6]",
						"name": "outputAmount",
						"type": "uint32[6]"
					},
					{
						"internalType": "uint16[6]",
						"name": "output",
						"type": "uint16[6]"
					},
					{
						"internalType": "uint8",
						"name": "capacityUsed",
						"type": "uint8"
					},
					{
						"internalType": "uint16",
						"name": "timeToMake",
						"type": "uint16"
					},
					{
						"internalType": "uint8[4]",
						"name": "allowableBuildings",
						"type": "uint8[4]"
					}
				],
				"internalType": "struct City.CookingRecipes",
				"name": "_recipies",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "addCraftingData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_food",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "addFood",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[64]",
				"name": "_foodInfo",
				"type": "uint256[64]"
			}
		],
		"name": "addFoodData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[16][2]",
				"name": "_data",
				"type": "uint256[16][2]"
			},
			{
				"internalType": "uint256[8]",
				"name": "_id",
				"type": "uint256[8]"
			}
		],
		"name": "addHuntingData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint8",
						"name": "temperature",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "waterQuantity",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "altitude",
						"type": "uint8"
					},
					{
						"internalType": "uint16",
						"name": "soilQuality",
						"type": "uint16"
					},
					{
						"internalType": "uint16[5]",
						"name": "yieldAmount",
						"type": "uint16[5]"
					},
					{
						"internalType": "uint16[5]",
						"name": "yieldType",
						"type": "uint16[5]"
					}
				],
				"internalType": "struct City.LandData",
				"name": "_land",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "addLandData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint32[8]",
						"name": "amount",
						"type": "uint32[8]"
					},
					{
						"internalType": "int16[8]",
						"name": "ingrediant",
						"type": "int16[8]"
					},
					{
						"internalType": "uint32[6]",
						"name": "outputAmount",
						"type": "uint32[6]"
					},
					{
						"internalType": "uint16[6]",
						"name": "output",
						"type": "uint16[6]"
					},
					{
						"internalType": "uint8",
						"name": "capacityUsed",
						"type": "uint8"
					},
					{
						"internalType": "uint16",
						"name": "timeToMake",
						"type": "uint16"
					},
					{
						"internalType": "uint8[4]",
						"name": "allowableBuildings",
						"type": "uint8[4]"
					}
				],
				"internalType": "struct City.CookingRecipes[32]",
				"name": "_recipies",
				"type": "tuple[32]"
			},
			{
				"internalType": "uint256[32]",
				"name": "_id",
				"type": "uint256[32]"
			}
		],
		"name": "addMultiCraftingData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint16",
						"name": "yield",
						"type": "uint16"
					},
					{
						"internalType": "uint16",
						"name": "secondaryYield",
						"type": "uint16"
					},
					{
						"internalType": "uint8[3]",
						"name": "temperature",
						"type": "uint8[3]"
					},
					{
						"internalType": "uint8[2]",
						"name": "water",
						"type": "uint8[2]"
					},
					{
						"internalType": "uint8",
						"name": "minsoil",
						"type": "uint8"
					},
					{
						"internalType": "uint8",
						"name": "maxheight",
						"type": "uint8"
					},
					{
						"internalType": "uint16",
						"name": "growthTime",
						"type": "uint16"
					},
					{
						"internalType": "uint16",
						"name": "secondaryGrowthTime",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "isAnimal",
						"type": "bool"
					},
					{
						"internalType": "uint16",
						"name": "primaryOutput",
						"type": "uint16"
					},
					{
						"internalType": "uint16",
						"name": "secondaryOutput",
						"type": "uint16"
					}
				],
				"internalType": "struct City.Cropdata[8]",
				"name": "_crop",
				"type": "tuple[8]"
			},
			{
				"internalType": "uint256[8]",
				"name": "_id",
				"type": "uint256[8]"
			}
		],
		"name": "addMultiCropData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16[64][8]",
				"name": "_data",
				"type": "uint16[64][8]"
			},
			{
				"internalType": "int256[8]",
				"name": "_id",
				"type": "int256[8]"
			}
		],
		"name": "addMultiMixItemData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "adjustTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_landAdded",
				"type": "uint256"
			},
			{
				"internalType": "uint24",
				"name": "_landAmount",
				"type": "uint24"
			}
		],
		"name": "allocateLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "base1155",
		"outputs": [
			{
				"internalType": "contract permissionedIERC1155",
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
				"internalType": "uint256",
				"name": "_land",
				"type": "uint256"
			}
		],
		"name": "claim",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_buildingType",
				"type": "uint256"
			}
		],
		"name": "collect",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_recipenumber",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint16[8]",
				"name": "mixedgoods",
				"type": "uint16[8]"
			},
			{
				"internalType": "uint256",
				"name": "_buildingType",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_runs",
				"type": "uint256"
			}
		],
		"name": "cook",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_building",
				"type": "uint256"
			}
		],
		"name": "craftProgress",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "timeWhenCompleted",
						"type": "uint64"
					},
					{
						"internalType": "uint24",
						"name": "amountAtWork",
						"type": "uint24"
					},
					{
						"internalType": "uint16",
						"name": "recipe",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "isWorking",
						"type": "bool"
					}
				],
				"internalType": "struct City.WorkInProgress",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newBuilding",
				"type": "uint256"
			},
			{
				"internalType": "uint16",
				"name": "_amount",
				"type": "uint16"
			},
			{
				"internalType": "uint256",
				"name": "_landType",
				"type": "uint256"
			}
		],
		"name": "developCity",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_land",
				"type": "uint256"
			}
		],
		"name": "farmProgress",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64",
						"name": "time",
						"type": "uint64"
					},
					{
						"internalType": "uint8",
						"name": "land",
						"type": "uint8"
					},
					{
						"internalType": "uint64",
						"name": "landcount",
						"type": "uint64"
					},
					{
						"internalType": "uint16",
						"name": "cropfarm",
						"type": "uint16"
					},
					{
						"internalType": "uint64",
						"name": "landYieldMult",
						"type": "uint64"
					},
					{
						"internalType": "uint32",
						"name": "worktime",
						"type": "uint32"
					}
				],
				"internalType": "struct City.Farm",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			}
		],
		"name": "getBuildingCount",
		"outputs": [
			{
				"internalType": "uint256[32]",
				"name": "",
				"type": "uint256[32]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			}
		],
		"name": "getGeneralStockpile",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "foodItemCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "foodItemValue",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "drinkItemCount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "drinkItemValue",
						"type": "uint256"
					}
				],
				"internalType": "struct City.GeneralStockpiles",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			}
		],
		"name": "getKingdomInfo",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint64[3]",
						"name": "population",
						"type": "uint64[3]"
					},
					{
						"internalType": "uint64[3]",
						"name": "nonWorkingPopulation",
						"type": "uint64[3]"
					},
					{
						"internalType": "uint64[3]",
						"name": "maxPopulation",
						"type": "uint64[3]"
					},
					{
						"internalType": "uint64",
						"name": "industrySize",
						"type": "uint64"
					},
					{
						"internalType": "bool[8]",
						"name": "isWorking",
						"type": "bool[8]"
					},
					{
						"internalType": "uint8",
						"name": "kingdomType",
						"type": "uint8"
					}
				],
				"internalType": "struct City.Playercity",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			}
		],
		"name": "getLand",
		"outputs": [
			{
				"internalType": "uint256[8]",
				"name": "",
				"type": "uint256[8]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			}
		],
		"name": "getStockedGoods",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint40[5]",
						"name": "lastTithing",
						"type": "uint40[5]"
					},
					{
						"internalType": "uint8[5]",
						"name": "stockpiles",
						"type": "uint8[5]"
					},
					{
						"internalType": "uint8[5]",
						"name": "stockpileLevels",
						"type": "uint8[5]"
					}
				],
				"internalType": "struct City.ConsumerStockpiles",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
				"internalType": "uint256",
				"name": "_tithe",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "_amount",
				"type": "uint8"
			}
		],
		"name": "payTithe",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_land",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_landcount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_cropfarm",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fertilizer",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_runs",
				"type": "uint256"
			}
		],
		"name": "plant",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_popDesired",
				"type": "uint256"
			},
			{
				"internalType": "uint24",
				"name": "_popAmount",
				"type": "uint24"
			}
		],
		"name": "recruitNewPeople",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_landRemoved",
				"type": "uint256"
			},
			{
				"internalType": "uint24",
				"name": "_landAmount",
				"type": "uint24"
			}
		],
		"name": "removeLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnSeason",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "setBaseCA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256[2]",
				"name": "_itemData",
				"type": "int256[2]"
			}
		],
		"name": "setItemLevel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[6]",
				"name": "_tithes",
				"type": "uint256[6]"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "setKingdomTitheCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_kingdomType",
				"type": "uint8"
			}
		],
		"name": "setKingdomType",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[5]",
				"name": "_tithes",
				"type": "uint256[5]"
			},
			{
				"internalType": "uint256",
				"name": "_kingdom",
				"type": "uint256"
			}
		],
		"name": "setKingdomTypeTitheCost",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8[32]",
				"name": "_data",
				"type": "uint8[32]"
			}
		],
		"name": "setMaxOrders",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
war_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_base",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint16",
						"name": "equipmentType",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "addAttackInstead",
						"type": "bool"
					},
					{
						"internalType": "int16",
						"name": "attackMultiplier",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "defenceMultiplier",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "speedChange",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "armorChange",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "piercing",
						"type": "int16"
					},
					{
						"internalType": "uint8",
						"name": "range",
						"type": "uint8"
					},
					{
						"internalType": "uint16",
						"name": "mass",
						"type": "uint16"
					},
					{
						"internalType": "uint8",
						"name": "safeTemp",
						"type": "uint8"
					}
				],
				"internalType": "struct NewCombat.Equipment[32]",
				"name": "_equipment",
				"type": "tuple[32]"
			},
			{
				"internalType": "uint256[32]",
				"name": "_id",
				"type": "uint256[32]"
			}
		],
		"name": "addEquipmentDataLoop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16",
				"name": "_mercType",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "_armySlot",
				"type": "uint8"
			},
			{
				"internalType": "uint32",
				"name": "_amount",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "_you",
				"type": "address"
			}
		],
		"name": "addMerc",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "int16",
						"name": "attackMultiplier",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "defenceMultiplier",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "speedMultiplier",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "moraleMultiplier",
						"type": "int16"
					}
				],
				"internalType": "struct NewCombat.RationType",
				"name": "_ration",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "_rationNumber",
				"type": "uint256"
			}
		],
		"name": "addRation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "int16",
								"name": "attack",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "defence",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "armor",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "speed",
								"type": "int16"
							},
							{
								"internalType": "uint8",
								"name": "range",
								"type": "uint8"
							},
							{
								"internalType": "int16",
								"name": "piercing",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "morale",
								"type": "int16"
							},
							{
								"internalType": "uint16",
								"name": "mass",
								"type": "uint16"
							},
							{
								"internalType": "bool",
								"name": "hasShield",
								"type": "bool"
							},
							{
								"internalType": "uint16[2]",
								"name": "additionalDeployCost",
								"type": "uint16[2]"
							},
							{
								"internalType": "uint8",
								"name": "safeTemp",
								"type": "uint8"
							}
						],
						"internalType": "struct NewCombat.soldier",
						"name": "soldierData",
						"type": "tuple"
					},
					{
						"internalType": "uint16[4]",
						"name": "equipableGear",
						"type": "uint16[4]"
					},
					{
						"internalType": "bool[4]",
						"name": "isGearMandatory",
						"type": "bool[4]"
					}
				],
				"internalType": "struct NewCombat.BaseSoldier",
				"name": "_troop",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "addSoldierData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "int16",
								"name": "attack",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "defence",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "armor",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "speed",
								"type": "int16"
							},
							{
								"internalType": "uint8",
								"name": "range",
								"type": "uint8"
							},
							{
								"internalType": "int16",
								"name": "piercing",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "morale",
								"type": "int16"
							},
							{
								"internalType": "uint16",
								"name": "mass",
								"type": "uint16"
							},
							{
								"internalType": "bool",
								"name": "hasShield",
								"type": "bool"
							},
							{
								"internalType": "uint16[2]",
								"name": "additionalDeployCost",
								"type": "uint16[2]"
							},
							{
								"internalType": "uint8",
								"name": "safeTemp",
								"type": "uint8"
							}
						],
						"internalType": "struct NewCombat.soldier",
						"name": "soldierData",
						"type": "tuple"
					},
					{
						"internalType": "uint16[4]",
						"name": "equipableGear",
						"type": "uint16[4]"
					},
					{
						"internalType": "bool[4]",
						"name": "isGearMandatory",
						"type": "bool[4]"
					}
				],
				"internalType": "struct NewCombat.BaseSoldier[32]",
				"name": "_troop",
				"type": "tuple[32]"
			},
			{
				"internalType": "uint256[32]",
				"name": "_id",
				"type": "uint256[32]"
			}
		],
		"name": "addSoldierDataLoop",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "base3",
		"outputs": [
			{
				"internalType": "contract basegame",
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
				"internalType": "uint160",
				"name": "_quest",
				"type": "uint160"
			}
		],
		"name": "beginQuest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_newCA",
				"type": "address"
			}
		],
		"name": "changeBaseCA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[12]",
				"name": "_data",
				"type": "uint256[12]"
			},
			{
				"internalType": "uint256",
				"name": "_questID",
				"type": "uint256"
			}
		],
		"name": "changeQuestRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_mission",
				"type": "uint256"
			}
		],
		"name": "combatmission",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_questID",
				"type": "address"
			},
			{
				"internalType": "uint256[12]",
				"name": "_unitID",
				"type": "uint256[12]"
			},
			{
				"internalType": "uint256[12]",
				"name": "_unitAmount",
				"type": "uint256[12]"
			},
			{
				"internalType": "uint256",
				"name": "_battlefield",
				"type": "uint256"
			}
		],
		"name": "createQuest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "currentArmy",
		"outputs": [
			{
				"components": [
					{
						"components": [
							{
								"internalType": "int16",
								"name": "attack",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "defence",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "armor",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "speed",
								"type": "int16"
							},
							{
								"internalType": "uint8",
								"name": "range",
								"type": "uint8"
							},
							{
								"internalType": "int16",
								"name": "piercing",
								"type": "int16"
							},
							{
								"internalType": "int16",
								"name": "morale",
								"type": "int16"
							},
							{
								"internalType": "uint16",
								"name": "mass",
								"type": "uint16"
							},
							{
								"internalType": "bool",
								"name": "hasShield",
								"type": "bool"
							},
							{
								"internalType": "uint16[2]",
								"name": "additionalDeployCost",
								"type": "uint16[2]"
							},
							{
								"internalType": "uint8",
								"name": "safeTemp",
								"type": "uint8"
							}
						],
						"internalType": "struct NewCombat.soldier[12]",
						"name": "soldiertype",
						"type": "tuple[12]"
					},
					{
						"internalType": "bool[12]",
						"name": "isActive",
						"type": "bool[12]"
					},
					{
						"internalType": "uint32[12]",
						"name": "soldieramount",
						"type": "uint32[12]"
					},
					{
						"internalType": "uint16[60]",
						"name": "currentequipment",
						"type": "uint16[60]"
					},
					{
						"internalType": "uint16[3]",
						"name": "rations",
						"type": "uint16[3]"
					},
					{
						"internalType": "bool",
						"name": "hasMeds",
						"type": "bool"
					}
				],
				"internalType": "struct NewCombat.CurrentArmyComposition",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "_ismerc",
				"type": "bool"
			},
			{
				"internalType": "uint8",
				"name": "_armySlot",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "_soldier",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "_weapon",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "_offhand",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "_armor",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "_other",
				"type": "uint16"
			},
			{
				"internalType": "uint32",
				"name": "_amount",
				"type": "uint32"
			},
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			}
		],
		"name": "mercRouter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
				"internalType": "uint8",
				"name": "_armySlot",
				"type": "uint8"
			},
			{
				"internalType": "address",
				"name": "_you",
				"type": "address"
			}
		],
		"name": "removeSoldier",
		"outputs": [
			{
				"internalType": "uint16[5]",
				"name": "",
				"type": "uint16[5]"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16[3]",
				"name": "_rations",
				"type": "uint16[3]"
			},
			{
				"internalType": "bool",
				"name": "setMeds",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			}
		],
		"name": "setRation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint16[3]",
				"name": "_rations",
				"type": "uint16[3]"
			},
			{
				"internalType": "bool",
				"name": "setMeds",
				"type": "bool"
			}
		],
		"name": "userSetRation",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "war",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
tradingEvent_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_game",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "claimEventRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "currentEvent",
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
		"inputs": [],
		"name": "eventCounter",
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
		"inputs": [],
		"name": "getCurrentEventData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256[4][4]",
						"name": "thresholds",
						"type": "uint256[4][4]"
					},
					{
						"internalType": "uint256[2][4][4]",
						"name": "rewards",
						"type": "uint256[2][4][4]"
					},
					{
						"internalType": "uint256[4]",
						"name": "popRequirement",
						"type": "uint256[4]"
					},
					{
						"internalType": "uint256",
						"name": "endTime",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "item",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "incrementalReward",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "incrementalRewardCost",
						"type": "uint256"
					}
				],
				"internalType": "struct TradingEvent.EventData",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_who",
				"type": "address"
			}
		],
		"name": "getPlayerData",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "kingdomLevel",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountContributed",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "lastEventContributedTo",
						"type": "uint256"
					}
				],
				"internalType": "struct TradingEvent.PlayerData",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mainGame",
		"outputs": [
			{
				"internalType": "contract IC1155Q",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "payEvent",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "standardEventDuration",
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
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "validEventNumbers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
merchant_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_TokenContract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "SellLand",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256[64]",
				"name": "_itemID",
				"type": "uint256[64]"
			},
			{
				"internalType": "int256[64]",
				"name": "_itemValue",
				"type": "int256[64]"
			},
			{
				"internalType": "int256[64]",
				"name": "_marketSize",
				"type": "int256[64]"
			}
		],
		"name": "addItemValues",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newPrice",
				"type": "uint256"
			}
		],
		"name": "adjustBasePrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "basePrice",
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
		"inputs": [],
		"name": "currentEthBal",
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
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "currentLandPrice",
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
		"inputs": [],
		"name": "dev",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "devIsSelling",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "marketFee",
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
		"inputs": [],
		"name": "marketSizeMultiplier",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftContract",
		"outputs": [
			{
				"internalType": "contract permissionedIERC1155M",
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
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC1155BatchReceived",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "",
				"type": "bytes"
			}
		],
		"name": "onERC1155Received",
		"outputs": [
			{
				"internalType": "bytes4",
				"name": "",
				"type": "bytes4"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "previouslySold",
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
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "returnAmountSold",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_value",
				"type": "uint256"
			}
		],
		"name": "returnItemValue",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_land",
				"type": "uint256"
			}
		],
		"name": "returnLandMult",
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
		"inputs": [],
		"name": "returnMarketFee",
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
				"name": "_size",
				"type": "uint256"
			}
		],
		"name": "returnMarketSize",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnMarketSizeMultiplier",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "returnTotalLandSales",
		"outputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "setMarketFee",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "_size",
				"type": "int256"
			}
		],
		"name": "setMarketSize",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "_size",
				"type": "int256"
			}
		],
		"name": "setMarketSizeMultiplier",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_itemID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_minTradePrice",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isBuy",
				"type": "bool"
			}
		],
		"name": "tradeItem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
giveaway_abi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_TokenContract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "alreadyUsed",
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
		"name": "getFreeLand",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "nftContract",
		"outputs": [
			{
				"internalType": "contract permissionedIERC1155K",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]