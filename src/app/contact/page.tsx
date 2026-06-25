import { ContactForm } from "./ContactForm";

export const generateMetadata = () => {
    return {
      title: 'John Doll | Contact',
      description: 'Send John a message about work, questions, or just to say hello.',
    };
  };

export default function ContactPage() {
  return <ContactForm />;
}