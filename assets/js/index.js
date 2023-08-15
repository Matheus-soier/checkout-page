let inputCvc = document.querySelector('.numeroInputCvc');
let inputValMm = document.getElementById('cardDataExMM');
let inputValYy = document.getElementById('cardDataExYY');
let inputCardNumber = document.querySelector('#cardNumber');

inputCvc.addEventListener('input', function () {
  var maxLengthCvc = 3;
  if (inputCvc.value.length > maxLengthCvc) {
    inputCvc.value = inputCvc.value.slice(0, maxLengthCvc);
  }
});

inputValMm.addEventListener('input', function () {
  var maxLengthVal = 2;
  if (inputValMm.value.length > maxLengthVal) {
    inputValMm.value = inputValMm.value.slice(0, maxLengthVal)
  }
});

inputValYy.addEventListener('input', function () {
  var maxLengthVal = 2;
  if (inputValYy.value.length > maxLengthVal) {
    inputValYy.value = inputValYy.value.slice(0, maxLengthVal)
  }
});

inputCardNumber.addEventListener('input', function () {
  var maxLengthVal = 16;
  if (inputCardNumber.value.length > maxLengthVal) {
    inputCardNumber.value = inputCardNumber.value.slice(0, maxLengthVal)
  }
});
