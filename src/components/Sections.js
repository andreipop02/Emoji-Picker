import SmileyEmoticons from './smileyEmojis';
import Nature from './animalsAndNature';
import Food from './foodAndDrinksEmojis';
import Travel from './travelAndPlacesEmojis';
import Activities from './activitiesEmojis';
import Objects from './objectsEmojis';
import Symbols from './symbolsEmojis';
import Flags from './flagsEmojis';

const Sections = [
  {
    title: 'Smiley and People',
    data: SmileyEmoticons,
  },
  {
    title: 'Animals and Nature',
    data: Nature,
  },
  {
    title: 'Food and Drinks',
    data: Food,
  },
  {
    title: 'Travel and Places',
    data: Travel,
  },
  {
    title: 'Activities',
    data: Activities,
  },
  {
    title: 'Objects',
    data: Objects,
  },
  {
    title: 'Symbols',
    data: Symbols,
  },
  {
    title: 'Flags',
    data: Flags,
  },
];

export default Sections;