export const heroNames = [
  {
    hero_name: "npc_dota_hero_antimage",
    hero_id: 1,
    has_scepter: true,
    scepter_desc:
      "Blinks an illusion to the target enemy or location, which attacks for a brief time. Counterspell is replicated on the Blink Fragment illusion. Has 3 Charges.",
    scepter_skill_name: "Blink Fragment",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Counterspell passively grants an aura that reduces enemy spell damage. The reduction is stronger in close range.",
    shard_skill_name: "Counterspell",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_axe",
    hero_id: 2,
    has_scepter: true,
    scepter_desc:
      "Battle Hunger also reduces enemy armor and grants Axe armor per affected target.",
    scepter_skill_name: "Battle Hunger",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Counter Helix now applies a stacking debuff to enemies hit by it that causes them to deal less total attack damage to Axe. Counter Helix no longer has a cooldown.",
    shard_skill_name: "Counter Helix",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_bane",
    hero_id: 3,
    has_scepter: true,
    scepter_desc:
      "Reduces Fiend's Grip cooldown by 45. Fiend's Grip now creates two uncontrollable illusions that are also channeling Fiend's Grip on the target. Illusions take 200% incoming damage and immediately die if they are interrupted. Damage does not stack.",
    scepter_skill_name: "Fiend's Grip",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Causes Brain Sap to become a 550 AoE spell. Secondary targets only heal for 30%.",
    shard_skill_name: "Brain Sap",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_bloodseeker",
    hero_id: 4,
    has_scepter: true,
    scepter_desc:
      "Bloodseeker sprays his blood continuously in the area around him, losing health to damage and slow his enemies. While active, Thirst's healing is increased. Cannot be turned off while on cooldown. Additionally, passively turns all your overheal from your own abilities into an all damage barrier up to 50% of Bloodseeker's Max Health. Barrier amount decays by 0.5% per second.",
    scepter_skill_name: "Blood Mist",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Bloodrage attacks now deal 1.8% of the target’s max health as pure damage and heals Bloodseeker for that amount. Only works for Bloodseeker.",
    shard_skill_name: "Bloodrage",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_crystal_maiden",
    hero_id: 5,
    has_scepter: true,
    scepter_desc:
      "Applies Frostbite to any unit that has been standing in the Freezing Field for over 1.75s.",
    scepter_skill_name: "Freezing Field",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Allows you to move, cast and attack during Freezing Field. Can still be interrupted by enemies. You move 75% slower during this. Increases total number of explosions by 20%.",
    shard_skill_name: "Freezing Field",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_drow_ranger",
    hero_id: 6,
    has_scepter: true,
    scepter_desc:
      "Frost Arrows now apply a Hypothermia stack to enemies, increasing damage from Frost Arrows and reducing their regeneration per stack. If an enemy dies with Hypothermia stacks, they burst and deal damage per stack and slow in an area around it.",
    scepter_skill_name: "Frost Arrows",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Drow Ranger creates a hill of ice beneath her. While standing on the hill, attackers gain bonus attack range and high ground advantage - they cannot miss and gain flying vision. Drow Ranger additionally gets bonus Multishot arrows per wave while on the hill. The front of the hill obscures vision and cannot be moved through.",
    shard_skill_name: "Glacier",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_earthshaker",
    hero_id: 7,
    has_scepter: true,
    scepter_desc:
      "Enchant Totem becomes a ground target ability, causing Earthshaker to jump in the air and land at the target spot, casting Enchant Totem there.  Self-casting the ability will behave in the original form, without jumping. Grants Enchant Totem a cleaving attack.",
    scepter_skill_name: "Enchant Totem",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Reduces Fissure cooldown and allows Earthshaker to walk on it. When he casts any ability, an Aftershock is released along its path that stuns for a shortened duration.",
    shard_skill_name: "Fissure",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_juggernaut",
    hero_id: 8,
    has_scepter: true,
    scepter_desc: "Performs a short Omnislash for 1 seconds.",
    scepter_skill_name: "Swiftslash",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Increases movement speed during Blade Fury, and attacks random nearby enemy units with reduced damage.",
    shard_skill_name: "Blade Fury",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_mirana",
    hero_id: 9,
    has_scepter: true,
    scepter_desc:
      "Causes Sacred Arrow to release a Starstorm on enemies along the travel path of the primary arrow, releasing a second Starstorm that deals less damage to the impacted unit.",
    scepter_skill_name: "Sacred Arrow",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Upon landing, launches a projectile along Sagan's leap path, dealing damage and slowing units affected. Leap does not break Moonlight Shadow invisibility.\n\n Can be put on autocast to choose the distance and facing direction of the jump. \n\nGrants 1 bonus charge(s).",
    shard_skill_name: "Leap",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_morphling",
    hero_id: 10,
    has_scepter: true,
    scepter_desc:
      "Morphling steals stats from the replicated hero. If the replicated hero's primary attribute is Strength it will also steal Status Resistance, if it's Agility, it will steal Attack Speed, if it's Intelligence, it will steal Spell Amplification, and if it's Universal, it will steal additional stats.",
    scepter_skill_name: "Morph",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc: "Morphling can shift attributes while stunned.",
    shard_skill_name: "Attribute Shift (Strength Gain)",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_nevermore",
    hero_id: 11,
    has_scepter: true,
    scepter_desc:
      "Reduces cooldown and causes Requiem of Souls to return back to Shadow Fiend. The wave back to Shadow Fiend deals less damage, but heals Shadow Fiend for all the damage it dealt.",
    scepter_skill_name: "Requiem of Souls",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Shadow Fiend gains an extra soul per kill. Shadow Fiend can consume a soul per attack to deal critical damage and fear the target.",
    shard_skill_name: "Necromastery",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_phantom_lancer",
    hero_id: 12,
    has_scepter: true,
    scepter_desc:
      "Spirit Lance bounces twice on enemies, prioritizing Heroes. Increases Spirit Lance illusion damage and slow amount.",
    scepter_skill_name: "Spirit Lance",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Adds an active ability to Juxtapose. Renders Phantom Lancer invisible for up to 8 seconds while generating a duplicate image to confuse enemies. His movement speed is increased by 15% during this invisibility.",
    shard_skill_name: "Juxtapose",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_puck",
    hero_id: 13,
    has_scepter: true,
    scepter_desc:
      "All enemies affected by Dream Coil are attacked every 0.6 seconds.",
    scepter_skill_name: "Dream Coil",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Puck's attacks deal bonus magic damage. Puck attacks all enemies within its attack range + 200 every time it phase shifts.",
    shard_skill_name: "Phase Shift",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_pudge",
    hero_id: 14,
    has_scepter: true,
    scepter_desc:
      "Increases Rot radius and damage, and causes it to reduce enemy health regen.",
    scepter_skill_name: "Rot",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Decreases cooldown, and allows targeting an ally with bonus cast range to swallow them and heal them for a percentage of their max health per second.",
    shard_skill_name: "Dismember",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_razor",
    hero_id: 15,
    has_scepter: true,
    scepter_desc:
      "Causes Eye of the Storm to strike two different units instead of one and can damage structures. When striking buildings, it will only target towers, barracks, and the Ancient.",
    scepter_skill_name: "Eye of the Storm",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Causes Storm Surge to have a chance when attacked, and always when targeted with a spell, to release forked lightning that strikes the target and other nearby enemies, dealing damage and slowing movement speed.",
    shard_skill_name: "Storm Surge",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_sand_king",
    hero_id: 16,
    has_scepter: true,
    scepter_desc:
      "Every 0.2s, 2 Burrowstrike spines are created at random locations, each having a 65 radius, that apply Burrowstrike damage and stun to enemies hit.",
    scepter_skill_name: "Sand Storm",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases Epicenter Pulse damage, and every 700.0 units moved causes a small single Epicenter Pulse around Sand King.",
    shard_skill_name: "Epicenter",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_storm_spirit",
    hero_id: 17,
    has_scepter: true,
    scepter_desc:
      "Electric Vortex affects all enemies within a radius around Storm Spirit.",
    scepter_skill_name: "Electric Vortex",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Can be activated to grant Storm Spirit and nearby allied heroes 3 Overload charges. Provides bonus Attack Speed. Lasts up to 12 seconds or until the charges are depleted.",
    shard_skill_name: "Overload",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_sven",
    hero_id: 18,
    has_scepter: true,
    scepter_desc:
      "Increases cast range and transports Sven along the Storm Hammer. Storm Hammer also applies a basic dispel on the target. Can be cast on invulnerable targets. If autocast on the ability is enabled, Sven does not travel with the Storm Hammer.",
    scepter_skill_name: "Storm Hammer",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Warcry is now undispellable and passively grants armor to all allies near Sven.",
    shard_skill_name: "Warcry",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_tiny",
    hero_id: 19,
    has_scepter: true,
    scepter_desc:
      "CHANNELED - Tiny channels to throw random trees within range towards the targeted area. Deals Tiny's attack damage to enemies in that area with each tree thrown.",
    scepter_skill_name: "Tree Volley",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc: "Causes Tree Grab to have no charge limit.",
    shard_skill_name: "Tree Grab",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_vengefulspirit",
    hero_id: 20,
    has_scepter: true,
    scepter_desc:
      "Upon death, creates a strong illusion of Vengeful Spirit that deals and takes full damage and can cast all of her spells. Illusion has 12% movement speed bonus. If the illusion is alive when Vengeful Spirit respawn, she will take its place. XP earned by her illusion is given to her. Strong Illusions are not instantly killed by spells.",
    scepter_skill_name: "Vengeance Aura",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Bounces once on an enemy, prioritizing heroes, within Magic Missile's current cast range from the first target.",
    shard_skill_name: "Magic Missile",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_windrunner",
    hero_id: 21,
    has_scepter: true,
    scepter_desc:
      "Windrun's enemy debuff has increased slow, reduces physical damage taken by 50%, and grants invisibility that is not broken by attacking or casting spells.",
    scepter_skill_name: "Windrun",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Vector Targeted. Summons a strong wind that pushes all enemies in the target area towards the target direction.",
    shard_skill_name: "Gale Force",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_zuus",
    hero_id: 22,
    has_scepter: true,
    scepter_desc:
      "Creates a storm cloud anywhere on the map that automatically casts Lightning Bolt on nearby enemies.",
    scepter_skill_name: "Nimbus",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Zeus's gains bonus attack range and his attacks create Arc Lightnings that deal a percentage of it's damage.",
    shard_skill_name: "Lightning Hands",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_kunkka",
    hero_id: 23,
    has_scepter: true,
    scepter_desc:
      "Releases a visible Torrent in a random area around Kunkka once every 0.25 for 5.0 seconds. Spawns within 1100 range of him.",
    scepter_skill_name: "Torrent Storm",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Releases a Tidal Wave that spawns behind Kunkka. Deals damage and drags enemies along it for the duration. Enemies cannot attack while being dragged.",
    shard_skill_name: "Tidal Wave",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_lina",
    hero_id: 25,
    has_scepter: true,
    scepter_desc:
      "Grants Lina unobstructed movement and increases her spell damage and magic resistance. Grants max fiery soul stacks on activation.",
    scepter_skill_name: "Flame Cloak",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Lina's abilities deal 15 more damage for each Fiery Soul Charge.",
    shard_skill_name: "Fiery Soul",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_lion",
    hero_id: 26,
    has_scepter: true,
    scepter_desc:
      "Increases damage. Decreases cooldown. Finger of Death hits all units in a small area.",
    scepter_skill_name: "Finger of Death",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Causes Mana Drain to affect up to 2 additional enemies and gets +400 additional break distance. Lion becomes Debuff Immune with 50% magic resistance while channeling.",
    shard_skill_name: "Mana Drain",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_shadow_shaman",
    hero_id: 27,
    has_scepter: true,
    scepter_desc:
      "Causes Serpent Wards to have split shot, attacking two units for full damage.",
    scepter_skill_name: "Mass Serpent Ward",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Shackles creates 4 Serpent Wards attacking the target. Increases Shackles cast range by 75. Serpent wards lasts 7 seconds.",
    shard_skill_name: "Shackles",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_slardar",
    hero_id: 28,
    has_scepter: true,
    scepter_desc: "Increases Slithereen Crush puddle radius and duration.",
    scepter_skill_name: "Slithereen Crush",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases Slithereen Crush radius, and causes it to apply Corrosive Haze for a short time to units affected.",
    shard_skill_name: "Slithereen Crush",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_tidehunter",
    hero_id: 29,
    has_scepter: true,
    scepter_desc:
      "Gush becomes a ground targeted wave ability that affects enemy units in a line.  Decreases cooldown.",
    scepter_skill_name: "Gush",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Tidehunter unleashes a targeted slew of tentacles that damage and stun enemies within reach. The tentacles deal 50% of Ravage's damage and stun, with a range 75% of Ravage's radius.",
    shard_skill_name: "Tendrils of the Deep",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_witch_doctor",
    hero_id: 30,
    has_scepter: true,
    scepter_desc:
      "Death Ward attacks have True Strike and bounce between nearby enemies.",
    scepter_skill_name: "Death Ward",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Turns Witch Doctor into a Death Ward briefly with reduced attack speed. He is hidden during this time.",
    shard_skill_name: "Voodoo Switcheroo",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_lich",
    hero_id: 31,
    has_scepter: true,
    scepter_desc:
      "Sinister Gaze becomes an Area of Effect ability, affecting units within a radius of 400 in the target area. Sinister Gaze allows Lich to cast other abilities while channeling it.",
    scepter_skill_name: "Sinister Gaze",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Creates an Ice Spire at the target spot, slowing enemies around it. Can take 5 hero hits or 10 creep hits and when destroyed it will create a Frost Blast around it.\n\nChain Frost can bounce to the Spire if there are no other enemies in range.\n\nLich can cast Frost Shield on the Spire. Each Frost Shield tick will heal the spire by 1 hero attack.",
    shard_skill_name: "Ice Spire",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_riki",
    hero_id: 32,
    has_scepter: true,
    scepter_desc:
      "Increases cast range, number of attacks and allows you to target an allied hero, hiding inside them for the duration.  Each attack hits an additional target.",
    scepter_skill_name: "Tricks of the Trade",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Enemies caught in the smoke screen have their armor reduced by 7 and cannot be targeted by their allies.",
    shard_skill_name: "Smoke Screen",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_enigma",
    hero_id: 33,
    has_scepter: true,
    scepter_desc:
      "Black Hole deals additional damage equivalent to 3.5% of the unit's Max Health per second and does a non-interrupting pull towards it in a 1200 AoE. Pulls at a rate of 175.",
    scepter_skill_name: "Black Hole",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases Malefice stun duration by 0.35s and creates an Eidolon next to the target every instance of Malefice stun. These Eidolons will not multiply further.",
    shard_skill_name: "Malefice",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_tinker",
    hero_id: 34,
    has_scepter: true,
    scepter_desc:
      "Upgrades Tinker's Laser into a Shrink Ray, granting +200 cast range and reducing the main target's size, current health, and maximum health by 10% (stacking) if it's a hero. The laser bounces once on the farthest target up to 700 range from the primary one, prioritizing heroes.",
    scepter_skill_name: "Laser",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Throws a flare towards an enemy, dealing damage, teleporting them away and reducing their Cast and Attack Range for 3 seconds.",
    shard_skill_name: "Warp Flare",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_sniper",
    hero_id: 35,
    has_scepter: true,
    scepter_desc:
      "Causes Assassinate to fire quicker and stun the enemy target.",
    scepter_skill_name: "Assassinate",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Launches a grenade at the target area, dealing damage to enemies and knocking them and Sniper himself back. Enemies affected are disarmed and have their movement slowed after the knockback.",
    shard_skill_name: "Concussive Grenade",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_necrolyte",
    hero_id: 36,
    has_scepter: true,
    scepter_desc:
      "Increases Heartstopper Aura damage while Ghost Shroud is active.",
    scepter_skill_name: "Heartstopper Aura",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Necrophos turns into a large Death Pulse towards the target unit's position. Once it arrives to the location, the Death Pulse spreads towards nearby enemies and allies.",
    shard_skill_name: "Death Seeker",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_warlock",
    hero_id: 37,
    has_scepter: true,
    scepter_desc: "Calls 2 Golems with reduced stats and bounty.",
    scepter_skill_name: "Chaotic Offering",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "While channeling, Warlock spawns an imp every 2 seconds that lasts for 15 seconds and explode dealing damage to all enemies around them upon death.",
    shard_skill_name: "Upheaval",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_beastmaster",
    hero_id: 38,
    has_scepter: true,
    scepter_desc:
      "Attacks from Beastmaster or a nearby unit he controls will cause him bang his drum, dealing damage to nearby units and  healing Beastmaster and units under his control for a portion of the damage dealt. Every attack decreases the interval between drum hits down to a minimum of 0.4s between hits after 20 attacks. If no attacks are made, the intervals gradually increase.\n\nUsing Primal Roar counts as 10/15/20 attacks, based on the current level of Primal Roar.",
    scepter_skill_name: "Drums of Slom",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Reduces Hawk cooldown by 10s and Hawks gain Dive Bomb. If set to autocast, the Hawk will automatically dive bomb the first available target.",
    shard_skill_name: "Call of the Wild Hawk",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_queenofpain",
    hero_id: 39,
    has_scepter: true,
    scepter_desc:
      "Causes Shadow Strike to become a 400 AoE Spell, and have increased initial damage. When Shadow Strike ends or is re-applied to an enemy Hero, the target emits a Scream of Pain, hitting any nearby enemies.",
    scepter_skill_name: "Shadow Strike",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Releases a sonic boom when Queen of Pain blinks, at both her starting and ending locations. Deals 125 damage in a 300 AoE and silences the target for 1.75 seconds.",
    shard_skill_name: "Blink",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_venomancer",
    hero_id: 40,
    has_scepter: true,
    scepter_desc:
      "Whenever Venomancer dies or the effects of Venomous Gale end prematurely on an enemy hero, a spreading ring of poison erupts. Enemies hit by the poison will take non-lethal magic damage over time and have their magic resistance reduced. This effect can trigger every 10 seconds and cannot be refreshed.",
    scepter_skill_name: "Poison Nova",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Applies a weak poison that minorly slows and deals damage to its target. If this poison is dispelled in any way, the target will receive a large amount of damage and be stunned.",
    shard_skill_name: "Latent Toxicity",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_faceless_void",
    hero_id: 41,
    has_scepter: true,
    scepter_desc:
      "Applies a Time Lock to all units at the landing destination.",
    scepter_skill_name: "Time Walk",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Available for 1.5 seconds after landing Time Walk. If used in this period, you will reverse your time walk back to your previous cast location. Does not affect health or proc scepter hits.",
    shard_skill_name: "Reverse Time Walk",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_skeleton_king",
    hero_id: 42,
    has_scepter: true,
    scepter_desc:
      "Reduces cooldown by 40s. If a nearby allied hero is slain, they will be transformed into a wraith and have their death delayed and gain bonus attack and movement speed. Heroes who die this way respawn at a faster rate.",
    scepter_skill_name: "Reincarnation",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Causes Reincarnation to have no mana cost and increases Skeleton Spawn count.",
    shard_skill_name: "Reincarnation",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_death_prophet",
    hero_id: 43,
    has_scepter: true,
    scepter_desc:
      "Whenever an enemy is affected by Death Prophet's spells or when she attacks an enemy, a ghost will fly out, slow and hit the enemy for an increased bonus of its usual damage then return to her with life.",
    scepter_skill_name: "Exorcism",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases Spirit Siphon charges by 1 and causes enemies to be feared for 1.2 seconds if they are siphoned for 3 seconds consecutively.",
    shard_skill_name: "Spirit Siphon",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_phantom_assassin",
    hero_id: 44,
    has_scepter: true,
    scepter_desc:
      "Causes Blur to have instant cast time and applies a dispel. Any time Phantom Assassin gets a hero kill, her abilities are refreshed. Reduces cooldown and increases Vanish Buffer.",
    scepter_skill_name: "Blur",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Phantom Assassin releases sharp blades around her, dealing a percentage of each victim's max health on impact and applying Break.",
    shard_skill_name: "Fan of Knives",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_pugna",
    hero_id: 45,
    has_scepter: true,
    scepter_desc:
      "Reduces cooldown by 3.5s. When targeting an enemy hero, Pugna reduces their outgoing spell damage by 8% per second up to a maximum of 75% and increases his own, up to a maximum of 100%. When draining through a Nether Ward using Shard, the rate of increase/decrease is 4% instead. Debuff lasts 8 seconds.",
    scepter_skill_name: "Life Drain",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Life Drain can target your Nether Ward, causing life drain to refract to all enemy heroes within 700 units of the ward for 75% of its normal value. The effect is interrupted if the ward is destroyed.",
    shard_skill_name: "Life Drain",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_templar_assassin",
    hero_id: 46,
    has_scepter: true,
    scepter_desc:
      "CHANNELED - Allows Templar Assassin to teleport to any Psionic Trap after channeling for 1.5 seconds, detonating it upon arrival. Channeling Psionic Projection does not break Meld.",
    scepter_skill_name: "Psionic Projection",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Increases max trap count and trap vision range.  When activated, traps now silence affected enemies.",
    shard_skill_name: "Psionic Trap",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_viper",
    hero_id: 47,
    has_scepter: true,
    scepter_desc:
      "Viper slams into the ground, disarming each enemy in a 500 AoE for 4 seconds and splattering everyone in a 1200 AoE with the effect of Corrosive Skin.",
    scepter_skill_name: "Nosedive",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Increases max stacks, and causes Poison Attack to lower armor per stack and to affect buildings for reduced damage.",
    shard_skill_name: "Poison Attack",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_luna",
    hero_id: 48,
    has_scepter: true,
    scepter_desc:
      "Allows Luna to cast Eclipse on an allied unit or herself and have its effects follow them, or cast it on an area. Also increases total beams, reduces duration, removes the limit on beams per unit, and makes the beams appear twice as fast.",
    scepter_skill_name: "Eclipse",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Every time an enemy hero is hit by a Lucent Beam, Luna's attack damage is increased by 17 for 15s.",
    shard_skill_name: "Lucent Beam",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_dragon_knight",
    hero_id: 49,
    has_scepter: true,
    scepter_desc:
      "Increases the level of Dragon Knight's ultimate. Adds a 4th level, Black Dragon. Black Dragon has bonus Corrosive Damage, Splash Damage and Slow amount, 25% increased Magic Resistance and free pathing.",
    scepter_skill_name: "Elder Dragon Form",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Ignites an area, dealing damage over time that lingers on enemies in it. Has reduced cast range when melee.",
    shard_skill_name: "Fireball",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_dazzle",
    hero_id: 50,
    has_scepter: true,
    scepter_desc:
      " Dazzle can now target enemies with Shadow Wave to create an Inverse Shadow Wave. The inverse wave bounces amonst enemies, dealing damage to them and healing any nearby allied units for 150% the healing and damage values of Shadow Wave. Dazzle will also perform an attack on any enemy hit by the Inverse Shadow Wave.",
    scepter_skill_name: "Shadow Wave",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc: "Causes Poison Touch to hex affected targets for 1.6 seconds.",
    shard_skill_name: "Poison Touch",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_rattletrap",
    hero_id: 51,
    has_scepter: true,
    scepter_desc:
      "Supercharges Clockwerks abilities: Battery Assault affects all enemies in it's range; Clockwerk's attack speed in Power Cogs is increased; Rocket Flares have a reduced cooldown and fire additional rockets to either side of the target; Hookshot stun radius and duration is increased. Clockwerk becomes stunned after the duration runs out.",
    scepter_skill_name: "Overclocking",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Clockwerk activates a jetpack, gaining flying movement, flying vision, and bonus movement speed. Clockwerk has a severely-limited turn rate during this time and cannot attack. Jetpack is cancelled upon casting Hookshot.",
    shard_skill_name: "Jetpack",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_leshrac",
    hero_id: 52,
    has_scepter: true,
    scepter_desc:
      "Causes Leshrac and all nearby enemies to turn ethereal, preventing them from attacking, slowing them, and making them take more magic damage. Increases Leshrac's speed rather than reducing it. Does not cause Leshrac to take amplified damage.",
    scepter_skill_name: "Nihilism",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Causes Split Earth to repeat in the same location 3 additional times, with a 5 second delay between each one. Each time the radius increases by 60. Split Earth echo location is visible to both teams.",
    shard_skill_name: "Split Earth",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_furion",
    hero_id: 53,
    has_scepter: true,
    scepter_desc:
      "Lowers cooldown by 25s. Entangles all enemies it hits. Duration scales from 2s up to 3.8s seconds at max bounce.",
    scepter_skill_name: "Wrath of Nature",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Applies a curse on all enemy heroes within 1200 range, displaying them in fog, slowing them, and causing damage over time based on the number of trees within 250 radius. Treants count as trees for this purpose.",
    shard_skill_name: "Curse of the Oldgrowth",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_life_stealer",
    hero_id: 54,
    has_scepter: true,
    scepter_desc:
      "Increases cast range and reduces cooldown to =20s.  Infest may target enemy heroes for a short duration, disarming them and attacking them from the inside while increasing Lifestealer's regeneration rate.",
    scepter_skill_name: "Infest",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Lifestealer rends an enemy unit, slowing the victim's movement speed and allowing all allies to regain health for a percentage of the damage they deal to that unit. All damage dealt will steal life, including damage from spells. The victim recovers movement speed over the duration. Deals 2% of the target's max health per attack on the target from real heroes. After receiving 500 damage, the Open Wounds fester and spread to a non-infected random enemy within 700 radius.",
    shard_skill_name: "Open Wounds",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_dark_seer",
    hero_id: 55,
    has_scepter: true,
    scepter_desc:
      "Passive ability. Causes Dark Seer's next attack on a hero to have True Strike, knock a replica out of the victim, damaging and stunning them based on how far Dark Seer has moved in the past 3.0 seconds. Max power is reached after 900 distance moved.",
    scepter_skill_name: "Normal Punch",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Surged units leave behind a 150 radius trail that lasts 7s, slows enemies around it by -50% and deals 35 damage per second in 0.5s intervals. Can be put on autocast to disable the trail.",
    shard_skill_name: "Surge",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_clinkz",
    hero_id: 56,
    has_scepter: true,
    scepter_desc:
      "Summons a row of Burning Skeleton Archers in the target location.",
    scepter_skill_name: "Burning Army",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "CHANNELED - Clinkz channels and shoots multiple piercing arrows in the target direction that hit all enemy units dealing a percentage of Clinkz' attack damage and applying attack modifiers, and dousing enemies with Tar Bomb slow.",
    shard_skill_name: "Burning Barrage",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_omniknight",
    hero_id: 57,
    has_scepter: true,
    scepter_desc:
      "Increases duration, provides Status Resist, radius becomes global and affects buildings.",
    scepter_skill_name: "Guardian Angel",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Omniknight is healed for 30% of the damage dealt by Hammer of Purity. Every 6 seconds, his next attack will fire a Hammer of Purity at the target.",
    shard_skill_name: "Hammer of Purity",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_enchantress",
    hero_id: 58,
    has_scepter: true,
    scepter_desc:
      "Leaps backward, dodges incoming projectiles, and launches an Impetus attack on the 3 furthest enemy units within Enchantress' attack range + 200.",
    scepter_skill_name: "Sproink",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "All creeps, ally, enemy and neutral within a radius will gain bonus movement and attack speed and attack Enchantress' chosen target for 6 seconds.",
    shard_skill_name: "Little Friends",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_huskar",
    hero_id: 59,
    has_scepter: true,
    scepter_desc:
      "Forces the enemy target to attack Huskar and increases cast range.",
    scepter_skill_name: "Life Break",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Lowers Inner Fire cooldown and causes it to apply a movement speed slow and heal Huskar for a percentage of the damage dealt to enemies.",
    shard_skill_name: "Inner Fire",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_night_stalker",
    hero_id: 60,
    has_scepter: true,
    scepter_desc:
      "Void becomes an area of effect ability. Increases the mini-stun duration and leaves behind a void zone. While in the zone, all of Night Stalker's abilities are empowered with their night time effect.",
    scepter_skill_name: "Void",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Hunter in the Night may be cast on a creep, instantly killing it and restoring some of Night Stalker's maximum health and mana. Cannot target ancients during the daytime.",
    shard_skill_name: "Hunter in the Night",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_broodmother",
    hero_id: 61,
    has_scepter: true,
    scepter_desc:
      "Broodmother may create up to 5 invisible web lines touching any existing web. Enemy Heroes that cross the web line will spring the trap, becoming rooted, revealed in fog, and take damage over time.  Multiple Heroes can trip on the same line until it's destroyed after being initially triggered.  Broodmother's team is alerted via the minimap when an enemy has triggered the snare.",
    scepter_skill_name: "Spinner's Snare",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Increases duration. While Hunger is active, the bonus damage is increased by 4% every 1s.",
    shard_skill_name: "Insatiable Hunger",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_bounty_hunter",
    hero_id: 62,
    has_scepter: true,
    scepter_desc: "Increases cast range and applies Jinada on hit.",
    scepter_skill_name: "Shuriken Toss",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Lowers cooldown and can be cast on allied heroes. Allied fade time is 1.0s. Does not break Bounty Hunter's invisibility when cast on allies.",
    shard_skill_name: "Shadow Walk",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_weaver",
    hero_id: 63,
    has_scepter: true,
    scepter_desc: "Time Lapse may target allied Heroes with 500 cast range.",
    scepter_skill_name: "Time Lapse",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Shukuchi puts a mark on enemies it damages that last 12 seconds. When Geminate Attack procs, enemies with a mark within 1200 range will also be attacked with a secondary attack ",
    shard_skill_name: "Shukuchi",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_jakiro",
    hero_id: 64,
    has_scepter: true,
    scepter_desc:
      "Increases Macropyre distance by +400 range, duration by +15 seconds and causes it to become Pure damage that pierces debuff immunity.",
    scepter_skill_name: "Macropyre",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Jakiro adds a frost effect to his attack. Enemies hit are slowed for 4 seconds and are damaged for a percent of their max health plus a base amount every 1 second for 4 seconds.",
    shard_skill_name: "Liquid Frost",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_batrider",
    hero_id: 65,
    has_scepter: true,
    scepter_desc:
      "Flaming Lasso grabs both its target, as well as the target's nearest allied hero within 650 units. The secondary target is tethered to the first.",
    scepter_skill_name: "Flaming Lasso",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Flaming Lasso no longer disarms you. Every other attack applies a stack of Sticky Napalm.",
    shard_skill_name: "Sticky Napalm",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_chen",
    hero_id: 66,
    has_scepter: true,
    scepter_desc:
      "Grants persuaded creeps Martyrdom ability. Sacrifice the life of this unit to heal any ally with the current level of Hand of God.",
    scepter_skill_name: "Holy Persuasion",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Allows Holy Persuasion to target Ancient creeps. Can control up to 1/2/3 Ancient creeps based on Hand of God's level. Additionally levels up some abilities of creeps by 1 level.",
    shard_skill_name: "Holy Persuasion",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_spectre",
    hero_id: 67,
    has_scepter: true,
    scepter_desc:
      "Allows Spectre to perform a single target Haunt on a visible enemy. Casts a Spectral Dagger on the target.",
    scepter_skill_name: "Shadow Step",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Dispersion can be activated to increase damage reflected by 100% for 5s. Cooldown 25. Manacost 50.",
    shard_skill_name: "Dispersion",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_ancient_apparition",
    hero_id: 68,
    has_scepter: true,
    scepter_desc: "Removes cooldown and reduces manacost by 50%.",
    scepter_skill_name: "Chilling Touch",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Freezes enemies hit with the current level of Cold Feet for 60% of the duration.",
    shard_skill_name: "Ice Blast",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_doom_bringer",
    hero_id: 69,
    has_scepter: true,
    scepter_desc:
      "Allies in a 300 radius around the doomed target also suffer the effects of Doom. Allows Doom to be self-cast to affect enemies around himself.",
    scepter_skill_name: "Doom",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Infernal Blade stun duration is increased. If the enemy's level is a multiple of 3, or above level 24, they will be stunned for a longer duration and take bonus damage.",
    shard_skill_name: "Infernal Blade",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_ursa",
    hero_id: 70,
    has_scepter: true,
    scepter_desc:
      "Reduces cooldown and allows Ursa to use Enrage while disabled.",
    scepter_skill_name: "Enrage",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc: "Earthshock applies a 1.5 second Enrage on Ursa when cast.",
    shard_skill_name: "Earthshock",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_spirit_breaker",
    hero_id: 71,
    has_scepter: true,
    scepter_desc:
      "Reduces Charge of Darkness cooldown and makes it pierce magic immunity.",
    scepter_skill_name: "Charge of Darkness",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Barathrum distorts the fabric of planar space, increasing his own magic resistance and redirecting the first targeted enemy hero spell in a radius towards him. Effect ends when the first spell is redirected.",
    shard_skill_name: "Planar Pocket",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_gyrocopter",
    hero_id: 72,
    has_scepter: true,
    scepter_desc:
      "Adds a Side Gunner that at random attacks enemy units near Gyrocopter. Prioritizes furthest unit away within its range.",
    scepter_skill_name: "Flak Cannon",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Homing Missiles now constantly fires the current level of Rocket Barrage in a 700 area of effect after 1 second of being cast. This Rocket Barrage prioritizes the Homing Missile target.",
    shard_skill_name: "Homing Missile",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_alchemist",
    hero_id: 73,
    has_scepter: true,
    scepter_desc:
      "Alchemist melts down Aghanim's Scepter to grant an allied hero all Aghanim's Scepter upgrades. Alchemist will gain bonus damage and spell amplification for each gifted Scepter.",
    scepter_skill_name: "Chemical Rage",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Alchemist throws a potion at an ally, applying a basic dispel and giving them attack speed, movement speed and HP regen.\n\nDISPEL TYPE: Basic Dispel",
    shard_skill_name: "Berserk Potion",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_invoker",
    hero_id: 74,
    has_scepter: true,
    scepter_desc:
      "Creates a Cataclysm when Sun Strike is double tapped. Puts it on a 100 second cooldown. Creates 2 visible Sun Strikes within 160-200 range of each enemy hero. Additionally Increases the level of Quas, Wex and Exort by 1.",
    scepter_skill_name: "Sun Strike",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases damage for each point of mana drained by EMP and pulls enemy units into the EMP's center at 100 units per second.",
    shard_skill_name: "E.M.P.",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_silencer",
    hero_id: 75,
    has_scepter: true,
    scepter_desc: "Causes Last Word to become an AoE ability.",
    scepter_skill_name: "Last Word",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Every 4 attacks, Glaives silence the enemy hit for 1.75 seconds. Additionally, it increases the Intelligence stolen per attack by 2 and per kill to 4.",
    shard_skill_name: "Glaives of Wisdom",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_obsidian_destroyer",
    hero_id: 76,
    has_scepter: true,
    scepter_desc:
      "Damage that brings Outworld Destroyer below 20% health triggers a strong dispel. In addition, when the effect is triggered Outworld Destroyer consumes of all his mana to create an all damage barrier equal to 50% of his maximum mana that lasts for 15 seconds. This effect can occur every 60 seconds and cannot be refreshed.",
    scepter_skill_name: "Essence Flux",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Grants additional Mana Capacity steal to Astral Imprisonment. Also allows allies to move at 60% movement speed during Astral Imprisonment (they are visible, but untargettable and can't perform any other actions).",
    shard_skill_name: "Astral Imprisonment",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_lycan",
    hero_id: 77,
    has_scepter: true,
    scepter_desc:
      "Lycan bites an ally, granting them Shapeshift properties. Lycan and the bitten target gain 30% Lifesteal and share the healing effect of Lifesteal with each other as long as they are within 1200 range of each other.",
    scepter_skill_name: "Wolf Bite",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Causes one of your creep waves to include one uncontrollable wolf that moves with the wave. Additionally, wolves spawned this way may Cripple towers.",
    shard_skill_name: "Summon Wolves",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_brewmaster",
    hero_id: 78,
    has_scepter: true,
    scepter_desc:
      "Creates a Brewling based on Brewmaster's current Drunken Brawler Stance. If the Brewling moves 1600 range away from Brewmaster, it can no longer cast spells and is slowed by 50%. Otherwise, all of the Brewling spells have a 100% cooldown penalty. \n\nA new Brewling cannot be resummoned for 3s if the current one takes damage from enemy Heroes or hero-controlled units. If the Brewling dies, the ability goes on cooldown for 70 seconds.\n\nOnly one Brewling can exist at a time. If Brewmaster uses Primal Split, the existing Brewling disappears.",
    scepter_skill_name: "Primal Companion",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Increases Primal Split duration and allows it to be cancelled early.",
    shard_skill_name: "Primal Split",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_shadow_demon",
    hero_id: 79,
    has_scepter: true,
    scepter_desc:
      "Cooldown is removed, replaced with 2 charges that replenish every 60 seconds. Also causes Demonic Purge to break its target's passive abilities while active.",
    scepter_skill_name: "Demonic Purge",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Cleanses the target allied unit, removing negative buffs for the duration.  At the end of the duration, the unit is healed. Units under the effect of Disruption can still be affected by Demonic Cleanse.\n\nDISPEL TYPE: Basic Dispel",
    shard_skill_name: "Demonic Cleanse",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_lone_druid",
    hero_id: 80,
    has_scepter: true,
    scepter_desc:
      "Allows Spirit Bear to attack at any range from Lone Druid, and to survive if Lone Druid dies.",
    scepter_skill_name: "Summon Spirit Bear",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Applies a basic dispel and grants allies in an area around the caster bonus movement and attack speed. Replicates between Lone Druid and Spirit Bear regardless of castability on the other.\n\nDISPEL TYPE: Basic Dispel",
    shard_skill_name: "Savage Roar",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_chaos_knight",
    hero_id: 81,
    has_scepter: true,
    scepter_desc:
      "Creates an illusion of allied heroes globally. Creates an additional illusion for Chaos Knight as well.",
    scepter_skill_name: "Phantasm",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases  the cast range of Chaos Bolt, and causes it to create a Phantasm illusion to attack the target.",
    shard_skill_name: "Chaos Bolt",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_meepo",
    hero_id: 82,
    has_scepter: true,
    scepter_desc:
      "In MegaMeepo form, Meepo flings the topmost meepo towards a target within a %AbilityCastRange% range, dealing damage and slowing their movement speed.",
    scepter_skill_name: "MegaMeepo Fling",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Digs into the ground for a short duration, dispelling Meepo and causing him to become invulnerable and untargetable for 3s. Restores 35% of his max health over that duration.\n\nDISPEL TYPE: Basic Dispel",
    shard_skill_name: "Dig",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_treant",
    hero_id: 83,
    has_scepter: true,
    scepter_desc:
      "Treant Protector enchants a tree, which grants him unobstructed vision in that location. If Overgrowth is cast, units within a radius of an enchanted tree will be entangled and damaged. Passively causes all trees to respawn much faster.",
    scepter_skill_name: "Eyes In The Forest",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Causes Treant to move faster and become invisible with Nature's Guise and root enemies upon attacking. Deals damage over time and roots for longer if the attack was near a tree.",
    shard_skill_name: "Nature's Guise",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_ogre_magi",
    hero_id: 84,
    has_scepter: true,
    scepter_desc:
      "Blasts an enemy unit with a wave of fire, dealing damage and stunning the target. Its mana cost is 35% of Ogre Magi's current mana.",
    scepter_skill_name: "Unrefined Fireblast",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Creates a shield around the target ally, absorbing a percentage of the damage of next 3 attacks from enemy heroes. When damage is absorbed, a fireball is launched at the attacker. Can be cast on towers.",
    shard_skill_name: "Fire Shield",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_undying",
    hero_id: 85,
    has_scepter: true,
    scepter_desc: "Increases strength steal.",
    scepter_skill_name: "Decay",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Allows up to 1 allied hero to bunker inside of the tombstone. Heroes that enter the Tombstone cannot leave for 3 seconds nor can they re-enter after leaving for the same period of time. Adds an ability on the Tombstone and Undying to manually bunker heroes.",
    shard_skill_name: "Tombstone",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_rubick",
    hero_id: 86,
    has_scepter: true,
    scepter_desc:
      "Increases the number of spells that can be stolen to 2. Increases cast range, and upgrades spells to their Scepter version.",
    scepter_skill_name: "Spell Steal",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Allows you to target yourself or allies with Telekinesis. Throw range is 85% longer and throw delay is reduced to 0.5 seconds.",
    shard_skill_name: "Telekinesis",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_disruptor",
    hero_id: 87,
    has_scepter: true,
    scepter_desc: "Mutes items.",
    scepter_skill_name: "Static Storm",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases the cast range and strike count of Thunder Strike. It can now also be ground targeted, where it will lie dormant for up to 5 seconds and attach to the first enemy that comes within the radius.",
    shard_skill_name: "Thunder Strike",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_nyx_assassin",
    hero_id: 88,
    has_scepter: true,
    scepter_desc:
      "Nyx Assassin buries himself beneath the battlefield over a short duration. Once burrowed, Spiked Carapace instantly stuns nearby enemies when cast, the range of Mana Burn and Impale is increased, and Impale's cooldown is decreased. While burrowed, Nyx Assassin is stationary, unable to attack, and invisible. Nyx gains damage reduction from all damage sources.",
    scepter_skill_name: "Burrow",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Vendetta now moves faster, and a successful Vendetta attack now increases the target's spell damage taken.",
    shard_skill_name: "Vendetta",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_naga_siren",
    hero_id: 89,
    has_scepter: true,
    scepter_desc:
      "CHANNELED - Naga Siren channels for up to 5 seconds, pulling all units affected by Naga's Ensnare in a 1400 range towards her at a speed of 200.",
    scepter_skill_name: "Reel In",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Increases duration. Song of the Siren heals allies by 5% of their Max HP per second for its duration.",
    shard_skill_name: "Song of the Siren",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_keeper_of_the_light",
    hero_id: 90,
    has_scepter: true,
    scepter_desc:
      "Summons Ignis Fatuus at the targeted area. Alternates on and off, drawing enemies closer with its mesmerising flicker.",
    scepter_skill_name: "Will-O-Wisp",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "After a short delay, teleports the targeted friendly hero to your location.  If the targeted friendly hero takes player based damage during this time, the ability is interrupted.",
    shard_skill_name: "Recall",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_wisp",
    hero_id: 91,
    has_scepter: true,
    scepter_desc:
      "Spirits now passively spawn around Io constantly every second up to the max. Spirits colliding with enemy Heroes slows them briefly. Can be activated to explode spirits.",
    scepter_skill_name: "Spirits",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases Overcharge Spell Amplification, and Io gains Spell Lifesteal and can now share Spell Lifesteal with its tethered target.",
    shard_skill_name: "Overcharge",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_visage",
    hero_id: 92,
    has_scepter: true,
    scepter_desc:
      "Turns Visage and familiars invisible, granting Visage bonus movement speed and upgrading its movement type to flying. When Visage or its familiars leave invisibility they deal more damage for a short duration. Lasts 35 seconds. Invisibility ends when attacking or casting.",
    scepter_skill_name: "Silent as the Grave",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Grants Visage the ability to cast Gravekeeper's Cloak. Restores up to 25% of your health.",
    shard_skill_name: "Gravekeeper's Cloak",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_slark",
    hero_id: 93,
    has_scepter: true,
    scepter_desc: "Provides charges and increases range.",
    scepter_skill_name: "Pounce",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Creates a cloud at the target location. All allies inside the radius are hidden and affected by Shadow Dance.",
    shard_skill_name: "Depth Shroud",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_medusa",
    hero_id: 94,
    has_scepter: true,
    scepter_desc:
      "Causes Mystic Snake to turn enemies hit into stone. Stone duration increases with each bounce of the Mystic Snake.",
    scepter_skill_name: "Mystic Snake",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "When Medusa is targeted with a spell, a single-target Mystic Snake is sent back towards the enemy.",
    shard_skill_name: "Cold Blooded",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_troll_warlord",
    hero_id: 95,
    has_scepter: true,
    scepter_desc:
      "Causes Whirling Axes (Melee) to dispel Troll Warlord. Reduces cooldown and mana cost.\n\nDISPEL TYPE: Basic Dispel",
    scepter_skill_name: "Whirling Axes (Melee)",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Grants all allied Heroes globally a bonus based on whichever stance Troll Warlord is currently in. Ranged provides bonus Attack Speed and melee provides Status Resistance.",
    shard_skill_name: "Rampage",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_centaur",
    hero_id: 96,
    has_scepter: true,
    scepter_desc:
      "Centaur tosses an ally into a cart hitched behind him. While in the cart, Centaur gains the benefit of Stampede and the ally can still cast and attack normally, but cannot move independently or be targeted by opponents. Non-targeted effects can still affect the hitched ally. Increases the attack range of melee heroes by 200.",
    scepter_skill_name: "Hitch A Ride",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Causes Double Edge to slow enemy heroes and increase Centaur's strength per hero hit for a short time. Duration refreshes per stack, up to a max of 5 stacks.",
    shard_skill_name: "Double Edge",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_magnataur",
    hero_id: 97,
    has_scepter: true,
    scepter_desc:
      "Magnus tosses any enemies in front of him, launching them to his rear. Enemies take damage, spend 0.6 seconds in the air, and then are stunned upon landing.",
    scepter_skill_name: "Horn Toss",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Increases range, and causes Shockwave to return towards the caster's original cast location after reaching max length, hitting enemies a second time for 50% of the damage.",
    shard_skill_name: "Shockwave",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_shredder",
    hero_id: 98,
    has_scepter: true,
    scepter_desc:
      "Reactive Armor can now be activated to get max stacks and 200 damage barrier. Grants Timbersaw 100 + 75 barrier amount per second for each enemy hero within 600 radius of Timbersaw up to a maximum of 800. After 8 seconds, Timbersaw deals damage to every hero within 600 radius equal to 200 + his remaining barrier amount and loses all of his barrier.",
    scepter_skill_name: "Reactive Armor",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Releases a flame in the direction Timbersaw is facing. Applies a debuff that deals damage per second and slows enemy movement speed. Affects buildings for reduced damage.",
    shard_skill_name: "Flamethrower",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_bristleback",
    hero_id: 99,
    has_scepter: true,
    scepter_desc:
      "Viscous Nasal Goo becomes a no target area of effect ability, applying to all enemies within range. Increases stack limit.",
    scepter_skill_name: "Viscous Nasal Goo",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Coughs a quill-packed hairball towards the target location. Erupts at the location, hitting enemies in with Viscous Nasal Goo and stacks of Quill Spray.",
    shard_skill_name: "Hairball",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_tusk",
    hero_id: 100,
    has_scepter: true,
    scepter_desc:
      "Kicks the closest enemy unit in the drawn direction, stunning, damaging, and slowing them. Also deals damage to all heroes within 250 radius of its landing area. Cooldown is reduced by 50% if kicking a creep.",
    scepter_skill_name: "Walrus Kick",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Increases depth of Ice Shards, and enemies trapped within an ice shard are slowed and take damage per second.",
    shard_skill_name: "Ice Shards",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_skywrath_mage",
    hero_id: 101,
    has_scepter: true,
    scepter_desc:
      "When Skywrath Mage casts Mystic Flare, another Mystic Flare will be created on the position of a different random target enemy within 700 range. Heroes will take priority.",
    scepter_skill_name: "Mystic Flare",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Every time Skywrath Mage deals magic damage to an enemy hero with an ability, he gains a buff that grants bonus Intelligence and Armor. Each charge stacks independently.",
    shard_skill_name: "Shield of the Scion",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_abaddon",
    hero_id: 102,
    has_scepter: true,
    scepter_desc:
      "Increases duration. While Borrowed Time is active, anytime an ally takes more than 525 damage while within 1200 range of Abaddon, an individual Mist Coil will automatically fire towards that ally.",
    scepter_skill_name: "Borrowed Time",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Causes Mist Coil to deal Abaddon's attack damage on impact. Increases Curse of Avernus base slow.",
    shard_skill_name: "Curse of Avernus",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_elder_titan",
    hero_id: 103,
    has_scepter: true,
    scepter_desc:
      "Causes Elder Titan to become debuff immune and gain 50% magic resistance for 2 seconds per affected enemy Hero when the spirit returns.",
    scepter_skill_name: "Astral Spirit",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Lowers Cooldown. Echo Stomp may be placed on autocast to allow Elder Titan to take the place of the Astral Spirit as it completes its stomp.",
    shard_skill_name: "Echo Stomp",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_legion_commander",
    hero_id: 104,
    has_scepter: true,
    scepter_desc:
      "Increases Duel duration and reduces cooldown.  Legion Commander and her opponent take reduced damage from other sources.",
    scepter_skill_name: "Duel",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Overwhelming Odds now grants armor for every unit hit and has increased duration.",
    shard_skill_name: "Overwhelming Odds",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_techies",
    hero_id: 105,
    has_scepter: true,
    scepter_desc:
      "Increases radius and duration of Minefield Sign. When an enemy hero walks within 200 units of a minefield sign, the 1000 units area around the sign will become a minefield for 10 seconds, dealing damage to enemy units any time they move within its area. Minefield Sign is destroyed after this effect ends.",
    scepter_skill_name: "Minefield Sign",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Reactive Tazer can be cast on allies and deals damage on detonation. Also deals damage to any enemy that attacks the affected ally.",
    shard_skill_name: "Reactive Tazer",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_ember_spirit",
    hero_id: 106,
    has_scepter: true,
    scepter_desc:
      "Increases cast range, initial remnant speed, and maximum charges.",
    scepter_skill_name: "Fire Remnant",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Fire Remnants deal damage per second in an area around them. If an enemy hero dies near Ember Spirit, a Fire Remnant charge will be replenished.",
    shard_skill_name: "Fire Remnant",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_earth_spirit",
    hero_id: 107,
    has_scepter: true,
    scepter_desc:
      "Earth Spirit temporarily enchants a hero, granting them the properties of a Stone Remnant. After a short duration the remnant shatters, releasing the hero and damaging nearby enemies. < br>\nCan be cast on Stone Remnants. Has a 5 second cooldown when used that way.\nHas a larger cast range when cast on an ally hero.",
    scepter_skill_name: "Enchant Remnant",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc: "Can now grab allies.",
    shard_skill_name: "Geomagnetic Grip",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_abyssal_underlord",
    hero_id: 108,
    has_scepter: true,
    scepter_desc: "Summons a Pit of Malice around each of the portals.",
    scepter_skill_name: "Fiend's Gate",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Firestorm can be self-targeted. When used that way, the Firestorm follows Underlord around.  The wave count is increased, and tick rate / duration time occur more quickly.",
    shard_skill_name: "Firestorm",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_terrorblade",
    hero_id: 109,
    has_scepter: true,
    scepter_desc:
      "Causes a wave to travel outwards in all directions forcing enemy heroes to become Feared upon impact, and grants Terrorblade Metamorphosis for a short time.",
    scepter_skill_name: "Terror Wave",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Costs part of Terrorblade's current HP to cast, dispelling Terrorblade and providing bonus movement and attack speed.  The bonuses are stronger out of Metamorphosis.\n\nDISPEL TYPE: Basic Dispel",
    shard_skill_name: "Demon Zeal",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_phoenix",
    hero_id: 110,
    has_scepter: true,
    scepter_desc:
      "Increases number of attacks to destroy Supernova and allows Phoenix to cast Supernova on an allied hero, bringing both into the sun to be reborn together.",
    scepter_skill_name: "Supernova",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Allows Sun Ray to be cast during Supernova, and slows affected enemies by 12%.",
    shard_skill_name: "Sun Ray",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_oracle",
    hero_id: 111,
    has_scepter: true,
    scepter_desc:
      "Causes False Promise to have a 0.15 second fade delay invisibility and grants the ally 25% bonus Spell Damage and 0.25 reduced Base Attack Time.",
    scepter_skill_name: "False Promise",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Brings forth rain to the target area. Enemies standing in the area receive damage and have reduced heal amplification. Allies in the area heal and have increased incoming heal amplification.",
    shard_skill_name: "Rain of Destiny",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_winter_wyvern",
    hero_id: 112,
    has_scepter: true,
    scepter_desc:
      "Causes Arctic Burn to be a toggle ability, draining mana every second when active. Removes limit on number of attacks per target. Increases Winter Wyvern's movement speed.",
    scepter_skill_name: "Arctic Burn",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "When Cold Embrace ends, a Splinter Blast goes off at that location, hitting enemies within 1200 range. Reduces cooldown by 4 seconds.",
    shard_skill_name: "Cold Embrace",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_arc_warden",
    hero_id: 113,
    has_scepter: true,
    scepter_desc:
      "Causes Spark Wraiths to spawn a new Spark Wraith after impacting an enemy, which then starts its 2.0 second activation period. The new Spark Wraiths last 15 seconds and has a radius of 225",
    scepter_skill_name: "Spark Wraith",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "<h2>Arc Warden:</h2> Magnetic Field pushes enemies out of the area when cast and slows them while they are in it. Also provides allies inside with magic resistance.",
    shard_skill_name: "Magnetic Field",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_monkey_king",
    hero_id: 114,
    has_scepter: true,
    scepter_desc:
      "Spawns a monkey soldier near Monkey King at regular intervals. Soldiers do not spawn while invisible or on trees. Soldiers only attack buildings when Monkey King himself is nearby. Soldiers can now gain Jingu Mastery charges independently.",
    scepter_skill_name: "Wukong's Command",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "When Boundless Strike is set to autocast, Monkey King leaps to the end of his staff as soon as Boundless Strike hits the ground.",
    shard_skill_name: "Boundless Strike",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_dark_willow",
    hero_id: 119,
    has_scepter: true,
    scepter_desc:
      "Attacking no longer takes Dark Willow out of Shadow Realm. Each attack still has bonus damage based on the duration of the buff.",
    scepter_skill_name: "Shadow Realm",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Cursed Crown creates 4 brambles in a 175 radius around the target after the counter ends. Triggers even upon dispel. Reduces stun delay by 1 second.",
    shard_skill_name: "Cursed Crown",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_pangolier",
    hero_id: 120,
    has_scepter: true,
    scepter_desc:
      "Causes Shield Crash to cast a 2-attack Swashbuckle every 90 degrees around your hero.",
    scepter_skill_name: "Shield Crash",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Pangolier curls into an immobile protective ball, gaining debuff immunity, 50% magic resistance, and allowing him to turn. Can be cast during Rolling Thunder to temporarily hit the brakes. Can cast Rolling Thunder and Shield Crash during Roll Up. If enemies attack Pangolier during this, he will roll away from the attacker, applying Rolling Thunder damage/stun if there are enemies in the way.",
    shard_skill_name: "Roll Up",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_grimstroke",
    hero_id: 121,
    has_scepter: true,
    scepter_desc:
      "Creates an ink illusion of a target enemy hero. Illusion is debuff immune, has 95% magic resistance, and has bonus movement speed and attack damage.",
    scepter_skill_name: "Dark Portrait",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Causes Ink Swell to deal 40% more damage and heal the target for 40% of the damage Ink Swell deals. Upon expiration, the target will receive a strong dispel.\n\nDISPEL TYPE: Strong Dispel",
    shard_skill_name: "Ink Swell",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_hoodwink",
    hero_id: 123,
    has_scepter: true,
    scepter_desc:
      "Hoodwink turns invisible, increasing her movement speed, and creates a decoy illusion that starts aiming a decreased damage Sharpshooter at the nearest enemy hero. If the illusion is attacked or hit by a targeted ability, it is destroyed and it throws a lesser bushwhack towards the enemy.",
    scepter_skill_name: "Decoy",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Tosses a boomerang in an arc. Upon contact, it returns to Hoodwink.  The boomerang will deal damage as it passes through or hits enemies, and apply a Hunter's Mark that causes affected enemies to be slowed and be more vulnerable to spell damage.",
    shard_skill_name: "Hunter's Boomerang",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_void_spirit",
    hero_id: 126,
    has_scepter: true,
    scepter_desc: "Causes Resonant Pulse to silence and gain 2 charges.",
    scepter_skill_name: "Resonant Pulse",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Increases Aether Remnant watch range and only pulls enemy hero units. Other units are still damaged, but the remnant is not destroyed. Decreases cooldown to 15s.",
    shard_skill_name: "Aether Remnant",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_snapfire",
    hero_id: 128,
    has_scepter: true,
    scepter_desc:
      "Mortimer spits out the unit that's in his mouth, causing impact damage and stun in a large area. The glob leaves a pool of firespit that slows and applies damage over time. Spit Out has a no minimum launch range.",
    scepter_skill_name: "Spit Out",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Firesnap cookies become even more potent, getting increased jump range and launching a Mortimer Kiss that does 50% impact damage to the landing destination.",
    shard_skill_name: "Firesnap Cookie",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_mars",
    hero_id: 129,
    has_scepter: true,
    scepter_desc:
      "Creates invulnerable soldiers around Mars' front while Bulwark is toggled on. Soldiers move alongside Mars, dealing his attacks that have bonus damage and slow enemies. An enemy can only be attacked by one soldier at a time.",
    scepter_skill_name: "Bulwark",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Spear of Mars impales up to two units and leaves a fire trail behind that deals damage over time and slows movement speed.",
    shard_skill_name: "Spear of Mars",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_dawnbreaker",
    hero_id: 135,
    has_scepter: true,
    scepter_desc:
      "Reduces the channel time and increases the healing and total duration of Solar Guardian's air time. Causes allies in the destination area to have evasion while Dawnbreaker is airborne. Solar Guardian can be cast again after take off to land early. While airborne, the landing point of Solar Guardian can be moved at a speed of 200.",
    scepter_skill_name: "Solar Guardian",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Dawnbreaker gains debuff immunity, 50% magic resistance, and free movement during Starbreaker. Dawnbreaker is slowed by 25% down to a minimum of 215.",
    shard_skill_name: "Starbreaker",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_marci",
    hero_id: 136,
    has_scepter: true,
    scepter_desc:
      "Reduces Unleash cooldown by 20.0 seconds and causes Unleash to apply a basic dispel on Marci. While Unleash is Active, all of Marci's abilities unleash pulses when cast. All of Marci's unleash pulses will silence units for 1.5 seconds.\n\nDISPEL TYPE: Basic Dispel",
    scepter_skill_name: "Unleash",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Rebound can be cast on enemies and causes Marci to also get the speed boost when she casts it.",
    shard_skill_name: "Rebound",
    shard_new_skill: false,
  },
  {
    hero_name: "npc_dota_hero_primal_beast",
    hero_id: 137,
    has_scepter: true,
    scepter_desc:
      "When Primal Beast activates Uproar, he releases 3 waves of 2 projectiles per stack of uproar each in a circle around him. Projectiles deal damage and Break enemies hit. After a short delay, each projectile splinters in two.",
    scepter_skill_name: "Uproar",
    scepter_new_skill: false,
    has_shard: true,
    shard_desc:
      "Primal Beast throws a rock at the target location that stuns and damages enemies. The rock cannot be thrown within a minimum range of Primal Beast. After landing, the throck splits into 3 additional fragments that land behind the initial target location.",
    shard_skill_name: "Rock Throw",
    shard_new_skill: true,
  },
  {
    hero_name: "npc_dota_hero_muerta",
    hero_id: 138,
    has_scepter: true,
    scepter_desc:
      "Muerta precisely shoots a hero in their soul, separating it from their physical body and knocking it 150 units away.\nThe soul is untargetable, muted, disarmed, and invulnerable for 4 seconds.\nThe body is stunned and has 50% damage reduction for this duration.\n\nAfter the effect ends the hero's soul is forcefully returned to their body applying a strong dispel. The soul will survive until the end of the effect even if the hero is killed.",
    scepter_skill_name: "Parting Shot",
    scepter_new_skill: true,
    has_shard: true,
    shard_desc:
      "Muerta gains 30% Spell Lifesteal during Pierce the Veil.\nWhile Pierce the Veil is active Muerta permanently gains 2% spell amplification each time she kills an enemy Hero or they die in her vicinity.",
    shard_skill_name: "Pierce the Veil",
    shard_new_skill: false,
  },
];
