import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { themeContext } from "../../Context";

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [notification, setNotification] = useState(null); // لحفظ رسالة التنبيه (نجاح/خطأ)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f6805fn", // معرف الخدمة (تأكد من أنه صحيح)
        "template_bnnkfak", // معرف القالب (تأكد من أنه صحيح)
        form.current,
        "Gzs1FOPF0JjwyqF6b" // المفتاح العام (تأكد من أنه صحيح)
      )
      .then(
        (result) => {
          console.log(result.text);
          setNotification({ type: "success", message: "تم إرسال الرسالة بنجاح!" });
          e.target.reset(); // إعادة تعيين الحقول بعد الإرسال
        },
        (error) => {
          console.error(error.text);
          setNotification({
            type: "error",
            message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.",
          });
        }
      );
  };

  return (
    <div className="contact-form" id="contact">
      {/* الجانب الأيسر */}
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* الجانب الأيمن (النموذج) */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          ></textarea>
          <input type="submit" value="Send" className="button" />
          
          {/* عرض رسائل التنبيه بناءً على حالة الإرسال */}
          {notification && (
            <span
              className={
                notification.type === "success" ? "success-message" : "error-message"
              }
            >
              {notification.message}
            </span>
          )}
          
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
