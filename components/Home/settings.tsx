import classes from "./settings.module.scss";

const Settings: React.FC = () => {
  return (
    <div className={classes.settings}>
      <div className={classes.content}>
        <div className={classes.navbar}>
          <img src="./cross.png" alt="Close settings" />
        </div>

        <div className={classes.setting}>
          <h3>Sounds Volume: </h3>
          <input type="range" />
        </div>

        <div className={classes.setting}>
          <h3>Focus Time: </h3>
          <input type="number" min="1" max="500" />
        </div>

        <div className={classes.setting}>
          <h3>Short Break Time: </h3>
          <input type="number" min="1" max="500" />
        </div>

        <div className={classes.setting}>
          <h3>Long Break Time</h3>
          <input type="number" min="1" max="500" />
        </div>
      </div>
    </div>
  );
};
export default Settings;
