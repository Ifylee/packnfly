// Importing useRouteError from react-router-dom to handle route errors
import { useRouteError } from "react-router-dom";

// Defining the ProblemPage component to display an error message
export default function ProblemPage() {
  const error = useRouteError();
  console.error(error);

    // Logging the error to the console for debugging purposes
  return (
    <div id="problem-page">
      <h1>Oops!</h1>
      <p>We’re sorry, but an unexpected error has happened.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}