/* ============================================
   Dictionary - Common English words (2–7 letters)
   ============================================ */

const Dictionary = (() => {
  const WORDS = [
    'AA','AB','AD','AM','AN','AS','AT','AW','AX','AY','BE','BY','DO','GO','HE','HI',
    'IF','IN','IS','IT','ME','MY','NO','OF','ON','OR','OW','OX','SO','TO','UP','US',
    'WE','ACE','ACT','ADD','AGE','AGO','AID','AIM','AIR','ALL','AND','ANT','ANY','APE',
    'APT','ARC','ARE','ARM','ART','ASH','ASK','ATE','AWE','AXE','BAD','BAG','BAN',
    'BAR','BAT','BAY','BED','BEE','BEG','BET','BIG','BIN','BIT','BOW','BOX','BOY',
    'BUD','BUG','BUN','BUS','BUT','BUY','CAB','CAN','CAP','CAR','CAT','COW','CRY',
    'CUB','CUP','CUT','DAD','DAM','DAY','DEN','DEW','DID','DIE','DIG','DIM','DIP',
    'DOG','DOT','DRY','DUE','DUG','DUN','DYE','EAR','EAT','EGG','ELF','ELK','END',
    'ERA','EVE','EYE','FAD','FAN','FAR','FAT','FED','FEE','FEW','FIG','FIN','FIR',
    'FIT','FIX','FLU','FLY','FOE','FOG','FOR','FOX','FRY','FUN','FUR','GAP','GAS',
    'GAY','GEL','GEM','GET','GIG','GIN','GOD','GOT','GUM','GUN','GUT','GUY','GYM',
    'HAD','HAM','HAT','HAY','HEN','HER','HEW','HID','HIM','HIP','HIS','HIT','HOB',
    'HOG','HOP','HOT','HOW','HUB','HUE','HUG','HUM','HUT','ICE','ILL','INK','INN',
    'ION','IRE','IRK','ITS','IVY','JAB','JAM','JAR','JAW','JAY','JET','JIG','JOB',
    'JOG','JOT','JOY','JUG','KEG','KEN','KEY','KID','KIN','KIT','LAB','LAD','LAG',
    'LAP','LAW','LAY','LED','LEG','LET','LID','LIE','LIP','LIT','LOG','LOT','LOW',
    'LUG','LYE','MAD','MAN','MAP','MAT','MAW','MAX','MAY','MEN','MET','MID','MIX',
    'MOB','MOD','MOM','MOP','MOW','MUD','MUG','NAP','NET','NEW','NIB','NIL','NIP',
    'NIT','NOD','NOR','NOT','NOW','NUN','NUT','OAK','OAR','OAT','ODD','ODE','OFF',
    'OFT','OHM','OIL','OLD','ONE','OPT','ORE','OUR','OUT','OWL','OWN','PAD','PAL',
    'PAN','PAT','PAW','PAY','PEA','PEG','PEN','PET','PEW','PIE','PIG','PIN','PIT',
    'POD','POP','POT','POW','PRO','PRY','PUB','PUG','PUN','PUP','PUT','RAG','RAM',
    'RAN','RAP','RAT','RAW','RAY','RED','RIB','RID','RIG','RIM','RIP','ROB','ROD',
    'ROE','ROT','ROW','RUB','RUE','RUG','RUM','RUN','RUT','RYE','SAD','SAG','SAP',
    'SAT','SAW','SAY','SEA','SET','SEW','SHE','SHY','SIN','SIP','SIR','SIT','SIX',
    'SKI','SKY','SLY','SOB','SOD','SON','SOP','SOT','SOW','SOY','SPA','SPY','SUB',
    'SUM','SUN','SUP','TAB','TAD','TAG','TAN','TAP','TAR','TAT','TAX','TEA','TEN',
    'THE','THY','TIC','TIE','TIN','TIP','TOE','TON','TOO','TOP','TOT','TOW','TOY',
    'TRY','TUB','TUG','TUN','TWO','URN','USE','VAN','VAT','VET','VIA','VIE','VOW',
    'WAD','WAG','WAN','WAR','WAS','WAX','WAY','WEB','WED','WEE','WET','WHO','WHY',
    'WIG','WIN','WIT','WOE','WON','WOO','WOW','WRY','YAK','YAM','YAP','YAW','YEA',
    'YEN','YEP','YES','YET','YOU','ZAP','ZIP','ZOO',
    'ABLE','ACHE','ACID','ACRE','AGED','AIDE','ALSO','ALTO','AMID','ANEW','ANTE',
    'ARCH','AREA','ARID','ARMY','ATOM','AUNT','AUTO','AWAY','BABY','BACK','BAIL',
    'BAIT','BAKE','BALD','BALE','BALL','BAND','BANE','BANG','BANK','BARE','BARK',
    'BARN','BASE','BASH','BASK','BATH','BEAD','BEAK','BEAM','BEAN','BEAR','BEAT',
    'BEEF','BEEN','BEER','BELL','BELT','BEND','BENT','BEST','BETA','BIAS','BIKE',
    'BILE','BILL','BIND','BIRD','BITE','BLOW','BLUE','BLUR','BOAR','BOAT','BODY',
    'BOIL','BOLD','BOLT','BOMB','BOND','BONE','BOOK','BOOM','BOOT','BORE','BORN',
    'BOSS','BOTH','BOUT','BOWL','BOYS','BRED','BREW','BULK','BULL','BUMP','BURN',
    'BURY','BUSH','BUSY','BUZZ','CAGE','CAKE','CALL','CALM','CAME','CAMP','CANE',
    'CAPE','CARD','CARE','CART','CASE','CASH','CAST','CAVE','CELL','CHAT','CHEF',
    'CHEW','CHIN','CHIP','CHOP','CITE','CITY','CLAD','CLAM','CLAN','CLAP','CLAW',
    'CLAY','CLIP','CLOD','CLOG','CLOT','CLUB','CLUE','COAL','COAT','COCK','CODE',
    'COIL','COIN','COLD','COLT','COMB','COME','CONE','COOK','COOL','COPE','COPY',
    'CORD','CORE','CORK','CORN','COST','COUP','COVE','CRAB','CRAM','CREW','CROP',
    'CROW','CUBE','CULT','CURB','CURE','CURL','CUTE','DAMP','DARE','DARK','DART',
    'DASH','DATA','DATE','DAWN','DAYS','DEAD','DEAF','DEAL','DEAN','DEAR','DEBT',
    'DECK','DEED','DEEP','DEER','DELI','DEMO','DENT','DESK','DIAL','DICE','DIET',
    'DIME','DINE','DIRE','DIRT','DISC','DISH','DISK','DIVE','DOCK','DOSE','DOTE',
    'DOVE','DOWN','DRAG','DRAW','DREW','DROP','DRUG','DRUM','DUAL','DUCK','DUDE',
    'DUEL','DUKE','DULL','DUMB','DUMP','DUNE','DUSK','DUST','DUTY','EACH','EARL',
    'EARN','EASE','EAST','EASY','ECHO','EDGE','EDIT','ELSE','EMIT','EPIC','EVEN',
    'EVER','EVIL','EXAM','EXIT','FACE','FACT','FADE','FAIL','FAIR','FAKE','FALL',
    'FAME','FANG','FARE','FARM','FAST','FATE','FEAR','FEAT','FEED','FEEL','FEET',
    'FELL','FELT','FERN','FILE','FILL','FILM','FIND','FINE','FIRE','FIRM','FISH',
    'FIST','FIVE','FLAG','FLAT','FLAW','FLEA','FLED','FLEE','FLEW','FLIP','FLOW',
    'FLUX','FOAM','FOIL','FOLD','FOLK','FOND','FOOD','FOOL','FOOT','FORD','FORE',
    'FORK','FORM','FORT','FOUL','FOUR','FREE','FROG','FROM','FUEL','FULL','FUME',
    'FUND','FURY','FUSE','FUSS','GAIN','GALE','GAME','GANG','GATE','GAVE','GAZE',
    'GEAR','GENE','GIFT','GIRL','GIVE','GLAD','GLOW','GLUE','GOAL','GOAT','GOLD',
    'GOLF','GONE','GOOD','GORE','GRAB','GRAM','GRAY','GREW','GREY','GRID','GRIM',
    'GRIN','GRIP','GRIT','GROW','GULF','GUST','HAIL','HAIR','HALF','HALL','HALT',
    'HAND','HANG','HARD','HARE','HARM','HARP','HATE','HAWK','HAYS','HAZE','HEAD',
    'HEAL','HEAP','HEAR','HEAT','HEEL','HELD','HELL','HELP','HERB','HERD','HERE',
    'HERO','HIDE','HIGH','HIKE','HILL','HINT','HIRE','HOLD','HOLE','HOLY','HOME',
    'HOOD','HOOF','HOOK','HOOP','HOPE','HORN','HOSE','HOST','HOUR','HOWL','HUGE',
    'HULL','HUNG','HUNT','HURT','HUSH','ICON','IDEA','IDLE','INCH','INTO','IRON',
    'ITEM','JAZZ','JOIN','JOKE','JUMP','JURY','JUST','KEEN','KEEP','KEPT','KICK',
    'KIND','KING','KISS','KITE','KNEE','KNEW','KNIT','KNOT','KNOW','LACE','LACK',
    'LADY','LAID','LAKE','LAME','LAMP','LAND','LANE','LARK','LASH','LAST','LATE',
    'LAWN','LAZY','LEAD','LEAF','LEAK','LEAN','LEAP','LEFT','LEND','LENS','LESS',
    'LIED','LIFE','LIFT','LIKE','LIMB','LIME','LINE','LINK','LION','LIST','LIVE',
    'LOAD','LOAF','LOAN','LOCK','LOFT','LONE','LONG','LOOK','LOOP','LORD','LORE',
    'LOSE','LOSS','LOST','LOUD','LOVE','LUCK','LUMP','LUNG','LURE','LURK','LUSH',
    'LUST','MADE','MAID','MAIL','MAIN','MAKE','MALE','MALL','MANE','MANY','MARE',
    'MARK','MARS','MASK','MASS','MAST','MATE','MATH','MAZE','MEAL','MEAN','MEAT',
    'MEET','MELT','MEMO','MEND','MENU','MERE','MESH','MESS','MICE','MILD','MILE',
    'MILK','MILL','MIND','MINE','MINT','MISS','MIST','MITE','MODE','MOLE','MOOD',
    'MOON','MOOR','MORE','MOSS','MOST','MOTH','MOVE','MUCH','MULE','MUSE','MUST',
    'MUTE','MYTH','NAIL','NAME','NAPE','NAVY','NEAR','NEAT','NECK','NEED','NEST',
    'NEWS','NEXT','NICE','NINE','NODE','NOON','NORM','NOSE','NOTE','NOUN','NUMB',
    'OATH','ODOR','OKAY','ONCE','ONLY','ONTO','OPEN','ORAL','OVEN','OVER','OWED',
    'PACE','PACK','PACT','PAGE','PAID','PAIL','PAIN','PAIR','PALE','PALM','PANE',
    'PARK','PART','PASS','PAST','PATH','PAVE','PEAK','PEAR','PEEL','PEER','PIER',
    'PIKE','PILE','PILL','PINE','PINK','PIPE','PLAN','PLAY','PLEA','PLOT','PLUG',
    'PLUM','PLUS','POEM','POET','POLE','POLL','POND','POOL','POOR','POPE','PORK',
    'PORT','POSE','POST','POUR','PRAY','PREY','PULL','PUMP','PURE','PUSH','QUIT',
    'RACE','RACK','RAGE','RAID','RAIL','RAIN','RAKE','RAMP','RANK','RARE','RATE',
    'READ','REAL','REAR','REED','REEF','REEL','RELY','RENT','REST','RICE','RICH',
    'RIDE','RIFT','RING','RIPE','RISE','RISK','ROAD','ROAM','ROAR','ROBE','ROCK',
    'RODE','ROLE','ROLL','ROOF','ROOM','ROOT','ROPE','ROSE','ROSY','ROTE','ROUT',
    'ROVE','ROWS','RUDE','RUIN','RULE','RUNG','RUSH','RUST','SACK','SAFE','SAGE',
    'SAID','SAIL','SAKE','SALE','SALT','SAME','SAND','SANE','SANG','SANK','SAVE',
    'SCAN','SCAR','SEAL','SEAM','SEAT','SEED','SEEK','SEEM','SEEN','SELF','SELL',
    'SEND','SENT','SEPT','SHED','SHIP','SHOE','SHOP','SHOT','SHOW','SHUT','SICK',
    'SIDE','SIGH','SIGN','SILK','SILL','SING','SINK','SIRE','SITE','SIZE','SKIN',
    'SKIP','SLAB','SLAM','SLAP','SLIM','SLIP','SLOT','SLOW','SLUG','SLUM','SNAP',
    'SNOW','SOAK','SOAP','SOAR','SOCK','SODA','SOFA','SOFT','SOIL','SOLD','SOLE',
    'SOLO','SOME','SONG','SOON','SORE','SORT','SOUL','SOUP','SOUR','SOWN','SPAN',
    'SPAR','SPIN','SPIT','SPOT','SPUR','STAB','STAG','STAR','STAY','STEM','STEP',
    'STEW','STIR','STOP','STUB','STUD','SUCH','SUIT','SUMS','SUNG','SUNK','SURE',
    'SWAN','SWAP','SWAY','SWIM','TAIL','TAKE','TALE','TALK','TALL','TAME','TANK',
    'TAPE','TART','TASK','TAXI','TEAM','TEAR','TELL','TEND','TENT','TERM','TEST',
    'TEXT','THAN','THAT','THEM','THEN','THEY','THIN','THIS','THUS','TICK','TIDE',
    'TIED','TILE','TILL','TILT','TIME','TINY','TIRE','TOAD','TOIL','TOLD','TOLL',
    'TOMB','TONE','TOOK','TOOL','TORE','TORN','TOSS','TOUR','TOWN','TRAP','TRAY',
    'TREE','TREK','TRIM','TRIO','TRIP','TROT','TRUE','TUBE','TUCK','TUNE','TURF',
    'TURN','TWIN','TYPE','UGLY','UNDO','UNIT','UPON','URGE','USED','USER','VAIN',
    'VASE','VAST','VEIL','VEIN','VERB','VERY','VEST','VETO','VICE','VIEW','VINE',
    'VOID','VOLT','VOTE','WADE','WAGE','WAIT','WAKE','WALK','WALL','WAND','WANT',
    'WARD','WARM','WARN','WARP','WASH','WAVE','WEAK','WEAR','WEED','WEEK','WELD',
    'WELL','WENT','WERE','WEST','WHAT','WHEN','WHIP','WIDE','WIFE','WILD','WILL',
    'WIND','WINE','WING','WINK','WIRE','WISE','WISH','WITH','WOLF','WOOD','WOOL',
    'WORD','WORE','WORK','WORM','WORN','WRAP','YARD','YARN','YEAR','YELL','YOGA',
    'YOKE','YOUR','ZERO','ZONE','FOWL','ROLE','ORE','ROW','LOW','FLOW','PLAN',
    'PANE','LANE','ALE','STORM','MOST','ROSY','SOY','ROM',
  ];

  const WORD_SET = new Set(WORDS);

  function _letterCounts(letters) {
    const counts = {};
    letters.forEach(l => {
      const c = l.toUpperCase();
      counts[c] = (counts[c] || 0) + 1;
    });
    return counts;
  }

  function canFormWord(word, letterCounts) {
    const need = {};
    for (const ch of word.toUpperCase()) {
      need[ch] = (need[ch] || 0) + 1;
    }
    for (const ch in need) {
      if ((letterCounts[ch] || 0) < need[ch]) return false;
    }
    return true;
  }

  function hasWord(word) {
    return WORD_SET.has(word.toUpperCase());
  }

  function isValidExtra(word, letters, targetWords) {
    const upper = word.toUpperCase();
    if (upper.length < 2) return false;
    if (!hasWord(upper)) return false;
    const targets = targetWords.map(w => w.toUpperCase());
    if (targets.includes(upper)) return false;
    return canFormWord(upper, _letterCounts(letters));
  }

  return {
    hasWord,
    canFormWord: (word, letters) => canFormWord(word, _letterCounts(letters)),
    isValidExtra,
  };
})();
