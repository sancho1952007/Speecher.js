function speak(language, volume, rate, text){
  try{
    var speech=new SpeechSynthesisUtterance()
    speech.lang=language;
    speech.text=text;
    speech.volume=volume;
    speech.rate=rate;
    window.speechSynthesis.speak(speech)
  }
  catch(err){
      console.log(err)
  }
}