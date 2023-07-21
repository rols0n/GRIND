import Link from "next/link";
import classes from "./navbar.module.scss";
import { MouseEventHandler } from "react";

const navbar = (props: {
  toggleSettings: MouseEventHandler<HTMLAnchorElement> | undefined;
}) => {
  return (
    <nav className={classes.navbar}>
      <div className={classes["left-side-div"]}>
        <h1 className={classes.name}>GRIND</h1>
      </div>
      <div className={classes["middle-side-div"]}>
        <Link href="/" className={classes.link + " " + classes["link--active"]}>
          Home
        </Link>
        <Link href="/" className={classes.link}>
          About
        </Link>
      </div>

      <div className={classes["right-side-div"]}>
        <Link
          href="/"
          className={classes.Link + " " + classes.settingsIcon}
          onClick={props.toggleSettings}
        >
          <img alt="Settings" src="./settings.svg" />
        </Link>

        <Link href="/" className={classes.avatar}>
          <img src="/avatar-template.jpg" alt="User's avatar" />
        </Link>
      </div>
    </nav>
  );
};
export default navbar;
