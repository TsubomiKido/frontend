const form = document.getElementById("line_code");
if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    let codeCheck = formData.get("code_line");


    if(codeCheck <= 8){
    alertMessage("error","Please input at least 8 characters");
    return;
  }
    const response = await window.axios.openAI(formData.get("code_line"));
    document.getElementById("run_result").innerHTML = JSON.stringify(response.choices[0].text);
  };
}

function alertMessage(status,codeCheck){
  window.Toastify.showToast({
    text: codeCheck,
    duration: 5000,
    stopOnFocus: true,
    style: {
      textAlign: "center",
      background: status == "error" ? "red":"green",
      color: "white",
      padding: "5px",
      marginTop: "2px"
    }
  });
}
