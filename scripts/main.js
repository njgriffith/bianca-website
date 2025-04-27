const maize = '#ece336ff';
const redNCS = '#b30039ff';
const yinmnBlue = '#3c599eff';
const persianIndigo = '#361f8eff';
const babyPowder = '#fafbf6ff';

const colors = [maize, redNCS, yinmnBlue, persianIndigo, babyPowder];
var prevColor = '';
function updateBackgroundColor(index){
    document.body.style.transitionDuration = '2s';
    document.body.style.backgroundColor = colors[index];
}