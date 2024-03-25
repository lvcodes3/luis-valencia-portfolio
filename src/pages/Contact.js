import { useState } from "react";

const Contact = () => {
  const [emailSent, setEmailSent] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "6545d80b-58b3-46c4-9233-f34a64d73c5f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setEmailSent(true);
    }
  };

  return (
    <div className="w-full h-[calc(100vh-110px)] flex justify-center bg-slate-100 dark:bg-slate-800 text-black dark:text-white">
      {!emailSent ? (
        <div className="w-[450px] h-[450px] mt-[60px] border-2 border-black dark:border-white rounded-lg">
          <h1 className="mb-3 py-2.5 text-center text-2xl font-semibold border-b-2 border-black dark:border-white">
            Contact Me
          </h1>
          <form onSubmit={onSubmit} className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div className="w-full flex-row">
                <label className="text-left">
                  <b>Name:</b>
                </label>
              </div>
              <input
                name="name"
                type="text"
                maxLength="50"
                autoFocus
                required
                className="w-[400px] h-[20px] mb-3 border-2 border-black dark:border-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full flex-row">
                <label className="text-left">
                  <b>Email:</b>
                </label>
              </div>
              <input
                name="email"
                type="email"
                maxLength="50"
                required
                className="w-[400px] h-[20px] mb-3 border-2 border-black dark:border-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="w-full flex-row">
                <label className="text-left">
                  <b>Message:</b>
                </label>
              </div>
              <textarea
                name="message"
                maxLength="250"
                required
                className="w-[400px] h-[150px] mb-3 border-2 border-black dark:border-white"
              />
            </div>
            <div className="flex flex-col items-center">
              <input
                type="submit"
                value="Send"
                className="w-[125px] h-[35px] font-medium text-black dark:text-white bg-green-400 border-2 border-green-500 rounded-full cursor-pointer hover:scale-105"
              />
            </div>
          </form>
        </div>
      ) : (
        <h1 className="mt-[60px] text-center text-2xl font-semibold">
          Thank you for your input.
        </h1>
      )}
    </div>
  );
};

export default Contact;
