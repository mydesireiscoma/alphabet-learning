require('./index.css');

var Quiz = require('./scripts/quiz');

var quiz = new Quiz([
  {
    name: 'Japan',
    code: 'ja',
    api: 'https://translate.google.ru/translate_tts?ie=UTF-8&q=%s&tl=%l&total=1&idx=0&textlen=1&client=tw-ob&ttsspeed=0.24',
    groups: [[
      { letter: 'あ', description: 'a' },
      { letter: 'い', description: 'i' },
      { letter: 'う', description: 'u' },
      { letter: 'え', description: 'e' },
      { letter: 'お', description: 'o' }
    ], [
      { letter: 'か', description: 'ka' },
      { letter: 'き', description: 'ki' },
      { letter: 'く', description: 'ku' },
      { letter: 'け', description: 'ke' },
      { letter: 'こ', description: 'ko' }
    ], [
      { letter: 'さ', description: 'sa' },
      { letter: 'し', description: 'shi' },
      { letter: 'す', description: 'su' },
      { letter: 'せ', description: 'se' },
      { letter: 'そ', description: 'so' }
    ], [
      { letter: 'た', description: 'ta' },
      { letter: 'ち', description: 'chi' },
      { letter: 'つ', description: 'tsu' },
      { letter: 'て', description: 'te' },
      { letter: 'と', description: 'to' }
    ], [
      { letter: 'は', description: 'ha' },
      { letter: 'ひ', description: 'hi' },
      { letter: 'ふ', description: 'fu' },
      { letter: 'へ', description: 'he' },
      { letter: 'ほ', description: 'ho' }
    ], [
      { letter: 'ら', description: 'ra' },
      { letter: 'り', description: 'ri' },
      { letter: 'る', description: 'ru' },
      { letter: 'れ', description: 're' },
      { letter: 'ろ', description: 'ro' }
    ], [
      { letter: 'や', description: 'ya' },
      { letter: 'ゆ', description: 'yu' },
      { letter: 'よ', description: 'yo' }
    ], [
      { letter: 'わ', description: 'wa' },
      { letter: 'を', description: 'wo' },
      { letter: 'ん', description: 'n' }
    ]]
  }
]);

quiz.start();
