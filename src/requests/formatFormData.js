function formatFormData(formData) {
  const labels = {
    name: "➡️Імʼя",
    email: "✉️Email:",
    subject: "📁Тема:",
    message: "📄Повідомлення:",
  };

  let formattedData = "";

  for (const key in formData) {
    if (formData[key] && key !== "resume") {
      formattedData += `${labels[key] || key} ${formData[key]}\n`;
    }
  }
  return formattedData;
}

export default formatFormData;
