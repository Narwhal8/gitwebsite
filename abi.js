

 const abi = [
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
				"name": "account",
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
				"name": "values",
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
				"name": "value",
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
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "Farmtimer",
		"outputs": [
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
				"internalType": "uint8",
				"name": "landcount",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "cropfarm",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "yieldperland",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "worktime",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
		"inputs": [
			{
				"components": [
					{
						"internalType": "uint16[6]",
						"name": "amount",
						"type": "uint16[6]"
					},
					{
						"internalType": "int16[6]",
						"name": "ingrediant",
						"type": "int16[6]"
					},
					{
						"internalType": "uint16[2]",
						"name": "outputAmount",
						"type": "uint16[2]"
					},
					{
						"internalType": "uint16[2]",
						"name": "output",
						"type": "uint16[2]"
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
		"name": "addCraftingData",
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
						"internalType": "uint16",
						"name": "primaryOutput",
						"type": "uint16"
					},
					{
						"internalType": "uint16",
						"name": "secondaryOutput",
						"type": "uint16"
					},
					{
						"internalType": "bool",
						"name": "isAnimal",
						"type": "bool"
					}
				],
				"internalType": "struct City.CropMetadata",
				"name": "_crop",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "addCropData",
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
						"internalType": "uint8",
						"name": "soilQuality",
						"type": "uint8"
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
				"internalType": "uint8",
				"name": "_landAdded",
				"type": "uint8"
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
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
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
				"internalType": "address[]",
				"name": "accounts",
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
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "base",
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
				"name": "_newCA",
				"type": "address"
			}
		],
		"name": "changeWarCA",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_land",
				"type": "uint8"
			}
		],
		"name": "claim",
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
		"inputs": [
			{
				"internalType": "uint8",
				"name": "_buildingType",
				"type": "uint8"
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
				"internalType": "uint24",
				"name": "_recipenumber",
				"type": "uint24"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			},
			{
				"internalType": "uint16[6]",
				"name": "mixedgoods",
				"type": "uint16[6]"
			},
			{
				"internalType": "uint8",
				"name": "_buildingType",
				"type": "uint8"
			},
			{
				"internalType": "uint16[2]",
				"name": "_fooditems",
				"type": "uint16[2]"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "cropMetaData",
		"outputs": [
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
				"internalType": "uint16",
				"name": "primaryOutput",
				"type": "uint16"
			},
			{
				"internalType": "uint16",
				"name": "secondaryOutput",
				"type": "uint16"
			},
			{
				"internalType": "bool",
				"name": "isAnimal",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "deploytime",
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
			}
		],
		"name": "getBuildingCount",
		"outputs": [
			{
				"internalType": "uint16[32]",
				"name": "",
				"type": "uint16[32]"
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
						"internalType": "uint24[3]",
						"name": "population",
						"type": "uint24[3]"
					},
					{
						"internalType": "uint24[3]",
						"name": "nonWorkingPopulation",
						"type": "uint24[3]"
					},
					{
						"internalType": "uint24[3]",
						"name": "maxPopulation",
						"type": "uint24[3]"
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
					},
					{
						"internalType": "uint24[8]",
						"name": "landForHarvest",
						"type": "uint24[8]"
					}
				],
				"internalType": "struct City.Playercity",
				"name": "_city",
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
				"name": "account",
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
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "landData",
		"outputs": [
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
				"internalType": "uint8",
				"name": "soilQuality",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "int256",
				"name": "",
				"type": "int256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "mixedIngrediants",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "",
				"type": "uint16"
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
				"internalType": "uint8",
				"name": "_land",
				"type": "uint8"
			},
			{
				"internalType": "uint8",
				"name": "_landcount",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "_cropfarm",
				"type": "uint16"
			},
			{
				"internalType": "uint16[2]",
				"name": "_fooditems",
				"type": "uint16[2]"
			},
			{
				"internalType": "uint16",
				"name": "_runs",
				"type": "uint16"
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
				"name": "",
				"type": "uint256"
			}
		],
		"name": "recipies",
		"outputs": [
			{
				"internalType": "uint16",
				"name": "timeToMake",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
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
				"internalType": "uint256",
				"name": "_armySlot",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_soliderType",
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