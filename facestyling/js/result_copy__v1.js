"use strict";

const URL = 'https://teachablemachine.withgoogle.com/models/caXe1yJv9/';
let model, maxPredictions, chartContainer,
resultTitle, resultExplain, resultComment,
title, explain, comm;

//function init() initializes the image model 
async function init() {

  const modelURL = URL + 'model.json';
  const metadataURL = URL + 'metadata.json';
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses(); //number of classes trained 
    
    //init chartContainer and add empty <div>s as many as maxPredictions
    chartContainer = document.getElementById('chart_container');
    for (let i = 0; i < maxPredictions; i++) {
        var element = document.createElement('div');
        element.classList.add('d-flex');
        chartContainer.appendChild(element);
    }
    
}

//fucntion predict() predicts matching image result up to maxPredictions
async function predict() {
  var image = document.getElementById('face-image');
  const prediction_unsorted = await model.predict(image, false); //the order input class created
  const prediction = await model.predict(image, false); 
  console.log(prediction_unsorted);

//https://youtu.be/EwBoKEG5GzE?list=PLU9-uwewPMe2-vtJAgWB6SNhHcTjJDgEO&t=737

  //The following code sorts onbjects from highest probability to lowest
  prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
  // for (let i = 0; i < maxPredictions; i++) {
  //   parseInt(prediction[i].probability.toFixed(2) * 100);
  // }
  console.log(prediction);
  console.log(parseInt(prediction[0].probability.toFixed(2) * 100));
  console.log(parseInt(prediction[1].probability.toFixed(2) * 100));
  console.log(parseInt(prediction[2].probability.toFixed(2) * 100));
  console.log(parseInt(prediction[3].probability.toFixed(2) * 100));
  console.log(parseInt(prediction[4].probability.toFixed(2) * 100));
  console.log(prediction[0].className);
}

// async function predict() {
    
//     var image = document.getElementById('face-image');
//     const prediction = await model.predict(image, false); // let prediction = await model.predict(image, false);
    
//     prediction.sort((a, b) => parseFloat(b.probability) - parseFloat(a.probability));
//     console.log(prediction[0].className);
//     // var resultTitle, resultExplain, resultCeleb;
    
//     switch (prediction[0].className) {  
//         case 'oval':
// 			resultTitle = parseInt(prediction[0].probability.toFixed(2) * 100) + '% OVAL FACE';
//             resultExplain = 
// 	 		//hat
// 			'<div style="margin-top:3em"><div class="line"></div><div><b>Hats & Caps</b></div><div class="line"></div></div>'
//            + '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/hats/baseball-cap.png" alt="baseball cap" title="baseball cap">' 
// 			+ '<img class="result-icons" src="./../img/hats/fedora.png" alt="fedora" title="fedora">'
// 			+ '<img class="result-icons" src="./../img/hats/floppy-hat.png" alt="floppy hat" title="floppy hat">'
// 			+ '<img class="result-icons" src="./../img/hats/beanie.png" alt="beanie" title="beanie">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a target="blank" href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>' + '<b>,</b> ' 
// 			+ '<a target="blank" href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a>' + '<b>,</b> '  
// 			+ '<a target="blank" href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>' + ' '
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Enjoy any style as you want. Beanie is the rignt one if you wanna get your face line stood out'
// 			//eye-glass				
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Eye-wear</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/glasses/colorful-sunglasses.png" alt="colorful sunglasses" title="colorful sunglasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/horned-glasses.png" alt="horned glasses" title="horned-glasses">' 
// 			+ '<img class="result-icons" src="./../img/glasses/round-glasses.png" alt="round glasses" title="round glasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/rectangular-glasses.png" alt="rectangular glasses" title="rectangular glasses">'	
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a target="blank" href="https://www.flaticon.com/authors/skyclick" title="Skyclick">Skyclick</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="_blank">www.flaticon.com</a></div>'
// 			+ '<br>Most of the eye/sun glasses look good on your face shape.<br>Avoid excessively over-sized eye/sun glasses<br>since they could hide your beautiful oval face line<br>'
// 			  //accessories   
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Accessory & Jewellery</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/necklaces/pearls.png" alt="pearls" title="pearls">'
// 			+ '<img class="result-icons" src="./../img/earrings/drop-earrigns.png" alt="drop earrigns" title="drop earrigns">'
// 			+ '<img class="result-icons" src="./../img/earrings/glamour.png" alt="glamour button" title="glamour button">'
// 			+ '<img class="result-icons" src="./../img/earrings/round-earrings.png" alt="round earrings" title="round earrings">'
// 			+ '<img class="result-icons" src="./../img/necklaces/double-heart-necklace.png" alt="double heart necklace" title="double heart necklace">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="_blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan" target="blank">Darius Dan</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="blank">Smashicons</a>' + '<b>,</b> ' 
// 			+ '<a target="blank" href="https://www.flaticon.com/authors/surang" title="surang">surang</a>' + ' '
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			 + '<br>Nearly any accessory/jewellery looks good on your face shape<br>Try various items or give yourself some unique styling sometimes :) '
//             + '<div><br></div>';

