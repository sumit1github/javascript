<div id="div1">
    <input id="min">
    <input id="max">

</div>

how to access input with id max from div1 in javascrit


const div1 = document.getElementById('div1'); // select div1 element
const maxInput = div1.querySelector('#max'); // select max input element inside div1
console.log(maxInput); // will log the max input element
