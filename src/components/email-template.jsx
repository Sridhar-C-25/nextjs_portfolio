export const EmailTemplate = ({ name, msg, email }) => (
  <div>
    <h1>I am, {name}!</h1>
    <small>{email}</small>
    <br />
    <p>{msg}</p>
  </div>
);