// 			 resultComment = 'Oval face is, believe or not, said to be a blassed face shape. Get your face shape stood out rather than blended in. Give yourself some versatility of choice!<br>';
//             break;
        
//         case 'round':
//            resultTitle = parseInt(prediction[0].probability.toFixed(2) * 100) + '% ROUND FACE';
//             resultExplain = 
// 			//hat
// 			'<div style="margin-top:3em"><div class="line"></div><div><b>Hats & Caps</b></div><div class="line"></div></div>'
//            + '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/hats/green-beret.png" alt="green beret" title="green beret">' 
// 			+ '<img class="result-icons" src="./../img/hats/purple-beret.png" alt="purple beret" title="purple-beret">'
// 			+ '<img class="result-icons" src="./../img/hats/snapback.png" alt="snapback" title="snapback">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="blank">Smashicons</a>' + '<b>,</b> '  
// 			+ '<a href="https://www.flaticon.com/authors/xnimrodx" title="xnimrodx" target="blank">xnimrodx</a>' + ' '
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Let your face load some angles!~<br>What about snapback or beret?'
// 			//eye-glass				
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Eye-wear</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/glasses/thick-rectangle-sunglasses.png" alt="thick rectangle sunglasses" title="thick rectangle sunglasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/horned-glasses.png" alt="horned glasses" title="horned-glasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/rectangular-glasses.png" alt="rectangular glasses" title="rectangular glasses">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			 + '<br>Wear thick-framed rectangular horned glasses so your face can look sharp!<br>'
// 			  //accessories   
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Accessory & Jewellery</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/necklaces/drop-necklace.png" alt="drop necklace" title="drop necklace">'
// 			+ '<img class="result-icons" src="./../img/earrings/drop-type-earrings.png" alt="drop type earrings" title="drop type earrings">'
// 			+ '<img class="result-icons" src="./../img/earrings/drop-earrigns.png" alt="drop earrigns" title="drop earrigns">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/swifticons" title="Swifticons" target="blank">Swifticons</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="blank">Smashicons</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Give some vertical stress on your face<br>Drop earrings/necklaces can be good stuff!'
//             + '<div><br></div>';
// 			resultComment = 'Round face gives soft impression as it is, but you may sometimes want something other than softness. Add lines and angle to your face :)';
//             break;
        
//         case 'long':
//            resultTitle = parseInt(prediction[0].probability.toFixed(2) * 100) + '% LONG FACE';
//            resultExplain = 
// 			//hat
// 			'<div style="margin-top:3em"><div class="line"></div><div><b>Hats & Caps</b></div><div class="line"></div></div>'
//            + '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/hats/black-bucket-hat.png" alt="black bucket hat" title="black bucket hat">' 
// 			+ '<img class="result-icons" src="./../img/hats/colored-bucket-hat.png" alt="colored bucket hat" title="colored bucket hat">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart" target="blank">smalllikeart</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Create a diversion by wearing such a hat whose crown is lower and brim is wide enough like bucket hat!'

// 			//eye-glass				
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Eye-wear</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/glasses/big-glasses-freepik.png" alt="big glasses" title="big glasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/big-sunglasses-icongeek26.png" alt="big sunglasses" title="big sunglasses">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26" target="blank">Icongeek26</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Eyewear that has enough height and width can let your face look shorter.<br>Round-shaped eye/sun glasses are ideal but not essential. <br>The key is grabbing some fat & tall eye/sun glasses!'
// 			//accessories   
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Accessory & Jewellery</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/necklaces/necklace.svg" alt="necklace" title="necklace">'
// 			+ '<img class="result-icons" src="./../img/earrings/earring.png" alt="unbalance color earrings" title="unbalance color earrings">'
// 			+ '<img class="result-icons" src="./../img/earrings/glamour.png" alt="glamour button" title="glamour button">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/surang" title="surang" target="blank">surang</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Earring is better than necklaces in styling.<br>Avoid drop earrings that cound make your face longer in vertical.<br>What about simple button or unbalance earrings?'
//             + '<div><br></div>';
// 			resultComment = 'Long face gives reliable and firm first impression. Strengthen your attraction sometimes with some curve :) ';
//             break;

