const Symbols = [
  {
    emoji: '๐ง',
    description: 'ATM sign',
    category: 'Symbols',
    aliases: ['atm'],
  },
  {
    emoji: '๐ฎ',
    description: 'litter in bin sign',
    category: 'Symbols',
    aliases: ['put_litter_in_its_place'],
  },
  {
    emoji: '๐ฐ',
    description: 'potable water',
    category: 'Symbols',
    aliases: ['potable_water'],
  },
  {
    emoji: 'โฟ',
    description: 'wheelchair symbol',
    category: 'Symbols',
    aliases: ['wheelchair'],
    tags: ['accessibility'],
  },
  {
    emoji: '๐น',
    description: 'menโs room',
    category: 'Symbols',
    aliases: ['mens'],
  },
  {
    emoji: '๐บ',
    description: 'womenโs room',
    category: 'Symbols',
    aliases: ['womens'],
  },
  {
    emoji: '๐ป',
    description: 'restroom',
    category: 'Symbols',
    aliases: ['restroom'],
    tags: ['toilet'],
  },
  {
    emoji: '๐ผ',
    description: 'baby symbol',
    category: 'Symbols',
    aliases: ['baby_symbol'],
  },
  {
    emoji: '๐พ',
    description: 'water closet',
    category: 'Symbols',
    aliases: ['wc'],
    tags: ['toilet', 'restroom'],
  },
  {
    emoji: '๐',
    description: 'passport control',
    category: 'Symbols',
    aliases: ['passport_control'],
  },
  {
    emoji: '๐',
    description: 'customs',
    category: 'Symbols',
    aliases: ['customs'],
  },
  {
    emoji: '๐',
    description: 'baggage claim',
    category: 'Symbols',
    aliases: ['baggage_claim'],
    tags: ['airport'],
  },
  {
    emoji: '๐',
    description: 'left luggage',
    category: 'Symbols',
    aliases: ['left_luggage'],
  },
  {
    emoji: 'โ ๏ธ',
    description: 'warning',
    category: 'Symbols',
    aliases: ['warning'],
    tags: ['wip'],
  },
  {
    emoji: '๐ธ',
    description: 'children crossing',
    category: 'Symbols',
    aliases: ['children_crossing'],
  },
  {
    emoji: 'โ',
    description: 'no entry',
    category: 'Symbols',
    aliases: ['no_entry'],
    tags: ['limit'],
  },
  {
    emoji: '๐ซ',
    description: 'prohibited',
    category: 'Symbols',
    aliases: ['no_entry_sign'],
    tags: ['block', 'forbidden'],
  },
  {
    emoji: '๐ณ',
    description: 'no bicycles',
    category: 'Symbols',
    aliases: ['no_bicycles'],
  },
  {
    emoji: '๐ญ',
    description: 'no smoking',
    category: 'Symbols',
    aliases: ['no_smoking'],
  },
  {
    emoji: '๐ฏ',
    description: 'no littering',
    category: 'Symbols',
    aliases: ['do_not_litter'],
  },
  {
    emoji: '๐ฑ',
    description: 'non-potable water',
    category: 'Symbols',
    aliases: ['non-potable_water'],
  },
  {
    emoji: '๐ท',
    description: 'no pedestrians',
    category: 'Symbols',
    aliases: ['no_pedestrians'],
  },
  {
    emoji: '๐ต',
    description: 'no mobile phones',
    category: 'Symbols',
    aliases: ['no_mobile_phones'],
  },
  {
    emoji: '๐',
    description: 'no one under eighteen',
    category: 'Symbols',
    aliases: ['underage'],
  },
  {
    emoji: 'โข๏ธ',
    description: 'radioactive',
    category: 'Symbols',
    aliases: ['radioactive'],
  },
  {
    emoji: 'โฃ๏ธ',
    description: 'biohazard',
    category: 'Symbols',
    aliases: ['biohazard'],
  },
  {
    emoji: 'โฌ๏ธ',
    description: 'up arrow',
    category: 'Symbols',
    aliases: ['arrow_up'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'up-right arrow',
    category: 'Symbols',
    aliases: ['arrow_upper_right'],
  },
  {
    emoji: 'โก๏ธ',
    description: 'right arrow',
    category: 'Symbols',
    aliases: ['arrow_right'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'down-right arrow',
    category: 'Symbols',
    aliases: ['arrow_lower_right'],
  },
  {
    emoji: 'โฌ๏ธ',
    description: 'down arrow',
    category: 'Symbols',
    aliases: ['arrow_down'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'down-left arrow',
    category: 'Symbols',
    aliases: ['arrow_lower_left'],
  },
  {
    emoji: 'โฌ๏ธ',
    description: 'left arrow',
    category: 'Symbols',
    aliases: ['arrow_left'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'up-left arrow',
    category: 'Symbols',
    aliases: ['arrow_upper_left'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'up-down arrow',
    category: 'Symbols',
    aliases: ['arrow_up_down'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'left-right arrow',
    category: 'Symbols',
    aliases: ['left_right_arrow'],
  },
  {
    emoji: 'โฉ๏ธ',
    description: 'right arrow curving left',
    category: 'Symbols',
    aliases: ['leftwards_arrow_with_hook'],
    tags: ['return'],
  },
  {
    emoji: 'โช๏ธ',
    description: 'left arrow curving right',
    category: 'Symbols',
    aliases: ['arrow_right_hook'],
  },
  {
    emoji: 'โคด๏ธ',
    description: 'right arrow curving up',
    category: 'Symbols',
    aliases: ['arrow_heading_up'],
  },
  {
    emoji: 'โคต๏ธ',
    description: 'right arrow curving down',
    category: 'Symbols',
    aliases: ['arrow_heading_down'],
  },
  {
    emoji: '๐',
    description: 'clockwise vertical arrows',
    category: 'Symbols',
    aliases: ['arrows_clockwise'],
  },
  {
    emoji: '๐',
    description: 'counterclockwise arrows button',
    category: 'Symbols',
    aliases: ['arrows_counterclockwise'],
    tags: ['sync'],
  },
  {
    emoji: '๐',
    description: 'BACK arrow',
    category: 'Symbols',
    aliases: ['back'],
  },
  {
    emoji: '๐',
    description: 'END arrow',
    category: 'Symbols',
    aliases: ['end'],
  },
  {
    emoji: '๐',
    description: 'ON! arrow',
    category: 'Symbols',
    aliases: ['on'],
  },
  {
    emoji: '๐',
    description: 'SOON arrow',
    category: 'Symbols',
    aliases: ['soon'],
  },
  {
    emoji: '๐',
    description: 'TOP arrow',
    category: 'Symbols',
    aliases: ['top'],
  },
  {
    emoji: '๐',
    description: 'place of worship',
    category: 'Symbols',
    aliases: ['place_of_worship'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'atom symbol',
    category: 'Symbols',
    aliases: ['atom_symbol'],
  },
  {
    emoji: '๐๏ธ',
    description: 'om',
    category: 'Symbols',
    aliases: ['om'],
  },
  {
    emoji: 'โก๏ธ',
    description: 'star of David',
    category: 'Symbols',
    aliases: ['star_of_david'],
  },
  {
    emoji: 'โธ๏ธ',
    description: 'wheel of dharma',
    category: 'Symbols',
    aliases: ['wheel_of_dharma'],
  },
  {
    emoji: 'โฏ๏ธ',
    description: 'yin yang',
    category: 'Symbols',
    aliases: ['yin_yang'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'latin cross',
    category: 'Symbols',
    aliases: ['latin_cross'],
  },
  {
    emoji: 'โฆ๏ธ',
    description: 'orthodox cross',
    category: 'Symbols',
    aliases: ['orthodox_cross'],
  },
  {
    emoji: 'โช๏ธ',
    description: 'star and crescent',
    category: 'Symbols',
    aliases: ['star_and_crescent'],
  },
  {
    emoji: 'โฎ๏ธ',
    description: 'peace symbol',
    category: 'Symbols',
    aliases: ['peace_symbol'],
  },
  {
    emoji: '๐',
    description: 'menorah',
    category: 'Symbols',
    aliases: ['menorah'],
  },
  {
    emoji: '๐ฏ',
    description: 'dotted six-pointed star',
    category: 'Symbols',
    aliases: ['six_pointed_star'],
  },
  {
    emoji: 'โ',
    description: 'Aries',
    category: 'Symbols',
    aliases: ['aries'],
  },
  {
    emoji: 'โ',
    description: 'Taurus',
    category: 'Symbols',
    aliases: ['taurus'],
  },
  {
    emoji: 'โ',
    description: 'Gemini',
    category: 'Symbols',
    aliases: ['gemini'],
  },
  {
    emoji: 'โ',
    description: 'Cancer',
    category: 'Symbols',
    aliases: ['cancer'],
  },
  {
    emoji: 'โ',
    description: 'Leo',
    category: 'Symbols',
    aliases: ['leo'],
  },
  {
    emoji: 'โ',
    description: 'Virgo',
    category: 'Symbols',
    aliases: ['virgo'],
  },
  {
    emoji: 'โ',
    description: 'Libra',
    category: 'Symbols',
    aliases: ['libra'],
  },
  {
    emoji: 'โ',
    description: 'Scorpio',
    category: 'Symbols',
    aliases: ['scorpius'],
  },
  {
    emoji: 'โ',
    description: 'Sagittarius',
    category: 'Symbols',
    aliases: ['sagittarius'],
  },
  {
    emoji: 'โ',
    description: 'Capricorn',
    category: 'Symbols',
    aliases: ['capricorn'],
  },
  {
    emoji: 'โ',
    description: 'Aquarius',
    category: 'Symbols',
    aliases: ['aquarius'],
  },
  {
    emoji: 'โ',
    description: 'Pisces',
    category: 'Symbols',
    aliases: ['pisces'],
  },
  {
    emoji: 'โ',
    description: 'Ophiuchus',
    category: 'Symbols',
    aliases: ['ophiuchus'],
  },
  {
    emoji: '๐',
    description: 'shuffle tracks button',
    category: 'Symbols',
    aliases: ['twisted_rightwards_arrows'],
    tags: ['shuffle'],
  },
  {
    emoji: '๐',
    description: 'repeat button',
    category: 'Symbols',
    aliases: ['repeat'],
    tags: ['loop'],
  },
  {
    emoji: '๐',
    description: 'repeat single button',
    category: 'Symbols',
    aliases: ['repeat_one'],
  },
  {
    emoji: 'โถ๏ธ',
    description: 'play button',
    category: 'Symbols',
    aliases: ['arrow_forward'],
  },
  {
    emoji: 'โฉ',
    description: 'fast-forward button',
    category: 'Symbols',
    aliases: ['fast_forward'],
  },
  {
    emoji: 'โญ๏ธ',
    description: 'next track button',
    category: 'Symbols',
    aliases: ['next_track_button'],
  },
  {
    emoji: 'โฏ๏ธ',
    description: 'play or pause button',
    category: 'Symbols',
    aliases: ['play_or_pause_button'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'reverse button',
    category: 'Symbols',
    aliases: ['arrow_backward'],
  },
  {
    emoji: 'โช',
    description: 'fast reverse button',
    category: 'Symbols',
    aliases: ['rewind'],
  },
  {
    emoji: 'โฎ๏ธ',
    description: 'last track button',
    category: 'Symbols',
    aliases: ['previous_track_button'],
  },
  {
    emoji: '๐ผ',
    description: 'upwards button',
    category: 'Symbols',
    aliases: ['arrow_up_small'],
  },
  {
    emoji: 'โซ',
    description: 'fast up button',
    category: 'Symbols',
    aliases: ['arrow_double_up'],
  },
  {
    emoji: '๐ฝ',
    description: 'downwards button',
    category: 'Symbols',
    aliases: ['arrow_down_small'],
  },
  {
    emoji: 'โฌ',
    description: 'fast down button',
    category: 'Symbols',
    aliases: ['arrow_double_down'],
  },
  {
    emoji: 'โธ๏ธ',
    description: 'pause button',
    category: 'Symbols',
    aliases: ['pause_button'],
  },
  {
    emoji: 'โน๏ธ',
    description: 'stop button',
    category: 'Symbols',
    aliases: ['stop_button'],
  },
  {
    emoji: 'โบ๏ธ',
    description: 'record button',
    category: 'Symbols',
    aliases: ['record_button'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'eject button',
    category: 'Symbols',
    aliases: ['eject_button'],
  },
  {
    emoji: '๐ฆ',
    description: 'cinema',
    category: 'Symbols',
    aliases: ['cinema'],
    tags: ['film', 'movie'],
  },
  {
    emoji: '๐',
    description: 'dim button',
    category: 'Symbols',
    aliases: ['low_brightness'],
  },
  {
    emoji: '๐',
    description: 'bright button',
    category: 'Symbols',
    aliases: ['high_brightness'],
  },
  {
    emoji: '๐ถ',
    description: 'antenna bars',
    category: 'Symbols',
    aliases: ['signal_strength'],
    tags: ['wifi'],
  },
  {
    emoji: '๐ณ',
    description: 'vibration mode',
    category: 'Symbols',
    aliases: ['vibration_mode'],
  },
  {
    emoji: '๐ด',
    description: 'mobile phone off',
    category: 'Symbols',
    aliases: ['mobile_phone_off'],
    tags: ['mute', 'off'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'female sign',
    category: 'Symbols',
    aliases: ['female_sign'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'male sign',
    category: 'Symbols',
    aliases: ['male_sign'],
  },
  {
    emoji: 'โง๏ธ',
    description: 'transgender symbol',
    category: 'Symbols',
    aliases: ['transgender_symbol'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'multiply',
    category: 'Symbols',
    aliases: ['heavy_multiplication_x'],
  },
  {
    emoji: 'โ',
    description: 'plus',
    category: 'Symbols',
    aliases: ['heavy_plus_sign'],
  },
  {
    emoji: 'โ',
    description: 'minus',
    category: 'Symbols',
    aliases: ['heavy_minus_sign'],
  },
  {
    emoji: 'โ',
    description: 'divide',
    category: 'Symbols',
    aliases: ['heavy_division_sign'],
  },
  {
    emoji: 'โพ๏ธ',
    description: 'infinity',
    category: 'Symbols',
    aliases: ['infinity'],
  },
  {
    emoji: 'โผ๏ธ',
    description: 'double exclamation mark',
    category: 'Symbols',
    aliases: ['bangbang'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'exclamation question mark',
    category: 'Symbols',
    aliases: ['interrobang'],
  },
  {
    emoji: 'โ',
    description: 'red question mark',
    category: 'Symbols',
    aliases: ['question'],
    tags: ['confused'],
  },
  {
    emoji: 'โ',
    description: 'white question mark',
    category: 'Symbols',
    aliases: ['grey_question'],
  },
  {
    emoji: 'โ',
    description: 'white exclamation mark',
    category: 'Symbols',
    aliases: ['grey_exclamation'],
  },
  {
    emoji: 'โ',
    description: 'red exclamation mark',
    category: 'Symbols',
    aliases: ['exclamation', 'heavy_exclamation_mark'],
    tags: ['bang'],
  },
  {
    emoji: 'ใฐ๏ธ',
    description: 'wavy dash',
    category: 'Symbols',
    aliases: ['wavy_dash'],
  },
  {
    emoji: '๐ฑ',
    description: 'currency exchange',
    category: 'Symbols',
    aliases: ['currency_exchange'],
  },
  {
    emoji: '๐ฒ',
    description: 'heavy dollar sign',
    category: 'Symbols',
    aliases: ['heavy_dollar_sign'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'medical symbol',
    category: 'Symbols',
    aliases: ['medical_symbol'],
  },
  {
    emoji: 'โป๏ธ',
    description: 'recycling symbol',
    category: 'Symbols',
    aliases: ['recycle'],
    tags: ['environment', 'green'],
    unicode_version: '3.2',
  },
  {
    emoji: 'โ๏ธ',
    description: 'fleur-de-lis',
    category: 'Symbols',
    aliases: ['fleur_de_lis'],
  },
  {
    emoji: '๐ฑ',
    description: 'trident emblem',
    category: 'Symbols',
    aliases: ['trident'],
  },
  {
    emoji: '๐',
    description: 'name badge',
    category: 'Symbols',
    aliases: ['name_badge'],
  },
  {
    emoji: '๐ฐ',
    description: 'Japanese symbol for beginner',
    category: 'Symbols',
    aliases: ['beginner'],
  },
  {
    emoji: 'โญ',
    description: 'hollow red circle',
    category: 'Symbols',
    aliases: ['o'],
  },
  {
    emoji: 'โ',
    description: 'check mark button',
    category: 'Symbols',
    aliases: ['white_check_mark'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'check box with check',
    category: 'Symbols',
    aliases: ['ballot_box_with_check'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'check mark',
    category: 'Symbols',
    aliases: ['heavy_check_mark'],
  },
  {
    emoji: 'โ',
    description: 'cross mark',
    category: 'Symbols',
    aliases: ['x'],
  },
  {
    emoji: 'โ',
    description: 'cross mark button',
    category: 'Symbols',
    aliases: ['negative_squared_cross_mark'],
  },
  {
    emoji: 'โฐ',
    description: 'curly loop',
    category: 'Symbols',
    aliases: ['curly_loop'],
  },
  {
    emoji: 'โฟ',
    description: 'double curly loop',
    category: 'Symbols',
    aliases: ['loop'],
  },
  {
    emoji: 'ใฝ๏ธ',
    description: 'part alternation mark',
    category: 'Symbols',
    aliases: ['part_alternation_mark'],
    unicode_version: '3.2',
  },
  {
    emoji: 'โณ๏ธ',
    description: 'eight-spoked asterisk',
    category: 'Symbols',
    aliases: ['eight_spoked_asterisk'],
  },
  {
    emoji: 'โด๏ธ',
    description: 'eight-pointed star',
    category: 'Symbols',
    aliases: ['eight_pointed_black_star'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'sparkle',
    category: 'Symbols',
    aliases: ['sparkle'],
  },
  {
    emoji: 'ยฉ๏ธ',
    description: 'copyright',
    category: 'Symbols',
    aliases: ['copyright'],
  },
  {
    emoji: 'ยฎ๏ธ',
    description: 'registered',
    category: 'Symbols',
    aliases: ['registered'],
  },
  {
    emoji: 'โข๏ธ',
    description: 'trade mark',
    category: 'Symbols',
    aliases: ['tm'],
    tags: ['trademark'],
  },
  {
    emoji: '#๏ธโฃ',
    description: 'keycap: #',
    category: 'Symbols',
    aliases: ['hash'],
    tags: ['number'],
  },
  {
    emoji: '*๏ธโฃ',
    description: 'keycap: *',
    category: 'Symbols',
    aliases: ['asterisk'],
  },
  {
    emoji: '0๏ธโฃ',
    description: 'keycap: 0',
    category: 'Symbols',
    aliases: ['zero'],
  },
  {
    emoji: '1๏ธโฃ',
    description: 'keycap: 1',
    category: 'Symbols',
    aliases: ['one'],
  },
  {
    emoji: '2๏ธโฃ',
    description: 'keycap: 2',
    category: 'Symbols',
    aliases: ['two'],
  },
  {
    emoji: '3๏ธโฃ',
    description: 'keycap: 3',
    category: 'Symbols',
    aliases: ['three'],
  },
  {
    emoji: '4๏ธโฃ',
    description: 'keycap: 4',
    category: 'Symbols',
    aliases: ['four'],
  },
  {
    emoji: '5๏ธโฃ',
    description: 'keycap: 5',
    category: 'Symbols',
    aliases: ['five'],
  },
  {
    emoji: '6๏ธโฃ',
    description: 'keycap: 6',
    category: 'Symbols',
    aliases: ['six'],
  },
  {
    emoji: '7๏ธโฃ',
    description: 'keycap: 7',
    category: 'Symbols',
    aliases: ['seven'],
  },
  {
    emoji: '8๏ธโฃ',
    description: 'keycap: 8',
    category: 'Symbols',
    aliases: ['eight'],
  },
  {
    emoji: '9๏ธโฃ',
    description: 'keycap: 9',
    category: 'Symbols',
    aliases: ['nine'],
  },
  {
    emoji: '๐',
    description: 'keycap: 10',
    category: 'Symbols',
    aliases: ['keycap_ten'],
  },
  {
    emoji: '๐ ',
    description: 'input latin uppercase',
    category: 'Symbols',
    aliases: ['capital_abcd'],
    tags: ['letters'],
  },
  {
    emoji: '๐ก',
    description: 'input latin lowercase',
    category: 'Symbols',
    aliases: ['abcd'],
  },
  {
    emoji: '๐ข',
    description: 'input numbers',
    category: 'Symbols',
    aliases: ['1234'],
    tags: ['numbers'],
  },
  {
    emoji: '๐ฃ',
    description: 'input symbols',
    category: 'Symbols',
    aliases: ['symbols'],
  },
  {
    emoji: '๐ค',
    description: 'input latin letters',
    category: 'Symbols',
    aliases: ['abc'],
    tags: ['alphabet'],
  },
  {
    emoji: '๐ฐ๏ธ',
    description: 'A button (blood type)',
    category: 'Symbols',
    aliases: ['a'],
  },
  {
    emoji: '๐',
    description: 'AB button (blood type)',
    category: 'Symbols',
    aliases: ['ab'],
  },
  {
    emoji: '๐ฑ๏ธ',
    description: 'B button (blood type)',
    category: 'Symbols',
    aliases: ['b'],
  },
  {
    emoji: '๐',
    description: 'CL button',
    category: 'Symbols',
    aliases: ['cl'],
  },
  {
    emoji: '๐',
    description: 'COOL button',
    category: 'Symbols',
    aliases: ['cool'],
  },
  {
    emoji: '๐',
    description: 'FREE button',
    category: 'Symbols',
    aliases: ['free'],
  },
  {
    emoji: 'โน๏ธ',
    description: 'information',
    category: 'Symbols',
    aliases: ['information_source'],
  },
  {
    emoji: '๐',
    description: 'ID button',
    category: 'Symbols',
    aliases: ['id'],
  },
  {
    emoji: 'โ๏ธ',
    description: 'circled M',
    category: 'Symbols',
    aliases: ['m'],
  },
  {
    emoji: '๐',
    description: 'NEW button',
    category: 'Symbols',
    aliases: ['new'],
    tags: ['fresh'],
  },
  {
    emoji: '๐',
    description: 'NG button',
    category: 'Symbols',
    aliases: ['ng'],
  },
  {
    emoji: '๐พ๏ธ',
    description: 'O button (blood type)',
    category: 'Symbols',
    aliases: ['o2'],
  },
  {
    emoji: '๐',
    description: 'OK button',
    category: 'Symbols',
    aliases: ['ok'],
    tags: ['yes'],
  },
  {
    emoji: '๐ฟ๏ธ',
    description: 'P button',
    category: 'Symbols',
    aliases: ['parking'],
  },
  {
    emoji: '๐',
    description: 'SOS button',
    category: 'Symbols',
    aliases: ['sos'],
    tags: ['help', 'emergency'],
  },
  {
    emoji: '๐',
    description: 'UP! button',
    category: 'Symbols',
    aliases: ['up'],
  },
  {
    emoji: '๐',
    description: 'VS button',
    category: 'Symbols',
    aliases: ['vs'],
  },
  {
    emoji: '๐',
    description: 'Japanese โhereโ button',
    category: 'Symbols',
    aliases: ['koko'],
  },
  {
    emoji: '๐๏ธ',
    description: 'Japanese โservice chargeโ button',
    category: 'Symbols',
    aliases: ['sa'],
  },
  {
    emoji: '๐ท๏ธ',
    description: 'Japanese โmonthly amountโ button',
    category: 'Symbols',
    aliases: ['u6708'],
  },
  {
    emoji: '๐ถ',
    description: 'Japanese โnot free of chargeโ button',
    category: 'Symbols',
    aliases: ['u6709'],
  },
  {
    emoji: '๐ฏ',
    description: 'Japanese โreservedโ button',
    category: 'Symbols',
    aliases: ['u6307'],
  },
  {
    emoji: '๐',
    description: 'Japanese โbargainโ button',
    category: 'Symbols',
    aliases: ['ideograph_advantage'],
  },
  {
    emoji: '๐น',
    description: 'Japanese โdiscountโ button',
    category: 'Symbols',
    aliases: ['u5272'],
  },
  {
    emoji: '๐',
    description: 'Japanese โfree of chargeโ button',
    category: 'Symbols',
    aliases: ['u7121'],
  },
  {
    emoji: '๐ฒ',
    description: 'Japanese โprohibitedโ button',
    category: 'Symbols',
    aliases: ['u7981'],
  },
  {
    emoji: '๐',
    description: 'Japanese โacceptableโ button',
    category: 'Symbols',
    aliases: ['accept'],
  },
  {
    emoji: '๐ธ',
    description: 'Japanese โapplicationโ button',
    category: 'Symbols',
    aliases: ['u7533'],
  },
  {
    emoji: '๐ด',
    description: 'Japanese โpassing gradeโ button',
    category: 'Symbols',
    aliases: ['u5408'],
  },
  {
    emoji: '๐ณ',
    description: 'Japanese โvacancyโ button',
    category: 'Symbols',
    aliases: ['u7a7a'],
  },
  {
    emoji: 'ใ๏ธ',
    description: 'Japanese โcongratulationsโ button',
    category: 'Symbols',
    aliases: ['congratulations'],
  },
  {
    emoji: 'ใ๏ธ',
    description: 'Japanese โsecretโ button',
    category: 'Symbols',
    aliases: ['secret'],
  },
  {
    emoji: '๐บ',
    description: 'Japanese โopen for businessโ button',
    category: 'Symbols',
    aliases: ['u55b6'],
  },
  {
    emoji: '๐ต',
    description: 'Japanese โno vacancyโ button',
    category: 'Symbols',
    aliases: ['u6e80'],
  },
  {
    emoji: '๐ด',
    description: 'red circle',
    category: 'Symbols',
    aliases: ['red_circle'],
  },
  {
    emoji: '๐ ',
    description: 'orange circle',
    category: 'Symbols',
    aliases: ['orange_circle'],
  },
  {
    emoji: '๐ก',
    description: 'yellow circle',
    category: 'Symbols',
    aliases: ['yellow_circle'],
  },
  {
    emoji: '๐ข',
    description: 'green circle',
    category: 'Symbols',
    aliases: ['green_circle'],
  },
  {
    emoji: '๐ต',
    description: 'blue circle',
    category: 'Symbols',
    aliases: ['large_blue_circle'],
  },
  {
    emoji: '๐ฃ',
    description: 'purple circle',
    category: 'Symbols',
    aliases: ['purple_circle'],
  },
  {
    emoji: '๐ค',
    description: 'brown circle',
    category: 'Symbols',
    aliases: ['brown_circle'],
  },
  {
    emoji: 'โซ',
    description: 'black circle',
    category: 'Symbols',
    aliases: ['black_circle'],
  },
  {
    emoji: 'โช',
    description: 'white circle',
    category: 'Symbols',
    aliases: ['white_circle'],
  },
  {
    emoji: '๐ฅ',
    description: 'red square',
    category: 'Symbols',
    aliases: ['red_square'],
  },
  {
    emoji: '๐ง',
    description: 'orange square',
    category: 'Symbols',
    aliases: ['orange_square'],
  },
  {
    emoji: '๐จ',
    description: 'yellow square',
    category: 'Symbols',
    aliases: ['yellow_square'],
  },
  {
    emoji: '๐ฉ',
    description: 'green square',
    category: 'Symbols',
    aliases: ['green_square'],
  },
  {
    emoji: '๐ฆ',
    description: 'blue square',
    category: 'Symbols',
    aliases: ['blue_square'],
  },
  {
    emoji: '๐ช',
    description: 'purple square',
    category: 'Symbols',
    aliases: ['purple_square'],
  },
  {
    emoji: '๐ซ',
    description: 'brown square',
    category: 'Symbols',
    aliases: ['brown_square'],
  },
  {
    emoji: 'โฌ',
    description: 'black large square',
    category: 'Symbols',
    aliases: ['black_large_square'],
  },
  {
    emoji: 'โฌ',
    description: 'white large square',
    category: 'Symbols',
    aliases: ['white_large_square'],
  },
  {
    emoji: 'โผ๏ธ',
    description: 'black medium square',
    category: 'Symbols',
    aliases: ['black_medium_square'],
    unicode_version: '3.2',
  },
  {
    emoji: 'โป๏ธ',
    description: 'white medium square',
    category: 'Symbols',
    aliases: ['white_medium_square'],
    unicode_version: '3.2',
  },
  {
    emoji: 'โพ',
    description: 'black medium-small square',
    category: 'Symbols',
    aliases: ['black_medium_small_square'],
    unicode_version: '3.2',
  },
  {
    emoji: 'โฝ',
    description: 'white medium-small square',
    category: 'Symbols',
    aliases: ['white_medium_small_square'],
    unicode_version: '3.2',
  },
  {
    emoji: 'โช๏ธ',
    description: 'black small square',
    category: 'Symbols',
    aliases: ['black_small_square'],
  },
  {
    emoji: 'โซ๏ธ',
    description: 'white small square',
    category: 'Symbols',
    aliases: ['white_small_square'],
  },
  {
    emoji: '๐ถ',
    description: 'large orange diamond',
    category: 'Symbols',
    aliases: ['large_orange_diamond'],
  },
  {
    emoji: '๐ท',
    description: 'large blue diamond',
    category: 'Symbols',
    aliases: ['large_blue_diamond'],
  },
  {
    emoji: '๐ธ',
    description: 'small orange diamond',
    category: 'Symbols',
    aliases: ['small_orange_diamond'],
  },
  {
    emoji: '๐น',
    description: 'small blue diamond',
    category: 'Symbols',
    aliases: ['small_blue_diamond'],
  },
  {
    emoji: '๐บ',
    description: 'red triangle pointed up',
    category: 'Symbols',
    aliases: ['small_red_triangle'],
  },
  {
    emoji: '๐ป',
    description: 'red triangle pointed down',
    category: 'Symbols',
    aliases: ['small_red_triangle_down'],
  },
  {
    emoji: '๐ ',
    description: 'diamond with a dot',
    category: 'Symbols',
    aliases: ['diamond_shape_with_a_dot_inside'],
  },
  {
    emoji: '๐',
    description: 'radio button',
    category: 'Symbols',
    aliases: ['radio_button'],
  },
  {
    emoji: '๐ณ',
    description: 'white square button',
    category: 'Symbols',
    aliases: ['white_square_button'],
  },
  {
    emoji: '๐ฒ',
    description: 'black square button',
    category: 'Symbols',
    aliases: ['black_square_button'],
  },
];

export default Symbols;
