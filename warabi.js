const warabi = [
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
				"name": "_recipiant",
				"type": "address"
			}
		],
		"name": "addMercADMIN",
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
						"name": "baseArmor",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "baseSpeed",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "basePiercing",
						"type": "int16"
					},
					{
						"internalType": "uint8",
						"name": "range",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "hasShield",
						"type": "bool"
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
					},
					{
						"internalType": "int16",
						"name": "baseMorale",
						"type": "int16"
					},
					{
						"internalType": "uint16[2]",
						"name": "additionalDeployCost",
						"type": "uint16[2]"
					}
				],
				"internalType": "struct NewCombat.BaseSolider",
				"name": "_troop",
				"type": "tuple"
			},
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "addSoliderData",
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
						"name": "baseArmor",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "baseSpeed",
						"type": "int16"
					},
					{
						"internalType": "int16",
						"name": "basePiercing",
						"type": "int16"
					},
					{
						"internalType": "uint8",
						"name": "range",
						"type": "uint8"
					},
					{
						"internalType": "bool",
						"name": "hasShield",
						"type": "bool"
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
					},
					{
						"internalType": "int16",
						"name": "baseMorale",
						"type": "int16"
					},
					{
						"internalType": "uint16[2]",
						"name": "additionalDeployCost",
						"type": "uint16[2]"
					}
				],
				"internalType": "struct NewCombat.BaseSolider[32]",
				"name": "_troop",
				"type": "tuple[32]"
			},
			{
				"internalType": "uint256[32]",
				"name": "_id",
				"type": "uint256[32]"
			}
		],
		"name": "addSoliderDataLoop",
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
			},
			{
				"internalType": "uint16",
				"name": "_soliderType",
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
		"name": "addTroopType",
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
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "beginQuest",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"internalType": "uint256[12]",
				"name": "",
				"type": "uint256[12]"
			}
		],
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
								"internalType": "bool",
								"name": "hasShield",
								"type": "bool"
							},
							{
								"internalType": "uint16[2]",
								"name": "additionalDeployCost",
								"type": "uint16[2]"
							}
						],
						"internalType": "struct NewCombat.Solider[12]",
						"name": "solidertype",
						"type": "tuple[12]"
					},
					{
						"internalType": "bool[12]",
						"name": "isActive",
						"type": "bool[12]"
					},
					{
						"internalType": "uint32[12]",
						"name": "solideramount",
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
				"name": "_soliderType",
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
		"name": "removeSolider",
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
								"internalType": "bool",
								"name": "hasShield",
								"type": "bool"
							},
							{
								"internalType": "uint16[2]",
								"name": "additionalDeployCost",
								"type": "uint16[2]"
							}
						],
						"internalType": "struct NewCombat.Solider[12]",
						"name": "solidertype",
						"type": "tuple[12]"
					},
					{
						"internalType": "bool[12]",
						"name": "isActive",
						"type": "bool[12]"
					},
					{
						"internalType": "uint32[12]",
						"name": "solideramount",
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
					}
				],
				"internalType": "struct NewCombat.CurrentArmyComposition",
				"name": "_cAC",
				"type": "tuple"
			}
		],
		"name": "set",
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