// 		case 'square':
//            resultTitle = parseInt(prediction[0].probability.toFixed(2) * 100) + '% SQUARE FACE';
//            resultExplain = 
// 			//hat
// 			'<div style="margin-top:3em"><div class="line"></div><div><b>Hats & Caps</b></div><div class="line"></div></div>'
//             + '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/hats/colored-bucket-hat.png" alt="colored bucket hat" title="colored bucket hat">'
// 			+ '<img class="result-icons" src="./../img/hats/sun-hat.png" alt="sun hat png" title="sun hat">' 
// 			+ '<img class="result-icons" src="./../img/hats/pamela-hat.png" alt="pamela hat" title="pamela hat">' 
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/smalllikeart" title="smalllikeart" target="blank">smalllikeart</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Wide brimmed hats like floppy or bucket hat can soften angular facial features 👌'
//             //eye-glass				
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Eyewear</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/glasses/round-glasses.png" alt="round glasses" title="round glasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/oval-glasses.png" alt="oval glasses" title="oval glasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/oval-sunglasses.png" alt="oval sunglasses" title="oval sunglasses">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs" target="blank">DinosoftLabs</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="blank">Smashicons</a>' + ' '
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Round/oval shaped eyewear with enough width is recommended so soft impression is more highlighted '
//            //accessories   
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Accessory & Jewellery</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/necklaces/double-heart-necklace.png" alt="double heart necklace" title="double heart necklace">'
// 			+ '<img class="result-icons" src="./../img/earrings/round-drop-earrings.png" alt="round drop earrings" title="round drop earrings">'
// 			+ '<img class="result-icons" src="./../img/earrings/round-earrings.png" alt="round earrings" title="round earrings">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/surang" title="surang" target="blank">surang</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan" target="blank">Darius Dan</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev" target="blank">Nikita Golubev</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
//             + '<br>Avoid anything angular and Go for round one ! '
// 			+ '<br>'
//             + '<div><br></div>';
// 			resultComment = 'Square facial features let you look determined and energetic, attractive while sometimes letting you look uptight. Soften some angles with round shaped items :) ';
//             break;
            
// 		case 'triangle':
//            resultTitle = parseInt(prediction[0].probability.toFixed(2) * 100) + '% (INVERTED) TRIANGLE FACE';
//            resultExplain = 
// 			 //hat
// 			'<div style="margin-top:3em"><div class="line"></div><div><b>Hats & Caps</b></div><div class="line"></div></div>'
//             + '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/hats/short-ballcap.png" alt="short ballcap" title="short ballcap">'
// 			+ '<img class="result-icons" src="./../img/hats/short-ballcap-side.png" alt="short ballcap side" title="short ballcap side">' 
// 			+ '<img class="result-icons" src="./../img/hats/fedora.png" alt="fedora" title="fedora">' 
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect" target="blank">Pixel perfect</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
// 			+ '<br>Wear short brimmed & low crowned hats like ball cap and fedora if you wanna smoothly show your V line! '
// 			  //eye-glass				
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Eyewear</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/glasses/cats-eye-glasses.png" alt="cats eye glasses" title="cats eye glasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/round-glasses.png" alt="round glasses" title="round glasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/oval-glasses.png" alt="oval glasses" title="oval glasses">'
// 			+ '<img class="result-icons" src="./../img/glasses/oval-sunglasses.png" alt="oval sunglasses" title="oval sunglasses">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs" target="blank">DinosoftLabs</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/smashicons" title="Smashicons" target="blank">Smashicons</a>' + ' '
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>'
// 			+ '<br>Many different styles go well with inverted triangle face shape. If you wanna go one step deeper, round-shaped eyewear with bottom-heavy frame can look great on your face creating a balance between upper face and lower face. '
//             //accessories   
// 			+ '<div style="margin-top:3em"><div class="line"></div><div><b>Accessory & Jewellery</b></div><div class="line"></div></div>'
// 			+ '<div><br></div>'
// 			+ '<img class="result-icons" src="./../img/earrings/gold-and-diamond-earrings.png" alt="gold and diamon earrings" title="gold and diamon earrings">'
// 			+ '<img class="result-icons" src="./../img/earrings/round-earrings.png" alt="round earrings" title="round earrings">'
// 			+ '<img class="result-icons" src="./../img/necklaces/diamond-necklace.png" alt="diamond necklace" title="diamond necklace">'
// 			+ '<img class="result-icons" src="./../img/necklaces/chain-diamond-necklace.png" alt="chain diamond necklace" title="chain diamond necklace">'
// 			+ '<div class="result-icon-ref">Icons made by '
// 			+ '<a href="https://www.flaticon.com/authors/freepik" title="Freepik" target="blank">Freepik</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp" target="blank">Eucalyp</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan" target="blank">Darius Dan</a>' + '<b>,</b> ' 
// 			+ '<a href="https://www.flaticon.com/authors/surang" title="surang" target="blank">surang</a>' + ' ' 
// 			+ 'from <a href="https://www.flaticon.com/" title="Flaticon" target="blank">www.flaticon.com</a></div>'
//             + '<br>Most of the accessories are well-suited! <br>Try and wear as many different items as you want with a hint of soft design if you wanna the atmosphere on your face to go a bit warm. '
// 			+ '<br>'
//             + '<div><br></div>';
// 			resultComment = 'Inverted triangle face gives a stylish first impression. Emphasize / de-emphasize your <b>V</b> line with many different items depending on your taste in fashion :)';
//             break;
           
