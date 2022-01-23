/*

copy location-17-1004.json .\test
copy location-17-1049.json .\test
copy location-17-1105.json .\test
copy location-17-1137.json .\test
copy location-17-115.json .\test
copy location-17-1220.json .\test
copy location-17-123.json .\test
copy location-17-126.json .\test
copy location-17-1298.json .\test
copy location-17-171.json .\test
copy location-17-295.json .\test
copy location-17-354.json .\test
copy location-17-370.json .\test
copy location-17-371.json .\test
copy location-17-396.json .\test
copy location-17-433.json .\test
copy location-17-514.json .\test
copy location-17-546.json .\test
copy location-17-55.json .\test
copy location-17-562.json .\test
copy location-17-568.json .\test
copy location-17-574.json .\test
copy location-17-582.json .\test
copy location-17-61.json .\test
copy location-17-627.json .\test
copy location-17-651.json .\test
copy location-17-717.json .\test
copy location-17-742.json .\test
copy location-17-769.json .\test
copy location-17-820.json .\test
copy location-17-829.json .\test
copy location-17-895.json .\test
copy location-17-925.json .\test
copy location-17-943.json .\test


 */


var check = [
	"The Wicksley Graveyard",
	"The Woodwing Graveyard",
	"The Copperston Crypts",
	"The Copperston Vaults",
	"The Moorfield Cemetery",
	"The Coppersly Graveyard",
	"The Gaerton Graveyard",
	"The Crypts of Yeomhouse",
	"The Moorfield Cemetery",
	"The Ashford Graveyard",
	"The Hearthhart Graveyard",
	"The Crypts of Wickfield",
	"The Wicksly Tombs",
	"The Mastersmith Vaults",
	"The Wickston Tombs",
	"The Copperwing Vaults",
	"The Ashhart Tombs",
	"The Yeomston Graveyard",
	"The Gaerfield Graveyard",
	"The Gaerham Graveyard",
	"The Wicksly Burial Ground",
	"THe Crypts of Wickfield *",
	"The Coppersmith Graveyard",
	"The Gaerhart Vaults",
	"The Buckingwing Graveyard",
	"The Graves of Copperfield",
	"The Gaerford Tombs",
	"The Yeomston Cemetery",
	"The Tombs of Hearthston",
	"The Yeomfield Burial Ground",
	"The Woodcroft Burial Ground",
	"The Graves of Wickham",
	"The Masterfield Cemetery",
	"THe Crypts of Buckingsmith",
	"The Tombs of Woodsmith",
	"The Copperfield Cemetery",
	"The Yeomston Cemetery",
	"The Gaerford Tombs",
	"The Graves of Copperfield",
	"The Graves of Buckingham",
	"The Buckington Cemetery",
	"The Mastersly Vaults",
	"Ruins of Wickston Manor",
	"The Yeomston Vaults"
];

//console.log(dfLocations[j].name + ': ' + check.indexOf(dfLocations[j].name));
if(check.indexOf(dfLocations[j].name) === -1) {
	continue;
} else {
	//if(dfLocations[j].HasDungeon === true) {
	console.log(dfLocations[j].name);
	console.log(dfLocations[j].HasDungeon);
	console.log(dfLocations[j].MapTableData.LocationType);
	console.log(dfLocations[j].MapTableData.DungeonType);
	console.log(dfLocations[j].MapTableData.Discovered);
	console.log('-------------------------------------');
	//} else {
	//continue;
	//}
}