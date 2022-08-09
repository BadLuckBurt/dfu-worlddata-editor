let textRSC = [
	{
		id: 0,
		lines: [
			"STRENGTH[0xFD] Strength governs encumbrance, weapon damage[0xFC] and the ease of increasing strength-related skills.[0xFC] With your strength of %str, you are considered %ark[0xFC] [0xFB][0x14]%dam [0xFB](modifier is factored into your[0xFC] [0xFB](hand-to-hand / weapon damage.[0xFC] [0xFB][0x14]%enc [0xFB](kilograms is your maximum encumbrance.[0xFC]"]
	},
	{
		id: 1,
		lines: [
			"INTELLIGENCE[0xFD] Intelligence governs total magic potential[0xFC] and the ease of increasing intelligence-related skills.[0xFC] With your intelligence of %int, you are considered %ark.[0xFC] [0xFB][0x14]%spc out of %spt spell points are available for casting.[0xFC]"]
	},
	{
		id: 2,
		lines: [
			"WILLPOWER[0xFD] Willpower governs resistance to spell effects[0xFC] and the ease of increasing willpower-related skills.[0xFC] With your willpower of %wil, you are considered %ark.[0xFC] [0xFB][0x14]+%mad [0xFB](modifier is factored into your magical resistance.[0xFC]"]
	},
	{
		id: 3,
		lines: [
			"AGILITY[0xFD] Agility governs ability to hit a target,[0xFC] to avoid getting hit, and the ease of increasing[0xFC] agility-related skills. With your agility of %agi,[0xFC] you are considered %ark.[0xFC] [0xFB][0x14]%thd [0xFB](modifier is factored into your combat odds.[0xFC]"]
	},
	{
		id: 4,
		lines: [
			"ENDURANCE[0xFD] Endurance governs hit points, healing rate,[0xFC] resistance to poisons and diseases, and fatigue.[0xFC] With your endurance of %end, you are considered %ark.[0xFC] [0xFB][0x14]%hea [0xFB](modifier is factored into the number[0xFC] [0xFB](of hit points you gain each level.[0xFC] [0xFB][0x14]%hmd [0xFB](modifier is factored into your healing rate.[0xFC]"]
	},
	{
		id: 5,
		lines: [
			"PERSONALITY[0xFD] Personality governs the ease of increasing[0xFC] personality-related skills.[0xFC] With your personality of %per, you are considered %ark.[0xFC]"]
	},
	{
		id: 6,
		lines: [
			"SPEED[0xFD] Speed governs movement rate, missile reloading time,[0xFC] and all speed-related skills.[0xFC] With your speed of %spd, you are considered %ark.[0xFC]"]
	},
	{
		id: 7,
		lines: [
			"LUCK[0xFD] Luck is a powerful modifier to any action you take.[0xFC] There are no skills in which luck is the primary attribute,[0xFC] but your odds of succeeding in any skill trial is modified[0xFC] by your luck.[0xFC] With your luck of %luc, you are considered %ark.[0xFC]"]
	},
	{id: 8, lines: [
			"Training will cost you %a.[0xFD] Do you wish to receive training?"]},
	{id: 10, lines: [
			"I think they have one in %fcn."]},
	{
		id: 11,
		lines: [
			"I have no idea.",
			"I honestly couldn't tell you.",
			"Don't know, really...",
			"Try asking someone else.",
			"You tell me."]
	},
	{id: 12, lines: [
			"You have no spells in your spellbook."]},
	{id: 13, lines: [
			"There is no place by[0xFD] that name on your map.[0xFD]"]},
	{id: 14, lines: [
			"You must distribute your bonus points."]},
	{id: 15, lines: [
			"Do you wish to surrender to the city guards?"]},
	{id: 16, lines: [
			"You are asking for too many days into the future."]},
	{id: 17, lines: [
			"It is illegal to camp in or near a city."]},
	{id: 18, lines: [
			"You are healthy."]},
	{id: 19, lines: [
			"You have no affiliations."]},
	{id: 20, lines: [
			"There is no soul to release from Azura's Star."]},
	{id: 21, lines: [
			"You cannot train a skill that above 50%."]},
	{
		id: 22,
		lines: [
			"You are in %cn.[0xFD] It is %tim on %dat.[0xFD] In the eyes of the law of %crn,[0xFD] you are %ltn.[0xFD]"]
	},
	{id: 23, lines: [
			"You have to wait at least 12 hours before you[0xFD] can undertake more training.[0xFD]"]},
	{id: 24, lines: [
			"This does not need to be repaired.[0xFD]"]},
	{id: 25, lines: [
			"You have %gii gold pieces. How many[0xFD] do you wish to drop ?[0xFD]  [0xF8] [0xFD]"]},
	{id: 26, lines: [
			"You cannot rest for more[0xFD] than 99 hours at a time.[0xFD]"]},
	{id: 27, lines: [
			"You cannot loiter for more[0xFD] than 3 hours at a time.[0xFD]"]},
	{id: 28, lines: [
			"%hnt"]},
	{id: 29, lines: [
			"%it is broken.[0xFD]"]},
	{id: 30, lines: [
			"You have no diseases.[0xFD]"]},
	{id: 31, lines: [
			"Do you wish to travel to[0xFD] %tcn?[0xFD]"]},
	{id: 32, lines: [
			"The soul is released.[0xFD]"]},
	{id: 33, lines: [
			"You cannot repair magic items.[0xFD]"]},
	{id: 34, lines: [
			"You don't have any potion ingredients.[0xFD]"]},
	{
		id: 35,
		lines: [
			"Your reputation have changed as follows:[0xFC]  [0xFC] Commoners: [0xFB]F%r1[0xFC] Merchants: [0xFB]F%r2[0xFC] Scholars: [0xFB]F%r3[0xFC] Nobility: [0xFB]F%r4[0xFC] Underworld: [0xFB]F%r5[0xFC]"]
	},
	{
		id: 36,
		lines: [
			"It has been too long since you sated your[0xFD] need to kill as a vampire. You are unable[0xFD] to regain your strength.[0xFD]"]
	},
	{id: 37, lines: [
			"This looks like private property. Do you[0xFD] still want to look through it?[0xFD]"]},
	{id: 38, lines: [
			"Do you wish to access your wagon[0xFD] and stay in %cn?[0xFD]"]},
	{
		id: 100,
		lines: [
			"You have contracted Witches' Pox.[0xFD] It will slowly deteriorate your strength,[0xFD] endurance, and health until you are cured[0xFD] or dead.[0xFD]"]
	},
	{
		id: 101,
		lines: [
			"You have contracted the Plague,[0xFD] a very serious, often fatal disease.[0xFD] Very quickly it will spread through[0xFD] your system. Few who contracted it[0xFD] live for more than a few days[0xFD] unless they are cured quickly.[0xFD]"]
	},
	{
		id: 102,
		lines: [
			"You have contracted Yellow Fever.[0xFD] Your endurance, willpower, and health[0xFD] will decline every day until you find[0xFD] a cure or die.[0xFD]"]
	},
	{
		id: 103,
		lines: [
			"You have contracted Stomach Rot.[0xFD] It is a permanent condition, unless[0xFD] you are cured, characterized by a[0xFD] slight daily drop in health.[0xFD]"]
	},
	{
		id: 104,
		lines: [
			"You have contracted Consumption.[0xFD] Your willpower, agility, and strength[0xFD] will slowly leave you, until you are[0xFD] cured or you die.[0xFD]"]
	},
	{
		id: 105,
		lines: [
			"You have contracted Brain Fever.[0xFD] It is a slow death, as your willpower,[0xFD] your health, even your personality trickle[0xFD] away, day by day. You must either get a[0xFD] cure or face oblivion.[0xFD]"]
	},
	{
		id: 106,
		lines: [
			"You have contracted Swamp Rot.[0xFD] Every day your willpower, agility,[0xFD] and strength will fall, until you[0xFD] waste away or are cured.[0xFD]"]
	},
	{
		id: 107,
		lines: [
			"You have contracted Caliron's Curse.[0xFD] Some people have recovered by themselves[0xFD] in a week or two, but their strength,[0xFD] speed, and agility remain stunted. It[0xFD] is best to cure the disease quickly.[0xFD]"]
	},
	{
		id: 108,
		lines: [
			"You have contracted Cholera,[0xFD] one of the deadliest diseases in[0xFD] Tamriel and always fatal unless help[0xFD] is given very, very quickly.[0xFD]"]
	},
	{
		id: 109,
		lines: [
			"You have contracted Leprosy[0xFD] and will slowly waste away, a little[0xFD] bit every day, unless you are cured.[0xFD]"]
	},
	{
		id: 110,
		lines: [
			"You have contracted Wound Rot,[0xFD] which will very slowly erode your[0xFD] strength, endurance, and health[0xFD] until you cure yourself.[0xFD]"]
	},
	{
		id: 111,
		lines: [
			"You have contracted Red Death,[0xFD] a very serious disease which can[0xFD] quickly decimate a victim's endurance[0xFD] and even destroy personality until[0xFD] a cure is given or the victim[0xFD] dies.[0xFD]"]
	},
	{
		id: 112,
		lines: [
			"You have contracted Blood Rot,[0xFD] which will adversely affect your[0xFD] health, personality, and willpower[0xFD] over the next several days or weeks[0xFD] unless you cure it. Some have not[0xFD] found a cure and died of this[0xFD] disease.[0xFD]"]
	},
	{
		id: 113,
		lines: [
			"You have contracted Typhoid Fever,[0xFD] a deadly disease affecting a victim's[0xFD] intelligence, endurance, and health.[0xFD] The condition is permanent, barring[0xFD] a cure or death.[0xFD]"]
	},
	{
		id: 114,
		lines: [
			"You have contracted Dementia,[0xFD] a hideous disease which slowly robs[0xFD] a victim of his or her intelligence,[0xFD] willpower, and even personality,[0xFD] until he or she is dead or a cure[0xFD] has been applied.[0xFD]"]
	},
	{
		id: 115,
		lines: [
			"You have contracted Chrondiasis,[0xFD] a magical disease, which will consume[0xFD] your intelligence and innate magicka,[0xFD] day by day. The disease must be cured,[0xFD] or it will eventually kill you.[0xFD]"]
	},
	{
		id: 116,
		lines: [
			"You have contracted Wizard Fever,[0xFD] a sometimes merely irritating, sometimes[0xFD] devastating magical disease. Some have[0xFD] suffered this and barely noticed it[0xFD] before the fever broke on its own and[0xFD] some have been left feebleminded. Your[0xFD] innate magicka and intelligence will[0xFD] trickle away, day by day, for as[0xFD] long as three weeks.[0xFD]"]
	},
	{id: 117, lines: [
			"You have been poisoned.[0xFD]"]},
	{
		id: 200,
		lines: [
			"Why did the %ra put the letters 'T.G.I.F.' on his boots? To remind himself - Toes Go In First!",
			"Most %ra family trees don't fork!",
			"What do a %ra and a bottle of port have in common? They're both empty from the neck up!",
			"You know, you might be a %ra if you have grease under your toenails!",
			"How do you get a %ra's eyes to sparkle? Put a torch in his ear!",
			"You know, you might be a %ra if it's impossible to see food stains on your armor!",
			"What did the %ra girl say after someone blew in her ear? 'Thanks for the refill!'",
			"What do you call a %ra with half a brain? Gifted!",
			"Why do %ra women wear undergarments? To keep their ankles warm!",
			" How do you make a %ra laugh on Morndas? Tell him a joke on Fredas!",
			" You know, it only takes one drink to get a %ra drunk. I can't remember if it's the thirteenth or the fourteenth.",
			"What do you call a basement with more than one %ra? A WHINE cellar!",
			"Over at the %nt, spitting will cost you a copper piece. But you can throw up for free!",
			"What do a smart %ra and an orcoblin have in common? They're both extinct!",
			"You know, lots of people say that %ra kids procrastinate too much. Well, just you wait!",
			"What is a %ra doing when he holds his hands tight over his ears? Trying to hold a thought!",
			"How can you tell if a %ra is lying? His lips are moving!",
			"What do you say to a %ra woman to convince her to go to bed with you? Have another ale!",
			"Why is it %cn has the most %ra adventurers, and %cn2 has the most goblins? %cn2 had the first choice!",
			"What is the first thing a %ra woman does in the morning? Walk home!",
			"What did the %ra woman say after she was told she was pregnant? 'Is it mine?'!",
			"What a %ra lacks in intelligence, he makes up for in stupidity.",
			"I won't eat anything that has intelligent life, but I will happily eat a politician or a %ra."]
	},
	{
		id: 201,
		lines: [
			"By Thorig's Beard",
			"By Olfor's Hammer",
			"By the White Wolf",
			"By the Frozen Wastes",
			"By the Hoarfather",
			"Mother of the Ice",
			"Frostfire",
			"By the Cliffs of Solitude",
			"By the Northern Sea",
			"By the Beard of Thorig"]
	},
	{
		id: 202,
		lines: [
			"By the Rat-god",
			"Whore of Alizahad",
			"Dust of Orcrest",
			"By the Sands of Elsweyr",
			"By the Blessed Water",
			"By the Hand of Ibrahad",
			"Desert Sun",
			"By the Dry Heart",
			"By the Water of Life",
			"Devil of the Sands"]
	},
	{
		id: 203,
		lines: [
			"By the Dragon's Teeth",
			"Dragon's Teeth",
			"Cursed Darvak",
			"By My Father's Name",
			"By Rourken",
			"By the Great Hammer",
			"By the Dwarf-King",
			"Beard of the Dwarf-King",
			"By the Guardian's Blood",
			"By the First Wyrm",
			"Spirit Sword",
			"By the Blade",
			"By Divad",
			"By Katrica",
			"By The Maiden",
			"By Frandar",
			"Stendarr Preserve Us",
			"By The Sun"]
	},
	{
		id: 204,
		lines: [
			"By Starfall's Waters",
			"Bless My Lord",
			"By the Crypt",
			"Death Be Damned",
			"By My Lady",
			"By the Mists",
			"By the Wolf",
			"By the Dark Lord",
			"Spirits of High Rock",
			"By the ArchDruid",
			"By Pelagius",
			"Madness",
			"By the Dragon",
			"Damn the Dragon"]
	},
	{
		id: 205,
		lines: [
			"Swamp Devil",
			"Mire of Murkwood",
			"By the Gods",
			"By the Throne of Aphicles",
			"By the Blades of Fate",
			"By the Lonely One",
			"Host of Stormhold",
			"By the Swamp Spirit",
			"By the Mother-goddess",
			"Bogfire"]
	},
	{
		id: 206,
		lines: [
			"By the Elden Grove",
			"By the Timber Spirits",
			"By the Lore of Wood",
			"By Mistria's Curse",
			"Spirits of the Wood",
			"Faeries of the Grove",
			"By Caliron's Heart",
			"By the Root",
			"Fire of Eldenroot",
			"By the Fire"]
	},
	{
		id: 207,
		lines: [
			"By the Highest One",
			"By the White Crystal",
			"By the Wood of Elborn",
			"By the Blue Divide",
			"Faerielight",
			"By the Otherworld",
			"First Spirit of Tamriel",
			"Blade of Cassimoran",
			"Crystals of Sumurset",
			"By the First Spirit"]
	},
	{
		id: 208,
		lines: [
			"By the Black Isle",
			"By the Dark Ones",
			"By the Fires of Dagoth-Ur",
			"By the Mad Queen",
			"By the Black Maw",
			"Dark Goddess Protect Us",
			"By the Night",
			"Soul of the Black Knight",
			"By the Soulless One",
			"Fireblood"]
	},
	{
		id: 250,
		lines: [
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] %sub by %an",
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] The %sub by %an",
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] %adj by %an",
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] %adj %sub by %an",
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] %pp1 %sub by %an",
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] %pp1 %adj %sub by %an",
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] %sub %pp2 by %an",
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] %adj %sub %pp2 by %an",
			"[0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] [0xFC] %pp1 %adj %sub %pp2 by %an"]
	},
	{id: 255, lines: [
			"From where dost thou hail?"]},
	{
		id: 256,
		lines: [
			"Someone calls out, \"Come in.\"",
			"You hear, \"Welcome!\"",
			"An irritated voice hollers, \"It's open.\"",
			"Someone says, \"Come on in.\"",
			"A jolly voice says, \"Welcome to my home.\"",
			"A voice calls out, \"You may enter.\""]
	},
	{
		id: 260,
		lines: [
			"\"Your presence honors my humble shop[0xFD] %pcn. Although I need twice as[0xFD] much to feed my starving family, l[0xFD] will give it away for %a gold pieces.\"[0xFD]",
			"\"You are a most formidable bargainer,[0xFD] %pct. The usual asking is far[0xFD] more, but I can make a deal with you,[0xFD] and you only. %a gold pieces and[0xFD] it's yours.\"[0xFD]",
			"\"My dear %pcf, for no one, not my[0xFD] closest family or best of friends would[0xFD] I consider selling that for %a[0xFD] gold pieces. For no one that is,[0xFD] except you.\"[0xFD]",
			"\"This is far below a fair price -- I[0xFD] know the market. On the other hand, in[0xFD] certain, very rare cases, it is[0xFD] less important to make a profit. I can[0xFD] take a loss in your case. %a gold[0xFD] pieces, good %pcf, and it's yours.\"[0xFD]"]
	},
	{
		id: 261,
		lines: [
			"\"%cpn prides itself on having the[0xFD] lowest prices in %cn. Though you[0xFD] have bargained with me until the sun is[0xFD] low in the sky, I can sell for no less[0xFD] than %a gold pieces.\"[0xFD]",
			"\"You have bargained me long and hard[0xFD] %pcn. Let us be done. I would[0xFD] normally charge more, but for you I[0xFD] only ask %a gold. Truly it is but a[0xFD] pittance.\"[0xFD]"]
	},
	{
		id: 262,
		lines: [
			"\"Enough bargaining. My price is[0xFD] %a gold pieces. Take it or leave it.\"",
			"\"That'll be %a gold pieces. You've[0xFD] bartered down to that.\"[0xFD]",
			"After a long session of haggline...[0xFD] \"%a gold pieces is my final offer.\"[0xFD]"]
	},
	{
		id: 263,
		lines: [
			"\"Enough of this endless dickering. You are[0xFD] obviously in great need. Normally I would[0xFD] pay far less, but for you I will[0xFD] offer %a gold.\"[0xFD]",
			"\"Listen, I will offer you the absolute[0xFD] maximum I can without losing my shirt.[0xFD] Here is %a gold. Take it and tell all[0xFD] your friends you cheated me.\"[0xFD]",
			"\"I'll give the price I only offer to my[0xFD] closest friends and family. The market[0xFD] value of that is much less, but[0xFD] I think I can give you %a gold.\"",
			"\"Not bad, not bad. I'd give most people[0xFD] less, but for you, %a gold. That's my[0xFD] absolute best offer.[0xFD]"]
	},
	{
		id: 264,
		lines: [
			"\"Maybe you can get more than %a gold[0xFD] for that somewhere, but it's a fair price.[0xFD] And it's my only offer.\"[0xFD]",
			"\"I can give you %a gold pieces. If[0xFD] someone else is offering more, I'd advise[0xFD] you go to him. %a gold is all it's worth[0xFD] to me.\"[0xFD]",
			"\"There's not a big market for those, but[0xFD] I can sell it. I'll give you %a gold[0xFD] pieces, a perfectly fair price.\"[0xFD]",
			"\"Yeah, you're right. Good quality all[0xFD] around. I'll offer a little more than[0xFD] the standard price -- %a gold pieces\"[0xFD]"]
	},
	{
		id: 265,
		lines: [
			"\"I have no time for such as you. I will[0xFD] only pay %a for such trash.\"",
			"\"%a gold, kid. Take it or leave it.\"[0xFD]",
			"\"No more clumsy bartering, kid. I'll[0xFD] give you %a gold, and that's the highest[0xFD] I'll go. Period.\"[0xFD]",
			"\"Listen, %ra. You and me both know that[0xFD] ain't worth a piece more than %a gold,[0xFD] right? So let's not pretend. You don't[0xFD] haveta agree to it, but that's what I'll[0xFD] pay for it.\"[0xFD]"]
	},
	{
		id: 266,
		lines: [
			"Incense and soft music soothe your nerves[0xFD] as you cross the threshold. Each item in[0xFD] this shop is carefully mounted and[0xFD] displayed. Not the slightest defect can be[0xFD] detected in any item within.[0xFD]"]
	},
	{
		id: 267,
		lines: [
			"The shop is better appointed than many.[0xFD] Its wares lie neatly on the shelves.[0xFD] Although not fit for a king, all are[0xFD] skillfully crafted.[0xFD]"]
	},
	{
		id: 268,
		lines: [
			"The shop is laid out in a practical and[0xFD] straightforward manner. All the items[0xFD] seem to be of adequate construction.[0xFD]"]
	},
	{
		id: 269,
		lines: [
			"Sturdy shelves, cobbled together out of[0xFD] scrap lumber hold the shops wares. The[0xFD] items are sound and functional, but[0xFD] little more than that.[0xFD]"]
	},
	{
		id: 270,
		lines: [
			"Rusty relics lie wherever they were last[0xFD] tossed. All the wares show the cracks and[0xFD] chips of shoddy workmanship. A mouse[0xFD] scampers over your feet before burrowing[0xFD] into a nearby sack.[0xFD]"]
	},
	{id: 282, lines: [
			"Congratulations! You have purchased a lovely[0xFD] home here in %cn.[0xFD]"]},
	{
		id: 283,
		lines: [
			"Congratulations! You have purchased a[0xFD] sturdy vessel capable of ferrying you[0xFD] anywhere within the Iliac Bay."]
	},
	{id: 284, lines: [
			"You already own a ship. You must sell it[0xFD] before you can buy another.[0xFD]"]},
	{id: 285, lines: [
			"This is not a port town, %pcn.[0xFD] We have no ships to sell you here.[0xFD]"]},
	{id: 286, lines: [
			"You already own a house. You must sell it[0xFD] before we can sell you another.[0xFD]"]},
	{id: 287, lines: [
			"It is a seller's market for houses. There[0xFD] are none available at this time.[0xFD]"]},
	{
		id: 288,
		lines: [
			"%pcn, you have defaulted[0xFD] on a prior loan with this bank. We will[0xFD] not lend you money under any circumstances.[0xFD] Perhaps you could go to a bank in some[0xFD] place other than %reg and[0xFD] attempt to swindle them.[0xFD]"]
	},
	{
		id: 289,
		lines: [
			"You already have a loan with this bank.[0xFD] It must be paid off in full before we will[0xFD] grant you another loan.[0xFD]"]
	},
	{id: 290, lines: [
			"My sincere apologies, but you do not have[0xFD] that much in your account.[0xFD]"]},
	{id: 291, lines: [
			"Am I to understand that you would like to[0xFC] deposit all of your letters of credit?"]},
	{
		id: 292,
		lines: [
			"You do not have that much in your account[0xFD] I need to have the full amount of the[0xFD] letter of credit, plus a one per cent fee.[0xFD]"]
	},
	{id: 293, lines: [
			"We do not sign letters of credit for less[0xFD] than one hundred gold pieces.[0xFD]"]},
	{
		id: 294,
		lines: [
			"That is very gracious of you, but we do[0xFD] not accept overpayments. Here is your[0xFD] change back. Your loan is now repaid in full.[0xFD]"]
	},
	{
		id: 295,
		lines: [
			"I am afraid that we cannot loan that much[0xFD] gold to a person of your standing. For you,[0xFD] our limit is %ml gold pieces.[0xFD]"]
	},
	{id: 296, lines: [
			"We do not make loans for less than one[0xFD] hundred gold pieces.[0xFD]"]},
	{
		id: 297,
		lines: [
			"I claim bounty for the bank of[0xFD] %reg! You have defaulted on your loan and[0xFD] must now pay the penalty![0xFD]"]
	},
	{
		id: 298,
		lines: [
			"We would gladly purchase your house for the[0xFD] generous sum of %a gold[0xFD] pieces. All items within the house become[0xFD] property of the bank. Are you prepared to sign[0xFD] over the house now?[0xFD]"]
	},
	{
		id: 299,
		lines: [
			"Your ship is worth %a gold[0xFD] pieces to us. Be advised that all items on[0xFD] board the ship become property of the bank.[0xFD] Do you want to sell your ship now?[0xFD]"]
	},
	{id: 300, lines: [
			"Three primary, three major, and six minor skills[0xFD] must be selected before exiting.[0xFD]"]},
	{id: 301, lines: [
			"Name your character class before exiting.[0xFD]"]},
	{id: 302, lines: [
			"Attribute arrow must equal zero before exiting.[0xFD]"]},
	{id: 303, lines: [
			"Reputation balance must equal zero before exiting.[0xFD]"]},
	{id: 304, lines: [
			"You cannot select any more advantages.[0xFD]"]},
	{id: 305, lines: [
			"You cannot select any more disadvantages.[0xFD]"]},
	{
		id: 306,
		lines: [
			"The difficulty of advancing dagger cannot be[0xFD] in the red. Select more advantages to move it[0xFD] up, or more disadvantages to move it down.[0xFD]"]
	},
	{
		id: 307,
		lines: [
			"Player reflexes determine the overall speed[0xFD] of the game. If you pick VERY HIGH reflexes,[0xFD] the monsters will move and attack quickly,[0xFD] forcing you to be quick with the controls.[0xFD] VERY LOW reflexes means the monsters will[0xFD] move and attack slowly, allowing you to adopt[0xFD] a more cautious, thoughtful play style. Your[0xFD] character will advance a little slower with[0xFD] a lower reflex setting, and will advance a[0xFD] little faster with a higher reflex setting.[0xFD]"]
	},
	{id: 349, lines: [
			"You have finished loitering.[0xFD]"]},
	{id: 350, lines: [
			"You are healed."]},
	{id: 351, lines: [
			"You do not need to rest."]},
	{id: 352, lines: [
			"Rest how many hours?"]},
	{id: 353, lines: [
			"You wake up."]},
	{id: 354, lines: [
			"There are enemies nearby."]},
	{id: 355, lines: [
			"You cannot sleep now."]},
	{
		id: 360,
		lines: [
			"We were warned about you %pcn.[0xFD] You defaulted on a loan to one of our[0xFD] sister banks. This money will be used[0xFD] to repay that bad debt.[0xFD]"]
	},
	{
		id: 361,
		lines: [
			"This demo allows you access to this guild[0xFD] function. Normally you would have to wait[0xFD] until you reached a higher rank in the[0xFD] guild before being allowed to use it.[0xFD]"]
	},
	{id: 362, lines: [
			"Daedra summoning is not available in[0xFD] the demo version of Daggerfall.[0xFD]"]},
	{
		id: 363,
		lines: [
			"In the full version of Daggerfall, you[0xFD] would have just received a skill increase.[0xFD] However, in the demo version, your skills[0xFD] are not allowed to exceed a score of 40.[0xFD]"]
	},
	{
		id: 364,
		lines: [
			"The time limit for the Daggerfall demo has[0xFD] expired. You can find Daggerfall at your[0xFD] local software store.[0xFD]"]
	},
	{id: 400, lines: [
			"The ChildGard feature prevents[0xFD] this quest from running at this time.[0xFD]"]},
	{
		id: 401,
		lines: [
			"Death is not always eternal. For some[0xFD] it is merely a time of waiting. Now is[0xFD] your time of waiting. Be patient and[0xFD] all will be revealed...[0xFD]"]
	},
	{
		id: 402,
		lines: [
			"I am the Spymaster. I know everything that[0xFD] happens on the Iliac Bay. Others might give[0xFD] you rumors, but my rumors are always true.[0xFD]"]
	},
	{id: 403, lines: [
			"Do you want to reset your character's[0xFD] attributes back to their original values?[0xFD]"]},
	{id: 454, lines: [
			"You do not have enough gold."]},
	{
		id: 460,
		lines: [
			"You have not earned a house, %pcn.[0xFD] Only the highest ranking members of the[0xFD] guild are awarded houses.[0xFD]"]
	},
	{
		id: 461,
		lines: [
			"You have already received your armor for[0xFD] your current rank. When you achieve[0xFD] a higher rank in the order I will[0xFD] give another fine piece of armor.[0xFD]"]
	},
	{id: 462, lines: [
			"I have an excellent property for you[0xFD] %pcn! Let me mark it on your map.[0xFD]"]},
	{id: 463, lines: [
			"I have a fine piece of armor for you.[0xFD]"]},
	{
		id: 465,
		lines: [
			"I see your magicka is low. You sorcerors[0xFD] really need to be more careful.[0xFD] Here, let me recharge you.[0xFD]",
			"It is customary for the guild to recharge[0xFD] the magicka of sorcerers.[0xFD]",
			"Hmmm. This will not do. We can't have[0xFD] guild sorcerers running around with low[0xFD] magicka. I'll just recharge you.[0xFD]"]
	},
	{id: 475, lines: [
			"Castle Daggerfall."]},
	{id: 476, lines: [
			"Castle Wayrest."]},
	{id: 477, lines: [
			"Castle Sentinel."]},
	{
		id: 480,
		lines: [
			"There are to be no summonings this day.[0xFD] I would suggest you do a little personal[0xFD] research and to find a day when we perform[0xFD] summonings.[0xFD]",
			"We're not summoning this day. It might be[0xFD] a worthwhile use of your time to check in[0xFD] the library at the guild. There are a number[0xFD] of books about daedric summonings, including[0xFD] the dates appropriate for summoning.[0xFD]"]
	},
	{
		id: 481,
		lines: [
			"Today is %dat, the day of summoning[0xFD] for %dae. Do you, %pcn, wish[0xFD] to risk you life and very soul by summoning[0xFD] %dae into our mundane world?[0xFD]"]
	},
	{
		id: 482,
		lines: [
			"You have summoned %dae once.[0xFD] Only a fool would seek to speak with[0xFD] %dae a second time. Go away.[0xFD]"]
	},
	{
		id: 484,
		lines: [
			"%dae did not deign to grace our world this[0xFD] night. Come back another day if you would speak[0xFD] with a Daedra.[0xFD]"]
	},
	{
		id: 499,
		lines: [
			"The scrap of parchment shows the location of[0xFD] %map. You record it on your map.[0xFD]",
			"A finely drawn vellum reveals the secret[0xFD] location of %map, which you record.[0xFD]",
			"A freshly drawn map indicates the long lost[0xFD] location of %map, which you copy down.[0xFD]"]
	},
	{
		id: 500,
		lines: [
			"Broken potsherds crunch underfoot.",
			"You notice a rank odor.",
			"You hear a distant, unearthly moan."]
	},
	{id: 501, lines: [
			"You notice orc tracks.",
			"Orc tracks cover the ground.",
			"Was that an orcish sigil?"]},
	{id: 502, lines: [
			"This area looks inhabited.",
			"You cross a well-trod path.",
			"Horses passed this way recently."]},
	{
		id: 503,
		lines: [
			"You trip over a broken manacle.",
			"Is that smoke in the distance?",
			"A bell tolls in the distance."]
	},
	{id: 504, lines: [
			"Blocks of marble lie nearby.",
			"You pass a toppled column.",
			"A shattered statue rests here."]},
	{
		id: 505,
		lines: [
			"Piles of dirt are everywhere.",
			"Deep ruts score the ground here.",
			"You detour around a gaping pit."]
	},
	{id: 506, lines: [
			"A stream gurgles nearby.",
			"The air seems cooler here.",
			"That almost looked like a path."]},
	{
		id: 507,
		lines: [
			"A rune is scratched in the dirt.",
			"You feel a vague sense of unease.",
			"You see movement in the underbrush."]
	},
	{
		id: 508,
		lines: [
			"A strange silence envelops you.",
			"A flock of ravens passes overhead.",
			"Dry bones are littered everywhere."]
	},
	{id: 509, lines: [
			"You notice an acrid odor.",
			"Your eyes suddenly sting.",
			"The ground here vibrates faintly."]},
	{
		id: 510,
		lines: [
			"Harpy droppings foul the ground.",
			"The scent of carrion hangs in the air.",
			"Large feathers lie scattered about."]
	},
	{id: 511, lines: [
			"You pass a low stone wall.",
			"Paving stones ring underfoot.",
			"Vines cover piles of rubble."]},
	{id: 512, lines: [
			"You brush aside huge cobwebs.",
			"Spider webs hang from the trees.",
			"Hmm.  No mosquitos."]},
	{
		id: 513,
		lines: [
			"Huge footprints cross your path.",
			"Smoke rises in the distance.",
			"Gnawed bones litter the ground."]
	},
	{
		id: 514,
		lines: [
			"Scorched bones are everywhere.",
			"The trees here are charred by fire.",
			"The air seems warmer here."]
	},
	{id: 515, lines: [
			"You smell woodsmoke.",
			"Someone's been this way recently.",
			"A horse neighs in the distance."]},
	{
		id: 516,
		lines: [
			"Stone outcroppings dot the area.",
			"You pass several lava boulders.",
			"Everything here is covered with ash."]
	},
	{
		id: 517,
		lines: [
			"Something's been digging in the sand.",
			"Those look like scorpion tracks.",
			"What's that rustling sound?"]
	},
	{
		id: 518,
		lines: [
			"You smell fresh turned earth.",
			"A low, ghostly moan shivers by.",
			"A crow caws in the distanct."]
	},
	{
		id: 520,
		lines: [
			"A ghostly wail shatters the silence.",
			"You stumble over a fallen headstone.",
			"An open grave yawns in your path."]
	},
	{
		id: 521,
		lines: [
			"You smell orcs.  Definitely orcs.",
			"Orcs have trampled the ground here.",
			"A harsh yell brings you up short."]
	},
	{
		id: 522,
		lines: [
			"Someone's cleared the underbrush here.",
			"You pass a stack of firewood.",
			"A bird calls nearby."]
	},
	{id: 523, lines: [
			"A bell tolls nearby.",
			"A rotting corpse hangs from a tree.",
			"A despairing cry rings out."]},
	{
		id: 524,
		lines: [
			"You pass a row of fallen columns.",
			"Vines cover jumbled stones here.",
			"A headless statue lies in the dust."]
	},
	{
		id: 525,
		lines: [
			"You clamber over piles of gravel.",
			"A deep pit almost blocks your path.",
			"You pass a heap of rusting shovels."]
	},
	{
		id: 526,
		lines: [
			"A dank breeze ruffles your hair.",
			"A spring bubbles from the ground.",
			"That looks like a path."]
	},
	{
		id: 527,
		lines: [
			"Blood soaks the earth here.",
			"You feel you are being watched.",
			"You pass a trampled circle in the dirt."]
	},
	{
		id: 528,
		lines: [
			"A huge bat flaps slowly overhead.",
			"A wolf howls, not far away.",
			"The air is still and oppressive."]
	},
	{
		id: 529,
		lines: [
			"The ground vibrates underfoot.",
			"A green haze makes your eyes burn.",
			"You notice a strong acrid odor."]
	},
	{
		id: 530,
		lines: [
			"You step over a half-eaten carcass.",
			"Harpy feathers are everywhere.",
			"You almost gag on a foul stench."]
	},
	{
		id: 531,
		lines: [
			"A loose paving stone nearly trips you.",
			"Your path is flanked by toppled masonry.",
			"You pass overgrown fields."]
	},
	{
		id: 532,
		lines: [
			"Even the insects have fallen silent.",
			"You push through a huge spider web.",
			"Large spiders scuttle from your path."]
	},
	{
		id: 533,
		lines: [
			"Footprints are everywhere. BIG footprints.",
			"You pass several uprooted trees.",
			"A huge bonfire smolders nearby."]
	},
	{
		id: 534,
		lines: [
			"The ground is blackened by fire.",
			"It is definitely getting warmer.",
			"You pass a charred skeleton."]
	},
	{
		id: 535,
		lines: [
			"You pass a smoldering campfire.",
			"A sign warns, \"Trespassers Beware\".",
			"An owl hoots softly nearby."]
	},
	{
		id: 536,
		lines: [
			"Steam rises from cracks in the earth.",
			"A hot spring bubbles nearby.",
			"A path winds off among the boulders."]
	},
	{
		id: 537,
		lines: [
			"You pass a shallow sandy pit.",
			"Scorpion tracks crisscross the area.",
			"A loud rustling startles you."]
	},
	{
		id: 538,
		lines: [
			"You smell of freshly buried dead.",
			"Wagon ruts lead off a ways.",
			"White flowers litter the path."]
	},
	{id: 550, lines: [
			"The Thieves Guild bribes the judge,[0xFD] and you are found not guilty.[0xFD]"]},
	{id: 551, lines: [
			"The Dark Brotherhood bribes the judge,[0xFD] and you are found not guilty.[0xFD]"]},
	{
		id: 600,
		lines: [
			"Well, I had work, but I hired[0xFD] the Fighters Guild to do it.",
			"That lousy...someone has been[0xFD] spreading rumors that I need help.[0xFD] I don't need any help in anything.",
			"You're too late. I gave the job[0xFD] to some spellsword.[0xFD]",
			"Yah, I had work. But the situation[0xFD] has resolved itself. Thanks anyway.[0xFD]"]
	},
	{
		id: 606,
		lines: [
			"Yes, you are worthy to join the Mages Guild.[0xFD] As an apprentice, you can use the spellmaker,[0xFD] and get training in any of the guild skills.[0xFD] Later, you will become eligible use the library,[0xFD] buy magical items, and even make your own.[0xFD] Are you interested in joining?[0xFD]"]
	},
	{
		id: 611,
		lines: [
			"I am sad to say that you are ineligible[0xFD] to join the guild.[0xFD] [0xFD] We can only accept members with a certain extant[0xFD] skill in at least one of the magical sciences.[0xFD]",
			"I am sad to say that you are ineligible[0xFD] to join the guild.[0xFD] [0xFD] We do not take neophyte magicians. Only scholars[0xFD] who have devoted themselves to at least one of[0xFD] the magical sciences are permitted.[0xFD]",
			"I am sad to say that you are ineligible[0xFD] to join the guild.[0xFD] [0xFD] Perhaps if you were to devote some time and effort[0xFD] into bettering yourself in at least one of the[0xFD] six magical sciences, we may reconsider.[0xFD]"]
	},
	{
		id: 612,
		lines: [
			"I am sad to say that you are ineligible[0xFD] to join the guild.[0xFD] [0xFD] You do not, to be blunt, have the finest[0xFD] reputation amongst members of the intelligensia.[0xFD]",
			"I am sad to say that you are ineligible[0xFD] to join the guild.[0xFD] [0xFD] Your name is familiar to us, and not in a very favorable light, to be quite honest.[0xFD]",
			"I am sad to say that you are ineligible[0xFD] to join the guild.[0xFD] [0xFD] Unfortunately, you arrive with a less than[0xFD] sterling reputation, young %ra. You might[0xFD] consider improving that and returning.[0xFD]"]
	},
	{
		id: 666,
		lines: [
			"Congratulations, %pcn. You have been promoted[0xFD] to the rank of %lev, with all the rights and[0xFD] honors that accompany it. Remember, we do not[0xFD] rest on previous accomplishments in the[0xFD] Brotherhood.[0xFD]"]
	},
	{
		id: 667,
		lines: [
			"It is my duty to inform you that you have been[0xFD] officially demoted to the rank of %lev.[0xFD] I would remind you, %pcf, that we require[0xFD] our members to work ever harder, not to rest[0xFD] on past accomplishments.[0xFD]",
			"I'm sorry to be the one to tell you[0xFD] that you've been demoted, %pcn.[0xFD]",
			"The elders are not pleased with[0xFD] you, %pcn. You've been demoted.[0xFD]",
			"You have been demoted, %pcn.[0xFD] I'm sorry to be the first one to tell you.[0xFD]",
			"Your inadequacy has been noted by the elders,[0xFD] %pcn. They have demoted you.[0xFD]",
			"The elders have decided that your incompetence[0xFD] merits a demotion, %pcn.[0xFD]",
			"You should not be surprised to hear that the[0xFD] elders have rewarded your inadequacy[0xFD] with a demotion.[0xFD]"]
	},
	{
		id: 668,
		lines: [
			"%pcn, you have been a disappointment to us[0xFD] lately. You are hereby ineligible to[0xFD] receive any benefits available as a member.[0xFD] Perhaps you will come within the fold again,[0xFD] but for now, you are anathema.[0xFD]",
			"You no longer have rights here, %pcn.[0xFD] The elders have decided to expel you.[0xFD]",
			"I'm afraid you have not made enough[0xFD] connections to save your reputation.[0xFD] You are henceforth expelled, %pcn[0xFD]",
			"All honors and rights are forfeit,[0xFD] %pcn. You have been expelled.[0xFD]"]
	},
	{
		id: 679,
		lines: [
			"The Fighters Guild provides strong arms and[0xFD] sharp blades for any willing to pay the price.[0xFD] If you want constant action and a steady flow[0xFD] of gold coin, its the guild for you. Its far[0xFD] better than some Knightly order. Did you you[0xFD] know that they don't even get paid?[0xFD]",
			"The Fighters Guild has a reputation for not[0xFD] being very picky about its members. Nothing[0xFD] could be further from the truth. You are the[0xFD] unsavory sort that gives our guild a black[0xFD] eye. Work on that reputation and then we can[0xFD] talk about a guild membership.[0xFD]"]
	},
	{
		id: 680,
		lines: [
			"Sorry, %ra. We're looking for real[0xFD] warriors at the Fighters Guild. Come back[0xFD] when you've learned something about weaponry, alright?[0xFD]"]
	},
	{
		id: 681,
		lines: [
			"Yes, you look like the sort of warrior we could[0xFD] use in the Fighters Guild. We offer skills[0xFD] training, special discounts on armor and[0xFD] weapon repairs, and very profitable work[0xFD] assignments. In addition, you always have[0xFD] a place to rest in any Fighters Guild.[0xFD] Are you interested?[0xFD]"]
	},
	{id: 684, lines: [
			"Excellent. Welcome to the Fighters Guild,[0xFD] %pcf. Your rank currently is %lev.[0xFD]"]},
	{
		id: 686,
		lines: [
			"Congratulations, %pcf. Because of your[0xFD] outstanding weaponry prowess, we have promoted[0xFD] you to the rank of %lev in the guild.[0xFD] Among other benefits, this increase means[0xFD] cheaper weapon repair and more profitable work[0xFD] assignments.[0xFD]"]
	},
	{
		id: 702,
		lines: [
			"Your heart is larger than your pocket.[0xFD] You only have %gii gold on you.[0xFD]",
			"Sadly, you only have %gii gold on you.[0xFD]",
			"You cannot, alas, give more than %gii gold.[0xFD] That is all you have on you right now.[0xFD]"]
	},
	{
		id: 703,
		lines: [
			"Thank you for your donation. Perhaps %god[0xFD] will look more kindly on your transgressions[0xFD] in the future.[0xFD]",
			"Certainly %gdd accepts all donations,[0xFD] but do not expect miracles. That takes more[0xFD] than a pile of gold.[0xFD]",
			"I thank you for your donation, but I caution[0xFD] you against thinking that %god is for hire[0xFD] for any sort of transgressor.[0xFD]"]
	},
	{id: 705, lines: [
			"You will find that for the next few days[0xFD] Zen has blessed your mercantile skill.[0xFD]"]},
	{
		id: 707,
		lines: [
			"You will find that for the next few days[0xFD] Mara has strengthened your natural wit and charm."]
	},
	{
		id: 709,
		lines: [
			"You will find that for the next few days[0xFD] Akatosh has blessed your time for traveling.[0xFD]"]
	},
	{id: 710, lines: [
			"You will find that for the next few days[0xFD] Julianos has blessed your intelligence.[0xFD]"]},
	{id: 712, lines: [
			"You will find that for the next few days[0xFD] Dibella has blessed your luck.[0xFD]"]},
	{
		id: 716,
		lines: [
			"You will find that for the next few days[0xFD] Stendarr has blessed your reputation[0xFD] with the law.[0xFD]"]
	},
	{id: 717, lines: [
			"You will find that for the next few days[0xFD] Kynareth has blessed your endurance.[0xFD]"]},
	{
		id: 740,
		lines: [
			"Yes, you are worthy to join the Temple.[0xFD] %fon will embrace you as a member.[0xFD] Are you interested in joining?[0xFD]"]
	},
	{
		id: 744,
		lines: [
			"Sorry, you are ineligible to join the order.[0xFD] We can only accept members with a certain extant[0xFD] skill in at least one of the skills honored[0xFD] by %god.[0xFD]",
			"Sorry, you are ineligible to join the order.[0xFD] Only persons who have devoted themselves to at[0xFD] least one of the skills sacred to %god.[0xFD]",
			"Sorry, you are ineligible to join the order.[0xFD] Perhaps if you were to devote some time and effort[0xFD] into bettering yourself in at least one of the[0xFD] skills important to %god,[0xFD] we may reconsider.[0xFD]"]
	},
	{
		id: 745,
		lines: [
			"Sorry, you are ineligible to join the order.[0xFD] You do not, to be blunt, have the finest[0xFD] reputation amongst members of our temple.[0xFD]",
			"Sorry, you are ineligible to join the order.[0xFD] Your name is familiar to us, and not in a very favorable light, to be quite honest.[0xFD]",
			"Sorry, you are ineligible to join the order.[0xFD] Unfortunately, you arrive with a less than[0xFD] sterling reputation, young %ra. You might[0xFD] consider improving that and returning.[0xFD]"]
	},
	{
		id: 750,
		lines: [
			"Sorry, you are ineligible to join the order.[0xFD] You see, we need warriors in the order.[0xFD] And you do not have the skill at arms[0xFD] necessary to become one of us.[0xFD]",
			"Sorry, you are ineligible to join the order.[0xFD] Perhaps if you strengthened your skill[0xFD] in weapon use we may have use of you[0xFD] in the future.[0xFD]",
			"Sorry, you are ineligible to join the order.[0xFD] We only take on real powerhouses.[0xFD] Someone who can really use a sword[0xFD] or an axe. And you ain't it.[0xFD]"]
	},
	{
		id: 751,
		lines: [
			"Sorry, you can't join up with the order.[0xFD] The %fon have sterling[0xFD] reputations in %reg. We cannot[0xFD] compromise the Order by accepting[0xFD] less ... well-regarded knights.[0xFD]",
			"Sorry, you can't join up with the order.[0xFD] You're just not trusted yet. You can[0xFD] work on that and get back to me.[0xFD]",
			"Sorry, you can't join up with the order.[0xFD] You just haven't made a good name for[0xFD] yourself yet.[0xFD]"]
	},
	{
		id: 752,
		lines: [
			"Ah, %pcn, your reputation precedes you.[0xFD] %fon always has room for a[0xFD] skillful knight of high moral standing.[0xFD] I humbly ask that you join our ranks.[0xFD]"]
	},
	{
		id: 850,
		lines: [
			"Ode to ",
			"Sonnet to ",
			"Love Sonnet to ",
			"On the Subject of ",
			"My Thoughts on ",
			"I Sing of ",
			"To ",
			"Farewell ",
			"My ",
			"Forget Not ",
			"In Defence of ",
			"Oh ",
			"Sweetest ",
			"I Care Not for ",
			"Merciless ",
			"Blame Only ",
			"The Wisdom of ",
			"Lyrical ",
			"Enquiry Concerning ",
			"Damn ",
			"Rape of ",
			"Lost ",
			"Merry ",
			"False ",
			"Taming of ",
			"Worship ",
			"Wheel of ",
			"Midnight of ",
			"Winter of ",
			"Springtide of ",
			"Sad ",
			"Key to "]
	},
	{
		id: 851,
		lines: [
			"Love",
			"Love",
			"Love",
			"Love",
			"My Mistress",
			"Desire",
			"Tenderness",
			"Yearning",
			"Passion",
			"Devotion",
			"Infatuation",
			"Ardor",
			"My Darling",
			"True Love",
			"Lovers",
			"Youth",
			"Innocence"]
	},
	{
		id: 852,
		lines: [
			"The Tale of ",
			"%3hn and ",
			"%3hn and ",
			"%3hn and ",
			"%3hn and ",
			"%2hn and ",
			"The Battle of ",
			"The Ballad of ",
			"The Story of ",
			"The Song of ",
			"The Epic of ",
			"The Adventure of ",
			"The Saga of ",
			"The Wandering of "]
	},
	{
		id: 853,
		lines: [
			"%1hn",
			"%1hn",
			"%1hn",
			"%1hn",
			"%1hn",
			"The Hero",
			"The Victor",
			"The Champion",
			"The Paragon",
			"Courage",
			"Valor",
			"The Bold"]
	},
	{
		id: 854,
		lines: [
			"Slap ",
			"I Am A ",
			"Show Me Your ",
			"I Sing of A ",
			"The Wife and the ",
			"The Naughty ",
			"Hey Nonny Nonny ",
			"Sweet ",
			"The Priest and the ",
			"The Shameless ",
			"The Bonnie ",
			"The Lusty ",
			"Wanton ",
			"Itchy ",
			"Bearded "]
	},
	{
		id: 855,
		lines: [
			"Young Wench",
			"Large Bottom",
			"Tart",
			" Boobie",
			"Lady",
			"Pervert",
			"Merkin",
			"Trollop",
			"Harlot",
			"Old Man",
			"Strumpet",
			"Concubine",
			"Woodcutter"]
	},
	{
		id: 860,
		lines: [
			"The Thieves Guild is the official organized collection of burglars, prostitutes, and other thugs in the area. Their headquarters is always secret.",
			"Even though freelance whoremasters, pickpockets, catburglars, swindlers, and muggers exist, most professional criminals in Tamriel belong to the Thieves Guild. It is best for the collective whole, and the Guild exerts a certain ... pressure to join.",
			"In practically every borough, hamlet, and city-state in Tamriel, the professional criminals have bounded together for mutual protection. That's the Thieves Guild for you.",
			"The Thieves Guild is just like any other guild -- it's just that their particular industry is crime. They offer special benefits to their members, bribe officials, and punish non-members. Just like any other guild."]
	},
	{
		id: 861,
		lines: [
			"The Mages Guild is the official center of magical study in Tamriel. Most major towns have a bureau of the Guild where they sell spells and magical items, in addition to their studies.",
			"The Mages Guild is sorta a school for studying spells. You have to already be pretty decent to get in, but even non-members can use some of their services.",
			"The Mages Guild is pretty much what the name suggests. It's an organization for all varieties of spellcasters to get together and teach each other. Used to be that mages were solitary types. No longer.",
			"It's just what you think it is. A school and a club for mages who are already pretty good to make them even better. It's been around for, oh, at least a thousand years."]
	},
	{
		id: 862,
		lines: [
			"The Dark Brotherhood is a very mysterious organization, often hired as assassins by the more pragmatic rulers. They have a reputation as maniacs and daedra worshippers, but they must be doing something right. They've been around for thousands of years.",
			"A bunch of assassins posing as a religious order.",
			"They're more or less the official Assassin's Guild of Tamriel. Most kingdoms have declared them to be an illegal organization, but it's one thing to make a declaration ...",
			"They're sorta a religious group, but not like a temple. Imagine a bunch of priests with knives and blood on the mind."]
	},
	{
		id: 863,
		lines: [
			"Many orders have their mysteries, but everything about the Blades is shrouded in myth. They are rumored to be the finest warriors in Tamriel, trained for generation after generation, all within the same families. What their goals are is completely unknown.",
			"They may not even exist, but if they do, and the legends have a basis in truth, they're the finest warriors in all Tamriel.",
			"They're a knightly order alright, but unlike any other order, which defines itself by its allegiance, the Blades' master is unknown. They are a completely enigmatic group.",
			"You shouldn't be asking about the Blades so openly. Everyone knows that they're made up of the best fighters in Tamriel, but no one knows the purpose for their existence. That makes them dangerous."]
	},
	{
		id: 864,
		lines: [
			"The Necromancers are the dark mirror of the Mages Guild, powerful magicka casters who are masters of the most corruptive and daedric of spells. They are said to be led by a man they call the King of Worms. According to common rumor, he is thousands of years old and not aging at all.",
			"It is best not to even talk about the Necromancers. Unlike the Mages Guild, they are devoted to a singular cause. But despite horror stories to the contrary, no one knows what this cause may be.",
			"The Necromancers are wizards, like the Mages Guild, but far, far more secretive. Their goals and their activities are whispered about, but no one but a Necromancer knows for certain what they are.",
			"There's an old saying that when opposing the Necromancers, you fear what comes after death more than death itself. They are dangerous wizards, and it is best that the virtuous have little to do with them."]
	},
	{
		id: 865,
		lines: [
			"The Underking is the old bugbear of childhood stories, said to be the most powerful mage who ever lived. The stories go back to the earliest years of the Septim dynasty. No one, however, doubts the existence of those who call themselves his Agents. The living and the animated dead who say they answer to the Underking are perhaps in the hundreds.",
			"The Underking is, well, sort of like a lich. A very powerful, very mysterious ancient lich. Now, where does he live and what does he want? That I can't tell you.",
			"According to some stories, the Underking was once a powerful wizard who gave up his heart for some worthy enterprise. The heart disappeared, so the Underking cannot die or really live. But his minions do his bidding with fanatical devotion, supposedly still searching for his heart.",
			"The Underking may be nothing more than a myth, but his minions are very real. The common people of Tamriel definitely believe in the Underking, and fear him greatly."]
	},
	{
		id: 866,
		lines: [
			"The Fighters Guild is a sophisticated mercenary service. They often hire out adventurers as guards, escorts, and, occasionally, on more covert missions.",
			"Just a bunch of guards for hire, nothing mysterious or romantic.",
			"The Fighters Guild is just what its name implies -- an order for lances for hire and other mercenaries.",
			"The Fighters Guild is where everyone with any gold goes to hire additional guards, escorts, what-have-you. They are absolutely essential for getting things done in %reg."]
	},
	{
		id: 867,
		lines: [
			"The Order of the Lamp is the knightly order that protects the less combative oriented members of the Mages Guild."]
	},
	{
		id: 868,
		lines: [
			"Not much is known about the Cabal of the Mages Guild. It is generally supposed that their power comes from summoning great Daedra lords and princes."]
	},
	{
		id: 869,
		lines: [
			"The Order of Arkay is a religious order dedicated to the worship of Arkay, the God of the Cycle of Birth and Death.",
			"That's the temple devoted to Arkay, the God of Birth and Death.",
			"The Order of Arkay is a temple for worshippers of the God of the Cycle of Birth and Death."]
	},
	{
		id: 870,
		lines: [
			"Any temple dedicated to Zenithar, the God of Work and Commerce, is called a Resolution of Zenithar or a Resolution of Zen.",
			"A Resolution is the fancy name the priests of Zenithar give to their temples.",
			"Zenithar is the God of Work and Commerce. A no-nonsense kind of diety, and His temples are so headstrong, they're called Resolutions."]
	},
	{
		id: 871,
		lines: [
			"Temples devoted to the Mother-Goddess Mara are customarily called Benevolences because she is also the Goddess of Love.",
			"A Benevolence is any temple devoted to the Mother-Goddess, Mara.",
			"Mara's temples are called Benevolences, just like the God of Work and Commerce calls His temples Resolutions. She's the Mother-Goddess and the Goddess of Love, so it makes sense in a way.",
			""]
	},
	{
		id: 872,
		lines: [
			"The Akatosh Chantry is one of the temples dedicated to the Dragon, the God of Time, Akatosh.",
			"The priests of Akatosh always call their temples chantries. I suppose it's because they do a lot of singing there.",
			"Akatosh is a Dragon God of Time, and the temples devoted to Him are always called Chantries."]
	},
	{
		id: 873,
		lines: [
			"Julianos is the God of Wisdom and Logic, and His temples are called Schools.",
			"They don't really worship Julianos at His temples, but since He is the God of Wisdom, they run the temples more like academies. That's why they call them Schools, not temples.",
			"The School of Julianos is one of the top research institutions in Tamriel, probably second only to the Mages Guild. There's a lot of rivalry between the Mages and the scholars of Julianos, actually."]
	},
	{
		id: 874,
		lines: [
			"The Temple of Stendarr is dedicated to the God Stendarr, the Patron of Mercy. They are among the greatest charitable institutions in the land.",
			"Stendarr is the God of Mercy and His temples attempt to carry His message of peace to all Tamriel. You can judge their success for yourself.",
			"The cult devoted to the God of Mercy and Peace is called the Temple of Stendarr. Say what you want about them, they have an honest vision of a peaceful Tamriel."]
	},
	{
		id: 875,
		lines: [
			"Kynareth is the Goddess of the Air, and Patron Spirit of many places, including the kingdom of Daggerfall. Her temples are widespread and her worship popular.",
			"The Temple of Kynareth worships the Goddess of the Air, the spirit who supposed first gave Morihaus the Lord's Mail.",
			"The priests and priestesses of the Goddess of the Air gather their to pray to their patroness."]
	},
	{
		id: 876,
		lines: [
			"The Knights of the Circle are the protectors and guardians of the Order of Arkay. They are as dedicated to Him as His priests are."]
	},
	{
		id: 877,
		lines: [
			"The Knights of Iron are dedicated to the God of Commerce, Zenithar. They protect the members of His Resolution from those who would disrupt their trade."]
	},
	{
		id: 878,
		lines: [
			"The Maran Knights are those warriors who have dedicated their swords to the Mother Goddess Mara. They are sworn to protect her cause and Her Benevolences in Tamriel."]
	},
	{
		id: 879,
		lines: [
			"The Order of the Hour is the group of knights sworn to Akatosh, the Dragon God of Time. They work to further His cause and protect His Chantries."]
	},
	{
		id: 880,
		lines: [
			"The Knights Mentor are those bound to follow the call of Julianos, the God of Wisdom and Learning. While the Schools of Julianos do most of the actual teaching, the Knights Mentor protect the sages and fight the ubiquitous forces of ignorance."]
	},
	{
		id: 881,
		lines: [
			"The Order of the Lily are the knights sworn to the ideal of Dibella, Goddess of Beauty. They protect, and when necessary, die prettily for her Houses."]
	},
	{
		id: 882,
		lines: [
			"The Crusaders are the knights of Stendarr, God of Mercy. They protect the Temples of Stendarr and act as his compassionate blade when the situation demands."]
	},
	{
		id: 883,
		lines: [
			"The Kynaran Order are those knights who have dedicated themselves mind, body, and sword to the Goddess of the Air, Kynareth. They are most often in the company of Her priests of the Temple of Kynareth."]
	},
	{
		id: 884,
		lines: [
			"The Order of the Dragon is composed of the finest knights of the Daggerfall militia, bound together by vows of service to the royal family and kingdom."]
	},
	{
		id: 885,
		lines: [
			"The Order of the Candle is the knightly order charged with the protection of the royal family and kingdom of Sentinel."]
	},
	{
		id: 886,
		lines: [
			"The Knights of the Rose are consecrated as protectors and warriors for the royal family and kingdom of Wayrest."]
	},
	{
		id: 887,
		lines: [
			"The Knights of the Flame have been affiliated with the royal Flyte family for centuries, and now they have become the protectors of the land of Anticlere."]
	},
	{
		id: 888,
		lines: [
			"The Host of the Horn are composed of the finest knights of Lainlyn, bound by oaths to protect and serve the Barony of Lainlyn and its ruling family."]
	},
	{
		id: 889,
		lines: [
			"The Knights of the Owl are the traditional guard and militia of Glenpoint, the finest in the region."]
	},
	{
		id: 890,
		lines: [
			"The Knights of the Raven have been the consecrated protectors of the Barony of Dwynnen for hundreds of years."]
	},
	{
		id: 891,
		lines: [
			"The Knights of the Wheel protect and serve the people and ruling family of Abibon-Gora. They are among the finest knights in Hammerfell."]
	},
	{
		id: 892,
		lines: [
			"The Knights of the Scarab are charged by holy oaths with the protection of the royal family and land of Totambu."]
	},
	{
		id: 893,
		lines: [
			"The Knights of the Hawk are chosen from the finest, noblest warriors in Santaki, to protect and fight for the royal family and people of the land."]
	},
	{
		id: 894,
		lines: [
			"Any temple dedicated to the Goddess of Beauty is called a House of Dibella. The priests and priestesses within are epicureans and orgiasts who aspire for beauty of the form and mind."]
	},
	{
		id: 900,
		lines: [
			"Fowls in the wood",
			"I would if I could",
			"O, that would be good",
			"Let us do as we should",
			"Would you, would you, would?",
			"Does your sword so drip with blood?",
			"Like a babe in the wood",
			"I saw thee in my neighborhood",
			"Knock, knock, knock on wood",
			"Love, why cannot I be good?",
			"The stem, petals, and bud",
			"Just one face in the crowd",
			"I pick thee out of the crowd",
			"Sing it now, sing it loud!",
			"Why must thou cry out loud?",
			"My love, my love, be not proud",
			"My love, I fear, is very proud",
			"Lay upon my grave a shroud",
			"The clouds look like a gray shroud",
			"Praps I am somewhat over-endowed",
			"He remembered her from his boyhood",
			"Such innocence is left in childhood",
			"My love, that is but a falsehood",
			"Eat, love, of ivy and monkshood",
			"Much more my love hath withstood",
			"Your words to me are wormwood",
			"Far more than that I understood",
			"Am I now better understood?",
			"Why must I be misunderstood?",
			"Perhaps, dear, I misunderstood"]
	},
	{
		id: 901,
		lines: [
			"When the green leaves were a-falling",
			"My love will come a-calling",
			"That is what I find most galling",
			"Upon its knees, it comes a-crawling",
			"The house with tenements a-sprawling",
			"Conditions that I find appalling",
			"You I always find enthralling",
			"Then from the clouds am I ever falling",
			"With tongue a-wagging and a-lolling"]
	},
	{
		id: 902,
		lines: [
			"With a down, derry, derry, down, down",
			"She wore a lovely, lovely gown",
			"Nothing more than Jephre's clown",
			"Her eyes were blue, her cheek so brown",
			"Diamonds sparkled in his crown",
			"Down in the sea we all drown",
			"Smile, my love! Don't you frown!",
			"Across bonny dell, across bonny town",
			"Fly, fly away, and do never look down"]
	},
	{
		id: 903,
		lines: [
			"O where have you been?",
			"The knives edge is keen",
			"Let me sharpen my skean",
			"Ah, to me don't be mean",
			"Thy black heart be clean",
			"I'm thy king, be my queen",
			"Spring, spring, so lovely green",
			"What a remarkable scene!",
			"O, she likes to be seen",
			"I'm the knight to thy queen",
			"I'll be Johnny, you be Jean",
			"To your Johnny, I'll be Jean"]
	},
	{
		id: 904,
		lines: [
			"He was a brave gallant",
			"They all rave and rant",
			"So sure, so calm and confidant",
			"Be not, my friend, a sycophant!",
			"Come, my love, lets gallivant!",
			"An actor filled with his talent",
			"They say thou art elegant",
			"Love will grow like an ivy plant",
			"No giant, but ever be an ant",
			"Every nephew, niece, uncle, aunt"]
	},
	{
		id: 905,
		lines: [
			"I'm sick, and very, very sick",
			"Give the old dog a merry kick",
			"The mother hen and her chick",
			"Let me lick where bees doth lick",
			"The rain doth make the road slick",
			"Which shall I pick?",
			"All of us, the dead and the quick",
			"My house is built brick by brick",
			"Is this all a merry trick?",
			"My waist is a-growing thick",
			"She a High Elf, He Nordic",
			"Show me how you do that trick",
			"Throw your arms around my neck",
			"Cannot thou see what a merry wreck",
			"So doth my blade go snacker snick"]
	},
	{
		id: 906,
		lines: [
			"It was at Mid Year time",
			"Up the tree, my dear, lets climb",
			"Lizards crawling from the slime",
			"Excuse my crude rude rhyme",
			"To love is naught but a crime",
			"White hands in blackest grime",
			"To die, alas, in ones prime",
			"Could it be more sublime?",
			"Explain to me love's paradigm",
			"Nature shows us pantomime",
			"To touch the sky one more time",
			"O Akatosh, give me more time"]
	},
	{
		id: 907,
		lines: [
			"Bring water from the well",
			"Ding, dong, dell",
			"Over mountain, over dell",
			"The fragrance I do smell",
			"A mad wizard's spell",
			"My love you do quell",
			"A felon in his lonely cell",
			"Fair love, love to sell",
			"Upon the beach, I find a shell",
			"My tale I try to tell",
			"Where e'er my love doth dwell?",
			"The tide it ebbs, the tide doth swell",
			"Let me cry with a mighty yell",
			"Against it, let us all rebel",
			"My love doth this repel",
			"But never would I thee compel",
			"I bid thee then a fond farewell",
			"Dong, Dong, Dell",
			"Ding, Ding, Dell",
			"Spring, Sprong, Sprell",
			"I scream, I shout, I squeal, I yell",
			"Like an angel, she fell",
			"She lay like in a deathless spell",
			"Stendarr, save me from this hell!",
			"Like the Empress Kyntara in her cell",
			"Farewell, to love, to life, farewell"]
	},
	{
		id: 908,
		lines: [
			"The ways of love be foul",
			"Upon the tree was a wise owl",
			"Around her face she wore a cowl",
			"The wolf at the far moon doth howl",
			"At night, the daedra dark doth prowl",
			"Into the wind, must I howl?",
			"Arkay, grant me death here and now"]
	},
	{
		id: 909,
		lines: [
			"It was a lover and his lass",
			"They cluster in a murky mass",
			"Forgive my song so bold and crass",
			"She loved him not, alas, alas!",
			"The gold the miser doth amass",
			"A symbol bold on his cuirass",
			"Drink spiced wine and hippocras",
			"To thee, let me raise my glass",
			"In a wildy mountain pass",
			"Eyes as green as springtime grass",
			"But, love, see thou the hourglass?"]
	},
	{
		id: 910,
		lines: [
			"Blow, blow, thou winter breeze",
			"A laborer finally at his ease",
			"Milk doth rot to finest cheese",
			"Her love she wished to please",
			"Sweet juice from berry squeezed",
			"My heart to love's hot fire freeze",
			"Let this that blessed moment seize!",
			"My love cajoles, my love doth tease",
			"The Gods we are careful to appease",
			"Sing me again love's sweet reprise",
			"Alas, my heart has love's disease!",
			"More tempting than Dibella's knees"]
	},
	{
		id: 911,
		lines: [
			"O, where doth thou roam?",
			"See Sentinel's stately pleasure dome?",
			"The sea doth spray and foam",
			"When will thou come home?",
			"Work me hardier than a gnome",
			"Mara wrote love's sacred tome",
			"If you want, around the world roam",
			"A house that is not a home"]
	},
	{
		id: 912,
		lines: [
			"Then come and kiss me, twenty and sweet",
			"There is nothing I can eat",
			"Rat-rat-rat, the drums doth beat",
			"If it's all a game, my love, let's cheat",
			"Let me warm me with all thy heat",
			"In the valley, hear the sheep sad bleat",
			"O Notorgo, make my message fleet",
			"Heart cold as Morning Star Skyrim sleet",
			"Let us feast on wine and fruit and meat!",
			"Arkay, cruel fate thee must mete",
			"The twinkling stars, love, let us greet",
			"Shall I see thee in a %cn street?",
			"Thy hair, lush and brown, like Breton wheat",
			"She is strong and he effete",
			"The naughty night the dawn doth defeat",
			"Elect me to the guards elite",
			"My sweetest love, must I repeat?",
			"Against such odds, dare we compete?",
			"Don't ask me, love, to be discreet",
			"From such a sight I can't retreat",
			"Love me dear, she doth entreat",
			"But lovers heart brim with deceit",
			"Is not such science made obsolete?",
			"I kiss you from your head to your feet"]
	},
	{
		id: 913,
		lines: [
			"Merrily, merrily shall I live now",
			"She shall curtsey and he shall bow",
			"O'er the stream, lush flowerful bough",
			"In the fields, the slave doth plough",
			"Furrow not, my love, thy brow",
			"The hog doth nuzzle with his sow",
			"I am free, my love, art thou?",
			"Swear not, my love, a sacred vow",
			"Strange, I want to be with thou."]
	},
	{
		id: 914,
		lines: [
			"All follow this, and come to dust",
			"Her face was fair and round her bust",
			"No law against love can be just",
			"If thou likes, thou may call it lust",
			"I despair about doing what I must",
			"The sword in the scabbard doth rust",
			"There is no love where there is no trust",
			"To the bright sky winged birds do thrust",
			"Perhaps my song fills thee with disgust",
			"To be strong, my love, thou must adjust",
			"See thee that knight, strong and robust?",
			"Fill me with a wanderlust"]
	},
	{
		id: 915,
		lines: [
			"The while I think on thee, dear friend",
			"The beginning comes closest to the end",
			"The river is deepest at its widest bend",
			"Neither borrow, love, nor lend!",
			"Love of body and soul do blend",
			"With pain, I feel my heart doth mend",
			"The fool this ballad sour hath penned",
			"Nights of bliss with thee I spend",
			"To thee, all my cares I send",
			"The past uncouth, the future unkenned",
			"Your honor, know thee I will defend",
			"This passion I feel should not offend",
			"To Oblivion, my spirit doth descend",
			"I fear, my love, thou doth condescend",
			"The villian the knight shall apprehend",
			"Love, can this thou comprehend?",
			"On thy kind heart, I shall depend",
			"O'er proud %cn, the stars suspend",
			"My finest garments shall I rend"]
	},
	{
		id: 916,
		lines: [
			"Lilies that fester smell worse than weed",
			"I starve though from thy hand I feed",
			"O Mara, thy cruel law I must heed",
			"Follow, dear, the path I lead",
			"From the blade of lust my soul doth bleed",
			"To thee, fair Mara, thy mercy I plead",
			"Eat good food and drink fine mead",
			"Thou may find thou gets what thou need",
			"Come water of Rains Hand, come with speed",
			"Thou noblest specie, thou finest breed",
			"Love is my religion, but sorrow my creed",
			"Take me as thine, for love not for greed",
			"Rain is aplenty in the month of First Seed",
			"Strong like an ox, and swift as a steed",
			"Your pride I swear I would never mislead",
			"Foul laws of men doth true love impede",
			"Your beauty and grace none can exceed"]
	},
	{
		id: 917,
		lines: [
			"By Mara, I think my love rare",
			"Flying like strong falcons high in the air",
			"Like truth, I would see thy body bare",
			"I kiss your lips and your neck so fair",
			"Love makes us reckless, without care",
			"Such boldness of passion do I dare",
			"And how, my love, doth thou fare?",
			"Sunshine in Mid Year shines your hair",
			"He was her stallion, she his mare",
			"Together, they walk down to the square",
			"You never have seen a prettier pair!",
			"O goddess Mara, acknowledge my prayer!",
			"Bathed in sunlight, sunlight to wear",
			"On moonlight and stars, lovers do swear",
			"My love to thee I do sadly declare",
			"To a spring dawn, I would not compare",
			"My life is in agony, I am filled with despair",
			"I remember that melancholy affair",
			"My darling love, let the buyer beware"]
	},
	{
		id: 918,
		lines: [
			"Reach with thy white hands out to me",
			"Where jealousy walks, there sorrow be",
			"I hold the locket, and thou hast the key",
			"On thy bonny hair, I spy a flea",
			"When thou seest love, do not flee",
			"My goddess, O Mara, I do plea",
			"What does it mean to be truly free?",
			"Add one to us, love, and make three",
			"Birds chatter love songs in their tree",
			"But you, my love, are far across the sea",
			"You give yourself and I give myself to thee",
			"So it was stated by Mara's decree",
			"No fool doth love ever guarantee",
			"What a sight my eyes do see!",
			"You drowned within the raging sea",
			"I brought your soul inside of me"]
	},
	{
		id: 919,
		lines: [
			"I got me flowers to strew thy way",
			"Thy hair night-black, thy eyes bright as day",
			"With a nonny, nonny, nonny, nonny, hey!",
			"On a bough of flowers, my body lay",
			"Like children, in gold fields we play",
			"What price for love we fools do pay!",
			"Like clouds fore the storm, I turn gray",
			"My darling, beside me please stay!",
			"My love like a strong branch ne'er will sway",
			"Flowers you pluck to make your bouquet",
			"The dancers begin their sad ballet",
			"Now let us sport while we may",
			"My love, thou art so far far away",
			"A thousand wasted hours every day",
			"Would thou simply throw me away?"]
	},
	{
		id: 920,
		lines: [
			"Sweet day, so cool, so calm and bright",
			"Shelter yourself from jealousy's bite",
			"Peace, my love, I weary of the fight",
			"Let us hold our love up to the light",
			"Harvests come of plenty and blight",
			"Pity not me my sorrowful plight!",
			"Struggle we do with all our might",
			"She was his lady and he her knight",
			"Walketh thou in beauty like the night",
			"Thou paineth me of jealous spite",
			"I curse my eyes for their sight",
			"I spy in the field a horse so white",
			"Come my love, come at twilight",
			"Of thee, dear, I do delight",
			"I am in the room without a light",
			"I would give anything to hold you tight",
			"I would love to take you home tonight",
			"Take me in your arms this very night"]
	},
	{
		id: 921,
		lines: [
			"Thus sang the uncouth swain",
			"Thy love is like a sweet, sweet bane",
			"If this be love, I cannot feign",
			"Bring me the knife that I be slain",
			"Why must love bring so much pain?",
			"In my heart a tyrant doth reign",
			"Thou left me standing in the rain",
			"How, my love, can thou be vain?",
			"The fickle moon doth wax and wane",
			"My heart is broke again in twain",
			"Forces occult, daedric, arcane",
			"With words, I to you enchain",
			"You look to me with true disdain",
			"How can I pray hope regain?",
			"Perhaps, my love, I should explain",
			"How do lovers from love abstain?",
			"Thou came to me like a hurricane",
			"I can see through thy legerdemain",
			"I am plagued with thoughts inane",
			"I only hope I might entertain",
			"'Twere lovers and madmen e'er sane?"]
	},
	{id: 1000, lines: [
			"%mat %arm [0xFD]%mod to armor rating[0xFD]Condition: %qua[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1001, lines: [
			"%mat %wep [0xFD]%wdm points of damage[0xFD]Condition: %qua[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1002, lines: [
			"%mit [0xFD]Condition: %qua[0xFD]Worth: %wth gold[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1003, lines: [
			"%it[0xFD]Condition: %qua[0xFD]Worth: %wth gold[0xFD]Weight: %kg kilograms[0xFD]"]},
	{
		id: 1004,
		lines: [
			"%it[0xFD]Holding: %hs[0xFD]Condition: %qua[0xFD]Worth: %wth gold[0xFD]Weight: %kg kilograms[0xFD]"]
	},
	{
		id: 1005,
		lines: [
			"%mat %wep [0xFD]%wdm points of damage[0xFD]Condition: %qua[0xFD]Weight: %kg kilograms[0xFD]Poisoned with %wpn"]
	},
	{
		id: 1006,
		lines: [
			"%it[0xFD]Condition: %qua[0xFD]Worth: %wth gold[0xFD]Weight: %kg kilograms[0xFD]Containing: %wpn"]
	},
	{id: 1007, lines: [
			"%it[0xFD]Worth: %wth gold[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1008, lines: [
			"%po[0xFD]Worth: %wth gold[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1009, lines: [
			"%bt by %ba[0xFD]Worth: %wth gold[0xFD]Weight: %kg kilograms[0xFD]"]},
	{
		id: 1010,
		lines: [
			"You are not well and may not survive[0xFD] an extended period of travel. Do you[0xFD] still wish to continue with the fast[0xFD] travel ?[0xFD]"]
	},
	{id: 1011, lines: [
			"%wep[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1012, lines: [
			"%wep [0xFD]%wdm points of damage[0xFD]Condition: %qua[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1013, lines: [
			"%wep [0xFD]Condition: %qua[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1014, lines: [
			"%arm [0xFD]%mod to armor rating[0xFD]Condition: %qua[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1015, lines: [
			"Oghma Infinium[0xFD]Worth: 50000 gold[0xFD]Weight: %kg kilograms[0xFD]"]},
	{id: 1016, lines: [
			"Item powers:[0xFC] %mpw[0xFD]"]},
	{id: 1068, lines: [
			"Your class prohibits[0xFD] you from equipping this.[0xFD]"]},
	{id: 1069, lines: [
			"Are you sure you want to exit the game?[0xFD]"]},
	{id: 1071, lines: [
			"You drop to the ground, completely exhausted.[0xFD] You awaken one hour later.[0xFD]"]},
	{
		id: 1072,
		lines: [
			"You drop to the ground, completely exhausted.[0xFD] In that state you are easy prey to roaming monsters[0xFD] and never awaken.[0xFD]"]
	},
	{id: 1073, lines: [
			"Deed for your house in the region[0xFD] of %hrg in the town of[0xFD] %htwn.[0xFD]"]},
	{
		id: 1200,
		lines: [
			"Paralysis[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to be paralyzed.[0xFD]Base chance of success is %bch, plus %ach every %clc level(s)[0xFD]of caster's ability. If successful, target will be paralyzed[0xFD]for %bdr round(s), plus %adr[0xFD]additional round(s) every %cld level(s) of the the caster,[0xFD]unless target is cured.\"[0xFD]"]
	},
	{
		id: 1201,
		lines: [
			"Paralysis[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to be paralyzed.[0xFD]Base chance of success is %bch, plus %ach every %clc level(s)[0xFD]of caster's ability. If successful, target will be paralyzed[0xFD]for %bdr round(s), plus %adr[0xFD]additional round(s) every %cld level(s) of the the caster,[0xFD]unless target is cured.\"[0xFD]"]
	},
	{
		id: 1202,
		lines: [
			"Paralysis[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to be paralyzed.[0xFD]Base chance of success is %bch, plus %ach every %clc level(s)[0xFD]of caster's ability. If successful, target will be paralyzed[0xFD]for %bdr round(s), plus %adr[0xFD]additional round(s) every %cld level(s) of the the caster,[0xFD]unless target is cured.\"[0xFD]"]
	},
	{
		id: 1203,
		lines: [
			"Continuous Damage -- Health[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's health to be damaged.[0xFD]Target will lose %1bm to %2bm points of health[0xFD]every round, plus %1am to %2am points for every %clm level(s)[0xFD] of the caster.\"[0xFD]"]
	},
	{
		id: 1204,
		lines: [
			"Continuous Damage -- Health[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's health to be damaged.[0xFD]Target will lose %1bm to %2bm points of health[0xFD]every round, plus %1am to %2am points for every %clm level(s)[0xFD] of the caster.\"[0xFD]"]
	},
	{
		id: 1205,
		lines: [
			"Continuous Damage -- Fatigue[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Fatigue to be damaged.[0xFD] Target will lose %1bm to %2bm points of Fatigue every round,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD] of the caster.\"[0xFD]"]
	},
	{
		id: 1206,
		lines: [
			"Continuous Damage -- Spell Points[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Spell Points to be damaged.[0xFD] Target will lose %1bm to %2bm Spell Points[0xFD]every round, plus %1am to %2am points for every %clm level(s)[0xFD] of the caster.\"[0xFD]"]
	},
	{
		id: 1207,
		lines: [
			"Create Item[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Creates one useful item of the caster's choosing.[0xFD]Item lasts for %bdr round(s), plus %adr round(s)[0xFD]for every %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1209,
		lines: [
			"Cure -- Disease[0xFD] Duration: N/A + N/A per 1 level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Cures target of disease.[0xFD]Base chance of success is %bch, plus %ach[0xFD]for every %clc level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1210,
		lines: [
			"Cure -- Poison[0xFD] Duration: N/A + N/A per 1 level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Cures target of poison.[0xFD]Base chance of success is %bch, plus %ach[0xFD]for every %clc level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1211,
		lines: [
			"Cure -- Paralysis[0xFD] Duration: N/A + N/A per 1 level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Cures target of paralysis.[0xFD]Base chance of success is %bch, plus %ach[0xFD]for every %clc level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1212,
		lines: [
			"Damage -- Health[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Health to be damaged.[0xFD]Target will lose %1bm to %2bm points of Health every round,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster.\"[0xFD]"]
	},
	{
		id: 1213,
		lines: [
			"Damage -- Fatigue[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Fatigue to be damaged.[0xFD] Target will lose %1bm to %2bm points of Fatigue every round,[0xFD] plus %1am to %2am points for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1214,
		lines: [
			"Damage -- Spell Points[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Spell Points to be damaged.[0xFD] Target will lose %1bm to %2bm Spell Points every round,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD] of the caster.\"[0xFD]"]
	},
	{
		id: 1215,
		lines: [
			"Disintegrate[0xFD] Duration: N/A + N/A per 1 level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes target to disintegrate.[0xFD]Base chance of success is %bch, plus %ach for every %clc level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1216,
		lines: [
			"Dispel -- Magic[0xFD] Duration: N/A + N/A per N/A level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes magic to be dispelled.[0xFD]Base chance of success is %bch,[0xFD]plus %ach for every %clc level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1217,
		lines: [
			"Dispel -- Undead[0xFD] Duration: N/A + N/A per N/A level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes undead to be dispelled.[0xFD]Base chance of success is %bch,[0xFD]plus %ach for every %clc level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1218,
		lines: [
			"Dispel -- Daedra[0xFD] Duration: N/A + N/A per N/A level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes Daedra to be dispelled.[0xFD]Base chance of success is %bch,[0xFD]plus %ach for every %clc level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1219,
		lines: [
			"Drain -- Strength[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Strength to be drained.[0xFD]Target will lose %1bm to %2bm points of Strength[0xFD]every round, plus %1am to %2am points[0xFD]for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1220,
		lines: [
			"Drain -- Intelligence[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Intelligence to be drained.[0xFD]Target will lose %1bm to %2bm points of Intelligence[0xFD]every round, plus %1am to %2am points[0xFD]for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1221,
		lines: [
			"Drain -- Willpower[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Willpower to be drained.[0xFD]Target will lose %1bm to %2bm points of Willpower[0xFD]every round, plus %1am to %2am points[0xFD]for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1222,
		lines: [
			"Drain -- Agility[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Agility to be drained.[0xFD]Target will lose %1bm to %2bm points of Agility[0xFD]every round, plus %1am to %2am points[0xFD]for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1223,
		lines: [
			"Drain -- Endurance[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Endurance to be drained.[0xFD]Target will lose %1bm to %2bm points of Endurance[0xFD]every round, plus %1am to %2am points[0xFD]for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1224,
		lines: [
			"Drain -- Speed[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Speed to be drained.[0xFD]Target will lose %1bm to %2bm points of Speed[0xFD]every round, plus %1am to %2am points[0xFD]for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1225,
		lines: [
			"Drain -- Personality[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Personality to be drained.[0xFD]Target will lose %1bm to %2bm points of Personality[0xFD]every round, plus %1am to %2am points[0xFD]for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1226,
		lines: [
			"Drain -- Luck[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target's Luck to be drained.[0xFD]Target will lose %1bm to %2bm points of Luck[0xFD]every round, plus %1am to %2am points[0xFD]for every %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1227,
		lines: [
			"Elemental Resistance -- Fire[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes target to be resistant to fire.[0xFD] Spell lasts %bdr round(s), plus %adr round(s)[0xFD] per %cld level(s) of caster. Base chance of success[0xFD] is %bch, plus %ach for every %clc level(s) of the caster.[0xFD] Target takes half damage if spell is unsuccessful.\"[0xFD]"]
	},
	{
		id: 1228,
		lines: [
			"Elemental Resistance -- Frost[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes target to be resistant to cold.[0xFD] Spell lasts %bdr round(s), plus %adr round(s)[0xFD] per %cld level(s) of caster. Base chance of success[0xFD] is %bch, plus %ach for every %clc level(s) of the caster.[0xFD] Target takes half damage if spell is unsuccessful.\"[0xFD]"]
	},
	{
		id: 1229,
		lines: [
			"Elemental Resistance -- Poison[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes target to be resistant to poison.[0xFD] Spell lasts %bdr round(s), plus %adr round(s)[0xFD] per %cld level(s) of caster. Base chance of success[0xFD] is %bch, plus %ach for every %clc level(s) of the caster.[0xFD] Target takes half damage if spell is unsuccessful.\"[0xFD]"]
	},
	{
		id: 1230,
		lines: [
			"Elemental Resistance -- Shock[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes target to be resistant to shock.[0xFD] Spell lasts %bdr round(s), plus %adr round(s)[0xFD] per %cld level(s) of caster. Base chance of success[0xFD] is %bch, plus %ach for every %clc level(s) of the caster.[0xFD] Target takes half damage if spell is unsuccessful.\"[0xFD]"]
	},
	{
		id: 1231,
		lines: [
			"Elemental Resistance -- Magic[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes target to be resistant to magic.[0xFD] Spell lasts %bdr round(s), plus %adr round(s)[0xFD] per %cld level(s) of caster. Base chance of success[0xFD] is %bch, plus %ach for every %clc level(s) of the caster.[0xFD] Target takes half damage if spell is unsuccessful.\"[0xFD]"]
	},
	{
		id: 1232,
		lines: [
			"Fortify Strength[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Increases target's Strength.[0xFD]Target will gain %1bm to %2bm points of Strength[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster. Increase lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1233,
		lines: [
			"Fortify Intelligence[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Increases target's Intelligence.[0xFD]Target will gain %1bm to %2bm points of Intelligence[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster. Increase lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1234,
		lines: [
			"Fortify Willpower[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Increases target's Willpower.[0xFD]Target will gain %1bm to %2bm points of Willpower[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster. Increase lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1235,
		lines: [
			"Fortify Agility[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Increases target's Agility.[0xFD]Target will gain %1bm to %2bm points of Agility[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster. Increase lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1236,
		lines: [
			"Fortify Endurance[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Increases target's Endurance.[0xFD]Target will gain %1bm to %2bm points of Endurance[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster. Increase lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1237,
		lines: [
			"Fortify Personality[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Increases target's Personality.[0xFD]Target will gain %1bm to %2bm points of Personality[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster. Increase lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1238,
		lines: [
			"Fortify Speed[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Increases target's Speed.[0xFD]Target will gain %1bm to %2bm points of Speed[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster. Increase lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1239,
		lines: [
			"Fortify Luck[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Increases target's Luck.[0xFD]Target will gain %1bm to %2bm points of Luck[0xFD]plus %1am to %2am points for every %cs %1am to %2am points for every %clm level(s)[0xFD] of the caster. Increase lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1240,
		lines: [
			"Heal Strength[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Strength.[0xFD]Target will heal %1bm to %2bm points of Strength,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Strength[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1241,
		lines: [
			"Heal Intelligence[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Intelligence.[0xFD]Target will heal %1bm to %2bm points of Intelligence,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Intelligence[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1242,
		lines: [
			"Heal Willpower[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Willpower.[0xFD]Target will heal %1bm to %2bm points of Willpower,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Willpower[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1243,
		lines: [
			"Heal Agility[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Agility.[0xFD]Target will heal %1bm to %2bm points of Agility,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Agility[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1244,
		lines: [
			"Heal Endurance[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Endurance.[0xFD]Target will heal %1bm to %2bm points of Endurance,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Endurance[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1245,
		lines: [
			"Heal Personality[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Personality.[0xFD]Target will heal %1bm to %2bm points of Personality,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Personality[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1246,
		lines: [
			"Heal Speed[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Speed.[0xFD]Target will heal %1bm to %2bm points of Speed,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Speed[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1247,
		lines: [
			"Heal Luck[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Luck.[0xFD]Target will heal %1bm to %2bm points of Luck,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Luck[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1248,
		lines: [
			"Heal Health[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Health.[0xFD]Target will heal %1bm to %2bm points of Health,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Health[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1249,
		lines: [
			"Heal Fatigue[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Heals target's Fatigue.[0xFD]Target will heal %1bm to %2bm points of Fatigue,[0xFD]plus %1am to %2am points for every %clm level(s)[0xFD] of the caster until target's Fatigue[0xFD]is at its normal level.\"[0xFD]"]
	},
	{
		id: 1250,
		lines: [
			"Transfer Strength[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Strength to caster.[0xFD] Target will transfer %1bm to %2bm points of Strength,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1251,
		lines: [
			"Transfer Intelligence[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Intelligence to caster.[0xFD] Target will transfer %1bm to %2bm points of Intelligence,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1252,
		lines: [
			"Transfer Willpower[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Willpower to caster.[0xFD] Target will transfer %1bm to %2bm points of Willpower,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1253,
		lines: [
			"Transfer Agility[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Agility to caster.[0xFD] Target will transfer %1bm to %2bm points of Agility,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1254,
		lines: [
			"Transfer Endurance[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Endurance to caster.[0xFD] Target will transfer %1bm to %2bm points of Endurance,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1255,
		lines: [
			"Transfer Personality[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Personality to caster.[0xFD] Target will transfer %1bm to %2bm points of Personality,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1256,
		lines: [
			"Transfer Speed[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Speed to caster.[0xFD] Target will transfer %1bm to %2bm points of Speed,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1257,
		lines: [
			"Transfer Luck[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Luck to caster.[0xFD] Target will transfer %1bm to %2bm points of Luck,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1258,
		lines: [
			"Transfer Health[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Health to caster.[0xFD] Target will transfer %1bm to %2bm points of Health,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1259,
		lines: [
			"Transfer Fatigue[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Transfers target's Fatigue to caster.[0xFD] Target will transfer %1bm to %2bm points of Fatigue,[0xFD] plus %1am to %2am points for every %clm level(s)[0xFD]of the caster.\"[0xFD]"]
	},
	{
		id: 1260,
		lines: [
			"Invisibility (Normal)[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Turns target invisible.[0xFD]Target will remain invisible for %bdr round(s),[0xFD]plus %adr round(s) for every %cld level(s) of caster.[0xFD] If target attacks something, invisibility is dispelled.\"[0xFD]"]
	},
	{
		id: 1261,
		lines: [
			"Invisibility (True)[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Turns target invisible. Target will remain invisible for %bdr round(s),[0xFD]plus %adr round(s) for every %cld level(s) of caster.[0xFD] If target attacks something, target will still remain invisible.\"[0xFD]"]
	},
	{
		id: 1262,
		lines: [
			"Levitate[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Target is able to float above the ground.[0xFD] Target will levitate for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level of caster.\"[0xFD]"]
	},
	{
		id: 1263,
		lines: [
			"Light[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Bright light source created around target.[0xFD] Light will remain for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level of caster.\"[0xFD]"]
	},
	{
		id: 1264,
		lines: [
			"Lock[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Locks chest or door to a lock-level equal to the caster's level.[0xFD] Spell lasts %bdr round(s), plus %adr round(s) per %cld level(s)[0xFD] of caster. Base chance of success is %bch,[0xFD] plus %ach for every %clc level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1265,
		lines: [
			"Open[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Opens chest or door with lock-level equal to or less than[0xFD] the caster's level. Base chance of success is %bch,[0xFD] plus %ach for every %clc level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1266,
		lines: [
			"Regeneration[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Regenerates target's Health. Target will gain %1bm to %2bm[0xFD] points of Health plus %1am to %2am points[0xFD] for every %clm level(s) of the caster.  Increases continue[0xFD] %bdr round(s), plus %adr round(s) for every[0xFD] %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1267,
		lines: [
			"Silence[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Silences target, making casting spells impossible.[0xFD] Base chance of success is %bch, plus %ach every %clc level(s)[0xFD] of the caster. Silence lasts %bdr round(s), plus[0xFD] %adr round(s) for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1268,
		lines: [
			"Spell Absorption[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Target is able to absorb incoming spells, adding their[0xFD] energy to his or her own store. Base chance of success[0xFD] is %bch, plus %ach every %clc level(s) of the caster.[0xFD] Absorption lasts %bdr round(s), plus %adr round(s) for[0xFD] every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1269,
		lines: [
			"Spell Reflection[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Target is able to reflect incoming spells back at the caster.[0xFD] Base chance of success is %bch, plus %ach every %cld level(s)[0xFD] of the caster. Reflection lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1270,
		lines: [
			"Spell Resistance[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Target is able to resist incoming spells. Base chance of[0xFD]success is %bch, plus %ach every %clc level(s) of the caster.[0xFD] Resistance lasts %bdr round(s), plus %adr round(s) for[0xFD] every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1271,
		lines: [
			"Chameleon (Normal)[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Makes target very difficult to see. Target will remain[0xFD] so for %bdr round(s), plus %adr round(s) for every %cld level[0xFD] of caster. If target attacks something,[0xFD] chameleon spell is aborted.\"[0xFD]"]
	},
	{
		id: 1272,
		lines: [
			"Chameleon (True)[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Makes target very difficult to see. Target will remain[0xFD] so for %bdr round(s), plus %adr round(s) for every[0xFD] %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1273,
		lines: [
			"Shadow (Normal)[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to meld into normal shadows. Target will[0xFD] remain so for %bdr round(s), plus %adr round(s) for every[0xFD] %cld level(s) of caster. If target attacks something,[0xFD] shadow spell is aborted.\"[0xFD]"]
	},
	{
		id: 1274,
		lines: [
			"Shadow (True)[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to meld into normal shadows. Target will[0xFD] remain so for %bdr round(s), plus %adr round(s) for every[0xFD] %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1275,
		lines: [
			"Slowfall (Normal, Trigger)[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to fall at half the natural rate,[0xFD] greatly reducing damage. After being cast, spell will[0xFD] remain active for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster, and will trigger when[0xFD] target starts to fall.\"[0xFD]"]
	},
	{
		id: 1276,
		lines: [
			"Free Action[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Cures the target of paralysis for %bdr round(s),[0xFD] plus %adr round(s) for every %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1277,
		lines: [
			"Jumping[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to jump at twice natural capacity.[0xFD] After being cast, spell remains active for %bdr round(s),[0xFD] plus %adr round(s) for every %cld level(s) of caster,[0xFD] and will trigger when target jumps.\"[0xFD]"]
	},
	{
		id: 1278,
		lines: [
			"Climbing[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to climb at twice the natural rate.[0xFD] After being cast, spell remains active for %bdr round(s),[0xFD] plus %adr round(s) for every %cld level(s) of caster,[0xFD] and will trigger when target begins to climb.\"[0xFD]"]
	},
	{
		id: 1279,
		lines: [
			"Morph Self[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to transform into a creature or object[0xFD] selected by the caster. The base chance of successfully[0xFD] polymorphing is %bch, plus %ach for every %clc level(s) of[0xFD] the caster. Transformation lasts %bdr round(s),[0xFD] plus %adr round(s) for every %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1280,
		lines: [
			"Morph Other[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to transform into a creature or object[0xFD] selected by the caster. The base chance of successfully[0xFD] polymorphing is %bch, plus %ach for every %clc level(s) of[0xFD] the caster. Transformation lasts %bdr round(s),[0xFD] plus %adr round(s) for every %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1281,
		lines: [
			"Morph Item[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Causes target to transform into a creature or object[0xFD] selected by the caster. The base chance of successfully[0xFD] polymorphing is %bch, plus %ach for every %clc level(s) of[0xFD] the caster. Transformation lasts %bdr round(s),[0xFD] plus %adr round(s) for every %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1282,
		lines: [
			"Water Breathing[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes target to be able to breathe normally under water.[0xFD] The base chance of successfully casting is %bch,[0xFD] plus %ach for every %clc level(s) of the caster.[0xFD] Water breathing lasts %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1283,
		lines: [
			"Water Walking[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Allows target to walk on water. After being cast,[0xFD] spell will remain active for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1284,
		lines: [
			"Diminution[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Causes target to shrink to half its normal size.[0xFD] Base chance for success is %bch, plus an additional[0xFD] %ach for every %clc level(s) of the caster.[0xFD] Dimunization will last for %bdr round(s),[0xFD] plus %adr round(s) for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1285,
		lines: [
			"Pacify Animal[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Pacifies any living beast of subhumanoid intelligence.[0xFD] Base chance for success is %bch, plus an additional[0xFD] %ach for every %clc level(s) of the caster.[0xFD] Pacification will last for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1286,
		lines: [
			"Pacify Undead[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Pacifies undead creatures. Base chance for success[0xFD] is %bch, plus an additional %ach for every %clc[0xFD] level(s) of the caster. Pacification will last[0xFD] for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1287,
		lines: [
			"Pacify Humanoid[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Pacifies humanoid creatures. Base chance for success[0xFD] is %bch, plus an additional %ach for every %clc[0xFD] level(s) of the caster. Pacification will last[0xFD] for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1288,
		lines: [
			"Pacify Daedra[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Pacifies Daedra. Base chance for success[0xFD] is %bch, plus an additional %ach for every %clc[0xFD] level(s) of the caster. Pacification will last[0xFD] for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1289,
		lines: [
			"Charm[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Raises caster's charm with target, thereby improving[0xFD] caster's reputation. Base chance for success is %bch,[0xFD] plus an additional %ach for every %clc level(s) of the caster.[0xFD] Charm will last for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1290,
		lines: [
			"Shield[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Creates shield around caster that absorbs the  equivalent[0xFD] of %1bm - %2bm Health Points, plus %1am - %2am Health[0xFD] Points every %clm level(s) of the caster. When shield[0xFD] has taken its maximum damage, or %bdr plus %adr for every[0xFD] %cld level(s) of caster rounds has elapsed,[0xFD] shield will be dispelled.\"[0xFD]"]
	},
	{
		id: 1291,
		lines: [
			"Shield[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Creates shield around caster that absorbs the  equivalent[0xFD] of %1bm - %2bm Health Points, plus %1am - %2am Health[0xFD] Points every %clm level(s) of the caster. When shield[0xFD] has taken its maximum damage, or %bdr plus %adr for every[0xFD] %cld level(s) of caster rounds has elapsed,[0xFD] shield will be dispelled.\"[0xFD]"]
	},
	{
		id: 1292,
		lines: [
			"Shield[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Creates shield around caster that absorbs the  equivalent[0xFD] of %1bm - %2bm Health Points, plus %1am - %2am Health[0xFD] Points every %clm level(s) of the caster. When shield[0xFD] has taken its maximum damage, or %bdr plus %adr for every[0xFD] %cld level(s) of caster rounds has elapsed,[0xFD] shield will be dispelled.\"[0xFD]"]
	},
	{
		id: 1293,
		lines: [
			"Shield[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Creates shield around caster that absorbs the  equivalent[0xFD] of %1bm - %2bm Health Points, plus %1am - %2am Health[0xFD] Points every %clm level(s) of the caster. When shield[0xFD] has taken its maximum damage, or %bdr plus %adr for every[0xFD] %cld level(s) of caster rounds has elapsed,[0xFD] shield will be dispelled.\"[0xFD]"]
	},
	{
		id: 1294,
		lines: [
			"Astral Travel[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Sends caster to the Astral Plane. Chance of success[0xFD] is %bch, plus %ach every %clc level(s) of the caster.[0xFD] Caster will remain in the Astral Plane for %bdr round(s),[0xFD] plus %adr round(s) for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1295,
		lines: [
			"Etherealness[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Turns caster ethereal, thus able to walk through[0xFD] walls. Chance of success is %bch, plus %ach every[0xFD] %clc level(s) of the caster. Caster will remain[0xFD] ethereal for %bdr round(s), plus %adr round(s) for[0xFD] every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1296,
		lines: [
			"Detect Magic[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Caster is able to detect all magic in a 30' cone[0xFD] projected from caster. Chance of success is %bch,[0xFD] plus %ach every %cld level(s) of the caster. Spell[0xFD] will remain active for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1297,
		lines: [
			"Detect Enemy[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Caster is able to detect all enemies in a 30' cone[0xFD] projected from caster. Chance of success is %bch,[0xFD] plus %ach every %cld level(s) of the caster. Spell[0xFD] will remain active for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1298,
		lines: [
			"Detect Treasure[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Caster is able to detect all treasure in a 30' cone[0xFD] projected from caster. Chance of success is %bch,[0xFD] plus %ach every %cld level(s) of the caster. Spell[0xFD] will remain active for %bdr round(s), plus %adr round(s)[0xFD] for every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1299,
		lines: [
			"Identify[0xFD] Duration: N/A + N/A per N/A level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Identifies the target of the spell. Chance of[0xFD] success is %bch, plus %ach every %clc level(s)[0xFD] of the caster.\"[0xFD]"]
	},
	{
		id: 1300,
		lines: [
			"Wizard Sight[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Allows caster's vision to travel separately from[0xFD] his or her body. Chance of success is %bch, plus[0xFD] %ach every %clc level(s) of the caster. Spell will[0xFD] last for %bdr round(s), plus %adr round(s) for[0xFD] every %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1301,
		lines: [
			"Darkness[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Darkness created around target. Spell will remain[0xFD] for %bdr round(s), plus %adr round(s) for every[0xFD] %cld level(s) of caster.\"[0xFD]"]
	},
	{
		id: 1302,
		lines: [
			"Teleport[0xFD] Duration: N/A + N/A per N/A level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Teleports caster to a chosen location. The caster[0xFD] must cast the spell in the designated location initially,[0xFD] then will be able to teleport there later. Each casting[0xFD] will allow the caster to change the target location of[0xFD] the spell. Chance of success is %bch, plus %ach every[0xFD] %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1303,
		lines: [
			"Soul Trap[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"After death, target's spell becomes trapped in any[0xFD] receptacle of the caster indefinitely. Target's body must[0xFD] die within %bdr round(s), plus %adr round(s)[0xFD] per %cld level(s)[0xFD] of the caster after being ensorcelled.[0xFD] The chance of successfully trapping a soul is %bch, plus[0xFD] %ach every %cld level(s) of the caster\"[0xFD]"]
	},
	{
		id: 1304,
		lines: [
			"Telekinesis[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Telekinesis allows the caster to move objects at[0xFD] a distance, by mental exertion. The weight of objects[0xFD] that can be moved is %1bm - %2bm kg plus %1am - %2am[0xFD] kilos per %clm level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1305,
		lines: [
			"Comprehend Languages[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: %bch + %ach per %clc level(s)[0xFD] Magnitude: N/A + N/A per N/A level(s)[0xFD] \"Caster can comprehend any written or spoken tongue[0xFD] so long as the spell is active. The spell lasts for[0xFD] %bdr round(s), plus %adr round(s) per %cld[0xFD] level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1306,
		lines: [
			"Intensify Fire[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Caster may intensify the light of a normal fire.[0xFD] Light may be intensified up to %1bm to %2bm candle(s)[0xFD] plus %1am to %2am candle(s) per %clm level(s) of the[0xFD] caster. Spell lasts %bdr round(s), plus %adr round(s)[0xFD] per %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1307,
		lines: [
			"Diminish Fire[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Caster may dim the light of a normal fire.[0xFD] Light may be diminished by %1bm to %2bm candle(s)[0xFD] plus %1am to %2am candle(s) per %clm level(s) of the[0xFD] caster. Spell lasts %bdr round(s), plus %adr round(s)[0xFD] per %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1308,
		lines: [
			"Wall of Stone[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Caster creates a wall of stone, %1bm to %2bm square meters[0xFD] for every %clm level(s) of the caster. Wall lasts %bdr[0xFD] round(s) plus %adr additional round(s) for every %cld[0xFD] level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1309,
		lines: [
			"Wall of Fire[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Caster creates a wall of fire, %1bm to %2bm square meters[0xFD] for every %clm level(s) of the caster. Wall lasts %bdr[0xFD] round(s) plus %adr additional round(s) for every %cld[0xFD] level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1310,
		lines: [
			"Wall of Frost[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Caster creates a wall of ice, %1bm to %2bm square meters[0xFD] for every %clm level(s) of the caster. Wall lasts %bdr[0xFD] round(s) plus %adr additional round(s) for every %cld[0xFD] level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1311,
		lines: [
			"Wall of Poison[0xFD] Duration: %bdr + %adr per %cld level(s)[0xFD] Chance: N/A + N/A per N/A level(s)[0xFD] Magnitude: %1bm - %2bm + %1am - %2am[0xFD] per %clm level(s)[0xFD] \"Caster creates a wall of poison gas, %1bm to %2bm square[0xFD] meters for every %clm level(s) of the caster. Wall lasts[0xFD] %bdr round(s) plus %adr additional round(s) for every[0xFD] %cld level(s) of the caster.\"[0xFD]"]
	},
	{
		id: 1350,
		lines: [
			"You have already picked an[0xFD] advantage or disadvantage[0xFD] than conflicts with this one.[0xFD]"]
	},
	{
		id: 1360,
		lines: [
			"Alteration refers to the School of Alteration,[0xFD] one of the six avenues of magical study. This[0xFD] school is concerned with magicka's ability to[0xFD] change the very structure and composition of[0xFD] objects. Dimunition and Shield are two classic[0xFD] Alteration spells.[0xFD]"]
	},
	{
		id: 1361,
		lines: [
			"Archery is the skill governing one's ability[0xFD] to hit targets and cause damage using a bow[0xFD] and arrow.[0xFD]"]
	},
	{
		id: 1362,
		lines: [
			"Axe is the skill automatically checked whenever[0xFD] one uses a battleaxe or a waraxe on a target.[0xFD]"]
	},
	{
		id: 1363,
		lines: [
			"Backstabbing is a skill checked whenever a[0xFD] target is struck from behind. It is easier[0xFD] for a person proficient at this skill to hit[0xFD] a target from behind. It is also probable[0xFD] that more damage will be dealt with a[0xFD] well-delivered backstab.[0xFD]"]
	},
	{
		id: 1364,
		lines: [
			"Blunt Weapon is a skill checked whenever one[0xFD] strikes a target with a heavy, blunt weapon[0xFD] such as a mace or a staff. Proficient Blunt[0xFD] Weapon specialists have a greater chance of[0xFD] hitting and cause more damage with each blow.[0xFD]"]
	},
	{
		id: 1365,
		lines: [
			"Centaurian is a language skill checked[0xFD] whenever one tries to talk with a Centaur.[0xFD]"]
	},
	{
		id: 1366,
		lines: [
			"Climbing is a skill checked whenever one[0xFD] attempts to scale a wall or a steep incline.[0xFD] It is continually checked until one is on[0xFD] level ground again.[0xFD]"]
	},
	{
		id: 1367,
		lines: [
			"Critical Striking is a skill checked whenever[0xFD] one has successfully struck a target. A target[0xFD] that receives a successful Critical Strike[0xFD] suffers withering, often fatal, additional[0xFD] damage.[0xFD]"]
	},
	{
		id: 1368,
		lines: [
			"Daedric is a language skill checked whenever[0xFD] one attempts to speak with a daedra, such as[0xFD] a Fire Daedra or a Daedra Lord.[0xFD]"]
	},
	{
		id: 1369,
		lines: [
			"Destruction refers to the School of[0xFD] Destruction, one of the six formal avenues[0xFD] of magical study. Destruction spells are[0xFD] those with a primary purpose of causing[0xFD] damage to a target, such as Fireball or[0xFD] Acidic Field.[0xFD]"]
	},
	{
		id: 1370,
		lines: [
			"Disguise is a skill automatically checked[0xFD] whenever one attempts either to infiltrate a[0xFD] hostile environment or to secrete items away[0xFD] from prying eyes.[0xFD]"]
	},
	{id: 1371, lines: [
			"Dodging is a skill checked before one[0xFD] is struck by an enemy's weapon or spell.[0xFD]"]},
	{
		id: 1372,
		lines: [
			"Dragon is a language skill checked[0xFD] whenever one attempts to speak with[0xFD] a dragon.[0xFD]",
			""]
	},
	{
		id: 1373,
		lines: [
			"Elvish is a language skill checked[0xFD] whenever one attempts to speak with[0xFD] a Wild Elf.[0xFD]"]
	},
	{
		id: 1374,
		lines: [
			"Etiquette is a skill checked whenever[0xFD] one attempts to be polite, deferential,[0xFD] and charming in conversation.[0xFD]"]
	},
	{
		id: 1375,
		lines: [
			"Faerie is a language skill checked[0xFD] whenever one attempts to speak with[0xFD] a Faerie.[0xFD]"]
	},
	{
		id: 1376,
		lines: [
			"Giantish is a language skill checked[0xFD] whenever one attempts to speak with[0xFD] a Giant.[0xFD]"]
	},
	{
		id: 1377,
		lines: [
			"Hand-to-Hand is a skill checked whenever[0xFD] one attempts to strike a target with a[0xFD] punch or a kick.[0xFD]"]
	},
	{
		id: 1378,
		lines: [
			"Harpy is a language skill checked[0xFD] whenever one attempts to speak with[0xFD] a Harpy.[0xFD]"]
	},
	{
		id: 1379,
		lines: [
			"Illusion refers to the School of Illusion,[0xFD] one of the six avenues of magical study.[0xFD] Illusion spells are capable of camouflaging,[0xFD] illuminating, or obscuring objects, as the[0xFD] spells Invisibility and Light demonstrate.[0xFD]"]
	},
	{
		id: 1380,
		lines: [
			"Impish is a language skill checked[0xFD] whenever one attempts to speak with[0xFD] an Imp.[0xFD]"]
	},
	{
		id: 1381,
		lines: [
			"Jumping is a skill checked to determine[0xFD] the height and distance one is capable[0xFD] of leaping.[0xFD]"]
	},
	{
		id: 1382,
		lines: [
			"Lockpicking is a skill automatically[0xFD] checked whenever one attempts to pick the[0xFD] lock on a door or a chest.[0xFD]"]
	},
	{
		id: 1383,
		lines: [
			"Long Blade is a skill checked whenever[0xFD] one attempts to strike a target with a[0xFD] long-bladed, slashing weapon such as a[0xFD] claymore or a katana.[0xFD]"]
	},
	{
		id: 1384,
		lines: [
			"Medical skill is automatically checked[0xFD] whenever one rests, allowing one to[0xFD] diagnose minor injuries and illnesses.[0xFD]"]
	},
	{
		id: 1385,
		lines: [
			"Mercantile is a skill checked whenever[0xFD] one enters into negotiations with a[0xFD] merchant, attempting to buy or sell[0xFD] an item at the best possible price.[0xFD]"]
	},
	{
		id: 1386,
		lines: [
			"Mysticism refers to the School of[0xFD] Mysticism, one of the six avenues of[0xFD] magical study. Mysticism is the most[0xFD] arcane school, and the spells created[0xFD] by its application are as varied as[0xFD] Far Silence and Soul Trap.[0xFD]"]
	},
	{
		id: 1387,
		lines: [
			"Nymph is a language skill checked[0xFD] whenever one attempts to speak with[0xFD] a Nymph.[0xFD]"]
	},
	{
		id: 1388,
		lines: [
			"Pickpocketing is a skill automatically[0xFD] checked whenever one attempts to steal[0xFD] an item off a person or shelf without[0xFD] being detected.[0xFD]"]
	},
	{
		id: 1389,
		lines: [
			"Restoration refers to the School of[0xFD] Restoration, one of the six avenues[0xFD] of magical study. Any healing spell[0xFD] such as Cure Poison and Troll's[0xFD] Blood hails from Restoration.[0xFD]"]
	},
	{
		id: 1390,
		lines: [
			"Running is a skill automatically[0xFD] checked whenever one begins to[0xFD] run, to check the possible speed.[0xFD]"]
	},
	{
		id: 1391,
		lines: [
			"Short Blade is a skill checked whenever[0xFD] one attempts to strike a target with[0xFD] a short-bladed stabbing weapon such as[0xFD] dagger as tantos, to determine the[0xFD] aim and damage possible in a strike.[0xFD]"]
	},
	{
		id: 1392,
		lines: [
			"Spriggan is a language skill checked[0xFD] whenever one attempts to speak with[0xFD] a Spriggan.[0xFD]"]
	},
	{
		id: 1393,
		lines: [
			"Stealth is a skill which allows one[0xFD] to avoid the attention of a hostile[0xFD] creature. It is automatically checked[0xFD] at every encounter.[0xFD]"]
	},
	{
		id: 1394,
		lines: [
			"Streetwise is a skill checked[0xFD] whenever one attempts to be blunt,[0xFD] colloquial, or otherwise informal[0xFD] in conversation.[0xFD]"]
	},
	{
		id: 1395,
		lines: [
			"Swimming is a skill automatically[0xFD] checked whenever one encounters[0xFD] water to see how fast one can swim,[0xFD] how fatigued one gets while swimming,[0xFD] and how long one can stay underwater.[0xFD]"]
	},
	{
		id: 1396,
		lines: [
			"Thaumaturgy refers to the School of[0xFD] Thaumaturgy, one of the six avenues[0xFD] of magica study. A Thaumaturgical[0xFD] spell does not change the appearance[0xFD] or structure of a force or object,[0xFD] but can manipulate laws temporarily,[0xFD] as evident in such spells as[0xFD] Levitate and Detection.[0xFD]"]
	},
	{
		id: 1400,
		lines: [
			"You might be interested to know that %fx1 has just allied with %fx2.",
			"I just found out that %fx1 cut a deal with %fx2. Interesting, huh?",
			"Don't spread this around, but %fx1 and %fx2 are working together."]
	},
	{
		id: 1401,
		lines: [
			"Everybody knows that %fx2 had a grudge against %fx1, but now they're really going at it.",
			"%fx1 got the short end of the stick in some deal. Now they're out to get %fx2",
			"%fx1 and %fx2 hate each other. I wouldn't be surprised if somebody didn't end up dead because of it."]
	},
	{
		id: 1402,
		lines: [
			"%fl1 insulted %fl2 in a missive. Now %fx2 is out to get %fx1.",
			"%fx1 and %fx2 were close allies until that incident at the palace.",
			"Until recently %fx1 and %fx2 worked together. They just recently severed their alliance."]
	},
	{
		id: 1403,
		lines: [
			"I heard that %fx1 and %fx2 have patched up their differences.",
			"%fx1 paid a large peace fee to %fx2. Hopefully that will stop their quarrelling.",
			"I never understood why %fx1 and %fx2 were feuding. Well at least that's over now."]
	},
	{
		id: 1404,
		lines: [
			"The people of %reg are very glad to have %fx2 as a new ally.",
			"I don't like %fx2, but it's better to have them as an ally of %reg than an enemy.",
			"Did you hear? %reg just signed an agreement with %fx2."]
	},
	{
		id: 1405,
		lines: [
			"I understand that %fx2 is really hacked off with %reg.",
			"I'm sure you heard that %reg is no longer on good terms with %fx2.",
			"%fx2 are now sworn enemies of %reg. Don't have any dealings with them."]
	},
	{
		id: 1406,
		lines: [
			"%ol1 %olf. %fx1 has a new %lt1.",
			"I really liked %ol1. But now %fl1 is in charge of %fx1.",
			"It's all over town. %ol1 %olf. Can believe that %fl1 is filling those boots?"]
	},
	{
		id: 1407,
		lines: [
			"It's just dreadful. %fx1 and %fx2 are at war!",
			"I knew there were tensions between %fx1 and %fx2, but I never thought they would declare war.",
			"%fx1 is at war with %fx2! Isn't that great!"]
	},
	{
		id: 1408,
		lines: [
			"%fx1 almost wiped out the %fx2 army. %fx1 has won the war!",
			"%fx2 lost. %fx2 has demanded unconditional surrender. The war is over.",
			"The %fx1 army swept into the capital. %fx2 has been defeated."]
	},
	{
		id: 1409,
		lines: [
			"%fx1 and %fx2 have signed a peace treaty. The war was ruining both their economies.",
			"%fx1 was winning the war, but ran out of money. They were forced to sign an armistice with %fx2.",
			"The war is over! The war is over! %fx1 and %fx2 stopped fighting. I haven't heard why."]
	},
	{
		id: 1410,
		lines: [
			"Lock your doors at night. Nobody is safe anymore from the criminals. They just take anything they want.",
			"They killed %n in broad daylight. The guards didn't even do anything. What is this place coming to."]
	},
	{
		id: 1411,
		lines: [
			"We're all preparing for %hol. It's coming up soon.",
			"Are you ready for %hol? Don't wait too long.",
			"%hol is almost here. I wouldn't wait to the last minute to get ready."]
	},
	{
		id: 1412,
		lines: [
			"Did you hear that the Thieves Guild master has been arrested? I hope they hang him.",
			"The Thieves Guild master is in jail. I'm sure he'll have escaped by tomorrow.",
			"No prison can hold the Thieves Guild master for long. That's why his trial will be held soon."]
	},
	{
		id: 1413,
		lines: [
			"Can you believe they set the Thieves Guild master free? That wily old fox.",
			"He escaped! The Thieves Guild master broke out of prison.",
			"The Thieves Guild master escaped. I knew that tin jail couldn't hold him."]
	},
	{
		id: 1414,
		lines: [
			"Beheaded. That's what happened to the Thieves Guild master. Good riddance.",
			"They executed the Thieves Guild master. I hear he will lie in an unmarked grave.",
			"They didn't take long in executing the poor bastard. Who? The Thieves Guild master of course."]
	},
	{
		id: 1415,
		lines: [
			"I hear there is a mad wizard stirring up trouble.",
			"Some insane sorcerer turned the palace pink. It took two weeks to get it cleaned.",
			"There's a crackpot wizard out there. If we don't follow orders, we'll all be turnips."]
	},
	{
		id: 1416,
		lines: [
			"That old mage was crazy. It's a good thing they slew him.",
			"She was a nutcase. It's too dangerous to let mad wizards run loose, so they killed her.",
			"The whole town is rejoicing. The crazy sorcerer is dead!"]
	},
	{
		id: 1417,
		lines: [
			"Everything in this place is too expensive. I can hardly afford to buy bread any more.",
			"The merchants are all pigs. They set their prices as high as they want and nobody dares do anything.",
			"Money doesn't grow on trees. I am having to sell my furniture to afford food! These prices are outrageous."]
	},
	{
		id: 1418,
		lines: [
			"There's a trade war going on. Buy everything you can while it's cheap.",
			"It all started when crazy %n cut all his prices in half. Now all the merchants have lowered their prices to compete.",
			"I'm on my way to buy new clothes. Price on everything are so low, I want to buy now before they go up again."]
	},
	{
		id: 1450,
		lines: [
			"I hear there are witches in %reg. Somewhere out in the hills or deep in the forest.",
			"The witches are causing trouble again. Those bitches in the hills better watch out, or there'll be burnings soon.",
			"What the Mages Guild is saying about the witches isn't true. The old hags in the forest are mostly harmless.",
			"I hear the witches can summon Daedra Lords. %reg would be better off without the hags."]
	},
	{
		id: 1451,
		lines: [
			"%n died last night. The body was completely drained of blood!",
			"The found poor %n, with two puncture wounds in the neck. Not a drop of blood was left in the body.",
			"The vampires are not just mindless monsters. The clans meet in secret and plot to control all of mankind!",
			"The dirty blood suckers are running this place. Vampires, of course. I mean the vampire clans."]
	},
	{
		id: 1452,
		lines: [
			"%n, a mage's apprentice, was telling me that there are powerful beings called Daedras living in a place called Oblivion. They can grant a man powerful magical items called artifacts. I'm sure it's just a story.",
			"Be good to your fellow man, or the Daedra's will take you away to Oblivion.",
			"Daedras can actually be summoned. I hear the witches and Mages Guild do it all the time.",
			"Only the temples can summon Daedras safely. The priests can force them to reveal the secret location of powerful artifacts."]
	},
	{
		id: 1453,
		lines: [
			"There are rumors that someone has a clue to the whereabouts of Auriel's Shield. Supposedly the shield can make you invulnerable to fire and magick.",
			"Some drunken knight was claiming to have lost the Warlock's Ring. Of course, if he really did have that artifact, he would be a king and not a drunk.",
			"I heard an archer say that Auriel's Bow was found and then lost again. In the stories, a single arrow shot from the bow could kill any creature.",
			"There's a story being whispered about a mad wizard that has the Necromancer's Ring. That artifact is just a myth.",
			"My brother knows someone whose sister slept with a man that saw Chrysamere, the sword of heroes.",
			"Some mad hermit tried to convince me that the Lord's Mail was real and not just a legend. I had to kill him to protect myself.",
			"The Mages Guild just executed old %n for claiming to have discovered the long lost location of the Staff of Magnus. Poor deluded mage.",
			"They say that the Daedra Lords claimed most of the ancient artifacts. They only give them to loyal servants.",
			"I've heard it said that the witches can help a person find one of the lost artifacts of ancient power."]
	},
	{
		id: 1454,
		lines: [
			"You should know that the thieves have a secret guild, led by a mysterious master.",
			"The Thieves Guild is not just a legend it's real. I cannot tell you how I know, or they will kill me.",
			"Although most folk deny it, all thieves in %reg belong to a secret Thieves Guild. Any thief refusing to join ends up dead."]
	},
	{
		id: 1455,
		lines: [
			"If you really want revenge, contact the Dark Brotherhood. They are professional assassins.",
			"There is such a thing as an assassins guild, which calls itself the Dark Brotherhood. They recruit the most cold blooded killers they can find.",
			"The Dark Brotherhood is quite powerful in %reg. This assassins guild punishes outsiders that kill for money."]
	},
	{
		id: 1456,
		lines: [
			"%lt1 is having an affair.",
			"They say we will have new cobblestone streets before the year is out.",
			"%n says that the bands on the fuzzy caterpillars predict a bad winter.",
			"There is supposed to be a new tax announced soon.",
			"Don't go out at night. %n saw ghouls lurking in the alleys.",
			"Representatives of the Empire are expected in %reg soon.",
			"The weakest link in the Imperial chain is the province of Sumurset Isle. Then %reg."]
	},
	{
		id: 1457,
		lines: [
			"Hmmm. Can't think of any.",
			"None that I know of.",
			"I try not to spread rumors.",
			"Since I have nothing nice to say ..."]
	},
	{
		id: 1475,
		lines: [
			"%nrn has declared that all witches[0xFD][0xFC] are to be burnt at the stake.[0xFD]",
			"Witchcraft is punishable by[0xFD] burning at the stake. -- %nrn[0xFD]",
			"Any witch shall be burnt alive while[0xFD] bound to a stake, by the order of %nrn.[0xFD]"]
	},
	{
		id: 1476,
		lines: [
			"%nrn has declared that %ptm[0xFD] is guilty of treason and heresy.[0xFD]",
			"Any member of %ptm are to[0xFD] be jailed immediately. -- %nrn[0xFD]",
			"%ptm is not recognized by %reg or %nrn.[0xFD] All its lands and properties[0xFD] are subject to confiscation.[0xFD]"]
	},
	{
		id: 1477,
		lines: [
			"Due to the famine in %reg, all[0xFD] merchants importing food must[0xFD] report to the gate captain.[0xFD]",
			"One part in ten of all food[0xFD] entering this town must be turned[0xFD] over to %t, so that %g3 grace does[0xFD] not suffer from the famine.[0xFD]",
			"%reg is beset by famine. Wasting[0xFD] food is punishable by flogging. -- %nrn"]
	},
	{
		id: 1478,
		lines: [
			"All plague victims must be left[0xFD] in the street to be gathered and[0xFD] burned. -- %nrn",
			"Bewarned all visitors. Our fair[0xFD] town is beset by the plague.[0xFD]",
			"By order of %nrn, no person showing sign[0xFD] of plague may enter or leave this town.[0xFD]"]
	},
	{
		id: 1479,
		lines: [
			"A state of war exists between %fx1[0xFD] and %fx2. Any foreign citizen of the enemy[0xFD] found within this place will be hanged.[0xFD] -- %nrn[0xFD]",
			"%fx1 is at war with %fx2.[0xFD] All visitors may be subject to search.[0xFD]",
			"By the order of %nrn, for the duration[0xFD] of the war between %fx1 and %fx2,[0xFD] military rule is in effect.[0xFD]"]
	},
	{
		id: 1480,
		lines: [
			"The noble ruler, %ol1 %olf.[0xFD] Long live %fl1, newly made %lt1 of %reg.[0xFD]",
			"%fl1 has ascended to the throne and[0xFD] is the new %lt1. Long may %fl1 rule over %reg.[0xFD]",
			"%fl1 is the new %lt1 of %reg.[0xFD]"]
	},
	{
		id: 1481,
		lines: [
			"%fx2 is formally allied to %fx1.[0xFD]",
			"%fx1 and %fx2 have signed an agreement.[0xFD]",
			"%fx1 has formal relations with %fx2.[0xFD]"]
	},
	{
		id: 1482,
		lines: [
			"Any person from %fx2 will be persecuted[0xFD] to the full extent of the law. -- %nrn[0xFD]",
			"Persons of %fx2 are to be[0xFD] detained upon sight. -- %nrn[0xFD]",
			"For crimes against %reg, %fx2[0xFD] is the sworn enemy of %nrn.[0xFD]"]
	},
	{
		id: 1483,
		lines: [
			"By order of %nrn, all taxes[0xFD] must be paid by the end of the month.[0xFD]",
			"All weapons must be peace bonded.",
			"Magick is strictly prohibited in town.[0xFD]",
			"All merchants transporting ale[0xFD] must report to the Captain's tower.[0xFD]",
			"%n is an enemy of %reg.[0xFD] Sightings of this criminal are[0xFD] to be reported to the watch.[0xFD]"]
	},
	{
		id: 1500,
		lines: [
			"Paralyzation[0xFD] Causes target to be paralyzed.[0xFD] Duration: How many rounds paralysis lasts.[0xFD] Chance of paralyzing target.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1501,
		lines: [
			"Paralyzation[0xFD] Causes target to be paralyzed.[0xFD] Duration: How many rounds paralysis lasts.[0xFD] Chance of paralyzing target.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1502,
		lines: [
			"Paralyzation[0xFD] Causes target to be paralyzed.[0xFD] Duration: How many rounds paralysis lasts.[0xFD] Chance of paralyzing target.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1503,
		lines: [
			"Continuous Damage -- Health[0xFD] Lowers target's Health each round.[0xFD] Duration: How many rounds target takes damage.[0xFD] Chance: N/A[0xFD] Magnitude: How much damage target takes per round.[0xFD]"]
	},
	{
		id: 1504,
		lines: [
			"Continuous Damage -- Health[0xFD] Lowers target's Health each round.[0xFD] Duration: How many rounds target takes damage.[0xFD] Chance: N/A[0xFD] Magnitude: How much damage target takes per round.[0xFD]"]
	},
	{
		id: 1505,
		lines: [
			"Continuous Damage -- Fatigue[0xFD] Lowers target's Fatigue each round.[0xFD] Duration: How many rounds target is affected.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Fatigue loss to target per round.[0xFD]"]
	},
	{
		id: 1506,
		lines: [
			"Continuous Damage -- Spell Points[0xFD] Reduces target's Spell Points each round.[0xFD] Duration: How many rounds target is affected.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Spell Points target loses per round.[0xFD]"]
	},
	{
		id: 1507,
		lines: [
			"Create Item[0xFD] Creates one useful item of the caster's choosing.[0xFD] Duration: How long created item exists.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1509,
		lines: [
			"Cure -- Disease[0xFD] Cures target of disease.[0xFD] Duration: Instantaneous[0xFD] Chance: Chance of curing disease.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1510,
		lines: [
			"Cure -- Poison[0xFD] Cures target of poison.[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance of curing poison.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1511,
		lines: [
			"Cure -- Paralysis[0xFD] Cures a target of paralysis.[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance of curing paralysis.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1512,
		lines: [
			"Damage -- Health[0xFD] Causes target's Health to be damaged.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of Health Points target loses.[0xFD]"]
	},
	{
		id: 1513,
		lines: [
			"Damage -- Fatigue[0xFD] Causes target's Fatigue to be damaged.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of Fatigue Points target loses.[0xFD]"]
	},
	{
		id: 1514,
		lines: [
			"Damage -- Spell Points[0xFD] Reduces target's Spell Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of Spell Points target loses.[0xFD]"]
	},
	{
		id: 1515,
		lines: [
			"Disintegrate[0xFD] Causes target to disintegrate.[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance to disintegrate target.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1516,
		lines: [
			"Dispel -- Magic[0xFD] Negates magic effects.[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance of dispelling magic.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1517,
		lines: [
			"Dispel -- Undead[0xFD] Causes undead to be dispelled.[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance of dispelling undead.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1518,
		lines: [
			"Dispel -- Daedra[0xFD] Causes Daedra to be dispelled.[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance of dispelling Daedra.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1519,
		lines: [
			"Drain -- Strength[0xFD] Reduces target's Strength Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points drained.[0xFD]"]
	},
	{
		id: 1520,
		lines: [
			"Drain -- Intelligence[0xFD] Reduces target's Intelligence Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points drained.[0xFD]"]
	},
	{
		id: 1521,
		lines: [
			"Drain -- Willpower[0xFD] Reduces target's Willpower Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points drained.[0xFD]"]
	},
	{
		id: 1522,
		lines: [
			"Drain -- Agility[0xFD] Reduces target's Agility Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points drained.[0xFD]"]
	},
	{
		id: 1523,
		lines: [
			"Drain -- Endurance[0xFD] Reduces target's Endurance Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points drained.[0xFD]"]
	},
	{
		id: 1524,
		lines: [
			"Drain -- Personality[0xFD] Reduces target's Personality Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points drained.[0xFD]"]
	},
	{
		id: 1525,
		lines: [
			"Drain -- Speed[0xFD] Reduces target's Speed Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points drained.[0xFD]"]
	},
	{
		id: 1526,
		lines: [
			"Drain -- Luck[0xFD] Reduces target's Luck Points.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points drained.[0xFD]"]
	},
	{
		id: 1527,
		lines: [
			"Elemental Resistance -- Fire[0xFD] Target becomes immune to fire damage.[0xFD] Duration: Rounds resistance lasts.[0xFD] Chance: Chance of successfully casting spell.[0xFD] Magnitude: N/A[0xFD] Target takes half damage from fire if spell fails.[0xFD]"]
	},
	{
		id: 1528,
		lines: [
			"Elemental Resistance -- Frost[0xFD] Target becomes immune to cold damage.[0xFD] Duration: Rounds resistance lasts.[0xFD] Chance: Chance of successfully casting spell.[0xFD] Magnitude: N/A[0xFD] Target takes half damage from cold if spell fails.[0xFD]"]
	},
	{
		id: 1529,
		lines: [
			"Elemental Resistance -- Poison[0xFD] Target becomes immune to poison damage.[0xFD] Duration: Rounds resistance lasts.[0xFD] Chance: Chance of successfully casting spell.[0xFD] Magnitude: N/A[0xFD] Target takes half damage from poison if spell fails.[0xFD]"]
	},
	{
		id: 1530,
		lines: [
			"Elemental Resistance -- Shock[0xFD] Target becomes immune to shock damage.[0xFD] Duration: Rounds resistance lasts.[0xFD] Chance: Chance of successfully casting spell.[0xFD] Magnitude: N/A[0xFD] Target takes half damage from electricity if spell fails.[0xFD]"]
	},
	{
		id: 1531,
		lines: [
			"Elemental Resistance -- Magic[0xFD] Target becomes immune to magic damage.[0xFD] Duration: Rounds resistance lasts.[0xFD] Chance: Chance of successfully casting spell.[0xFD] Magnitude: N/A[0xFD] Target takes half damage from magic if spell fails.[0xFD]"]
	},
	{
		id: 1532,
		lines: [
			"Fortify Strength[0xFD] Increases target's Strength.[0xFD] Duration: Rounds Attribute increase lasts.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Attribute increase.[0xFD]"]
	},
	{
		id: 1533,
		lines: [
			"Fortify Intelligence[0xFD] Increases target's Intelligence.[0xFD] Duration: Rounds Attribute increase lasts.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Attribute increase.[0xFD]"]
	},
	{
		id: 1534,
		lines: [
			"Fortify Willpower[0xFD] Increases target's Willpower.[0xFD] Duration: Rounds Attribute increase lasts.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Attribute increase.[0xFD]"]
	},
	{
		id: 1535,
		lines: [
			"Fortify Agility[0xFD] Increases target's Agility.[0xFD] Duration: Rounds Attribute increase lasts.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Attribute increase.[0xFD]"]
	},
	{
		id: 1536,
		lines: [
			"Fortify Endurance[0xFD] Increases target's Endurance.[0xFD] Duration: Rounds Attribute increase lasts.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Attribute increase.[0xFD]"]
	},
	{
		id: 1537,
		lines: [
			"Fortify Personality[0xFD] Increases target's Personality.[0xFD] Duration: Rounds Attribute increase lasts.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Attribute increase.[0xFD]"]
	},
	{
		id: 1538,
		lines: [
			"Fortify Speed[0xFD] Increases target's Speed.[0xFD] Duration: Rounds Attribute increase lasts.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Attribute increase.[0xFD]"]
	},
	{
		id: 1539,
		lines: [
			"Fortify Luck[0xFD] Increases target's Luck.[0xFD] Duration: Rounds Attribute increase lasts.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of Attribute increase.[0xFD]"]
	},
	{
		id: 1540,
		lines: [
			"Heal Strength[0xFD] Restores target's Strength, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1541,
		lines: [
			"Heal Intelligence[0xFD] Restores target's Intelligence, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1542,
		lines: [
			"Heal Willpower[0xFD] Restores target's Willpower, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1543,
		lines: [
			"Heal Agility[0xFD] Restores target's Agility, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1544,
		lines: [
			"Heal Endurance[0xFD] Restores target's Endurance, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1545,
		lines: [
			"Heal Personality[0xFD] Restores target's Personality, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1546,
		lines: [
			"Heal Speed[0xFD] Restores target's Speed, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1547,
		lines: [
			"Heal Luck[0xFD] Restores target's Luck, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1548,
		lines: [
			"Heal Health[0xFD] Restores target's Health, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1549,
		lines: [
			"Heal Fatigue[0xFD] Restores target's Fatigue, up to normal level.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points restored.[0xFD]"]
	},
	{
		id: 1550,
		lines: [
			"Transfer Strength[0xFD] Transfers target Strength Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1551,
		lines: [
			"Transfer Intelligence[0xFD] Transfers target Intelligence Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1552,
		lines: [
			"Transfer Willpower[0xFD] Transfers target Willpower Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1553,
		lines: [
			"Transfer Agility[0xFD] Transfers target Agility Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1554,
		lines: [
			"Transfer Endurance[0xFD] Transfers target Endurance Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1555,
		lines: [
			"Transfer Personality[0xFD] Transfers target Personality Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1556,
		lines: [
			"Transfer Speed[0xFD] Transfers target Speed Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1557,
		lines: [
			"Transfer Luck[0xFD] Transfers target Luck Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1558,
		lines: [
			"Transfer Health[0xFD] Transfers target Health Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1559,
		lines: [
			"Transfer Fatigue[0xFD] Transfers target Fatigue Points to caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: N/A[0xFD] Magnitude: Amount of points transferred.[0xFD]"]
	},
	{
		id: 1560,
		lines: [
			"Invisibility (Normal)[0xFD] Target becomes invisible. Dispelled if target[0xFD] attacks anything.[0xFD] Duration: Rounds target remains invisible.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1561,
		lines: [
			"Invisibility (True)[0xFD] Target becomes invisible.[0xFD] Duration: Rounds target remains invisible.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1562,
		lines: [
			"Levitate[0xFD] Target floats above the ground.[0xFD] Duration: Rounds target levitates.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1563,
		lines: [
			"Light[0xFD] Creates a light source centered on target.[0xFD] Duration: Rounds target remains illuminated.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1564,
		lines: [
			"Lock[0xFD] Locks chest or door to lock-level of caster.[0xFD] Duration: Rounds spell remains in effect.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1565,
		lines: [
			"Open[0xFD] Unlocks chest or door to lock-level of caster.[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1566,
		lines: [
			"Regenerate[0xFD] Target regenerates Health Points each round.[0xFD] Duration: Rounds target regenerates.[0xFD] Chance: N/A[0xFD] Magnitude: Number of points regenerated each round.[0xFD]"]
	},
	{
		id: 1567,
		lines: [
			"Silence[0xFD] Target is silenced, unable to cast spells.[0xFD] Duration: Rounds silence lasts.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1568,
		lines: [
			"Spell Absorption[0xFD] Target absorbs incoming spell energy, adding spell[0xFD] energy points to his or her own store.[0xFD] Duration: Rounds target will absorb spells.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1569,
		lines: [
			"Spell Reflection[0xFD] Target reflects incoming spells back at caster.[0xFD] Duration: Rounds target will reflect spells.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1570,
		lines: [
			"Spell Resistance[0xFD] Target resists incoming spells.[0xFD] Duration: Rounds target will resist spells.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1571,
		lines: [
			"Chameleon (Normal)[0xFD] Target becomes difficult to see. Spell broken if[0xFD] chameleon attacks anything.[0xFD] Duration: Rounds target remains obscured.[0xFD] Chance:N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1572,
		lines: [
			"Chameleon (True)[0xFD] Target becomes difficult to see.[0xFD] Duration: Rounds target remains obscured.[0xFD] Chance:N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1573,
		lines: [
			"Shadow (Normal)[0xFD] Target blends into shadows. Spell broken if[0xFD] hider in shadows attacks anything.[0xFD] Duration: Rounds target remains hidden.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1574,
		lines: [
			"Shadow (True)[0xFD] Target blends into shadows.[0xFD] Duration: Rounds target remains hidden.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1575,
		lines: [
			"Slowfall (Normal, Trigger)[0xFD] Target falls at half normal rate, reducing falling damage.[0xFD] Triggered when target falls.[0xFD] Duration: Rounds spell remains in effect.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1576,
		lines: [
			"Free Action[0xFD] Target is immune to paralyzation.[0xFD] Duration: Rounds immunity lasts.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1577,
		lines: [
			"Jumping[0xFD] Target can jump twice as well.[0xFD] Duration: Rounds spell remains active.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1578,
		lines: [
			"Climbing[0xFD] Target can climb twice as well.[0xFD] Duration: Rounds spell remains active.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1579,
		lines: [
			"Morph Self[0xFD] Caster transforms into a creature or object[0xFD] selected by the caster.[0xFD] Duration: Rounds transformation lasts.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1580,
		lines: [
			"Morph Other[0xFD] Target transforms into a creature or object[0xFD] selected by the caster.[0xFD] Duration: Rounds transformation lasts.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1581,
		lines: [
			"Morph Item[0xFD] Item transforms into a creature or object[0xFD] selected by the caster.[0xFD] Duration: Rounds transformation lasts.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1582,
		lines: [
			"Water Breathing[0xFD] Target is able to breathe normally under water.[0xFD] Duration: Rounds target can breathe under water.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1583,
		lines: [
			"Water Walking[0xFD] Target is able to walk on top of water.[0xFD] Duration: Rounds target can walk on water.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1584,
		lines: [
			"Diminution[0xFD] Target shrinks to half normal size.[0xFD] Duration: Rounds target is shrunk.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1585,
		lines: [
			"Pacify Animal[0xFD] Pacifies any beast of subhuman intelligence.[0xFD] Duration: Rounds animal remains docile.[0xFD] Chance: Chance of pacification.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1586,
		lines: [
			"Pacify Undead[0xFD] Pacifies undead creatures.[0xFD] Duration: Rounds creature remains docile.[0xFD] Chance: Chance of pacification.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1587,
		lines: [
			"Pacify Humanoid[0xFD] Pacifies humanoid creatures.[0xFD] Duration: Rounds humanoid remains docile.[0xFD] Chance: Chance of pacification.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1588,
		lines: [
			"Pacify Daedra[0xFD] Pacifies Daedra.[0xFD] Duration: Rounds Daedra remains docile.[0xFD] Chance: Chance of pacification.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1589,
		lines: [
			"Charm[0xFD] Raises caster's charm with target, improving[0xFD] caster's reputation.[0xFD] Duration: Rounds caster is charming.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1590,
		lines: [
			"Shield[0xFD] Target is surrounded by a magical shield.[0xFD] Shield absorbs Health Point damage. Shield lasts[0xFD] until its damage is overcome, or spell wears off.[0xFD] Duration: Rounds shield can last.[0xFD] Chance: N/A[0xFD] Magnitude: Health Point damage Shield can absorb.[0xFD]"]
	},
	{
		id: 1591,
		lines: [
			"Shield[0xFD] Target is surrounded by a magical shield.[0xFD] Shield absorbs Health Point damage. Shield lasts[0xFD] until its damage is overcome, or spell wears off.[0xFD] Duration: Rounds shield can last.[0xFD] Chance: N/A[0xFD] Magnitude: Health Point damage Shield can absorb.[0xFD]"]
	},
	{
		id: 1592,
		lines: [
			"Shield[0xFD] Target is surrounded by a magical shield.[0xFD] Shield absorbs Health Point damage. Shield lasts[0xFD] until its damage is overcome, or spell wears off.[0xFD] Duration: Rounds shield can last.[0xFD] Chance: N/A[0xFD] Magnitude: Health Point damage Shield can absorb.[0xFD]"]
	},
	{
		id: 1593,
		lines: [
			"Shield[0xFD] Target is surrounded by a magical shield.[0xFD] Shield absorbs Health Point damage. Shield lasts[0xFD] until its damage is overcome, or spell wears off.[0xFD] Duration: Rounds shield can last.[0xFD] Chance: N/A[0xFD] Magnitude: Health Point damage Shield can absorb.[0xFD]"]
	},
	{
		id: 1594,
		lines: [
			"Astral Travel[0xFD] Sends caster to Astral Plane.[0xFD] Duration: Rounds caster remains in Astral Plane.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1595,
		lines: [
			"Etherealness[0xFD] Turns caster ethereal, thus able to walk through walls.[0xFD] Duration: Rounds caster remains ethereal.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1596,
		lines: [
			"Detect Magic[0xFD] Caster can detect all magic in front of him or her.[0xFD] Duration: Rounds caster can detect magic.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1597,
		lines: [
			"Detect Enemy[0xFD] Caster can detect all enemies in front of him or her.[0xFD] Duration: Rounds caster can detect enemies.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1598,
		lines: [
			"Detect Treasure[0xFD] Caster can detect all treasure in front of him or her.[0xFD] Duration: Rounds caster can detect treasure.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1599,
		lines: [
			"Identify[0xFD] Caster can identify a target object.[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance of correct identification.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1600,
		lines: [
			"Wizard Sight[0xFD] Caster's vision is projected out from his or her body.[0xFD] Duration: Rounds caster can see through projected vision.[0xFD] Chance: N/A[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1601,
		lines: [
			"Darkness[0xFD] Target is surrounded with darkness.[0xFD] Duration: Rounds target darkened.[0xFD] Chance: Chance of success.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1602,
		lines: [
			"Teleport[0xFD] Caster chooses a location, then is able to teleport[0xFD] to location instantly. Spell must be cast at least[0xFD] twice to use (once to choose location).[0xFD] Duration: Instantaneous.[0xFD] Chance: Chance to teleport to correct location.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1603,
		lines: [
			"Soul Trap[0xFD] After death, target's soul will be deposited[0xFD] into any available receptacle.[0xFD] Duration: How long spell dooms living target[0xFD] Chance: Chance of Imprisoning target.[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1604,
		lines: [
			"Telekenesis[0xFD] Allows caster to move objects with mental powers.[0xFD] Duration: How long caster can use Telekenesis.[0xFD] Chance: N/A[0xFD] Magnitude: Weight of object caster can manipulate.[0xFD]"]
	},
	{
		id: 1605,
		lines: [
			"Comprehend Languages[0xFD] Caster can comprehend any written or spoken tongue[0xFD] Duration: How long the caster comprehends languages[0xFD] Chance: Chance of comprehending all of a language[0xFD] Magnitude: N/A[0xFD]"]
	},
	{
		id: 1606,
		lines: [
			"Intensify Fire[0xFD] Caster may intensify the light of a normal fire.[0xFD] Duration: How long intensified fire will last[0xFD] Chance: N/A[0xFD] Magnitude: Intensification possible in candlepower.[0xFD]"]
	},
	{
		id: 1607,
		lines: [
			"Diminish Fire[0xFD] Caster may dim the light of a normal fire.[0xFD] Duration: How long diminished fire will last[0xFD] Chance: N/A[0xFD] Magnitude: Diminishment possible in candlepower.[0xFD]"]
	},
	{
		id: 1608,
		lines: [
			"Wall of Stone[0xFD] Caster creates a wall of stone[0xFD] Duration: How long wall lasts[0xFD] Chance: N/A Magnitude: How large wall is in square meters[0xFD]"]
	},
	{
		id: 1609,
		lines: [
			"Wall of Fire[0xFD] Caster creates a wall of fire[0xFD] Duration: How long wall lasts[0xFD] Chance: N/A Magnitude: How large wall is in square meters[0xFD]"]
	},
	{
		id: 1610,
		lines: [
			"Wall of Frost[0xFD] Caster creates a wall of ice[0xFD] Duration: How long wall lasts[0xFD] Chance: N/A Magnitude: How large wall is in square meters[0xFD]"]
	},
	{
		id: 1611,
		lines: [
			"Wall of Poison[0xFD] Caster creates a wall of poison gas[0xFD] Duration: How long wall lasts[0xFD] Chance: N/A Magnitude: How large wall is in square meters[0xFD]"]
	},
	{id: 1650, lines: [
			"You do not have the gold to properly pay the enchanter."]},
	{id: 1651, lines: [
			"You cannot enchant this item beyond its limit."]},
	{id: 1652, lines: [
			"The item has been enchanted."]},
	{id: 1653, lines: [
			"An item must be selected to be enchanted."]},
	{id: 1654, lines: [
			"No enchantments have been placed on the item."]},
	{id: 1655, lines: [
			"You may only pick one item at a time to enchant."]},
	{id: 1656, lines: [
			"You have already picked an item to enchant."]},
	{id: 1657, lines: [
			"You cannot enchant this item with any more powers."]},
	{id: 1658, lines: [
			"No further side-effects may be enchanted in this item."]},
	{id: 1659, lines: [
			"This item cannot be enchanted."]},
	{id: 1660, lines: [
			"This item has already been enchanted."]},
	{id: 1700, lines: [
			"This page is full.[0xFD] Start a new scroll.[0xFD]"]},
	{id: 1701, lines: [
			"The word you seek does[0xFD] not appear in your notes.[0xFD]"]},
	{id: 1702, lines: [
			"You do not have enough gold[0xFD] to purchase this spell.[0xFD]"]},
	{id: 1703, lines: [
			"You do not have a spellbook[0xFD] with which to inscribe this spell.[0xFD]"]},
	{id: 1704, lines: [
			"You must choose a name to call[0xFD] this spell in your grimoire.[0xFD]"]},
	{id: 1705, lines: [
			"The spell has been inscribed[0xFD] in your grimoire.[0xFD]"]},
	{id: 1706, lines: [
			"The spell has been inscribed to[0xFD] the general list and Ted is cool.[0xFD]"]},
	{id: 1707, lines: [
			"You can choose no more than three[0xFD] effects for any spell.[0xFD]"]},
	{id: 1708, lines: [
			"How would you like to alter the spell?[0xFD]"]},
	{id: 1709, lines: [
			"There is no room left in your spellbook.[0xFD]"]},
	{id: 1800, lines: [
			"Changes the spell's icon",
			""]},
	{id: 1801, lines: [
			"Save versus fire"]},
	{id: 1802, lines: [
			"Save versus frost"]},
	{id: 1803, lines: [
			"Save versus poison"]},
	{id: 1804, lines: [
			"Save versus shock"]},
	{id: 1805, lines: [
			"Save versus magicka"]},
	{id: 1806, lines: [
			"Spell affects caster only"]},
	{id: 1807, lines: [
			"Spell affects target by touch"]},
	{id: 1808, lines: [
			"Spell casts at a distance"]},
	{id: 1809, lines: [
			"Spell affects area around caster"]},
	{id: 1810, lines: [
			"Spell affects area at a distance"]},
	{id: 1811, lines: [
			"Add effect to spell"]},
	{id: 1812, lines: [
			"Buy spell"]},
	{id: 1813, lines: [
			"Erase current spell, begin new one"]},
	{id: 1814, lines: [
			"Exit from SpellMaker"]},
	{id: 1850, lines: [
			"You do not have enough magicka"]},
	{
		id: 2000,
		lines: [
			"Nords hail from the province of Skyrim. You are[0xFD]part of a tall and fair-skinned people, strong,[0xFD]willful, and hardy. Owing to the climate of Skyrim,[0xFD]Nords are resistant to the coldest of temperatures, and[0xFD] take little damage even from ice-based magical[0xFD]attacks. Nords are historically well-suited[0xFD]to all the arts of the warrior.[0xFD] Is your character to be a Nord?[0xFD]"]
	},
	{
		id: 2001,
		lines: [
			"Khajiit hail from the province of Elsweyr.[0xFD]You are part of a tawny-skinned people, extremely[0xFD]hardy, intelligent, and agile. Many Khajiit[0xFD]have taken to painting their faces to more resemble their[0xFD] legendary feline cousins, the predatory cats[0xFD]that hunt the great desert. Khajiit are on the[0xFD]whole excellent climbers, and adept in[0xFD] all the arts of the thief.[0xFD] Is your character to be a Khajiiti?[0xFD]"]
	},
	{
		id: 2002,
		lines: [
			"Redguards hail from the province of Hammerfell.[0xFD]You are part of a dark-skinned people, extremely[0xFD]hardy and quick. Legend has it that the Redguard[0xFD]are innately more proficient with weaponry than any[0xFD] other race. In general, Redguards[0xFD]make excellent warriors.[0xFD] Is your character to be a Redguard?[0xFD]"]
	},
	{
		id: 2003,
		lines: [
			"Bretons hail from the province of High Rock.[0xFD]You are part of a tall, fair-skinned people,[0xFD]highly intelligent and willful. Magic seems to[0xFD] infuse the very being of the Breton people.[0xFD]As a race, they are more resistant to the effects[0xFD]of hostile magic than any other group, and[0xFD] thus are excellent in all arcane arts.[0xFD] Is your character to be a Breton?[0xFD]"]
	},
	{
		id: 2004,
		lines: [
			"Argonians hail from the province of Black Marsh.[0xFD]You are part of a highly-evolved race[0xFD]of reptiles, known for their intelligence,[0xFD] agility, and speed. Because of[0xFD]their reptilian nature, Argonians do not tire[0xFD]easily when swimming. While many Argonians have[0xFD] successfully mastered the arts of thievery and[0xFD]spellcasting, there are some regarded well as warriors.[0xFD] Is your character to be an Argonian?[0xFD]"]
	},
	{
		id: 2005,
		lines: [
			"Wood Elves hail from the province of Valenwood.[0xFD]You are part of a tall, fair-skinned people[0xFD]known to be extremely agile and quick.[0xFD] Wood Elves have a natural affinity for the[0xFD]bow and arrow, and all members of their race[0xFD]have some ability with that weapon. There are[0xFD]well-known Wood Elves in most every class, but the[0xFD]arts of thievery are their particular forte.[0xFD] Is your character to be a Wood Elf?[0xFD]"]
	},
	{
		id: 2006,
		lines: [
			"High Elves hail from the province of Sumurset.[0xFD]You are part of a tall, golden-skinned people,[0xFD]extremely intelligent, agile, and willful.[0xFD]The magical nature of Sumurset Isle has made the High[0xFD] Elves natural spellcasters who are immune to[0xFD]paralysing poisons and spells.[0xFD] Is your character to be a High Elf?[0xFD]"]
	},
	{
		id: 2007,
		lines: [
			"Dark Elves hail from the province of Morrowind.[0xFD]You are part of a tall, dark-skinned[0xFD]people, known to be extremely strong, intelligent,[0xFD] and quick. They are extremely versatile in all manners[0xFD]of skills and well-known as warriors and mages.[0xFD] Is your character to be a Dark Elf?[0xFD]"]
	},
	{
		id: 2050,
		lines: [
			"The Mages Guild is an inter-provincial organization[0xFD] under a council of five archmagisters, dedicated to[0xFD] the study and application of magicka. Our students[0xFD] have concocted a number of the more popular potions[0xFD] and magical items which we offer at reasonable[0xFD] prices. We also have a variety of standard spells[0xFD] and potion ingredients, also for sale. In addition,[0xFD] our study is available for all serious students of[0xFD] magicka wishing to create their own spells.[0xFD] [0xFD] Of course, the Mages Guild is no mere curiousity[0xFD] shop. Persons judged worthy to join the Mages Guild[0xFD] are given access to libraries and laboratories of[0xFD] every description. Not all at once, of course, but[0xFD] gradually. One has to be careful about whom one[0xFD] trusts with great power.[0xFD] [0xFD] After all, the Mages Guild is all about[0xFD] responsibility.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2051,
		lines: [
			"The Akatosh Chantry is devoted to the worship[0xFD] of Akatosh, the Great Dragon. Akatosh is the most[0xFD] constant of gods, for his sphere is time itself.[0xFD] [0xFD] Perhaps, if you are in need of a blessing of time[0xFD] and are willing to make an appreciable donation,[0xFD] Akatosh might smile upon you and grant you time:[0xFD] time to heal your injuries, perhaps, or time to[0xFD] shorten your voyages.[0xFD] [0xFD] Our priests and priestess here have a variety of[0xFD] other skills and services available for members[0xFD] of the Akatosh Chantry. Naturally, one has to be[0xFD] judged worthy before one is sheltered under the[0xFD] Great Wings of Akatosh.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2052,
		lines: [
			"We are the Order of Arkay, the God of Birth and[0xFD] Death. Arkay is the great spirit who brings every[0xFD] man and woman, human, elf, khajiit, and Argonian[0xFD] into this world, and when the time is true, ends[0xFD] their circle. Arkay is fertility and blight, joy[0xFD] and sorrow. At the Order, we celebrate the Blessed[0xFD] Neutrality that Arkay stands for.[0xFD] [0xFD] While we do not offer strangers blessings, for to[0xFD] give favor or curse would be to upset the eternal[0xFD] balance, the Order offers much to its members.[0xFD] Our libraries and sages are some of the finest in[0xFD] Tamriel. Of course, few are worthy to be initiated[0xFD] into the mysteries of Birth and Death.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2053,
		lines: [
			"At the House of Dibella, we seek truth through[0xFD] beauty and the worship of the embodiment of beauty,[0xFD] the Goddess Dibella.[0xFD] [0xFD] Dibella smiles on those who give generously to our[0xFD] House. She grants charm and grace to donors. In[0xFD] proportion to their generosity, of course.[0xFD] [0xFD] We are always interested in new initiates to the[0xFD] House of Dibella, though only those possessing[0xFD] skills in the promotion of harmony. To be honest,[0xFD] very few qualify.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2054,
		lines: [
			"Temples devoted to the Mother Goddess of Tamriel[0xFD] are called Benevolences, for we are devoted to the[0xFD] charge of uniting all creatures as brethren,[0xFD] childer of Mara. We are intolerant only of those[0xFD] who show intolerance; we hate only those who hate.[0xFD] [0xFD] Mara is our Mother Goddess, and thus she blesses[0xFD] all with the gift of love. Particularly, she favors[0xFD] those who help her followers in Tamriel. For a[0xFD] reasonable donation to our Benevolence, you will[0xFD] be blessed and be forever beloved by he or she who[0xFD] loves you best.[0xFD] [0xFD] Those who devote themselves further to the Mother[0xFD] Goddess are even more blessed. Our priests and[0xFD] priestesses study the greatness of Mara's Tamriel[0xFD] and have learned much. So there is much to share[0xFD] with our initiates who are judged to be true[0xFD] to Mara's calling.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2055,
		lines: [
			"The School of Julianos is no mere temple, dedicated[0xFD] to mindless obseisance to a distant and hazy God[0xFD] figure. Julianos is a God, to be sure, but foremost[0xFD] he is a symbol of learning, logic, philosophy, and[0xFD] wisdom. We espouse no moral philosophy other than[0xFD] the goodness of knowledge. As the great Psijic[0xFD] once said, the power of ignorance can truly shatter[0xFD] mithril like glass. That is our enemy.[0xFD] [0xFD] Scholarship is a long and difficult journey, and[0xFD] Julianos does not tolerate those who wish to shorten[0xFD] it. However, He does bless those who generously[0xFD] donate to His School with a temporary increase in[0xFD] their magical skills.[0xFD] [0xFD] While we advocate literacy and education for all[0xFD] Tamrielans, our policy for those who wish to join[0xFD] the School itself is very stringent. We have little[0xFD] time to waste training the slow and the lazy.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2056,
		lines: [
			"Our Lady is the Goddess Kynareth whose sphere is[0xFD] the Heavens itself. She is sometimes called the[0xFD] Goddess of Air, the Pure One. It was She who gave[0xFD] the Lords Mail to the Warrior Lord Morihaus to[0xFD] combat the unclean Daedric spirits.[0xFD] [0xFD] By the glory of our Lady, we have become the[0xFD] greatest physicians in Tamriel -- our ability[0xFD] to cure magical and mundane diseases is truly[0xFD] unrivalled. Other temples cure only their own[0xFD] priests, but we are philanthropists.[0xFD] [0xFD] Of course, the Goddess shows special favor on Her[0xFD] own. We do take in new initiates, provided they[0xFD] show devotion to the Goddess and have the skill[0xFD] to make their devotion worthwhile.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2057,
		lines: [
			"Our God is the God of Mercy, Stendarr. Some mock[0xFD] our compassion, calling us sentimental fools and[0xFD] tenderhearts. But the truth is that everyone, no[0xFD] matter their strength, crawls to us when Sai, the[0xFD] God of Luck deserts them as he is prone to do.[0xFD] [0xFD] Our gift to the traveller is a simple one -- we[0xFD] heal those who are in pain. For more complicated[0xFD] ailments, diseases and poisonings, we direct you[0xFD] to the Temple of Kynareth. With due respect, for[0xFD] they are the finest apothecaries and we, the[0xFD] finest chirurgeons.[0xFD] [0xFD] If one possesses the desire and aptitude, one may[0xFD] join the Temple. Though we desire to help all[0xFD] Tamrielans, we only possess the means to train[0xFD] and assist a small handful. Sometimes, it is best[0xFD] to begin one's compassion with oneself.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2058,
		lines: [
			"We are a temple devoted to Zenithar, the God of[0xFD] Commerce and Patron of Merchants and Mercenaries.[0xFD] Long ago, in our movement's birth, our forefathers[0xFD] made us a temple like no other: one meant to be[0xFD] adaptable, but resilient to the storm of time. We[0xFD] are thus called Resolutions, a far more[0xFD] descriptive term than temples.[0xFD] [0xFD] The Resolution of Zenithar favors those who favor[0xFD] us -- we do not choose to hide behind words like[0xFD] donations, gifts, indulgences. In proportion to[0xFD] your payment to the Resolution, your skill in[0xFD] haggling with other merchants will increase, but[0xFD] temporarily. If you wish to increase your skill[0xFD] permanently, you may wish to join the Resolution[0xFD] and meet with our trainers.[0xFD] [0xFD] The invitation to join the Resolution of Zenithar[0xFD] is not open. Only those already possessing a[0xFD] few minimum skills will even be considered. It[0xFD] does not reward us to waste our time with[0xFD] neophytes. If nothing else, we are professionals.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2059,
		lines: [
			"We of the Order of the Lamp are the protectors of[0xFD] the Mages Guild. We follow the Palantinus, under[0xFD] direct orders from the Archmagister.[0xFD] [0xFD] We are given appropriate rights to certain services[0xFD] at the Mages Guild. One's rank within the Order[0xFD] approximates ones rank within the Guild, in terms[0xFD] of rights and priveleges.[0xFD] [0xFD] The Order is only open to those who have already[0xFD] demonstrated fighting skills and are in good[0xFD] standing with the Mages Guild.[0xFD]"]
	},
	{
		id: 2060,
		lines: [
			"The Knights of the Dragon have the official duty[0xFD] of protecting the city and royal family of[0xFD] Daggerfall. We are led by the honorable Lord[0xFD] Bridwell, the greatest hero of the War of[0xFD] Betony.[0xFD] [0xFD] To be considered for admission into our fighting[0xFD] order, one must demonstrate exceptional combat[0xFD] skills and a reputation for honor and loyalty to[0xFD] Daggerfall. In return, our knights are[0xFD] treated with unparalleled respect in Daggerfall.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2061,
		lines: [
			"The Order of the Candle have replaced the defunct[0xFD] Knights of the Moon as the official protectors and[0xFD] warriors of the kingdom of Sentinel. The lords[0xFD] Vhosek of the Moon and K'avar are our commanders[0xFD] and we follow their order implicitly.[0xFD] [0xFD] In Sentinel, no order, guild, or organization is[0xFD] treated with more respect than we. Only men and[0xFD] women of exceptional fighting skills and[0xFD] demonstrated loyalty to the royal family of[0xFD] Sentinel will be considered for[0xFD] admission.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2062,
		lines: [
			"We of the Order of the Rose have the honor of[0xFD] being the guard and strong arm of his majesty,[0xFD] King Eadwyre of Wayrest. The greatest knights[0xFD] in his court are members of our order and we[0xFD] have demonstrated our worth in internal and[0xFD] interprovincial struggles throughout the Bay[0xFD] and Tamriel.[0xFD] [0xFD] For those few whose combat abilities and true[0xFD] loyalty to the King are judged acceptible, we[0xFD] offer membership in the most respected order[0xFD] in Wayrest.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2063,
		lines: [
			"The Knights of the Flame are the noble warriors[0xFD] of the Lorddom of Anticlere. Our allegiance is[0xFD] unswerving to Lord and Lady Flyte, who rescued[0xFD] us from the chaos following the War of Betony.[0xFD] [0xFD] Only those known for their loyalty to Anticlere[0xFD] and our blessed patrons are judged worthy to[0xFD] join our order. In return for their allegiance,[0xFD] our knights are treated as veritable gods in[0xFD] Anticlere.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2064,
		lines: [
			"The Host of the Horn have the honor of serving[0xFD] his most terrible Grace, the Baron Shrike. Our[0xFD] duties consist of all important activities from[0xFD] straight warfare to espionage and tax collection.[0xFD] [0xFD] It may be worth dispelling this confusion: the[0xFD] Baron's weak brother Lord Kain has his own order[0xFD] devoted to the illegal acquisition of the throne[0xFD] of Lainlyn, and he idiotically calls his[0xFD] piteous group, the Host of the True Horn.[0xFD] [0xFD] If one has demonstrated loyalty to Baron Shrike[0xFD] and prowess in battle, one may be considered for[0xFD] admission in our proud Host. We have not earned[0xFD] the fear and respect of all in Lainlyn by[0xFD] wasting time with the hopeless.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2065,
		lines: [
			"We of the Knights of the Owl are responsible[0xFD] for protecting and fighting for the royal family[0xFD] of Glenpoint. Only those of the most refined[0xFD] fighting skills and dedicated to the welfare[0xFD] of Glenpoint are considered for inclusion in[0xFD] our knightly order.[0xFD] [0xFD] Our knights are the royal escorts of the[0xFD] Baron and treated with unparalleled respect[0xFD] in all of Glenpoint.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2066,
		lines: [
			"In all modesty, the Order of the Raven is a[0xFD] legendary fighting order. We have the honor of[0xFD] having led the battle against the Camoran[0xFD] Usurper and freed half of Tamriel from his tyranny.[0xFD] [0xFD] We remain the vanguards of the Barony of Dwynnen,[0xFD] protecting the entire region. Given our[0xFD] reputation, we cannot admit any but the greatest[0xFD] warriors, the most loyal servants of the Baron,[0xFD] into our order.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2067,
		lines: [
			"The Knights of the Wheel represent the royal[0xFD] family and the city of Abibon-Gora in all[0xFD] military situations.[0xFD] [0xFD] We are not currently soliciting new recruits[0xFD] into our order. A suitably talented warrior[0xFD] known for his or her loyalty to Abibon-Gora[0xFD] might, however, still merit consideration.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2068,
		lines: [
			"We of the Knights of the Scarab have the[0xFD] honor of being the official guard for the[0xFD] royal family of Totambu. Our duties are many,[0xFD] our favor is great. Only the most refined[0xFD] and loyal warriors are considered for[0xFD] initiation. It is a very great honor indeed.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2069,
		lines: [
			"The Order of the Hawk act as the noble[0xFD] warriors and protectors of the town and[0xFD] royal family of Santaki. Many have trained[0xFD] since childhood to join our knightly order,[0xFD] for the honor and prestige.[0xFD] [0xFD] Are you perhaps interested in joining?[0xFD]"]
	},
	{
		id: 2070,
		lines: [
			"The Knights of the Circle are the military[0xFD] arm of the Order of Arkay. It is our solemn[0xFD] duty to protect the Order and to fight[0xFD] their battles. Our devotion to the God[0xFD] Arkay and the Order are complete.[0xFD] [0xFD] Only those of exceptional fighting prowess[0xFD] and unswerving loyalty to the Order and[0xFD] the God Arkay are considered for inclusion[0xFD] in the Knights of the Circle.[0xFD]"]
	},
	{
		id: 2071,
		lines: [
			"We of the Knights of Iron are in charge of[0xFD] the military excursions of the Resolution[0xFD] of Zenithar. Zenithar is not merely the[0xFD] God of Merchants and Commerce, He is also[0xFD] a warrior god. We represent that side of[0xFD] Him.[0xFD] [0xFD] Obviously, it does not behoove us to take[0xFD] any new initiates who are less than[0xFD] excellent fighters and completely[0xFD] devoted to our cause.[0xFD]"]
	},
	{
		id: 2072,
		lines: [
			"Mara represents love and peace. She and Her[0xFD] Benevolence recognize that, as hypocritical[0xFD] as it sounds, military strength is often[0xFD] needed to beget this peace. The Maran[0xFD] Knights represent this military strength.[0xFD] [0xFD] We are admittedly a controversial knightly[0xFD] order. Some misguided clerics within the[0xFD] Temple would prefer that we disband, but[0xFD] they are in the minority, and all respect[0xFD] our skill and loyalty.[0xFD]"]
	},
	{
		id: 2073,
		lines: [
			"We are the military arm of the Akatosh[0xFD] Chantry, the Order of the Hour, charged[0xFD] with the protection of the Chantry. Our[0xFD] knights are devoted to the Great Dragon,[0xFD] and dedicated to the promise of stability[0xFD] and permanence He represents.[0xFD] [0xFD] Our duties are varied indeed, and our[0xFD] honors bountiful. An initiate in our Order[0xFD] have the same rights and honors of an[0xFD] initiate in the Chantry.[0xFD]"]
	},
	{
		id: 2074,
		lines: [
			"The Knights Mentor are brothers and sisters[0xFD] to the School of Julianos. While they do[0xFD] research and expand the libraries of the[0xFD] School, we protect them. And, in turn,[0xFD] they share their expanded knowledge with[0xFD] us. It is a perfect relationship and[0xFD] benefits us each equally.[0xFD] [0xFD] Naturally, only those of exceptional[0xFD] military skill and demonstrated loyalty[0xFD] to the School and God Julianos are[0xFD] considered for membership into the[0xFD] Knights Mentor.[0xFD]"]
	},
	{
		id: 2075,
		lines: [
			"The House of Dibella is the noblest[0xFD] institution in Tamriel, we of the Order[0xFD] of the Lily firmly are devoted to its[0xFD] cause. Its only fault is that the priests[0xFD] and priestesses within are often too[0xFD] consumed with the propagation of beauty[0xFD] to protect themselves adequately.[0xFD] [0xFD] That is the sacred cause of the Order[0xFD] of the Lily. We protect the House and[0xFD] receive the training and blessings of[0xFD] clerics of equal rank. I can think of[0xFD] no better reason to fight than the[0xFD] cause of beauty.[0xFD]"]
	},
	{
		id: 2076,
		lines: [
			"We, the Knights of Stendarr the Merciful[0xFD] call ourselves the Crusaders, for it is[0xFD] our sacred duty to protect the Temple[0xFD] and fights its battles. While we firmly[0xFD] espouse the Temple's philosophy of[0xFD] compassion and charity, we recognize[0xFD] that if the Temple is weak, it cannot[0xFD] realistically survive.[0xFD] [0xFD] Only those of great combat ability and[0xFD] proven devotion to the Temple and the[0xFD] God Stendarr are eligible for possible[0xFD] membership in the Crusaders.[0xFD]"]
	},
	{
		id: 2077,
		lines: [
			"We are the strong arm of the Goddess[0xFD] Kynareth, an off-shoot of her temple[0xFD] devoted to fighting her causes all over[0xFD] Tamriel. Members of the Kynaran Order[0xFD] are honored for our skill and loyalty[0xFD] by the Temple, and given full access[0xFD] to the blessings and services within.[0xFD] According to individual rank in the[0xFD] Order, of course.[0xFD] [0xFD] Possible candidates for inclusion in[0xFD] the Kynaran Order are chosen on the[0xFD] basis of their combat skills and their[0xFD] reputation with the Temple.[0xFD]"]
	},
	{
		id: 2100,
		lines: [
			"Mages are those that devote their lives to[0xFD]the study and practice of the arcane magical arts. An[0xFD]experienced mage can be a deadly force to reckon with. The skills[0xFD]most important to a Mage are: All Schools  of Magicka --[0xFD]Mysticism, Alteration, Thaumaturgy,[0xFD]Illusion, Destruction, and Restoration.[0xFD] Do you wish your character to be a Mage?[0xFD]"]
	},
	{
		id: 2101,
		lines: [
			"Spellswords are warriors who are also highly[0xFD]skilled in the use of magic. This dual specialization[0xFD]makes the Spellsword a formidable opponent indeed.[0xFD]The most important skills to a Spellsword are:[0xFD] Axe, Long Blade, Blunt Weapon, Destruction,[0xFD]Illusion, and Alteration.[0xFD] Do you wish your character to be a Spellsword?[0xFD]"]
	},
	{
		id: 2102,
		lines: [
			"Battle Mages use their mastery of magic[0xFD]for combat purposes. They are naturally adept at casting[0xFD]offensive magic spells. The skills most important to a[0xFD]Battle Mage are: Destruction, Long Blade, Axe,[0xFD] Thaumaturgy, Alteration, and Hand-to-Hand.[0xFD] Do you wish your character to be a Battle Mage?[0xFD]"]
	},
	{
		id: 2103,
		lines: [
			"Sorcerers are quite adept at the manipulation[0xFD]of magic, although they do not generate their own[0xFD] magical energy. Rather, they absorb the energy of spells[0xFD] cast at them, and use this energy to power their own spells.[0xFD] The main Sorcerer skills are: All Schools of Magicka --[0xFD]Mysticism, Alteration, Thaumaturgy,[0xFD]Destruction, Restoration, and Illusion.[0xFD] Do you wish your character to be a Sorcerer?[0xFD]"]
	},
	{
		id: 2104,
		lines: [
			"Healers use their magic to treat injuries[0xFD]and cure illnesses. Their function is primarily[0xFD]defensive in nature. The most important skills to a Healer[0xFD]are: Restoration, Medical, Dodging, Thaumaturgy,[0xFD] Mysticism, and Alteration.[0xFD] Do you wish your character to be a Healer?[0xFD]"]
	},
	{
		id: 2105,
		lines: [
			"Nightblades use their magic abilities as[0xFD]an aid to subterfuge. The Nightblade is often like a thief[0xFD]with the capability to use magic. The skills most important[0xFD]to a Nightblade are: Illusion, Stealth, Dodging,[0xFD] Thaumaturgy, Short Blade, and Lockpicking.[0xFD] Do you wish your character to be a Nightblade?[0xFD]"]
	},
	{
		id: 2106,
		lines: [
			"Bards are the most versatile class, learned in[0xFD]many different arts. They are familiar with weaponry, magic,[0xFD]and the thiefly talents. The skills most often employed[0xFD]by Bards are: Streetwisdom, Etiquette,[0xFD] Pickpocketing, Stealth, Short blade, and[0xFD] Hand to hand.[0xFD] Do you wish your character to be a Bard?[0xFD]"]
	},
	{
		id: 2107,
		lines: [
			"Burglars are well versed in the arts of picking locks.[0xFD]They can sneak undetected into even the most[0xFD]secure of noble houses and escape detection.[0xFD]The most important Burglar skills are: Lockpicking,[0xFD]Stealth, Climbing, Mercantile,[0xFD]Dodging, and Short blade.[0xFD] Do you wish your character to be a Burglar?[0xFD]"]
	},
	{
		id: 2108,
		lines: [
			"Rogues are trained in both the shadowy arts of the[0xFD]thief, and the combat arts of the warrior. The Rogue[0xFD]relies on these skills most heavily: Long Blade,[0xFD]Stealth, Dodging, Pickpocketing, Backstabbing,[0xFD]and Streetwisdom.[0xFD] Do you wish your character to be a Rogue?[0xFD]"]
	},
	{
		id: 2109,
		lines: [
			"Acrobats practice the thieving arts, and use their[0xFD]remarkable physical skills to aid them.[0xFD]They are very quick, agile, and nimble. The most[0xFD]important skills to an Acrobat are: Jumping, Dodging,[0xFD] Running, Climbing, Hand-to-Hand, and Stealth.[0xFD] Do you wish your character to be an Acrobat?[0xFD]"]
	},
	{
		id: 2110,
		lines: [
			"Thieves are well known for their adeptness in using[0xFD]stealth, speed, and cunning to steal for a[0xFD]living. The six most important skills to[0xFD]a Thief are: Pickpocketing, Stealth, Short Blade,[0xFD] Backstabbing, Climbing, and Lockpicking.[0xFD] Do you wish your character to be a Thief?[0xFD]"]
	},
	{
		id: 2111,
		lines: [
			"Assassins are much feared and respected, for they[0xFD]use the night for concealment, and their cunning to[0xFD]strike deadly blows. Even secure locks cannot[0xFD]stay the Assassin's blade. The most important Assassin[0xFD] skills are: Critical Striking, Backstabbing, Stealth,[0xFD] Short Blade, Long Blade, and Blunt Weapon.[0xFD] Do you wish your character to be an Assassin?[0xFD]"]
	},
	{
		id: 2112,
		lines: [
			"Monks are specially trained in mental disciplines. This[0xFD]intense mental awareness includes the ability to[0xFD]turn the body into a lethal machine. The skills most[0xFD]important to a Monk are: Hand-to-Hand, Critical Striking,[0xFD] Dodging, Swimming, Medical, and Blunt Weapon.[0xFD] Do you wish your character to be a Monk?[0xFD]"]
	},
	{
		id: 2113,
		lines: [
			"Archers are warriors specially trained in the[0xFD]use of the bow. The most important skills to an Archer are:[0xFD]Archery, Hand-to-Hand, Dodging[0xFD] Axe, Blunt Weapon, and Critical Striking.[0xFD] Do you wish your character to be an Archer?[0xFD]"]
	},
	{
		id: 2114,
		lines: [
			"Rangers are at home in the wilderness, and are[0xFD]excellent hunters. They are very skilled at survival and[0xFD]tracking. The skills most important to a Ranger are:[0xFD] Long Blade, Axe, Climbing, Swimming,[0xFD] Archery, and Critical Striking.[0xFD] Do you wish your character to be a Ranger?[0xFD]"]
	},
	{
		id: 2115,
		lines: [
			"Barbarians are warriors that hail from the harsh[0xFD] lands that fringe more civilized areas. They make excellent[0xFD] fighters, well-suited to survival under the worst conditions.[0xFD] The skills Barbarians use most are:[0xFD]Blunt Weapon, Long Blade, Axe,[0xFD] Jumping, Running, and Swimming.[0xFD] Do you wish your character to be a Barbarian?[0xFD]"]
	},
	{
		id: 2116,
		lines: [
			"Warriors are those most heavily trained in the arts[0xFD]of combat and warfare. They are adept in the use of many[0xFD]weapons and are often heavily armored. The skills most[0xFD]important to a Warrior are: Axe, Long Blade,[0xFD]Blunt Weapon, Hand-to-Hand, Archery, and Short Blade.[0xFD] Do you wish your character to be a Warrior?[0xFD]"]
	},
	{
		id: 2117,
		lines: [
			"Knights are trained as warriors. They hail from noble[0xFD]stock, and adhere to the code of chivalry.[0xFD]The most important skills to a Knight are:[0xFD]Long Blade, Etiquette, Blunt Weapon, Axe,[0xFD]Archery and Short Blade.[0xFD] Do you wish your character to be a Knight?[0xFD]"]
	},
	{id: 2200, lines: [
			"Select thy character's gender.[0xFD]"]},
	{
		id: 2400,
		lines: [
			"Help - General[0xFD]",
			"  The ClassMaker allows you to create your own class.[0xFC]   Your new class must include:[0xFC]            1. A Name[0xFC]            2. 3 Primary Skills[0xFC]            3. 3 Major Skills[0xFC]            4. 6 Minor Skills[0xFC]     All other custom features are optional:[0xFC]     Adjusting some of these, such as adding special[0xFC]   advantages or disadvantages and higher or lower[0xFC]   health points per level, makes it more or less[0xFC]   difficult for the class to improve in skills and[0xFC]   thus rise in levels. The sliding \"dagger\" bar[0xFC]   marked \"Skill Advancement\" represents the[0xFC]   difficulty of a class learning new skills.[0xFC]     If you have any specific questions about a[0xFC]   function of the ClassMaker, click the appropriate[0xFC]   section under Help."]
	},
	{
		id: 2401,
		lines: [
			"Help - Class Name[0xFD]     You may choose any name for your new character[0xFC]   class, so long as the name does not exceed 23[0xFC]   letters."]
	},
	{
		id: 2402,
		lines: [
			"Help - Attributes[0xFD]     The base average of the Strength, Intelligence,[0xFC]   Willpower, Agility, Speed, Endurance, Personality[0xFC]   and Luck of the new class cannot exceed 50. If[0xFC]   you add five points to one of these attributes,[0xFC]   for example, you will have to subtract five from[0xFC]   another attribute.[0xFC]     The result is a list of the minimum attributes[0xFC]   for the new class. Your character will probably[0xFC]   have higher attribute scores than the minimum.[0xFC]     For a definition of each attribute, see the[0xFC]   Daggerfall manual."]
	},
	{
		id: 2403,
		lines: [
			"Help - Skills[0xFD]     More than anything else, skills define a[0xFC]   class. Pick the most important three skills for[0xFC]   your class as Primary Skills, the next three most[0xFC]   important skills as Major Skills, and the next[0xFC]   six most important skills as Minor Skills.[0xFC]     The other skills will be available for your[0xFC]   character class, but they will be poorly mastered[0xFC]   if known at all when the game begins, and they[0xFC]   will be more difficult to raise.[0xFC]     It is important to pick skills most commonly[0xFC]   used and mastered by the new class for the[0xFC]   Primary and Major skills. These skills will[0xFC]   increase with constant use and, as the skills[0xFC]   increase, so will the character's level."]
	},
	{
		id: 2404,
		lines: [
			"Help - Special Advantages[0xFD]     Special Advantages are optional finishing touches[0xFC]   such as Disease Resistance and Acute Hearing for[0xFC]   the customized class. Adding Special Advantages to a[0xFC]   class always increases the difficulty of raising[0xFC]   skill levels. Watch the dagger bar marked \"Skill[0xFC]   Advancement\", the higher the dagger, the tougher[0xFC]   it is for a member of a class to learn new[0xFC]   skill levels.[0xFC]     You can select a maximum of 7 Special Advantages.[0xFC]   Complete descriptions of each Special Advantage are[0xFC]   listed in the Daggerfall manual.[0xFC]"]
	},
	{
		id: 2405,
		lines: [
			"Help - Special Disadvantages[0xFD]     Special Disadvantages are optional finishing[0xFC]   touches such as Forbidden Weaponry and Inability[0xFC]   to Regenerate Spell Points for the customized[0xFC]   class. The primary reason to add Special[0xFC]   Disadvantages is to lower the difficulty of[0xFC]   raising skill levels.[0xFC]     You can select a maximum of 7 Special Disadvantages.[0xFC]   Complete descriptions of each Special Disadvantage are[0xFC]   listed in the Daggerfall manual.[0xFC]"]
	},
	{
		id: 2406,
		lines: [
			"Help - Reputations[0xFD]     Editing Reputations is a optional class creation[0xFC]   feature which allows you to help determine how[0xFC]   certain broad societal factions are inclined to[0xFC]   react to someone of your custom class.[0xFC]     These groups are by no means the only reputational[0xFC]   groups in the game: they are merely the broadest[0xFC]   and the most common.[0xFC]     The base average of all the reputational groups[0xFC]   together must always equal zero. Thus, if you add[0xFC]   five points to your reputation with one group, you[0xFC]   must subtract five from another.[0xFC]     For more on the importance of reputation, see the[0xFC]   Daggerfall manual.[0xFC]",
			" "]
	},
	{
		id: 2407,
		lines: [
			"Help - Skill Advancement for Class[0xFD]     The position of the dagger in the Skill[0xFC]   Advancement table shows the approximate difficulty[0xFC]   of skill advancement for that particular class.[0xFC]   The higher the dagger rises, the more difficult it[0xFC]   is for a member of a class to rise in skill level.[0xFC]     Adding Special Advantages and extra health points[0xFC]   makes it more difficult for you to learn skills.[0xFC]   Adding disadvantages or lowering the health point[0xFC]   bonuses makes it easier or you to learn skills.[0xFC]     For reference, a true warrior learns skills at[0xFC]   the default, exact middle of the Skill Advancement[0xFC]   chart. Thieves have an easier time learning skills[0xFC]   and mages have a harder time."]
	},
	{id: 2500, lines: [
			"%qdt - %pnq in %plq told me \"%qot\""]},
	{
		id: 3100,
		lines: [
			"I'm afraid I can only help[0xFD] persons of a certain rank.",
			"You're not of sufficient rank[0xFD] to use my services.",
			"My services are only available[0xFD] for persons of rank.",
			"No offense, but I can only assist[0xFD] certain high-ranking members.",
			"Perhaps I can help you one day, but[0xFD] you are not yet of sufficient rank.",
			"Come back when you have risen in[0xFD] rank in the organization.",
			"I can't offer my assistance to just[0xFD] anyone. I'm sure you understand.",
			"My services are reserved for a special[0xFD] few. You are not yet among them."]
	},
	{id: 3353, lines: [
			"Oh Shit!!!"]},
	{
		id: 3503,
		lines: [
			"Greetings, %pcf. Tonight we summon[0xFD] %dts from the pit of Oblivion.[0xFD] It is no small expense, this undertaking.[0xFD] From you, I must ask %a gold. Agreed?[0xFD]",
			"Tonight we reach to the chasm of Oblivion[0xFD] to bring that foul spirit, the daedra regent[0xFD] %dts into the Mundus. From you, %a gold[0xFD] is required for this service.[0xFD]"]
	},
	{
		id: 3504,
		lines: [
			"Greetings, friend %pcf. Tonight we summon[0xFD] %dts from the pit of Oblivion.[0xFD] We usually ask for gold, but for allies like[0xFD] you, the service is without charge.[0xFD] Shall I proceed?[0xFD]",
			"Ah, my friend %pcf. Tonight we reach to[0xFD] the chasm of Oblivion to bring that foul spirit,[0xFD] the daedra regent %dts into the Mundus.[0xFD] A favor to you. Shall I continue?[0xFD]"]
	},
	{
		id: 3506,
		lines: [
			"Very well, %pcn. If you[0xFD] change your mind, return. We can[0xFD] perform this ritual anytime.[0xFD]",
			"No? Well, return if you desire. I can[0xFD] bring forth %dts whenever[0xFD] you are better prepared.[0xFD]"]
	},
	{
		id: 3507,
		lines: [
			"No? If you change your mind, return to[0xFD] me tonight. Tomorrow portents will not[0xFD] allow me to complete this summoning.[0xFD]",
			"It is a fearful enterprise indeed. If[0xFD] you wish, you can return later tonight,[0xFD] but tomorrow will be a day too late to[0xFD] summon the daedra %dts.[0xFD]"]
	},
	{
		id: 3508,
		lines: [
			"The summoning seems to have failed.[0xFD]",
			"Tonight %dts was not[0xFD] to be summoned. Accept my apologies.[0xFD]"]
	},
	{
		id: 3509,
		lines: [
			"Tonight the portents are not kind for[0xFD] a safe summoning, %pcf. If[0xFD] you would like to be present for the[0xFD] summoning of %dts, return[0xFD] on %dfs.[0xFD]",
			"We are not summoning %dts[0xFD] this evening. Return on %dfs[0xFD] if you want to be present for the[0xFD] summoning.[0xFD]"]
	},
	{id: 4000, lines: [
			"Do you want to Teleport or Set an Anchor?[0xFD]"]},
	{id: 4001, lines: [
			"An Anchor must be set before you can Teleport.[0xFD]"]},
	{
		id: 4020,
		lines: [
			"Congratulations, %pcn,[0xFD] You are now a Master of %ski[0xFD] One of the Finest Practitioners[0xFD] Of %ski in Tamriel.[0xFD]"]
	},
	{id: 4021, lines: [
			"Master of %ski"]},
	{
		id: 4022,
		lines: [
			"Me train you? You could teach the[0xFD] old trainer a few things in that,[0xFD] %pct.[0xFD]",
			"I'm sorry, %pct. There's[0xFD] nothing I could show you that you[0xFD] wouldn't already know.[0xFD]",
			"You've picked one skill in which[0xFD] your ability certainly supercedes[0xFD] mine, %pct.[0xFD]",
			"You're already far more skilled[0xFD] in that than I, %pct.[0xFD]"]
	},
	{
		id: 4023,
		lines: [
			"You must give yourself time to[0xFD] reflect on what you've trained in[0xFD] so far today.[0xFD]",
			"You cannot train in one than one[0xFD] skill in a single day.[0xFD]"]
	},
	{
		id: 4050,
		lines: [
			"Reliquary of Raen",
			"Shrine of Bandi",
			"Shrine of Mai",
			"Shelter of Phen",
			"Anvil of Ebonarm",
			"Altar of I'ric",
			"Divad Monument",
			"Shrine of Jone",
			"Shrine of Jephre",
			"Reliquary of Sai",
			"Shrine of Vigryl",
			"Shrine of Dugrod",
			"Jhim Sei Shrine",
			"Sage Monument",
			"Jode Shrine",
			"Shrine of Q'Olwen",
			"Shrine of Ephen",
			"Strenner Haven",
			"Kieran Theatre",
			"Djen Lodge",
			"Notorgo Altar"]
	},
	{
		id: 4051,
		lines: [
			"The %ln Cemetery",
			"The %ln Cemetery",
			"The %ln Cemetery",
			"The %ln Cemetery",
			"The %ln Graveyard",
			"The %ln Graveyard",
			"The %ln Graveyard",
			"The %ln Graveyard",
			"The Graves of %ln",
			"The %ln Tombs",
			"The Tombs of %ln",
			"The %ln Vaults",
			"The %ln Crypts",
			"THe Crypts of %ln",
			"The %ln Burial Ground",
			"%ln Memorial Gardens"]
	},
	{
		id: 4052,
		lines: [
			"Old %fn's Farm",
			"The %ln Farmstead",
			"The %ln Farmstead",
			"The %ln Farmstead",
			"The %ln Farmstead",
			"The %ln Plantation",
			"%ln Grange",
			"%ln Orchard",
			"The %ln Homestead"]
	},
	{
		id: 4053,
		lines: [
			"The Stronghold of %ln",
			"Castle %ln",
			"Castle %ln",
			"The Fortress of %ln",
			"The Hold of %ln",
			"%ln's Hold",
			"The Citadel of %ln",
			"Tower %ln",
			"%ln Tower",
			"The Tower of %ln",
			"%ln's Guard",
			"%ln Hall"]
	},
	{
		id: 4054,
		lines: [
			"%ln Manor",
			"%ln Manor",
			"%ln Manor",
			"%ln Manor",
			"%ln Hall",
			"%ln Court",
			"%ln Palace",
			"%ln Hall",
			"%ln Manorhouse"]
	},
	{id: 4055, lines: [
			"The Order of Arkay"]},
	{id: 4056, lines: [
			"The Resolution of Zenithar"]},
	{id: 4057, lines: [
			"The Benevolence of Mara"]},
	{id: 4058, lines: [
			"The Akatosh Chantry"]},
	{id: 4059, lines: [
			"The House of Dibella"]},
	{id: 4060, lines: [
			"The School of Julianos"]},
	{id: 4061, lines: [
			"The Temple of Stendarr"]},
	{id: 4062, lines: [
			"The Temple of Kynareth"]},
	{
		id: 4063,
		lines: [
			"The Old %ln Hovel",
			"Old %fn's Hovel",
			"The Old %ln Shack",
			"Old %fn's Shack",
			"The %ln Cabin",
			"The Old %ln Place",
			"Old %fn's Place",
			"The Old %ln Hut"]
	},
	{
		id: 4075,
		lines: [
			"Bleeding",
			"Eternal",
			"Infinite",
			"Burning",
			"Fearful",
			"Joyous",
			"Perpetual",
			"Sacred",
			"Holy",
			"Inner",
			"Blessed",
			"Gentle",
			"Wailing",
			"Singing",
			"Weeping",
			"Silent",
			"Laughing"]
	},
	{
		id: 4076,
		lines: [
			"Soul",
			"Ascencion",
			"Altar",
			"Rebirth",
			"Relic",
			"Star",
			"Light",
			"Redeemer",
			"Sunrise",
			"Prophet",
			"Oracle",
			"Tree",
			"Seer",
			"Martyr",
			"Omen",
			"Idol",
			"Sanctuary"]
	},
	{id: 4077, lines: [
			"Arkay"]},
	{id: 4078, lines: [
			"Zenithar"]},
	{id: 4079, lines: [
			"Mara"]},
	{id: 4080, lines: [
			"Akatosh"]},
	{id: 4081, lines: [
			"Dibella"]},
	{id: 4082, lines: [
			"Julianos"]},
	{id: 4083, lines: [
			"Stendarr"]},
	{id: 4084, lines: [
			"Kynareth"]},
	{
		id: 4116,
		lines: [
			"Your earliest memories are of a warm and unusual home.[0xFC] Your mother, a beautiful enchantress, would entertain[0xFC] you for hours with tricks. Your favorite was her[0xFC] %q1[0xFC] Your father was a fearsome man. Many in the village[0xFC] referred to him as \"that Warlock.\" But to you he was a[0xFC] loving and doting father.[0xFC] [0xFC] As you grew, it was apparent that you had unusually strong[0xFC] magical powers. Soon you were able to %q1a[0xFC] yourself. You remember your parents talking about an evil[0xFC] Battlemage, Jagar Tharn, how it was known in their circle[0xFC] that he had usurped the power of the land away from its[0xFC] rightful ruler. No one dared to move against him.[0xFC] %q2.[0xFC] One day in your twentieth year, a courier arrived at your[0xFC] house with the news that a powerful hero had killed[0xFC] Jagar Tharn and restored the rightful Emperor to the throne.[0xFC] Even your gruff father nearly wept with joy at the news.[0xFC] [0xFC] The courier also brought the news that there would be a great[0xFC] celebration in Imperial City and that all the people who had[0xFC] worked secretly to depose Tharn were invited. Once the[0xFC] courier left, you asked your parents if you could go to the[0xFC] celebration. Your mother and father looked concerned and[0xFC] explained that there was not enough gold for all three of you[0xFC] to make the trip. Downcast, you tried to hide your[0xFC] disappointment. Your father, however, turned to you and said[0xFC] that it was time you made your own way in the world. He gave[0xFC] you %q4 and a very unusual staff[0xFC] and sent you on your way to the Imperial City and the[0xFC] celebration.[0xFC] [0xFC] After many days of travel, you approached the capital of the[0xFC] realm, the Imperial City. You noticed a small band of[0xFC] travelers only a short distance in front of you. As you were[0xFC] about to hail them, they were attacked by brigands who had[0xFC] been lying in wait in the woods along the road. You rushed[0xFC] to help the other travelers. As you approached, one of the[0xFC] brigands raised his short sword to strike you. In a natural[0xFC] reflex, you tried to deflect the blow with the staff your[0xFC] father gave you. As the sword struck the staff, a great bolt[0xFC] of lightning erupted from it and both weapons shattered. The[0xFC] brigands and the travelers all stopped and stared at you.[0xFC] As the thunder subsided, the brigands ran back into the[0xFC] woods. You were mobbed by the travelers who thanked you[0xFC] profusely for saving them, members of the Imperial Family[0xFC] who had been visiting in the country and were returning to[0xFC] the Imperial City for the celebrations. They insisted that[0xFC] you come with them to the palace and have an audience with the[0xFC] Emperor.[0xFC] [0xFC] The Emperor was very impressed by your bravery and knew[0xFC] your family as loyal supporters of the Empire. He presented[0xFC] you with %q5. The celebrations continued for weeks,[0xFC] and the Emperor often called on you for informal talks. When[0xFC] you were not in audience, you usually spent your time[0xFC] %q2a.[0xFC] One night you were called to the Emperor's presence in a[0xFC] manner such that you knew the business was serious. He[0xFC] met you in his study and there told you he had a favor[0xFC] to ask.[0xFC]"]
	},
	{
		id: 4117,
		lines: [
			"Your earliest memories of your homelife are of an ongoing[0xFC] turmoil -- visitors continually arriving and leaving, and your[0xFC] mother and father at separate times also having to leave for[0xFC] extended periods. As you grew older you realized that your[0xFC] mother was a member of an elite mercenary legion, first as a[0xFC] weapons instructor, and then later as a combat tactical expert.[0xFC] Your father's interests were quite different: he was a[0xFC] well-respected member of the local Mages Guild, and a master[0xFC] of all kinds of magic. He found you an apt pupil and soon you[0xFC] were able to %q1.[0xFC] [0xFC] You remember your parents talking about the Imperial[0xFC] Battlemage, Jagar Tharn, how it was known in their circle[0xFC] that he had usurped the power of the land away from its[0xFC] rightful ruler. No one dared to move against him.[0xFC] %q2.[0xFC] One day in your twentieth year, you received a visitor at[0xFC] your house with the news that a powerful hero had killed[0xFC] Jagar Tharn and restored the exiled Emperor to the throne.[0xFC] [0xFC] The visitor also brought the news that there would be a great[0xFC] celebration in Imperial City. Once the courier left, you[0xFC] asked your parents if you could go to the celebration. Your[0xFC] mother and father discussed it for some time, before deciding[0xFC] that it was time you made your own way in the world. Your[0xFC] mother gave you %q4 and your father gave you[0xFC] a very unusual staff, then you were sent you on your way to[0xFC] the Imperial City and the celebration.[0xFC] [0xFC] After many days of travel, you approached the capital of the[0xFC] realm, the Imperial City. You noticed a small band of[0xFC] travelers only a short distance in front of you. As you[0xFC] joined them, you were attacked by brigands who had[0xFC] been lying in wait in the woods along the road. One of the[0xFC] brigands raised his short sword to strike you. In a natural[0xFC] reflex, you tried to deflect the blow with the staff your[0xFC] father gave you. As the sword struck the staff, a great bolt[0xFC] of lightning erupted from it and both weapons shattered. The[0xFC] brigands and the travelers all stopped and stared at you.[0xFC] As the thunder subsided, the brigands ran back into the[0xFC] woods. You were mobbed by the travelers who thanked you[0xFC] profusely for saving them. They told you they were members[0xFC] of the Imperial Family who had been visiting in the country[0xFC] and were returning to the Imperial City for the celebrations.[0xFC] They insisted that you come with them to the palace and[0xFC] have an audience with the Emperor.[0xFC] [0xFC] The Emperor was very impressed by your bravery and grateful[0xFC] to you for saving his family. He formally invited you to[0xFC] the celebration and presented you with %q5.[0xFC] The festival continued for weeks, and during that time,[0xFC] the Emperor often called on you for informal talks. When[0xFC] you were not in audience, you usually spent your time[0xFC] %q3.[0xFC] One night you were called to the Emperor's presence in a[0xFC] manner such that you knew the business was serious. He[0xFC] met you in his study and there told you he had a favor[0xFC] to ask.[0xFC]"]
	},
	{
		id: 4118,
		lines: [
			"There was very little subtlety in your life as a child.[0xFC] Your mother was as harsh as she was beautiful, and her[0xFC] wrath if you displeased her was terrible indeed. Your[0xFC] father was an equally fearsome man. You learned the ways[0xFC] of power from them, particularly how to harness and use[0xFC] the raw forms of magicka. There was no question of[0xFC] whether these energies of destruction should be used --[0xFC] only how it might be done. Occasionally, for variety,[0xFC] you dabbled in other colleges of magic, learning how to[0xFC] %q1[0xFC] But the School of Destruction was your specialty.[0xFC] [0xFC] You remember your parents talking about the Imperial[0xFC] Battlemage, Jagar Tharn, how it was known in their circle[0xFC] that he had usurped the power of the land away from its[0xFC] rightful ruler. No one dared to move against him.[0xFC] Battlemages themselves, your parents envied Tharn's success.[0xFC] %q2.[0xFC] One day in your twentieth year, you received a visitor at[0xFC] your house with the news that a powerful hero had killed[0xFC] Jagar Tharn and restored the exiled Emperor to the throne.[0xFC] Accepting the transfer of power as a natural process, your[0xFC] parents took the news with only mild disappointment.[0xFC] [0xFC] The visitor also brought the news that there would be a great[0xFC] celebration in Imperial City. Once the courier left, you[0xFC] asked your parents if you could go to the celebration. Your[0xFC] mother and father discussed it for some time, before deciding[0xFC] that it was time you made your own way in the world. Your[0xFC] mother gave you %q4 and your father gave you[0xFC] a very unusual staff, then you were sent you on your way to[0xFC] the Imperial City and the celebration.[0xFC] [0xFC] After many days of travel, you approached the capital of the[0xFC] realm, the Imperial City. You noticed a small band of[0xFC] travelers only a short distance in front of you. As you[0xFC] joined them, you were attacked by brigands who had[0xFC] been lying in wait in the woods along the road. One of the[0xFC] brigands raised his short sword to strike you. In a natural[0xFC] reflex, you tried to deflect the blow with the staff your[0xFC] father gave you. As the sword struck the staff, a great bolt[0xFC] of lightning erupted from it and both weapons shattered. The[0xFC] brigands and the travelers all stopped and stared at you.[0xFC] As the thunder subsided, the brigands ran back into the[0xFC] woods. You were mobbed by the travelers who thanked you[0xFC] profusely for saving them, members of the Imperial Family[0xFC] who had been visiting in the country and were returning to[0xFC] the Imperial City for the celebrations. They insisted that[0xFC] you come with them to the palace and have an audience with the[0xFC] Emperor.[0xFC] [0xFC] The Emperor was very impressed by your bravery and grateful[0xFC] to you for saving his family. He formally invited you to[0xFC] the celebration and presented you with %q5.[0xFC] The festival continued for weeks, and during that time,[0xFC] the Emperor often called on you for informal talks. When[0xFC] you were not in audience, you usually spent your time[0xFC] %q3.[0xFC] One night you were called to the Emperor's presence in a[0xFC] manner such that you knew the business was serious. He[0xFC] met you in his study and there told you he had a favor[0xFC] to ask.[0xFC]"]
	},
	{
		id: 4119,
		lines: [
			"Your parents complimented one another, both as sorcerors as[0xFC] well as educators. Your mother was most attentive in teaching[0xFC] you the finer points of %q1,[0xFC] but your father would use more dramatic methods. As you grew[0xFC] in your talents and your mother taught you the spells, your[0xFC] father would show you how you must attract and draw upon the[0xFC] magicka of the universe to have the power to cast those spells.[0xFC] He explained that you, like them, were not able to regenerate[0xFC] magicka within your own body. It was commonplace for him to[0xFC] walk in the room and cast a lightning spell at you. Frightful[0xFC] though it was, you would feel exhilaration upon drawing upon[0xFC] the magicka.[0xFC] [0xFC] As you grew, it was apparent that you had unusually strong[0xFC] magical powers. Soon you were able to %q1a[0xFC] yourself. You remember your parents talking about an evil[0xFC] Battlemage, Jagar Tharn, how it was known in their circle[0xFC] that he had usurped the power of the land away from its[0xFC] rightful ruler. No one dared to move against him.[0xFC] %q2.[0xFC] One day in your twentieth year, a courier arrived at your[0xFC] house with the news that a powerful hero had killed[0xFC] Jagar Tharn and restored the rightful Emperor to the throne.[0xFC] Even your gruff father nearly wept with joy at the news.[0xFC] [0xFC] The courier also brought the news that there would be a great[0xFC] celebration in Imperial City and that all the people who had[0xFC] worked secretly to depose Tharn were invited. Once the[0xFC] courier left, you asked your parents if you could go to the[0xFC] celebration. Your mother and father looked concerned and[0xFC] explained that there was not enough gold for all three of you[0xFC] to make the trip. Downcast, you tried to hide your[0xFC] disappointment. Your father, however, turned to you and said[0xFC] that it was time you made your own way in the world. He gave[0xFC] you %q4 and a very unusual staff[0xFC] and sent you on your way to the Imperial City and the[0xFC] celebration.[0xFC] [0xFC] After many days of travel, you approached the capital of the[0xFC] realm -- Imperial City. You noticed a small band of travelers[0xFC] a short distance in front of you. As you were about to hail[0xFC] them, they were attacked by brigands who had been lying in[0xFC] wait in the woods that lined the road. As you rushed to help,[0xFC] one of the brigands, obviously a Mage, raised his staff and[0xFC] cast a spell at you. Your ears roared as the flame bolt hit[0xFC] you, but you absorbed the magicka and let fly a very powerful[0xFC] shock spell. When the bolt struck the brigand mage, he erupted[0xFC] into a column of flames and was reduced to a pile of ashes.[0xFC] The brigands and the travelers all stopped and stared, and the[0xFC] brigands ran back into the woods. The travelers thanked you[0xFC] and introduced themselves as members of the Imperial Family[0xFC] returning to Imperial City for the celebrations. They insisted[0xFC] that you come with them to the palace and have an audience[0xFC] with the Emperor.[0xFC] [0xFC] The Emperor was very impressed by your bravery and knew[0xFC] your family as loyal supporters of the Empire. He presented[0xFC] you with %q5. The celebrations continued for[0xFC] weeks, and the Emperor often called on you for informal talks.[0xFC] When you were not in audience, you usually spent your time[0xFC] %q3.[0xFC] One night you were called to the Emperor's presence in a[0xFC] manner such that you knew the business was serious. He[0xFC] met you in his study and there told you he had a favor[0xFC] to ask."]
	},
	{
		id: 4120,
		lines: [
			"Your father was the healer for a very small village[0xFC] deep in the %hpw of %hpn. You[0xFC] have few memories of your mother, a beautiful, kind[0xFC] woman who taught you magic. You always will remember her[0xFC] entertaining you for hours with tricks. Your favorite was[0xFC] her %q1.[0xFC] The plague that took her was too strong for her or your[0xFC] father to fight. It was her wish that you be trained in[0xFC] the School of Restoration, and there you showed promise[0xFC] exceeding your father.[0xFC] [0xFC] As you grew, it was apparent that you had unusually strong[0xFC] magical powers. Soon you were able to %q1a[0xFC] yourself. You remember your father talking about an evil[0xFC] Battlemage, Jagar Tharn, how it was known in his circle[0xFC] that he had usurped the power of the land away from its[0xFC] rightful ruler. No one dared to move against him.[0xFC] %q2.[0xFC] One day in your twentieth year, a courier arrived at your[0xFC] house with the news that a powerful hero had killed[0xFC] Jagar Tharn and restored the rightful Emperor to the throne.[0xFC] Your tender-hearted father openly wept with joy at the news.[0xFC] [0xFC] The courier also brought the news that there would be a great[0xFC] celebration in Imperial City and that all the people who had[0xFC] worked secretly to depose Tharn were invited. Once the[0xFC] courier left, you asked your father if you could go to the[0xFC] celebration. Your father turned to you and said[0xFC] that it was time you made your own way in the world. He gave[0xFC] you %q4 and a very unusual staff[0xFC] and sent you on your way to the Imperial City and the[0xFC] celebration.[0xFC] [0xFC] After many days of travel, you approached the capital of the[0xFC] realm, the Imperial City. You noticed a small band of[0xFC] travelers only a short distance in front of you. As you were[0xFC] about to hail them they were attacked by brigands who had[0xFC] been lying in wait in the woods along the road. You rushed[0xFC] to help the other travelers. As you approached one of the[0xFC] brigands raised his short sword to strike you. In a natural[0xFC] reflex, you tried to deflect the blow with the staff your[0xFC] father gave you. As the sword struck the staff, a great bolt[0xFC] of lightning erupted from it and both weapons shattered. The[0xFC] brigands and the travelers all stopped and stared at you.[0xFC] As the thunder subsided, the brigands ran back into the[0xFC] woods. You were mobbed by the travelers who thanked you[0xFC] profusely for saving them, members of the Imperial Family[0xFC] who had been visiting in the country and were returning to[0xFC] the Imperial City for the celebrations. They insisted that[0xFC] you come with them to the palace and have an audience with[0xFC] the Emperor.[0xFC] [0xFC] The Emperor was very impressed by your bravery and knew[0xFC] your family as loyal supporters of the Empire. He presented[0xFC] you with %q5. The celebrations continued for weeks,[0xFC] and the Emperor often called on you for informal talks.[0xFC] When you were not in audience, you usually spent your time[0xFC] %q2a.[0xFC] One night you were called to the Emperor's presence in a[0xFC] manner such that you knew the business was serious. He[0xFC] met you in his study and there told you he had a favor[0xFC] to ask.[0xFC]"]
	},
	{
		id: 4121,
		lines: [
			"Though your childhood was similar to that of other[0xFC] %ra children you knew, at age 10, your[0xFC] father thought you ready to begin learning thieving[0xFC] skills. You spent many happy hours in his work shop,[0xFC] practicing initially %q1.[0xFC] Your skills developed slowly at first, and your father[0xFC] seemed to have to suppress his impatience at times.[0xFC] [0xFC] You applied yourself to your training more diligently[0xFC] than ever. It gradually became apparent to both you[0xFC] and your father that while you certainly would[0xFC] become a competent thief given time, you would never[0xFC] achieve his level of mastery.[0xFC] [0xFC] While you were studying %q3 techniques[0xFC] with your father, your mother began to teach you, in[0xFC] her quiet way, the use of magicka. It did not[0xFC] take long to determine that you had some definite[0xFC] potential. You discovered that you could use both[0xFC] sciences together, using the discipline from[0xFC] your %q3 and %q4[0xFC] training to accelerate your development of[0xFC] %q2 spells.[0xFC] [0xFC] Your mother introduced you to some unusual, non-human[0xFC] creatures, mostly %q5.[0xFC] You learned not only not to fear them, but also some of[0xFC] their language. One in particular, a female named %fn[0xFC] took a liking to you and trained you further in spells[0xFC] of %q6 than your mother ever could.[0xFC] [0xFC] One night, your father brought you into his shop, a[0xFC] serious expression on his face. He explained that an[0xFC] agent of the Emperor himself had approached the[0xFC] heads of the local Thieves and Mages Guild. He had told[0xFC] them that the Emperor had heard rumors of a[0xFC] %q8 named %bn who was supposed to[0xFC] have been allied with the imperial traitor Jagar Tharn.[0xFC] The Emperor dared not act against %bn[0xFC] without proper evidence to verify his illegal actions.[0xFC] Your father suggested that, as a pair, you two were just[0xFC] right for the assignment. Excited about the chance[0xFC] to impress your father as much as the Emperor's reward,[0xFC] you agreed at once.[0xFC] [0xFC] Some nights later, you and your father broke into[0xFC] %bn's study and began searching for[0xFC] evidence of conspiracy. A noise out in the hall[0xFC] nearly caused you to drop the stack of papers you were[0xFC] carrying. Quickly, as agreed before, you moved off to the[0xFC] exit route carrying %bn's materials[0xFC] while your father headed off to provide a distraction. He[0xFC] gave you a wink and disappeared. You left the castle, and[0xFC] followed the escape route to your home.[0xFC] [0xFC] There, a portly mage and an Imperial courier examined the[0xFC] materials, and from their reactions, the evidence damned[0xFC] %bn. You sat with your mother and[0xFC] fretfully awaited your father's return. The hours turned[0xFC] to days, and you numbly realized that you would never see[0xFC] your father again. The receipt of the Emperor's reward[0xFC] seemed small consolation for your loss.[0xFC] [0xFC] Some weeks later, a letter bearing the Imperial seal[0xFC] arrived at your house. You were requested in the Imperial[0xFC] City at once.[0xFC]"]
	},
	{
		id: 4122,
		lines: [
			"Your parents travelled with a carnival throughout your youth,[0xFC] so you were exposed to the best and worst of Tamriel. From your[0xFC] mother you learned how to %q1.[0xFC] From your father you learned many things -- how to[0xFC] %q2, to %q3,[0xFC] and the rudiments of %q4.[0xFC] All could be used for defense as well as entertainment.[0xFC] [0xFC] The years between your tenth and twentieth birthdays are among[0xFC] the worst Tamriel has ever suffered. The carnival was not such[0xFC] a happy place, and movement within the land was severely[0xFC] restricted. Agents of the Emperor would search the countryside[0xFC] for enemies of the Empire and would question all quite rudely.[0xFC] You always hoped that such a refugee would make his way to the[0xFC] carnival, and then one day, one did. When the bedraggled young[0xFC] man was hidden away, you had your opportunity to have fun with[0xFC] the Imperial agents. Gleefully, you convinced half of the agents[0xFC] that you were their commanding officer in disguise and sent[0xFC] them after the other agents, insisting they were double-[0xFC] agents. It turned out to be your last prank. You were[0xFC] shortly after jailed as an enemy of the Emperor.[0xFC] [0xFC] When the true Emperor took his throne back from the usurper[0xFC] Jagar Tharn, all political prisoners, including you, were[0xFC] released from the dungeons. You and only you were bathed,[0xFC] dressed in fine clothing, and presented to the Emperor[0xFC] himself. Emperor Uriel told you that the young man whose[0xFC] life you saved at the carnival was his own son, the prince[0xFC] %imp. The Emperor congratulated you on your[0xFC] ability to charm, confuse, and befuddle and gave you[0xFC] %q6 as a token of his appreciation.[0xFC] He also asked you for a special favor.[0xFC]"]
	},
	{
		id: 4123,
		lines: [
			"You were born to a peasant family in a tiny village in[0xFC] the %hpw of %hpn. Your parents and older[0xFC] brothers were hard workers, proud of their strength and[0xFC] endurance. The only thing big about you was your appetite.[0xFC] You were of an inquisitive nature. No cupboard, closet, or[0xFC] drawer was safe from your prying eyes and fingers. You[0xFC] left no traces, but still your father and brothers beat[0xFC] you when they caught you. By the time you were eleven,[0xFC] they no longer caught you. Your mother taught you[0xFC] %q1 and %q2, but you had no other[0xFC] schooling and wanted none.[0xFC] [0xFC] Once, you climbed the wall of the local %q3[0xFC] and spied on the young %q3a at practice. When[0xFC] their equipment was left lying about you took it for your[0xFC] own. In this way, you acquired a %q3b.[0xFC] You also adopted a jacket shed by its owner and wore it[0xFC] proudly about the village.[0xFC] [0xFC] One day, you saw some village boys hurling stones and[0xFC] insults at an old woman named %fn.[0xFC] Moved by an impulse you did not understand, you flung[0xFC] rocks back at the boys. They laughed, but as you drew[0xFC] near, they turned and ran away. You went back to[0xFC] %fn and offered to see her to her door.[0xFC] [0xFC] \"Come inside,\" %fn said. \"I have[0xFC] something for you.\" Her cottage was just one room, with[0xFC] cats and kittens everywhere. \"Sit down,\" she said,[0xFC] removing two cats from a stool. \"I'm going to teach you[0xFC] about %q4.\"[0xFC] [0xFC] \"Why?\" you asked.[0xFC] [0xFC] \"The cats don't need training in %q4,\"[0xFC] %fn said. \"You do. Or will. No matter.\"[0xFC] [0xFC] Thus your training began. Her hands could no longer[0xFC] perform, but her mind was still efficacious. You and[0xFC] %fn became friends, as well as[0xFC] student and teacher.[0xFC] [0xFC] On your sixteenth birthday, she told you that you must[0xFC] leave. Your little village was too small for someone of[0xFC] your talents.[0xFC] [0xFC] \"What of you?\" you asked.[0xFC] [0xFC] \"I also must move on. Perhaps some day you will visit me[0xFC] in the Iliac Bay? I would like that. Until then, I have[0xFC] my memories and my cats.\"[0xFC] [0xFC] On your way to the Imperial City, you stopped in an inn[0xFC] and heard that the Emperor was to pass the next day.[0xFC] Instead of sneaking into a room, you spent the night in[0xFC] a tree beside the road. You wanted to see the Emperor,[0xFC] later there would always be chances to[0xFC] %q12.[0xFC] [0xFC] The procession was very splendid indeed, but a nearby[0xFC] rustle drew your attention. A black clad man was[0xFC] crouching on a limb ten feet beneath you. You gasped[0xFC] before you could stop yourself, and he twisted around,[0xFC] bringing his bow to bear on you. With no time to draw a[0xFC] weapon, you flung yourself at him, and together you[0xFC] crashed down on the heads below, just as the Emperor's[0xFC] carriage drew abreast.[0xFC] [0xFC] Hands seized you roughly. You felt dizzy and a trail[0xFC] of fire burned along your left arm. Poison! Then a white[0xFC] robed elf muttered an incantation over you. Your arm[0xFC] cooled and your head cleared. The Emperor himself thanked[0xFC] you and gave you %q5.[0xFC] [0xFC] The local folk treated you to drinks and food and[0xFC] unaccustomed praise. Later you slipped away and found[0xFC] that in addition to %q5,[0xFC] the Emperor had handed you a note inviting you to share an[0xFC] audience with him at the Imperial Palace. You set out[0xFC] immediately.[0xFC]"]
	},
	{
		id: 4124,
		lines: [
			"You grew up on the streets, an urchin in your little village[0xFC] in the %hpw of %hpn. You do not know when you[0xFC] first learned to %q1 or to %q2 or when[0xFC] %q3.[0xFC] You only know that your skills and your philosophy are what[0xFC] kept you alive and sane during the dark years when Jagar Tharn[0xFC] usurped the throne of the rightful emperor. Tharn's agents[0xFC] even searched out your little village, looking for political[0xFC] dissendents and other undesirables. Those they found[0xFC] disappeared forever.[0xFC] [0xFC] For the benefit of all, an uneasy alliance formed between you[0xFC] and all the other villagers who were in questionable lines of[0xFC] work. One night, you witnessed a ragged boy being pursued by[0xFC] a dozen blackclad agents of Jagar Tharn. You took a shortcut[0xFC] through the alleys to meet the boy, and it took little effort[0xFC] to convince him to run with you. The two of you stole into a[0xFC] concealed cellar and waited for the agents to pass. The boy[0xFC] was obviously not from the village, and when you asked him[0xFC] his name, he told you, hesistantly, \"%imp.\"[0xFC] You laughed at his royal sounding name, and he told you very[0xFC] seriously that he was the son of the rightful ruler of Tamriel[0xFC] and that an imposter was on the throne. At the time, you[0xFC] humored his boyish imagination. Now, of course, you know that[0xFC] he was telling the truth. You told him the best way out of the[0xFC] village, avoiding the areas frequented by the blackclad ones,[0xFC] and he told you that when he saw his father again, you would[0xFC] be properly thanked for that act of kindness.[0xFC] [0xFC] Some years later, your luck ran out and you were imprisoned[0xFC] on the charge of %q4.[0xFC] You had been in jail for several days when you received a[0xFC] visitor in the full regalia of an Imperial courier. He told[0xFC] you that in reward for your service to Prince %imp,[0xFC] you were granted full pardon and %q5[0xFC] You were also given a simple, unpretentious letter inviting[0xFC] you the Imperial City for an audience with the Emperor. You[0xFC] had your eyes set on a bigger fishpond anyhow, so you went.[0xFC]"]
	},
	{
		id: 4125,
		lines: [
			"You grew up on a farm and became quite agile from[0xFC] continually rounding up wandering sheep. One Merchants[0xFC] Festival, while visiting the village with your family, you[0xFC] were intrigued with a group of wandering acrobats and decided[0xFC] that you wanted to become an acrobat yourself. At home you[0xFC] started practicing even though your parents complained that[0xFC] you were neglecting your duties. Finally, when you were just[0xFC] old enough to be called an adult, you ran away from home.[0xFC] [0xFC] You never did find that carnival troupe. You wandered to a small[0xFC] village deep in the %hpw and learned to %q1[0xFC] and to %q2 and[0xFC] %q3.[0xFC] You know that your skills and your philosophy are what[0xFC] kept you alive and sane during the dark years when Jagar Tharn[0xFC] usurped the throne of the rightful emperor. Tharn's agents[0xFC] even searched out that little village, looking for political[0xFC] dissendents and other undesirables. Those they found[0xFC] disappeared forever.[0xFC] [0xFC] For the benefit of all, an uneasy alliance formed between you[0xFC] and all the other villagers who were in questionable lines of[0xFC] work. One night, you witnessed a ragged boy being pursued by[0xFC] a dozen blackclad agents of Jagar Tharn. You took a shortcut[0xFC] through the alleys to meet the boy, and it took little effort[0xFC] to convince him to run with you. The two of you stole into a[0xFC] concealed cellar and waited for the agents to pass. The boy[0xFC] was obviously not from the village, and when you asked him[0xFC] his name, he told you, hesistantly, \"%imp.\"[0xFC] You laughed at his royal sounding name, and he told you very[0xFC] seriously that he was the son of the rightful ruler of Tamriel[0xFC] and that an imposter was on the throne. At the time, you[0xFC] humored his boyish imagination. Now, of course, you know that[0xFC] he was telling the truth. You told him the best way out of the[0xFC] village, avoiding the areas frequented by the blackclad ones,[0xFC] and he told you that when he saw his father again, you would[0xFC] be properly thanked for that act of kindness.[0xFC] [0xFC] Some years later, your luck ran out and you were imprisoned[0xFC] on the charge of %q4.[0xFC] You had been in jail for several days when you received a[0xFC] visitor in the full regalia of an Imperial courier. He told[0xFC] you that in reward for your service to Prince %imp,[0xFC] you were granted full pardon and %q5[0xFC] You were also given a simple, unpretentious letter inviting[0xFC] you the Imperial City for an audience with the Emperor. You[0xFC] had your eyes set on a bigger fishpond anyhow, so you went.[0xFC]"]
	},
	{
		id: 4126,
		lines: [
			"You might not ever have been a thief, for you had been[0xFC] raised and trained from an early age to be %q1.[0xFC] Until the fateful day when the caravan your master,[0xFC] %mn, and you were travelling in[0xFC] was waylaid by a orc tribe, you were content that your place in[0xFC] life was set. Suddenly, everything you believed in was proved[0xFC] false. The treacherous %q1a you had put[0xFC] your faith in sacrificed you in order that he might escape the[0xFC] orcs. Though you managed to survive in your new role as a[0xFC] captive of the orcs, you never again would trust[0xFC] %q1.[0xFC] [0xFC] You had grown up among the superstitious people in the backwater[0xFC] %hpw of %hpn, and had believed that orcs[0xFC] were demons or daedra, but you found the tribe to be suprisingly[0xFC] civil. They needed a %ra to interpret the books they[0xFC] had found about the ancient orcish capital of Orsinium. As you[0xFC] stayed with them and learned their language, you developed a[0xFC] respect for their primitive but noble ambitions. Nevertheless,[0xFC] you knew that you needed the society of other %ra[0xFC] people, so when the opportunity rose, you escaped.[0xFC] [0xFC] Times were difficult all over %hpn, but you found[0xFC] that the %q2 and %q3 skills you had[0xFC] developed in the orc camp allowed you to be a fairly successful[0xFC] thief. One night, while ransacking a nobleman's townhouse, you[0xFC] came across correspondence between him and the former Imperial[0xFC] Battlemage Jagar Tharn. You sold these to a contact you had in[0xFC] town for more gold than you anticipated they would be worth.[0xFC] You did not realize their full value until you received a[0xFC] visit from Prince %imp in your room at the tavern.[0xFC] [0xFC] He told you that Jagar Tharn had been magically impersonating[0xFC] his father for the past ten years, and only recently had the[0xFC] true Emperor been restored. Loyal subjects like you were rare[0xFC] and the Emperor wished to thank you personally. You travelled[0xFC] with Prince %imp to the Imperial City and[0xFC] there you were presented to the Emperor. He was indeed very[0xFC] grateful for your service and gave you %q4.[0xFC] He also asked you for a favor.[0xFC]"]
	},
	{
		id: 4127,
		lines: [
			"You grew up on the streets, an urchin in your little village[0xFC] in the %hpw of %hpn. You do not know when you[0xFC] first learned to %q1 or to %q2 or when[0xFC] %q3.[0xFC] You only know that your skills and your philosophy are what[0xFC] kept you alive and sane during the dark years when Jagar Tharn[0xFC] usurped the throne of the rightful emperor. Tharn's agents[0xFC] even searched out your little village, looking for political[0xFC] dissendents and other undesirables. Those they found[0xFC] disappeared forever.[0xFC] [0xFC] For the benefit of all, an uneasy alliance formed between you[0xFC] and all the other villagers who were in questionable lines of[0xFC] work. One night, you witnessed a ragged boy being pursued by[0xFC] a dozen blackclad agents of Jagar Tharn. You took a shortcut[0xFC] through the alleys to meet the boy, and it took little effort[0xFC] to convince him to run with you. The two of you stole into a[0xFC] concealed cellar and waited for the agents to pass. The boy[0xFC] was obviously not from the village, and when you asked him[0xFC] his name, he told you, hesistantly, \"%imp.\"[0xFC] You laughed at his royal sounding name, and he told you very[0xFC] seriously that he was the son of the rightful ruler of Tamriel[0xFC] and that an imposter was on the throne. At the time, you[0xFC] humored his boyish imagination. Now, of course, you know that[0xFC] he was telling the truth. You told him the best way out of the[0xFC] village, avoiding the areas frequented by the blackclad ones,[0xFC] and he told you that when he saw his father again, you would[0xFC] be properly thanked for that act of kindness.[0xFC] [0xFC] Some years later, your luck ran out and you were imprisoned[0xFC] on the charge of %q4.[0xFC] You had been in jail for several days when you received a[0xFC] visitor in the full regalia of an Imperial courier. He told[0xFC] you that in reward for your service to Prince %imp,[0xFC] you were granted full pardon and %q5[0xFC] You were also given a simple, unpretentious letter inviting[0xFC] you the Imperial City for an audience with the Emperor. You[0xFC] had your eyes set on a bigger fishpond anyhow, so you went.[0xFC]"]
	},
	{
		id: 4128,
		lines: [
			"You have vague memories of living in a city with a young[0xFC] woman and man, but for most of your childhood you lived in[0xFC] a small home on the edge of a densely forested area. There[0xFC] the elderly man that you called \"grandfather\" performed his[0xFC] duties as the unofficial warden of the forest, and also[0xFC] sheriff of the nearby area. Your supposed grandfather was[0xFC] really much too old for that to be his true relationship to[0xFC] you, but he did care for you with a tenderness that was at[0xFC] odds with his otherwise gruff exterior. Your early years are[0xFC] recalled as an endless stream of days spent out of doors,[0xFC] wearing only loose clothing or the simple robe that your[0xFC] grandfather favored. He taught you about %q1[0xFC] and how to %q3 and %q9. And[0xFC] when there were no warding duties for him to perform, there[0xFC] was always weapons practice; your grandfather had mastered[0xFC] an incredible variety of weaponry, and insisted that you[0xFC] become familiar with each one. He was often required to deal[0xFC] with some forest predator that had been causing local[0xFC] problems, or with bands of brigands passing through the area,[0xFC] and you were proud whenever you were able to help.[0xFC] [0xFC] It was just such an outlaw band that caused the combat wound[0xFC] that was ultimately fatal to your grandfather. You and he were[0xFC] able to return to his home, and at first he tried to act as if[0xFC] this were just another scratch, to be allowed to naturally[0xFC] heal. But finally even he faced the inevitability of his age[0xFC] and accumulated injuries, and he gave you careful instructions[0xFC] concerning the disposition of his possessions. He also told[0xFC] you to go to a temple being run by an old friend of his, to[0xFC] continue your growth and sustain your %q1 training[0xFC] and allow you to continue %q3a.[0xFC] A few days later, your grandfather died with the quiet dignity[0xFC] that he had always displayed. You were distraught at the loss[0xFC] of the only friend and family that you had ever had, but you[0xFC] packed your few belongings and travelled to the temple,[0xFC] honoring your grandfather's request.[0xFC] [0xFC] %fn, the chief priestess of the temple[0xFC] was an older woman, but she was much younger than your[0xFC] grandfather had been. You shared your sorrow with her for[0xFC] your recent loss. Then you agreed with her that, besides[0xFC] general training in %q1 and similar[0xFC] studies, you would ignore the set of courses dealing with[0xFC] armor and shields. To pay for your training, you used your[0xFC] forestry skills to provide a regular supply of fresh meat[0xFC] for the temple's larder.[0xFC] [0xFC] Some years later, on a day that seemed like any other, you had[0xFC] just returned from collecting game for the food supply when the[0xFC] chief priestess came to see you. She told you that she received[0xFC] a message that an Imperial coach was ambushed at a location[0xFC] close to the temple, and that important people and material[0xFC] needed to be recovered. You allowed yourself an hour to perform[0xFC] your grandfather's favorite meditation exercises, and left on[0xFC] this new mission both refreshed and with some insight[0xFC] concerning where to search for the robbers. Your meditations[0xFC] bore fruit at dusk, as you stealthily approached an encampment[0xFC] approximately where you had expected it to be. Throughout[0xFC] the night you gradually stalked and subdued the camp guard, but[0xFC] then you had to kill all of the other outlaws because they[0xFC] resisted capture. You were abashed to return to the temple[0xFC] shortly after breakfast with only one captive, a maidservant,[0xFC] and a mundane chest of government documents.[0xFC] [0xFC] However, when the Imperial representative arrived to claim[0xFC] your results, she sought you out to congratulate you on a most[0xFC] successful mission. Although you never knew for certain whether[0xFC] the maidservant or some of the documents somehow had importance,[0xFC] you were not surprised when you later received a most[0xFC] interesting letter from the Imperial Palace, simply inviting[0xFC] you to the palace on urgent business. You left the temple[0xFC] immediately for the Imperial City.[0xFC]"]
	},
	{
		id: 4129,
		lines: [
			"When you were three or four, you became lost from your[0xFC] parents for several days. You do not remember much about[0xFC] that time lost in the %hpw except that a group[0xFC] of strange creatures rescued you from a band of[0xFC] %q5. When you finally made it back[0xFC] to your parents' house, you described your rescuers,[0xFC] and were told they were %q6.[0xFC] Even today, you remember some words of their language.[0xFC] [0xFC] When you were of age, you joined the local militia to see[0xFC] more of the world. You excelled at the training the[0xFC] militia gave you in archery. There seemed to be no[0xFC] limit to the distance you could shoot an arrow, and[0xFC] you were often used by your masters as the model for[0xFC] less adept students. In a few years time, you became[0xFC] a master yourself.[0xFC] [0xFC] The shot that changed your fortune, however, was a bad[0xFC] shot. You missed the tree you were aiming for and struck[0xFC] the branches of a tree across the road, frightening a[0xFC] concealed assassin who was waiting for the caravan of[0xFC] Prince %imp, son of the Emperor. The[0xFC] assassin was brought to the authorities, and the head[0xFC] of the militia, desirous of imperial reward, told the[0xFC] story of your misaimed arrow as if it were an expert[0xFC] shot from a loyal subject. You soon found yourself[0xFC] invited to court, as a member of the Imperial Guard.[0xFC] [0xFC] In the court of the Emperor, you continued to practice[0xFC] your archery and, in addition, learned many new techniques[0xFC] from the daily %q1 practice. To stay motivated,[0xFC] %q2[0xFC] and that gave you strength for the endless hours of work[0xFC] and the weariness of weapon drills.[0xFC] [0xFC] You were overjoyed when you received word that the Emperor[0xFC] had a quest for you, one that required the utmost tact[0xFC] and unswerving loyalty. When you came to the palace that[0xFC] night, you were surprised to find that the Emperor was[0xFC] not surrounded by his usual large retinue, merely his[0xFC] chief advisor, the Imperial Battlemage Ocato. There you[0xFC] were told of the affair of Daggerfall.[0xFC]"]
	},
	{
		id: 4130,
		lines: [
			"You spent most of your childhood roaming the %hpw with[0xFC] your mother, and she is the one who piqued your fascination[0xFC] with %q9 through her tales and[0xFC] legends about them. She even knew some words of their[0xFC] language which she taught to you. You vowed to find one,[0xFC] and so you applied yourself diligently to your mother's[0xFC] lessons about the ways of the %hpw and its[0xFC] many inhabitants. Later, your merchant father took you to[0xFC] his offices and familiarized you with his work, but no[0xFC] interest in this ever really developed. You did benefit[0xFC] from the stable home that your parents provided, and your[0xFC] father lovingly provided the gold pieces that were[0xFC] required to broaden your %q1[0xFC] training. Your greatest joy was always to head into the[0xFC] %hpw, be it for a few hours or a week, packing only some food[0xFC] and your %q1a. You wandered the %hpw[0xFC] paths and amusing yourself by pursuing your childhood fantasy[0xFC] to detect and track one of those remarkable creatures.[0xFC] [0xFC] It was around the time that you had completed almost all of[0xFC] your %q1 courses that you first noticed a set of[0xFC] tracks of a type that you had never seen previously. They[0xFC] seemed both to begin and end out of nowhere. About two weeks[0xFC] later, you spotted some bent branches that led you to a[0xFC] different set of unknown prints that began and ended as the[0xFC] previous set had. The next morning you reviewed your mental[0xFC] picture of the patterns of tracks, and quartered in towards[0xFC] their apparent source.[0xFC] [0xFC] Suddenly a nightmare of hair, teeth and claws leapt out[0xFC] of the bushes about ten feet in front of you. You scrambled[0xFC] up a tree, and heard the wild man right behind you, grunting[0xFC] with glee. As you climbed higher, you heard a branch break[0xFC] under you and turned to see the man land hard on the ground.[0xFC] Recognizing the opportunity, you leapt down beside him and[0xFC] %q1b.[0xFC] [0xFC] You investigated the bushes where he had come from, and[0xFC] discovered a cave where the cannibal had kept the bones of[0xFC] several less fortunate rangers. You also found a ragged young[0xFC] boy in chains, evidently the meal you interrupted. After[0xFC] you freed him, he told you his name was %imp,[0xFC] and he was a son of the Emperor Uriel Septim. Something[0xFC] about him made you believe him, even when he told you that[0xFC] his father's counselor Jagar Tharn has usurped his throne,[0xFC] and forced %imp and his brothers into hiding.[0xFC] [0xFC] You gave the lad the gold in your purse and wished him good[0xFC] luck, and you never told anyone about the incident with the[0xFC] cannibal in the %hpw. Some months later,[0xFC] however, your family was mystified when you received a[0xFC] package from the Emperor himself, inviting you to the[0xFC] Imperial City so you might receive your reward.[0xFC]"]
	},
	{
		id: 4131,
		lines: [
			"When you were very young, your parents joined a group that[0xFC] was moving to the outskirts of the civilized area of[0xFC] %hpn to start a new village in the %hpw.[0xFC] Your childhood was spent helping to do the mundane and[0xFC] grueling work required by this sort of venture. The[0xFC] physical hardiness inherited from your parents helped[0xFC] considerably in this regard, and you developed physically[0xFC] at an early age. You also showed some skill at[0xFC] %q1, and spent time with an elder of[0xFC] the village who had you practice %q3.[0xFC] [0xFC] Your prowess grew as your warrior skills developed,[0xFC] supported by a ready grasp of %q1.[0xFC] Unfortunately, you eventually found that you had reached[0xFC] the limit of what you could learn in the %hpw,[0xFC] so one day you reluctantly approached your parents. After[0xFC] much discussion and resistance, they grudgingly supported[0xFC] your request to travel to a fighting school to continue[0xFC] your training, cautioning you that you would have to[0xFC] support yourself during this time. Although saddened[0xFC] to separate from your parents and siblings, you were[0xFC] excited at the prospect of seeing some of the fabled[0xFC] civilization of Tamriel.[0xFC] [0xFC] While at the fighting school, you worked after hours at[0xFC] various odd jobs. These included guard assignments and[0xFC] bouncer duty at a local inn, both of which additionally[0xFC] provided opportunities for you to polish your skills.[0xFC] You also became friends with an classmate named[0xFC] %fn. When %fn completed[0xFC] the training, you vowed to make regular visits to the[0xFC] Imperial City. However, your first trip to the Imperial[0xFC] City also included your first exposure to the distaste[0xFC] that some of the inhabitants and members of the court[0xFC] express toward someone of your physical presence and[0xFC] comparatively coarse manners. Your only compensation[0xFC] for this was the ready friendship shown by many of the[0xFC] Imperial Guard.[0xFC] [0xFC] On your third visit to the Imperial City, you were[0xFC] looking for %fn when one of[0xFC] the Guard told you that a small group of mercenaries,[0xFC] including %fn, had been attacked[0xFC] and captured by suspected supporters of the former[0xFC] Imperial usurper, Jagar Tharn. Without waiting for[0xFC] reinforcements, you set off immediately. When you[0xFC] finally found the rebel encampment you hesitated because[0xFC] of the size of the outlaw band. You did not procrastinate[0xFC] for long. You used the natural cover of the woodland to[0xFC] your advantage and, one by one, you stalked your target[0xFC] and %q1a. Luckily, just[0xFC] when even you were beginning to tire, some of the[0xFC] captives, led by %fn, escaped their[0xFC] bonds and helped to finish off the remainder of the band.[0xFC] [0xFC] Your group made its way back to the Imperial City, where[0xFC] you also enjoyed the congratulations of many of the Guard.[0xFC] And then shortly thereafter, you received a message from[0xFC] the Emperor himself.[0xFC]"]
	},
	{
		id: 4132,
		lines: [
			"Your earliest memories are of being hungry, cold and[0xFC] alone. You never were able to find out who your parents[0xFC] were, or how you came to be left to survive by yourself[0xFC] in the city streets. You can recall only a few mental[0xFC] scenes from your childhood. One of the more vivid ones[0xFC] were finding %q10 on a corpse in[0xFC] an alley. Much of your childhood was a daily struggle[0xFC] simply to stay alive, and retain your few possessions,[0xFC] and you can remember distinctly the time when[0xFC] %q2.[0xFC] As you got older, only a few people were able to[0xFC] penetrate the shell that was forming around your[0xFC] friendlier inclinations. The most significant of them[0xFC] was %fn, who had just been accepted[0xFC] to the city guards. At first, %fn[0xFC] would bring you food and provide some weapons practice[0xFC] and advice for you, but eventually she sponsored your[0xFC] petition for acceptance to a novice warriors' school,[0xFC] and provided a portion of the gold required as payment.[0xFC] Then, after your training was complete, she was able to[0xFC] get you a job as a guard for one of the many merchants'[0xFC] caravans that criss-crossed Tamriel's roads and[0xFC] provinces.[0xFC] [0xFC] Over the next two years, you rented yourself to a[0xFC] succession of these caravans, learning much of Tamriel[0xFC] and its inhabitants. You also polished your[0xFC] %q1 skills with some actual fighting[0xFC] experiences in the rougher and more unsettled portions[0xFC] of the continent. You found it easy to transfer your[0xFC] early self-defensive inclinations to the caravan as a[0xFC] whole. Finally though, you decided to return to your[0xFC] home city and seek out your friend %fn.[0xFC] You discovered, however, that she had likewise[0xFC] progressed quickly, and had been invited to the Imperial[0xFC] City to join a troop of the Imperial Guards. The trip[0xFC] to the capital drained your funds, so you immediately[0xFC] took a job there, working evenings at maintaining order[0xFC] in one of the rowdier inns.[0xFC] [0xFC] You made friends with all the regulars in the inn, but[0xFC] your sympathy was won by a nervous, mute boy who kept[0xFC] the bar stocked. He seemed so frightened and alone that[0xFC] he reminded you of your own lonely childhood. When one[0xFC] of the drunken regulars stuck the boy, you leapt to his[0xFC] defense. The boy looked at you with such gratitude that[0xFC] your heart almost broke. Then, a few days later, he[0xFC] disappeared.[0xFC] [0xFC] Months later, while you were helping restock the cellar,[0xFC] you were called to the front door, and there was the boy[0xFC] again. This time he was dressed in Imperial robes and[0xFC] surrounded by escorts including %fn.[0xFC] The \"mute\" boy spoke in an unmistakably aristocratic[0xFC] voice, \"My name is Prince %imp, son of the[0xFC] true Emperor of Tamriel, Uriel Septim VII. When I was[0xFC] in hiding, fleeing from the wrath of the usurper Jagar[0xFC] Tharn, you befriended me and saved my life. Please[0xFC] accept the greatest gift the Emperor can bestow, his[0xFC] gratitude.\"[0xFC] [0xFC] He also presented you with a summons from the Emperor[0xFC] himself, who apparently had need of a champion such as[0xFC] you. Perhaps your luck was finally beginning to change.[0xFC]"]
	},
	{
		id: 4133,
		lines: [
			"Your earliest memories are of the blazing fire in the[0xFC] furnace and the smell of heated metal. Your father was a[0xFC] blacksmith of great renown. People from all over the[0xFC] province of %hpn would come seeking his[0xFC] services. As soon as you were able, you learned to help[0xFC] him in the smithy. He taught you how to repair bent metal[0xFC] and to keep a blade's edge sharp.[0xFC] [0xFC] When you were of age, you joined the local militia to see[0xFC] more of the world. You excelled at the training the[0xFC] militia gave you in %q1. Your knowledge[0xFC] of weapon repair made you invaluable to the underfunded[0xFC] militia. One day a visitor in full plate armor arrived at[0xFC] the barracks. Introductions were made through the[0xFC] Constable and thus you met Sir %mn. The[0xFC] knight escorted you outside and %q1a.[0xFC] Without a word, he brought up his mace from his belt and[0xFC] levelled a blow at your head. Startled, you barely[0xFC] deflected the blow. After several more blows which you[0xFC] managed to avoid, the knight smiled. That was your[0xFC] test. You became Sir %mn's squire[0xFC] and you moved to the Imperial City.[0xFC] [0xFC] In the court of the Emperor, you learned many[0xFC] techniques from the daily %q1 practice. To stay motivated,[0xFC] %q2[0xFC] and that gave you strength for the endless hours of work[0xFC] and the weariness of weapon drills.[0xFC] [0xFC] One evening you were reading an old manuscript by a[0xFC] great %q1 master, a shadow in the hall drew[0xFC] your attention. Suspecting some of your fellow squires of[0xFC] playing at practical jokes, you grabbed your wooden[0xFC] practice sword and eased into the hall. Sneaking up behind[0xFC] the shadow, you easily got close enough to push the sword[0xFC] into the shadow's back.[0xFC] [0xFC] Despite all your training, you could not help but stop,[0xFC] stunned, when the shadow hissed at you and turned, revealing[0xFC] itself to be a cloaked goblin, dagger in hand. With hardly[0xFC] time for a thought, your instincts took over and the[0xFC] wooden sword in your hand swung out and knocked[0xFC] the goblin cold. Still shaking, you called for the[0xFC] guard.[0xFC] [0xFC] In the morning you were summoned before the Emperor.[0xFC] Dressed in borrowed armor, not quite the right size you[0xFC] walked into the throne room, dwarfed by its size. Bowing[0xFC] before the Emperor you took the oath of knighthood and[0xFC] were received into the ranks of Heraldry. It was not two[0xFC] days from then that you received word that the Emperor[0xFC] had a quest for you, one that required the utmost tact[0xFC] and unswerving loyalty. When you came to the palace that[0xFC] night, you were surprised to find that the Emperor was[0xFC] not surrounded by his usual large retinue, merely his[0xFC] chief advisor, the Imperial Battlemage Ocato. There you[0xFC] were told of the affair of Daggerfall."]
	},
	{
		id: 4134,
		lines: [
			"Ria Silmane was a powerful enchantress, one of the Elders[0xFC] of the Imperial Council, and a worthy successor to the[0xFC] Imperial Battlemage when Jagar Tharn elected to retire.[0xFC] She was also a friend of yours, your first tutor in the[0xFC] Imperial City. When she disappeared, you were the first[0xFC] person to notice and begin an investigation. You must[0xFC] have been getting close, for you were ambushed by agents[0xFC] of the Emperor and thrown into a cell deep within the[0xFC] sewers, with no food or water. It was there that Ria[0xFC] Silmane found you.[0xFC] [0xFC] Ria appeared to you as a spectre, for she too had been[0xFC] betrayed by the man who now, with the ultimate gall,[0xFC] dared to impersonate the Emperor: Jagar Tharn, her former[0xFC] master. The true Emperor was imprisoned by Tharn's magic.[0xFC] Only you would be able to find the flaw in Jagar Tharn's[0xFC] spell, free the Emperor, and expose the traitorous[0xFC] Battlemage.[0xFC] [0xFC] With Ria's help, you escaped from your cell, and under her[0xFC] direction, you began the quest for the Staff of Chaos.[0xFC] Tharn had used the Staff to imprison the true Emperor and[0xFC] had then broken it, scattering it in secure locations[0xFC] throughout the Empire. Nearly ten years passed while Tharn[0xFC] consolidated his power and Ria's spectral form slowly[0xFC] dissolved, but at last you found all the pieces of the[0xFC] Staff of Chaos and combined them to form the key to the[0xFC] prison of the true Emperor. The final piece of the staff[0xFC] was a gem hidden in the Imperial Palace itself.[0xFC] [0xFC] Jagar Tharn had surrounded himself with a host of guards,[0xFC] human and otherwise. When you at last reached the gem, you[0xFC] discovered why they had fought so furiously. The gem not[0xFC] only freed the Emperor, but it destroyed Tharn, for the[0xFC] Imperial Battlemage had used his own lifeforce to empower[0xFC] the Staff.[0xFC] [0xFC] When the true Emperor once again assumed the throne, he[0xFC] considered himself greatly in your debt. You were often[0xFC] called upon to investigate evidence of Tharn's aborted[0xFC] master plan, and though you discovered little of great[0xFC] relevance, you were well rewarded. Still, you were not[0xFC] often at court. The Emperor almost considered you a rare[0xFC] and valued weapon, to be drawn only away from others'[0xFC] eyes.[0xFC] [0xFC] When the Emperor told you of the haunting of King[0xFC] Lysandus, your instinct told you that the Emperor was[0xFC] not telling you the entire story. Nevertheless, even[0xFC] if he did consider you a friend, the Emperor's word was[0xFC] law, and you boarded a ship that very night for[0xFC] Daggerfall.[0xFC]",
			""]
	},
	{id: 4150, lines: [
			"sending sparks of flame and ice flying around the yard"]},
	{id: 4151, lines: [
			"finding a wounded butterfly and send it flying again"]},
	{id: 4152, lines: [
			"playing hide and seek, though she always turned invisible"]},
	{id: 4153, lines: [
			"leaping from the roof and then falling, slowly, like a leaf"]},
	{id: 4154, lines: [
			"walking on the surface on a nearby lake like it were ground"]},
	{id: 4155, lines: [
			"casting a spell that made it impossible for you to speak"]},
	{id: 4156, lines: [
			"cast spells of destruction"]},
	{id: 4157, lines: [
			"perform healings and cures"]},
	{id: 4158, lines: [
			"vanish from human eyes"]},
	{id: 4159, lines: [
			"change your body's weight"]},
	{id: 4160, lines: [
			"walk on the water's surface"]},
	{id: 4161, lines: [
			"dispel sound from the air"]},
	{id: 4162, lines: [
			"He could ruin anyone economically who moved against him"]},
	{id: 4163, lines: [
			"You longed to be the one to gain the honor of deposing him"]},
	{id: 4164, lines: [
			"You marvelled at the knowledge Tharn must have accrued."]},
	{id: 4165, lines: [
			"If it weren't suicidal, you would have enjoyed working against him"]},
	{id: 4166, lines: [
			"You vowed to avenge Tharn's evil against the innocent villagers"]},
	{id: 4167, lines: [
			"a bag of 100 gold pieces"]},
	{id: 4168, lines: [
			"a marvelous book"]},
	{id: 4169, lines: [
			"a cuirass"]},
	{id: 4170, lines: [
			"some fine silk robes"]},
	{id: 4171, lines: [
			"a flask of holy water"]},
	{id: 4172, lines: [
			"200 gold pieces"]},
	{id: 4173, lines: [
			"an ebony dagger"]},
	{id: 4174, lines: [
			"a rare magical item"]},
	{id: 4175, lines: [
			"a fine red ruby"]},
	{id: 4176, lines: [
			"a silver staff"]},
	{id: 4177, lines: [
			"a flask of holy water"]},
	{id: 4179, lines: [
			"practicing spells of destruction with the new Imperial Battlemage"]},
	{id: 4180, lines: [
			"perfecting your curative spells with the priests of a local temple"]},
	{id: 4181, lines: [
			"studying and practicing your spells of the college of alteration"]},
	{id: 4182, lines: [
			"strengthening the power of your senses with Thaumaturgic rituals"]},
	{id: 4183, lines: [
			"studying otherwordly forces, and learning to wield their power"]},
	{id: 4190, lines: [
			"a buckler"]},
	{id: 4191, lines: [
			"a pearl"]},
	{id: 4192, lines: [
			"an amulet"]},
	{id: 4193, lines: [
			"a katana"]},
	{id: 4194, lines: [
			"a cuirass"]},
	{id: 4195, lines: [
			"an elven flail"]},
	{id: 4196, lines: [
			"a set of armor"]},
	{id: 4200, lines: [
			"tanto weaponry",
			"shortblade-work",
			"dagger fighting"]},
	{id: 4201, lines: [
			"martial arts",
			"hand-to-hand",
			"boxing"]},
	{id: 4202, lines: [
			"axe fighting",
			"hatchet weaponry"]},
	{id: 4203, lines: [
			"club fighting",
			"club fighting",
			"blunt weaponry",
			"staff fighting"]},
	{id: 4204, lines: [
			"archery"]},
	{id: 4205, lines: [
			"longblade",
			"fencing",
			"swordfighting"]},
	{id: 4206, lines: [
			"destruction",
			"desolation",
			"obliteration"]},
	{id: 4207, lines: [
			"healing",
			"rejuvenescence",
			"restoration"]},
	{id: 4208, lines: [
			"illusion",
			"legerdemain",
			"deception"]},
	{id: 4209, lines: [
			"alteration",
			"transformation",
			"fluctuation"]},
	{id: 4210, lines: [
			"thaumaturgy",
			"esthetic",
			"sense"]},
	{id: 4211, lines: [
			"mysticism",
			"occult",
			"eldritch"]},
	{id: 4212, lines: [
			"religious zealots",
			"maniacal priests",
			"religious fanatics"]},
	{id: 4213, lines: [
			"malevolent wizards",
			"fanatical warlocks"]},
	{id: 4214, lines: [
			"misled peasants",
			"cretinous peasants",
			"half-witted farmers"]},
	{id: 4215, lines: [
			"corrupt knights",
			"oppressive warriors",
			"beserker soldiers"]},
	{id: 4216, lines: [
			"a bit of extra gold",
			"a hundred gold pieces"]},
	{id: 4217, lines: [
			"a fascinating book",
			"an intriguing book"]},
	{id: 4218, lines: [
			"a leather cuirass",
			"a bit of old armor"]},
	{id: 4219, lines: [
			"clothing fit for nobility",
			"some very fine clothing"]},
	{id: 4220, lines: [
			"some holy water",
			"a bottle of holy water"]},
	{id: 4221, lines: [
			"magic studies",
			"studying magic"]},
	{id: 4222, lines: [
			"weapon studies",
			"studying weaponry"]},
	{id: 4223, lines: [
			"social climbing",
			"hobnobbing",
			"socializing"]},
	{id: 4224, lines: [
			"slumming",
			"urban adventure"]},
	{id: 4225, lines: [
			"acrobatics",
			"practicing acrobatics",
			"tumbling"]},
	{id: 4226, lines: [
			"economics",
			"haggling",
			"studying economics"]},
	{id: 4227, lines: [
			"perfecting disguises",
			"creating disguises",
			"make-up, costumes"]},
	{id: 4228, lines: [
			"swimming"]},
	{id: 4229, lines: [
			"sparring",
			"boxing"]},
	{id: 4230, lines: [
			"blowing things up"]},
	{id: 4231, lines: [
			"healing the ill"]},
	{id: 4232, lines: [
			"creating illusions"]},
	{id: 4233, lines: [
			"transforming objects",
			"transubstantiation"]},
	{id: 4234, lines: [
			"performing miracles",
			"seeing beyond this reality"]},
	{id: 4235, lines: [
			"exploring the unknown"]},
	{id: 4236, lines: [
			"dagger",
			"tanto",
			"shortsword"]},
	{id: 4237, lines: [
			"boxing",
			"sparring",
			"fighting"]},
	{id: 4238, lines: [
			"battleaxe",
			"waraxe",
			"axe"]},
	{id: 4239, lines: [
			"flail",
			"mace",
			"warhammer",
			"staff"]},
	{id: 4240, lines: [
			"archery",
			"longbow",
			"shortbow"]},
	{id: 4241, lines: [
			"broadsword",
			"saber",
			"katana",
			"claymore"]},
	{id: 4242, lines: [
			"Spark spell"]},
	{id: 4243, lines: [
			"Magicka Sponge spell"]},
	{id: 4244, lines: [
			"Light spell"]},
	{id: 4245, lines: [
			"Alter Magicka spell"]},
	{id: 4246, lines: [
			"Detect Enemy spell"]},
	{id: 4247, lines: [
			"Dispel Magicka spell"]},
	{id: 4250, lines: [
			"heal the damage your other spells caused"]},
	{id: 4251, lines: [
			"turn invisible to avoid your parents"]},
	{id: 4252, lines: [
			"alter the fabric of reality in more subtle ways"]},
	{id: 4253, lines: [
			"sharpen your natural and unnatural senses"]},
	{id: 4254, lines: [
			"perceive the more subtle energies of other worlds"]},
	{id: 4255, lines: [
			"You also envied him for the gold of the Imperial treasury"]},
	{id: 4256, lines: [
			"But you pitied Tharn, for he had to move incognito"]},
	{id: 4257, lines: [
			"You also envied Tharn for his incredible knowlege"]},
	{id: 4258, lines: [
			"It seemed to you that the path to power was seldom fun"]},
	{id: 4259, lines: [
			"You secretly found Tharn and his cruelty nauseating"]},
	{id: 4260, lines: [
			"learning how to tell the nobles what they wanted to hear"]},
	{id: 4261, lines: [
			"learning how to talk tough with the Imperial City locals"]},
	{id: 4262, lines: [
			"exercising or practicing acrobatic techniques for defense"]},
	{id: 4263, lines: [
			"talking and haggling with the merchants of the Imperial City"]},
	{id: 4264, lines: [
			"impersonating certain nobles for information and amusement"]},
	{id: 4265, lines: [
			"swimming in the murky black waters of the Caledon River"]},
	{id: 4266, lines: [
			"sparring with off-duty members of the Imperial Guard"]},
	{id: 4300, lines: [
			"casting offensive spells",
			"the School of Destruction"]},
	{id: 4301, lines: [
			"cast the Spark spell"]},
	{id: 4302, lines: [
			"casting restorative spells",
			"the School of Restoration"]},
	{id: 4303, lines: [
			"cast Light Healing spells"]},
	{id: 4304, lines: [
			"casting illusionary spells",
			"the School of Illusion"]},
	{id: 4305, lines: [
			"turn yourself invisible"]},
	{id: 4306, lines: [
			"casting alteration spells",
			"the School of Alteration"]},
	{id: 4307, lines: [
			"fall from most any height"]},
	{id: 4308, lines: [
			"casting thaumaturgical spells",
			"the School of Thaumaturgy"]},
	{id: 4309, lines: [
			"enhance your natural senses"]},
	{id: 4310, lines: [
			"casting mystical spells",
			"the School of Mysticism"]},
	{id: 4311, lines: [
			"manipulate arcane forces"]},
	{id: 4400, lines: [
			"dodging techniques",
			"defensive combat techniques"]},
	{id: 4401, lines: [
			"the art of silent movement",
			"the skill of moving stealthily"]},
	{id: 4402, lines: [
			"techniques for a skillful backstab",
			"stabbing the back of a live target"]},
	{id: 4403, lines: [
			"the myriad uses of disguises",
			"makeup, costume, and other disguises"]},
	{id: 4404, lines: [
			"lockpicking skills",
			"with his variety of picks and locks"]},
	{id: 4405, lines: [
			"pickpocketing techniques",
			"ways to make every pocket accessible"]},
	{id: 4406, lines: [
			"honing your ability to scale a wall",
			"methods of climbing varieties of walls"]},
	{id: 4407, lines: [
			"the ancient arts of assassination",
			"methods to make any blow a fatal one"]},
	{id: 4408, lines: [
			"improving your speed",
			"making yourself a faster runner"]},
	{id: 4409, lines: [
			"practicing jumping high and long",
			"developing your jumping ability"]},
	{id: 4410, lines: [
			"destructive"]},
	{id: 4411, lines: [
			"restorative"]},
	{id: 4412, lines: [
			"illusionary"]},
	{id: 4413, lines: [
			"protean"]},
	{id: 4414, lines: [
			"thaumaturgical"]},
	{id: 4415, lines: [
			"mystic"]},
	{id: 4416, lines: [
			"short blade"]},
	{id: 4417, lines: [
			"hand-to-hand"]},
	{id: 4418, lines: [
			"axe fighting"]},
	{id: 4419, lines: [
			"blunt weapon"]},
	{id: 4420, lines: [
			"bow and arrow",
			"archery"]},
	{id: 4421, lines: [
			"jumping"]},
	{id: 4422, lines: [
			"swimming"]},
	{id: 4423, lines: [
			"racing"]},
	{id: 4424, lines: [
			"fighting"]},
	{id: 4425, lines: [
			"climbing"]},
	{id: 4426, lines: [
			"the wild elves from the woodland"]},
	{id: 4427, lines: [
			"the fey from the haunted glens"]},
	{id: 4428, lines: [
			"the wild harpies from the islands"]},
	{id: 4429, lines: [
			"the giants from a nearby mountain"]},
	{id: 4430, lines: [
			"the small dragons who are kin to the Wyrm"]},
	{id: 4431, lines: [
			"the shy nymphs from a nearby lake"]},
	{id: 4432, lines: [
			"the daedra from the plane of Oblivion"]},
	{id: 4433, lines: [
			"the strange spriggan from the woodland"]},
	{id: 4434, lines: [
			"the half-man half-horse centaurs"]},
	{id: 4435, lines: [
			"the mischevious imps of Oblivion"]},
	{id: 4436, lines: [
			"destruction"]},
	{id: 4437, lines: [
			"healing"]},
	{id: 4438, lines: [
			"illusion"]},
	{id: 4439, lines: [
			"alteration"]},
	{id: 4440, lines: [
			"thaumaturgy"]},
	{id: 4441, lines: [
			"mysticism"]},
	{id: 4442, lines: [
			"priest"]},
	{id: 4443, lines: [
			"wizard",
			"sorceror"]},
	{id: 4444, lines: [
			"revolutionary",
			"anarchist"]},
	{id: 4445, lines: [
			"warlord",
			"robber baron"]},
	{id: 4446, lines: [
			"assassin"]},
	{id: 4450, lines: [
			"jump high"]},
	{id: 4451, lines: [
			"run swiftly"]},
	{id: 4452, lines: [
			"fight dirty"]},
	{id: 4453, lines: [
			"climb anything"]},
	{id: 4454, lines: [
			"fight with a dagger"]},
	{id: 4455, lines: [
			"box",
			"kick and punch"]},
	{id: 4456, lines: [
			"fight with an axe"]},
	{id: 4457, lines: [
			"use a club"]},
	{id: 4458, lines: [
			"shoot an arrow"]},
	{id: 4459, lines: [
			"fence",
			"fight with a blade"]},
	{id: 4500, lines: [
			"medicine"]},
	{id: 4501, lines: [
			"etiquette",
			"manners",
			"decorum",
			"good form"]},
	{id: 4502, lines: [
			"intimidation",
			"the way of the streets",
			"bullying"]},
	{id: 4503, lines: [
			"haggling",
			"negotiation",
			"bargaining"]},
	{id: 4504, lines: [
			"knife-fighting"]},
	{id: 4505, lines: [
			"racing",
			"running"]},
	{id: 4506, lines: [
			"stealth",
			"concealment"]},
	{id: 4507, lines: [
			"climbing",
			"scaling walls"]},
	{id: 4508, lines: [
			"swimming"]},
	{id: 4509, lines: [
			"fisticuffs",
			"boxing",
			"brawling"]},
	{id: 4510, lines: [
			"palace",
			"castle",
			"mansion"]},
	{id: 4511, lines: [
			"squires",
			"brats",
			"aristocrats"]},
	{id: 4512, lines: [
			"shortsword",
			"fine blade"]},
	{id: 4513, lines: [
			"Mages Guild"]},
	{id: 4514, lines: [
			"apprentices",
			"students",
			"novices",
			"scholars"]},
	{id: 4515, lines: [
			"book"]},
	{id: 4516, lines: [
			"temple",
			"chantry",
			"monastery",
			"abbey"]},
	{id: 4517, lines: [
			"disciples",
			"neonates"]},
	{id: 4518, lines: [
			"bottle of holy water"]},
	{id: 4519, lines: [
			"college",
			"school",
			"training ground"]},
	{id: 4520, lines: [
			"students",
			"brats",
			"squires"]},
	{id: 4521, lines: [
			"dagger and a tanto",
			"tanto and a dagger",
			"assortment of blades"]},
	{id: 4522, lines: [
			"locks",
			"locks and picks"]},
	{id: 4523, lines: [
			"picking pockets",
			"pickpocketing"]},
	{id: 4524, lines: [
			"concealment",
			"hiding in shadows",
			"evasion",
			"subterfuge"]},
	{id: 4525, lines: [
			"dodging",
			"dodging"]},
	{id: 4526, lines: [
			"climbing",
			"climbing",
			"scaling walls"]},
	{id: 4527, lines: [
			"backstabbing",
			"dirty tricks",
			"dirty fighting"]},
	{id: 4528, lines: [
			"a bag filled with gold",
			"a bag with 200 gold pieces",
			"a gold-filled purse"]},
	{id: 4529, lines: [
			"an ebony dagger",
			"a dagger wrought of ebony"]},
	{id: 4530, lines: [
			"a most wonderful book",
			"an insightful book",
			"a fascinating tome"]},
	{id: 4531, lines: [
			"a single beautiful ruby",
			"an exquisite red ruby"]},
	{id: 4532, lines: [
			"a staff forged in silver",
			"a sparkling silver staff"]},
	{id: 4533, lines: [
			"a flask of holy water",
			"a bottle of holy water"]},
	{
		id: 4534,
		lines: [
			"break into some merchant's house",
			"check out the pickings in the area",
			"see if the locals locked their windows"]
	},
	{id: 4535, lines: [
			"beat up a few rich-looking locals",
			"lure a nabob into a nearby alley"]},
	{
		id: 4536,
		lines: [
			"see what the locals had in their pockets",
			"check out what the local pockets offered",
			"do a little practice pickpocketing"]
	},
	{
		id: 4537,
		lines: [
			"part some of the locals and their loot",
			"see how stupid the local populace was",
			"spread a little misinformation for money"]
	},
	{
		id: 4538,
		lines: [
			"see what smuggling opportunities were available",
			"sell a few blackmarket articles for profit",
			"see what the merchants wanted but could not get"]
	},
	{
		id: 4539,
		lines: [
			"check out the security of the local bank",
			"begin studying the layout of the local bank",
			"start innocently inquiring about the local bank"]
	},
	{id: 4550, lines: [
			"dodge"]},
	{id: 4551, lines: [
			"sneak"]},
	{id: 4552, lines: [
			"backstab"]},
	{id: 4553, lines: [
			"disguise yourself"]},
	{id: 4554, lines: [
			"pick locks"]},
	{id: 4555, lines: [
			"pick pockets"]},
	{id: 4556, lines: [
			"climb",
			"climb walls"]},
	{id: 4557, lines: [
			"strike fatally"]},
	{id: 4558, lines: [
			"run",
			"run fast"]},
	{id: 4559, lines: [
			"jump",
			"jump high"]},
	{id: 4560, lines: [
			"you decided nothing else mattered but gold"]},
	{id: 4561, lines: [
			"you realized you had a great destiny ahead of you"]},
	{id: 4562, lines: [
			"you began to train your mind to hold great knowledge"]},
	{id: 4563, lines: [
			"you developed a sense of humor and a sense of fun"]},
	{id: 4564, lines: [
			"you developed a system of honor, giving your life meaning"]},
	{id: 4565, lines: [
			"breaking and entering. And stealing"]},
	{id: 4566, lines: [
			"beating up some nobs for their gold"]},
	{id: 4567, lines: [
			"pickpocketing around the village"]},
	{id: 4568, lines: [
			"swindling some stupes out of their gold"]},
	{id: 4569, lines: [
			"smuggling some Aegrotat into the village"]},
	{id: 4570, lines: [
			"making an illegal withdrawal at the bank"]},
	{id: 4650, lines: [
			"a priest",
			"a cleric"]},
	{id: 4651, lines: [
			"priest",
			"cleric"]},
	{id: 4652, lines: [
			"a wizard",
			"a mage"]},
	{id: 4653, lines: [
			"mage"]},
	{id: 4654, lines: [
			"a knight",
			"a noble"]},
	{id: 4655, lines: [
			"noble",
			"lord",
			"gentleman"]},
	{id: 4656, lines: [
			"a merchant",
			"a speculator",
			"a financier"]},
	{id: 4657, lines: [
			"merchant"]},
	{id: 4700, lines: [
			"merchant",
			"legislator",
			"politician"]},
	{id: 4701, lines: [
			"drove a stiletto into his heart",
			"slit his throat with your dagger"]},
	{id: 4702, lines: [
			"snapped his neck with your other hand",
			"strangled him where he lay"]},
	{id: 4703, lines: [
			"buried your hatchet in his chest",
			"hacked him to pieces with your axe"]},
	{id: 4704, lines: [
			"crushed his skull with your mace",
			"clubbed him to death with your flail"]},
	{id: 4705, lines: [
			"pushed an arrow through his skull"]},
	{id: 4706, lines: [
			"gutted him with your handy katana",
			"hacked off his head with your claymore"]},
	{id: 4707, lines: [
			"spiritually",
			"secularly"]},
	{id: 4708, lines: [
			"magically",
			"mystically"]},
	{id: 4709, lines: [
			"socially",
			"martially",
			"militarily"]},
	{id: 4710, lines: [
			"politically",
			"economically"]},
	{id: 4711, lines: [
			"retribution from the gods",
			"an inquisition of all heretics"]},
	{id: 4712, lines: [
			"a summoning of the Daedra",
			"the weaving of a cataclysm"]},
	{
		id: 4713,
		lines: [
			"an outbreak of open civil war",
			"the destruction of alliances",
			"a revolt of the warlord's serfs"]
	},
	{id: 4714, lines: [
			"a crippling economic war",
			"additional political machinations"]},
	{id: 4750, lines: [
			"swim"]},
	{id: 4751, lines: [
			"mend simple wounds",
			"heal yourself",
			"heal without magic"]},
	{id: 4752, lines: [
			"act charming",
			"smile and win",
			"observe etiquette"]},
	{id: 4753, lines: [
			"demand your way",
			"command respect"]},
	{id: 4754, lines: [
			"haggle with trappers",
			"set your own price"]},
	{id: 4755, lines: [
			"Arkay"]},
	{id: 4756, lines: [
			"Notorgo"]},
	{id: 4757, lines: [
			"Mara"]},
	{id: 4758, lines: [
			"Ephen"]},
	{id: 4759, lines: [
			"Julianos"]},
	{id: 4760, lines: [
			"Akatosh"]},
	{id: 4761, lines: [
			"The Bandit God"]},
	{id: 4762, lines: [
			"speak with the Wild Elves"]},
	{id: 4763, lines: [
			"commune with the Faerie"]},
	{id: 4764, lines: [
			"speak the Harpie tongue"]},
	{id: 4765, lines: [
			"converse with the Giants"]},
	{id: 4766, lines: [
			"talk (a bit!) to Dragons"]},
	{id: 4767, lines: [
			"speak somewhat with Nymphs"]},
	{id: 4768, lines: [
			"speak some words of Daedric"]},
	{id: 4769, lines: [
			"converse with the Spriggan"]},
	{id: 4770, lines: [
			"talk with Centaurs"]},
	{id: 4771, lines: [
			"talk (a bit!) with Imps"]},
	{id: 4773, lines: [
			"bow"]},
	{id: 4900, lines: [
			"handed you a dagger",
			"tossed you a tanto"]},
	{id: 4901, lines: [
			"bowed to you"]},
	{id: 4902, lines: [
			"gave you his axe",
			"handed you an axe"]},
	{id: 4903, lines: [
			"gave you a mace",
			"handed you a mace"]},
	{id: 4904, lines: [
			"took your bow from you."]},
	{id: 4905, lines: [
			"handed you a sword",
			"gave you a blade"]},
	{
		id: 5100,
		lines: [
			"Your room is still rented for %dwr hours yet.[0xFD] For how many additional days will you[0xFD] require the room?[0xFD]  [0xF8] [0xFD]"]
	},
	{
		id: 5101,
		lines: [
			"Happy Heart's Day, %ra. As traditional, you[0xFD] have a free room for the day. If you want to rent[0xFD] it for a longer time, please stop by tomorrow.[0xFD]"]
	},
	{id: 5102, lines: [
			"Good day, %ra. For how many days[0xFD] will you require the room?[0xFD]  [0xF8] [0xFD]"]},
	{
		id: 5221,
		lines: [
			"You and the trainer practice for 3 hours. The trainer[0xFD] tells you to reflect on what you've learned,[0xFD] and see if you can put it to good use.[0xFD]"]
	},
	{
		id: 5225,
		lines: [
			"Awright, kid, now lissen, I ain't gonna[0xFD] repeat myself. Since you're one of us now,[0xFD] just a %lev, but still,[0xFD] I'll tell you where a local dungeon is you[0xFD] might wanna use to supplement yer stash.[0xFD] Lemme mark it on your map. There it is,[0xFD] %dng. Now don't say[0xFD] I ain't never done anything for ya.[0xFD]",
			""]
	},
	{
		id: 5226,
		lines: [
			"Congratulations, kid, you can call call[0xFD] yerself a %lev in the Thieves[0xFD] Guild now. We'll be yer official fence now[0xFD] if ya want. We got ourselves a rat here[0xFD] who'll buy yer hot merchandise offa ya and[0xFD] sell ya stuff at a real discount that other[0xFD] blokes picked up. Makes life a little[0xFD] easier, I says.[0xFD]"]
	},
	{
		id: 5227,
		lines: [
			"Good going, hotshot. We think yer ready to[0xFD] be a full-fledged %lev in[0xFD] the Thieves Guild. From now on, if you wanna[0xFD] know the newest scoop, talk to our spymaster.[0xFD] We got ears all over the place, and now that[0xFD] yer a %lev, so do you.[0xFD]"]
	},
	{
		id: 5228,
		lines: [
			"Listen, %pcf, I thought you'd[0xFD] be innerested in hearin' about a little pit[0xFD] here in %reg called %dng.[0xFD] Virgin treasure trove, all ready ta be picked[0xFD] apart. Let me mark it in yer map for ya. After[0xFD] all, as the newest %lev[0xFD] in the Thieves Guild, ya gotta keep yer income[0xFD] up, eh, %pcf?[0xFD]"]
	},
	{
		id: 5229,
		lines: [
			"The Thieves Guild ranked ya again,[0xFD] %pcf, whattya think about that?[0xFD] Now that yer a %lev,[0xFD] it's time I showed ya my own favorite,[0xFD] secret treasure pit. Here it is on yer map.[0xFD] They call in %dng.[0xFD] Cheers on yer promotion, kid,[0xFD] and enjoy the plunder.[0xFD]"]
	},
	{
		id: 5230,
		lines: [
			"Allow me to be the first to offer my[0xFD] unreserved congratulations on your glorious[0xFD] ascension up the slippery hierarchy that is[0xFD] the Mages Guild. Now that you have achieved[0xFD] the rank of %lev, you[0xFD] have access to the Guild library. I can[0xFD] remember when I was first deemed worthy[0xFD] of such an honor. My eyes did not leave[0xFD] printed page for three whole days. My[0xFD] advice is to take advantage of this[0xFD] as soon as possible. Once again,[0xFD] jolly good show, %pcf.[0xFD]"]
	},
	{
		id: 5231,
		lines: [
			"Without hesitation, the Mages Guild has[0xFD] elected to elevate your status and rank within[0xFD] the Guild to that of %lev. You[0xFD] now shall be honored with access to the Guild's[0xFD] archives -- the largest selection of magical[0xFD] esoteria in %reg. Most all items[0xFD] are available for purchase, and our keeper is[0xFD] forever looking for new articles and offers[0xFD] generous rewards for such. I hope you will[0xFD] find this honor useful. Once again, I do[0xFD] respectively offer my congratulations.[0xFD]"]
	},
	{
		id: 5232,
		lines: [
			"%pcn, the Archmagister has[0xFD] approved your promotion to the rank and station[0xFD] of %lev in the Mages Guild. As[0xFD] a %lev, you are hereby granted the right to use[0xFD] the Guild's enchantments as you see fit. Our[0xFD] magesmith will be honored to assist you in[0xFD] enchanting any items you desire. If I may[0xFD] be so bold, I offer you my personal[0xFD] congratulations to you,[0xFD] %lev %pcn.[0xFD]"]
	},
	{
		id: 5233,
		lines: [
			"On this day, my near unanimous vote of[0xFD] Archmagister and Council, your title within[0xFD] the guild is %lev. As[0xFD] %lev, you are considered to be[0xFD] responsible and trustworthy enough to have[0xFD] rights to the daedra summoning chamber. I[0xFD] don't need to tell you that summoning a daedra[0xFD] is an act to be performed only after serious[0xFD] consideration. If the need, in your opinion,[0xFD] merits a summoning, the Guild Summoner will[0xFD] aid you. Naturally, daedra lords may only be[0xFD] summoned on certain particular days for the[0xFD] safety of the Guild as a whole. It is a grave[0xFD] privelege, %pcn, of which[0xFD] the Guild finds you worthy.[0xFD]"]
	},
	{
		id: 5234,
		lines: [
			"%pcn, it honors me to bestow[0xFD] upon you the rank of %lev. By[0xFD] deed and word, you have proven yourself to be[0xFD] an exceptional guildmember worthy of the[0xFD] penultimate position that the Mages Guild[0xFD] recognizes. As a full %lev,[0xFD] you may call upon the services of the Travellers[0xFD] League, who guard the Guild's most treasured and[0xFD] secret room -- the Teleportation Chamber.[0xFD] From there, you may travel to any other [0xFD] settlement in the Bay in but a twinkling.[0xFD] As your time is most valuable, the[0xFD] Chamber should aid you. Once again,[0xFD] permit me to congratulate you on[0xFD] this great honor, %lev.[0xFD]"]
	},
	{
		id: 5235,
		lines: [
			"For what it's worth, ya can call yerself[0xFD] %lev, now, %pcf. Change of[0xFD] rank due to meritous blah blah blah.[0xFD] Just so ya know.[0xFD]",
			"Yer doin' awright, %pcf. The[0xFD] boys decided you've earned the rank of[0xFD] %lev in the Guild. Means[0xFD] they're payin' attention to ya.[0xFD]",
			"Hey, kid, if ya start hearin' us call[0xFD] ya %lev, it's 'cause of yer[0xFD] promotion. Seems that the Guildmaster don't[0xFD] think yer a total slob.[0xFD]",
			"Been a lotta talk about ya lately, kid.[0xFD] Fact is, the Guildmaster says yer ready to[0xFD] be a full %lev now. Don't[0xFD] mean much, ta tell the truth, 'cept[0xFD] that yer doin' something right.[0xFD]"]
	},
	{
		id: 5236,
		lines: [
			"By order of the Archmagister of the Iliac[0xFD] Bay and the Council of the Mages Guild of[0xFD] %cn, %pcn the %ra[0xFD] is henceforth promoted to the rank and[0xFD] title of %lev. Your[0xFD] devotion and prowess is thus noted. Strive[0xFD] ever forward.[0xFD]",
			"Congratulations, %lev %pcn.[0xFD] The Council and Archmagister voted to award[0xFD] you with the new rank just today.[0xFD]"]
	},
	{
		id: 5237,
		lines: [
			"For meritous service and unswerving loyalty[0xFD] to the ideals of %fon, you[0xFD] have been awarded the title of %lev[0xFD] within the Order. As a symbol of your fellow[0xFD] knights' estimation, we have elected to present[0xFD] you with a new piece of armor. Congratulations,[0xFD] %lev %pcn.[0xFD]"]
	},
	{
		id: 5238,
		lines: [
			"For meritous service and unswerving loyalty[0xFD] to the ideals of %fon, you[0xFD] have been awarded the title of %lev[0xFD] within the Order. As a symbol of your fellow[0xFD] knights' estimation, we have elected to present[0xFD] you with a new piece of armor. Additionally, by[0xFD] right of your new title, you may expect and[0xFD] demand free lodging in every inn, not only in[0xFD] %reg, but all over the Bay.[0xFD] Congratulations, %lev[0xFD] %pcn.[0xFD]"]
	},
	{
		id: 5239,
		lines: [
			"For meritous service and unswerving loyalty[0xFD] to the ideals of %fon, you[0xFD] have been awarded the title of %lev[0xFD] within the Order. As a symbol of your fellow[0xFD] knights' estimation, we have elected to present[0xFD] you with a new piece of armor. You also have[0xFD] access to the ships reserved for our Order,[0xFD] so you need never again have to pay for passage[0xFD] across the Bay. I offer you my personal[0xFD] congratulations, %lev[0xFD] %pcn.[0xFD]"]
	},
	{
		id: 5240,
		lines: [
			"%pcn, by virtue of unparalleled[0xFD] devotion and legendary personal prowess, we[0xFD] of %fon are honored to[0xFD] offer you the title of %lev of[0xFD] %fon. In addition to the article[0xFD] of armament we traditionally bestow, the Order[0xFD] and the people of %reg wish[0xFD] to present you with the deed to a house, so[0xFD] you will consider %reg your home[0xFD] as well as your custody. The title of[0xFD] %lev is the highest honor[0xFD] %fon recognizes, but our pride[0xFD] in you knows no bounds. For many of us,[0xFD] you are the ideal to which we aspire,[0xFD] %lev %pcn.[0xFD]"]
	},
	{
		id: 5241,
		lines: [
			"%pcn, by virtue of unparalleled[0xFD] devotion and legendary personal prowess, we[0xFD] of %fon are honored to[0xFD] offer you the title of %lev of[0xFD] %fon. The title of %lev[0xFD] is the highest honor %fon[0xFD] recognizes, but our pride in you knows no[0xFD] bounds. For many of us, you are the ideal[0xFD] to which we aspire,[0xFD] %lev %pcn.[0xFD]"]
	},
	{
		id: 5242,
		lines: [
			"The Order of Arkay, in recognition for your[0xFD] tireless efforts to bring harmony and order to[0xFD] %reg and all of the Iliac Bay,[0xFD] hereby officially recognizes you as a[0xFD] %lev ofthe Order.[0xFD] If I may, congratulations,[0xFD] %lev %pcn.[0xFD]"]
	},
	{
		id: 5243,
		lines: [
			"The Resolution of Zenithar, by vote of the[0xFD] Common Council, hereby and forthwith promotes[0xFD] you, the %ra %pcn,[0xFD] to the rank of %lev within the[0xFD] Resolution. You are proof of the values[0xFD] of hard, honest labor.[0xFD]"]
	},
	{
		id: 5244,
		lines: [
			"You should be proud, %pcf.[0xFD] The Benevolence of Mara has decided that in[0xFD] light of the honors you have brought to the[0xFD] temple, you are worthy to be raised to the[0xFD] rank of %lev. Congratulations,[0xFD] my friend.[0xFD]"]
	},
	{
		id: 5245,
		lines: [
			"The Akatosh Chantry, after relatively[0xFD] short deliberation, has elected to raise your[0xFD] rank within the temple. Henceforth and until[0xFD] further notice, you will be addressed within[0xFD] the temple by the title %lev.[0xFD]"]
	},
	{
		id: 5246,
		lines: [
			"Ah, it is with unalloyed beatitude, we of the[0xFD] School of Julianos, in cognizance of all of[0xFD] your ministant, ah, endeavors and aggrandizing,[0xFD] dare I say piquant, erudition, ah, do bequeath[0xFD] to you, the %ra %pcn,[0xFD] the title and honorific %lev.[0xFD] It doesn't mean much, friend, but it's[0xFD] a jolly good symbol, eh?[0xFD]"]
	},
	{
		id: 5247,
		lines: [
			"You should be very proud, %pcf.[0xFD] The House of Dibella has chosen to recognize[0xFD] you by a new title, %lev.[0xFD] The beauty of your efforts and accomplishments[0xFD] have not gone unnoticed.[0xFD]"]
	},
	{
		id: 5248,
		lines: [
			"%pcn, it is my honored[0xFD] duty to inform you that the Temple of Stendarr[0xFD] has chosen you to bear a new title in the[0xFD] temple, that of %lev.[0xFD] We have recognized your humble efforts to[0xFD] spread peace to all the regions of the Iliac[0xFD] Bay. Continue to strive for mercy and[0xFD] justice, %lev %pcf.[0xFD] There is no greater duty to Stendarr.[0xFD]"]
	},
	{
		id: 5249,
		lines: [
			"Kynareth, through her agents in Mundus,[0xFD] has seen you worthy of advancement. For[0xFD] your accomplishments in the name of the[0xFD] Temple of Kynareth, your rank and title[0xFD] is henceforth that of %lev.[0xFD] Congratulations, my friend.[0xFD]",
			""]
	},
	{
		id: 5287,
		lines: [
			"So then it is decided. You are hereby[0xFD] given the rank of %lev[0xFD] in the Order of Arkay. Speak to our trainers,[0xFD] if you desire. Our healer and herbalist will[0xFD] both be willing to assist you at any time,[0xFD] though our herbalist will have to charge you[0xFD] for the cost of any herbs needed, depending[0xFD] on the disease.[0xFD]"]
	},
	{
		id: 5288,
		lines: [
			"Well then, welcome, %pcn.[0xFD] As a %lev in the Resolution,[0xFD] you have access to our trainers. If you[0xFD] find them to be useful to you, we would[0xFD] appreciate donations. Whatever you[0xFD] can comfortably give, of course.[0xFD]"]
	},
	{
		id: 5289,
		lines: [
			"I am so pleased to have you with us, my[0xFD] child. Your initial rank will be that of[0xFD] %lev, though I have no doubt[0xFD] that you will shortly prove yourself[0xFD] worthy of promotion. Our trainers are[0xFD] available to you now.[0xFD]"]
	},
	{
		id: 5290,
		lines: [
			"Well, welcome then, my child. You[0xFD] may consider yourself a %lev[0xFD] now. Our trainers are available to you.[0xFD] For the other benefits of the temple,[0xFD] be patient, work hard, and they[0xFD] will come to you.[0xFD]"]
	},
	{
		id: 5291,
		lines: [
			"Then consider yourself one of the ranks[0xFD] of the proud %fon. You[0xFD] shall begin as a %lev. Though[0xFD] your rank in %fon is low,[0xFD] in %reg, our reputation will[0xFD] follow you. Do not be surprised when you[0xFD] learn that no %reg innkeep[0xFD] will charge you for a room. It is an[0xFD] honor paid to all %fon.[0xFD]"]
	},
	{
		id: 5292,
		lines: [
			"Good decision, young %pcf.[0xFD] From this moment on, your codeword will be[0xFD] %dbp. You are now considered a[0xFD] %lev, with full access to our[0xFD] trainers. There are other benefits of being[0xFD] a Dark Brother which will be made available[0xFD] upon you demonstrating your practical[0xFD] worth. If you haven't, by the way,[0xFD] been to %dng, you[0xFD] ought to. It's a lovely little cemetery,[0xFD] with lots of treasure-laden crypts, if[0xFD] you think some graverobbing would aid your[0xFD] present financial situation.[0xFD]"]
	},
	{
		id: 5293,
		lines: [
			"Then henceforth, you will be known as[0xFD] %pcn, %lev of the[0xFD] Mages Guild. It will take patience and[0xFD] hard effort to gain access to all the[0xFD] Guild offers, my child, but I can now[0xFD] give you access to our trainers and our[0xFD] Spellmaker. Too much power in too little[0xFD] time has destroyed many a man and[0xFD] woman. The Mages Guild is nothing[0xFD] if not conscientious.[0xFD]"]
	},
	{id: 5400, lines: [
			"Action type twelve. (do not translate)"]},
	{
		id: 5404,
		lines: [
			"Greetings, %pcn.[0xFD] You dare much by intruding here.[0xFD] Nevertheless, I will allow you[0xFD] to proceed, provided you prove as[0xFD] perceptive as rumor reports.[0xFD] You may be aware that I am a[0xFD] master of the blade. But what[0xFD] is my other favored weapon?[0xFD] Answer correctly, then arm yourself.[0xFD]"]
	},
	{id: 5406, lines: [
			"One speaks for me.[0xFD] Two serve me.[0xFD] Six protect me.[0xFD] How many defy me?[0xFD]"]},
	{id: 5423, lines: [
			"I guard the Way. Speak only my name,[0xFD] and I shall grant you passage.[0xFD]"]},
	{id: 5424, lines: [
			"Command me and entry shall be yours.[0xFD]"]},
	{
		id: 5464,
		lines: [
			"All are free to petition his highness at[0xFD] this time. Do not stray from the audience[0xFD] chamber lest ye have royal blessing to do so.[0xFD] Always speak politely to the king and queen,[0xFD] and above all, cast no spells while within[0xFD] these walls. Do ye agree with these terms?[0xFD]"]
	},
	{id: 5656, lines: [
			"Answers start here. (do not translate)"]},
	{id: 5660, lines: [
			"\"Bow,bow and arrow,crossbow,bows,crossbows\""]},
	{id: 5662, lines: [
			"\"One,1\""]},
	{id: 5679, lines: [
			"\"Benefactor,the Benefactor\""]},
	{id: 5680, lines: [
			"\"shut up,shutup,shaddup\""]},
	{id: 5720, lines: [
			"\"Yes,OK,I agree,Y,agreed,done,fine,okay,sure,yep\""]},
	{
		id: 6100,
		lines: [
			"Mountain",
			"Mountain",
			"Mountain",
			"Mountain",
			"Mountain",
			"Mountain",
			"Mountain",
			"Mountain",
			"Mountains",
			"Mountains",
			"Mountains",
			"Mountains",
			"Mountains",
			"Mountains",
			"Peak",
			"Peaks",
			"Mount",
			"Crag",
			"Promontory",
			"Ridge",
			"Ridges",
			"Highland",
			"Highlands",
			"Upland",
			"Uplands",
			"Knoll",
			"Butte",
			"Buttes",
			"Bluff",
			"Bluffs",
			"Cliff",
			"Summit",
			"Dragontail Mountains",
			"Devilrock",
			"Dragontooth Mountains",
			"Wrothgarian Mountains"]
	},
	{
		id: 6101,
		lines: [
			"Wood",
			"Woods",
			"Woods",
			"Woods",
			"Woods",
			"Forest",
			"Forest",
			"Forest",
			"Forest",
			"Forest",
			"Forest",
			"Forest",
			"Timber",
			"Timberland",
			"Woodland",
			"Grove",
			"Copse",
			"Thicket",
			"Coppice",
			"Spinney",
			"Ravennian Forest",
			"Skeffington Wood",
			"Glenpoint Foothills"]
	},
	{
		id: 6102,
		lines: [
			"Ground",
			"Riverbed",
			"Gorge",
			"Gully",
			"Soil",
			"Topsoil",
			"Sod",
			"Rock",
			"Stone",
			"Gravel",
			"Dust"]
	},
	{
		id: 6103,
		lines: [
			"Shore",
			"Coast",
			"Seashore",
			"Lakeshore",
			"Strand",
			"Beach",
			"Bank",
			"Seaside",
			"Seacoast",
			"Tideland",
			"Shoreline",
			"Waterfront",
			"Sands",
			"Bank",
			"Alik'r"]
	},
	{
		id: 6104,
		lines: [
			"Flower",
			"Flower",
			"Flower",
			"Flowers",
			"Flowers",
			"Flowers",
			"Bloom",
			"Blooms",
			"Blossom",
			"Blossoms",
			"Posy",
			"Posies",
			"Petals",
			"Bouquet",
			"Bine",
			"Plant",
			"Plants",
			"Flora",
			"Bough"]
	},
	{
		id: 6105,
		lines: [
			"Cow",
			"Cow",
			"Cow",
			"Cow",
			"Cow",
			"Calf",
			"Calf",
			"Heifer",
			"Heifer",
			"Bull",
			"Bull",
			"Bovine"]
	},
	{
		id: 6106,
		lines: [
			"Cows",
			"Cows",
			"Cows",
			"Calves",
			"Heifers",
			"Bulls",
			"Bovines",
			"Kine",
			"Cattle",
			"Cattle",
			"Cattle"]
	},
	{
		id: 6107,
		lines: [
			"Island",
			"Island",
			"Island",
			"Island",
			"Island",
			"Isle",
			"Cay",
			"Key",
			"Atoll",
			"Balfiera",
			"Betony",
			"Jagadha",
			"Cybiades",
			"Scapcrag"]
	},
	{
		id: 6108,
		lines: [
			"",
			"Cloud",
			"Cloud",
			"Cloud",
			"Cloud",
			"Clouds",
			"Clouds",
			"Clouds",
			"Clouds",
			"Sky",
			"Sky",
			"Sky",
			"Sky",
			"Raincloud",
			"Thunderhead",
			"Fog",
			"Mist",
			"Ether",
			"Haze"]
	},
	{
		id: 6109,
		lines: [
			"Desert",
			"Desert",
			"Desert",
			"Desert",
			"Waste",
			"Wasteland",
			"Dunes",
			"Dune",
			"Steppe",
			"Steppe",
			"Alik'r",
			"Steppes",
			"Miletus",
			"Alik'r Desert"]
	},
	{
		id: 6110,
		lines: [
			"Water",
			"Water",
			"Water",
			"Water",
			"Water",
			"Sea",
			"Sea",
			"Sea",
			"Sea",
			"Sea",
			"Spring",
			"Deluge",
			"Flood",
			"Ocean",
			"Billow",
			"Wave",
			"Tide",
			"Lake",
			"Lagoon",
			"Pond",
			"Pool",
			"Mere",
			"Well",
			"Surf",
			"Maelstrom",
			"Bath",
			"Iliac Bay",
			"Abecean Sea"]
	},
	{
		id: 6111,
		lines: [
			"Orchid",
			"Orchid",
			"Orchid",
			"Orchids",
			"Orchids",
			"Lily",
			"Lily",
			"Lily",
			"Lilies",
			"Lilies",
			"Flower",
			"Flower",
			"Flowers",
			"Flowers",
			"Bloom",
			"Blooms",
			"Blossom",
			"Blossoms",
			"Posy",
			"Posies",
			"Petals",
			"Bouquet",
			"Bine",
			"Plant",
			"Plants",
			"Flora",
			"Bough"]
	},
	{
		id: 6112,
		lines: [
			"Horse",
			"Horse",
			"Horse",
			"Horses",
			"Horses",
			"Horses",
			"Equine",
			"Stallion",
			"Mare",
			"Colt",
			"Filly",
			"Foal",
			"Gelding",
			"Steed",
			"Nag",
			"Pony"]
	},
	{id: 6113, lines: [
			"Assemblage",
			"Set",
			"Collection",
			"Cluster",
			"Arrangement"]},
	{
		id: 6114,
		lines: [
			"Field",
			"Field",
			"Field",
			"Field",
			"FIelds",
			"FIelds",
			"Clearing",
			"Grassland",
			"Range",
			"Farm",
			"Farmstead",
			"Grange"]
	},
	{id: 6115, lines: [
			"Ruins",
			"Ruins",
			"Ruins",
			"Ruins",
			"Remains",
			"Relics",
			"Remainders",
			"Remnants"]},
	{
		id: 6116,
		lines: [
			"Park",
			"Park",
			"Park",
			"Park",
			"Garden",
			"Garden",
			"Garden",
			"Gardens",
			"Gardens",
			"Gardens",
			"Village Green",
			"Commons",
			"Common"]
	},
	{id: 6117, lines: [
			"Nude"]},
	{
		id: 6118,
		lines: [
			"Woman",
			"Woman",
			"Woman",
			"Lady",
			"%fn",
			"%fn",
			"Lady %fn",
			"Girl",
			"Madam",
			"Madam %fn",
			"Mistress",
			"Mistress %fn",
			"Wife"]
	},
	{
		id: 6119,
		lines: [
			"Man",
			"Man",
			"Man",
			"Man",
			"Gentleman",
			"%mn",
			"%mn",
			"%mn",
			"Master %mn",
			"Lord %mn",
			"Knight"]
	},
	{id: 6120, lines: [
			"Court",
			"Court",
			"Court",
			"Court",
			"Palace",
			"Hall",
			"Castle",
			"Manor",
			"Manorhouse"]},
	{
		id: 6121,
		lines: [
			"Town",
			"Town",
			"Town",
			"Town",
			"Hamlet",
			"Hamlet",
			"Village",
			"Village",
			"Village",
			"Borough",
			"Dwynnen",
			"Corwich",
			"Tulune",
			"Craghold",
			"Pourborough"]
	},
	{
		id: 6201,
		lines: [
			"Majestic",
			"Noble",
			"August",
			"Stately",
			"Imposing",
			"Grand",
			"Proud",
			"Prideful",
			"Exalted",
			"Splendid"]
	},
	{id: 6202, lines: [
			"Green",
			"Green",
			"Green",
			"Verdant"]},
	{id: 6203, lines: [
			"White",
			"White",
			"White",
			"Pale",
			"Ivory"]},
	{
		id: 6204,
		lines: [
			"Wild",
			"Wild",
			"Wild",
			"Savage",
			"Untamed",
			"Uncivilized",
			"Fierce",
			"Stormy",
			"Violent",
			"Reckless",
			"Rash"]
	},
	{
		id: 6205,
		lines: [
			"Mottled",
			"Dappled",
			"Pied",
			"Motley",
			"Peppered",
			"Dotted",
			"Speckled",
			"Flecked",
			"Freckled",
			"Mosaic",
			"Brindled",
			"Blotchy"]
	},
	{
		id: 6206,
		lines: [
			"Brown",
			"Brown",
			"Brown",
			"Sorrel",
			"Auburn",
			"Bronze",
			"Copper",
			"Russet",
			"Cocoa",
			"Coffee",
			"Drab",
			"Tan"]
	},
	{id: 6207, lines: [
			"Young",
			"Young",
			"Young",
			"Young",
			"Youthful",
			"Youthful",
			"Baby",
			"Child"]},
	{id: 6208, lines: [
			"Rural",
			"Rustic",
			"Provincial",
			"Country",
			"Bucolic",
			"Pastoral",
			"Agrarian"]},
	{
		id: 6209,
		lines: [
			"Calm",
			"Placid",
			"Serene",
			"Undisturbed",
			"Tranquil",
			"Still",
			"Peaceful",
			"Pacific",
			"Sleeping",
			"Slumbering",
			"Reposing",
			"Restful",
			"Resting"]
	},
	{id: 6210, lines: [
			"Yellow",
			"Yellow",
			"Yellow",
			"Gold",
			"Gold",
			"Golden",
			"Golden",
			"Sallow",
			"Lemon",
			"Amber"]},
	{
		id: 6211,
		lines: [
			"Dark",
			"Dark",
			"Dark",
			"Darksome",
			"Darkling",
			"Ebony",
			"Tenebrous",
			"Somber",
			"Black",
			"Lurid",
			"Gloomy",
			"Murky",
			"Shady",
			"Night"]
	},
	{
		id: 6212,
		lines: [
			"Blue",
			"Blue",
			"Blue",
			"Blue",
			"Blue",
			"Blue",
			"Indigo",
			"Sapphire",
			"Turquoise",
			"Azure",
			"Cerulean"]
	},
	{
		id: 6213,
		lines: [
			"Lonely",
			"Sad",
			"Lonesome",
			"Solitary",
			"Lone",
			"Desolate",
			"Sequestered",
			"Remote",
			"Abandoned"]
	},
	{id: 6214, lines: [
			"Fiery",
			"Blazing",
			"Incandescent",
			"Candent",
			"Glowing",
			"Burning"]},
	{
		id: 6215,
		lines: [
			"Civilized",
			"Cultivated",
			"Refined",
			"Fashionable",
			"Fine",
			"Urbane",
			"Cosmopolitan",
			"Gallant",
			"Cordial",
			"Gracious"]
	},
	{id: 6301, lines: [
			"Allegory of",
			"Story of",
			"Fable of",
			"Legend of",
			"Myth of",
			"History of",
			"Tale of"]},
	{id: 6302, lines: [
			"Portrait of",
			"Portrait of",
			"Portrait of",
			"Study of",
			"Anatomy of",
			"Picture of"]},
	{
		id: 6303,
		lines: [
			"Battle of",
			"Battle of",
			"Battle of",
			"Battle of",
			"Battle of",
			"War of",
			"Fight of",
			"Assault of",
			"Attack of",
			"Charge of",
			"Invasion of",
			"Raid of",
			"Invasion of",
			"Besiegement of",
			"Siege of"]
	},
	{
		id: 6304,
		lines: [
			"Celebration of",
			"Dance of",
			"Festival of",
			"Festivity of",
			"Merrymaking of",
			"Jubilation of",
			"Rite of",
			"Gala of",
			"Party of",
			"Orgy of"]
	},
	{id: 6305, lines: [
			"Storm of",
			"Storm of",
			"Storm of",
			"Storm of",
			"Tempest of",
			"Outburst of",
			"Rage of"]},
	{
		id: 6306,
		lines: [
			"Death of",
			"Death of",
			"Death of",
			"Death of",
			"Death of",
			"Deathbed of",
			"Final Word of",
			"Demise of",
			"Quietus of",
			"Agony of",
			"Last Breath of",
			"Suicide of"]
	},
	{
		id: 6307,
		lines: [
			"Dream of",
			"Dream of",
			"Dream of",
			"Dream of",
			"Omen of",
			"Nightmare of",
			"Vision of",
			"Reverie of",
			"Fantasy of",
			"Delusion of",
			"Prophesy of"]
	},
	{
		id: 6308,
		lines: [
			"Homage to",
			"Homage to",
			"Homage to",
			"Homage to",
			"Respect to",
			"Regards to",
			"Reverence to",
			"Honor to",
			"Esteem to",
			"Veneration to",
			"Admiration to",
			"Devotion to"]
	},
	{
		id: 6309,
		lines: [
			"Landscape with",
			"Landscape with",
			"Landscape with",
			"Landscape with",
			"Landscape with",
			"Landscape with",
			"View of",
			"Countryside with",
			"Vista of",
			"Sight of",
			"Panorama of"]
	},
	{id: 6310, lines: [
			"Still-life with",
			"Still-life with",
			"Still-life with",
			"Still Life with"]},
	{
		id: 6401,
		lines: [
			"of %mn2",
			"of %mn2",
			"of %mn2",
			"of Lord %mn2",
			"of Lord %mn2",
			"of A Gentleman",
			"of the King",
			"of the Emperor",
			"of the Warlock",
			"of the Wizard"]
	},
	{id: 6402, lines: [
			"of %fn2.",
			"of Lady %fn2.",
			"of A Lady",
			"of the Queen",
			"of the Empress",
			"of the Sorceress"]},
	{
		id: 6403,
		lines: [
			"in the Summer",
			"in Summertime",
			"in Summertide",
			"during Summer",
			"during Summertide",
			"in Summer",
			"in Summer",
			"in Summer",
			"in Summer",
			"in Summer",
			"in Second Seed",
			"in Mid Year",
			"in Sun's Height"]
	},
	{
		id: 6404,
		lines: [
			"in the Fall",
			"in the Autumn",
			"in Fall",
			"in Autumn",
			"in Last Seed",
			"in Hearth Fire",
			"in Frostfall",
			"at Harvest",
			"in Harvest Time",
			"during Harvest"]
	},
	{
		id: 6405,
		lines: [
			"in the Winter",
			"in Winter",
			"in Sun's Dusk",
			"in Evening Star",
			"in Morning Star",
			"during Wintertime",
			"in Wintertime",
			"during Winter",
			"during Wintertide"]
	},
	{
		id: 6406,
		lines: [
			"in the Spring",
			"in Spring",
			"in Springtide",
			"in Springtime",
			"during the Spring",
			"in Sun's Dawn",
			"in First Seed",
			"in Rain's Hand",
			"during Planting"]
	},
	{
		id: 6407,
		lines: [
			"in the Morning",
			"at Morningtime",
			"at Morn",
			"in the Morn",
			"at Morningtide",
			"in the Forenoon",
			"at Dawn",
			"at Daybreak",
			"at Sunrise"]
	},
	{id: 6408, lines: [
			"in the Afternoon",
			"at Noontime",
			"at Noon",
			"at Midday",
			"during Midday",
			"at Noonday"]},
	{
		id: 6409,
		lines: [
			"in the Evening",
			"at Night",
			"at Dusk",
			"at Nightime",
			"at Nightfall",
			"at Eventide",
			"at Twilight",
			"at Sundown",
			"at Sunset"]
	},
	{id: 6410, lines: [
			"of High Rock",
			"of the Bretons"]},
	{id: 6411, lines: [
			"of Hammerfell",
			"of the Redguards",
			"of the Desert"]},
	{id: 6412, lines: [
			"and Child",
			"and Child",
			"and Child",
			"and Child",
			"and Babe",
			"and Infant"]},
	{
		id: 6600,
		lines: [
			"Congratulations, %pcn. For[0xFD] all your efforts toward the greater glory of[0xFD] %god, we have raised you to the[0xFD] rank of %lev. With this change[0xFD] in title, you are also gaining access to our[0xFD] cauldron, where our chemists devise potions[0xFD] for our temple. You need no longer travel[0xFD] to the Mages Guild in order to purchase[0xFD] necessary potions.[0xFD]"]
	},
	{
		id: 6601,
		lines: [
			"You have doubtlessly heard something of[0xFD] our famous libraries. Now you will have[0xFD] access to them, for the archpriests have[0xFD] found you worthy of an elevation in rank.[0xFD] Henceforth, you are a %lev,[0xFD] and the libraries are yours to explore.[0xFD] Congratulations, %pcf.[0xFD]"]
	},
	{
		id: 6602,
		lines: [
			"Your loyalty and skill have not gone[0xFD] unnoticed, %pcf. In fact, it is my[0xFD] honor to inform you that the temple elders[0xFD] have decided to give you a new title, that[0xFD] of %lev. But it is more than[0xFD] a title. With it, you have a new privelege[0xFD] in the temple -- the right to use our[0xFD] Potionmaker. Talk to our mixer if you[0xFD] don't believe me. Congratulations.[0xFD]"]
	},
	{
		id: 6603,
		lines: [
			"Our temple is not without its secrets,[0xFD] some of them very dark indeed. Now you[0xFD] have demonstrated trustworthiness enough[0xFD] that the elders have promoted you to the[0xFD] next rank, %lev. If you[0xFD] wish, %lev %pcn, you[0xFD] may indulge in the buying and selling of[0xFD] soulgems. It's a controversial practice,[0xFD] but soulgems may be used by enchanters[0xFD] to create unique magical items. I would[0xFD] talk to our soul procurer for more[0xFD] details. Whether you choose to involve[0xFD] yourself or not, of course, is your[0xFD] decision. Whatever you decide, I want[0xFD] to wish you congratulations[0xFD] on your new title.[0xFD]"]
	},
	{
		id: 6604,
		lines: [
			"You are no neonate anymore, %pcf.[0xFD] The council has elected to promote you to[0xFD] the title of %lev, a very[0xFD] honored position in the temple. As such[0xFD] you are given a terrible privelege -- the[0xFD] right to summon daedra. Obviously, the[0xFD] theological implications alone should give[0xFD] pause, but if, in your wisdom, you decide[0xFD] to summon a Prince of Oblivion, we will[0xFD] aid you in your endeavor. The Summoner[0xFD] will obviously be able to tell you more.[0xFD] Whatever you decide to do will be wise.[0xFD] After all, you're a %lev now.[0xFD]"]
	},
	{
		id: 6605,
		lines: [
			"Congratulations, %pcf. The[0xFD] council has chosen to honor you once[0xFD] again with a promotion in rank. Your[0xFD] loyalty and your talent has won you no[0xFD] small esteem here, and earned you your[0xFD] new title, %lev. From[0xFD] this moment on, if ever you need a wound[0xFD] healed, talk to me or one of the other[0xFD] clerics. We'll be happy to do what we[0xFD] can for you for free. Once again,[0xFD] my congratulations. You've[0xFD] earned it.[0xFD]"]
	},
	{
		id: 6606,
		lines: [
			"Ah, congratulations, %pcf, or[0xFD] shall I now call you, %lev? The[0xFD] council has nearly unanimously voted to[0xFD] promote you within the temple, my friend.[0xFD] The best news of it is that this is no[0xFD] empty title of respect. You now have[0xFD] access to the spellbooks of the temple.[0xFD] You can talk to our scribe and purchase[0xFD] spells without the bother of going all[0xFD] the way to the Mages Guild. You're[0xFD] rising far, I can see.[0xFD]"]
	},
	{
		id: 6607,
		lines: [
			"Good day to you, %lev. Or hadn't[0xFD] you heard that the council just today voted[0xFD] you a new rank in the temple? And not just[0xFD] any title either, my friend, but the rank[0xFD] by which you have the right to use temple's[0xFD] Spellmaker. It's a terribly complicated,[0xFD] but terribly useful apparatus. If you[0xFD] haven't used it before at, say, the Mages[0xFD] Guild, you really ought to. Now that you're[0xFD] a %lev and able.[0xFD]"]
	},
	{
		id: 6608,
		lines: [
			"Allow me to offer you my most sincere[0xFD] and heartfelt congratulations. The council,[0xFD] by an appreciable majority, has decided that[0xFD] you will henceforth be addressed by a new[0xFD] title: %lev. If that weren't[0xFD] grand enough, the practical side is that you[0xFD] can now rummage through the temple's hordish[0xFD] supply of esoteria, instruments, ballyhock,[0xFD] and phantasmagoria -- all for sale at very[0xFD] reasonable prices. Go on, ask the magical[0xFD] archivist ... %lev.[0xFD]"]
	},
	{
		id: 6609,
		lines: [
			"It is, I understand, quite official. Effective[0xFD] immediately, you are elevated in rank, and most[0xFD] importantly, in privelege, by order of the[0xFD] elder clerics, to %lev. What[0xFD] this means, in practical terms, is not only[0xFD] more respect, but access to one of the temple's[0xFD] most valuable people, the enchanter. The[0xFD] enchanter can help you make the most mundane[0xFD] object you own into a force of supernal power.[0xFD] It's somewhat more complicated than that, but[0xFD] nevertheless, an honor indeed. I congratulate[0xFD] you on your upward spiral.[0xFD]"]
	},
	{
		id: 6610,
		lines: [
			"A most, ah, perspicacious judgment, my child.[0xFD] Now then, your inceptive title will be that of[0xFD] %lev, but I wouldn't fret about[0xFD] rank. The important part is that you now have[0xFD] access to the temple's superlative libraries[0xFD] and trainers. Be patient and you will see the[0xFD] fruit of your labor. Learn, %lev.[0xFD] Read and learn.[0xFD]"]
	},
	{
		id: 6611,
		lines: [
			"It would appear that the Dark Brotherhood was[0xFD] wise in recruiting such of you. Our confidence[0xFD] in you has grown, and it is only right to give[0xFD] you an increase in rank within the Brotherhood.[0xFD] Consider yourself starting today a full-fledged[0xFD] %lev. Our chemists have been[0xFD] instructed that you are permitted to buy[0xFD] potions and poisons from their wares, so you[0xFD] needn't visit the Mages Guild any longer. I[0xFD] would also like to give you the location of[0xFD] another graveyard you ought really to be[0xFD] acquainted, %dng.[0xFD] Here it is, on your map. Once again, my[0xFD] congratulations, %lev.[0xFD]"]
	},
	{
		id: 6612,
		lines: [
			"So far, you have proven yourself to be more[0xFD] than a common thug, %pcf. We[0xFD] have decided to promote you within the Dark[0xFD] Brotherhood. Beginning today your rank is[0xFD] %lev. Now, in addition to[0xFD] the regular training we provide, you have[0xFD] access to our cauldron. There are a number[0xFD] of very clever poisons that have come from[0xFD] that tub. Finally, let me give you the[0xFD] location of another graveyard you may find[0xFD] interesting, %dng.[0xFD] I'll mark it on your map. Congratulations,[0xFD] %lev. So far, so bad.[0xFD]"]
	},
	{
		id: 6613,
		lines: [
			"I think it's about time you received an[0xFD] increase in rank to match your value to the[0xFD] Dark Brotherhood. Others agree with me, so[0xFD] you may now assume the illustrious mantle of[0xFD] %lev of the Dark Brotherhood.[0xFD] As a %lev, you are permitted[0xFD] to deal in soulgems with our soul procurer.[0xFD] It's a nice method to add more profit to[0xFD] punishment -- the souls of your victims can[0xFD] fetch a decent price among those who want a[0xFD] spirit to bind in enchantment rites. Of[0xFD] course, you can buy soulgems from the[0xFD] procurer as well as sell them. I also[0xFD] wanted to show you a new graveyard in[0xFD] %reg, %dng.[0xFD] I think you will find it very interesting[0xFD] indeed, %lev.[0xFD]"]
	},
	{
		id: 6614,
		lines: [
			"%pcf, you have a callous disregard for[0xFD] human life, a disgusting nonchalance about[0xFD] accepting gold for murder. We couldn't be more[0xFD] delighted with you. The Brotherhood has chosen[0xFD] to once again promote you in our ranks. You are[0xFD] now %lev %pcn. It[0xFD] is more than a title, though. It means that you[0xFD] can now speak to our Spymaster, the character[0xFD] who keeps us informed about the newest, most[0xFD] important happenings in the Iliac Bay region.[0xFD] I can give you a little rumor myself. There's[0xFD] a cemetery called %dng,[0xFD] with the most delightful treasures and[0xFD] surprises. I know you'll love it. Here,[0xFD] I'll mark it on your map, %pcf.[0xFD] Or I should say, %lev %pcf.[0xFD]"]
	},
	{
		id: 7200,
		lines: [
			"Looking for a good time?",
			"You want some company, honey?",
			"Interested in some good, filthy fun?"]
	},
	{id: 7201, lines: [
			"For you, how about a freebie?",
			"For old times sake, how about a freebie?"]},
	{id: 7202, lines: [
			"Time of your life, %a gold.",
			"Special price, %a gold.",
			"What'd you say to %a gold?"]},
	{id: 7203, lines: [
			"I ain't no charity, honey.",
			"No money, no fun, sweetie."]},
	{id: 7204, lines: [
			"You cannot talk to that."]},
	{id: 7205, lines: [
			"You get no response."]},
	{
		id: 7206,
		lines: [
			"What do you want now, %pcf?",
			"This better be good. I'm busy.",
			"All right, %pcf. You have one minute of my time.",
			"%oth, it's you. What is it?",
			"What the hell do you want, %pcf?",
			"%oth, just what I need. What?"]
	},
	{
		id: 7207,
		lines: [
			"How can I help you, stranger?",
			"What can I do for you, stranger?",
			"Yes?",
			"You need something?",
			"Hello.",
			"Good day.",
			"What is it?",
			"What do you want?"]
	},
	{
		id: 7208,
		lines: [
			"Good day to you, %pcf.",
			"How can I help you, %pcf?",
			"Ah, my friend. How are you this day?",
			"Good to see you, %pcf. How can I help you?",
			"Oh, hello, %pcf.",
			"Good day, %pcf.",
			"Hello, my friend."]
	},
	{
		id: 7209,
		lines: [
			"A warm hello to you, good %pcf.",
			"It warms my heart to see you, %pcf.",
			"Ah, excellent company. Good day, dear friend.",
			"%oth! Good to see you, %pcf.",
			"Good day to you, %pcf.",
			"Grand to see you, %pcf.",
			"I'm happy to see you, %pcf.",
			"Ah, %pcf, hello. Always a pleasure."]
	},
	{id: 7210, lines: [
			"Comment already copied to notebook."]},
	{
		id: 7211,
		lines: [
			"work possibilities",
			"good, semi-honest work",
			"opportunities for profit",
			"lucrative business opportunities",
			"gainful employment",
			"employment",
			"a bit of toil and grind"]
	},
	{
		id: 7212,
		lines: [
			"%1com. If possible, I would hear about %key %2com.",
			"%1com. I would be grateful for information about %key %2com.",
			"%1com. I would appreciate any information about %key %2com.",
			"%1com. I was hoping you might know about %key %2com.",
			"%1com. Enlighten me on the subject of %key %2com.",
			"%1com. Apprize me of the situation with %key %2com.",
			"%1com. I gather you know something about %key %2com."]
	},
	{
		id: 7213,
		lines: [
			"%1com. What can you tell me about %key %2com?",
			"%1com. I am seeking information on %key %2com.",
			"%1com. What do you know about %key %2com?",
			"%1com. I need to know about %key %2com.",
			"%1com. Do you know anything about %key %2com?",
			"%1com. What does %key mean to you %2com?",
			"%1com. Talk to me about %key %2com.",
			"%1com. You must know something about %key %2com."]
	},
	{
		id: 7214,
		lines: [
			"%1com. What's the newest word on %key %2com?",
			"%1com. Any news about %key %2com?",
			"%1com. What's the story on %key %2com?",
			"%1com. I'm looking for a tip on %key %2com.",
			"%1com. Know anything about %key %2com?",
			"%1com. Any hot tips on %key %2com?",
			"%1com. %key. That's what I really want to know %2com.",
			"%1com. Fill me in on %key %2com.",
			"%1com. Put me wise on %key %2com.",
			"%1com. Ever hear of %key %2com?",
			"%1com. %key from around here %2com?"]
	},
	{id: 7215, lines: [
			"Hail to thee",
			"Fair day to thee",
			"Hail %n",
			"Hail good %n",
			"Salutations, %n"]},
	{
		id: 7216,
		lines: [
			"Good day, %n",
			"Greetings, good %n",
			"Greetings to you",
			"How do you do, %n",
			"How are you, %n",
			"Hello"]
	},
	{id: 7217, lines: [
			"Hi",
			"Hi there",
			"Ahoy, %n",
			"Listen up"]},
	{id: 7218, lines: [
			"Quite",
			"Indeed",
			"Ah, I see",
			"Fine",
			"Fascinating",
			"Well put",
			"Eloquently said"]},
	{id: 7219, lines: [
			"Hmm",
			"I see",
			"Really",
			"Ah",
			"Mmm"]},
	{id: 7220, lines: [
			"Yeah, whatever",
			"All right",
			"Listen",
			"Okay",
			"So ..."]},
	{id: 7221, lines: [
			"friend",
			"stranger"]},
	{id: 7222, lines: [
			"stranger",
			"mate"]},
	{id: 7223, lines: [
			"buddy",
			"bud",
			"mate"]},
	{id: 7224, lines: [
			"and %key2"]},
	{
		id: 7225,
		lines: [
			"%1com. Can you tell me where I might find %key?",
			"%1com. I hoped you might direct me to %key.",
			"%1com. Perhaps you can guide me toward %key?",
			"%1com. I'd appreciate your directions to %key.",
			"%1com. Are you familiar with the wherebouts of %key?"]
	},
	{
		id: 7226,
		lines: [
			"%1com. Where can I find %key?",
			"%1com. I am trying to get to %key.",
			"%1com. Do you know where %key is?",
			"%1com. I need to find %key.",
			"%1com. What is the best way to %key?"]
	},
	{
		id: 7227,
		lines: [
			"%1com. Point me toward %key.",
			"%1com. How do I get to %key?",
			"%1com. Where the hell is %key?",
			"%1com. I got to get to %key.",
			"%1com. Where's %key?"]
	},
	{
		id: 7228,
		lines: [
			"%1com. Perhaps you already know %key?",
			"%1com. Are you aware that %key?",
			"%1com. I merely wished to tell you that %key.",
			"%1com. It may interest you to know that %key."]
	},
	{
		id: 7229,
		lines: [
			"%1com. Did you know that %key?",
			"%1com. Has anyone told you that %key?",
			"%1com. You should know that %key.",
			"%1com. Are you aware of the fact that %key?"]
	},
	{
		id: 7230,
		lines: [
			"%1com. Didja know that %key?",
			"%1com. Listen, %key.",
			"%1com. I know that %key.",
			"%1com. Let me tell you this -- %key."]
	},
	{
		id: 7231,
		lines: [
			"%1com. Please, desseminate a little news, will you?",
			"%1com. Indulge me in a little gossip, if you would.",
			"%1com. You haven't heard anything interesting lately, have you?",
			"%1com. What is on the tongue of polite society these days?",
			"%1com. Would you kindly update me on the world at large?"]
	},
	{
		id: 7232,
		lines: [
			"%1com. Have you heard anything interesting lately?",
			"%1com. What are people talking about now?",
			"%1com. Do you have any interesting gossip?",
			"%1com. What has been happening?"]
	},
	{
		id: 7233,
		lines: [
			"%1com. What's new?",
			"%1com. What's the talk of the town?",
			"%1com. What's the buzz?",
			"%1com. And?",
			"%1com. Go on."]
	},
	{
		id: 7234,
		lines: [
			"Do want to make love with me?",
			"Tell me you want me like I want you.",
			"Do you want to fool around?",
			"I'm yours if you want me.",
			"Do you want to slip away and make love?",
			"I don't want to talk. Let's make love.",
			"Come on, sweetheart. Lets do it.",
			"Would it offend you if I said I wanted you?",
			"No more talk. I want you.",
			"I want to hold your body tight against mine.",
			"Don't you want to do something more than talk?",
			"Kiss me, %pcf, I'm yours.",
			"Hold my body against yours until the morning comes.",
			"Let's do something we can be ashamed of.",
			"Why don't you stop talking and kiss me."]
	},
	{
		id: 7235,
		lines: [
			"%oth! Can't blame me for asking.",
			"Oh. How embarassing. Forget I asked.",
			"I'm sorry. I thought you felt it too.",
			"Well, maybe later.",
			"Ah well, I can always dream.",
			"%oth, all business, no fun."]
	},
	{
		id: 7250,
		lines: [
			"You're wasting time with me, %pcf. I don't know a thing about %key.",
			"I don't know anything about %key. Not that I'd tell you if I did.",
			"Do you really think I'd tell a %ra even if I did know?",
			"Ask someone else, %pcf. I can't help you with %key.",
			"You're %pcn. What the hell makes you think I know or would tell you anything about %key?",
			"I honestly don't know what in Tamriel you're talking about.",
			"You've obviously confused me with someone who cares.",
			"And what do you want me to do about it?",
			"That means absolutely nothing to me.",
			"I could probably help you with that. But I'm not going to.",
			"%oth, stop wasting my time. I'll tell you nothing. Now scram."]
	},
	{
		id: 7251,
		lines: [
			"%key? Even if I knew somethin', I wouldn't be a tellin' a %ra.",
			"I don't know nothin' 'bout %key and I ain't sayin' any more.",
			"Yer %pcn. I wouldn't tell ya 'bout %key even if I did know.",
			"Go on and find a friend or someone who knows somethin'. I'm  ain't either.",
			"Why would I wanna help you?",
			"I'm afraid that means nothing to me, %pcf.",
			"I don't understand. Is that supposed to mean something to me?",
			"To be honest, I couldn't really care less. Sorry.",
			"Ask someone else. Can't you see I'm busy?",
			"I'm sorry but I don't know and I have to go.",
			"I'm new to %cn too. Now, please excuse me.",
			"I gotta go.",
			"Ask someone else, %pcf. I'm running late myself.",
			"%oth, as if I know. Ask someone else.",
			"I don't particularly care to be your lackey, %pcf. Run along now.",
			"This conversation has grown tiresome. Leave me now, %pcf.",
			"Excuse me, %pcf. I actually have a life to lead.",
			"Ask someone who gives a damn.",
			"I neither know nor much care.",
			"I don't have the first clue, I'm afraid. Now, if you'll excuse me ..."]
	},
	{
		id: 7252,
		lines: [
			"You are that foul %pcn. I am ignorant on the subject of %key. Now begone.",
			"Mayhap you though I was conversant on the topic of %key. What a lark!",
			"%key? Your question presupposes that I feel an affiliation for you, which I don't.",
			"These questions are taxing my time, even if I knew about %key. Avail yourself of the nearest exit.",
			"If %ra knew how to read, you could find the answer yourself. I certainly don't have time to look it up.",
			"That is are certainly none of your concern. Now leave me, %pcf.",
			"Why should I tell you? Go bother someone else, %pcf."]
	},
	{
		id: 7253,
		lines: [
			"How droll. I only help to people of importance, those who have titles and lands. Now go away.",
			"I am a personal friend of %t %rn and do not cavort with your sort. %key indeed.",
			"How should I know? Hey! You're that loathsome %pcn. Why am I talking to you anyway?",
			"I couldn't care less about %key. Take your peasant feet away from my noble person.",
			"%key? Let me remind you that I am nobility and you are %ra scum. Go away."]
	},
	{
		id: 7304,
		lines: [
			"Never heard of %key, kid. Leave before I put a knife in yer back.",
			"I killed a %ra once for asking stupid questions about %key.",
			"I don't know. But I do know that if you stink up the air around me any more I'll stick a sword in yer gut.",
			"Yer %pcn. I oughta slice you a second smile. But because I'm a nice guy, I'll just tell ya I don't know.",
			"You gotta bad rep %pcn. I don't know anythin' about %key, but if ya come any closer, I'm gonna pop ya one."]
	},
	{
		id: 7255,
		lines: [
			"Wouldn't you like to know.",
			"%key? That's not rare information. Ask someone else about %key.",
			"You don't know where %key is? Ha-ha-ha! Serves you right %pcn, after what you've done.",
			"If I liked %ra better, maybe I'd tell you.",
			"Everyone knows where %key is. Which makes it all the more fun that you don't.",
			"No, I don't think I want to talk to you anymore, %pcf. Shove off.",
			"What do I know? I know I don't want to talk to you anymore, how's that?"]
	},
	{
		id: 7256,
		lines: [
			"Yer %pcn. I don't think I wanna tell ya where to find %key.",
			"Beggin' yer pardon, but thats such a stupid question, I don't think I should haveta answer.",
			"I reckin' a little more wanderin' around will make a right good improvement in yer manners.",
			"'Course I know where %key is. But I don't wanna tell the likes of you.",
			"Freakin' %ra. Always beggin' us common folk fer help. Whattya done fer me lately?",
			"Why on Tamriel would I want you to know, %pcf?",
			"Why the hell would I want to give you directions %pcf?",
			"Listen, I ain't got time for this. Why don't you just kiss off, %pcf.",
			"Don't know, don't care, and don't wanna to talk to ya anymore. Goodbye.",
			"Why don't you try asking me like a normal human being would?",
			"Listen, I don't give directions to people who talk to me like that."]
	},
	{
		id: 7257,
		lines: [
			"You %ra have no respect for intellect. I choose not to reveal the location of %key.",
			"Are you not %pcn? I have better things to do than give you directions to %key.",
			"I have knowledge of %key. In the event you had been less rude, I might have told you.",
			"I am a scholar. I have no time for banal questions about %key.",
			"Scholars like myself have such knowledge. It is unfortunate your demeanor offends me.",
			"That's it. I've been as polite as I can be. Go away and leave me alone.",
			"I don't care where you go. Go to Oblivion, for all I care. Just go away."]
	},
	{
		id: 7258,
		lines: [
			"Ask a commoner. It is a waste of my valuable time to answer obvious questions.",
			"Who gave you permission to speak to me? I know where to find %key, but now I am disinclined to tell you.",
			"I have heard of you %pcn. You should know your place better. Nobles are not to be used as sign posts.",
			"You presume above your station %ra. I should have you flogged, instead I'll let you flee.",
			"How amusing. This...%ra peasant is looking for %key. I'm not about to lower myself by answering."]
	},
	{
		id: 7259,
		lines: [
			"Last bloke that asked how to get to %key wound up dead.",
			"Howd' ya like a knife in yer gut? Thought so.",
			"You lookin' to find %key? I oughta kick yer arse fer wastin' my time.",
			"You're that lousy %pcn. Stay away from %key. Or else I'll haveta slit yer throat.",
			"I hate %ra scum. Git. Or I'll fill my cup with yer blood."]
	},
	{
		id: 7260,
		lines: [
			"I've heard about you %pcnf. I'm not telling you anything about %key.",
			"%key? I know lots. But I'm not about to tell the likes of you.",
			"%ra dog. I wouldn't help you find out about %key for anything.",
			"I know that %key is none of your damn business.",
			"To be honest, I don't trust you, %pcn.",
			"Wouldn't you like to know?",
			"You're on the right track, %pcf. Now talk to someone who trusts you.",
			"Listen, I couldn't talk to you about that if I wanted to.",
			"Who do you think you are, talking to me like that?",
			"Listen, I don't care for your tone of voice.",
			"I'm not sure I should talk about %key with a relative stranger.",
			"Of course I know about %key. But I don't talk about it with just anyone."]
	},
	{
		id: 7261,
		lines: [
			"I ain't tellin' ya nothin' 'bout %key.",
			"%key? I got someplace else ta be.",
			"You're that evil %pcn! Tellin' you would be like tellin' Clavicus Vile hisself.",
			"%key? %key! I ain't gonna talk about %key to nobody.",
			"Why should I tell some %ra 'bout %key? Wouldn't you like to know?",
			"Oh, maybe I know ... something. But I'm not to talk about it.",
			"No offense, but why would I tell you anything?",
			"Its none of yer damn business."]
	},
	{
		id: 7262,
		lines: [
			"Knowledge of %key is priviledged, particularly with respect to you.",
			"%key is difficult to learn about. I shall enjoy observing your discomfort and ignorance.",
			"Where did you hear about %key? I'll not tell some wetback %ra any more about %key.",
			"I would never divulge information about %key.",
			"%key? To %pcn? This must be some lowbrow attempt at humor. Listen, you are obviously not a busy person, but I am. Get lost, %pcf.",
			"This isn't going anywhere, %pcf. I'm going back to my life, you go to yours.",
			"I have no interest in telling you anything. Run along now, %pcf.",
			"Who do you think I am, the travellers bureau? Leave me alone."]
	},
	{
		id: 7263,
		lines: [
			"Nobody trusts you %pcn. Why should I?",
			"You have my permission to prostrate yourself and beg for forgiveness. %key indeed.",
			"A %ra wanting to know about %key. How droll. I've always said commonfolk need to be kept ingnorant.",
			"Of course I know all about %key. The problem is I don't like you.",
			"Noblemen should not consort with common rabble. Leave me.",
			"I don't think I care for your tone of voice, %pcf.",
			"Listen, I don't talk to anyone who talks to me like that.",
			"How impertinent to think I'd want to give you any sort of information. Goodbye.",
			"Listen, I have a life. I'd recommend you go out and get one too. Goodbye, %pcf."]
	},
	{
		id: 7264,
		lines: [
			"%key? I'll show ya the edge of my knife instead! Scram.",
			"Come any closer and I'll slit yer gizzard %pcf.",
			"Ya have a hankerin' ta die? Then keep askin' around about %key.",
			" A %ra. Wonder what color blood ya have. Come 'ere and let me see.",
			"I know all about %key. But if I told ya, I'd have ta kill ya.",
			"Maybe I know something, maybe I don't. But I'm through with talking, %pcf.",
			"I don't care to discuss that or anything else with you. Goodbye."]
	},
	{
		id: 7265,
		lines: [
			"I'm afraid I can't help you, %pcf.",
			"Sorry, %pcf. I don't know anything about %key.",
			"Sorry, friend. I'd help you if I could.",
			"I'm afraid I just don't know.",
			"%oth, I wish I could help you, %pcf.",
			"I'm really sorry, %pcf. I wish I knew something about that.",
			"Please forgive my ignorance, %pcf. I know little about that.",
			"To be honest, I know nothing about that, %pcf. I'm very sorry.",
			"Excuse me? %key? No idea one way or the other.",
			"You'll want to ask someone else. I have no idea."]
	},
	{
		id: 7266,
		lines: [
			"I wish I knew, %pcf. Could be anywhere.",
			"I heard that name somewheres before, but I got no idea where.",
			"Sorry. I haven't gotta clue.",
			"Gotta be somewhere 'round here.",
			"I heard 'o you %pcn. I'd help ya if I could.",
			"I wish I could help you, %pcf, but I know nothing about that.",
			"Sorry, friend. I can't help you there.",
			"Ask around some more, friend. Someone's bound to know.",
			"No, I don't have a clue.",
			"There's no reason ta talk down ta me like that. I can't help ya anyway."]
	},
	{
		id: 7267,
		lines: [
			"Quite a conundrum. I am completely baffled.",
			"You are the first person to ask. Sadly, I remain ignorant of the answer.",
			"North? No...south? My profuse appologies. I am unable to recall anything about %key.",
			"I had one once, but the wheel fell off. Would you hold my foot while I get a drink of air?",
			"An obtuse topic if ever their was one. No answer appears to be forthcoming.",
			"I'm sorry to ask, but why did you think I'd care about that?",
			"Come on, %pcf, you know me better than to think I'd care about that!",
			"Wait. Does that sound like something I'm involved in, %pcf? Really."]
	},
	{
		id: 7268,
		lines: [
			"You have atleast mastered the minimum forms of etiquette, but I just don't know.",
			"How refreshing. A %ra with manners. Sadly, I know nothing of %key.",
			"Ah, a true servant of %reg. You may kiss my ring, but I know nothing of %key.",
			"%pcn? Hmmm. I seem to remember some courtier speaking well of you. Sadly I can't help you with %key.",
			"%key? Doesn't sound familiar.",
			"Sorry, %pcf. I can't help you with that.",
			"I am certainly the wrong person to ask, %pcf."]
	},
	{
		id: 7269,
		lines: [
			"%key? Never heard of it. Doesn't ring any bells. If is about somethin' hot, go through the guild.",
			"Is %key a problem? I knows people that can take care of problems.",
			"Does %key have anythin' ta do with %fn? No? Then I can't help ya %pcf.",
			"You've gotta good rep on the streets %pcn. Sorry I don't know nothin' about %key."]
	},
	{
		id: 7270,
		lines: [
			"Sure. %key is %hnt.",
			"That's %hnt.",
			"I suppose its okay to tell you. Its %hnt.",
			"You'll find %key %hnt.",
			"You'll want to go %hnt.",
			"Oh, that's %hnt.",
			"Well, it's %hnt.",
			"You'll find it %hnt. Just ask me civilly next time.",
			"If it's your concern, you'll find it %hnt."]
	},
	{
		id: 7271,
		lines: [
			"Mmm. Well, try %hnt.",
			"I guess I can tell ya %hnt.",
			"Ya gotta go %hnt.",
			"%key is somewhere %hnt.",
			"Go north...no, east...no, %hnt.",
			"That's easy, %pcf. It's %hnt.",
			"Last time I checked it was %hnt.",
			"Of course I'll help you. Just go %hnt.",
			"It's really easy. You'll want to go %hnt.",
			"The best way to go %hnt.",
			"What you're going to want to do is go %hnt.",
			"You asked the right person. Just look for it %hnt.",
			"Simple. You'll find it %hnt.",
			"That's %hnt.",
			"You'll find it %hnt."]
	},
	{
		id: 7272,
		lines: [
			"Our maps show %key to be %hnt.",
			"Hmm. I recall being instructed that %key is %hnt.",
			"%pcn is it? I do not mind reveal that %key is %hnt.",
			"Directionally challenged %pcf? Try %hnt.",
			"Go %hnt."]
	},
	{
		id: 7273,
		lines: [
			"Dear fellow, try %hnt.",
			"The lower classes get lost so easily. Go %hnt.",
			"Lets see, the palace is over there...%key is %hnt.",
			"My personal scrivner assures me %key is %hnt.",
			"Try %hnt. Thats how my carriage driver goes."]
	},
	{
		id: 7274,
		lines: [
			"I know an alley short cut to %key. Try %hnt.",
			"You're an okay %ra. Go %hnt.",
			"I pinched some gold near %key. Walk %hnt.",
			"I cut someone there yesterday. Its %hnt.",
			"%key? Gonna pinch some coin, are ya? No? Well, its %hnt."]
	},
	{
		id: 7275,
		lines: [
			"Oh, ho! %hnt",
			"%fn told me this. %hnt",
			"You're a good sort, %pcf. %hnt",
			"%hnt",
			"Everybody has heard this one. %hnt2",
			"%hnt",
			"This is all I know. %hnt",
			"I can help you with that. %hnt2",
			"Oh, that's easy. %hnt",
			"Ah, %key. %hnt",
			"Well, as if you don't know already. %hnt",
			"If you must know, I'll tell you. %hnt",
			"I don't see how it's your business. %hnt"]
	},
	{
		id: 7276,
		lines: [
			"This is what they says. %hnt",
			"Its a good story it is. %hnt",
			"%hnt",
			"I wouldn't wanna be called no gossip, but...%hnt",
			"Who woulda thought it. %hnt",
			"%hnt I wish I could tell you more.",
			"%hnt I'm afraid that's all I know.",
			"Oh yes. %hnt",
			"%hnt But you may already know that.",
			"Pardon me? %hnt That's all I know.",
			"Well, you probably already know this. %hnt"]
	},
	{
		id: 7277,
		lines: [
			"The tomes are very specific. %hnt",
			"My scrying is rarely wrong. %hnt",
			"Some sources disagree, but I am sure. %hnt2",
			"I suppose it is harmless. %hnt2",
			"It is to your benefit to have queried me. I am one of the few that knows anything. %hnt2",
			"%key? %hnt",
			"%hnt You surely are already aware that.",
			"%hnt2 I estimate that is the best I can tell you.",
			"%hnt But everyone knows that.",
			"%hnt",
			"%hnt Is that what you're talking about?"]
	},
	{
		id: 7278,
		lines: [
			"My dear %pcf. %hnt Didn't you know?",
			"The talk among the court is amusing. %hnt",
			"My spies told me about this. %hnt2",
			"%hnt",
			"I have impeccable sources. %hnt2",
			"%hnt There may be more to it.",
			"%hnt Someone else may have the full story."]
	},
	{
		id: 7279,
		lines: [
			"%hnt Atleast that's the street buzz.",
			"%oth. Don't you know? %hnt",
			"Here's the real story. %hnt2",
			"I beat this info outta a guy. %hnt2",
			"I got contacts. %hnt2",
			"I'm not da best person ta ask. %hnt Thats all I know.",
			"Ask someone else, %pcf. %hnt. Which anyone could have told you."]
	},
	{
		id: 7280,
		lines: [
			"%pcn! If only I could help. I really and truly don't know anything about %key.",
			"I would sell the Underking's skivvies for you %pcf, but forgive me. I just don't know.",
			"I pains me to admit this, especially to you, but I haven't got a clue.",
			"Please don't hold it against me, but I just don't have the answer.",
			"After what you've done for us %pcf, I'd love to tell you about %key. However, I don't know."]
	},
	{
		id: 7281,
		lines: [
			"%hnr, if I knew, I'd tell ya fer sure.",
			"Ya knows ya can depend on me %pcf. But when it comes ta %key, I just don't know.",
			"I don't know %hnr. Please don't think poorly of me.",
			"What I'd give ta know 'bout %key. I'm sorry %hnr.",
			"%oth. Such a simple question, and me not knowin'. I begs yer forgiveness %hnr."]
	},
	{
		id: 7282,
		lines: [
			"My loyal patron, it grieves me to admit ignorance about %key.",
			"I am a fount of information %pcf. Sadly I lack any shred of data about %key.",
			"You are congnizant that I would answer if I could. %key is an enigma to me.",
			"You are my loyal comrade, but none of these tomes have references to %key.",
			"Though you are my deeply trusted ally, I know not the answer."]
	},
	{
		id: 7283,
		lines: [
			"Though your loyalty to me is beyond reproach, I just don't know about %key.",
			"As one of my most loyal supporters, I would tell you if I only knew the answer.",
			"%key? I haven't the foggiest dear %pcf.",
			"I heard about %key once, but I forgotten what it was.",
			"I trust you implicitly, so I hope you understand when I tell you that I just don't know."]
	},
	{
		id: 7284,
		lines: [
			"You're like a brother ta me %pcf. But I can't tell ya what I don't know.",
			"%key? Never heard of %key.",
			"Hey, I'd trust ya with my back in da alley, but I don't know anythin' about %key. You've never snitched on me, %pcf. But if I don't know, I don't know.",
			"%key rings a bell...naw. You know I'd tell ya just about anythin', but I can't remember."]
	},
	{
		id: 7285,
		lines: [
			"Anything for %hnr %pcf. Its %hnt.",
			"Gladly %hnr. Go %hnt.",
			"It would be my honor. Try %hnt.",
			"I'd take you there myself, but I'm needed here. Its %hnt.",
			"Its sunshine in my day to help %hnr %pcf. Go %hnt.",
			"Give me a second. That's %hnt.",
			"You ought to try looking %hnt."]
	},
	{
		id: 7286,
		lines: [
			"Yes %hnr. With pleasure. Go %hnt.",
			"For da honorable %pcn, take ya %hnt.",
			"You've always done good fer me and mine %hnr %pcf. Its %hnt.",
			"I likes doin' ya favors %pcf. Try %hnt.",
			"Its me pleasure %hnr %pcf. Its %hnt.",
			"You will find %key %hnt.",
			"Yes, I do know that location. It's %hnt.",
			"Let me think for a minute ... %hnt.",
			"I see ... %hnt."]
	},
	{
		id: 7287,
		lines: [
			"Readily and gladly done. Its %hnt.",
			"For you, of course. Go %hnt.",
			"The simplest of tasks. Try %hnt.",
			"Gladly %hnr. Its %hnt.",
			"A trivial request. Go %hnt."]
	},
	{
		id: 7288,
		lines: [
			"For one of your loyalty, of course. Its %hnt.",
			"I could do no less for a loyal subject. Go %hnt.",
			"Simplicity in itself. Try %hnt.",
			"You have always helped me, now I can return the favor. Its %hnt.",
			"Of course. Have we not always been friends? Go %hnt",
			"."]
	},
	{
		id: 7289,
		lines: [
			"Ya don't haveta ask twice. Its %hnt.",
			"Fer you? No sweat. Go %hnt.",
			"'Tis not well known, but try %hnt.",
			"Since its that or slit yer throat (wink and chuckle), its %hnt.",
			"Go %hnt. Watch yer back %pcf."]
	},
	{
		id: 7290,
		lines: [
			"I trust you. %hnt",
			"Most folk know this already. %hnt",
			"I shouldn't really tell you this. %hnt2",
			"%hnt2 I know you'll do the right thing %pcf.",
			"You are one of the few people I'd tell this to. %hnt2",
			"As a matter of fact, I happen to know something. %hnt2",
			"You asked the right person. %hnt2"]
	},
	{
		id: 7291,
		lines: [
			"Beggin' yer pardon %hnr %pcf, but most folk know this. %hnt",
			"Always glad ta help you, %pcf. %hnt",
			"Me cousin told me somethin'. %hnt",
			"I overheard things. %hnt2 Does that help?",
			"I've been savin' this tidbit fer you %hnr %pcf. %hnt2",
			"I'm not sure what you already know. %hnt",
			"Well, you probably already know this. %hnt"]
	},
	{
		id: 7292,
		lines: [
			"%hnt It is common knowledge that %hnt.",
			"Confidentially, this is what my research indicates. %hnt2",
			"Trust begets trust. %hnt2",
			"My divinations have revealed much. %hnt2",
			"A private scrying shows many things. %hnt2",
			"Ah yes, not everyone knows this. %hnt2",
			"It may interest you to know this. %hnt",
			"Well ... %hnt. Does that help?",
			"You want to know more? %hnt2 I assume."]
	},
	{
		id: 7293,
		lines: [
			"Your loyalty to the %t has its reward. %hnt",
			"You have always been loyal to me. %hnt",
			"You are lucky to have asked me. Court gossip has its benefits. %hnt2",
			"I am always glad to help you %pcf. %hnt2",
			"Your faithful service is reason enough for me to tell you. %hnt2"]
	},
	{
		id: 7294,
		lines: [
			"Youse can always count on me, %pcf. %hnt",
			"You sharpened my blade, now I'll sharpen yours. %hnt2",
			"Fer me drinkin' buddy, of course. %hnt2",
			". %hnt2 At least that what the Thieves Guild says.",
			"%hnt2 It's all over the Dark Brotherhood."]
	},
	{
		id: 7332,
		lines: [
			"... Let me just mark %loc here on your map",
			"... It'd be easiest if I just marked %loc on your map",
			"... Hold on, let me show you %loc on your map",
			"... Right here. You can see %loc on your map",
			"very nearby. Here, I'll show you %loc on your map",
			"awfully close by. It'd be best if I marked %loc on your map",
			"its right there (points to %loc your map)"]
	},
	{
		id: 7333,
		lines: [
			"%loc is %di of here",
			"%loc is %di of where we're standing",
			"just keep going %di",
			"that way, %di",
			"%loc is a ways %di of here",
			"%loc is not too far to the %di, if you don't mind walking",
			"%loc is %di of here, unless I'm mistaken",
			"%di of here, I think.",
			"a bit of a walk. Just go %di"]
	},
	{id: 7700, lines: [
			"Start inserting action type 99 here... (do not translate)"]},
	{
		id: 7701,
		lines: [
			"A bored guard says \"Only castle staff and[0xFD] trusted guests are allow beyond those doors.\"[0xFD]"]
	},
	{
		id: 7702,
		lines: [
			"A bored guard says \"Only castle staff and[0xFD] trusted guests are allow beyond those doors.\"[0xFD]"]
	},
	{
		id: 7703,
		lines: [
			"A bored guard says \"Only castle staff and[0xFD] trusted guests are allow beyond those doors.\"[0xFD]"]
	},
	{
		id: 7704,
		lines: [
			"A bored guard says \"Only castle staff and[0xFD] trusted guests are allow beyond those doors.\"[0xFD]"]
	},
	{
		id: 7705,
		lines: [
			"A bored guard says \"Only castle staff and[0xFD] trusted guests are allowed beyond those doors.\"[0xFD]"]
	},
	{
		id: 7717,
		lines: [
			"A strong, orcish voice in the back of the hall snarls \"All who enter must face the trial by arms.\""]
	},
	{
		id: 7764,
		lines: [
			"Chanting and odd, alien noises seep under[0xFC] the door. The smell of sulphur and[0xFC] noxious potions invades your nose.[0xFC]"]
	},
	{
		id: 7765,
		lines: [
			"The door restrains an unnatural silence,[0xFC] devoid of even the chittering of small[0xFC] insects. You hear Popudax say  Our storeroom[0xFC] is only open to those whom I trust.[0xFC]"]
	},
	{
		id: 7766,
		lines: [
			"A small heraldic device above the door handle[0xFC] clearly marks this as the private chambers of[0xFC] a member of the royal family.[0xFC]"]
	},
	{
		id: 7767,
		lines: [
			"Bold, brash male voices echo from behind the door.[0xFC] Faint clatters of metal, obviously made by men in[0xFC] armor moving about, can be heard.[0xFC]"]
	},
	{
		id: 7768,
		lines: [
			"A rhythmic clang of metal upon metal rings[0xFC] through the door. The door itself is[0xFC] slightly warm to the touch.[0xFC]"]
	},
	{
		id: 7769,
		lines: [
			"The guard speaks up, \"Careful there, Squire.[0xFC] That there door opens into the dungeons. Only[0xFC] them that has permission can get in.\"  Faint[0xFC] howls and a low ominous growl from behind[0xFC] the door send chills down your spine.[0xFC]"]
	},
	{
		id: 7770,
		lines: [
			"The clatter of pots and pans and the smell[0xFC] of fresh baked bread waft through this door.[0xFC]"]
	},
	{
		id: 8050,
		lines: [
			"You, %pcn, are accused of the crime of[0xFD] %cri. If you plead not guilty[0xFD] and are found guilty, you will face[0xFD] %pen. A guilty plea will[0xFD] invoke the mercy of the court and your[0xFD] penalty will be far less. How plea you?[0xFD]"]
	},
	{
		id: 8052,
		lines: [
			"You do not have enough gold, %pcn. You will spend[0xFD] an additional %pdg days in prison.[0xFD]"]
	},
	{id: 8053, lines: [
			"Do you wish to wait the %dip days[0xFD] until the day you are to be released?[0xFD]"]},
	{
		id: 8055,
		lines: [
			"You have been found guilty, and are sentenced to[0xFD] %dip days in prison. Starting today.[0xFD]"]
	},
	{
		id: 8057,
		lines: [
			"You have been found guilty, and are sentenced to[0xFD] pay a fine of %gtp gold pieces immediately.[0xFD]"]
	},
	{
		id: 8058,
		lines: [
			"You have been found guilty, and are to pay a fine[0xFD] of %gtp gold pieces. In addition, you are to[0xFD] serve %dip days in prison. That is all.[0xFD]"]
	},
	{
		id: 8060,
		lines: [
			"%pcn, you are to be executed for your crimes[0xFD] against the people of %cn. You are sentenced[0xFD] to be sealed into the %prn,[0xFD] to face the demons within, never to be released.[0xFD]"]
	},
	{id: 8062, lines: [
			"%pcn, you have been found not guilty[0xFD] by this court. You are free to go.[0xFD]"]},
	{
		id: 8063,
		lines: [
			"%pcn, this court finds you guilty,[0xFD] and for your crimes you are to be banished[0xFD] from %cn, never to return.[0xFD]"]
	},
	{id: 8064, lines: [
			"How will you attempt to convince[0xFD] the court of your innocence?[0xFD]"]},
	{
		id: 8075,
		lines: [
			"I can't think of any work available for a %ra like you.",
			"Why in Tamriel would I offer a %ra like you a job?",
			"Maybe you ought to learn a trade like cobbling.",
			"Work? You ought to find something else to do with your time.",
			"Ah, the curse of the drinking classes. I can't help you.",
			"Unemployed, are we? You're likely to remain so for some time.",
			"I haven't heard of any work at all, no.",
			"A %ra who actually wants to work! Amazing.",
			"Perhaps you ought to check in some other community.",
			"I don't know of any employment at all, I fear.",
			"You might check with ... No one comes to mind, actually."]
	},
	{
		id: 8076,
		lines: [
			"%pqn might have work. You can find %g2 in %pqp.",
			"Check with %pqn -- %g usually has work over at %pqp.",
			"I don't know what it pays, but %pqn has something to do over at %pqp.",
			"%pqn asked me to look for people like you. Go find %g2 at %pqp.",
			"You'd be perfect for this job %pqn needs done. You'll find %g2 at %pqp.",
			"%pqp is the place you need to go. Look for someone named %pqn."]
	},
	{
		id: 8077,
		lines: [
			"You will be the answer to %pqn's prayers. You can find %g2 at %pqp.",
			"Go to %pqp and look for %pqn. You would be perfect for %g3 kind of work.",
			"You didn't hear this from me, but go find someone named %pqn at %pqp.",
			"%pqn might have something for you to do at %pqp.",
			"As a matter of fact, %pqn asked me to direct unemployed mercenaries to %pqp.",
			"You might want to check with %pqn over at %pqp.",
			"A quest, you mean? I'd check in with %pqn -- %g's usually in %pqp.",
			"Here's what you do. Go to a place called %pqp and talk to someone named %pqn."]
	},
	{
		id: 8078,
		lines: [
			"There's no work available at all.",
			"I'm afraid everyone's searching for work these days.",
			"Not a good time to be unemployed I fear."]
	},
	{
		id: 8100,
		lines: [
			"The %n Lair",
			"The Hall of %n",
			"%n's Asylum",
			"The Cave of %n",
			"%n's Cave",
			"The Hole of %n",
			"%n's Haunt",
			"The Pit of %n",
			"%n's Pit",
			"%n's Prison",
			"The Prison of %n",
			"The Cage of %n",
			"The Dungeon of %n",
			"%n's Dungeon",
			"%n's Hold",
			"The Hold of %n",
			"The Mines of %n",
			"%n's Cavern",
			"The Cavern of %n"]
	},
	{
		id: 8200,
		lines: [
			"The Vault of %vn",
			"The Crypt of %vn",
			"%vn's Tomb",
			"The Tomb of %vn",
			"The Grave of %vn",
			"The Masoleum of %vn",
			"The Sepulcher of %vn",
			"%vn's Barrow",
			"The Barrow of %vn",
			"The Cairn of %vn",
			"The Mastaba of %vn"]
	},
	{id: 8201, lines: [
			"%on"]},
	{
		id: 8202,
		lines: [
			"The Stronghold of %mn",
			"Castle %mn",
			"Castle %mn",
			"The Fortress of %mn",
			"The Hold of %mn",
			"%mn's Hold",
			"The Citadel of %mn",
			"Tower %mn",
			"%mn Tower",
			"The Tower of %mn",
			"%mn's Guard",
			"%mn Hall"]
	},
	{
		id: 8203,
		lines: [
			"The Dungeon of %mn",
			"The Prison of %mn",
			"The %mn Prison",
			"The Gaol of %mn",
			"%mn's Gaol",
			"The Penitentiary of %mn",
			"The %mn Reformatory",
			"The %mn House of Correction",
			"The %mn Asylum",
			"The Asylum of %mn"]
	},
	{
		id: 8204,
		lines: [
			"The Temple of %dn",
			"The Cathedral of %dn",
			"The %dn Monastery",
			"The Monastery of %dn",
			"%dn Minster",
			"The Abbey of %dn",
			"The %dn Manse",
			"The %dn Rectory",
			"The Convent of %dn",
			"The %dn Cloister",
			"The Friary of %dn",
			"The Shrine of %dn",
			"The %dn Shrine",
			"The %dn Hermitage",
			"The Hermitage of %dn"]
	},
	{
		id: 8205,
		lines: [
			"The Mines of %mn",
			"The %mn Mines",
			"The %mn Lode",
			"The %mn Pit",
			"The %mn Quarry",
			"The Quarry of %mn",
			"The %mn Excavation",
			"The %mn Tunnel",
			"The %mn Dig"]
	},
	{
		id: 8206,
		lines: [
			"The %dn Cavern",
			"The %dn Cave",
			"The Cave of %dn",
			"The Cavern of %dn",
			"The Grotto of %dn",
			"The %dn Grotto",
			"The Lair of %dn",
			"The Hole of %dn",
			"The %dn Hole",
			"%dn Hollow",
			"The Pit of %dn",
			"The Den of %dn"]
	},
	{
		id: 8207,
		lines: [
			"The %fn Coven",
			"The Coven of %fn",
			"The Cult of %fn",
			"%fn Cultus",
			"The Cabal of %fn",
			"The %fn Cabal",
			"The %fn Tradition",
			"The Tenebrium of %fn"]
	},
	{
		id: 8208,
		lines: [
			"The Haunt of %vn",
			"The House of %vn",
			"Castle %vn",
			"%vn Hall",
			"The Haunt of %vn",
			"The House of %vn",
			"Castle %vn",
			"%vn Hall",
			"The Haunt of %vn",
			"The House of %vn",
			"Castle %vn",
			"%vn Hall",
			"The %vn Mews"]
	},
	{
		id: 8209,
		lines: [
			"%mn Laboratory",
			"%mn Laboratory",
			"%mn Laboratory",
			"The Laboratory of %mn",
			"The %mn Academy",
			"The School of %mn"]
	},
	{
		id: 8210,
		lines: [
			"The Nest of %on",
			"The Nest of %on",
			"The %on Aerie",
			"The %on Aerie",
			"The %on Mews",
			"The %on Nest",
			"The %on Coop",
			"The Roost of %on",
			"The Aviary of %on",
			"The Roost of %on",
			"The Aviary of %on",
			"The %on Aviary",
			"The %on Aviary"]
	},
	{
		id: 8211,
		lines: [
			"Castle %ln",
			"The Castle of %ln",
			"The Fortress of %ln",
			"The Hold of %ln",
			"%ln's Hold",
			"The Citadel of %ln",
			"Tower %ln",
			"The Tower of %ln",
			"%ln's Guard",
			"%ln Hall",
			"The House of %ln",
			"The %ln Ruins",
			"The %ln Remains"]
	},
	{
		id: 8212,
		lines: [
			"%on's Nest",
			"The Nest of %on",
			"The %on Nest",
			"%on's Web",
			"The Web of %on",
			"%on's Web",
			"The Web of %on",
			"The %on Web",
			"The %on Web",
			"The Lair of %on",
			"The %on Lair"]
	},
	{id: 8213, lines: [
			"%on"]},
	{id: 8214, lines: [
			"%dn's Den",
			"The Lair of %mn",
			"The Den of %mn",
			"The Chamber of %mn"]},
	{
		id: 8215,
		lines: [
			"The Gathering of %fn",
			"The Assembly of %fn",
			"The %fn Assembly",
			"The Convocation of %fn",
			"The %fn Council",
			"The Conclave of %fn",
			"The %fn Convergence",
			"The Community of %fn",
			"The Circle of %fn",
			"The %fn Circle"]
	},
	{
		id: 8350,
		lines: [
			"Today the people of %cn are having[0xFD] the New Life Festival in celebration of a new[0xFD] year. The Emperor has ordered yet another tax[0xFD] increase in his New Life Address, and there is[0xFD] much grumbling about this. Still, despite financial[0xFD] difficulties, the New Life tradition of free ale[0xFD] at all the taverns in the %ct continues. The[0xFD] people of %cn certainly know how to hold a[0xFD] celebration ...[0xFD]"]
	},
	{
		id: 8351,
		lines: [
			"Scour Day is a celebration held in most High Rock[0xFD] villages on the day after New Life. It was once[0xFD] the day one cleans up after New Life, but has[0xFD] changed into a party of its own.[0xFD]"]
	},
	{
		id: 8352,
		lines: [
			"Ovank'a is the day the people of the Alik'r Desert[0xFD] offer prayers to Stendarr in the hopes of a mild[0xFD] and merciful year. It is considered very holy.[0xFD]"]
	},
	{
		id: 8353,
		lines: [
			"The 15th of Morning Star is a holiday taken very[0xFD] seriously in %cn, where they call[0xFD] it South Wind's Prayer, a plea by all the religions[0xFD] of Tamriel for a good planting season. Citizens with[0xFD] every affliction known in Tamriel flock to services[0xFD] in the %ct's temples, as the clergy is[0xFD] known to perform free healings on this day. Only[0xFD] a few will be judged worthy of this service, but[0xFD] few can afford the temples usual price...[0xFD]"]
	},
	{
		id: 8354,
		lines: [
			"The Day of Lights is celebrated as a holy day by[0xFD] most villages in Hammerfell on the Iliac Bay.[0xFD] It is a prayer for a good farming and fishing[0xFD] year, and is taken very seriously.[0xFD]"]
	},
	{
		id: 8355,
		lines: [
			"The people in Yeorth Burrowland invented Waking Day[0xFD] in prehistoric times to wake the spirits of nature[0xFD] after a long, cold winter. It has evolved into a[0xFD] sort of orgiastic celebration of the end of winter.[0xFD]"]
	},
	{
		id: 8356,
		lines: [
			"Mad Pelagius is a silly little tradition in High[0xFD] Rock in a mock memorial to Pelagius Septim II, one[0xFD] of the maddest emperors in recent history. He died[0xFD] about 350 years ago, so the Septims since have taken[0xFD] it with good humor.[0xFD]"]
	},
	{
		id: 8357,
		lines: [
			"The people of Dwynnen have a huge party to celebrate[0xFD] Othroktide, the day when Baron Othrok took Dwynnen[0xFD] from the undead forces who claimed it in the Battle[0xFD] of Wightmoor.[0xFD]"]
	},
	{
		id: 8358,
		lines: [
			"The people of Glenumbra Moors may be the only people[0xFD] to remember or care about the battle between Aiden[0xFD] Direnni and the Alessian Army in the first era.[0xFD] They celebrate it vigorously on the Day of Release.[0xFD]"]
	},
	{
		id: 8359,
		lines: [
			"Today is the 16th of Sun's Dawn, a holiday celebrated[0xFD] all over Tamriel as Heart's Day. It seems that in every[0xFD] house, the Legend of the Lovers is being sung for the[0xFD] younger generation. In honor of these Lovers, Polydor[0xFD] and Eloisa, the inns of the %ct offer a[0xFD] free room for visitors. If such kindness had been[0xFD] given the Lovers, it is said, it would always be[0xFD] springtime in the world.[0xFD]"]
	},
	{
		id: 8360,
		lines: [
			"Perserverance Day is quite a party in Ykalon. It was[0xFD] originally held as a solemn memorial to those killed[0xFD] in battle, resisting the Camaron Usurper, but has[0xFD] since become a boisterous festival.[0xFD]"]
	},
	{
		id: 8361,
		lines: [
			"The villages in the Bantha celebrate the baser[0xFD] urges that come with Springtide on Aduros Nau.[0xFD] The traditions vary from village to village, but none[0xFD] of them are for the overly virtuous.[0xFD]"]
	},
	{
		id: 8362,
		lines: [
			"On the 7th of First Seed every year, the people of %cn[0xFD] celebrat First Planting, symbolically sowing the seeds[0xFD] for the autumn harvest. It is a festival of fresh[0xFD] beginnings, both for the crops and for the men and[0xFD] women of the %ct. Neighbors are reconciled[0xFD] in their disputes, resolutions are formed, bad habits[0xFD] dropped, the diseased cured. The clerics at the[0xFD] temples run a free clinic all day long to cure[0xFD] people of poisoning, different diseases, paralyzation,[0xFD] and the other banes found in the world of Tamriel.[0xFD]"]
	},
	{
		id: 8363,
		lines: [
			"The Day of Waiting is a very old holy day among[0xFD] certain settlements in the Dragontail Mountains.[0xFD] Every year at that time, a dragon is supposed to[0xFD] come out of the desert and devour the wicked, so[0xFD] everyone locks himself up inside.[0xFD]"]
	},
	{
		id: 8364,
		lines: [
			"Flower Day is another of the frivolous celebrations[0xFD] of High Rock. Children pick the new flowers of spring[0xFD] while older Bretons, cooped up all winter, come[0xFD] out to welcome the season with dancing and singing.[0xFD]"]
	},
	{
		id: 8365,
		lines: [
			"During the Festival of Blades, the people of the[0xFD] Alik'r Desert celebrate the victor of the first Redguard[0xFD] over a race of giant goblins. The story is considered[0xFD] a myth by most scholars, but the holiday is still[0xFD] very popular in the desert.[0xFD]"]
	},
	{
		id: 8366,
		lines: [
			"On Gardtide, the people of Tamarilyn Point hold a[0xFD] festival to honor Druagaa, the old goddess of[0xFD] flowers. Worship of the goddess is all but dead,[0xFD] but the celebration is always a great success.[0xFD]"]
	},
	{
		id: 8367,
		lines: [
			"The Day of the Dead is one of the more peculiar[0xFD] holidays of Daggerfall. The superstitious say that[0xFD] the dead rise on this holiday to wreak vengeance[0xFD] on the living. It is a fact that King Lysandus'[0xFD] spectre began its haunting on the Day of the[0xFD] Dead, 3E 404.[0xFD]"]
	},
	{
		id: 8368,
		lines: [
			"All along the seaside of Hammerfell, no one leaves[0xFD] their houses on the Day of Shame. It is said that[0xFD] the Crimson Ship, a vessel filled with victims of[0xFD] the Knahaten Plague who were refused refuge hundreds[0xFD] of years ago, will return on this day.[0xFD]"]
	},
	{
		id: 8369,
		lines: [
			"Be warned that today is Jester's Day in the[0xFD] %ct of %cn, and pranks are[0xFD] being set up from one end of town to the other.[0xFD] It is as if a spell has been cast over the[0xFD] community, for even the most taciturn and[0xFD] dignified councilman might attempt to play a[0xFD] joke on his %t. The Thieves Guild[0xFD] finds particular attention as everyone looks for[0xFD] pickpockets in particular.[0xFD]"]
	},
	{
		id: 8370,
		lines: [
			"The celebration of Second Planting is in full glory[0xFD] this day. It is a holiday with traditions similar to[0xFD] First Planting, improvements on the first seeding[0xFD] symbolically to suggest improvements on the soul.[0xFD] The free clinics of the temples are open for the[0xFD] second and last time this year, offering cures for[0xFD] those suffering from any kind of disease or affliction.[0xFD] Because peace and not conflict is stressed at this time,[0xFD] battle injuries are healed only at full price.[0xFD]"]
	},
	{
		id: 8371,
		lines: [
			"Marukh's Day is only observed by certain communities[0xFD] in Skeffington Wood. By comparing themselves to the[0xFD] virtuous prophet Marukh, the people of Skeffington[0xFD] Wood pray for the strength to resist temptation.[0xFD]"]
	},
	{
		id: 8372,
		lines: [
			"The Fire Festival in Northmoor is one of the most[0xFD] attended celebrations in High Rock. It began as a[0xFD] pompous display of magic and military strength in[0xFD] ancient days and has become quite a festival.[0xFD]"]
	},
	{
		id: 8373,
		lines: [
			"Fishing Day is a big celebration for the Bretons[0xFD] who live off the bounty of the Iliac Bay. They are[0xFD] not a usually flamboyant people, but on Fishing[0xFD] Day, they make so much noise, fish have been[0xFD] scared away for weeks.[0xFD]"]
	},
	{
		id: 8374,
		lines: [
			"The festival of Drigh R'Zimb, held in the hottest[0xFD] time of year in Abibon-Gora, is a jubilation held[0xFD] for the sun Daibethe itself. Scholars do not know[0xFD] how long Drigh R'Zimb has been held, but it is[0xFD] possible the Redguards brought the festival[0xFD] with them when they came in the first era.[0xFD]"]
	},
	{
		id: 8375,
		lines: [
			"Today is the 16th of Mid Year, the traditional day[0xFD] for the Mid Year Celebration. Perhaps to alleviate[0xFD] the annual news of the Emperor's latest tax increase,[0xFD] the %ct temples offer blessings for[0xFD] only half the donation they usually suggest. Many so[0xFD] blessed feel confident enough to enter the[0xFD] %lp dungeons when they are not fully[0xFD] prepared, so this joyous festival has often been[0xFD] known to turn suddenly into a day of defeat and tragedy.[0xFD]"]
	},
	{
		id: 8376,
		lines: [
			"Dancing Day is a time-honored holiday in Daggerfall.[0xFD] Who started it is questionable, but the Red Prince[0xFD] Atryck popularized it in the second era. It is an[0xFD] occasion of great pomp and merriment for all[0xFD] the people of Daggerfall, from the nobles down.[0xFD]"]
	},
	{
		id: 8377,
		lines: [
			"Tibedetha is middle Tamrielic for \"Tibers Day.\"[0xFD] It is not surprising that the lorddom of Alcaire[0xFD] celebrates its most famous native with a great[0xFD] party. Historically, Tiber Septim never returned[0xFD] once to his beloved birthplace.[0xFD]"]
	},
	{
		id: 8378,
		lines: [
			"The bargain shoppers of the known world are out in[0xFD] force today and it is little wonder, for the 10th[0xFD] of Sun's Height is a holiday called the Merchants'[0xFD] Festival. Every marketplace and equipment store[0xFD] has dropped their prices to at least half. The only[0xFD] shop not being patronized today is the Mages Guild,[0xFD] where prices are as exorbitant as usual. Most[0xFD] citizens in need of a magical item are waiting two[0xFD] months for the celebration of Tales and Tallows[0xFD] when prices will be more reasonable...[0xFD]"]
	},
	{
		id: 8379,
		lines: [
			"During Divat Etep't, the people of Antiphyllos[0xFD] mourn the death of the one of the greatest of the[0xFD] early Redguard heroes, Divat, son of Frandar of[0xFD] the Hel Ansei. His deeds are questioned by[0xFD] historians, but his tomb in Antiphyllos is[0xFD] almost certainly genuine.[0xFD]"]
	},
	{
		id: 8380,
		lines: [
			"You will have to wait until tomorrow if you are[0xFD] planning on making any equipment purchases, for[0xFD] all stores are closed in observance of Sun's Rest.[0xFD] Of course, the temples, taverns, and Mages Guild in[0xFD] the %ct are still open their regular[0xFD] hours, but most citizens chose to devote this day[0xFD] to relaxation, not commerce or prayer. This is not[0xFD] a convenient arrangement for all, but the[0xFD] Merchants' Guild heavily fines any shop that stays[0xFD] open, so everyone complies.[0xFD]"]
	},
	{
		id: 8381,
		lines: [
			"Few besides the natives of the Alik'r Desert[0xFD] would venture out on the hottest day of the year,[0xFD] Fiery Night. It's a lively celebration with a[0xFD] meaning lost in antiquity.[0xFD]"]
	},
	{
		id: 8382,
		lines: [
			"On the day of Maiden Katrica, the people of[0xFD] Ayasofya show their appreciation for the warrior[0xFD] that saved their county with the biggest party[0xFD] of the year.[0xFD]"]
	},
	{
		id: 8383,
		lines: [
			"Koomu Alezer'i means simply \"We Acknowledge\" in[0xFD] old Redguard, and it has been a tradition in[0xFD] Sentinel for thousands of years. No matter the[0xFD] harvest, the people of Sentinel solemnly thank[0xFD] the gods for their bounty, and pray to be[0xFD] worthy of the graces of the gods.[0xFD]",
			""]
	},
	{
		id: 8384,
		lines: [
			"The Feast of the Tiger in the Bantha rainforest[0xFD] is like other holidays in praise of a bountiful[0xFD] harvest. It is not, however, a solemn occasion[0xFD] for introspection and thanksgiving, but a great[0xFD] celebration and festival from village to village.[0xFD]"]
	},
	{
		id: 8385,
		lines: [
			"Appreciation Day in Anticlere is an ancient[0xFD] holiday of thanksgiving for a bountiful harvest[0xFD] for the people of Anticlere. It is considered[0xFD] a holy and contemplative day, devoted to Mara,[0xFD] the goddess-protector of Anticlere.[0xFD]"]
	},
	{
		id: 8386,
		lines: [
			"Perhaps no other festival fires the spirit of[0xFD] %cn as much as the one held[0xFD] today, Harvest's End. The work of the year is[0xFD] over, the seeding, sowing, and reaping. Now is[0xFD] the time to celebrate and enjoy the fruits of[0xFD] the harvest, and even visitors to %reg are[0xFD] invited to join the farmers. The taverns offer[0xFD] free drinks all day long, an extravagance[0xFD] before the economy of the coming winter months.[0xFD] Underfed farm hands gorging themselves and then[0xFD] getting sick in the town square are the most[0xFD] common sights of the celebration of Harvest's End.[0xFD]"]
	},
	{
		id: 8387,
		lines: [
			"No other holiday divides the people of %cn like[0xFD] the 3rd of Hearth Fire. A few of the oldest, more[0xFD] superstitious men and women do not speak all day[0xFD] long for fear that the evil spirits of the dead[0xFD] will enter their bodies. Most citizens enjoy the[0xFD] holiday, calling it Tales and Tallows, but even[0xFD] the most lighthearted avoid the dark streets of[0xFD] %cn, for everyone knows the dead[0xFD] do walk tonight. Only the Mages Guild completely[0xFD] thrives on this day. In celebration of the[0xFD] oldest magical science, necromancy, all magical[0xFD] items are half price today.[0xFD]"]
	},
	{
		id: 8388,
		lines: [
			"Every town and fellowship in the Wrothgarian[0xFD] Mountains celebrates Khurat, the day when the[0xFD] finest young scholars are accepted into the[0xFD] various priesthoods. Even those people without[0xFD] children of age go to pray for the wisdom and[0xFD] benevolence of the clergy.[0xFD]"]
	},
	{
		id: 8389,
		lines: [
			"Riglametha is celebrated on the twelfth of[0xFD] Hearth Fire every year in Lainlyn as a celebration[0xFD] of Lainlyns many blessings. Pageants are held on[0xFD] such themes as the Ghraewaj, when the daedra[0xFD] worshippers in Lainlyn were changed to harpies[0xFD] for their blasphemy.[0xFD]"]
	},
	{
		id: 8390,
		lines: [
			"Children's Day in Betony is a festive occasion[0xFD] with a grim history. All know though few choose[0xFD] to recall that Children's Day began as a[0xFD] memorial to the dozens of children in Betony[0xFD] who were stolen from their homes by vampires[0xFD] one night never to be seen again. This happened[0xFD] over a hundred years ago, and the holiday has[0xFD] since become a celebration of youth.[0xFD]"]
	},
	{
		id: 8391,
		lines: [
			"The fifth of Frost Fall marks Dirij Tereur for[0xFD] the people of the Alik'r Desert. It is a sacred[0xFD] day honoring Frandar Hund, the traditional[0xFD] spiritual leader of the Redguards who led them[0xFD] to Hammerfell in the first era. Stories are[0xFD] read from Hund's Book of Circles, and the[0xFD] temples in the region are filled to capacity.[0xFD]"]
	},
	{
		id: 8392,
		lines: [
			"Today is the 13th of Frostfall, known throughout[0xFD] Tamriel as the Witches' Festival when the forces[0xFD] of sorcery and religion clash. The Mages Guild gets[0xFD] most of the business since weapons and items are[0xFD] evaluated for their mystic potential free of charge[0xFD] and magic spells are one half their usual price.[0xFD] Demonologists, conjurors, lamias, warlocks, and[0xFD] thaumaturgists meet in the wilderness outside %cn,[0xFD] and the creatures created or summoned there may[0xFD] plague Tamriel for eons. Most wise men choose not[0xFD] to wander this night.[0xFD]"]
	},
	{
		id: 8393,
		lines: [
			"On the 23rd of Frost Fall in the 121st year of[0xFD] the first era, the empress Kintyra Septim II[0xFD] met her death in the imperial dungeons[0xFD] in Glenpoint on the orders of her cousin and[0xFD] usurper Cephorus I. Her death is remembered in[0xFD] Glenpoint as the day called Broken Diamonds.[0xFD] It is a day of silent prayer for the wisdom[0xFD] and benevolence of the imperial family of Tamriel.[0xFD]"]
	},
	{
		id: 8394,
		lines: [
			"Once the 30th of Frostfall, the Emperor's Birthday,[0xFD] was the most popular holiday of the year. Great[0xFD] traveling carnivals entertained the masses, while[0xFD] the aristocracy of %cn enjoyed the annual[0xFD] Goblin Chase on horseback. Recently, these[0xFD] traditions have fallen into neglect. It has been[0xFD] decades since there was a big carnival in[0xFD] %cn and longer still since a[0xFD] %t of the %ct sponsered a Goblin Chase.[0xFD]"]
	},
	{
		id: 8395,
		lines: [
			"The Serpents Dance in Satakalaam may or may not[0xFD] have begun as a serious religious holiday[0xFD] dedicated to a snake god, but in this day, it[0xFD] is a reason for a great street festival.[0xFD]"]
	},
	{
		id: 8396,
		lines: [
			"On the 8th of Suns Dusk, the Bretons of Glenumbra[0xFD] Moors hold the Moon Festival, a joyous holiday[0xFD] in honor of Secunda, goddess of the moon. Although[0xFD] the goddess has no active worshippers, the[0xFD] traditional celebration has continued through[0xFD] the ages as a time of feasting and merriment.[0xFD]"]
	},
	{
		id: 8397,
		lines: [
			"Hel Anseilak, which means \"Communion with the[0xFD] Saints of the Sword\" in Old Redguard is the[0xFD] most serious of holy days for the people of[0xFD] Pothago. The ancient way of Hel Ansei is never[0xFD] practiced by modern Redguards, but its rich[0xFD] heritage is remembered and honored on this day.[0xFD]"]
	},
	{
		id: 8398,
		lines: [
			"Today is the 20th of Sun's Dusk, the Warriors[0xFD] Festival in %cn. Most all the[0xFD] local warriors, spellswords, and rogues come[0xFD] to the equipment stores and blacksmiths where[0xFD] all weapons are half price. Unfortunately,[0xFD] the low prices also tempt many an untrained[0xFD] boy to buy his first sword and the normally[0xFD] quiet %cn streets ring with[0xFD] amateur skirmishes. The %t has[0xFD] pardoned most of these ruffians in the past,[0xFD] but has promised to be less merciful this year.[0xFD]"]
	},
	{
		id: 8399,
		lines: [
			"Today is the 15th of Evening Star, a holiday[0xFD] reverently observed by the temples as North[0xFD] Wind's Prayer. It is a thanksgiving to the Gods[0xFD] for a good harvest and a mild winter. Some years,[0xFD] like this one, the harvest was not particularly[0xFD] good and the winter unseasonally harsh in[0xFD] %cn, but as the %t is fond of saying,[0xFD] \"It could be much worse.\" The temples offer all[0xFD] their services blessing, curing, healing for[0xFD] half the donation usually requested.[0xFD]"]
	},
	{
		id: 8400,
		lines: [
			"Baranth Do is celebrated on the 18th of Evening[0xFD] Star by the Redguards of the Alik'r Desert. Its[0xFD] meaning is \"Goodbye to the Beast of Last Year.\"[0xFD] Pageants featuring demonic representations of[0xFD] the old year are popular, and revelry to honor[0xFD] the new year is everywhere.[0xFD]"]
	},
	{
		id: 8401,
		lines: [
			"Chil'a, the blessing of the new year in the[0xFD] barony of Kairou, is both a sacred day and a[0xFD] festival. The archpriest and the baroness[0xFD] each consecrate the ashes of the old year in[0xFD] solemn ceremony, then street parades, balls,[0xFD] and tournaments conclude the event.[0xFD]"]
	},
	{
		id: 8402,
		lines: [
			"The New Life festival comes a few days early[0xFD] in Wayrest with Saturalia, traditionally held[0xFD] on the 25th of Evening Star. Originally a[0xFD] holiday for a long forgotten god of debauchery,[0xFD] it has become a time of gift giving, parties,[0xFD] and parading. Visitors are encouraged[0xFD] to participate.[0xFD]"]
	},
	{
		id: 8403,
		lines: [
			"On the last day of the year the Empire celebrates[0xFD] the holiday called Old Life. Many go to the temples[0xFD] to reflect on their past. Some go for more than[0xFD] this, for it is rumored that priests will as the[0xFD] last act of the year perform resurrections on[0xFD] beloved friends and family members free of the[0xFD] usual charge. Worshippers know better than to[0xFD] expect this philanthropy, but they arrive in a[0xFD] macabre procession with the recently deceased[0xFD] nevertheless.[0xFD]"]
	},
	{
		id: 8525,
		lines: [
			"when ale flows free in all the taverns in all the cities of Tamriel.",
			"the biggest party of the year!",
			"a huge drunken orgy I really don't approve of.",
			"when everyone goes wild 'cause the drinks are free everywhere.",
			"the time when free drinks turns everyone out on the street."]
	},
	{
		id: 8526,
		lines: [
			"when the temple will occasionally perform free healings.",
			" the time when everyone prays for a good planting season.",
			" a majorreligious holiday here in %cn.",
			"when I can get this festering sore on my foot healed, maybe for free!",
			" held over at the temple, where the clergy sometimes heals the sick for free.",
			""]
	},
	{
		id: 8527,
		lines: [
			"when tavern rooms all over Tamriel are free for the night.",
			"when my family gets together to sing 'The Legend of the Lovers.'",
			"a great time for getting a good room at the %nt for free!",
			"when, in honor of Polydor and Eloisa, rooms may be had for free in any inn.",
			"the celebration in honor of the Lovers, Polydor and Eloisa."]
	},
	{
		id: 8528,
		lines: [
			"when I might be cured of my... social disease at no charge.",
			"the holiday when disputes between neighbors are cleared up. In theory, of course.",
			"a good time to visit the temple. They cure people of all sorts of diseases for free then.",
			"one of the two times the clerics at the temple won't demand a donation for curing you.",
			"when everyone makes resolutions they never intend to keep."]
	},
	{
		id: 8529,
		lines: [
			"when you really have to be on the lookout for pickpockets.",
			"a great time to be in %cn, if you're a thief.",
			"a little too much revelry than I'm accustomed to.",
			"when everyone's a jester and a thief.",
			"one holiday too vulgar to be believed, in my opinion."]
	},
	{
		id: 8530,
		lines: [
			"when you can see every diseased %ra in %cn heading for the temple for a free cure.",
			"a good time to see the clerics at the temple if you're poisoned or sick.",
			"my last chance to get a free cure for my scabies at the temple. Until next year.",
			"the perfect time to get your diseases cured at the temple for free.",
			"when everyone is supposed to realize his own limitations, supposedly."]
	},
	{
		id: 8531,
		lines: [
			"when the Emperor will probably announce yet another tax increase.",
			"when the temple offers blessings for half price.",
			"when the Emperor's heralds go all over Tamriel, mostly to announce new taxes.",
			"a good time to visit the temple if you don't mind the lines, blessing are half price.",
			"when requested donations for blessings at the temple are at half their usual price."]
	},
	{
		id: 8532,
		lines: [
			"when everyone in %cn goes shopping for the best bargains of the year.",
			"the best time to buy all the equipment and supplies you might need.",
			"when supplies most everywhere in Tamriel are half-price, by order of the Guild.",
			"the busiest shopping day of the year, bar none.",
			"a day worth spending all the money you've saved, believe me."]
	},
	{
		id: 8533,
		lines: [
			"when all the stores in %cn, maybe in all Tamriel, are closed.",
			"a day worth remembering, 'cause you can't do any shopping then.",
			"when everyone goes crazy, because there's not a shop open in all %cn.",
			"when people have to take a trip out to the country if they want to buy something.",
			"the day the business quarter of %cn looks utterly deserted."]
	},
	{
		id: 8534,
		lines: [
			"when everyone in %cn, even people with no money, visits the taverns for a food orgy.",
			"the day when gluttony is encouraged all over Tamriel.",
			"an excellent time to sample drinks in every tavern in %cn for free!",
			" when food is free and drinks are free in almost every inn in Tamriel.",
			"the food festival celebrating a successful harvest, even if it's not successful at all."]
	},
	{
		id: 8535,
		lines: [
			"when magical items are half price in the Mages Guild.",
			"the day all temples in %cn are closed to the public so the clergies may pray for the dead.",
			"when the undead walk the streets of %cn.",
			"the best day to pick up a magical item cheaply over at the Mages Guild.",
			"a bad time to get sick, for all the temples all over Tamriel close for prayers."]
	},
	{
		id: 8536,
		lines: [
			"the day the temples and Mages Guild vie for attention. Guess whose side I'm on.",
			"when you can get any item evaluated for mystic potential at the Mages Guild for free.",
			"when this %ct is filled to her edges with Mages, Nightblades, and Spellswords.",
			"a good day to buy a cheap spell scroll at the Mages Guild if you get there early.",
			"when every temples in Tamriel is open all night long to combat evil."]
	},
	{
		id: 8537,
		lines: [
			"when we had parades and hunts ... in the good old days.",
			"the day the aristocrats in %cn used to have the horseback Goblin Chase in the old days.",
			"not the Emperor's real birthday - it's all symbolic, you know.",
			"when everyone celebrates in the taverns.",
			"in honor of the Emperor's forty-somethingth year in Tamriel."]
	},
	{
		id: 8538,
		lines: [
			"a good time to pick up a sword or whatever cheap in one of the equipment stores.",
			"when all weapons in all equipment stores are half price.",
			"the day when the warriors of %cn test their mettle, unfortunately in the streets.",
			"a truly barbaric celebration of warfare.",
			"the perfect time to buy a weapon you couldn't ordinarily afford."]
	},
	{
		id: 8539,
		lines: [
			"the holiest day of the year, in my opinion.",
			"when you can get blessed, cured, healed, the works in the temple for half price.",
			"a day of thanksgiving.",
			"when the temple ask only half the usual donation for any of the services there.",
			"a pretty good time to get fixed up by the temple for a reasonable donation."]
	},
	{
		id: 8540,
		lines: [
			"when all prepare for the real party - New Life, the next day.",
			"the day we ask forgiveness for old sins, before committing new ones.",
			"a day of rest before New Life, which is one big party.",
			"a good time to go to the temple of your choice.",
			"when even unpopular temples in %cn are packed with people."]
	},
	{
		id: 8550,
		lines: [
			"Yes %hnr. I am also a member of %fpc, and am at your disposal.[0xFD]",
			"I am a loyal member of %fpc. Honored %hnr, what is your wish?[0xFD]",
			"As a member of %fpc, I am yours to command, %hnr.[0xFD]",
			"I am always glad to help.[0xFD]"]
	},
	{
		id: 8551,
		lines: [
			"Its always good to meet another member of %fnpc.[0xFD]",
			"%fnpc member? I thought so. Glad to help.[0xFD]",
			"Fellow members of %fnpc have to stick together.[0xFD]",
			"What can I do for you?[0xFD]"]
	},
	{
		id: 8552,
		lines: [
			"I have heard of you, %pcn. As a fellow[0xFD] member of %fnpc, I am embarrassed to be seen[0xFD] with you.[0xFD]",
			"I don't care if you are in %fnpc. I m not[0xFD] helping the likes of you.[0xFD]",
			"Just because you are also in %fnpc, doesn't[0xFD] mean I have to help you.[0xFD]",
			"I don't have time for this. I have places to be.[0xFD]"]
	},
	{
		id: 8553,
		lines: [
			"For an honored member of %fpc, I am glad to help.[0xFD]",
			"Yes, %hnr. I am in %fnpc, and grateful for the chance to assist you.[0xFD]",
			"%fnpc and %fpc are one and the same, %hnr. What do you need?[0xFD]"]
	},
	{
		id: 8554,
		lines: [
			"We of %fnpc are always willing to help members of %fpc. After all, we are both part of %fpa.[0xFD]",
			"I'm in %fnpc, you're in %fpc, we're both in %fpa.[0xFD]",
			"Any member of %fpa deserves my assistance.[0xFD]",
			"Hello.[0xFD]"]
	},
	{
		id: 8555,
		lines: [
			"I know %fnpc and %fpc are both part of %fpa,[0xFD] but that doesn't obligate me to help you.[0xFD]",
			"I don t care if we are both under the %fpa,[0xFD] I don t trust you. Shove off.[0xFD]",
			"Being under the thumb of %fpa doesn't mean[0xFD] I have to help you.[0xFD]",
			"Go away. You bother me.[0xFD]"]
	},
	{
		id: 8556,
		lines: [
			"I know you! %fpc thinks quite highly of you.[0xFD]",
			"As a member of %fnpc, it behooves me to help a well respected member of %fpc such as yourself.[0xFD]",
			"You're that %ra in %fpc that everyone is talking about. I'm in %fnpc.[0xFD]",
			" Nice day, eh?[0xFD]"]
	},
	{
		id: 8557,
		lines: [
			"%fnpc and %fpc are allies. Of course I ll help you.[0xFD]",
			"%fpc? I'm in %fnpc![0xFD]",
			"%fpc has treated %fnpc with great respect. I am glad to help.[0xFD]",
			"And you need...?[0xFD]"]
	},
	{
		id: 8558,
		lines: [
			"I know %fnpc and %fpc are allied, but I[0xFD] just don't like your attitude.[0xFD]",
			"Our factions may be allied, but I ve heard[0xFD] about you %pfn. Don t think that entitles you[0xFD] to my help.[0xFD]",
			"%fpc? The other sots in %fnpc may like them,[0xFD] but I don t. Take your ugly face elsewhere.[0xFD]",
			"I have more important things to do than stand[0xFD] here answering your foolish questions.[0xFD]"]
	},
	{
		id: 8559,
		lines: [
			"Well...%fnpc and %fpc are enemies, but you are highly respected.[0xFD]",
			"I m in %fnpc. We don t normally deal with those in %fpc, but I know they hold you in high esteem.[0xFD]",
			"If I do this, you owe me one. Even though I dislike %fpc, I will help.[0xFD]",
			"I'm always glad to help.[0xFD]"]
	},
	{
		id: 8560,
		lines: [
			"You've convinced me. Even though I dislike %fpc, I will help.[0xFD]",
			"%fnpc and %fpc are enemies, but I've always thought %fpc were a decent sort.[0xFD]",
			"Even though %fnpc is opposed to %pc, courtesy dictates that I help you.[0xFD]",
			"What is it?[0xFD]"]
	},
	{
		id: 8561,
		lines: [
			"Filthy %fpc. No loyal %fnpc would help your kind.[0xFD]",
			"%fpc? I wouldn t help you cross the street.[0xFD]",
			"I'm in %fnpc. We hate %fpc. Get lost.[0xFD]",
			"Why should I? Now step aside.[0xFD]"]
	},
	{
		id: 8562,
		lines: [
			"%fpc and %fnpc are both enemys of %fe. What can I do to help you?[0xFD]",
			"I despise %fe, and so does %fpc. Sure I ll help you.[0xFD]",
			"Any enemy of %fe is a friend of mine.[0xFD]",
			"Hi.[0xFD]"]
	},
	{
		id: 8563,
		lines: [
			"I don't care that you and I both hate[0xFD] %fe. I'm not helping you.[0xFD]",
			"%fnpc may dislike %fe, but I like them.[0xFD] %fpc is persecuting them, so I'm not about[0xFD] to help you.[0xFD]",
			"%fpc and %fnpc[0xFD] are both after %fe. I'm not[0xFD] about to get in the middle.[0xFD] Just forget you ever saw me.[0xFD]",
			"Idiot. I don't have the patience for your kind.[0xFD]"]
	},
	{
		id: 8564,
		lines: [
			"I am a member of %fnpc. Any friend of %fa is a friend of mine.[0xFD]",
			"You're in %fpc? I'm in %fnpc! We are both allied to %fa! Anyway, I'm always glad to help.[0xFD]",
			"%fpc is buddy-buddy with %fa. Sure I'll help.[0xFD]",
			"You look familiar. What do you need?[0xFD]"]
	},
	{
		id: 8565,
		lines: [
			"%fpc and %fnpc[0xFD] may both be allied to %fa,[0xFD] but I'm not a friend of yours.[0xFD]",
			"Look, %fnpc likes %fa,[0xFD] but I don t. %fpc is also[0xFD] cozy with them. Now you know why I wouldn't give you the time of day.[0xFD]",
			"How pedestrian. I'm bored.[0xFD]"]
	},
	{
		id: 8566,
		lines: [
			"Even though you're allied to %fae, whom members of %fnpc such as myself dislike, I think I can help you.[0xFD]",
			"I don't really like friends of %fae, but I'll make an exception in your case.[0xFD]",
			"As a loyal member of %fnpc I really shouldn't help any friend of %fae. But you ve talked me into it.[0xFD]",
			"I suppose you want my help?[0xFD]"]
	},
	{
		id: 8567,
		lines: [
			"Aren't you a member of %fpc?[0xFD] They're allied to %fae,[0xFD] who are the enemy of %fnpc.[0xFD] I won't help your sort.[0xFD]",
			"I hate %fae, and their friends.[0xFD] Buzz off.[0xFD]",
			"Aren't %fpc cozy with[0xFD] %fae? I m of %fnpc.[0xFD] I can't stand %fae.[0xFD] Just get out of here.[0xFD]",
			"I couldn t help you even if[0xFD] I wanted to, which I don't.[0xFD]"]
	},
	{
		id: 8568,
		lines: [
			"Look, don't tell any of my fellow %fnpc that I helped you. %fpc are enemies of %fea, while we are their friends.[0xFD]",
			"I have no love for %fea, even though %fnpc is in bed with them. I'll help you, but don't spread it around.[0xFD]",
			"I really shouldn't help enemies of %fea. After all, their friends of %fnpc. But I ll make an exception in your case.[0xFD]",
			"Good day.[0xFD]"]
	},
	{
		id: 8569,
		lines: [
			"We of %fnpc are allied with[0xFD] %fea. %fpc are[0xFD] it's enemy. Why should I help you?[0xFD]",
			"I don t help those of %fpc.[0xFD] At least not until they cease bickering[0xFD] with my friends in %fea.[0xFD]",
			"My best friend is in %fea. You %fpc hates[0xFD] them, so get out of my face![0xFD]",
			"Your breath stinks. Get away from me.[0xFD]"]
	},
	{id: 8570, lines: [
			"Well met, stranger.[0xFD]"]},
	{
		id: 8571,
		lines: [
			"Why would I help a complete stranger,[0xFD] especially one with your reputation?[0xFD]",
			"I despise your kind. Just go away.",
			"I've heard of you. Nothing good of course. Get lost.",
			"I don't have time for your type.",
			"Me? Help you? Ha-ha-ha!"]
	},
	{id: 8600, lines: [
			"Insert action type 11 here... (do not translate)"]},
	{
		id: 8604,
		lines: [
			"A familiar voice laughs mockingly,[0xFD] \"So, %pcn, come to pay[0xFD] your respects properly at last?\"[0xFD]"]
	},
	{
		id: 8605,
		lines: [
			"Hear me:[0xFD] The Blind God is a jealous god.[0xFD] Let His true servants lift up their eyes[0xFD] unto Him, and the Way will be easy.[0xFD] Hear me![0xFD]"]
	},
	{
		id: 8607,
		lines: [
			"Ah, at last!  I was beginning to think you[0xFD] wouldn't get this far.  A dreary place, don't[0xFD] you agree?  And guarded by a pompous upstart--[0xFD] he's no more a god than I am.  Well, carry on.[0xFD] We will meet again soon, unless you are not as[0xFD] foolhardy as you appear.[0xFD]"]
	},
	{id: 8609, lines: [
			"Here lies the spirit of Benefactor,[0xFD] though his body still guards the way.[0xFD]"]},
	{
		id: 8616,
		lines: [
			"The guard by the door intones in a bored voice,[0xFD] \"All those having business with Queen Akorithi[0xFD] pass through the door at the back of the hall.\"[0xFD]"]
	},
	{
		id: 8617,
		lines: [
			"The guard by the door intones in a bored voice,[0xFD] \"All those having business with Queen Akorithi[0xFD] pass through the door at the back of the hall[0xFD] on the right hand side.\"[0xFD]"]
	},
	{
		id: 8690,
		lines: [
			"Game Hint![0xFD] [0xFD] The easiest way to get back your lost health[0xFD] is to rest. However, the game won't let you do[0xFD] that if there are monsters near by. Kill the[0xFD] monster behind this door, and the one in the next[0xFD] room down the hall. Then you will be allowed to[0xFD] rest and recover lost health.[0xFD]"]
	},
	{
		id: 8691,
		lines: [
			"Game Hint![0xFD] [0xFD] This corner is a good place to rest. Don't get[0xFD] too close to the stairs, or you'll wake up a[0xFD] monster![0xFD]"]
	},
	{
		id: 8692,
		lines: [
			"Game Hint![0xFD] [0xFD] If you have difficulty getting onto the platform,[0xFD] try jumping with the J key. You must be moving[0xFD] forward at the time. The faster you are moving,[0xFD] the further you jump.[0xFD]"]
	},
	{
		id: 8693,
		lines: [
			"Game Hint![0xFD] [0xFD] You should be looking for the exit about now.[0xFD] It is a tall, narrow archway showing stairs[0xFD] leading off into darkness. When you see it, click[0xFD] on it to exit the dungeon.[0xFD]"]
	},
	{
		id: 8700,
		lines: [
			"(caster only)[0xFC] [0xFC] Ever the vain one, Clavicus Vile made a[0xFC] masque suited to his own personality.[0xFC] The bearer of the masque is more likely[0xFC] to get a positive response from the[0xFC] people of Tamriel. The higher his[0xFC] personality, the larger the bonus. The[0xFC] best known story of the masque tells the[0xFC] tale of Avalea, a noblewoman of some[0xFC] renown. As a young girl, she was grossly[0xFC] disfigured by a spiteful servant. Avalea[0xFC] made a dark deal with Clavicus Vile and[0xFC] received the masque in return. Though the[0xFC] masque did not change her looks, suddenly[0xFC] she had the respect and admiration of[0xFC] everyone. A year and a day after her[0xFC] marriage to a well connected baron,[0xFC] Clavicus reclaimed his masque. Although[0xFC] pregnant with his child, Avalea was[0xFC] banished from the baron's household.[0xFC] Twenty one years and one day later,[0xFC] Avalea's daughter claimed her vengeance[0xFC] by slaying the baron.[0xFC] [0xFC] Spells: None[0xFC]"]
	},
	{
		id: 8701,
		lines: [
			"(1 target, save vs. magic)[0xFC] [0xFC] The Dark Brotherhood has covetted this[0xFC] ebony dagger for generations. This[0xFC] mythical artifact is capable of slaying[0xFC] any creature instantly. Victims of the[0xFC] Razor must save vs. magic or be slain.[0xFC] History does not record any bearers of[0xFC] Mehrunes  Razor. However, eighty years[0xFC] ago the Dark Brotherhood was decimated[0xFC] by a vicious internal power struggle. It[0xFC] is suspected that the razor was involved.[0xFC] [0xFC] Spells: None[0xFC]"]
	},
	{
		id: 8702,
		lines: [
			"(1 target, save vs. magic)[0xFC] [0xFC] Also known as the Vampire's Mace, the[0xFC] Mace of Molag Bal drains its victims of[0xFC] spell points and gives them to the[0xFC] bearer. If the victim has no spell[0xFC] points, he is drained of strength, which[0xFC] is also transferred to the wielder. Using[0xFC] the Mace of Molag Bal can actually give[0xFC] its bearer more spell points or more[0xFC] strength than he would have fully rested.[0xFC] However, these bonus points are temporary.[0xFC] Molag Bal has been quite free with his[0xFC] artifact. There are many legends about[0xFC] the mace. It seems to be a favorite for[0xFC] vanquishing mad wizards.[0xFC] [0xFC] Spells: none[0xFC]"]
	},
	{
		id: 8703,
		lines: [
			"(caster only)[0xFC] [0xFC] The curse of lycanthropy has its[0xFC] advantages. The incredible strength, speed,[0xFC] ferocity of a werebeast make it a fearsome[0xFC] opponent. There are, of course,[0xFC] disadvantages. The bearer of the Hircine[0xFC] Shield can choose when to be a lycanthrope[0xFC] and when not. Essentially this gives him[0xFC] all the advantages with few of the[0xFC] negatives.[0xFC] [0xFC] Spells: None[0xFC]"]
	},
	{
		id: 8704,
		lines: [
			"(caster only)[0xFC] [0xFC] The Sanguine Rose is not an artifact[0xFC] most folk would care to have. It summons[0xFC] a lesser daedra to the user. The daedra[0xFC] will attack any other creature in the area[0xFC] except the bearer of the rose. The rose[0xFC] is like any other in that it will wilt.[0xFC] The more of its power that is used, the[0xFC] more wilted it becomes. Eventually all its[0xFC] petals fall off and it loses its powers.[0xFC] Somewhere in Oblivion a new rose blooms[0xFC] and is plucked by Sanguine herself to be[0xFC] given to a new champion.[0xFC] [0xFC] Spells: None[0xFC]"]
	},
	{
		id: 8705,
		lines: [
			"(caster only)[0xFC] [0xFC] The Oghma Infinium is a tome of[0xFC] knowledge written by the Ageless One,[0xFC] the wizard-sage Xarses. All who read the[0xFC] Infinium are filled with the energy of[0xFC] the artifact which can be manipulated to[0xFC] raise one s abilities to near demi-god[0xFC] proportions. Once used, legend has it,[0xFC] the Infinium will disappear from its[0xFC] wielder. It leaves one with 30 bonus[0xFC] points to distribute among the character's[0xFC] attributes as one wants.[0xFC] [0xFC] Spells: None[0xFC]"]
	},
	{
		id: 8706,
		lines: [
			"(1 target, save vs. magic)[0xFC] [0xFC] Madness and chaos are the trademarks of[0xFC] Sheogorath. The Wabbajack embodies these[0xFC] same traits. Using the artifact on a[0xFC] creature will transform it into something[0xFC] else. The creature can become any one of[0xFC] the following monsters: rat, imp, spriggan,[0xFC] giant bat, grizzly bear, spider, nymph,[0xFC] harpy, skeletal warrior, giant, zombie,[0xFC] giant scorpion, iron atronach, flesh[0xFC] atronach, ice atronach, fire atronach,[0xFC] lich. The problem is the bearer has no way[0xFC] of controlling the transformation. He[0xFC] could change a giant bat into a lich, or[0xFC] a fire atronach into a rat.[0xFC] [0xFC] Spells: None[0xFC]"]
	},
	{
		id: 8707,
		lines: [
			"(caster only)[0xFC] [0xFC] Namira is aligned with the darker side[0xFC] of nature, as is her ring. While the ring[0xFC] is being worn, any damage the bearer[0xFC] takes is suffered by the attacker as well.[0xFC] Spells and missile attacks are ignored.[0xFC] How much damage the attacker suffers[0xFC] depends upon his nature. Animals and[0xFC] Spriggans take no damage, being creatures[0xFC] of natures. Daedric beings only take half[0xFC] the damage they do, being supernatural[0xFC] creatures. Humanoids and monsters take[0xFC] full damage. Undead take twice the damage[0xFC] they dole out, because they are wholly[0xFC] unnatural creatures.[0xFC] [0xFC] Spells: None[0xFC] Casting Cost: Equal to the damage done[0xFC] to the opponent.[0xFC]"]
	},
	{
		id: 8708,
		lines: [
			"(1 target, save vs. magic)[0xFC] [0xFC] Using the Skull of Corruption on an[0xFC] opponent creates a duplicate of the[0xFC] victim. However, this duplicate will[0xFC] attack the original, not the wielder[0xFC] of the Skull. There is a story about[0xFC] the Thieves Guild Master and the skull[0xFC] that is probably fiction, but highly[0xFC] amusing. The Master used the skull on[0xFC] her enemy, creating a clone of him to[0xFC] fight. After defeating the original,[0xFC] the clever duplicate snatched the Skull[0xFC] from the Master and used it on her.[0xFC] Although the cloned enemy could not[0xFC] directly attack the Master, it could[0xFC] use the Skull to create a duplicate[0xFC] Master. The two clones jointly ruled[0xFC] the Thieves Guild for years.[0xFC] [0xFC] Spells: None[0xFC]"]
	},
	{
		id: 8709,
		lines: [
			"(1 target, save vs. magic)[0xFC] [0xFC] Few mortals have the stomach to trade[0xFC] in souls. The Dark Brotherhood does it,[0xFC] as do certain groups within the Mages[0xFC] Guild. For these cruel folk, Azura's Star[0xFC] has a particular fascination. The Star[0xFC] acts as a reusable soul gem. The soul of[0xFC] any creature killed by the bearer of the[0xFC] Star is trapped within it. If the Star[0xFC] already carries a soul, nothing happens.[0xFC] Using Azura s Star empties it, freeing[0xFC] the trapped soul to make its journey to[0xFC] Oblivion. Azura's Star can be used to[0xFC] make magical items over and over and over.[0xFC] [0xFC] Spells: None[0xFC]"]
	},
	{
		id: 8710,
		lines: [
			"(1 target at touch, save versus magic)[0xFC] [0xFC] The Hammer of Might, Volendrung is said[0xFC] to have been created by the Dwarves of[0xFC] the now abandoned clan of Rourken,[0xFC] hundreds of years before they disappeared[0xFC] from the world of Tamriel. It has the[0xFC] ability to grant health to its wielder,[0xFC] but it is best known for the paralyzing[0xFC] and strength leeching effects it has when[0xFC] cast at an enemy. Like the Dwarves who[0xFC] created it, Volendrung is prone to[0xFC] disappearing suddenly, resurfacing[0xFC] sometimes in days, sometimes in eons.[0xFC] [0xFC] Spells: Paralysis, and vampiric touch[0xFC]"]
	},
	{
		id: 8711,
		lines: [
			"(caster only)[0xFC] [0xFC] The Warlock s Ring of the Arch-Mage[0xFC] Syrabane is one of the most popular[0xFC] relics of myth and fable. In Tamriel's[0xFC] ancient history, Syrabane saved all of[0xFC] the continent by judicious use of his[0xFC] Ring, and ever since, it has helped[0xFC] adventurers with less lofty goals. It[0xFC] is best known for its ability to reflect[0xFC] spells cast at its wearer and to improve[0xFC] his or her speed and health, though it[0xFC] may have additional powers. No adventurer[0xFC] can wear the Warlock s Ring for long,[0xFC] for it is said the Ring is Syrabane's[0xFC] alone to command.[0xFC] [0xFC] Spells: Shalidor s mirror, heal,[0xFC] and feet of Notorgo[0xFC]"]
	},
	{
		id: 8712,
		lines: [
			"(1 target at range, save versus magic)[0xFC] [0xFC] Auriel's Bow appears as a modest Elven[0xFC] Longbow, but it is one of the mightiest[0xFC] ever to exist in Tamriel's history.[0xFC] Allegedly created and used, like its[0xFC] sister Auriel's Shield, by the great[0xFC] Elvish demi-god, the Bow can turn any[0xFC] arrow into a missile of death and[0xFC] destruction. Without Auriel's power[0xFC] behind it, however, the bow uses its[0xFC] own store of energy for its power. Once[0xFC] exhausted of this energy, the bow will[0xFC] vanish and reappear whereever chance[0xFC] puts it. Its most recent appearances[0xFC] have been the subject of gossip for[0xFC] hundreds of years.[0xFC] [0xFC] Spells: Lightning, hand of sleep,[0xFC] and magicka leech[0xFC]"]
	},
	{
		id: 8713,
		lines: [
			"(caster only)[0xFC] [0xFC] The legendary Necromancer's Amulet, the[0xFC] last surviving relic of the mad sorceror[0xFC] Mannimarco, grants any spellcaster who[0xFC] wears it the ability to regenerate from[0xFC] injury, and absorb magicka. The bearer[0xFC] also becomes wise beyond his years. This[0xFC] artifact is popular amongst mages. It is[0xFC] the one flaw of the Amulet that it is[0xFC] unstable in this world forever doomed to[0xFC] fade in and out of existence, reappearing[0xFC] at locations distant from that of its[0xFC] disappearance.[0xFC] [0xFC] Spells: Troll s blood and wisdom[0xFC]"]
	},
	{
		id: 8714,
		lines: [
			"(caster only)[0xFC] [0xFC] Chrysamere, the Paladin,s Blade and Sword[0xFC] of Heroes, is an ancient claymore with[0xFC] offensive capabilities only surpassed by[0xFC] its defenses. It lends the wielder health,[0xFC] protects him or her from fire, and reflects[0xFC] any deletory spells cast against the[0xFC] wielder back to the caster. Seldom has[0xFC] Chrysamere been wielded by a bladesman for[0xFC] any length of time, for it chooses not to[0xFC] favor one champion.[0xFC] [0xFC] Spells:   Resist fire, Shalidor s mirror,[0xFC] and heal[0xFC]"]
	},
	{
		id: 8715,
		lines: [
			"(caster only)[0xFC] [0xFC] The Lord's Mail, sometimes called the[0xFC] Armor of Morihaus, the Gift of Kynareth,[0xFC] is an ancient cuirass of unsurpassable[0xFC] quality. It grants the wearer the power[0xFC] to regenerate lost health, resist the[0xFC] effects of spells, and cure oneself of[0xFC] poison when used. It is said that whenever[0xFC] Kynareth deigns the wearer unworthy, the[0xFC] Lord's Mail will be taken away and hidden[0xFC] for the next chosen one.[0xFC] [0xFC] Spells: Cure poison and spell shield[0xFC]"]
	},
	{
		id: 8716,
		lines: [
			"(caster only)[0xFC] [0xFC] The Staff of Magnus, one of the elder[0xFC] artifacts of Tamriel, was a metaphysical[0xFC] battery of sorts for its creator, the[0xFC] Arch-Mage Magnus. When used, it[0xFC] regenerates the wielder s health at[0xFC] remarkable rates. In time, the Staff will[0xFC] abandon the bearer who wields it before[0xFC] he becomes too powerful and upsets the[0xFC] mystical balance it is sworn to protect.[0xFC] [0xFC] Spells: Spell absorption[0xFC]"]
	},
	{
		id: 8717,
		lines: [
			"(caster only)[0xFC] [0xFC] The Ring of the Khajiiti is an ancient[0xFC] relic, hundreds of years older than[0xFC] Rajhin, the thief who made the Ring[0xFC] famous. It was Rajhin who used the Ring's[0xFC] powers to make himself as invisible,[0xFC] silent, and quick as a breath of wind.[0xFC] Using the Ring he became the most[0xFC] successful burglar in Elsweyr s history.[0xFC] Rajhin s eventual fate is a mystery, but[0xFC] according to legend, the Ring rebelled[0xFC] against such constant use and disappeared,[0xFC] leaving Rajhin helpless before his enemies.[0xFC] [0xFC] Spells: Invisibility and feet of Notorgo[0xFC]"]
	},
	{
		id: 8718,
		lines: [
			"(caster only)[0xFC] [0xFC] The Ebony Mail is an artifact created[0xFC] before recorded history, according to[0xFC] legend, by the Dark Elven goddess[0xFC] Boethiah. It is she who determines who[0xFC] should possess the Mail and for how long[0xFC] a time. If judged worthy, its power grants[0xFC] the wearer invulnerability to all common[0xFC] magical attacks that drain talents and[0xFC] health. It is Boethiah alone who[0xFC] determines when a person is ineligible[0xFC] to bear the Ebony Mail any longer, and[0xFC] the goddess can be very capricious.[0xFC] [0xFC] Spells: Resist fire, shield,[0xFC] and spell shield[0xFC]"]
	},
	{
		id: 8719,
		lines: [
			"(caster only)[0xFC] [0xFC] Auriel's Shield, an Ebony shield said[0xFC] to have once belonged to the quasi-[0xFC] mythical Elvish deity Auriel, can make[0xFC] its wielder nigh invulnerable. In its[0xFC] resistance to fire and magick, Auriel's[0xFC] Shield is unsurpassed. Like many[0xFC] artifacts of Tamriel, the Shield has[0xFC] life and personality of its own, and[0xFC] does not feel bound to its user. A[0xFC] popular fable tells the tale of it[0xFC] abandoning one wielder in her greatest[0xFC] hour of need, but this is perhaps[0xFC] apocryphal.[0xFC] [0xFC] Spells: Resist fire, shield,[0xFC] and spell reflection[0xFC]"]
	},
	{
		id: 8720,
		lines: [
			"(caster only)[0xFC] [0xFC] Spell Breaker, superficially a Dwarven[0xFC] tower shield, is one of the most ancient[0xFC] relics of Tamriel. Aside from its historic[0xFC] importance dating from the Battle of[0xFC] Rourken-Shalidor, the Spell Breaker[0xFC] protects its wielder almost completely[0xFC] from any spellcaster, either by dispelling[0xFC] magicks or silencing any mage about to[0xFC] cast a spell. It is said that the Breaker[0xFC] still searches for its original owner,[0xFC] and will not remain the property of any[0xFC] one else for long. For most, possessing[0xFC] Spell Breaker for any time is power enough.[0xFC] Spells: Free action and spell reflection[0xFC]"]
	},
	{
		id: 8721,
		lines: [
			"(caster only)[0xFC] [0xFC] The power of the Skeleton's Key is very[0xFC] simple, indeed. With it, any non-magically[0xFC] locked door or chest is instantly[0xFC] accessible to even the clumsiest of[0xFC] lockpickers. A particularly skillful[0xFC] lockpicker may even open some magically[0xFC] barred doors with the Key. The two[0xFC] limitations placed on the Key by wizards[0xFC] who sought to protect their storehouses[0xFC] were that the Key could only be used once[0xFC] a day and it would never be the property[0xFC] of one thief for too long. Some of those[0xFC] who have possessed the Key have made[0xFC] themselves rich before it disappeared,[0xFC] others have broken into places they never[0xFC] should have entered. Once a day this key[0xFC] allows one to open one non-magical lock,[0xFC] or a good chance at opening a low level[0xFC] magical lock.[0xFC] [0xFC] Spells: Open[0xFC]"]
	},
	{
		id: 8722,
		lines: [
			"(1 target at range, save versus magic)[0xFC] [0xFC] The Ebony Blade, sometimes called the[0xFC] Vampire or the Leech, resembles an ebony[0xFC] katana, and its power is very dark indeed.[0xFC] Every time the Ebony Blade strikes an[0xFC] opponent, part of the damage inflicted[0xFC] flows into the wielder as raw power. The[0xFC] Blade itself may not be any more evil than[0xFC] those who have used it, but at some point[0xFC] in its history, a charm was cast on it so[0xFC] it would not remain with any one bladesman[0xFC] for long. The wizard who cast this charm[0xFC] sought to save the souls of any too[0xFC] infatuated by the Blade, and perhaps he[0xFC] was right to do so.[0xFC]",
			"[0xFC] Spells: Far silence, vampiric touch,[0xFC] and energy leech[0xFC]"]
	},
	{
		id: 8999,
		lines: [
			"You have pilfered a dirty, sticky handkerchief.",
			"All your victim possessed was a greasy hairbrush.",
			"Your victim's pockets were empty, except for some string and a bit of paper.",
			"You have pilfered a few worthless pebbles.",
			"Your victim had nothing worth stealing, just some scraps of snake skin.",
			"For some reason, your victim was carrying a dead rat around.",
			"There were a few pieces of glass in your victim's pocket with which you almost cut yourself.",
			"You have pilfered a small piece of cloth, speckled with blood.",
			"There is nothing in your victim's pocket but an ink-stained handkerchief.",
			"Your victim was carrying nothing but a small scrap of yellow fabric.",
			"All you managed to pilfer from your victim was a shopping list.",
			"Your victim's pockets were full of leaves, none of which are particularly rare or unusual.",
			"There is a draft for a romantic poem in your victim's pocket. It looks like a bad poem.",
			"Your victim was carrying a bit of deer horn in a satchel.",
			"There was nothing of interest in your victim's pockets, just some dice for gambling.",
			"There were only two buttons and a bit of thread in your victim's pockets.",
			"There were a few grapes in your victim's pockets, apparently being saved for later consumption.",
			"You have pilfered a crust of bread, apparently once part of a sandwich.",
			"There was a small piece of meat in your victim's pocket, apparently once part of a sandwich.",
			"There was not much of interest in your victim's satchel, just a bit of bone from a small mammal.",
			"There was a small glass marble in your victim's pocket, pretty but useless.",
			"You have pilfered a small square of red fabric from your victim's satchel.",
			"You have not pilfered much of interest, just a piece of cheese and a scrap of crusty bread.",
			"There was some twine in your victim's pocket, but not enough to be of any use to you.",
			"There is little of use in your victim's pockets, just some lint, a bit of thread, and an old button.",
			"There is very little in your victim's pockets worth taking, just a few scraps of tattered paper.",
			"Your victim's pockets are greasy with oil - apparently something spilled in there.",
			"All you pilfer from your victim is a soiled handkerchief.",
			"You pilfer a note from your victim, a shopping list for a nearby equipment store.",
			"Your victim was carrying two small pieces of wood, apparently something that needed repair.",
			"There is nothing of interest in your victim's pocket, just a few flakes of lint.",
			"You find nothing in your victim's pockets, just a bit of lint and a piece of string.",
			"You find a small, warm, wet ball in your victim's satchel - possibly a bit of bat guano.",
			"You have pilfered a small engraving of a woman, apparently your victim's mother.",
			"You have pilfered a note, a letter from your victim's father, detailing hometown gossip.",
			"You pilfer a few amateurly drawn charcoal sketches from your victim.",
			"Your victim had nothing but a letter from a friend, describing life in a nearby village.",
			"You find an unmailed letter to your victim's mother, describing the petty crime common to the area.",
			"You pilfer a pressed wildflower from your victim, pretty but not uncommon at all.",
			"Your victim was carrying a packet of seeds, most of which are blackened with age.",
			"There is nothing useful in your victim's pockets, just a small ball of wax.",
			"You find nothing of value in your victim's satchel, just a ball of flavored wax.",
			"You pilfer a receipt from a faraway tavern.",
			"Your victim is carrying nothing of value, just a small square of black velvet.",
			"There is nothing of value in your victim's pocket.",
			"You successfully search your victim's satchel, but nothing in it is of value.",
			"You do not find anything of worth in your victim's pockets.",
			"There is nothing in your victim's pocket except a dull letter from a friend in a neighboring village.",
			"You pilfer a few pebbles your victim has unaccountably been collecting.",
			"All you pilfer from your victim is a contract from a local moneylender for ten gold pieces.",
			"The only thing in your victim's pocket was a large ball of cat hair."]
	},
	{
		id: 9000,
		lines: [
			"{1.   On a clear day you chance upon a strange animal, its[0xFC]    leg trapped in a hunter's clawsnare. Judging from the[0xFC]    bleeding it will not survive long. Do you:[0xFC] a) Draw your dagger, mercifully ending its life[0xFC]    with a single thrust?[0xFC] b) Do not interfere in the natural evolution of events,[0xFC]    but rather take the opportunity to learn more about[0xFC]    a strange animal that you have never seen[0xFC]    before?[0xFC] c) Use herbs from your pack to put it to sleep, then[0xFC]    free it from the clawsnare and take it somewhere[0xFC]    where it can be safe, knowing that in doing so you[0xFC]    will probably deprive a hunter and his family of[0xFC]    sustenance?[0xFC] {2.   One summer afternoon your father gives you a choice[0xFC]    of chores. Would you rather:[0xFC] a) Work in the forge with him casting iron for a new plow?[0xFC] b) Gather herbs for your mother who is preparing dinner?[0xFC] c) Go catch fish at the stream using a net and line?[0xFC] {3.   Your father and you are returning from the town[0xFC]    market when you see a small boy running from a store.[0xFC]    In his hands he clutches a loaf of bread. Behind him[0xFC]    races the baker with a cleaver in his hands. You know[0xFC]    that the boy must be hungry, but the town is suffering[0xFC]    from a drought, which has made food valuable. Do you:[0xFC] a) Side with justice and urge your father to stop the boy?[0xFC] b) Help the poor waif by running into the baker's way?[0xFC] c) Stand out of the way and wait to see what your father[0xFC]    decides, trusting his experience?[0xFC] {4.   Your father tells you one night the story of his[0xFC]    battle at Borim Valley, where his men had routed the[0xFC]    enemy. They would have captured them all if not for the[0xFC]    brave sacrifice of a young Sergeant on the opposing[0xFC]    side, who held a pass long enough for his men to[0xFC]    retreat to safety. He had done so knowing that it would[0xFC]    cost him his life. If you had been that man would you[0xFC]    have:[0xFC] a) Fled, rationalizing that your experience with battle[0xFC]    tactics was too valuable to be wasted, and could make[0xFC]    the difference later?[0xFC] b) Held the pass also, so that the men under your command[0xFC]    could flee, though it meant your life?[0xFC] c) Searched for some means to distract the enemy so that[0xFC]    your men might have the possibility of escaping, but[0xFC]    not at the cost of your own life?[0xFC] {5.   Your mother sends you to the market with a list of[0xFC]    goods to buy. After you finish you find that by mistake[0xFC]    a shopkeeper has given you too much money back in[0xFC]    exchange for one of the items. Do you:[0xFC] a) Return to the store and give the shopkeeper his hard-[0xFC]    earned money, explaining to him the mistake?[0xFC] b) Pocket the extra money, knowing that shopkeepers in[0xFC]    general tend to overcharge customers anyway?[0xFC] c) Decide to put the extra money to good use and purchase[0xFC]    items that would help your family?[0xFC] {6.   While in a market place you witness a thief cut a[0xFC]    purse from a noble. Even as he does so the noble[0xFC]    notices and calls for the city guards. In his haste to[0xFC]    get away, the thief drops the purse near you.[0xFC]    Surprisingly, no one seems to notice the bag of coins[0xFC]    at your feet. Do you: [0xFC] a) Pick up the bag and pocket it, knowing that the extra[0xFC]    windfall will help your family in times of trouble?[0xFC] b) Pick up the bag and signal to the guard, knowing that[0xFC]    the only honorable thing to do is return the money to[0xFC]    its rightful owner?[0xFC] c) Leave the bag there, knowing that it is better not to[0xFC]    get involved?[0xFC] {7.   Your father sends you on a task which you loathe,[0xFC]    cleaning the stables. On the way there, pitchfork in[0xFC]    hand, you run into your friend from the homestead near[0xFC]    your own. He offers to do it for you, in return for a[0xFC]    future favor of his choosing. Do you:[0xFC] a) Decline his offer, knowing that your father expects you[0xFC]    to do the work, and it is better not to be in debt?[0xFC] b) Accept his offer, reasoning that as long as the stables[0xFC]    are cleaned, it matters not who does the cleaning?[0xFC] c) Ask him to help you, knowing that two people can do the[0xFC]    job faster than one, and agree to help him with one[0xFC]    task of his choosing in the future?[0xFC] {8.   Your mother asks you to help fix the stove. While[0xFC]     you are working, a very hot pipe slips its moorings[0xFC]     and falls towards her. Do you:[0xFC] a) Push your mother out of the way?[0xFC] b) Grab the hot pipe and try and push it away?[0xFC] c) Position yourself between the pipe and your mother?[0xFC] {9.   While in town the baker gives you a sweetroll.[0xFC]    Delighted, you take it into an alley to enjoy, only to[0xFC]    be intercepted by a gang of three other kids your age.[0xFC]    The leader demands the sweetroll, or else he and his[0xFC]    friends will beat you and take it. Do you:[0xFC] a) Drop the sweetroll and step on it, then get ready for[0xFC]    the fight?[0xFC] b) Give him the sweetroll now without argument, knowing[0xFC]    that later this afternoon you will have all your[0xFC]    friends with you and can come and take whatever he[0xFC]    owes you?[0xFC] c) Act like you're going to give him the sweetroll but[0xFC]    at the last minute throw it in the air, hoping that[0xFC]    they'll pay attention to it long enough for you to get[0xFC]    a shot in on the leader?[0xFC] {10.    Entering town you find that you are witness to a[0xFC]     very well dressed man running from a crowd. He screams[0xFC]     to you for help. The crowd behind him seems very[0xFC]     angry. Do you:[0xFC] a)  Rush to the man's aid immediately, despite your lack[0xFC]     of knowledge of the circumstances?[0xFC] b)  Rush to the town's aid immediately, despite your lack[0xFC]     of knowledge of the circumstances?[0xFC] c)  Stand aside and allow the man and mob to pass,[0xFC]     realizing that it is probably best not to get involved?[0xFC] {11.    You and your best friend buy your first daggers[0xFC]     together, a matched pair. You loan him the amount[0xFC]     since he doesn't have enough gold, and he agrees to[0xFC]     pay you back later. After leaving the shop you and he[0xFC]     sit down to marvel at your new weapons. To your dismay[0xFC]     you notice that there is a small notch on the blade[0xFC]     of the dagger you selected. Your friend asks you to[0xFC]     please watch his weapon for him while he runs an[0xFC]     errand. Do you:[0xFC] a)  Wait for your friend's return then point out the flaw[0xFC]     in your dagger and return to the weapons shop to[0xFC]     demand a refund.[0xFC] b)  Switch the daggers, rationalizing that since you paid[0xFC]     for them you should get the first choice, and that if[0xFC]     your friend ever notices the notch, you could always[0xFC]     take him back to the weapon shop and get a refund?[0xFC] c)  Keep his dagger safe until his return, then switch the[0xFC]     daggers with your best friend's knowledge, justifying[0xFC]     it with the fact that you paid for them, and then[0xFC]     offer to accompany him back to the weapons shop?[0xFC] {12.    You are at weapons practice. Your Armsmaster is[0xFC]     very old now, but takes his teaching very seriously.[0xFC]     You have heard him say it is all he has left in life.[0xFC]     Today he has ceaselessly taunted you at every mistake.[0xFC]     Finally he asks you to attack him with the same[0xFC]     technique you just did, in an effort to show you the[0xFC]     proper execution. Do you:[0xFC] a)  Do the technique just fast enough so that he can block[0xFC]     it, knowing that it is more important to allow the[0xFC]     master to retain dignity, regardless of your personal[0xFC]     feelings?[0xFC] b)  Attack him at full speed, knowing that you could[0xFC]     probably score the hit and justify his unfair[0xFC]     treatment of you by showing the class that you were[0xFC]     actually doing it right?[0xFC] c)  Refuse and leave practice, unable to compromise your[0xFC]     anger with his dignity, and realizing that whatever[0xFC]     course you choose would cause you to lose respect for[0xFC]     either him or for yourself?[0xFC] {13.    While throwing a ball to you your friend breaks a[0xFC]     window on his house. His father rushes out and demands[0xFC]     to know who broke the window. You know that your[0xFC]     friend's father is a strict disciplinarian and will[0xFC]     punish your friend severely if he takes the blame. You[0xFC]     on the other hand, not being his son, could get away[0xFC]     virtually unscathed. Do you:[0xFC] a)  Raise your hand and take the blame before your friend[0xFC]     can answer?[0xFC] b)  Remain silent and not get involved?[0xFC] c)  Point at your friend, knowing that anything else would[0xFC]     probably delay the inevitable and make things just[0xFC]     that much worse for him?[0xFC] {14.    Your Armsmaster during a lesson on strategy[0xFC]     remarks, 'The best victory is to completely and[0xFC]     totally humiliate your opponent'. He then turns to you[0xFC]     and asks you if you agree with him. You know the[0xFC]     Armsmaster has been in numerous life and death[0xFC]     conflicts and has the experience of a seasoned[0xFC]     warrior. Do you:[0xFC] a)  Agree with his remark, knowing that at this moment[0xFC]     your experience is not enough to justify any stance[0xFC]     but total agreement with whatever your Armsmaster[0xFC]     says, a man who has dedicated his life to strategy?[0xFC] b)  Disagree with his remark, reasoning that it must be[0xFC]     some type of test, and that the truth will only come[0xFC]     from opposition with his opinion, and not sheep-like[0xFC]     agreement?[0xFC] c)  Refuse to answer the question, choosing to withhold an[0xFC]     opinion until you have more experience and can[0xFC]     converse on the subject in an intelligent manner with[0xFC]     him?[0xFC] {15.    The senior student in your weapons class has[0xFC]     trounced you unmercifully for the past several years.[0xFC]     Today is the Tournament of Students and you find with[0xFC]     dismay that you are paired against him for your first[0xFC]     match. As you prepare your friend approaches and[0xFC]     offers to tell you of an injury the senior student[0xFC]     suffered in yesterday's sparring class, which you[0xFC]     missed. Do you:[0xFC] a)  Accept the offer, knowing that it would allow you to[0xFC]     concentrate on the injured area and greatly increase[0xFC]     your chances of beating him?[0xFC] b)  Refuse the offer, knowing that win or lose you would[0xFC]     rather do it through your own skill and not some extra[0xFC]     knowledge in what should be a fair and honorable[0xFC]     fight?[0xFC] c)  Accept the offer, reasoning that it is better to have[0xFC]     the knowledge in case you need it, and realizing that[0xFC]     having the knowledge does not necessarily mean using[0xFC]     it?[0xFC] {16.    An old man stops you on the way to market,[0xFC]     claiming to have been robbed. He is lying on the trail[0xFC]     and seems gravely injured. He asks you to run to town[0xFC]     and get the constable. You give him your word that you[0xFC]     will go directly to town and bring the constable back.[0xFC]     As you make your way back you notice a suspicious man[0xFC]     creeping along another trail. He doesn't seem to[0xFC]     notice you yet. Do you:[0xFC] a)  Follow the man, reasoning that if this man is the[0xFC]     robber you could lead the constable directly to him[0xFC]     and safeguard other travelers, although it would mean[0xFC]     breaking your word?[0xFC] b)  Take note of him but continue on, reasoning that the[0xFC]     man on the trail is hurt too badly to stop, regardless[0xFC]     of any other consideration?[0xFC] c)  Take note of him but continue on, reasoning that your[0xFC]     word is your bond and that it takes precedence over[0xFC]     anything else?[0xFC] {17.    While fishing one sunny afternoon you find that the[0xFC]     boots which you discarded are now full of ants who are[0xFC]     busily making their way from a piece of bread you[0xFC]     dropped to their anthill. Do you:[0xFC] a)  Pick up the boots wash all the ants off now, even[0xFC]     though you are not leaving until dusk?[0xFC] b)  Watch the ants, curious as to how they work so[0xFC]     efficiently, and content to live and let live?[0xFC] c)  Make boats out of leaves and then send each ant down[0xFC]     the stream to pass the time until a fish bites?[0xFC] {18.    You hear the Armsmaster remark during weapons[0xFC]     class, 'The intent of your opponent can be seen in his[0xFC]     blade'. Many of the students scoff at this, though not[0xFC]     openly. Do you:[0xFC] a)  Feel that the disrespect the students show at this[0xFC]     points to something which they do not understand, and[0xFC]     therefore causes you to focus your efforts on[0xFC]     understanding it all the more?[0xFC] b)  Feel that he means the way the opponent attacks and[0xFC]     moves shows you how he feels?[0xFC] c)  Realize that Armsmaster Festil should not be the[0xFC]     object of scorn, but rather one of respect, for he has[0xFC]     lived a full life and survived things none of the[0xFC]     students could imagine?[0xFC] {19.    The town has a lottery in which the winning chit[0xFC]     is called. You look in shock as the winning chit[0xFC]     number matches your own! Before you can say anything[0xFC]     another family walks forward. You have seen them before[0xFC]     and know that they are extremely poor. Your family on[0xFC]     the other hand could do without the 100 gold piece[0xFC]     prize. Do you:[0xFC] a)  Say nothing and allow the other family to claim the[0xFC]     prize?[0xFC] b)  Stand and show your chit, knowing that the prize is[0xFC]     rightfully yours?[0xFC] c)  Stand and show your chit, and offer to split the prize[0xFC]     in half with the other family?[0xFC] {20.    Your Armsmaster poses a question one day to his[0xFC]     class. A company of 100 men is attempting to flee from[0xFC]     the enemy. There are two paths out of the broken[0xFC]     stronghold. One path will kill half the men under the[0xFC]     officers command, but the other half would survive. The[0xFC]     other path has a fifty percent chance that everyone[0xFC]     would die, but also a fifty percent chance that[0xFC]     everyone would survive. As the commanding officer,[0xFC]     would you:[0xFC] a)  Choose the path that would guarantee half your men[0xFC]     would survive?[0xFC] b)  Choose the path that has a fifty percent chance that[0xFC]     all would survive, and a fifty percent chance that all[0xFC]     would perish?[0xFC] c)  Turn the choice over to the men and let them decide by[0xFC]     majority vote which path they should commit[0xFC]     themselves to?[0xFC] {21.    You have a great aunt and a great uncle living in[0xFC]     two different nearby villages, both of whom have asked[0xFC]     your father to allow you to live with them for a few[0xFC]     weeks.[0xFC]     Your father knows where he plans to send you, but he[0xFC]     is curious about your opinion. Given the choice, would[0xFC]     you rather:[0xFC] a)  Live with your great aunt -- a wise old woman of[0xFC]     considerable wealth. Living in luxury for a few weeks[0xFC]     could not only be enlightening, it could also be very[0xFC]     interesting.[0xFC] b)  Live with your great uncle -- a sick old man who has[0xFC]     always been something of a stranger to you. A few[0xFC]     weeks with him may be ardorous, but he is in more need[0xFC]     of your help than your great aunt.[0xFC] c)  Think of a way to divide your time between your great[0xFC]     aunt and great uncle. Perhaps you will not be able to[0xFC]     spend as much time with either as much as you would[0xFC]     like, but neither would be left out.[0xFC] {22.    A friend has on several occassions made remarks[0xFC]     about how much he likes a particular gold ring of[0xFC]     yours. One day you discover that this ring is missing[0xFC]     and after making a thorough search, find it in a coat[0xFC]     your friend had left in your pantry. Are you most[0xFC]     inclined to: a)  Ask your friend how he came about the ring, reasoning[0xFC]     that it is highly probable that he found it and meant[0xFC]     to return it to you.[0xFC] b)  Confront him with his theft. You know that there is no[0xFC]     way the ring just fell into his pocket by accident,[0xFC]     and therefore he is nothing but a common thief who[0xFC]     would betray you for material gain.[0xFC] c)  Say nothing, deciding instead to wait and see what[0xFC]     your friend does. If he is innocent or guilty, you[0xFC]     will know by whatever actions he takes. At that time,[0xFC]     you can confront him with the truth.[0xFC] {23.    A good friend of yours is in love with a girl from[0xFC]     a neighboring village, a girl who barely knows him. He[0xFC]     is extremely shy and inexperienced, and he pleads for[0xFC]     your help. Would you suggest he:[0xFC] a)  Go to her immediately and declare his love. If the[0xFC]     relationship is to be, he needs to be honest from the[0xFC]     start. You offer to accompany him to the village for[0xFC]     support.[0xFC] b)  Find out more about this girl using any contact he can[0xFC]     find in her village. He will not be so shy if he knows[0xFC]     something about her, and may even find out she is not[0xFC]     the right girl for him.[0xFC] c)  Let you help him write anonymous love letters and[0xFC]     poems to see her reaction without needing to face her[0xFC]     directly. If the reaction is favorable, he can talk to[0xFC]     her friends in the village and arrange an \"accidental\"[0xFC]     meeting.[0xFC] {24.    Your Armmaster is relating the story of a great[0xFC]     king he knew in a faraway land whose inventors created[0xFC]     a wondrous balloon of such size, it could transport[0xFC]     dozens of people through the air to any place they[0xFC]     chose. If you were this king, he asks you, how would[0xFC]     you use this remarkable balloon? Would you:[0xFC] a)  Explore regions previously impossible or extremely[0xFC]     dangerous to visit by land.[0xFC] b)  Keep the balloon a secret, saving it for surprise[0xFC]     attacks or defense in a time of war.[0xFC] c)  Commission the inventor to create dozens of these[0xFC]     'balloons' in hopes of making a travel system across[0xFC]     your realm that will speed up transportation time and[0xFC]     the exchange of ideas.[0xFC] {25.    There is a lot of heated discussion at the local[0xFC]     tavern over a group of people called 'Telepaths'. They[0xFC]     have been hired by certain City-State kings. Rumor has[0xFC]     it these Telepaths read a person's mind and tell their[0xFC]     lord whether a follower is telling the truth or not.[0xFC]     You believe:[0xFC] a)  That this is a terrible practice. A person's thoughts[0xFC]     are his own and no one, not even a king, has the right[0xFC]     to make such an invasion into another human's mind.[0xFC] b)  Loyal followers to the King have nothing to fear from[0xFC]     a Telepath. It is important to have a method of[0xFC]     finding assassins and spies before it is too late.[0xFC] c)  In these times, it is a necessary evil. Although you[0xFC]     do not necessarily like the idea, a Telepath could[0xFC]     have certain advantages during a time of war or in[0xFC]     finding someone innocent of a crime.[0xFC] {26.    You are told that a young man has been caught by[0xFC]     the village guards and accused of murder. Apparently,[0xFC]     his brother was killed by a group of four ruffians in[0xFC]     a local tavern, and in his grief, the young man[0xFC]     tracked each of them down and murdered them. Upon[0xFC]     reflection, you believe that:[0xFC] a)  The young man acted honorably in avenging his[0xFC]     brother's death. The village lord should let him go[0xFC]     free. b)  Even as you sympathize with the young man, vigilante[0xFC]     law cannot be tolerated if there is to be peace.[0xFC] c)  The young man's only mistake was getting caught while[0xFC]     exacting vengance. For that, he now must accept[0xFC]     whatever fate has in store for him.[0xFC] {27.    One night, walking home, you are attacked by a[0xFC]     young man you know from class. You defend yourself[0xFC]     ably and knock him unconscious. While he is out, you:[0xFC] a)  Tie him up, intending to interrogate him later when he[0xFC]     wakes up. You want to know why he attacked you. You[0xFC]     can then turn him into the Armsmaster at your leisure.[0xFC] b)  Slit his throat. You know him from class, and think he[0xFC]     would have done the same had your positions been[0xFC]     reversed.[0xFC] c)  Leave him with a visible scar, the knowledge of his[0xFC]     defeat at your hands and the visible reminder[0xFC]     punishment enough for one who has resorted to such[0xFC]     dishonorable tactics.[0xFC] {28.    Your father delights in telling you stories of his[0xFC]     travels in his youth. In one memorable tale, he tells[0xFC]     you about a primitive island he visited where a young[0xFC]     child was sacrificed once a year to appease Arius, the[0xFC]     God of Fire. Whenever the natives neglected the[0xFC]     sacrifice, the island volcano would erupt, killing[0xFC]     hundreds of villagers. You tell your father:[0xFC] a)  You do not believe in any such Volcano God. Civilized[0xFC]     men should intervene, find the natural cause behind[0xFC]     the eruptions, and stop the sacrifices.[0xFC] b)  The God Arius must be evil to demand child sacrifice.[0xFC]     The villagers should find some way to combat this God,[0xFC]     instead of just giving in to his demands.[0xFC] c)  It is tragic, but the death of one small child is[0xFC]     preferable to that of many villagers. If it works,[0xFC]     they should keep the tradition. Gods are not to be[0xFC]     toyed with.[0xFC] {29.    Your Armsmaster introduces a new student to the[0xFC]     class - a small, awkward boy named Tys who does not[0xFC]     seem to have any natural talent at all. The class is[0xFC]     divided into two sides for a mock battle and, as one of[0xFC]     the 'generals', you are to assign your soldiers. Tys[0xFC]     is one of your men. You decide to:[0xFC] a)  Put Tys at the frontline with the other fighters,[0xFC]     rationalizing that in any realistic battle, he would[0xFC]     probably be a casualty anyway, and that there must be[0xFC]     some sacrifices.[0xFC] b)  Use Tys as a scout, rationalizing that because of his[0xFC]     small size he would probably be good at sneaking in[0xFC]     and gathering information on the enemy.[0xFC] c)  Assign Tys to several posts during the course of the[0xFC]     battle, staying near and helping him so he can gain[0xFC]     valuable experience and improve.[0xFC] {30.    Your mother is terribly ill and you have been sent[0xFC]     with a few gold pieces to buy some rare, medicinal[0xFC]     herbs for her. As you reach the door to the[0xFC]     apothecary's, you realize there is a hole in your purse[0xFC]     and all the gold has fallen out. Do you:[0xFC] a)  Enter the store, tell the apothecary your dilemma, and[0xFC]     promise on your honor to pay him back for the herbs[0xFC]     your mother so desperately needs.[0xFC] b)  Attempt to steal the herbs from the apothecary's. You[0xFC]     know the old man who works in the store will not be[0xFC]     able to catch you, and your mother lies sick.[0xFC] c)  Run back home and admit the loss, hoping that your[0xFC]     father will have more gold. You know you'll be[0xFC]     punished, but you will neither be in debt to the[0xFC]     apothecary, nor will you be a thief.[0xFC] {31.    A boat you are in is suddenly caught in a[0xFC]     tremendous whirlpool. As the current reaches an[0xFC]     impossible velocity, the little boat begins springing[0xFC]     leaks and starts to sink under the vortex. You can see[0xFC]     no way out that does not promise death, so you:[0xFC] a)  Pick up a bucket and begin bailing furiously, hoping[0xFC]     to keep the boat afloat just a few more seconds.[0xFC] b)  Sit back and accept your fate, choosing to die with a[0xFC]     sense of decorum and nobility, not as a commoner who[0xFC]     fears the unknown.[0xFC] c)  Dive into the churning current. You may only be[0xFC]     hastening your own death, but at least you are doing[0xFC]     something.[0xFC] {32.    You're hunting in the King's Hunt, a contest in[0xFC]     which the best hunter will win riches enough to live[0xFC]     comfortably for the rest of his or her life. You track[0xFC]     a white stag many of you had shot at earlier. You are[0xFC]     alone as you examine the stag and recognize the arrow[0xFC]     as one fired from your friend's bow. As you retrieve[0xFC]     the arrow for closer examination you hear your friends[0xFC]     arrive. Do you:[0xFC] a)  Claim to have fired the arrow that hit the stag, thus[0xFC]     gaining the honor for the kill?[0xFC] b)  Show the others the arrow and proclaim your friend the[0xFC]     archer of the day?[0xFC] c)  Suggest dividing the prize, reasoning that although[0xFC]     your friend's arrow brought down the hart, all of you[0xFC]     were instrumental in the tracking and the kill?[0xFC] {33.    One night after Tales and Tallows, you look at the[0xFC]     horde of treats you have collected and find lots of[0xFC]     brandied plums, a treat you particularly dislike. You[0xFC]     know your younger cousin likes them. Do you:[0xFC] a)  Give her all your brandied plums?[0xFC] b)  Trade the brandied plums for something she does not[0xFC]     really like but you do?[0xFC] c)  Pretend that they are excellent brandied plums and see[0xFC]     if she will give up something really good in exchange?[0xFC] {34.    Your cousin has given you a very embarassing[0xFC]     nickname and, even worse, likes to call you it in front[0xFC]     of your friends. You have asked him to stop, but he[0xFC]     finds it very amusing to watch you blush. What do you     do?:[0xFC] a)  Make up an even more embarassing nickname for him and[0xFC]     use it constantly until he learns his lesson.[0xFC] b)  Make up a story that makes your nickname a badge of[0xFC]     honor instead of something humiliating.[0xFC] c)  Beat up your cousin, then tell him that if he ever[0xFC]     calls you that nickname again, you will bloody him[0xFC]     worse than this time.[0xFC] {35.    Othisa, a friend, has been beaten by a boy several[0xFC]     years older than either you or her. She asks for your[0xFC]     help. Are you more inclined to:[0xFC] a)  Gather a bunch of friends together and ambush the boy,[0xFC]     teaching him a lesson about bullying.[0xFC] b)  Tell Othisa to avoid the bully - no reason to make[0xFC]     things worse than they are.[0xFC] c)  Challenge the older boy, knowing that you will[0xFC]     probably take a beating, but confident that if you do[0xFC]     it enough times, he will move on to pick on someone[0xFC]     who is an easier target.[0xFC] {36.    Your parents are having a party for several[0xFC]     relatives. While helping around the house, you see your[0xFC]     cousin slip into a darkened room. Curious, you follow[0xFC]     and discover him slipping a silver candlestick into his[0xFC]     jacket. He is an honorable boy, but you know his family[0xFC]     has suffered some recent financial hardship. He has not[0xFC]     seen you yet. Do you:[0xFC] a)  Clear your throat and tell him to put the candlestick[0xFC]     back, reassuring him that your parents can help him if[0xFC]     his family is in trouble, but he should not resort [0xFC]     to stealing.[0xFC] b)  Close the door behind you and say nothing. Your family[0xFC]     can live without the candlestick, but your cousin's[0xFC]     family obviously cannot.[0xFC] c)  Treat him like any other burgler. Lock him in the room[0xFC]     and call for your father. If he chooses to be merciful[0xFC]     because of your cousin's poverty, that is his decision.[0xFC]     It is your father's candlestick, after all.[0xFC] {37.    While exploring the woods with two other[0xFC]     adventurers, you come across a small, abandoned hut[0xFC]     that seems to have once belonged to a mage. Looking[0xFC]     through the window, you see the remains of a[0xFC]     laboratory, many potions and scrolls still on the[0xFC]     shelves. Geotina, who thinks you a cowardly sort,[0xFC]     suggests breaking into the shack and exploring. Another[0xFC]     fighter named Hunard suggests going to town to find out[0xFC]     more information. You advise:[0xFC] a)  Going into town. They are more familiar with the area[0xFC]     and may have important information about this hut and[0xFC]     the surrounding area.[0xFC] b)  Breaking into the shack, but leaving one person on[0xFC]     the outside in case something goes wrong. You should[0xFC]     investigate new things, not run away from them.[0xFC] c)  Daring Geotina to go in first. If there is a trap, she[0xFC]     can trip it, then you and Hunard can go in and explore[0xFC]     at your leisure.[0xFC] {38.    It is a particularly grueling class. Your[0xFC]     Armsmaster has been unreasonably demanding on everyone,[0xFC]     including you. His criticisms border on abuse, and it[0xFC]     seems he has no positive comments to make. He turns to[0xFC]     berate you at the end of class, and over his shoulder,[0xFC]     you see some classmates put an aggressive but[0xFC]     non-poisonous snake in his hand sack. You would:[0xFC] a)  Do nothing. The great Armsmaster needs a dose of[0xFC]     humility and this might be a good way of paying him[0xFC]     back for all the misery he has put you through today.[0xFC] b)  Tell him you saw a snake creep into his hand sack,[0xFC]     but do not tell him what your classmates did. No[0xFC]     reason to get anyone in even further trouble.[0xFC] c)  Immediately tell him what the classmates did. There[0xFC]     is no excuse for treating a seasoned fighter like him[0xFC]     with disrespect, regardless of his treatment to you[0xFC]     that particular day.[0xFC] {39.    Because you expressed interest, your Armsmaster[0xFC]     told you a few hints about recognizing magical[0xFC]     weaponry. Later you are practicing archery with a few[0xFC]     friends. One boy who was never a strong archer has[0xFC]     become something of a sharpshooter. You suddenly[0xFC]     realize that he is using magical arrows. What do you[0xFC]     do?:[0xFC] a)  Tell the others about the arrows. In a friendly[0xFC]     archery match, using magical arrows is cheating.[0xFC] b)  Tell your friend you noticed that he was using magical[0xFC]     arrows, and if he doesn't get you some, you will tell[0xFC]     the Armsmaster and the others the reason behind his[0xFC]     improvement.[0xFC] c)  Say nothing. If you have a need for magical arrows[0xFC]     you can always mention something to him later. After[0xFC]     all, magic is not really a cheat, it is a different[0xFC]     skill.[0xFC] {40.    Practicing alone, you develop a new fighting style[0xFC]     you are very excited about. When you mention it to your[0xFC]     Armsmaster, he tells you it would never work in[0xFC]     practical combat. Do you:[0xFC] a)  Use the new style in the middle of a class spar.[0xFC]     When it works, he will be forced to admit its[0xFC]     practicality or give a reason for not accepting it.[0xFC] b)  Keep asking him questions about it, focusing on[0xFC]     details of the form to find his objection. Eventually[0xFC]     he will have to give a more specific criticism.[0xFC] c)  Accept his word without question. Your Armsmaster has[0xFC]     been fighting since your grandfather's day. He knows a[0xFC]     flawed style when he sees it, and it is better not to[0xFC]     waste his or your time asking why.[0xFC] {"]
	},
	{id: 9400, lines: [
			"Reserved to 9912 for Bruce and Co. (do not translate)"]},
	{id: 9999, lines: [
			"Dummy entry. Must always "]},
];

let textViewer = {
	init: function() {
		let i, j, text, df, textDiv, linesDiv, lineDiv, line;
		df = document.createDocumentFragment();

		for(i = 0; i < textRSC.length; i++) {
			text = textRSC[i];

			textDiv = document.createElement('div');
			textDiv.id = 'text_' + text.id;
			textDiv.title = textDiv.id;
			textDiv.className = 'text';

			linesDiv = document.createElement('div');
			linesDiv.className = 'lines';

			for(j = 0; j < text.lines.length; j++) {
				line = this.parseLine(text.lines[j]);

				lineDiv = document.createElement('div');
				lineDiv.className = 'line';

				lineDiv.innerHTML = line;

				linesDiv.appendChild(lineDiv);
			}

			textDiv.appendChild(linesDiv);
			df.appendChild(textDiv);
		}
		document.getElementById('dfu-text-container').appendChild(df);
	},
	terminators: {
		FB: "margin-left: ",
		FC: "text-align: left;",
		FD: "text-align: center;"
	},
	terminatorsRegEx: [
//		        /([^\]>]+)(\[0xFB])/,
		/([^\]>]+)(\[0xFC])/,
		/([^\]>]+)(\[0xFD])/
	],
	parseLine: function(line) {
		let result, i, match;
		for(i = 0; i < this.terminatorsRegEx.length; i++) {
			match = line.match(this.terminatorsRegEx[i]);
			if(match !== null) {
				break;
			}
		}
		if(match !== null) {
			switch(match[2]) {
				case "[0xFB]":
					result = line.replace(match[1] + match[2], '<span style="' + this.terminators.FB + '0px;">' + match[1] + '</span>');
					break;
				case "[0xFC]":
					result = line.replace(match[1] + match[2], '<span style="' + this.terminators.FC + '">' + match[1] + '</span>');
					break;
				case "[0xFD]":
					result = line.replace(match[1] + match[2], '<span style="' + this.terminators.FD + '">' + match[1] + '</span>');
					break;
			}
			return this.parseLine(result);
		} else {
			return line;
		}
	}
};

window.addEventListener('DOMContentLoaded', function() {
	textViewer.init();
});