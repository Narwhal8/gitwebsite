base_abi = [
	{
	  "type": "constructor",
	  "inputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "adminMint",
	  "inputs": [
		{
		  "name": "_id",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "balanceOf",
	  "inputs": [
		{
		  "name": "owner",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "id",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "result",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "balanceOfBatch",
	  "inputs": [
		{
		  "name": "owners",
		  "type": "address[]",
		  "internalType": "address[]"
		},
		{
		  "name": "ids",
		  "type": "uint256[]",
		  "internalType": "uint256[]"
		}
	  ],
	  "outputs": [
		{
		  "name": "balances",
		  "type": "uint256[]",
		  "internalType": "uint256[]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "bridgeToOrFrom20",
	  "inputs": [
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "bridgefrom20",
	  "inputs": [
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "coins",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract coppercoins"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "externalburn",
	  "inputs": [
		{
		  "name": "_user",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_id",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "externalmint",
	  "inputs": [
		{
		  "name": "_user",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_id",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "isApprovedForAll",
	  "inputs": [
		{
		  "name": "owner",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "operator",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "result",
		  "type": "bool",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "mintPermitted",
	  "inputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "bool",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "renounceOwnership",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "safeBatchTransferFrom",
	  "inputs": [
		{
		  "name": "from",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "to",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "ids",
		  "type": "uint256[]",
		  "internalType": "uint256[]"
		},
		{
		  "name": "amounts",
		  "type": "uint256[]",
		  "internalType": "uint256[]"
		},
		{
		  "name": "data",
		  "type": "bytes",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "safeTransferFrom",
	  "inputs": [
		{
		  "name": "from",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "to",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "id",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "amount",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "data",
		  "type": "bytes",
		  "internalType": "bytes"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setApprovalForAll",
	  "inputs": [
		{
		  "name": "operator",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "isApproved",
		  "type": "bool",
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setMintPerms",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_perms",
		  "type": "bool",
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "supportsInterface",
	  "inputs": [
		{
		  "name": "interfaceId",
		  "type": "bytes4",
		  "internalType": "bytes4"
		}
	  ],
	  "outputs": [
		{
		  "name": "result",
		  "type": "bool",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "transferOwnership",
	  "inputs": [
		{
		  "name": "newOwner",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "uri",
	  "inputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "string",
		  "internalType": "string"
		}
	  ],
	  "stateMutability": "pure"
	},
	{
	  "type": "event",
	  "name": "ApprovalForAll",
	  "inputs": [
		{
		  "name": "owner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "operator",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "isApproved",
		  "type": "bool",
		  "indexed": false,
		  "internalType": "bool"
		}
	  ],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "OwnershipTransferred",
	  "inputs": [
		{
		  "name": "previousOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "newOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "TransferBatch",
	  "inputs": [
		{
		  "name": "operator",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "from",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "to",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "ids",
		  "type": "uint256[]",
		  "indexed": false,
		  "internalType": "uint256[]"
		},
		{
		  "name": "amounts",
		  "type": "uint256[]",
		  "indexed": false,
		  "internalType": "uint256[]"
		}
	  ],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "TransferSingle",
	  "inputs": [
		{
		  "name": "operator",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "from",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "to",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "id",
		  "type": "uint256",
		  "indexed": false,
		  "internalType": "uint256"
		},
		{
		  "name": "amount",
		  "type": "uint256",
		  "indexed": false,
		  "internalType": "uint256"
		}
	  ],
	  "anonymous": false
	},
	{
	  "type": "event",
	  "name": "URI",
	  "inputs": [
		{
		  "name": "value",
		  "type": "string",
		  "indexed": false,
		  "internalType": "string"
		},
		{
		  "name": "id",
		  "type": "uint256",
		  "indexed": true,
		  "internalType": "uint256"
		}
	  ],
	  "anonymous": false
	},
	{
	  "type": "error",
	  "name": "AccountBalanceOverflow",
	  "inputs": []
	},
	{
	  "type": "error",
	  "name": "ArrayLengthsMismatch",
	  "inputs": []
	},
	{
	  "type": "error",
	  "name": "InsufficientBalance",
	  "inputs": []
	},
	{
	  "type": "error",
	  "name": "NotOwnerNorApproved",
	  "inputs": []
	},
	{
	  "type": "error",
	  "name": "TransferToNonERC1155ReceiverImplementer",
	  "inputs": []
	},
	{
	  "type": "error",
	  "name": "TransferToZeroAddress",
	  "inputs": []
	}
]
city_abi = [
	{
	  "type": "constructor",
	  "inputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "Required_Permit",
	  "inputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "TIME_MULTIPLIER",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "_landChecker",
	  "inputs": [
		{
		  "name": "_landID",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "_seasonalTemp",
	  "inputs": [
		{
		  "name": "_temp",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "addBoats",
	  "inputs": [
		{
		  "name": "_boatDesired",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addBuildingData",
	  "inputs": [
		{
		  "name": "_buildingCount",
		  "type": "tuple[9]",
		  "internalType": "struct City.BuildingInfo[9]",
		  "components": [
			{
			  "name": "baseBuilding",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "buildingVariant",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "industrySize",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "buildingBeauty",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "buildingInsulation",
			  "type": "int8",
			  "internalType": "int8"
			},
			{
			  "name": "buildingErgonommics",
			  "type": "int8",
			  "internalType": "int8"
			},
			{
			  "name": "buildingInfra",
			  "type": "int8",
			  "internalType": "int8"
			},
			{
			  "name": "employeeType",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "employees",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "reasourceType",
			  "type": "uint16[5]",
			  "internalType": "uint16[5]"
			},
			{
			  "name": "reasourceAmount",
			  "type": "uint32[7]",
			  "internalType": "uint32[7]"
			},
			{
			  "name": "popRequirements",
			  "type": "uint32[3]",
			  "internalType": "uint32[3]"
			}
		  ]
		},
		{
		  "name": "_data",
		  "type": "uint256[9]",
		  "internalType": "uint256[9]"
		},
		{
		  "name": "_building",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addFood",
	  "inputs": [
		{
		  "name": "_food",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint64",
		  "internalType": "uint64"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addFoodData",
	  "inputs": [
		{
		  "name": "_foodInfo",
		  "type": "tuple[32]",
		  "internalType": "struct City.FoodInfo[32]",
		  "components": [
			{
			  "name": "value",
			  "type": "uint32",
			  "internalType": "uint32"
			},
			{
			  "name": "taste",
			  "type": "uint8[2]",
			  "internalType": "uint8[2]"
			},
			{
			  "name": "nutrition",
			  "type": "uint8[6]",
			  "internalType": "uint8[6]"
			}
		  ]
		},
		{
		  "name": "_foodId",
		  "type": "uint256[32]",
		  "internalType": "uint256[32]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addHuntingData",
	  "inputs": [
		{
		  "name": "_data",
		  "type": "tuple[8][8]",
		  "internalType": "struct City.HuntingData[8][8]",
		  "components": [
			{
			  "name": "baseNumber",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "odds",
			  "type": "uint32",
			  "internalType": "uint32"
			},
			{
			  "name": "animalID",
			  "type": "uint16",
			  "internalType": "uint16"
			}
		  ]
		},
		{
		  "name": "_id",
		  "type": "uint256[8]",
		  "internalType": "uint256[8]"
		},
		{
		  "name": "_huntType",
		  "type": "uint256[8]",
		  "internalType": "uint256[8]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addMultiCraftingData",
	  "inputs": [
		{
		  "name": "_recipies",
		  "type": "tuple[64]",
		  "internalType": "struct City.CookingRecipes[64]",
		  "components": [
			{
			  "name": "amount",
			  "type": "uint32[8]",
			  "internalType": "uint32[8]"
			},
			{
			  "name": "ingrediant",
			  "type": "int16[8]",
			  "internalType": "int16[8]"
			},
			{
			  "name": "outputAmount",
			  "type": "uint32[6]",
			  "internalType": "uint32[6]"
			},
			{
			  "name": "output",
			  "type": "uint16[6]",
			  "internalType": "uint16[6]"
			},
			{
			  "name": "capacityUsed",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "timeToMake",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "allowableBuildings",
			  "type": "uint8[8]",
			  "internalType": "uint8[8]"
			},
			{
			  "name": "allowableBuildingTypes",
			  "type": "bool[9]",
			  "internalType": "bool[9]"
			}
		  ]
		},
		{
		  "name": "_id",
		  "type": "uint256[64]",
		  "internalType": "uint256[64]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addMultiCropData",
	  "inputs": [
		{
		  "name": "_crop",
		  "type": "tuple[8]",
		  "internalType": "struct City.Cropdata[8]",
		  "components": [
			{
			  "name": "yield",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "output",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "secondaryYield",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "secondaryOutput",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "water",
			  "type": "uint8[2]",
			  "internalType": "uint8[2]"
			},
			{
			  "name": "temperature",
			  "type": "uint8[3]",
			  "internalType": "uint8[3]"
			},
			{
			  "name": "minsoil",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "maxheight",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "growthTime",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "secondaryGrowthTime",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "isAnimal",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ]
		},
		{
		  "name": "_id",
		  "type": "uint256[8]",
		  "internalType": "uint256[8]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addMultiMixItemData",
	  "inputs": [
		{
		  "name": "_id",
		  "type": "int256",
		  "internalType": "int256"
		},
		{
		  "name": "_data",
		  "type": "uint16[64]",
		  "internalType": "uint16[64]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addPersonalItems",
	  "inputs": [
		{
		  "name": "_item",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "int64",
		  "internalType": "int64"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "adjustTime",
	  "inputs": [
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "allocateLand",
	  "inputs": [
		{
		  "name": "_landAdded",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_landAmount",
		  "type": "uint24",
		  "internalType": "uint24"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "base1155",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract permissionedIERC1155"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "craftProgress",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_building",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_buildingVariant",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple[8]",
		  "internalType": "struct City.WorkInProgress[8]",
		  "components": [
			{
			  "name": "timeWhenCompleted",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "amountAtWork",
			  "type": "uint24",
			  "internalType": "uint24"
			},
			{
			  "name": "buildingsUsed",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "recipe",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "isWorking",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "developCity",
	  "inputs": [
		{
		  "name": "_newBuilding",
		  "type": "uint8[2]",
		  "internalType": "uint8[2]"
		},
		{
		  "name": "_amount",
		  "type": "uint64",
		  "internalType": "uint64"
		},
		{
		  "name": "_landType",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "editPerms",
	  "inputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "bool",
		  "internalType": "bool"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "farmProgress",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.Farm",
		  "components": [
			{
			  "name": "time",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "land",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "landcount",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "cropfarm",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "landYieldMult",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "worktime",
			  "type": "uint32",
			  "internalType": "uint32"
			},
			{
			  "name": "popsUsed",
			  "type": "uint8",
			  "internalType": "uint8"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getAllowableLand",
	  "inputs": [
		{
		  "name": "_kingdom",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256[8]",
		  "internalType": "uint256[8]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getAvailableBuildingCount",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256[32][9]",
		  "internalType": "uint256[32][9]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getAvailableBuildings",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_buildingID",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_buildingSubtype",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getBuildingCount",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256[32][9]",
		  "internalType": "uint256[32][9]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getBuildingInfo",
	  "inputs": [
		{
		  "name": "_building",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_builingID",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.BuildingInfo",
		  "components": [
			{
			  "name": "baseBuilding",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "buildingVariant",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "industrySize",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "buildingBeauty",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "buildingInsulation",
			  "type": "int8",
			  "internalType": "int8"
			},
			{
			  "name": "buildingErgonommics",
			  "type": "int8",
			  "internalType": "int8"
			},
			{
			  "name": "buildingInfra",
			  "type": "int8",
			  "internalType": "int8"
			},
			{
			  "name": "employeeType",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "employees",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "reasourceType",
			  "type": "uint16[5]",
			  "internalType": "uint16[5]"
			},
			{
			  "name": "reasourceAmount",
			  "type": "uint32[7]",
			  "internalType": "uint32[7]"
			},
			{
			  "name": "popRequirements",
			  "type": "uint32[3]",
			  "internalType": "uint32[3]"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getCropData",
	  "inputs": [
		{
		  "name": "_crop",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.Cropdata",
		  "components": [
			{
			  "name": "yield",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "output",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "secondaryYield",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "secondaryOutput",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "water",
			  "type": "uint8[2]",
			  "internalType": "uint8[2]"
			},
			{
			  "name": "temperature",
			  "type": "uint8[3]",
			  "internalType": "uint8[3]"
			},
			{
			  "name": "minsoil",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "maxheight",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "growthTime",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "secondaryGrowthTime",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "isAnimal",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getExplorationTracker",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getFarmLandData",
	  "inputs": [
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.FarmLandData",
		  "components": [
			{
			  "name": "temperature",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "waterQuantity",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "altitude",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "soilQuality",
			  "type": "uint16",
			  "internalType": "uint16"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getGeneralStockpile",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.FoodStockpiles",
		  "components": [
			{
			  "name": "foodItemCount",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "foodItemValue",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "drinkItemCount",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "drinkItemValue",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getHuntingData",
	  "inputs": [
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple[8][3]",
		  "internalType": "struct City.HuntingData[8][3]",
		  "components": [
			{
			  "name": "baseNumber",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "odds",
			  "type": "uint32",
			  "internalType": "uint32"
			},
			{
			  "name": "animalID",
			  "type": "uint16",
			  "internalType": "uint16"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getHuntingTracker",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getItemLevel",
	  "inputs": [
		{
		  "name": "_item",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getItemType",
	  "inputs": [
		{
		  "name": "_item",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getKingdomInfo",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.Playercity",
		  "components": [
			{
			  "name": "population",
			  "type": "uint64[3][12]",
			  "internalType": "uint64[3][12]"
			},
			{
			  "name": "nonWorkingPopulation",
			  "type": "uint64[3][12]",
			  "internalType": "uint64[3][12]"
			},
			{
			  "name": "totalPopulation",
			  "type": "uint64[3]",
			  "internalType": "uint64[3]"
			},
			{
			  "name": "industrySize",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "infraCount",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "totalBeauty",
			  "type": "int64",
			  "internalType": "int64"
			},
			{
			  "name": "isWorking",
			  "type": "bool[9]",
			  "internalType": "bool[9]"
			},
			{
			  "name": "kingdomType",
			  "type": "uint8",
			  "internalType": "uint8"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getKingdomTemp",
	  "inputs": [
		{
		  "name": "_kingdom",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getLand",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256[8]",
		  "internalType": "uint256[8]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getLandForHarvest",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256[8]",
		  "internalType": "uint256[8]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getMixedIngrediants",
	  "inputs": [
		{
		  "name": "_ingrediant",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint16[64]",
		  "internalType": "uint16[64]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getNutrition",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint16[6]",
		  "internalType": "uint16[6]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getPlayerCityItemValue",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint64",
		  "internalType": "uint64"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getPlayerCityItems",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.combinedCityItems",
		  "components": [
			{
			  "name": "itemInventory",
			  "type": "tuple[13]",
			  "internalType": "struct City.cityItem[13]",
			  "components": [
				{
				  "name": "individualItemInventory",
				  "type": "uint64[15]",
				  "internalType": "uint64[15]"
				},
				{
				  "name": "individualItemAmount",
				  "type": "uint64",
				  "internalType": "uint64"
				}
			  ]
			},
			{
			  "name": "itemValue",
			  "type": "uint64",
			  "internalType": "uint64"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getPlayerDockSpace",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getRecipeData",
	  "inputs": [
		{
		  "name": "_recipe",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.CookingRecipes",
		  "components": [
			{
			  "name": "amount",
			  "type": "uint32[8]",
			  "internalType": "uint32[8]"
			},
			{
			  "name": "ingrediant",
			  "type": "int16[8]",
			  "internalType": "int16[8]"
			},
			{
			  "name": "outputAmount",
			  "type": "uint32[6]",
			  "internalType": "uint32[6]"
			},
			{
			  "name": "output",
			  "type": "uint16[6]",
			  "internalType": "uint16[6]"
			},
			{
			  "name": "capacityUsed",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "timeToMake",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "allowableBuildings",
			  "type": "uint8[8]",
			  "internalType": "uint8[8]"
			},
			{
			  "name": "allowableBuildingTypes",
			  "type": "bool[9]",
			  "internalType": "bool[9]"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getShipCount",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_ship",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getShipInfo",
	  "inputs": [
		{
		  "name": "_ship",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.ShipInfo",
		  "components": [
			{
			  "name": "crewNeeded",
			  "type": "uint16[3]",
			  "internalType": "uint16[3]"
			},
			{
			  "name": "fishingAbility",
			  "type": "uint24",
			  "internalType": "uint24"
			},
			{
			  "name": "dockSpace",
			  "type": "uint24",
			  "internalType": "uint24"
			},
			{
			  "name": "boatID",
			  "type": "uint16",
			  "internalType": "uint16"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getStockedGoods",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.ConsumerStockpiles",
		  "components": [
			{
			  "name": "lastTithing",
			  "type": "uint40[3]",
			  "internalType": "uint40[3]"
			},
			{
			  "name": "stockpiles",
			  "type": "uint8[3]",
			  "internalType": "uint8[3]"
			},
			{
			  "name": "stockpileLevels",
			  "type": "uint8[3]",
			  "internalType": "uint8[3]"
			},
			{
			  "name": "medicalEffectiveness",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "lastMedicalTreatment",
			  "type": "uint40",
			  "internalType": "uint40"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getWildLandData",
	  "inputs": [
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct City.WildLandData",
		  "components": [
			{
			  "name": "standardAmount",
			  "type": "uint16[5]",
			  "internalType": "uint16[5]"
			},
			{
			  "name": "bonusAmount",
			  "type": "uint16[11]",
			  "internalType": "uint16[11]"
			},
			{
			  "name": "standardType",
			  "type": "uint16[5]",
			  "internalType": "uint16[5]"
			},
			{
			  "name": "bonusType",
			  "type": "uint16[11]",
			  "internalType": "uint16[11]"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "market_2",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract MarketItemValues"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "payTithe",
	  "inputs": [
		{
		  "name": "_tithe",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint8",
		  "internalType": "uint8"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "permit",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_isAllowed",
		  "type": "bool",
		  "internalType": "bool"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "removeLand",
	  "inputs": [
		{
		  "name": "_landRemoved",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_landAmount",
		  "type": "uint24",
		  "internalType": "uint24"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "renounceOwnership",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "returnArmyPops",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint64[3][2]",
		  "internalType": "uint64[3][2]"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "returnSeason",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "returnYear",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "seasonLength",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "setAvailableBuildings",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_buildingID",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_buildingSubtype",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_data",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setBaseCA",
	  "inputs": [
		{
		  "name": "_address",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setCraftingProgress",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_work",
		  "type": "tuple",
		  "internalType": "struct City.WorkInProgress",
		  "components": [
			{
			  "name": "timeWhenCompleted",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "amountAtWork",
			  "type": "uint24",
			  "internalType": "uint24"
			},
			{
			  "name": "buildingsUsed",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "recipe",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "isWorking",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ]
		},
		{
		  "name": "_buildingType",
		  "type": "uint256[2]",
		  "internalType": "uint256[2]"
		},
		{
		  "name": "_workID",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setExplorationTracker",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setFoodStorage",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_food",
		  "type": "tuple",
		  "internalType": "struct City.FoodStockpiles",
		  "components": [
			{
			  "name": "foodItemCount",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "foodItemValue",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "drinkItemCount",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "drinkItemValue",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ]
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setHuntingTracker",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_data",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setItemLevel",
	  "inputs": [
		{
		  "name": "_item",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_itemLevel",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setItemType",
	  "inputs": [
		{
		  "name": "_itemID",
		  "type": "uint256[64]",
		  "internalType": "uint256[64]"
		},
		{
		  "name": "_itemType",
		  "type": "uint256[64]",
		  "internalType": "uint256[64]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setKingdomInfo",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_data",
		  "type": "tuple",
		  "internalType": "struct City.Playercity",
		  "components": [
			{
			  "name": "population",
			  "type": "uint64[3][12]",
			  "internalType": "uint64[3][12]"
			},
			{
			  "name": "nonWorkingPopulation",
			  "type": "uint64[3][12]",
			  "internalType": "uint64[3][12]"
			},
			{
			  "name": "totalPopulation",
			  "type": "uint64[3]",
			  "internalType": "uint64[3]"
			},
			{
			  "name": "industrySize",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "infraCount",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "totalBeauty",
			  "type": "int64",
			  "internalType": "int64"
			},
			{
			  "name": "isWorking",
			  "type": "bool[9]",
			  "internalType": "bool[9]"
			},
			{
			  "name": "kingdomType",
			  "type": "uint8",
			  "internalType": "uint8"
			}
		  ]
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setKingdomTitheCost",
	  "inputs": [
		{
		  "name": "_tithes",
		  "type": "uint256[6]",
		  "internalType": "uint256[6]"
		},
		{
		  "name": "_id",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setKingdomType",
	  "inputs": [
		{
		  "name": "_kingdomType",
		  "type": "uint8",
		  "internalType": "uint8"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setKingdomTypeTitheCost",
	  "inputs": [
		{
		  "name": "_tithes",
		  "type": "uint256[3]",
		  "internalType": "uint256[3]"
		},
		{
		  "name": "_kingdom",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setLandData",
	  "inputs": [
		{
		  "name": "_farmland",
		  "type": "tuple",
		  "internalType": "struct City.FarmLandData",
		  "components": [
			{
			  "name": "temperature",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "waterQuantity",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "altitude",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "soilQuality",
			  "type": "uint16",
			  "internalType": "uint16"
			}
		  ]
		},
		{
		  "name": "_wildland",
		  "type": "tuple",
		  "internalType": "struct City.WildLandData",
		  "components": [
			{
			  "name": "standardAmount",
			  "type": "uint16[5]",
			  "internalType": "uint16[5]"
			},
			{
			  "name": "bonusAmount",
			  "type": "uint16[11]",
			  "internalType": "uint16[11]"
			},
			{
			  "name": "standardType",
			  "type": "uint16[5]",
			  "internalType": "uint16[5]"
			},
			{
			  "name": "bonusType",
			  "type": "uint16[11]",
			  "internalType": "uint16[11]"
			}
		  ]
		},
		{
		  "name": "_id",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setLandProgress",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_farmWork",
		  "type": "tuple",
		  "internalType": "struct City.Farm",
		  "components": [
			{
			  "name": "time",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "land",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "landcount",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "cropfarm",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "landYieldMult",
			  "type": "uint64",
			  "internalType": "uint64"
			},
			{
			  "name": "worktime",
			  "type": "uint32",
			  "internalType": "uint32"
			},
			{
			  "name": "popsUsed",
			  "type": "uint8",
			  "internalType": "uint8"
			}
		  ]
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setMerchantCA",
	  "inputs": [
		{
		  "name": "_address",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setNutrition",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_nutrition",
		  "type": "uint16[6]",
		  "internalType": "uint16[6]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setPersonalItemLevel",
	  "inputs": [
		{
		  "name": "_item",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_data",
		  "type": "uint8[2]",
		  "internalType": "uint8[2]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setPlayerCityItems",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_data",
		  "type": "tuple",
		  "internalType": "struct City.combinedCityItems",
		  "components": [
			{
			  "name": "itemInventory",
			  "type": "tuple[13]",
			  "internalType": "struct City.cityItem[13]",
			  "components": [
				{
				  "name": "individualItemInventory",
				  "type": "uint64[15]",
				  "internalType": "uint64[15]"
				},
				{
				  "name": "individualItemAmount",
				  "type": "uint64",
				  "internalType": "uint64"
				}
			  ]
			},
			{
			  "name": "itemValue",
			  "type": "uint64",
			  "internalType": "uint64"
			}
		  ]
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setShipCount",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_ship",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_shipAmount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "trainPop",
	  "inputs": [
		{
		  "name": "_initalPop",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_desiredPop",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_popClass",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint64",
		  "internalType": "uint64"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "transferOwnership",
	  "inputs": [
		{
		  "name": "newOwner",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "treatIllness",
	  "inputs": [
		{
		  "name": "_meds",
		  "type": "uint256[7]",
		  "internalType": "uint256[7]"
		},
		{
		  "name": "_panacea",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "event",
	  "name": "OwnershipTransferred",
	  "inputs": [
		{
		  "name": "previousOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "newOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "anonymous": false
	}
]
war_abi = [
	{
	  "type": "constructor",
	  "inputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addEquipmentDataLoop",
	  "inputs": [
		{
		  "name": "_equipment",
		  "type": "tuple[32]",
		  "internalType": "struct NewCombat.Equipment[32]",
		  "components": [
			{
			  "name": "equipmentType",
			  "type": "uint16[4]",
			  "internalType": "uint16[4]"
			},
			{
			  "name": "equipmentRequirements",
			  "type": "uint16[5]",
			  "internalType": "uint16[5]"
			},
			{
			  "name": "addAttackInstead",
			  "type": "bool",
			  "internalType": "bool"
			},
			{
			  "name": "attackMultiplier",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "defenceMultiplier",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "speedChange",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "armorChange",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "piercing",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "range",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "mass",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "safeTemp",
			  "type": "int8[2]",
			  "internalType": "int8[2]"
			},
			{
			  "name": "additionalDeployCost",
			  "type": "uint16[2]",
			  "internalType": "uint16[2]"
			},
			{
			  "name": "xpMult",
			  "type": "uint8",
			  "internalType": "uint8"
			}
		  ]
		},
		{
		  "name": "_id",
		  "type": "uint256[32]",
		  "internalType": "uint256[32]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addRation",
	  "inputs": [
		{
		  "name": "_ration",
		  "type": "tuple",
		  "internalType": "struct NewCombat.RationType",
		  "components": [
			{
			  "name": "attackMultiplier",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "defenceMultiplier",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "speedMultiplier",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "moraleMultiplier",
			  "type": "int16",
			  "internalType": "int16"
			}
		  ]
		},
		{
		  "name": "_rationNumber",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "addSoldierDataLoop",
	  "inputs": [
		{
		  "name": "_troop",
		  "type": "tuple[32]",
		  "internalType": "struct NewCombat.soldier[32]",
		  "components": [
			{
			  "name": "attack",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "defence",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "armor",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "speed",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "range",
			  "type": "uint8",
			  "internalType": "uint8"
			},
			{
			  "name": "piercing",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "morale",
			  "type": "int16",
			  "internalType": "int16"
			},
			{
			  "name": "mass",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "hasShield",
			  "type": "bool",
			  "internalType": "bool"
			},
			{
			  "name": "additionalDeployCost",
			  "type": "uint16[6]",
			  "internalType": "uint16[6]"
			},
			{
			  "name": "safeTemp",
			  "type": "int8[2]",
			  "internalType": "int8[2]"
			}
		  ]
		},
		{
		  "name": "_id",
		  "type": "uint256[32]",
		  "internalType": "uint256[32]"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "adminSetMercAmount",
	  "inputs": [
		{
		  "name": "_armySlot",
		  "type": "uint8",
		  "internalType": "uint8"
		},
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_id",
		  "type": "uint16",
		  "internalType": "uint16"
		},
		{
		  "name": "_amount",
		  "type": "uint32",
		  "internalType": "uint32"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "base3",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract basegame"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "beginQuest",
	  "inputs": [
		{
		  "name": "_quest",
		  "type": "uint160",
		  "internalType": "uint160"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "changeBaseCA",
	  "inputs": [
		{
		  "name": "_newCA",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "changeCityCA",
	  "inputs": [
		{
		  "name": "_newCA",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "changeQuestRewards",
	  "inputs": [
		{
		  "name": "_data",
		  "type": "uint256[12]",
		  "internalType": "uint256[12]"
		},
		{
		  "name": "_questID",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "cityContract",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract cityInterface"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "createQuest",
	  "inputs": [
		{
		  "name": "_quest",
		  "type": "uint160",
		  "internalType": "uint160"
		},
		{
		  "name": "_unitID",
		  "type": "uint256[12]",
		  "internalType": "uint256[12]"
		},
		{
		  "name": "_unitAmount",
		  "type": "uint256[12]",
		  "internalType": "uint256[12]"
		},
		{
		  "name": "_battlefield",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "currentArmy",
	  "inputs": [
		{
		  "name": "_user",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct NewCombat.CurrentArmyComposition",
		  "components": [
			{
			  "name": "soldierStats",
			  "type": "tuple[12]",
			  "internalType": "struct NewCombat.soldier[12]",
			  "components": [
				{
				  "name": "attack",
				  "type": "int16",
				  "internalType": "int16"
				},
				{
				  "name": "defence",
				  "type": "int16",
				  "internalType": "int16"
				},
				{
				  "name": "armor",
				  "type": "int16",
				  "internalType": "int16"
				},
				{
				  "name": "speed",
				  "type": "int16",
				  "internalType": "int16"
				},
				{
				  "name": "range",
				  "type": "uint8",
				  "internalType": "uint8"
				},
				{
				  "name": "piercing",
				  "type": "int16",
				  "internalType": "int16"
				},
				{
				  "name": "morale",
				  "type": "int16",
				  "internalType": "int16"
				},
				{
				  "name": "mass",
				  "type": "uint16",
				  "internalType": "uint16"
				},
				{
				  "name": "hasShield",
				  "type": "bool",
				  "internalType": "bool"
				},
				{
				  "name": "additionalDeployCost",
				  "type": "uint16[6]",
				  "internalType": "uint16[6]"
				},
				{
				  "name": "safeTemp",
				  "type": "int8[2]",
				  "internalType": "int8[2]"
				}
			  ]
			},
			{
			  "name": "soldierAmount",
			  "type": "uint32[12]",
			  "internalType": "uint32[12]"
			},
			{
			  "name": "currentEquipment",
			  "type": "uint16[5][12]",
			  "internalType": "uint16[5][12]"
			},
			{
			  "name": "soldierType",
			  "type": "uint16[12]",
			  "internalType": "uint16[12]"
			},
			{
			  "name": "popType",
			  "type": "uint8[12]",
			  "internalType": "uint8[12]"
			},
			{
			  "name": "xpMult",
			  "type": "uint8[12]",
			  "internalType": "uint8[12]"
			},
			{
			  "name": "totalPopTypes",
			  "type": "uint64[3][2]",
			  "internalType": "uint64[3][2]"
			},
			{
			  "name": "isActive",
			  "type": "bool[12]",
			  "internalType": "bool[12]"
			},
			{
			  "name": "rations",
			  "type": "uint16[3]",
			  "internalType": "uint16[3]"
			},
			{
			  "name": "hasMeds",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "newTroop",
	  "inputs": [
		{
		  "name": "_armySlot",
		  "type": "uint8",
		  "internalType": "uint8"
		},
		{
		  "name": "_isProfessional",
		  "type": "bool",
		  "internalType": "bool"
		},
		{
		  "name": "_isMerc",
		  "type": "bool",
		  "internalType": "bool"
		},
		{
		  "name": "_weapon",
		  "type": "uint16",
		  "internalType": "uint16"
		},
		{
		  "name": "_offhand",
		  "type": "uint16",
		  "internalType": "uint16"
		},
		{
		  "name": "_armor",
		  "type": "uint16",
		  "internalType": "uint16"
		},
		{
		  "name": "_other",
		  "type": "uint16",
		  "internalType": "uint16"
		},
		{
		  "name": "_accessory",
		  "type": "uint16",
		  "internalType": "uint16"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "reinforceSoldier",
	  "inputs": [
		{
		  "name": "_armySlot",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint32",
		  "internalType": "uint32"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "removeSoldier",
	  "inputs": [
		{
		  "name": "_armySlot",
		  "type": "uint8",
		  "internalType": "uint8"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "renounceOwnership",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setBattlefieldTerrain",
	  "inputs": [
		{
		  "name": "_data",
		  "type": "tuple",
		  "internalType": "struct NewCombat.Battlefield",
		  "components": [
			{
			  "name": "temperature",
			  "type": "int8",
			  "internalType": "int8"
			},
			{
			  "name": "attritionFactor",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "groundQuality",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "chargeBreak",
			  "type": "bool",
			  "internalType": "bool"
			}
		  ]
		},
		{
		  "name": "_id",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setRation",
	  "inputs": [
		{
		  "name": "_rations",
		  "type": "uint16[3]",
		  "internalType": "uint16[3]"
		},
		{
		  "name": "setMeds",
		  "type": "bool",
		  "internalType": "bool"
		},
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "swapEquipment",
	  "inputs": [
		{
		  "name": "_armySlot",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_sender",
		  "type": "address",
		  "internalType": "address"
		},
		{
		  "name": "_item",
		  "type": "uint16",
		  "internalType": "uint16"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "transferOwnership",
	  "inputs": [
		{
		  "name": "newOwner",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "upgradeSoldier",
	  "inputs": [
		{
		  "name": "_armySlot",
		  "type": "uint8",
		  "internalType": "uint8"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "war",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "xpCost",
	  "inputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "xpID",
	  "inputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "event",
	  "name": "OwnershipTransferred",
	  "inputs": [
		{
		  "name": "previousOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "newOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "anonymous": false
	}
]
tradingEvent_abi = [
	{
	  "type": "constructor",
	  "inputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "changeAddress",
	  "inputs": [
		{
		  "name": "_addy",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "changeCityAddress",
	  "inputs": [
		{
		  "name": "_addy",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "changeMarketAddress",
	  "inputs": [
		{
		  "name": "_addy",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "city2",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract CityContract"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "claimEventRewards",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "currentEvent",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "eventCounter",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "eventEndTime",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "eventMilestones",
	  "inputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint8",
		  "internalType": "uint8"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getCurrentEventData",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct TradingEvent.EventData",
		  "components": [
			{
			  "name": "rewards",
			  "type": "uint16[4]",
			  "internalType": "uint16[4]"
			},
			{
			  "name": "incrementalReward",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "eventItem",
			  "type": "uint16",
			  "internalType": "uint16"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "getPlayerData",
	  "inputs": [
		{
		  "name": "_who",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "tuple",
		  "internalType": "struct TradingEvent.PlayerData",
		  "components": [
			{
			  "name": "kingdomWealth",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "amountContributed",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "maxContribution",
			  "type": "uint256",
			  "internalType": "uint256"
			},
			{
			  "name": "lastEventContributedTo",
			  "type": "uint256",
			  "internalType": "uint256"
			}
		  ]
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "mainGame",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract IC1155Q"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "market",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract MarketItemValues2"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "payEvent",
	  "inputs": [
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "renounceOwnership",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setEventData",
	  "inputs": [
		{
		  "name": "_data",
		  "type": "tuple",
		  "internalType": "struct TradingEvent.EventData",
		  "components": [
			{
			  "name": "rewards",
			  "type": "uint16[4]",
			  "internalType": "uint16[4]"
			},
			{
			  "name": "incrementalReward",
			  "type": "uint16",
			  "internalType": "uint16"
			},
			{
			  "name": "eventItem",
			  "type": "uint16",
			  "internalType": "uint16"
			}
		  ]
		},
		{
		  "name": "_event",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "standardEventDuration",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "transferOwnership",
	  "inputs": [
		{
		  "name": "newOwner",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "validEventNumbers",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "event",
	  "name": "OwnershipTransferred",
	  "inputs": [
		{
		  "name": "previousOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "newOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "anonymous": false
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
production_abi = [
	{
	  "type": "function",
	  "name": "EXPIDITION_COST",
	  "inputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "EXPIDITION_REWARD",
	  "inputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "TIME_MULTIPLIER_2",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "_seasonalTemp_2",
	  "inputs": [
		{
		  "name": "_temp",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "int256",
		  "internalType": "int256"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "base1155_2",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract permissionedIERC1155E"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "city",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "contract CityGameStorage"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "claim",
	  "inputs": [
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "collect",
	  "inputs": [
		{
		  "name": "_buildingType",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_buildingVariant",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "cook",
	  "inputs": [
		{
		  "name": "_recipenumber",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "mixedgoods",
		  "type": "uint16[8]",
		  "internalType": "uint16[8]"
		},
		{
		  "name": "_buildingType",
		  "type": "uint256[2]",
		  "internalType": "uint256[2]"
		},
		{
		  "name": "_runs",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "fishingLand",
	  "inputs": [
		{
		  "name": "",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [
		{
		  "name": "",
		  "type": "uint8",
		  "internalType": "uint8"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "goFishing",
	  "inputs": [
		{
		  "name": "_boat",
		  "type": "uint8",
		  "internalType": "uint8"
		},
		{
		  "name": "_runs",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_amount",
		  "type": "uint256",
		  "internalType": "uint256"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "owner",
	  "inputs": [],
	  "outputs": [
		{
		  "name": "",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "stateMutability": "view"
	},
	{
	  "type": "function",
	  "name": "plant",
	  "inputs": [
		{
		  "name": "_land",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_landcount",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_cropfarm",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_fertilizer",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_runs",
		  "type": "uint256",
		  "internalType": "uint256"
		},
		{
		  "name": "_popsUsed",
		  "type": "uint8",
		  "internalType": "uint8"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "renounceOwnership",
	  "inputs": [],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setBaseCA_production",
	  "inputs": [
		{
		  "name": "_address",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "setCityCA_production",
	  "inputs": [
		{
		  "name": "_address",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "function",
	  "name": "transferOwnership",
	  "inputs": [
		{
		  "name": "newOwner",
		  "type": "address",
		  "internalType": "address"
		}
	  ],
	  "outputs": [],
	  "stateMutability": "nonpayable"
	},
	{
	  "type": "event",
	  "name": "OwnershipTransferred",
	  "inputs": [
		{
		  "name": "previousOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		},
		{
		  "name": "newOwner",
		  "type": "address",
		  "indexed": true,
		  "internalType": "address"
		}
	  ],
	  "anonymous": false
	}
]  
  