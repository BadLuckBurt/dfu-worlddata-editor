# Daggerfall Unity World Data Editor User Guide

## Introduction

This is a guide on how to use the Daggerfall Unity World Data Editor that lets you create new and modify existing locations in Daggerfall Unity.

## Primer

It might be useful to familiarize yourself with how locations in classic Daggerfall are defined, the links in this section will help you to do so.

When you dump a location from Daggerfall Unity using the `dumplocation` console command, you will find the same overall structure in the JSON as described on the pages linked below.

**Locations**

- [MAPS.BSA](https://en.uesp.net/wiki/Daggerfall:MAPS.BSA)
- [Region Numbers](https://en.uesp.net/wiki/Daggerfall:Region\_Numbers)

**Location types**

- [Location Types](https://en.uesp.net/wiki/Daggerfall:Location_types)

**Location blocks (RMB)**

- [Map Block Records](https://en.uesp.net/wiki/Daggerfall:BLOCKS.BSA/Map\_Block\_Records)

**Dungeon types**

- [Dungeon Types](https://en.uesp.net/wiki/Daggerfall:Dungeons#Dungeon_Types)

**Dungeon blocks (RDB)**

- [Dungeon Block Records](https://en.uesp.net/wiki/Daggerfall:BLOCKS.BSA/Dungeon\_Block\_Records)

## Usage

### Creating a new location

#### Step 1 - Find the map coordinates

When you are standing in the spot where you would like to create a new location, open up the console and run the `tdbg` command. This will show some debug information including two numbers that will look something like this: [235, 48]. Write these two numbers down.

These numbers are called map pixel coordinates, the first one is the X-coordinate, the second is the Y-coordinate. 

#### Step 2 - Find an existing location to clone

Next, you will need a location dump to act as a base for the new location you are creating. 

To get this dump, go to the location you want to clone, open up the console and run the `dumplocation` command. 

This will produce a JSON file in Daggerfall Unity's Persistent Data folder with a filename that looks like this: `location-<region-id>-<location-id>.json`.

The region id is one of the ids that are listed on the Region Numbers page linked in the Primer section. Use a location from the same region that you are creating the new location in.

#### Step 3 - Editing the location

Once you have the map pixel coordinates for the new location and the JSON dump, open `dfu-worlddata-editor.html` in your browser.

#### Step 4 - Load Location JSON

Select the JSON file you dumped in step 2 using the file upload field
Click the `Load JSON` button

#### Step 5 - Settings: New / Existing location

Select `New location`

#### Step 6 - Map pixels

By default, the map pixels of the location you loaded in are shown here.

Change the X and Y values to the map pixel coordinates that you got in step 1

#### Step 7 - Location Name / ID

By default, the name and location ID of the location you loaded in are shown here.

The location name can be anything you like but you should probably make sure it's unique. 

The location ID is a bit trickier as it needs to be unique but there is no way to assign it automatically. Hazelnut has a thread that keeps track of location IDs that are in use: [Mod Authors - Resource Register](https://forums.dfworkshop.net/viewtopic.php?f=27&t=3023)

Please register your location IDs in that thread to allow other modders to check for possible conflicts.

#### Step 8 - Location / dungeon types

`Location type` determines the colour of the pixel that is shown on the Travel map, you can find the available types and their corresponding map pixel colour on the **Location Types** page linked in the **Primer**.

`Dungeon type` determines the kind of enemies that will spawn in the location's dungeon if it has one. It also determines the message a player sees when they enter the location. For the available types you can look on the **Dungeon Type** page linked in the **Primer**.

#### Step 9 - Exterior / dungeon 

##### Exterior block grid

The exterior block grid shows the layout of RMB blocks present in the location you chose. The maximum size for an exterior block grid is 8x8 blocks.

Using the `Add row` and `Add column` buttons you can add extra rows and columns to the grid to expand the size of your location. Rows are added to the top of the grid, columns are added to the right hand side.

Using the `Delete row` and `Delete column` buttons you can remove rows or columns to shrink the size of your location. You will be asked to enter the number of the row or column you wish to delete.

Below these buttons you will find a categorized list that contains all the available RMB blocks. Clicking on a category, for example **Alchemy 2** will expand that category and show it's available blocks.

Clicking on a block in this list puts a white border around it to show that it's selected. After selecting a block, click on a block in the exterior block grid to replace it with the one you've selected.

##### Dungeon block grid

The dungeon block grid shows a top-down representation of the dungeon block layout for a location. 

Since dungeons have a few special layout rules, changing the layout works different from the exterior block grid. Dungeons use interior blocks (the N- and W- blocks) and these are always enclosed by border blocks (B- blocks). 

The small graveyard and crypt dungeons use the M- blocks, these blocks are self-enclosed. In classic Daggerfall's data, these M- blocks are still surrounded by border blocks even if they are inaccessible. This layout editor mimics that behavior.

To expand the grid, hover over the border block and choose an N- or W- block from the dropdown list that appears. The border block will be replaced with the block you chose and where necessary, a border block will be added to seal off the new layout.

In the dropdown list you will also see S- blocks, these blocks are used in main quest dungeons and I don't recommend using them for your own dungeons, this might cause problems.

#### Step 10 - Generate JSON

If you have successfully completed the previous steps, click on the `Generate JSON` button and you will find the generated JSON text in the **Result textarea** at the bottom of the page. 

Copy and paste the JSON text into a new file and save it as `locationnew-\<location-name\>-\<region-id\>.json`. Copy this file to the `StreamingAssets/WorldData` folder in your Daggerfall Unity install.

After starting the game, you should see your location on the travel map if the Discovered flag in MapTableData has been set to `true`.

### Modifying an existing location

The steps for modifying an existing location are mostly the same as for creating a new location except you start at step 2.

- Follow step 2 - 4 for Creating a new location. 
- For step 5: select `Existing location`.
- Skip steps 6 and 7 (modifying an existing location does not require a new name or location ID to be set)
- Proceed with steps 8-10 to finish altering the existing location.