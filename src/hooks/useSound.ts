import { useMemo } from 'react';

const synth = window.speechSynthesis;
const useSound = () => {
  const thaiVoice = useMemo(() => {
    const voices = window.speechSynthesis.getVoices();
    return voices.find((v) => v.lang === 'th-TH');
  }, []);
  const readText = (text: string) => {
    const utterThis = new SpeechSynthesisUtterance(text);
    if (thaiVoice) utterThis.voice = thaiVoice;
    synth.speak(utterThis);
  };
  return { readText };
};

export default useSound;
