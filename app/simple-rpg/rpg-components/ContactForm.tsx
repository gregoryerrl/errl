import emailjs from "emailjs-com";
import { Textarea } from "@/app/root-components/shadcn/ui/textarea";
import { Button } from "@/app/root-components/shadcn/ui/button";
import { Input } from "@/app/root-components/shadcn/ui/input";

const ContactForm = () => {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qsszg0r",
        "template_99c5ex4",
        e.currentTarget,
        "UbpnjNBGy_J4Srl1_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form onSubmit={sendEmail} className="w-full space-y-2">
      <Textarea name="message" placeholder="Type your message here." />
      <Button variant="secondary" type="submit">
        Send message
      </Button>
    </form>
  );
};

export default ContactForm;
