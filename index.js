// add solution here

function theBeatlesPlay(musicians, instruments) {
  var Variable = []; 
  for (i = 0; i < musicians.length; i++ ) {
    Variable.push(musicians[i] + "plays" + instruments[i]);
    }
  return Variable
}