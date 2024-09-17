const baseUrl =
  "https://api.telegram.org/bot7471723817:AAH17ACWov_YX3n3XKTUWa4LoCUhC8By7pg/";

export const sendMessage = async (message) => {
  const encodedMessage = encodeURIComponent(message);
  const url = `${baseUrl}sendMessage?chat_id=-1002151428890&text=${encodedMessage}`;
  const response = await fetch(url);

  if (!response.ok) {
    const error = await response.json();
    await Promise.reject(error.description || "Щось не так(");
  }

  console.log("response", response);
};
