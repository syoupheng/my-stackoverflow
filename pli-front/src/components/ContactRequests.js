import useFetchContactMessages from "../hooks/useFetchContactMessages";
import ContactMessageBloc from "./ContactMessageBloc";

const ContactRequests = () => {
  const { data, status, error } = useFetchContactMessages();
  const contactMessages = data || [];

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}

      {status === "error" && (
        <p>
          {error.response.status === 404
            ? "Vous n'avez aucune demande de contact"
            : "Error fetching data..."}
        </p>
      )}

      {status === "success" && (
        <div>
          {contactMessages.data.length > 0
            ? contactMessages.data.map((message) => (
                <ContactMessageBloc key={message.id} message={message} />
              ))
            : "Vous n'avez aucune demande de contact"}
        </div>
      )}
    </div>
  );
}

export default ContactRequests;