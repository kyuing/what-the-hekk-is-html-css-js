function readURL(input) {
  if (input.files && input.files[0]) {

    let reader = new FileReader();
   
    reader.onload = function(e) {

      $('.image-upload-wrap').hide();
      $('.file-upload-image').attr('src', e.target.result);
      $('.file-upload-content').show();
    
    };
    reader.readAsDataURL(input.files[0]);
  } 
}

/********************************************************** //  use crtl + / to enable or disable comments
 // The following is the same code as above.
 // but I added some of the console.log() at appropriate lines
 // so that you can see what's going on 
 // when the function is executed 
 
function readURL(input) {
  if (input.files && input.files[0]) {

    console.log(input);
    console.log(input.files);
    console.log(input.files[0]);
    let reader = new FileReader();
   
    
    reader.onload = function(e) {

      $('.image-upload-wrap').hide();
      $('.file-upload-image').attr('src', e.target.result);
      console.log(e.target.result);
      $('.file-upload-content').show();
    
    };
    reader.readAsDataURL(input.files[0]);
    console.log(reader);
  } 
}
*************************************************************/ //  use crtl + / to enable or disable comments


/** 
File upload input
Copyright (c) 2022 by Aaron Vanston (https://codepen.io/aaronvanston/pen/yNYOXR)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/