//         default:
//             resultTitle = '🤔unknown🤔 Please try again';
//             resultExplain = '';
//             resultComment = '';
//     }

//     title ="<div class='" + prediction[0].className + "-result-title'>" + resultTitle + '</div>';
//     explain = "<div class='result-explain pt-2'>" + resultExplain + '</div>';
//     comm ="<div class='" + prediction[0].className + "-result-comment pt-2 pb-2'>" + resultComment + '</div>';
    
//     $('.result-message1').html(title); // $('.result-message').html(title + explain + celeb);

//     google.load('visualization', '1', { packages: ['corechart'] });
//     google.setOnLoadCallback(initChart);
    
    
//     $(window).resize(function(){
//        initChart();
//      });
      
//     function initChart() {
 
//         let data, options;
//         data = google.visualization.arrayToDataTable([
//             ['MostMatch', 'Percentages'],

//             // [prediction[i].className, parseFloat(prediction[i].probability.toFixed(2) * 100)],
//             [prediction[0].className, parseFloat(prediction[0].probability.toFixed(2) * 100)],
//             [prediction[1].className, parseFloat(prediction[1].probability.toFixed(2) * 100)],
//             [prediction[2].className, parseFloat(prediction[2].probability.toFixed(2) * 100)],
//             [prediction[3].className, parseFloat(prediction[3].probability.toFixed(2) * 100)],
//             [prediction[4].className, parseFloat(prediction[4].probability.toFixed(2) * 100)],
            

//         ]);

//         options = {
//             is3D: true,  
// 			// top: '10%',
//             width: '100%',
//             height: '100%',
//             colors: ['#0598d8', '#f97263', '#ffc900', '#adaeae', '#c3dff5'], 
//             backgroundColor: '#f9f9f9',
//             chartArea: {
//                 left: '25%',
//                 top: '5%',
//                 height: '90%',
//                 width: '95%',
//             },
//         };
        
//         drawChart(data, options)

//     }
    
//     /* async */ function drawChart(data, options) {
        
//         var chart = /* await */ new google.visualization.PieChart(document.getElementById('chart_container'));
//         chart.draw(data, options);
//     }

// 	function sleep(ms) {
//         return new Promise((resolve) => setTimeout(resolve, ms));
//     }

// 	document.getElementById('chart_body').style.display = 'block';    
	
// 	sleep(1000).then(() => {
// 		$('.result-message2').html(explain + comm);
// 	});

// 	sleep(1000).then(() => {
// 		document.getElementById('linkToBlog').style.display = 'block';    
// 	});
	
//     sleep(1000).then(() => {
//         document.getElementById('addThis').style.display = 'block';
//         document.getElementById('itw').style.display = 'block';
//     });
    
// }