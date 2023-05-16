const form = document.getElementById("line_code");
if (form) {
  form.onsubmit = async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    

    const response = await window.axios.openAI(formData.get("code_line"));
    document.getElementById("run_result").innerHTML = JSON.stringify(response.choices[0].text);
  };
}
