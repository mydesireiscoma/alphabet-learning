!function(t){function e(r){if(i[r])return i[r].exports;var n=i[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var i={};e.m=t,e.c=i,e.d=function(t,i,r){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e){var i=function(){function t(){}return t.addClass=function(t,e){if(!this.isString(e)||!e.length)throw new Error("Class name should be non-empty string");t.className.length?this.hasClass(t,e)||(t.className=t.className.replace(e,"")+" "+e):t.className=e},t.hasClass=function(t,e){if(!this.isString(e)||!e.length)throw new Error("Class name should be non-empty string");return t.className.indexOf(" "+e)>-1||t.className.indexOf(e+" ")>-1||t.className===e},t.removeClass=function(t,e){if(!this.isString(e)||!e.length)throw new Error("Class name should be non-empty string");this.hasClass(t,e)&&(t.className=t.className.replace(" "+e,"").replace(e+" ","").replace(e,""))},t.isString=function(t){return this.isTypeOf(t,"string")},t.isNumber=function(t){return this.isTypeOf(t,"number")},t.isArray=function(t){return this.isInstanceOf(t,Array)},t.isTypeOf=function(t,e){return String(typeof t).toLowerCase()===String(e).toLowerCase()},t.isInstanceOf=function(t,e){return t instanceof e},t.getRandomUpTo=function(t){if(!this.isNumber(t))throw new Error("Value should be a number");return Math.floor(Math.random()*t)},t.arrayItemsAreInstancesOf=function(t,e){if(!this.isArray(t))throw new Error("Is not an array");for(var i=t.length,r=0;r<i;r++)if(!(t[r]instanceof e))return!1;return!0},t}();t.exports=i},function(t,e,i){var r=i(0),n=function(){function t(t,e){this.__verifyInputData(t,e),this.__id=t,this.__score=0,this.__letter=e.letter,this.__sentence=e.sentence,this.__description=e.description}return t.prototype={constructor:t,getId:function(){return this.__id},getScore:function(){return this.__score},addScore:function(){this.__score++},reduceScore:function(){this.__score--},getLetter:function(){return this.__letter},getSentence:function(){return this.__sentence},getDescription:function(){return this.__description},__verifyInputData:function(t,e){if(!r.isNumber(t))throw new TypeError("Letter ID is incorrect");if(!r.isString(e.letter)||!e.letter.length)throw new Error('"Letter" propery is required and cannot be empty');if(!r.isString(e.description)||!e.description.length)throw new Error('"Description" property is required and cannot be empty');if(r.isString(e.sentence)&&!e.sentence.length)throw new Error("Sentence cannot be empty if passed in")}},t}();t.exports=n},function(t,e,i){i(3);var r=i(14),n=i(15);new(i(4))([n,r]).start()},function(t,e){},function(t,e,i){var r=i(0),n=i(5),s=function(){function t(t){this.__verifyInputData(t),this.__view={},this.__alphabets=t,this.__difficulty=1,this.__currentGroup=[],this.__currentQuestion=null,this.__currentDatabase=null,this.__currentOptionElement=null,this.__currentOptionElementIndex=-1,this.__ANIMATIONS_DELAY=400,this.__MIN_SCORE_TO_REMEMBER=1,this.__ELEMENT_QUESTION_SUCCESS_CLASS="quiz__question_shake",this.__ELEMENT_QUESTION_FAILURE_CLASS="quiz__question_shake",this.__ELEMENT_OPTION_SUCCESS_CLASS="quiz__option_right",this.__ELEMENT_OPTION_FAILURE_CLASS="quiz__option_wrong",this.__ELEMENT_OPTION_CLASS="quiz__option",this.__ELEMENT_QUIZ_CONTAINER="quiz",this.__ELEMENT_QUESTION_ID="quiz__question",this.__ELEMENT_SENTENCE_ID="quiz__sentence",this.__ELEMENT_OPTIONS_ID="quiz__options",this.__ELEMENT_MESSAGE_ID="quiz__message",this.__ELEMENT_OPTION_DATA_ID_NAME="data-id",this.__EVENTS_MOUSEUP_NAME="mouseup",this.__EVENTS_KEYDOWN_NAME="keydown",this.__KEY_CODE_UP=38,this.__KEY_CODE_DOWN=40,this.__KEY_CODE_LEFT=37,this.__KEY_CODE_RIGHT=39,this.__KEY_CODE_ENTER=13,this.__KEY_CODE_SPACE=32}return t.prototype={constructor:t,start:function(){this.__initQuestions(),this.__initKeyboard(),this.__initView(),this.__next()},__initQuestions:function(){this.__currentDatabase=new n(this.__alphabets[0])},__initKeyboard:function(){document.addEventListener(this.__EVENTS_KEYDOWN_NAME,function(t){switch(t.keyCode){case this.__KEY_CODE_LEFT:case this.__KEY_CODE_DOWN:this.__focusPreviousOption();break;case this.__KEY_CODE_UP:case this.__KEY_CODE_RIGHT:this.__focusNextOption();break;case this.__KEY_CODE_SPACE:case this.__KEY_CODE_ENTER:this.__chooseOption(t)}}.bind(this))},__focusNextOption:function(){this.__currentOptionElementIndex<this.__currentGroup.size()-1?this.__currentOptionElementIndex++:this.__currentOptionElementIndex=0,this.__focusOptionWithCurrentIndex()},__focusPreviousOption:function(){this.__currentOptionElementIndex>0?this.__currentOptionElementIndex--:this.__currentOptionElementIndex=this.__currentGroup.size()-1,this.__focusOptionWithCurrentIndex()},__focusOptionWithCurrentIndex:function(){this.__view.options.childNodes[this.__currentOptionElementIndex]||(this.__currentOptionElementIndex=0),this.__view.options.childNodes[this.__currentOptionElementIndex].focus()},__initView:function(){this.__view.container=document.getElementById(this.__ELEMENT_QUIZ_CONTAINER),this.__view.sentence=document.getElementById(this.__ELEMENT_SENTENCE_ID),this.__view.question=document.getElementById(this.__ELEMENT_QUESTION_ID),this.__view.options=document.getElementById(this.__ELEMENT_OPTIONS_ID),this.__view.message=document.getElementById(this.__ELEMENT_MESSAGE_ID),setTimeout(function(){r.removeClass(this.__view.container,"quiz__loading")}.bind(this),this.__ANIMATIONS_DELAY)},__next:function(){setTimeout(function(){this.__rollQuestion(),this.__displayMessage(),this.__displaySentence(),this.__displayQuestion(),this.__displayOptions(),this.__focusOptionWithCurrentIndex(),this.__pronounceAnswer()}.bind(this),this.__ANIMATIONS_DELAY)},__rollQuestion:function(){this.__currentGroup=this.__currentDatabase.getGroup(r.getRandomUpTo(this.__difficulty)),this.__currentQuestion=this.__currentGroup.getLetter(r.getRandomUpTo(this.__currentGroup.size()))},__shuffleOptions:function(t){var e,i,n;for(n=t.length-1;n>0;n--)e=r.getRandomUpTo(n+1),i=t[n],t[n]=t[e],t[e]=i},__chooseOption:function(t){var e=Number(t.target.getAttribute(this.__ELEMENT_OPTION_DATA_ID_NAME));this.__currentOptionElement=t.target,e===this.__currentQuestion.getId()?(this.__currentQuestion.addScore(),this.__increaseDifficultyIfNeeded(),this.__showWhatAnswerIsCorrect(),this.__next()):(this.__currentQuestion.reduceScore(),this.__showWhatAnswerIsWrong(),this.__pronounceAnswer())},__increaseDifficultyIfNeeded:function(){for(var t=this.__currentDatabase.getGroup(this.__difficulty-1),e=t.size(),i=0;i<e;i++)if(t.getLetter(i).getScore()<this.__MIN_SCORE_TO_REMEMBER)return;this.__difficulty++},__showWhatAnswerIsCorrect:function(){r.addClass(this.__currentOptionElement,this.__ELEMENT_OPTION_SUCCESS_CLASS)},__showWhatAnswerIsWrong:function(){r.addClass(this.__currentOptionElement,this.__ELEMENT_OPTION_FAILURE_CLASS),r.addClass(this.__view.question,this.__ELEMENT_QUESTION_FAILURE_CLASS),setTimeout(function(){r.removeClass(this.__currentOptionElement,this.__ELEMENT_OPTION_FAILURE_CLASS),r.removeClass(this.__view.question,this.__ELEMENT_QUESTION_FAILURE_CLASS)}.bind(this),this.__ANIMATIONS_DELAY)},__displayQuestion:function(){this.__view.question.innerHTML=this.__currentQuestion.getLetter()},__displayMessage:function(){var t=this.__currentQuestion.getDescription();this.__answerPossiblyRemembered()&&(t=1===this.mode?"Type your answer and press Enter":"Select one option"),this.__view.message.innerHTML=t},__displaySentence:function(){this.__view.sentence.innerHTML=this.__currentQuestion.getSentence()||""},__displayInput:function(){this.__currentGroup.size();this.__view.options.innerHTML="";var t=(document.createDocumentFragment(),document.createElement("input"));t.setAttribute("type","text"),t.setAttribute("placeholder","Enter your answer here"),r.addClass(t,"quiz__input"),this.__view.options.appendChild(t)},__displayOptions:function(){var t=this.__currentGroup.size();this.__view.options.innerHTML="";for(var e=document.createDocumentFragment(),i=[],r=0;r<t;r++)i.push(this.__currentGroup.getLetter(r));this.__shuffleOptions(i);for(var r=0;r<t;r++){var n=document.createElement("a"),s=i[r];n.innerHTML=s.getDescription(),n.classList=this.__ELEMENT_OPTION_CLASS,n.href="#",n.setAttribute(this.__ELEMENT_OPTION_DATA_ID_NAME,s.getId()),n.addEventListener(this.__EVENTS_MOUSEUP_NAME,this.__chooseOption.bind(this)),e.appendChild(n)}this.__view.options.appendChild(e)},__pronounceAnswer:function(){this.__currentDatabase.pronounceLetter(this.__currentQuestion)},__answerPossiblyRemembered:function(){return this.__currentQuestion.getScore()>this.__MIN_SCORE_TO_REMEMBER},__verifyInputData:function(t){if(!r.isArray(t)||!t.length)throw new TypeError("Alphabets must be an array and cant be empty")}},t}();t.exports=s},function(t,e,i){var r=i(0),n=(i(1),i(6)),s=i(7),o=function(){function t(t){this.__verifyInputData(t),this.__groups=[],this.__groupsCount=0,this.__languageName="",this.__languageCode="",this.__alphabetPronounce=new n(t.code),this.__initGroups(t.groups)}return t.prototype={constructor:t,size:function(){return this.__groupsCount},getGroup:function(t){if(!r.isNumber(t))throw new TypeError("Group ID must be a string");return this.__groups[t]},pronounceLetter:function(t){this.__alphabetPronounce.pronounce(t)},__addGroup:function(t,e){this.__groups[t]=new s(t,e),this.__groupsCount++},__initGroups:function(t){for(var e=t.length,i=0;i<e;i++)this.__addGroup(i,t[i])},__verifyInputData:function(t){if(!r.isString(t.name)||!t.name.length)throw new Error("Name is required");if(!r.isArray(t.groups)||!t.groups.length)throw new Error("Groups property is required")}},t}();t.exports=o},function(t,e,i){var r=i(0),n=(i(1),function(){function t(t,e){this.__verifyInputData(t),this.__cache=[],this.__apiUri=e,this.__languageCode=t,this.__auidoEnabled=!!e&&this.__isBrowserCanPlayAudio()}return t.prototype={constructor:t,pronounce:function(t){if(this.__auidoEnabled){var e=this.__getFromCache(t);e?e.play():this.__addToCache(t,function(t){t.play()})}},__addToCache:function(t,e){var i=this.__cache[this.__getCacheKey(t)]=new Audio(this.__buildApiUri());i.oncanplay=function(){e(i)}.bind(this)},__getFromCache:function(t){return this.__cache[this.__getCacheKey(t)]},__getCacheKey:function(t){return t.getId()+t.getLetter()+t.getDescription()},__buildApiUri:function(){return this.__apiUri.replace("%s",letter.getLetter()).replace("%l",this.__languageCode)},__isBrowserCanPlayAudio:function(){try{return new Audio,!0}catch(t){return!1}},__verifyInputData:function(t,e){if(!r.isString(t)||!t.length)throw new TypeError("Language code must be a string and cannot be empty");if(r.isString(e)&&!e.length)throw new Error("Api uri must be fullfilled if passed in")}},t}());t.exports=n},function(t,e,i){var r=i(0),n=i(1),s=function(){function t(t,e){this.__verifyInputData(t,e),this.__id=t,this.__letters=[],this.__lettersCount=0,this.__initLetters(e)}return t.prototype={constructor:t,size:function(){return this.__lettersCount},getId:function(){return this.__id},getLetter:function(t){if(!r.isNumber(t))throw new TypeError("Group ID must be a number");return this.__letters[t]},__addLetter:function(t,e){this.__letters[t]=new n(t,e),this.__lettersCount++},__initLetters:function(t){for(var e=t.length,i=0;i<e;i++)this.__addLetter(i,t[i])},__verifyInputData:function(t,e){if(!r.isNumber(t))throw new TypeError("Group ID must be a number");if(!r.isArray(e)||!e.length)throw new TypeError("Letters must be an array and cannot be empty")}},t}();t.exports=s},,,,,,,function(t,e){t.exports={name:"Japan",code:"ja",api:"https://translate.google.ru/translate_tts?ie=UTF-8&q=%s&tl=%l&total=1&idx=0&textlen=1&client=tw-ob&ttsspeed=0.24",groups:[[{letter:"あ",description:"a"},{letter:"い",description:"i"},{letter:"う",description:"u"},{letter:"え",description:"e"},{letter:"お",description:"o"}],[{letter:"か",description:"ka"},{letter:"き",description:"ki"},{letter:"く",description:"ku"},{letter:"け",description:"ke"},{letter:"こ",description:"ko"}],[{letter:"さ",description:"sa"},{letter:"し",description:"shi"},{letter:"す",description:"su"},{letter:"せ",description:"se"},{letter:"そ",description:"so"}],[{letter:"た",description:"ta"},{letter:"ち",description:"chi"},{letter:"つ",description:"tsu"},{letter:"て",description:"te"},{letter:"と",description:"to"}],[{letter:"は",description:"ha"},{letter:"ひ",description:"hi"},{letter:"ふ",description:"fu"},{letter:"へ",description:"he"},{letter:"ほ",description:"ho"}],[{letter:"ら",description:"ra"},{letter:"り",description:"ri"},{letter:"る",description:"ru"},{letter:"れ",description:"re"},{letter:"ろ",description:"ro"}],[{letter:"や",description:"ya"},{letter:"ゆ",description:"yu"},{letter:"よ",description:"yo"}],[{letter:"わ",description:"wa"},{letter:"を",description:"wo"},{letter:"ん",description:"n"}]]}},function(t,e){t.exports={name:"Japan",code:"ja",api:"https://translate.google.ru/translate_tts?ie=UTF-8&q=%s&tl=%l&total=1&idx=0&textlen=1&client=tw-ob&ttsspeed=0.24",groups:[[{letter:"ア",description:"a"},{letter:"イ",description:"i"},{letter:"ウ",description:"u"},{letter:"エ",description:"e"},{letter:"オ",description:"o"}],[{letter:"カ",description:"ka"},{letter:"キ",description:"ki"},{letter:"ク",description:"ku"},{letter:"ケ",description:"ke"},{letter:"コ",description:"ko"}],[{letter:"サ",description:"sa"},{letter:"シ",description:"shi"},{letter:"ス",description:"su"},{letter:"セ",description:"se"},{letter:"ソ",description:"so"}],[{letter:"タ",description:"ta"},{letter:"チ",description:"chi"},{letter:"ツ",description:"tsu"},{letter:"テ",description:"te"},{letter:"ト",description:"to"}],[{letter:"ナ",description:"na"},{letter:"ニ",description:"ni"},{letter:"ヌ",description:"nu"},{letter:"ネ",description:"ne"},{letter:"ノ",description:"no"}],[{letter:"ハ",description:"ha"},{letter:"ヒ",description:"hi"},{letter:"フ",description:"fu"},{letter:"ヘ",description:"he"},{letter:"ホ",description:"ho"}],[{letter:"マ",description:"ma"},{letter:"ミ",description:"mi"},{letter:"ム",description:"mu"},{letter:"メ",description:"me"},{letter:"モ",description:"mo"}],[{letter:"ヤ",description:"ya"},{letter:"ユ",description:"yu"},{letter:"ヨ",description:"yo"}],[{letter:"ラ",description:"ra"},{letter:"リ",description:"ri"},{letter:"ル",description:"ru"},{letter:"レ",description:"re"},{letter:"ロ",description:"ro"}],[{letter:"ワ",description:"wa"},{letter:"ヲ",description:"wo"},{letter:"ン",description:"n"}],[{letter:"ガ",description:"ga"},{letter:"ギ",description:"gi"},{letter:"グ",description:"gu"},{letter:"ゲ",description:"ge"},{letter:"ゴ",description:"go"}],[{letter:"ザ",description:"za"},{letter:"ジ",description:"ji"},{letter:"ズ",description:"zu"},{letter:"ゼ",description:"ze"},{letter:"ゾ",description:"zo"}],[{letter:"ダ",description:"da"},{letter:"ヂ",description:"ji"},{letter:"ヅ",description:"zu"},{letter:"デ",description:"de"},{letter:"ド",description:"do"}],[{letter:"バ",description:"ba"},{letter:"ビ",description:"bi"},{letter:"ブ",description:"bu"},{letter:"ベ",description:"be"},{letter:"ボ",description:"bo"}],[{letter:"パ",description:"pa"},{letter:"ピ",description:"pi"},{letter:"プ",description:"pu"},{letter:"ぺ",description:"pe"},{letter:"ポ",description:"po"}]]}}]);