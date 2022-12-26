function addInput(val) {
    document.getElementById("input").value += val;
  }

  function clearInput() {
    document.getElementById("input").value = "";
  }

  function backspace() {
    var input = document.getElementById("input").value;
    document.getElementById("input").value = input.slice(0, input.length - 1);
  }

  function calculate() {
    let input_value = document.getElementById("input").value
    try {
      if (input_value != "") {
      var input = eval(document.getElementById("input").value);
        document.getElementById("input").value = input;
      }
    } catch(err) {
      document.getElementById("input").value = "Error";
    }
  }