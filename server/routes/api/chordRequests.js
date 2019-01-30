const express = require('express');
const bodyParser = require('body-parser');
const scraperUG = require('ultimate-guitar-scraper');
const transposer = require('chord-transposer');
const fs = require('fs');
const htmlPdf = require('html-pdf');
var chordMagic = require('chord-magic')
var DomParser = require('dom-parser');
var xml = require('xmlserializer');
var parser = new DomParser();

const router = express.Router();
var cChords;

router.post('/chords', (req, res) => {
    // console.log(req.body.link);
    scraperUG.get(req.body.link, (error, chords) => {
        if(error)
            console.log(error);
        else {
             cChords = chords;
             processText(cChords, {transposed: false});
        }
    });

    var filePath = "./server/chordFiles/cChords.pdf";

    var listener = (curr, prev) => {res.download(filePath);
                                    console.log("File is there");};
                                    
 

    fs.watchFile(filePath, listener);
});

router.get('/downloadChords', (req,res) => {
    res.download("./server/chordFiles/cChords.pdf");
});

function processText (chordPage, options){
    var text = "<pre>" + chordPage.content.text + "</pre>";

    text = replaceAll(text, "[ch]" , '<span class="chord">')
    text = replaceAll(text, "[/ch]" , '</span>')
    text = replaceAll(text, "[", '<span class="song_part">')
    text = replaceAll(text, "]" , '</span>')

    text = `<!DOCTYPE html><html><head><meta charset="utf-8" /><link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet"> </head><body><h1> ${chordPage.name} - ${chordPage.artist}</h1>` + text;
    text += '</body><style>.chord{color: coral;font-weight:bold;} body{font-family: "Nunito", sans-serif;</style>'
    text += '</html>';

    if(options.transposed){
        // var transposed = replaceAll(text, "[ch]" , '');
        // transposed = replaceAll(transposed, "[/ch]" , '');
        
        // transposed = text;

        // transposed = transposer.transpose(transposed).up(chordPage.capo) + "";
        // console.log(transposed);

        /*var dom = parser.parseFromString(text);
        var allChords = dom.getElementsByClassName("chord");

        for (let i = 0; i < allChords.length; i++) {
            allChords[i].innerHtml = chordMagic.transpose(chordMagic.parse(allChords[i].innerHTML), chordPage.capo);
        }

        console.log(dom);
        
    
        text = dom.getElementsByTagName('html')[0].innerHTML*/

        // console.log(chordPage.tonality);
        
        // var otherKey = transposer.transpose(chordPage.tonality).down(chordPage.capo);
        // text = transposer.transpose(text).fromKey(otherKey + "").up(chordPage.capo) + "";
        // console.log(text);
    }

    var options = { };
     
    htmlPdf.create(text, options).toFile('./server/chordFiles/cChords.pdf', function(err, res) {
      if (err) return console.log(err);
      console.log(res); // { filename: '/app/businesscard.pdf' }
    });
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}


module.exports = router;