var dfuWorldDataEditor = {
	error: false, //Error indicator, is set during JSON generation

	dungeonGridBounds: null, //Stores the dungeon grid bounds for the current location
	exteriorGridBounds: null, //Stores the exterior grid bounds for the current location

	mapMaxX: 999, //Max map coordinate X
	mapMaxY: 499, //Max map coordinate Y
	latLongMultiplier: 128, //Multiplier value for lat / long calculation
	worldCoordinateMultiplier: 32768, //Multiplier value for world coordinate calculation

	minLocationId: 1, //TODO: true min location id to be determined
	maxLocationId: 65535, //TODO: true max location id to be determined (if applicable)
	locationIdRanges: [
		[1000,10000],
		[29500,49999],
		[50101,50999],
		[51001,65535]
	],
	locationIdUsed: [
		[29600,29699] //Reserved by Hazelnut
	],

	ignoreExteriorMax: false, //Disable exterior size restraints
	minExteriorWidth: 1, //Exterior width needs to be at least 1
	maxExteriorWidth: 8, //Exterior width can be max 8 blocks wide
	minExteriorHeight: 1, //Exterior height needs to be at least 1
	maxExteriorHeight: 8, //Exterior height can be max 8 blocks high

	dungeonMarkers: [
		'Unknown 1',
		'Unknown 2',
		'Daedra',
		'Summon',
		'Rest',
		'Court',
		'Pit',
		'Effect',
		'Enter',
		'Path',
		'Start',
		'Quest marker',
		'Create',
		'Prison',
		'Prison exit',
		'Random monster',
		'Monster',
		'Teleport',
		'Quest item marker',
		'Random treasure',
		'Random flat',
		'Ladder bottom',
		'Ladder top'
	],
	maxDungeonGridSizeZ: 6, //TODO: Determine if dungeons have an actual size limit
	maxDungeonGridSizeX: 6, //TODO: Determine if dungeons have an actual size limit

	//Daggerfall location types
	locationTypes: [
		{label: 'Large settlement', value: 'TownCity'},
		{label: 'Medium settlement', value: 'TownHamlet'},
		{label: 'Small settlement', value: 'TownVillage'},
		{label: 'Farmhouse', value: 'HomeFarms'},
		{label: 'Tavern', value: 'Tavern'},
		{label: 'Wealthy home', value: 'HomeWealthy'},
		{label: 'Poor home', value: 'HomePoor'},
		{label: 'Temple', value: 'ReligionTemple'},
		{label: 'Cult', value: 'ReligionCult'},
		{label: 'Coven', value: 'Coven'},
		{label: 'Graveyard', value: 'Graveyard'},
		{label: 'Large Dungeon', value: 'DungeonLabyrinth'},
		{label: 'Medium dungeon', value: 'DungeonKeep'},
		{label: 'Small dungeon', value: 'DungeonRuin'},
		{label: 'Player ship', value: 'HomeYourShips'}
	],
	//Exterior location blocks (non-dungeon)
	exteriorLocationBlocks: [
		{label: 'AANEW (four houses on block corners)', name: 'AAANEW', value: 'AAANEW', count: 1},
		{label: 'Alchemy', name: 'ALCHAL', start: 0, end: 3, count: 4},
		{label: 'Alchemy 2', name: 'ALCHAM', start: 0, end: 2, count: 3},
		{label: 'Alchemy 3', name: 'ALCHAS', start: 0, end: 3, count: 4},
		{label: 'Alchemy 4', name: 'ALCHBL', start: 0, end: 1, count: 2},
		{label: 'Alchemy 5', name: 'ALCHBM', start: 0, end: 1, count: 2},
		{label: 'Alchemy 6', name: 'ALCHBS', start: 0, end: 1, count: 2},
		{label: 'Alchemy 7', name: 'ALCHGL', start: 0, end: 1, count: 2},
		{label: 'Alchemy 8', name: 'ALCHGM', start: 0, end: 1, count: 2},
		{label: 'Alchemy 9', name: 'ALCHGS', start: 0, end: 1, count: 2},
		{label: 'Armoury', name: 'ARMRAL', start: 0, end: 2, count: 3},
		{label: 'Armoury 2', name: 'ARMRAM', start: 0, end: 3, count: 4},
		{label: 'Armoury 3', name: 'ARMRAS', start: 0, end: 2, count: 3},
		{label: 'Armoury 4', name: 'ARMRBL', start: 0, end: 1, count: 2},
		{label: 'Armoury 5', name: 'ARMRBM', start: 0, end: 1, count: 2},
		{label: 'Armoury 6', name: 'ARMRBS', start: 0, end: 1, count: 2},
		{label: 'Armoury 7', name: 'ARMRGL', start: 0, end: 1, count: 2},
		{label: 'Armoury 8', name: 'ARMRGM', start: 0, end: 1, count: 2},
		{label: 'Armoury 9', name: 'ARMRGS', start: 0, end: 1, count: 2},
		{label: 'AVI (crypt)', name: 'AVI', value: 'AVI', count: 1},
		{label: 'BACKUP (Sentinel Palace)', name: 'BACKUP', value: 'BACKUP', count: 1},
		{label: 'Bank', name: 'BANKAL', start: 0, end: 3, count: 4},
		{label: 'Bank 2', name: 'BANKAM', start: 0, end: 2, count: 3},
		{label: 'Bank 3', name: 'BANKAS', start: 0, end: 2, count: 3},
		{label: 'Bank 4', name: 'BANKBL', start: 0, end: 1, count: 2},
		{label: 'Bank 5', name: 'BANKBM', start: 0, end: 1, count: 2},
		{label: 'Bank 7', name: 'BANKBS', start: 0, end: 1, count: 2},
		{label: 'BLOCK5 (Tavern with some houses)', name: 'BLOCK5', value: 'BLOCK5', count: 1},
		{label: 'BLOCKHAL (Dirt terrain with road texture at NWSE)', name: 'BLOCK5', value: 'BLOCK5', count: 1},
		{label: 'Book', name: 'BOOKAL', start: 0, end: 2, count: 3},
		{label: 'Book 2', name: 'BOOKAM', start: 0, end: 3, count: 4},
		{label: 'Book 3', name: 'BOOKAS', start: 0, end: 2, count: 3},
		{label: 'Book 4', name: 'BOOKBL', start: 0, end: 1, count: 2},
		{label: 'Book 5', name: 'BOOKBM', start: 0, end: 1, count: 2},
		{label: 'Book 6', name: 'BOOKBS', start: 0, end: 1, count: 2},
		{label: 'BRUCE (T-section (E-NS) with some houses)', name: 'BRUCE', value: 'BRUCE', count: 1},
		{label: 'Clothing', name: 'CLOTAL', start: 0, end: 2, count: 3},
		{label: 'Clothing 2', name: 'CLOTAM', start: 0, end: 3, count: 4},
		{label: 'Clothing 3', name: 'CLOTAS', start: 0, end: 2, count: 3},
		{label: 'Clothing 4', name: 'CLOTBL', start: 0, end: 1, count: 2},
		{label: 'Clothing 5', name: 'CLOTBM', start: 0, end: 1, count: 2},
		{label: 'Clothing 6', name: 'CLOTBS', start: 0, end: 1, count: 2},
		{label: 'Clothing 7', name: 'CLOTGL', start: 0, end: 1, count: 2},
		{label: 'Clothing 8', name: 'CLOTGM', start: 0, end: 1, count: 2},
		{label: 'Clothing 9', name: 'CLOTGS', start: 0, end: 1, count: 2},
		{label: 'Custom AA', name: 'CUSTAA', start: 0, end: 10, count: 11},
		{label: 'CUSTAA19', name: 'CUSTAA19', value: 'CUSTAA19', count: 1},
		{label: 'Custom AA', name: 'CUSTAA', start: 29, end: 30, count: 2},
		{label: 'Custom AA', name: 'CUSTAA', start: 34, end: 36, count: 3},
		{label: 'Custom AA', name: 'CUSTAA', start: 42, end: 46, count: 5},
		{label: 'Custom AA', name: 'CUSTAA', start: 54, end: 56, count: 3},
		{label: 'Custom GA', name: 'CUSTGA', start: 0, end: 35, count: 36},
		{label: 'Dark Brotherhood', name: 'DARKAA', start: 0, end: 1, count: 2},
		{label: 'DFBLCK', name: 'DFBLCK', start: 6, end: 7, count: 2},
		{label: 'Direnni tower', name: 'DIR', value: 'DIR', count: 1},
		{label: 'Farm', name: 'FARMAA', start: 0, end: 9, count: 10},
		{label: 'Fighter\'s Guild', name: 'FIGHAA', start: 0, end: 2, count: 3},
		{label: 'Fighter\'s Guild 2', name: 'FIGHBL00', value: 'FIGHBL00', count: 1},
		{label: 'Fighter\'s Guild 3', name: 'FIGHBM00', value: 'FIGHBM00', count: 1},
		{label: 'Fighter\'s Guild 4', name: 'FIGHBS00', value: 'FIGHBS00', count: 1},
		{label: 'Fighter\'s Guild 5', name: 'FIGHGL00', value: 'FIGHGL00', count: 1},
		{label: 'Fighter\'s Guild 6', name: 'FIGHGM00', value: 'FIGHGM00', count: 1},
		{label: 'Fighter\'s Guild 7', name: 'FIGHGS00', value: 'FIGHGS00', count: 1},
		{label: 'Filler blocks', name: 'FILLAA', start: 0, end: 15, count: 16},
		{label: 'FOO', name: 'FOO', value: 'FOO', count: 1},
		{label: 'FOOBAR', name: 'FOOBAR', value: 'FOOBAR', count: 1},
		{label: 'FOOBGR', name: 'FOOBGR', value: 'FOOBGR', count: 1},
		{label: 'Furniture', name: 'FURNAL', start: 0, end: 3, count: 4},
		{label: 'Furniture 2', name: 'FURNAM', start: 0, end: 2, count: 3},
		{label: 'Furniture 3', name: 'FURNAS', start: 0, end: 2, count: 3},
		{label: 'Furniture 4', name: 'FURNBL00', value: 'FURNBL00', count: 1},
		{label: 'Furniture 5', name: 'FURNBM00', value: 'FURNBM00', count: 1},
		{label: 'Furniture 6', name: 'FURNBS00', value: 'FURNBS00', count: 1},
		{label: 'Furniture 7', name: 'FURNGL00', value: 'FURNGL00', count: 1},
		{label: 'Furniture 8', name: 'FURNGM00', value: 'FURNGM00', count: 1},
		{label: 'Furniture 9', name: 'FURNGS00', value: 'FURNGS00', count: 1},
		{label: 'Gem', name: 'GEMSAL', start: 0, end: 3, count: 4},
		{label: 'Gem 2', name: 'GEMSAM', start: 0, end: 3, count: 4},
		{label: 'Gem 3', name: 'GEMSAS', start: 0, end: 1, count: 2},
		{label: 'Gem 4', name: 'GEMSBL00', value: 'GEMSBL00', count: 1},
		{label: 'Gem 5', name: 'GEMSBM00', value: 'GEMSBM00', count: 1},
		{label: 'Gem 6', name: 'GEMSBS00', value: 'GEMSBS00', count: 1},
		{label: 'Gem 7', name: 'GEMSGL00', value: 'GEMSGL00', count: 1},
		{label: 'Gem 8', name: 'GEMSGM00', value: 'GEMSGM00', count: 1},
		{label: 'Gem 9', name: 'GEMSGS00', value: 'GEMSGS00', count: 1},
		{label: 'General', name: 'GENRAL', start: 0, end: 3, count: 4},
		{label: 'General 2', name: 'GENRAM', start: 0, end: 2, count: 3},
		{label: 'General 3', name: 'GENRAS', start: 0, end: 2, count: 3},
		{label: 'General 4', name: 'GENRBL', start: 0, end: 2, count: 3},
		{label: 'General 5', name: 'GENRBM', start: 0, end: 2, count: 3},
		{label: 'General 6', name: 'GENRBS', start: 0, end: 2, count: 3},
		{label: 'General 7', name: 'GENRGL', start: 0, end: 2, count: 3},
		{label: 'General 8', name: 'GENRGM', start: 0, end: 2, count: 3},
		{label: 'General 9', name: 'GENRGS', start: 0, end: 2, count: 3},
		{label: 'Hall', name: 'HAL', value: 'HAL', count: 1},
		{label: 'Order of the Candle', name: 'KCANAL', start: 0, end: 1, count: 2},
		{label: 'Order of the Candle', name: 'KCANBL00', value: 'KCANBL00', count: 1},
		{label: 'Order of the Candle', name: 'KCANGL00', value: 'KCANGL00', count: 1},
		{label: 'Knights of the Dragon', name: 'KDRAAL', start: 0, end: 1, count: 2},
		{label: 'Knights of the Dragon', name: 'KDRABL00', value: 'KDRABL00', count: 1},
		{label: 'Knights of the Dragon', name: 'KDRAGL00', value: 'KDRAGL00', count: 1},
		{label: 'Knights of the Flame', name: 'KFLAAL', start: 0, end: 1, count: 2},
		{label: 'Knights of the Flame', name: 'KFLABL00', value: 'KFLABL00', count: 1},
		{label: 'Knights of the Flame', name: 'KFLAGL00', value: 'KFLAGL00', count: 1},
		{label: 'Knights of the Hawk', name: 'KHAWAL', start: 0, end: 1, count: 2},
		{label: 'Knights of the Hawk', name: 'KHAWBL00', value: 'KHAWBL00', count: 1},
		{label: 'Knights of the Hawk', name: 'KHAWGL00', value: 'KHAWGL00', count: 1},
		{label: 'Host of the Horn', name: 'KHORAL', start: 0, end: 1, count: 2},
		{label: 'Host of the Horn', name: 'KHORBL00', value: 'KHORBL00', count: 1},
		{label: 'Host of the Horn', name: 'KHORGL00', value: 'KHORGL00', count: 1},
		{label: 'Knights of the Owl', name: 'KOWLAL', start: 0, end: 1, count: 2},
		{label: 'Knights of the Owl', name: 'KOWLBL00', value: 'KOWLBL00', count: 1},
		{label: 'Knights of the Owl', name: 'KOWLGL00', value: 'KOWLGL00', count: 1},
		{label: 'Order of the Raven', name: 'KRAVAL', start: 0, end: 1, count: 2},
		{label: 'Order of the Raven', name: 'KRAVBL00', value: 'KRAVBL00', count: 1},
		{label: 'Order of the Raven', name: 'KRAVGL00', value: 'KRAVGL00', count: 1},
		{label: 'Knights of the Rose', name: 'KROSAL', start: 0, end: 1, count: 2},
		{label: 'Knights of the Rose', name: 'KROSBL00', value: 'KROSBL00', count: 1},
		{label: 'Knights of the Rose', name: 'KROSGL00', value: 'KROSGL00', count: 1},
		{label: 'Order of the Scarab', name: 'KSCAAL', start: 0, end: 1, count: 2},
		{label: 'Order of the Scarab', name: 'KSCABL00', value: 'KSCABL00', count: 1},
		{label: 'Order of the Scarab', name: 'KSCAGL00', value: 'KSCAGL00', count: 1},
		{label: 'Knights of the Wheel', name: 'KWHEAL', start: 0, end: 1, count: 2},
		{label: 'Knights of the Wheel', name: 'KWHEBL00', value: 'KWHEBL00', count: 1},
		{label: 'Knights of the Wheel', name: 'KWHEGL00', value: 'KWHEGL00', count: 1},
		{label: 'Library', name: 'LIBRAL', start: 0, end: 3, count: 4},
		{label: 'Library 2', name: 'LIBRAM', start: 0, end: 2, count: 3},
		{label: 'Library 3', name: 'LIBRAS', start: 0, end: 2, count: 3},
		{label: 'Library 4', name: 'LIBRBL00', value: 'LIBRBL00', count: 1},
		{label: 'Library 5', name: 'LIBRBM00', value: 'LIBRBM00', count: 1},
		{label: 'Library 6', name: 'LIBRBS00', value: 'LIBRBS00', count: 1},
		{label: 'LLU', name: 'LLU', value: 'LLU', count: 1},
		{label: 'LROTAT', name: 'LROTAT', value: 'LROTAT', count: 1},
		{label: 'Mage guild', name: 'MAGEAA', start: 0, end: 14, count: 15},
		{label: 'Mage guild 2', name: 'MAGEBA', start: 0, end: 4, count: 5},
		{label: 'Mage guild 3', name: 'MAGEGA', start: 0, end: 4, count: 5},
		{label: 'Manor A (L)', name: 'MANRAL', start: 0, end: 3, count: 4},
		{label: 'Manor A (M)', name: 'MANRAM', start: 0, end: 3, count: 4},
		{label: 'Manor A (S)', name: 'MANRAM', start: 0, end: 2, count: 3},
		{label: 'Manor B (L)', name: 'MANRBL00', value: 'MANRBL00', count: 1},
		{label: 'Manor B (M)', name: 'MANRBM00', value: 'MANRBM00', count: 1},
		{label: 'Manor B (S)', name: 'MANRBS00', value: 'MANRBS00', count: 1},
		{label: 'Manor G (L)', name: 'MANRGL00', value: 'MANRGL00', count: 1},
		{label: 'Manor G (M)', name: 'MANRGM00', value: 'MANRGM00', count: 1},
		{label: 'Manor G (S)', name: 'MANRGS00', value: 'MANRGS00', count: 1},
		{label: 'Market', name: 'MARKAA', start: 0, end: 1, count: 2},
		{label: 'Market 2', name: 'MARKBL', start: 0, end: 1, count: 2},
		{label: 'Market 3', name: 'MARKBM', start: 0, end: 1, count: 2},
		{label: 'Market 4', name: 'MARKBS', start: 0, end: 1, count: 2},
		{label: 'Market 5', name: 'MARKGL', start: 0, end: 1, count: 2},
		{label: 'Market 6', name: 'MARKGM', start: 0, end: 1, count: 2},
		{label: 'Market 7', name: 'MARKGS', start: 0, end: 1, count: 2},
		{label: 'Palace', name: 'PALAAA', start: 0, end: 2, count: 3},
		{label: 'Palace 2', name: 'PALABA', start: 0, end: 4, count: 5},
		{label: 'Palace 3', name: 'PALAGA', start: 0, end: 4, count: 5},
		{label: 'Pawn', name: 'PAWNAL', start: 0, end: 3, count: 4},
		{label: 'Pawn 2', name: 'PAWNAM', start: 0, end: 2, count: 3},
		{label: 'Pawn 3', name: 'PAWNAS', start: 0, end: 2, count: 3},
		{label: 'Pawn 4', name: 'PAWNBL00', value: 'PAWNBL00', count: 1},
		{label: 'Pawn 5', name: 'PAWNBM00', value: 'PAWNBM00', count: 1},
		{label: 'Pawn 6', name: 'PAWNBS00', value: 'PAWNBS00', count: 1},
		{label: 'Pawn 7', name: 'PAWNGL00', value: 'PAWNGL00', count: 1},
		{label: 'Pawn 8', name: 'PAWNGM00', value: 'PAWNGM00', count: 1},
		{label: 'Pawn 9', name: 'PAWNGS00', value: 'PAWNGS00', count: 1},
		{label: 'Residential', name: 'RESIAL', start: 0, end: 10, count: 11},
		{label: 'Residential 2', name: 'RESIAM', start: 0, end: 10, count: 11},
		{label: 'Residential 3', name: 'RESIAS', start: 0, end: 9, count: 10},
		{label: 'Residential 4', name: 'RESIBL', start: 0, end: 5, count: 6},
		{label: 'Residential 5', name: 'RESIBM', start: 0, end: 4, count: 5},
		{label: 'Residential 6', name: 'RESIBS', start: 0, end: 4, count: 5},
		{label: 'Residential 7', name: 'RESIGL', start: 0, end: 5, count: 6},
		{label: 'Residential 8', name: 'RESIGM', start: 0, end: 4, count: 5},
		{label: 'Residential 9', name: 'RESIGS', start: 0, end: 4, count: 5},
		{label: 'SENT0', name: 'SENT0', value: 'SENT0', count: 1},
		{label: 'Sentinel', name: 'SENT00', start: 0, end: 35, count: 36},
		{label: 'SENT1', name: 'SENT1', value: 'SENT1', count: 1},
		{label: 'SENT2', name: 'SENT2', value: 'SENT2', count: 1},
		{label: 'SENT3', name: 'SENT3', value: 'SENT3', count: 1},
		{label: 'SENT4', name: 'SENT4', value: 'SENT4', count: 1},
		{label: 'SENT5', name: 'SENT5', value: 'SENT5', count: 1},
		{label: 'SENT6', name: 'SENT6', value: 'SENT6', count: 1},
		{label: 'SENT7', name: 'SENT7', value: 'SENT7', count: 1},
		{label: 'SENTNL29', name: 'SENTNL29', value: 'SENTNL29', count: 1},
		{label: 'SENTNL30', name: 'SENTNL30', value: 'SENTNL30', count: 1},
		{label: 'SHCKAA00', name: 'SHCKAA00', value: 'SHCKAA00', count: 1},
		{label: 'Ship', name: 'SHIPAA', start: 0, end: 1, count: 2},
		{label: 'SHIT (Yes, it\s named SHIT)', name: 'SHIT', value: 'SHIT', count: 1},
		{label: 'Shrine', name: 'SHRIAA00', value: 'SHRIAA00', count: 1},
		{label: 'SI', name: 'SI', value: 'SI', count: 1},
		{label: 'TEMP', name: 'TEMP', value: 'TEMP', count: 1},
		{label: 'Temple', name: 'TEMPAA00', value: 'TEMPAA00', count: 1},
		{label: 'Temple 2', name: 'TEMPAAA0', value: 'TEMPAAA0', count: 1},
		{label: 'Temple 3', name: 'TEMPAAB0', value: 'TEMPAAB0', count: 1},
		{label: 'Temple 4', name: 'TEMPAAC0', value: 'TEMPAAC0', count: 1},
		{label: 'Temple 5', name: 'TEMPAAD0', value: 'TEMPAAD0', count: 1},
		{label: 'Temple 6', name: 'TEMPAAE0', value: 'TEMPAAE0', count: 1},
		{label: 'Temple 7', name: 'TEMPAAF0', value: 'TEMPAAF0', count: 1},
		{label: 'Temple 8', name: 'TEMPAAG0', value: 'TEMPAAG0', count: 1},
		{label: 'Temple 9', name: 'TEMPAAH0', value: 'TEMPAAH0', count: 1},
		{label: 'Temple 10', name: 'TEMPGAB0', value: 'TEMPAAB0', count: 1},
		{label: 'TEST', name: 'TEST', value: 'TEST', count: 1},
		{label: 'Thief\'s Guild (L)', name: 'THIEAL00', value: 'THIEAL00', count: 1},
		{label: 'Thief\'s Guild (M)', name: 'THIEAM00', value: 'THIEAM00', count: 1},
		{label: 'Thief\'s Guild (S)', name: 'THIEAS00', value: 'THIEAS00', count: 1},
		{label: 'TMP', name: 'TMP', value: 'TMP', count: 1},
		{label: 'Tavern', name: 'TVRNAL', start: 0, end: 10, count: 11},
		{label: 'Tavern 2', name: 'TVRNAM', start: 0, end: 9, count: 10},
		{label: 'Tavern 3', name: 'TVRNAS', start: 0, end: 9, count: 10},
		{label: 'Tavern 4', name: 'TVRNBL', start: 0, end: 4, count: 5},
		{label: 'Tavern 5', name: 'TVRNBM', start: 0, end: 4, count: 5},
		{label: 'Tavern 6', name: 'TVRNBS', start: 0, end: 4, count: 5},
		{label: 'Tavern 7', name: 'TVRNGL', start: 0, end: 4, count: 5},
		{label: 'Tavern 8', name: 'TVRNGM', start: 0, end: 4, count: 5},
		{label: 'Tavern 9', name: 'TVRNGS', start: 0, end: 4, count: 5},
		{label: 'Wall', name: 'WALLAA', start: 0, end: 11, count: 12},
		{label: 'WAY0', name: 'WAY0', value: 'WAY0', count: 1},
		{label: 'WAY1', name: 'WAY1', value: 'WAY1', count: 1},
		{label: 'WAY2', name: 'WAY2', value: 'WAY2', count: 1},
		{label: 'WAY3', name: 'WAY3', value: 'WAY3', count: 1},
		{label: 'WAY4', name: 'WAY4', value: 'WAY4', count: 1},
		{label: 'WAY5', name: 'WAY5', value: 'WAY5', count: 1},
		{label: 'WAY6', name: 'WAY6', value: 'WAY6', count: 1},
		{label: 'WAY7', name: 'WAY7', value: 'WAY7', count: 1},
		{label: 'WAY8', name: 'WAY8', value: 'WAY8', count: 1},
		{label: 'Weapon', name: 'WEAPAL', start: 0, end: 3, count: 4},
		{label: 'Weapon 2', name: 'WEAPAM', start: 0, end: 2, count: 3},
		{label: 'Weapon 3', name: 'WEAPAS', start: 0, end: 2, count: 3},
		{label: 'Weapon 4', name: 'WEAPBL', start: 0, end: 1, count: 2},
		{label: 'Weapon 5', name: 'WEAPBM', start: 0, end: 1, count: 2},
		{label: 'Weapon 6', name: 'WEAPBS', start: 0, end: 1, count: 2},
		{label: 'Weapon 7', name: 'WEAPGL', start: 0, end: 1, count: 2},
		{label: 'Weapon 8', name: 'WEAPGM', start: 0, end: 1, count: 2},
		{label: 'Weapon 9', name: 'WEAPGS', start: 0, end: 1, count: 2},
		{label: 'Witch coven', name: 'WITCAA', start: 0, end: 13, count: 14},
		{label: 'WOODB', name: 'WOODB', value: 'WOODB', count: 1},
		{label: 'WOODG', name: 'WOODG', value: 'WOODG', count: 1},
		{label: 'WYRSAA', name: 'WYRSAA', start: 34, end: 36, count: 3},
		{label: 'WYRSAA', name: 'WYRSAA', start: 42, end: 46, count: 5},
		{label: 'WYRSAA', name: 'WYRSAA', start: 54, end: 56, count: 3},
		{label: 'ZLNDFLAT', name: 'ZLNDFLAT', value: 'ZLNDFLAT', count: 1},
		{label: 'ZZZZZZZ', name: 'ZZZZZZZ', value: 'ZZZZZZZ', count: 1}
	],
	//Exterior dungeon blocks
	exteriorDungeonBlocks: [
		{label: 'Castle ruins', name: 'CARNAA', start: 0, end: 24, count: 25},
		{label: 'Castles', name: 'CASTAA', start: 0, end: 34, count: 35},
		{label: 'Dungeons', name: 'DUNGAA', start: 0, end: 18, count: 19},
		{label: 'Epic castle', name: 'EPCAS', value: 'EPCAS3', count: 1},
		{label: 'Foo', name: 'FOO', value: 'FOO', count: 1},
		{label: 'Graveyards 1', name: 'GRVEAL', start: 0, end: 42, count: 43},
		{label: 'Graveyards 2', name: 'GRVEAM', start: 0, end: 42, count: 43},
		{label: 'Graveyards 3', name: 'GRVEAS', start: 0, end: 42, count: 43},
		{label: 'Lysandus\' Tomb', name: 'LYSAN', value: 'LYSAN', count: 1},
		{label: 'Asylum', name: 'NASYLUM', value: 'NASYLUM', count: 1},
		{label: 'Ruins', name: 'RUINAA', start: 0, end: 28, count: 29},
		{label: 'Scourg Barrow', name: 'SCO', value: 'SCO', count: 1},
		{label: 'Shedungent', name: 'SHE', value: 'SHE', count: 1}
	],

	noDungeonType: 'NoDungeon', //Check during JSON generation to clear dungeon cells if set
	//Daggerfall dungeon types
	dungeonTypes: [
		{label: 'No dungeon', value: 'NoDungeon'},
		{label: 'Barbarian stronghold', value: 'BarbarianStronghold'},
		{label: 'Cemetery', value: 'Cemetery'},
		{label: 'Coven', value: 'Coven'},
		{label: 'Crypt', value: 'Crypt'},
		{label: 'Desecrated temple', value: 'DesecratedTemple'},
		{label: 'Dragon\'s den', value: 'DragonsDen'},
		{label: 'Giant stronghold', value: 'GiantStronghold'},
		{label: 'Harpy nest', value: 'HarpyNest'},
		{label: 'Human stronghold', value: 'HumanStronghold'},
		{label: 'Laboratory', value: 'Laboratory'},
		{label: 'Mine', value: 'Mine'},
		{label: 'Natural cave', value: 'NaturalCave'},
		{label: 'Orc stronghold', value: 'OrcStronghold'},
		{label: 'Prison', value: 'Prison'},
		{label: 'Ruined castle', value: 'RuinedCastle'},
		{label: 'Scorpion nest', value: 'ScorpionNest'},
		{label: 'Spider nest', value: 'SpiderNest'},
		{label: 'Vampire haunt', value: 'VampireHaunt'},
		{label: 'Volcanic caves', value: 'VolcanicCaves'}
	],
	//Dungeon blocks
	dungeonBlocks: [
		{label: 'Border blocks', name: 'B', start: 0, end: 14, count: 15},
		{label: 'Mausoleum blocks', name: 'M', start: 0, end: 8, count: 9},
		{label: 'Normal blocks', name: 'N', start: 0, end: 92, count: 93},
		{label: 'Wet blocks (flooded)', name: 'W', start: 0, end: 29, count: 30},
		{label: 'Mantellan Crux', name: 'S', start: 0, end: 6, count: 7},
		{label: 'Stronghold of Orsinium', name: 'S', start: 20, end: 22, count: 3},
		{label: 'Sentinel Palace', name: 'S', start: 40, end: 43, count: 4},
		{label: 'Shedungent 1', name: 'S', start: 60, end: 62, count: 3},
		{label: 'Shedungent 2', name: 'S', start: 69, end: 71, count: 3},
		{label: 'Castle Wayrest', name: 'S', start: 80, end: 82, count: 3},
		{label: 'Woodborne Hall', name: 'S', start: 100, end: 101, count: 2},
		{label: 'Castle Llugwych', name: 'S', start: 120, end: 121, count: 2},
		{label: 'Lysandus\' Tomb', name: 'S', start: 140, end: 141, count: 2},
		{label: 'Castle Daggerfall', name: 'S', start: 160, end: 161, count: 2},
		{label: 'Direnni Tower', name: 'S', start: 180, end: 181, count: 2},
		{label: 'Scourg Barrow', name: 'S', start: 200, end: 205, count: 6},
		{label: 'Privateer\'s Hold', name: 'S', value: 'S0000999', count: 1}
	],

	//Daggerfall regions
	regions: [
		{id: '43', label: 'Abibon-Gora'},
		{id: '34', label: 'Alcaire'},
		{id: '21', label: 'Anticlere'},
		{id: '55', label: 'Antiphyllos'},
		{id: '47', label: 'Ayasofya'},
		{id: '56', label: 'Bergama'},
		{id: '19', label: 'Betony'},
		{id: '36', label: 'Bhoriane'},
		{id: '61', label: 'Cybiades'},
		{id: '41', label: 'Daenia'},
		{id: '17', label: 'Daggerfall'},
		{id: '11', label: 'Dak\'fron'},
		{id: '05', label: 'Dwynnen'},
		{id: '53', label: 'Ephesus'},
		{id: '57', label: 'Gavaudon'},
		{id: '18', label: 'Glenpoint'},
		{id: '59', label: 'Glenumbra Moors'},
		{id: '60', label: 'Ilessan Hills'},
		{id: '44', label: 'Kairou'},
		{id: '37', label: 'Kambria'},
		{id: '35', label: 'Koegria'},
		{id: '49', label: 'Kozanset'},
		{id: '22', label: 'Lainlyn'},
		{id: '33', label: 'Menevia'},
		{id: '52', label: 'Mournoth'},
		{id: '46', label: 'Myrkwasa'},
		{id: '32', label: 'Northmoor'},
		{id: '38', label: 'Phrygias'},
		{id: '45', label: 'Pothago'},
		{id: '54', label: 'Santaki'},
		{id: '50', label: 'Satakalaam'},
		{id: '20', label: 'Sentinel'},
		{id: '42', label: 'Shalgora'},
		{id: '00', label: 'The Alik\'r Desert'},
		{id: '01', label: 'The Dragontail Mountains'},
		{id: '09', label: 'The Isle of Balfiera'},
		{id: '26', label: 'The Orsinium Area'},
		{id: '16', label: 'The Wrothgarian Mountains'},
		{id: '48', label: 'Tigonus'},
		{id: '51', label: 'Totambu'},
		{id: '58', label: 'Tulune'},
		{id: '39', label: 'Urvaius'},
		{id: '23', label: 'Wayrest'},
		{id: '40', label: 'Ykalon'}
		//{id: '04', label: 'Yeorth Burrowland'},
		//{id: '02', label: 'Glenpoint Foothills*'},
		//{id: '03', label: 'Daggerfall Bluffs*'},
		//{id: '06', label: 'Ravennian Forest*'},
		//{id: '07', label: 'Devilrock*'},
		//{id: '08', label: 'Malekna Forest*'},
		//{id: '10', label: 'Bantha*'},
		//{id: '12', label: 'The Islands in the Western Iliac Bay*'},
		//{id: '13', label: 'Tamarilyn Point*'},
		//{id: '14', label: 'Lainlyn Cliffs*'},
		//{id: '15', label: 'Bjoulsae River*'},
		//{id: '24', label: 'Gen Tem High Rock village*'},
		//{id: '25', label: 'Gen Rai Hammerfell village*'},
		//{id: '27', label: 'Skeffington Wood*'},
		//{id: '28', label: 'Hammerfell bay coast*'},
		//{id: '29', label: 'Hammerfell sea coast*'},
		//{id: '30', label: 'High Rock bay coast*'},
		//{id: '31', label: 'High Rock sea coast'},
		//{id: '62', label: 'Vraseth†'},
		//{id: '63', label: 'Haarvenu†'},
		//{id: '64', label: 'Thrafey†'},
		//{id: '65', label: 'Lyrezi†'},
		//{id: '66', label: 'Montalion†'},
		//{id: '67', label: 'Khulari†'},
		//{id: '68', label: 'Garlythi†'},
		//{id: '69', label: 'Anthotis†'},
		//{id: '70', label: 'Selenu†'},
		//{id: '105', label: 'UnknownRegion‡'}
	],

	templeBlocks: [
		'TEMPAA00',
		'TEMPGAB0',
		'TEMPAAB0',
		'TEMPAAC0',
		'TEMPAAF0',
		'TEMPAAG0',
		'TEMPAAE0',
		'TEMPAAA0',
		'TEMPAAH0',
		'TEMPAAD0',
		'CUSTGA30'
	],
	templeBlockGods: [
		'Stendar',
		'Zen',
		'Zen',
		'Mara',
		'Julianos',
		'Stendarr',
		'Dibella',
		'Arkay',
		'Kynareth',
		'Akatosh Chantry',
		'Resolution of Zen'
	],
	extraBankBlocks: [
		'CLOTAS00',
		'PALAAA01',
		'MARKAA00',
		'MARKAA01',
		'CUSTGA00'
	],
	serviceBlocks: [
		'WALL',
		'ALCH',
		'ARMR',
		'BANK',
		'BOOK',
		'CLOT',
		'FIGH',
		'GEMS',
		'GENR',
		'LIBR',
		'MAGE',
		'MARK',
		'PAWN',
		'TEMP',
		'TVRN',
		'WEAP',
		'KHOR',
		'KDRA',
		'KFLA',
		'KHAW',
		'KOWL',
		'KROS',
		'KWHE',
		'KCAN',
		'KRAV',
		'KSCA'
	],
	serviceBlockNames: [
		'Walled',
		'Alchemy',
		'Armorer',
		'Bank',
		'Bookstore',
		'Clothing store',
		'Fighting Guild',
		'Gem store',
		'General store',
		'Library',
		'Mage Guild',
		'Market',
		'Pawnshop',
		'Temple',
		'Tavern',
		'Weapon smith',
		'Host of the Horn',
		'Knights of the Dragon',
		'Knights of the Flame',
		'Knights of the Hawk',
		'Knights of the Owl',
		'Knights of the Rose',
		'Knights of the Wheel',
		'Order of the Candle',
		'Order of the Raven',
		'Order of the Scarab'
	],
	/* TEMPORARY GENERATOR STUFF */
	blockScriptIndex: -1, //Keeps track of the array index when loading blockBuildings
	blockBuildings: {}, //Stores the buildings for each exterior block, needed when generating a new location
	blockBuildingsMissing: [], //Keeps tracks of missing blockBuildings scripts, should not be filled
	//Init is called when the DOM has been loaded
	generateExteriorBlockTiles: function(type) {
		var title, tile, img, blockNames, wrapper;
		var df = document.createDocumentFragment();
		var blockGroups = this.generateBlockNames(this.exteriorLocationBlocks, 2, false, true);
		for(var h = 0; h < blockGroups.length; h++) {
			title = document.createElement('div');
			title.classList.add('exteriorblock-tile-title');
			title.setAttribute('data-index', h.toString());
			title.innerHTML = blockGroups[h].label;
			title.addEventListener('click', function() {
				console.log(this);
				var el = document.getElementById('tiles-wrapper-' + this.getAttribute('data-index'));
				el.classList.toggle('collapse');
			});
			df.appendChild(title);
			blockNames = blockGroups[h].blockNames;
			wrapper = document.createElement('div');
			wrapper.id = 'tiles-wrapper-' + h.toString();
			wrapper.classList.add('exteriorblock-tiles-wrapper');
			wrapper.classList.add('collapse');
			for (var i = 0; i < blockNames.length; i++) {
				tile = document.createElement('div');
				tile.id = blockNames[i];
				tile.classList.add('exteriorblock-tile');
				tile.title = blockNames[i];
				tile.setAttribute('data-block', blockNames[i]);
				img = document.createElement('img');
				img.src = 'images/RMB/' + blockNames[i] + '.RMB.png';
				tile.appendChild(img);
				wrapper.appendChild(tile);
			}
			df.appendChild(wrapper);
		}
		while(this.exteriorBlockTiles.firstElementChild) {
			this.exteriorBlockTiles.removeChild(this.exteriorBlockTiles.firstElementChild);
		}
		this.exteriorBlockTiles.appendChild(df);
	},
	tmpDungeonBlocks: [],
	generateDungeonBlocksData: function(index) {
		if(index < this.tmpDungeonBlocks.length) {
			var blocks = this.tmpDungeonBlocks;
			var req = new XMLHttpRequest();
			req.overrideMimeType("application/json");
			var url = '';
			url = 'js/RDB/' + blocks[index] + '.RDB.json';
			req.open('GET', url, true); // Replace 'my_data' with the path to your file
			req.onreadystatechange = function (index) {
				if (req.readyState == 4 && req.status == "200") {
					// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
					dfuWorldDataEditor.processDungeonBlockData(req.responseText, index);
				} else {
					dfuWorldDataEditor.generateBlockOptions(index + 1);
				}
			}.bind(req, index);
			req.send(null);
		} else {
			var text = [];
			var i;
			var line;
			console.log(this.tmpData);

			if( 2== 3) {
				line = "ModelId;Description";
				text[0] = line;
				var model;
				for (model in this.tmpData) {
					line = this.tmpData[model].ModelId + ";" + this.tmpData[model].Description;
					text[text.length] = line;
				}
				if (2 == 3) {
					line = "Name;TextureArchive;TextureRecord;Flags;X;Y;Z";
					//line = "Name;Monster Type";
					//for(i = 0; i < this.dungeonMarkers.length; i++) {
					//line += ";" + this.dungeonMarkers[i];
					//}
					text[0] = line;
					for (i = 0; i < this.tmpData.length; i++) {
						line = this.tmpData[i].name;
						for (var j = 0; j < this.tmpData[i].flatFlags.length; j++) {
							line += ";" + this.tmpData[i].flatFlags[j].join(";") + "\n";
						}
						//for(var j = 0; j < this.dungeonMarkers.length; j++) {
						//if(this.tmpData[i].factionOrMobileIds.length > 0) {
						//line += ";" + this.tmpData[i].factionOrMobileIds.join("\n;");
						//}
						//if(this.tmpData[i].markers[j]) {
						//line += this.tmpData[i].markers[j].count;
						//} else {
						//line += "0";
						//}
						//}
						text[text.length] = line;
					}
				}
				document.getElementById('dfu-worlddata-result').innerHTML = text.join("\n");
				console.log('end reached');
			}
		}
	},
	lightArchives: [101, 200, 210, 253],
	lightIndexes: [
		[0, 2, 3, 5, 6, 7, 8, 9, 11, 12],
		[7, 8, 9, 10],
		[0, 1, 2, 3, 4, 5, 6, 8, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
		[10, 17, 18, 19, 22, 49, 50, 51, 52, 75, 77]
	],
	processDungeonBlockData: function(txt, index) {
		var jsonData = JSON.parse(txt);
		var data;

		if(2 == 3) {
			data = {
				name: this.tmpDungeonBlocks[index],
				markers: {},
				factionOrMobileIds: [],
				flatFlags: []
			};
			//Not related to code above
			var modelList = jsonData.RdbBlock.ModelReferenceList;
			var modelData = [];
			var name = this.tmpDungeonBlocks[index];
			if(this.tmpData[name]) {
				modelData = this.tmpData[name].models;
			}
		}

		var modelResource;
		var lightResources = [];
		var objectLists = jsonData.RdbBlock.ObjectRootList;
		for (var i = 0; i < objectLists.length; i++) {
			if (objectLists[i].RdbObjects !== null) {
				//console.log('Processing RdbObjects ' + i);
				var rdbObjects = objectLists[i].RdbObjects;
				for (var j = 0; j < rdbObjects.length; j++) {

					if (rdbObjects[j].Type == 'Light') {
						lightResources[lightResources.length] = rdbObjects[j].Resources.LightResource;
					}

					if (rdbObjects[j].Type == 'Model' && 2 == 3) {
						modelResource = rdbObjects[j].Resources.ModelResource;
						if((modelResource.ActionResource.Flags == 1) && modelResource.ActionResource.Axis <= 6) {
							var modelId = modelList[modelResource.ModelIndex].ModelIdNum;
							//if(modelId == 54000 || modelId == 54001) {
							if(modelList[modelResource.ModelIndex].Description == 'TRP') {
								data = {
									ModelIdNum: modelId,
									Description: modelList[modelResource.ModelIndex].Description,
									Axis: modelResource.ActionResource.Axis,
									Magnitude: modelResource.ActionResource.Magnitude,
									Flags: modelResource.ActionResource.Flags,
								};
								modelData[modelData.length] = data;
							}
						}
						if(modelData.length > 0) {
							this.tmpData[name] = {
								name: name,
								count: modelData.length,
								models: modelData
							};
						}
					}
				}
			}
		}
		this.tmpData[this.tmpData.length] = lightResources;

		if(2 == 3) {

			var objectLists = jsonData.RdbBlock.ObjectRootList;
			for (var i = 0; i < objectLists.length; i++) {
				if (objectLists[i].RdbObjects !== null) {
					//console.log('Processing RdbObjects ' + i);
					var rdbObjects = objectLists[i].RdbObjects;
					for (var j = 0; j < rdbObjects.length; j++) {
						if (rdbObjects[j].Type == 'Flat' && 2 == 3) {
							var object = rdbObjects[j];
							if (object.Resources.FlatResource.TextureArchive == 199) {
								if (!data.markers[object.Resources.FlatResource.TextureRecord]) {
									data.markers[object.Resources.FlatResource.TextureRecord] = {
										name: this.dungeonMarkers[object.Resources.FlatResource.TextureRecord],
										count: 0
									};
								}
								if (object.Resources.FlatResource.TextureRecord == 16) {
									var id = object.Resources.FlatResource.FactionOrMobileId & 0xFF;
									//if(data.factionOrMobileIds.indexOf(id) < 0) {
									data.factionOrMobileIds[data.factionOrMobileIds.length] = id;
									//}
								}
								data.markers[object.Resources.FlatResource.TextureRecord].count++;
							}
							if (object.Resources.FlatResource.Flags > 0) {
								data.flatFlags[data.flatFlags.length] = [
									object.Resources.FlatResource.TextureArchive,
									object.Resources.FlatResource.TextureRecord,
									object.Resources.FlatResource.Flags,
									object.XPos,
									object.YPos,
									object.ZPos
								];
							}
						}
					}
				}
			}
			this.tmpData[this.tmpData.length] = data;
		}
		this.generateDungeonBlocksData(index + 1);
	},
	getLocationFiles: function() {
		var regionName;
		var locations;
		var locationFile;
		for(var i = 0; i < dfRegions.length; i++) {
			regionName = dfRegions[i].name;
			locations = dfRegions[i].locations;
			for(var j = 0; j < locations.length; j++) {
				locationFile = 'js/locations/location-' + i + '-' + j + '.json';
				this.locationFiles[this.locationFiles.length] = locationFile;
			}
		}
		return true;
	},
	loadLocationFile: function(index) {
		if(index < this.locationFiles.length) {
			var req = new XMLHttpRequest();
			req.overrideMimeType("application/json");
			var url = this.locationFiles[index];
			req.open('GET', url, true); // Replace 'my_data' with the path to your file
			req.onreadystatechange = function (index) {
				if (req.readyState == 4 && req.status == "200") {
					// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
					dfuWorldDataEditor.processLocationFile(req.responseText, index);
				}
			}.bind(req, index);
			req.send(null);
		} else {
			var header = 'RegionName;LocationName;Size;' + this.serviceBlockNames.join(';');
			header += ";" + this.templeBlockGods.join(';');
			var locations = [];
			locations[0] = header;
			var line, serviceBlocks;
			for(var i = 0; i < this.locationData.length; i++) {
				serviceBlocks = this.locationData[i].serviceBlocks;
				line = this.locationData[i].region;
				line += ";" + this.locationData[i].name;
				line += ";" + this.locationData[i].blockCount;
				var j;
				for(j = 0; j < this.serviceBlocks.length; j++) {
					if(serviceBlocks[this.serviceBlocks[j]]) {
						line += ";" + serviceBlocks[this.serviceBlocks[j]];
					} else {
						line += ";0";
					}
				}
				for(j = 0; j < this.templeBlocks.length; j++) {
					if(serviceBlocks[this.templeBlocks[j]]) {
						line += ";" + serviceBlocks[this.templeBlocks[j]];
					} else {
						line+= ";0";
					}
				}
				locations[locations.length] = line;
			}
			document.getElementById('dfu-worlddata-result').innerHTML = locations.join("\n");
			alert('done parsing locations');
		}
	},
	processLocationFile: function(txt, index) {
		var jsonData = JSON.parse(txt);
		var exteriorData = jsonData.Exterior.ExteriorData;
		var data = {
			region: jsonData.RegionName,
			name: jsonData.Name,
			blockCount: exteriorData.Width * exteriorData.Height
		};
		var serviceBlocks = {};
		var blockName, blockNameIndex;
		for(var i = 0; i < exteriorData.BlockNames.length; i++) {
			blockName = exteriorData.BlockNames[i].substring(0,4).toUpperCase();
			blockNameIndex = this.serviceBlocks.indexOf(blockName);
			if(blockNameIndex > -1) {
				if(!serviceBlocks[blockName]) {
					serviceBlocks[blockName] = 0;
				}
				serviceBlocks[blockName]++;
			}
			blockName = exteriorData.BlockNames[i].substring(0,8).toUpperCase();
			if(this.extraBankBlocks.indexOf(blockName) > -1) {
				if(!serviceBlocks['BANK']) {
					serviceBlocks['BANK'] = 0;
				}
				serviceBlocks['BANK']++;
			}
			blockNameIndex = this.templeBlocks.indexOf(blockName);
			if(blockNameIndex > -1) {
				var templeBlock = this.templeBlocks[blockNameIndex];
				if(!serviceBlocks[templeBlock]) {
					serviceBlocks[templeBlock] = 0;
				}
				serviceBlocks[templeBlock]++;
			}
		}
		data.serviceBlocks = serviceBlocks;
		this.locationData[this.locationData.length] = data;
		this.loadLocationFile(index + 1);
	},
	/* TEMPORARY GENERATOR STUFF END */
	init: function() {
		if(2 == 3) {
			this.tmpData = [];
			/*this.locationData = [];
			 this.locationFiles = [];
			 if (this.getLocationFiles()) {
			 this.loadLocationFile(0);
			 }*/
			this.tmpDungeonBlocks = this.generateBlockNames(this.dungeonBlocks, 7, false, false);
			this.generateDungeonBlocksData(0);
			return false;
		}
		this.currentExteriorBlock = null;
		this.exteriorBlockTiles = document.getElementById('dfu-exteriorblock-tiles');
		this.exteriorBlockTiles.addEventListener('click', function(event) {
			event.preventDefault();
			var el, block;
			if(event.target.parentNode.classList.contains('exteriorblock-tile')) {
				block = event.target.parentNode.getAttribute('data-block');
				if(this.currentExteriorBlock == block) {
					return false;
				}
				if(this.currentExteriorBlock !== null) {
					el = this.exteriorBlockTiles.querySelector('#' + this.currentExteriorBlock);
					el.classList.remove('active');
				}
				el = this.exteriorBlockTiles.querySelector('#' + block);
				el.classList.add('active');
				this.currentExteriorBlock = block;
				console.log(this.currentExteriorBlock);
			}
		}.bind(this));
		this.generateExteriorBlockTiles();
		//Load block buildings data
		this.blockNames = this.generateBlockNames(this.exteriorLocationBlocks, 2, true, false);
		this.handleBlockBuildingsScriptLoad();

		//Setup reference to DOM elements and add event listeners
		this.dungeonGrid = document.getElementById('dfu-worlddata-dungeonblock-grid');
		this.dungeonGrid.addEventListener('change', function() {
			if(!event.target) {
				return false;
			}
			if(event.target.matches('select')) {
				//console.log(event.target);
				return this.handleDungeonCellChange(event.target);
			} else if(event.target.matches('label') || event.target.matches('input')) {

			}
			return true;
		}.bind(this));
		this.exteriorGrid = document.getElementById('dfu-worlddata-exteriorblock-grid');
		this.exteriorGrid.addEventListener('click', function(event) {
			if(event.target.parentNode.classList.contains('cell')) {
				var cell = event.target.parentNode;
				var select = cell.querySelector('select');
				select.value = this.currentExteriorBlock;
				this.handleExteriorCellChange(select);
			}
		}.bind(this));
		this.exteriorGrid.addEventListener('change', function() {
			if(!event.target) {
				return false;
			}
			if(event.target.matches('select')) {
				//console.log(event.target);
				return this.handleExteriorCellChange(event.target);
			} else if(event.target.matches('label') || event.target.matches('input')) {

			}
			return true;
		}.bind(this));
		this.exteriorGridControls = document.querySelectorAll('#dfu-worlddata-exteriorblock-grid-controls button');
		this.exteriorGridControls[0].addEventListener('click', function() {
			this.addRowToExteriorGrid();
		}.bind(this));
		this.exteriorGridControls[1].addEventListener('click', function() {
			this.addColumnsToExteriorGrid();
		}.bind(this));
		this.exteriorGridControls[2].addEventListener('click', function() {
			this.removeRowFromExteriorGrid();
		}.bind(this));
		this.exteriorGridControls[3].addEventListener('click', function() {
			this.removeColumnsFromExteriorGrid();
		}.bind(this));
		this.locationTypeList = document.getElementById('dfu-worlddata-locationtype');
		this.locationTypeList.addEventListener('change', function() {
			this.handleLocationTypeChange();
		}.bind(this));
		this.dungeonTypeList = document.getElementById('dfu-worlddata-dungeontype');
		this.dungeonTypeList.addEventListener('change', function() {
			this.handleDungeonTypeChange();
		}.bind(this));

		//Populate locationType and dungeonType dropdown lists
		this.populateList(this.locationTypeList, 'locationType');
		this.populateList(this.dungeonTypeList, 'dungeonType');

		//Store reference to file input and button DOM elements and add event listener
		this.fileInput = document.getElementById('json-upload-file');
		this.loadFileButton = document.getElementById('json-upload-button');
		this.loadFileButton.addEventListener('click', this.loadJSON.bind(this));

		//Store reference to form DOM element and configure form fields
		this.form = document.getElementById('dfu-worlddata-form');
		this.form.locationId.min = this.minLocationId;
		this.form.locationId.max = this.maxLocationId;
		this.form.mapX.min = 0;
		this.form.mapY.min = 0;
		this.form.mapX.max = this.mapMaxX;
		this.form.mapY.max = this.mapMaxY;

		//Store reference to generate button DOM element and add event listener
		this.generateButton = document.getElementById('dfu-worlddata-generate');
		this.generateButton.addEventListener('click', this.generateJSON.bind(this));

		//Fill out min / max values for LocationId
		document.getElementById('dfu-worlddata-minlocationid').innerHTML = this.minLocationId.toString();
		document.getElementById('dfu-worlddata-maxlocationid').innerHTML = this.maxLocationId.toString();
	},
	//Load all block buildings JS, not the most elegant solution but it works well
	handleBlockBuildingsScriptLoad: function() {
		var index = this.blockScriptIndex + 1;
		//Keep loading scripts until the end of blockNames is reached
		if(index < this.blockNames.length) {
			//Skip blocks that are not used in Daggerfall (missing block buildings data)
			if(blockBuildingsMissing.indexOf(this.blockNames[index]) > -1) {
				this.blockScriptIndex = index;
				this.handleBlockBuildingsScriptLoad();
				return false;
			}
			if(this.registerBlocksScript) {
				document.head.removeChild(this.registerBlocksScript);
			}
			this.blockScriptIndex = index;
			this.registerBlocksScript = document.createElement('script');
			this.registerBlocksScript.type = 'text/javascript';
			this.registerBlocksScript.onerror = function() {this.handleBlockBuildingsScriptError()}.bind(this);
			this.registerBlocksScript.onload = function() {this.handleBlockBuildingsScriptLoad()}.bind(this);
			this.registerBlocksScript.src = 'js/RMB-buildings/' + this.blockNames[index] + '.js';

			document.head.appendChild(this.registerBlocksScript);
		} else {
			//There are missing blocks that aren't covered by the filter yet
			if(this.blockBuildingsMissing.length > 0) {
				console.log(this.blockBuildingsMissing);
			}
		}
	},
	//Add blocks that could not be loaded so they can be console.logged when the end of the list is reached
	handleBlockBuildingsScriptError: function() {
		this.blockBuildingsMissing[this.blockBuildingsMissing.length] = this.blockNames[this.blockScriptIndex];
		this.handleBlockBuildingsScriptLoad();
	},
	//Called by the blockBuilding JS files as they're loaded
	registerBlockBuildings: function(blockBuildings) {
		var name = blockBuildings.BlockName.replace('.RMB','');
		this.blockBuildings[name] = blockBuildings.Buildings;
	},

	//TODO: Add logic to handle locationType changes
	handleLocationTypeChange: function() {
		var value = this.locationTypeList.value;
		//Dungeon exterior location selected
		if(this.isLocationTypeDungeon(value)) {
			//this.populateList(this.exteriorBlocksList, 'exteriorDungeonBlocks');

			//this.dungeonTypeList.disabled = false;
			//this.dungeonBlocksList.disabled = false;
		} else {
			//this.populateList(this.exteriorBlocksList, 'exteriorLocationBlocks');

			//this.dungeonTypeList.disabled = true;
			//this.dungeonBlocksList.disabled = true;

		}
		return true;
	},
	//TODO: Add logic to handle dungeonType changes
	handleDungeonTypeChange: function() {
		var value = this.dungeonTypeList.value;
		//Disable dungeon block select and clear dungeon block grid
		if(value == this.noDungeonType) {
			//this.dungeonBlocksList.disabled = true;
			this.clearGrid('dungeon');
		} else {
			//this.dungeonBlocksList.disabled = false;
		}
		return true;
	},
	//TODO: Add logic to handle exterior cell change
	handleExteriorCellChange: function(el) {
		var value = el.value;
		el.parentNode.setAttribute('data-blockname',value);
		el.parentNode.title = value;
		this.setExteriorCellImage(el.parentNode, value);
		if(this.isLocationTypeDungeon(value)) {

		} else {

		}
	},
	//Handle a dungeon cell change
	handleDungeonCellChange: function(el) {
		var z = parseInt(el.getAttribute('data-z'),10);
		var x = parseInt(el.getAttribute('data-x'),10);
		var radio = document.getElementById('startblock-yes_' + z.toString() + '_' + x.toString());
		var blockName = el.value;
		if(blockName == '') {
			//Remove block from grid
			this.removeDungeonCell(el.parentNode);
			//When a non-border block has been selected:
			//Checks boundaries for border blocks and expands grid if necessary and allowed
		} else if(this.allowDungeonBlockStart(blockName)) {
			var checkX, checkZ, size;
			//Calculate vertical offset for boundary check
			if(z == this.dungeonGridBounds.minZ) {
				checkZ = z - 1;
			} else if(z == this.dungeonGridBounds.maxZ) {
				checkZ = z + 1;
			} else {
				checkZ = z;
			}
			//If checkZ is offset, check if new columns can be added
			if(checkZ !== z) {
				//Calculate new dungeon grid size
				if (checkZ < this.dungeonGridBounds.minZ) {
					size = this.calculateSize(this.dungeonGridBounds.maxZ, checkZ);
				} else {
					size = this.calculateSize(checkZ, this.dungeonGridBounds.minZ);
				}
				//If the size exceeds the max grid size, do not add new columns
				//TODO: Should force border block value
				if (size > this.maxDungeonGridSizeZ) {
					alert('The vertical grid size can not exceed ' + this.maxDungeonGridSizeZ.toString() + ' cells');
					return false;
				}
				//Calculate the current size of the dungeon grid before adding columns to the grid
				size = this.calculateSize(this.dungeonGridBounds.maxZ, this.dungeonGridBounds.minZ);
				this.addColumnsToDungeonGrid(checkZ);
				//If the dungeon size was 1, add columns to the opposite side of the cell to ensure closed boundaries
				if(size == 1) {
					if(checkZ < z) {
						this.addColumnsToDungeonGrid(z + 1);
					} else if(checkZ > z) {
						this.addColumnsToDungeonGrid(z - 1);
					}
				}

			}
			//Calculate horizontal offset for boundary check
			if(x == this.dungeonGridBounds.minX) {
				checkX = x - 1;
			} else if(x == this.dungeonGridBounds.maxX) {
				checkX = x + 1;
			} else {
				checkX = x;
			}
			//If checkX is offset, check if a new row can be added
			if(checkX !== x) {
				//Calculate new dungeon grid size
				if (checkX < this.dungeonGridBounds.minX) {
					size = this.calculateSize(this.dungeonGridBounds.maxX, checkX);
				} else {
					size = this.calculateSize(checkX, this.dungeonGridBounds.minX);
				}
				//If the size exceeds the max grid size, do not add a new row
				//TODO: Should force border block value
				if (size > this.maxDungeonGridSizeX) {
					alert('The horizontal grid size can not exceed ' + this.maxDungeonGridSizeZ.toString() + ' cells');
					return false;
				}
				//Calculate the current size of the dungeon grid before adding a row to the grid
				size = this.calculateSize(this.dungeonGridBounds.maxX, this.dungeonGridBounds.minX);
				this.addRowToDungeonGrid(checkX);
				//If the dungeon size was 1, add a row to the opposite side of the cell to ensure closed boundaries
				if(size == 1) {
					if(checkX < x) {
						this.addRowToDungeonGrid(x + 1);
					} else if(checkX > x) {
						this.addRowToDungeonGrid(x - 1);
					}
				}
			}
			//Enable 'Start here' radio button
			radio.disabled = false;
			this.checkDungeonCellBorders(z, x);
		} else {
			//Border blocks can not be set as starting block so user will to have to set a new one
			if(radio.checked) {
				alert('You can not use a border block as a starting block. Please set a new starting block');
				radio.checked = false;
			}
			radio.disabled = true;
		}
		//Update the cell's block image
		if(blockName !== '') {
			var cell = document.getElementById(this.getDungeonCellId(z, x));
			cell = this.setDungeonCellImage(cell, blockName);
		}
	},
	//Clears a dungeon cell (removes image, select and radio button
	removeDungeonCell: function(cell) {
		var select = cell.getElementsByTagName('SELECT');
		var z = parseInt(select[0].getAttribute('data-z'),10);
		var x = parseInt(select[0].getAttribute('data-x'),10);
		//TODO: Needs proper boundary check to ensure the cell can be cleared
		if(this.checkAdjacentCells(z, x)) {
			this.clearChildren(cell);
		} else {
			alert('You can not remove this cell');
		}
	},
	//TODO: Implement logic for valid cell removal
	checkAdjacentCells: function(z, x) {
		var checkZ, checkX;
		//TODO: Figure out proper logic for cell removal
		return true;
	},

	//Matches value with dungeon location types
	isLocationTypeDungeon: function(value) {
		if(value.match(/(Graveyard|DungeonLabyrinth|DungeonKeep|DungeonRuin)/) !== null) {
			return true;
		} else {
			return false;
		}
	},

	//Generates an exterior grid from the original JSON data
	generateExteriorGrid: function() {
		//var exteriorBlocks = this.original.Exterior.ExteriorData.BlockNames;
		var exteriorWidth = this.original.Exterior.ExteriorData.Width;
		var exteriorHeight = this.original.Exterior.ExteriorData.Height;
		this.exteriorGridBounds = {
			width: exteriorWidth,
			height: exteriorHeight
		};
		var width, height, index, cell, nameIndex;
		var documentFragment = document.createDocumentFragment();
		for(height = 0; height < exteriorHeight; height++) {
			for(width = 0; width < exteriorWidth; width++) {
				index = (this.original.Exterior.ExteriorData.Height - 1) - height;
				cell = this.generateExteriorCell(index, width);
				//nameIndex = index + width;
				//cell.setAttribute('data-blockname',exteriorBlocks[nameIndex].replace('.RMB',''));
				documentFragment.appendChild(cell);
			}
		}
		if(this.clearGrid('exterior')) {
			this.exteriorGrid.appendChild(documentFragment);
			this.updateExteriorGridRowsColumns(exteriorHeight, exteriorWidth);
		}
	},
	//Generates an exterior grid cell
	generateExteriorCell: function(z, x) {
		var cell = document.createElement('div');
		cell.className = 'cell';
		var cellTitle = document.createElement('div');
		cellTitle.innerHTML = 'Z: ' + z.toString() + ', X:' + x.toString();
		cellTitle.className = 'cell-coordinates';
		cell.appendChild(cellTitle);
		cell.id = this.getExteriorCellId(z, x);
		return cell;
	},
	//Generates an exterior grid cell dropdown list with available blocks
	generateExteriorGridDropdown: function(z, x, value) {
		var options = this.generateBlockOptions(this.exteriorLocationBlocks, 2);
		var select = document.createElement('select');
		var id = 'select_exterior_cell_' + z.toString() + '_' + x.toString();
		select.id = id;
		select.name = id;
		select.setAttribute('data-z',z);
		select.setAttribute('data-x',x);
		select.appendChild(options);
		select.value = value;
		return select;
	},
	//Returns the exterior cell id for a z, x coordinate
	getExteriorCellId: function(z, x) {
		return 'exterior_cell_' + z.toString() + '_' + x.toString();
	},
	//Sets the block image for a cell
	setExteriorCellImage: function(cell, blockName) {
		var img;
		img = cell.getElementsByTagName('IMG');
		if(img.length == 0) {
			img = document.createElement('img');
		} else {
			img = img[0];
		}
		img.src = 'images/RMB/' + blockName + '.RMB.png';
		cell.appendChild(img);
		return cell;
	},
	//Sets a default block for a new cell
	checkExteriorCell: function(z, x, cell) {
		var blockName = 'ZLNDFLAT';
		var select = this.generateExteriorGridDropdown(z, x, blockName);
		select.value = blockName;
		cell.appendChild(select);
		cell = this.setExteriorCellImage(cell, blockName);
		cell.setAttribute('data-blockname',blockName);
		cell.title = blockName;
		return cell;
	},
	//Adds a new row to the exterior grid
	addRowToExteriorGrid: function() {
		if(this.exteriorGridBounds.height < this.maxExteriorHeight || this.ignoreExteriorMax === true) {
			var documentFragment = document.createDocumentFragment();
			var newZ = this.exteriorGridBounds.height;
			var cell;
			for(var x = 0; x < this.exteriorGridBounds.width; x++) {
				cell = this.generateExteriorCell(newZ, x);
				cell = this.checkExteriorCell(newZ, x, cell);
				documentFragment.appendChild(cell);
			}
			this.exteriorGrid.insertBefore(documentFragment, this.exteriorGrid.firstElementChild);
			this.exteriorGridBounds.height = newZ + 1;
			this.updateExteriorGridRowsColumns(this.exteriorGridBounds.height, this.exteriorGridBounds.width);
		}
	},
	//Adds new columns to the exterior grid
	addColumnsToExteriorGrid: function() {
		if(this.exteriorGridBounds.width < this.maxExteriorWidth || this.ignoreExteriorMax === true) {
			var targetX = this.exteriorGridBounds.width - 1;
			var newX = this.exteriorGridBounds.width;
			var cell, targetCell;
			for(var z = 0; z < this.exteriorGridBounds.height; z++) {
				targetCell = document.getElementById(this.getExteriorCellId(z, targetX));
				cell = this.generateExteriorCell(z, newX);
				cell = this.checkExteriorCell(z, newX, cell);
				targetCell.parentNode.insertBefore(cell, targetCell.nextElementSibling);
			}
			this.exteriorGridBounds.width = newX + 1;
			this.updateExteriorGridRowsColumns(this.exteriorGridBounds.height, this.exteriorGridBounds.width);
		}
	},
	//Removes a row from the exterior grid
	removeRowFromExteriorGrid: function() {

		if(this.exteriorGridBounds.height == 1) {
			alert('You can not remove the row');
			return false;
		}

		var row = prompt('Please enter the row number that you want to remove (1-' + this.exteriorGridBounds.height,'');
		if(row !== null) {
			row = parseInt(row,10);
			if(row < 1 || row > this.exteriorGridBounds.height) {
				alert('Row number ' + row.toString() + ' is out of bounds');
				return false;
			}
			var index = row - 1;
			var cell;
			for(var x = 0; x < this.exteriorGridBounds.width; x++) {
				cell = document.getElementById(this.getExteriorCellId(index, x));
				cell.parentNode.removeChild(cell);
			}
			this.exteriorGridBounds.height = this.exteriorGridBounds.height - 1;
			this.updateExteriorGridRowsColumns(this.exteriorGridBounds.height, this.exteriorGridBounds.width);
			this.updateExteriorCellIds();
		}
	},
	//Removes columns from the exterior grid
	removeColumnsFromExteriorGrid: function() {

		if(this.exteriorGridBounds.width == 1) {
			alert('You can not remove the column');
			return false;
		}

		var column = prompt('Please enter the column number that you want to remove (1-' + this.exteriorGridBounds.width,'');
		if(column !== null) {
			column = parseInt(column, 10);
			if(column < 1 || column > this.exteriorGridBounds.width) {
				alert('Column number ' + column.toString() + ' is out of bounds');
				return false;
			}
			var index = column - 1;
			var cell;
			for(var z = 0; z < this.exteriorGridBounds.height; z++) {
				cell = document.getElementById(this.getExteriorCellId(z, index));
				cell.parentNode.removeChild(cell);
			}
			this.exteriorGridBounds.width = this.exteriorGridBounds.width - 1;
			this.updateExteriorGridRowsColumns(this.exteriorGridBounds.height, this.exteriorGridBounds.width);
			this.updateExteriorCellIds();
		}
	},
	//Re-assigns exterior cell ids for proper indexation, called after removing rows or columns
	updateExteriorCellIds: function() {
		console.log('updating cell ids');
		var cells = this.exteriorGrid.querySelectorAll('.cell');
		var z, x, id, select, row, index;
		for(z = (this.exteriorGridBounds.height - 1); z >= 0; z--) {
			for(x = 0; x < this.exteriorGridBounds.width; x++) {
				index = (z * this.exteriorGridBounds.width) + x;
				//for(z = 0; z < this.exteriorGridBounds.height; z++) {
				//for(x = 0; x < this.exteriorGridBounds.width; x++) {
				//index = z + x;
				row = (this.exteriorGridBounds.height - 1) - z;
				id = this.getExteriorCellId(row, x);
				console.log('Index : ' + index.toString());
				console.log(cells[index].id + ' - ' + id);
				//console.log('Row ' + row.toString() + ' - column: ' + x.toString());

				cells[index].id = id;
				select = cells[index].getElementsByTagName('SELECT');
				if(select.length > 0) {
					select[0].id = 'select_' + id;
					select[0].name = 'select_' + id;
					select[0].setAttribute('data-z', row.toString());
					select[0].setAttribute('data-x', x.toString());
				}
			}
		}
	},
	//Sets the grid layout, called after generating grid and adding / removing rows or columns
	updateExteriorGridRowsColumns: function(height, width) {
		var rowsClass = 'rows-' + height.toString();
		var columnsClass = 'columns-' + width.toString();
		this.exteriorGrid.className = rowsClass + ' ' + columnsClass;
	},

	//Generates the dungeon grid
	generateDungeonGrid: function() {
		var documentFragment = document.createDocumentFragment();
		var cell, cellTitle;
		for(var i = this.dungeonGridBounds.maxZ; i >= this.dungeonGridBounds.minZ; i--) {
			for(var j = this.dungeonGridBounds.minX; j <= this.dungeonGridBounds.maxX; j++) {
				cell = this.generateDungeonCell(i, j);
				documentFragment.appendChild(cell);
			}
		}

		if(this.clearGrid('dungeon')) {
			this.updateDungeonGridRowsColumns();
			this.dungeonGrid.appendChild(documentFragment);
		}
	},
	//Generates a dungeon grid cell
	generateDungeonCell: function(z, x) {
		var cell = document.createElement('div');
		cell.className = 'cell';
		var cellTitle = document.createElement('div');
		cellTitle.innerHTML = 'Z: ' + z.toString() + ', X:' + x.toString();
		cellTitle.className = 'cell-coordinates';
		cell.appendChild(cellTitle);
		cell.id = this.getDungeonCellId(z, x);
		return cell;
	},
	//Generates a dungeon grid cell dropdown list with available dungeon blocks
	generateDungeonGridDropdown: function(z, x, value) {
		var options = this.generateBlockOptions(this.dungeonBlocks, 7);
		var select = document.createElement('select');
		var id = 'select_dungeon_cell_' + z.toString() + '_' + x.toString();
		select.id = id;
		select.name = id;
		select.setAttribute('data-z',z);
		select.setAttribute('data-x',x);
		select.appendChild(options);
		select.value = value;
		return select;
	},
	//Generates a dungeon grid cell radio button to indicate starting block
	generateDungeonGridStartChoice: function(z, x, isStart, blockName) {
		var div = document.createElement('div');
		var id = 'startblock-yes_' + z.toString() + '_' + x.toString();

		var label = document.createElement('label');
		label.for = id;

		var span = document.createElement('span');
		span.innerHTML = 'Start here';
		label.appendChild(span);

		var input = document.createElement('input');
		input.id = id;
		input.type = 'radio';
		input.name = 'isStartBlock';
		input.value = 'true';
		if(isStart) {
			if(this.allowDungeonBlockStart(blockName)) {
				input.checked = 'checked';
			} else {
				console.log('Invalid starting block detected: ' + blockName + ' (Offset: ' + z + ', ' + x + ')');
			}
		} else if(!this.allowDungeonBlockStart(blockName)) {
			input.disabled = 'disabled';
		}

		label.appendChild(input);
		div.appendChild(label);

		return div;
	},
	//Matches value with blocks that are allowed as starting block
	allowDungeonBlockStart: function(blockName) {
		if(blockName.match(/[MNSW][0-9]{7}/) !== null) {
			return true;
		}
		return false;
	},
	//Return a dungeon cell id for a z, x coordinate
	getDungeonCellId: function(z, x) {
		return 'dungeon_cell_' + z.toString() + '_' + x.toString();
	},
	//Sets the block image for a dungeon cell
	setDungeonCellImage: function(cell, blockName) {
		var img;
		img = cell.getElementsByTagName('IMG');
		if(img.length == 0) {
			img = document.createElement('img');
		} else {
			img = img[0];
		}
		img.src = 'images/RDB/' + blockName + '.RDB.png';
		cell.appendChild(img);
		return cell;
	},
	//Check adjacent cells for a new dungeon cell
	checkDungeonCellBorders: function(z, x) {
		var newX, newZ;
		newZ = z - 1;
		this.checkDungeonCell(newZ, x);
		newZ = z + 1;
		this.checkDungeonCell(newZ, x);
		newX = x - 1;
		this.checkDungeonCell(z, newX);
		newX = x + 1;
		this.checkDungeonCell(z, newX);
	},
	//Adds missing border cell to keep dungeon 'airtight'
	checkDungeonCell: function(z, x) {
		var blockName = 'B0000001';
		var el = document.getElementById('select_' + this.getDungeonCellId(z, x));
		if(!el) {
			el = document.getElementById(this.getDungeonCellId(z, x));
			if(el) {
				var select = this.generateDungeonGridDropdown(z, x, blockName);
				el.appendChild(select);
				var radio = this.generateDungeonGridStartChoice(z, x, false, blockName);
				el.appendChild(radio);
				el = this.setDungeonCellImage(el, blockName);
			}
		}
	},
	//Adds new columns to the dungeon grid
	addColumnsToDungeonGrid: function(z) {
		var targetZ, insertAfter;
		if(z < this.dungeonGridBounds.minZ) {
			this.dungeonGridBounds.minZ = z;
			targetZ = z + 1;
			insertAfter = true;
		} else if(z > this.dungeonGridBounds.maxZ) {
			this.dungeonGridBounds.maxZ = z;
			targetZ = z - 1;
			insertAfter = false;
		}
		var cell, target, documentFragment;
		documentFragment = document.createDocumentFragment();
		for(var i = this.dungeonGridBounds.minX; i <= this.dungeonGridBounds.maxX; i++) {
			cell = this.generateDungeonCell(z, i);
			documentFragment.appendChild(cell);
		}
		if(insertAfter) {
			this.dungeonGrid.appendChild(documentFragment);
		} else {
			target = document.getElementById(this.getDungeonCellId(targetZ, this.dungeonGridBounds.minX));
			target.parentNode.insertBefore(documentFragment, target);
		}
		this.updateDungeonGridRowsColumns();
	},
	//Adds a new row to the dungeon grid
	addRowToDungeonGrid: function(x) {
		var targetX, insertAfter;
		if(x < this.dungeonGridBounds.minX) {
			this.dungeonGridBounds.minX = x;
			targetX = x + 1;
			insertAfter = false;
		} else if(x > this.dungeonGridBounds.maxX) {
			this.dungeonGridBounds.maxX = x;
			targetX = x - 1;
			insertAfter = true;
		}
		var cell, target;
		for(var i = this.dungeonGridBounds.maxZ; i >= this.dungeonGridBounds.minZ; i--) {
			cell = this.generateDungeonCell(i, x);
			target = document.getElementById(this.getDungeonCellId(i, targetX));
			if(insertAfter === true) {
				target.parentNode.insertBefore(cell, target.nextElementSibling);
			} else {
				target.parentNode.insertBefore(cell, target);
			}
		}
		this.updateDungeonGridRowsColumns();
	},
	//Sets the grid layout, called after generating a grid and adding a row or columns
	updateDungeonGridRowsColumns: function() {
		var rowsClass = 'rows-' + this.calculateSize(this.dungeonGridBounds.maxZ, this.dungeonGridBounds.minZ).toString();
		var columnsClass = 'columns-' + this.calculateSize(this.dungeonGridBounds.maxX, this.dungeonGridBounds.minX).toString();
		this.dungeonGrid.className = rowsClass + ' ' + columnsClass;
	},
	//Determines the min and max boundaries for the dungeon grid
	getGridBoundariesFromBlocks: function(blocks) {
		var minX, maxX, minZ, maxZ, index;
		minX = 0; maxX = 0; minZ = 0; maxZ = 0;
		for(index = 0; index < blocks.length; index++) {
			if(blocks[index].X < minX) {
				minX = blocks[index].X;
			}
			if(blocks[index].X > maxX) {
				maxX = blocks[index].X;
			}
			if(blocks[index].Z < minZ) {
				minZ = blocks[index].Z;
			}
			if(blocks[index].Z > maxZ) {
				maxZ = blocks[index].Z;
			}
		}
		return {
			minX: minX,
			maxX: maxX,
			minZ: minZ,
			maxZ: maxZ
		}
	},

	//Clear the exterior or dungeon grid
	clearGrid: function(type) {
		if(type == 'dungeon') {
			return this.clearChildren(this.dungeonGrid);
		} else if(type == 'exterior') {
			return this.clearChildren(this.exteriorGrid);
		}
	},

	//Loads the JSON file the user has specified
	loadJSON: function () {
		event.preventDefault();
		event.stopPropagation();
		if(this.fileInput.files.length == 0) {
			alert('Please select a location JSON file to load');
			return false;
		}
		// Check for the various File API support.
		if (window.File && window.FileReader && window.FileList && window.Blob) {
			var file = this.fileInput.files[0];
			if(file) {
				var fr = new FileReader();
				fr.onload = function(e) {
					var output = document.querySelector('#output');
					var text = e.target.result;
					this.processJSON(text);
				}.bind(this);
				fr.readAsText(file);
			}
		} else {
			alert('FileReader is not supported by your browser.');
		}
	},
	//Processes the loaded JSON
	processJSON: function(location) {
		this.original = JSON.parse(location);
		this.newJSON = JSON.parse(location);

		//console.log(this.original);
		var mapId = [];
		var matches = this.original.Exterior.ExteriorData.MapId.toString().match(/(\d{1,3})(\d{3})/);
		if(matches.length < 3) {
			alert('Error: could convert map id to coordinates');
			return false;
		}
		mapId[0] = parseInt(matches[1], 10);
		mapId[1] = parseInt(matches[2], 10);
		this.original.mapId = mapId;
		this.form.locationName.value = this.original.Name;
		this.form.locationId.value = this.original.Exterior.RecordElement.Header.LocationId;
		this.form.mapY.value = this.original.mapId[0];
		this.form.mapX.value = this.original.mapId[1];
		this.form.locationType.value = this.original.MapTableData.LocationType;

		if(this.handleLocationTypeChange()) {
			//this.form.exteriorBlock.value = this.original.Exterior.ExteriorData.BlockNames[0].replace('.RMB', '');

			this.form.dungeonType.value = this.original.MapTableData.DungeonType;
			if(this.handleDungeonTypeChange()) {

			}
		}

		this.generateExteriorGrid();
		var exteriorBlocks = this.original.Exterior.ExteriorData.BlockNames;
		var index, span, cell, blockName;
		for(var height = (this.original.Exterior.ExteriorData.Height - 1); height >= 0; height--) {
			for(var width = 0; width < this.original.Exterior.ExteriorData.Width; width++) {
				index = (height * this.original.Exterior.ExteriorData.Width) + width;

				span = document.createElement('span');
				blockName = exteriorBlocks[index].replace('.RMB','');
				cell = document.getElementById(this.getExteriorCellId(height, width));
				cell.setAttribute('data-blockname',blockName);
				cell.title = blockName;
				select = this.generateExteriorGridDropdown(height, width, blockName);
				cell.appendChild(select);
				cell = this.setExteriorCellImage(cell, blockName);
			}
		}

		var dungeonBlocks = this.original.Dungeon.Blocks;
		var startingBlock = '';
		if(dungeonBlocks !== null) {
			this.dungeonGridBounds = this.getGridBoundariesFromBlocks(dungeonBlocks);
			this.generateDungeonGrid();

			var select, value, radio, img;

			for (index = 0; index < dungeonBlocks.length; index++) {
				cell = document.getElementById(this.getDungeonCellId(dungeonBlocks[index].Z,dungeonBlocks[index].X));
				value = dungeonBlocks[index].BlockName.replace('.RDB', '');
				select = this.generateDungeonGridDropdown(dungeonBlocks[index].Z, dungeonBlocks[index].X, value);
				radio = this.generateDungeonGridStartChoice(dungeonBlocks[index].Z, dungeonBlocks[index].X, dungeonBlocks[index].IsStartingBlock, value);
				cell.appendChild(select);
				cell.appendChild(radio);
				cell = this.setDungeonCellImage(cell, dungeonBlocks[index].BlockName.replace('.RDB',''));
				if (dungeonBlocks[index].IsStartingBlock == true) {
					startingBlock = dungeonBlocks[index].BlockName.replace('.RDB', '');
				}
			}
			if(startingBlock == '') {
				alert('Error: Unable to find starting dungeon block');
			}
		}
	},
	//Generates a new location JSON object and prints output in the results textarea
	generateJSON: function(event) {
		event.preventDefault();
		event.stopPropagation();

		this.error = false;
		this.errors = [];

		var mapX, mapY;
		mapX = parseInt(this.form.mapX.value,10);
		if(mapX < 0 || mapX > this.mapMaxX) {
			this.addError('Map coordinate X should be between 0 and ' + this.mapMaxX);
			this.error = true;
		}
		mapY = parseInt(this.form.mapY.value,10);
		if(mapY < 0 || mapY > this.mapMaxY) {
			this.addError('Map coordinate Y should be between 0 and ' + this.mapMaxY);
			this.error = true;
		}

		var type = this.form.location.value;
		if(type != 'new' && type != 'existing') {
			this.addError('Please select \'New\' or \'Existing\' location.');
			this.error = true;
		}
		if(type == 'new') {
			if(mapX == this.original.mapId[1] && mapY == this.original.mapId[0]) {
				this.addError('The Map pixel X and Y can not be at the same location as the original JSON');
				this.error = true;
			}
		}

		this.setMapId(type, mapX, mapY);

		this.setLocationIndex(type);
		this.setLocationId(type);
		this.setName(type);
		this.setLocationType(type);
		this.setDungeonType(type);
		this.setExteriorBlocks(type);

		this.deleteDungeonHeader(type);

		if(this.newJSON.MapTableData.DungeonType == this.noDungeonType) {
			this.clearDungeonBlock();
		} else {
			this.setDungeonBlocks(type);
		}

		this.setLatLong(type, mapX, mapY);
		this.setWorldCoordinates(type, mapX, mapY);

		var text;
		if(this.error) {
			text = this.errors.join("\n");
		} else {
			console.log(this.newJSON);
			text = JSON.stringify(this.newJSON, null, "\t");
		}
		document.getElementById('dfu-worlddata-result').innerHTML = text;
		return true;
	},
	//Adds messages for errors encountered while generating the new location JSON object
	addError: function(message) {
		this.errors[this.errors.length] = message;
	},

	//Methods to set the various values for the new location JSON object
	setLocationIndex: function(type) {
		if(type == 'new') {
			this.newJSON.Exterior.RecordElement.Header.Unknown2 = 0;
			this.newJSON.LocationIndex = 0;
		} else {
			this.newJSON.Exterior.RecordElement.Header.Unknown2 = this.original.Exterior.RecordElement.Header.Unknown2;
			this.newJSON.LocationIndex = this.original.LocationIndex;
		}
	},
	setLocationId: function(type) {
		if(type == 'new') {
			if(this.form.locationId.value == '') {
				this.addError('Please enter an location id');
				this.error = true;
				return false;
			}
			var locationId = parseInt(this.form.locationId.value);
			if(locationId < this.minLocationId || locationId > this.maxLocationId) {
				this.addError('Location ID should be between ' + this.minLocationId + ' and ' + this.maxLocationId);
				this.error = true;
				return false;
			} else if(locationId == this.original.Exterior.RecordElement.Header.LocationId) {
				this.addError('Location ID for an new location can not be the same as the original location!');
				this.error = true;
				return false;
			}
			this.newJSON.Exterior.RecordElement.Header.LocationId = locationId;
			this.newJSON.Exterior.ExteriorData.LocationId = locationId;
			this.newJSON.Dungeon.RecordElement.Header.LocationId = locationId + 1;
			this.newJSON.Dungeon.RecordElement.Header.ExteriorLocationId = locationId;
		} else {
			this.newJSON.Exterior.RecordElement.Header.LocationId = this.original.Exterior.RecordElement.Header.LocationId;
			this.newJSON.Exterior.ExteriorData.LocationId = this.original.Exterior.ExteriorData.LocationId;
			this.newJSON.Dungeon.RecordElement.Header.LocationId = this.original.Dungeon.RecordElement.Header.LocationId;
			this.newJSON.Dungeon.RecordElement.Header.ExteriorLocationId = this.original.Dungeon.RecordElement.Header.ExteriorLocationId;
		}
	},
	setName: function(type) {
		var name = this.form.locationName.value;
		if(name == '') {
			name = prompt('Please enter a location name or leave blank to use the original name','Missing Location name');
			if(name == '') {
				name = this.original.Name;
			}
			this.form.locationName.value = name;
		}
		this.newJSON.Name = name;
		this.newJSON.Exterior.RecordElement.Header.LocationName = name;
		this.newJSON.Exterior.ExteriorData.AnotherName = name;
		this.newJSON.Dungeon.RecordElement.Header.LocationName = name;
	},
	setMapId: function(type, mapX, mapY) {
		if(type == 'new') {
			var mapId = this.calculateMapId(mapX, mapY);
			this.newJSON.MapTableData.MapId = mapId;
			this.newJSON.Exterior.ExteriorData.MapId = mapId;
		} else {
			this.newJSON.MapTableData.MapId = this.original.MapTableData.MapId;
			this.newJSON.Exterior.ExteriorData.MapId = this.original.Exterior.ExteriorData.MapId;
		}
	},
	setLatLong: function(type, mapX, mapY) {
		if(type == 'new') {
			var latitude = this.calculateLatitude(mapY);
			var longitude = this.calculateLongitude(mapX);

			this.newJSON.MapTableData.Latitude = latitude;
			this.newJSON.MapTableData.Longitude = longitude;
		} else {
			this.newJSON.MapTableData.Latitude = this.original.MapTableData.Latitude;
			this.newJSON.MapTableData.Longitude = this.original.MapTableData.Longitude;
		}
	},
	setLocationType: function(type) {
		if(this.form.locationType.value == '') {
			this.addError('Please choose a location type');
			this.error = true;
			return false;
		}
		this.newJSON.MapTableData.LocationType = this.form.locationType.value;
	},
	setDungeonType: function(type) {
		if(this.form.dungeonType.value == '') {
			this.addError('Please choose a dungeon type');
			this.error = true;
			return false;
		}
		this.newJSON.MapTableData.DungeonType = this.form.dungeonType.value;
	},
	setWorldCoordinates: function(type, mapX, mapY) {
		if(type == 'new') {
			var worldX, worldY;
			worldX = this.calculateWorldCoordinateX(mapX);
			worldY = this.calculateWorldCoordinateY(mapY);

			this.newJSON.Exterior.RecordElement.Header.X = worldX;
			this.newJSON.Exterior.RecordElement.Header.Y = worldY;
			this.newJSON.Dungeon.RecordElement.Header.X = worldX;
			this.newJSON.Dungeon.RecordElement.Header.Y = worldY;
		} else {
			this.newJSON.Exterior.RecordElement.Header.X = this.original.Exterior.RecordElement.Header.X;
			this.newJSON.Exterior.RecordElement.Header.Y = this.original.Exterior.RecordElement.Header.Y;
			this.newJSON.Dungeon.RecordElement.Header.X = this.original.Dungeon.RecordElement.Header.X;
			this.newJSON.Dungeon.RecordElement.Header.Y = this.original.Dungeon.RecordElement.Header.Y;
		}
	},
	setExteriorBlocks: function(type) {
		var exteriorBlockCells = this.exteriorGrid.querySelectorAll('.cell');
		if(exteriorBlockCells.length == 0) {
			this.addError('Please add one or more exterior blocks');
			this.error = true;
			return false;
		}
		var blockName;
		var blockNames = [];

		var index;
		var width = this.exteriorGridBounds.width;
		var height = this.exteriorGridBounds.height;

		if(type == 'new') {
			var buildings = [];
			var b, building, seed, sector;
			for (var h = (height - 1); h >= 0; h--) {
				for (var w = 0; w < width; w++) {
					index = (h * width) + w;
					blockName = exteriorBlockCells[index].getAttribute('data-blockname');
					if(this.blockBuildings[blockName] && 2 == 2) {
						for (b = 0; b < this.blockBuildings[blockName].length; b++) {
							building = this.blockBuildings[blockName][b];
							seed = parseInt(this.newJSON.Exterior.RecordElement.Header.LocationId, 10) + (h * 100) + (w * 10) + b;
							sector = (h * 100) + (w * 10) + b;
							building.NameSeed = seed;
							//building.FactionId = 0;
							building.Sector = sector;
							building.LocationId = this.newJSON.Exterior.ExteriorData.LocationId;
							buildings[buildings.length] = building;
						}
					} else {
						console.log("Ignoring exterior block: " + blockName + " - no building data available");
						//this.error = true;
						//return false;
						//buildings = this.copyBuildings(this.original);
					}
					blockNames[blockNames.length] = blockName + '.RMB';
				}
			}
			this.newJSON.Exterior.Buildings = buildings;
		} else {
			this.newJSON.Exterior.Buildings = this.copyBuildings(this.original);
		}
		this.newJSON.Exterior.BuildingCount = this.newJSON.Exterior.Buildings.length;
		this.newJSON.Exterior.ExteriorData.Width = width;
		this.newJSON.Exterior.ExteriorData.Height = height;
		this.newJSON.Exterior.ExteriorData.BlockNames = blockNames;
	},
	copyBuildings: function(originalBuildings) {
		var buildings = [];
		for(var i = 0; i < originalBuildings.length; i++) {
			buildings[i] =             {
				"NameSeed": originalBuildings[i].NameSeed,
				"FactionId": originalBuildings[i].FactionId,
				"Sector": originalBuildings[i].Sector,
				"LocationId": originalBuildings[i].LocationId,
				"BuildingType": originalBuildings[i].BuildingType,
				"Quality": originalBuildings[i].Quality
			};
		}
		return buildings;
	},
	setDungeonBlocks: function(type) {
		var dungeonBlocks = [];
		if(type == 'new' || 2 == 2) {
			var dungeonBlock, select, radio, i, x, z, startingBlock, originX, originZ;
			var cells = document.querySelectorAll('#dfu-worlddata-dungeonblock-grid .cell');
			for (i = 0; i < cells.length; i++) {
				select = cells[i].querySelector('select');
				if (select) {
					radio = cells[i].querySelector('input[type=radio]');
					x = parseInt(select.getAttribute('data-x'), 10);
					z = parseInt(select.getAttribute('data-z'), 10);
					startingBlock = radio.checked;
					if(startingBlock) {
						originX = x;
						originZ = z;
					}
					dungeonBlock = {
						"X": x,
						"Z": z,
						"IsStartingBlock": startingBlock,
						"BlockName": select.value + ".RDB",
						"WaterLevel": 0,
						"CastleBlock": false
					};
					dungeonBlocks[dungeonBlocks.length] = dungeonBlock;
				}
			}
			//Re-order the block offsets to make the starting block 0,0
			if(originX !== 0 || originZ !== 0) {
				for(i = 0; i < dungeonBlocks.length; i++) {
					dungeonBlocks[i].X = dungeonBlocks[i].X - originX;
					dungeonBlocks[i].Z = dungeonBlocks[i].Z - originZ;
				}
			}
		} else {
			dungeonBlocks = this.original.Dungeon.Blocks;
		}
		this.newJSON.Dungeon.Header.BlockCount = dungeonBlocks.length;
		this.newJSON.Dungeon.Blocks = dungeonBlocks;
	},
	clearDungeonBlock: function() {
		this.newJSON.Dungeon.Header.BlockCount = 0;
		this.newJSON.Dungeon.Blocks = null;
	},
	deleteDungeonHeader: function(type) {
		//delete this.newJSON.Dungeon.Header;
	},

	//Methods to calculate various values
	calculateMapId: function(mapX, mapY) {
		return ((mapY * 1000) + mapX);
	},
	calculateLatitude: function(mapY) {
		return ((this.mapMaxY - mapY) * this.latLongMultiplier);
	},
	calculateLongitude: function(mapX) {
		return (mapX * this.latLongMultiplier);
	},
	calculateWorldCoordinateY: function(mapY) {
		return ((this.mapMaxY - mapY) * this.worldCoordinateMultiplier);
	},
	calculateWorldCoordinateX: function(mapX) {
		return (mapX * this.worldCoordinateMultiplier);
	},
	calculateSize: function(maxZ, minZ) {
		return ((maxZ - minZ) + 1);
	},

	//Helper methods to handle DOM element creation and removal
	populateList: function(el, type) {
		var options;
		if(type == 'locationType') {
			options = this.generateTypeOptions(this.locationTypes);
		} else if(type == 'dungeonType') {
			options = this.generateTypeOptions(this.dungeonTypes);
		} else if(type == 'exteriorLocationBlocks') {
			options = this.generateBlockOptions(this.exteriorLocationBlocks, 2);
		} else if(type == 'exteriorDungeonBlocks') {
			options = this.generateBlockOptions(this.exteriorDungeonBlocks, 2);
		} else if(type == 'dungeonBlock') {
			options = this.generateBlockOptions(this.dungeonBlocks, 7);
		}
		if(this.clearChildren(el)) {
			el.appendChild(options);
		}
	},
	clearChildren: function(el) {
		while (el.firstChild) {
			el.removeChild(el.firstChild);
		}
		return true;
	},
	generateTypeOptions: function(types) {
		var documentFragment, index, option;
		documentFragment = document.createDocumentFragment();
		option = document.createElement('option');
		option.innerHTML = 'Please choose a type';
		option.value = '';
		documentFragment.appendChild(option);
		for(index = 0; index < types.length; index++) {
			option = document.createElement('option');
			option.value = types[index].value;
			option.innerHTML = types[index].label;
			documentFragment.appendChild(option);
		}
		return documentFragment;
	},
	generateBlockNames: function(blocks, padLength, addRMB, addLabel) {
		var index, count, blockGroups, blockNames, name;
		if(addLabel) {
			blockGroups = [];
		}
		blockNames = [];
		for(index = 0; index < blocks.length; index++) {
			if(blocks[index].count > 1) {
				for(count = blocks[index].start; count <= blocks[index].end; count++) {
					name = this.generateBlockName(blocks[index].name, count, padLength);
					if(addRMB) {
						name += '.RMB';
					}
					blockNames[blockNames.length] =  name;
				}
			} else {
				name = blocks[index].value;
				if(addRMB) {
					name += '.RMB';
				}
				blockNames[blockNames.length] = name;
			}
			if(addLabel) {
				blockGroups[blockGroups.length] = {
					label: blocks[index].label,
					blockNames: blockNames
				};
				blockNames = [];
			}
		}
		if(addLabel) {
			return blockGroups;
		}
		return blockNames;
	},
	generateBlockName: function(name, count, padLength) {
		var blockName = name + count.toString().padStart(padLength,'0');
		return blockName;
	},
	generateBlockOptions: function(blocks, padLength) {
		var names = [];
		var documentFragment = document.createDocumentFragment();
		var index, count, optionGroup, option, optionName;
		option = document.createElement('option');
		option.innerHTML = 'Please choose a block';
		option.value = '';
		documentFragment.appendChild(option);
		for(index = 0; index < blocks.length; index++) {
			optionGroup = document.createElement('optgroup');
			optionGroup.label = blocks[index].label;
			if(blocks[index].count > 1) {
				for(count = blocks[index].start; count <= blocks[index].end; count++) {
					optionName = this.generateBlockName(blocks[index].name, count, padLength);
					//optionName = blocks[index].name + count.toString().padStart(padLength,'0');
					option = document.createElement('option');
					option.innerHTML = optionName;
					option.value = optionName;
					optionGroup.appendChild(option);
					names[names.length] = optionName;
				}
			} else {
				optionName = blocks[index].value;
				names[names.length] = optionName;
				option = document.createElement('option');
				option.innerHTML = optionName;
				option.value = optionName;
				optionGroup.appendChild(option);
			}
			documentFragment.appendChild(optionGroup);
		}
		return documentFragment;
	}
};
document.addEventListener('DOMContentLoaded', function(event) {
	dfuWorldDataEditor.init();
});