import alphabets from './alphabets.json';
interface Alphabet {
  index: `${number}`;
  type: 'consonant' | 'long vowel' | 'short vowel';
  letter: string;
  example: string;
  'english-sound'?: string;
  /** letter meaning for easing memorization */
  'english-meaning'?: string;
  'occurrence-percentage'?: `${number}`;
}

export default alphabets as Alphabet[];
