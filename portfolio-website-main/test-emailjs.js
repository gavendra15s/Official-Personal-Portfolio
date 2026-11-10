
const SERVICE_ID = "service_hs79rua";
const TEMPLATE_ID = "template_9goxl59";
const PUBLIC_KEY = "jPwv8VxLu_58xG0qe";

const templateParams = {
  from_name: "Test Name",
  from_email: "test@example.com",
  service: "Startup Idea Validation",
  message: "Test message body"
};

console.log("Sending...");
fetch("https://api.emailjs.com/api/v1.0/email/send", {
  method: "POST",
  headers: { 
    "Content-Type": "application/json",
    "Origin": "http://localhost:5173"
  },
  body: JSON.stringify({
    service_id: SERVICE_ID,
    template_id: TEMPLATE_ID,
    user_id: PUBLIC_KEY,
    template_params: templateParams
  })
}).then(async res => {
  console.log("Status:", res.status);
  console.log("Response:", await res.text());
}).catch(err => {
  console.error("Error:", err);
});
