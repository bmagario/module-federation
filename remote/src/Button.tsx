import "./Button.css";
import useCount from "./useCount";

export const Button = () => {
  const [state, setState] = useCount();

  return (
    <div>
      <button
        className="shared-btn"
        onClick={() => setState((s: number) => s + 1)}
      >
        Click me: {state}
      </button>
    </div>
  );
};

export default Button;
