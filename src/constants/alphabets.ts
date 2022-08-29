import alphabets from './alphabets.json';
interface Alphabet {
  type: 'consonant' | 'long vowel' | 'short vowel';
  letter: string;
  example: string;
  'english-sound'?: string;
  /** letter meaning for easing memorization */
  'english-meaning'?: string;
}

export default alphabets as Alphabet[];
