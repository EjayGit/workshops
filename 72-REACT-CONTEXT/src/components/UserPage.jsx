import { useContext } from "react";
import { UserContext } from "./UserContext";
import { ThemeContext } from "./ThemeContext";

export function UserPage() {
  let { username, setUsername } = useContext(UserContext);
  let { theme, setTheme } = useContext(ThemeContext);

  function handleThemeToggle() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <>
      <h2>User ID: {username}</h2>
      <button onClick={() => setUsername("spongebob")}>
        Change username to spongebob
      </button>
      <h2>Theme: {theme}</h2>
      <button onClick={handleThemeToggle}>Change theme to dark</button>
    </>
  );
}