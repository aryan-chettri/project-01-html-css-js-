const exchangeRates = {
  USD: 1.0, // US Dollar
  EUR: 0.93, // Euro
  INR: 83.27, // Indian Rupee
  GBP: 0.79, // British Pound
  JPY: 156.3, // Japanese Yen
  AUD: 1.49, // Australian Dollar
  CAD: 1.36, // Canadian Dollar
  CHF: 0.9, // Swiss Franc
  CNY: 7.24, // Chinese Yuan
  ZAR: 18.29, // South African Rand
};

const arr = new Array();

function conversion() {
  const inputField = document.querySelector("#input-field");

  if (inputField.value === "") {
    alert("input field is required");
  } else {

    
    const chai = () => {

    let inputCurrencyType = document.querySelectorAll(".input-currency-type");

    for (let item of inputCurrencyType){

        let inputCurrencyTypeValue = item.value

        console.log(inputCurrencyTypeValue);
      let inputCurrencyValue = 0;

      for (let key in exchangeRates) {
        if (key === inputCurrencyTypeValue) {

            // console.log(exchangeRates[key])

            // console.log(exchangeRates[key])
            return exchangeRates[key];
        }
      }
    }
    };

    let inputCurrencyValue = chai();

    console.log(inputCurrencyValue);

    
    //Closing of forEach block of the input currency type
        
    //Starting of output currency type

    const chaiandcode = () => {

    let outputCurrencyType = document.querySelectorAll(".output-currency-type");

    for (let item of outputCurrencyType){

        let outputCurrencyTypeValue = item.value

        console.log(outputCurrencyTypeValue);
    //   let inputCurrencyValue = 0;

      for (let key in exchangeRates) {
        if (key === outputCurrencyTypeValue) {

            // console.log(exchangeRates[key])

            // console.log(exchangeRates[key])
            return exchangeRates[key];
        }
      }
    }
    };

    let outputCurrencyValue = chaiandcode();

    console.log(outputCurrencyValue);//Closing of the output currency type loop

    // console.log(outputCurrencyValue)
    // console.log(inputCurrencyValue)

    //Starting of the output field that will be displayed
  
    function  conversionValue(inputTypeValue, outputTypeValue, inputValue){

      let conversionValueNumber = 0;

        conversionValueNumber = (outputTypeValue/inputTypeValue)*inputValue

        console.log(conversionValueNumber)

        return conversionValueNumber;
    }

    const conversionValueNumber1 = conversionValue(inputCurrencyValue, outputCurrencyValue, inputField.value)

    document.getElementById("output-field").value =  `${conversionValueNumber1} ${outputCurrencyTypeValue}`;


    // console.log(inputCurrencyValue, outputCurrencyValue, inputField.value)

    
    }//closing of else block.
}
