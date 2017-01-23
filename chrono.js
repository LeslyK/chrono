
  var tierce=0
  var seconde=0
  var minute=0
    function chrono(){
    tierce++;
    if (tierce>9){tierce=0;seconde++}
    if (seconde>59){seconde=0;minute++}
    document.forsec.secc.value=" "+tierce
    document.forsec.seca.value=" "+seconde
    document.forsec.secb.value=" "+minute
    compte=setInterval('chrono()',1000)
  };

  function efface(){
  clearsetInterval(compte)
  tierce=0;
  seconde=0;
  minute=0;
  document.forsec.secc.value=" "+tierce
  document.forsec.seca.value=" "+seconde
  document.forsec.secb.value=" "+minute
};
