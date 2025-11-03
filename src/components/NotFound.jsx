import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center min-h-screen">
      <div class="flex items-center mb-5">
        <h2 class="text-3xl md:text-4xl font-bold border-e border-border pe-4">
          404
        </h2>
        <span class="text-xl text-primary uppercase ms-4">Not Found</span>
      </div>
      <button
        onClick={() => navigate("/")}
        className="cosmic-button cursor-pointer"
      >
        Go Back Home
      </button>
    </section>
  );
};

export default NotFound;
