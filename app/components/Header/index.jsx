import React from "react";
import "./header.css";
function Header() {
  return (
    <div>
      <div className="top-header">
        <div className="logos">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB/SURBVHgB7dSxCYBADAXQHz1BQcERbG1EcBE3ETfRCZzBRURstHQMi/NO7woXiMUV94qQJimSEMB1ZEJZNR00WnCQnvdtGYTJFW4KNIFFMeu9j51kUdR5nIoaHFKex7GedstJFkzvmnhnE9H8xtY21KHqITGC4RJY4f3CPwcHPY9VJeQzmjQbAAAAAElFTkSuQmCC"
            alt="Menu"
            className="menu-icon"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAN+SURBVHgBnVjtkRoxDH03k/8hHbiDo4O4g1wHbAfQwW4HRyo4OuA6IKmAuwqWDiAVkBXonbVefwBvRsPiteRnSZYFTwCOuOIwyMcgfwb5q99T8IM8DzLX55kKbYh8qh2RU8aO6LwM8lNtyfff8qIf5DzIXsmdVV4j5TZ6f1SdNyNbHTsbeUMgzA3tIju020EN7COFtX4KlkZhr0oOdfhBNlwkInLUca/v5jr+C7r4OdoFdFEa6I3yI3iNiMRrNfp+TuZnHbRkGMpOxxjzeyA63NRWvze4et1iq+t9KR1VEcqScfWRkhhucTsZ5lNnxteRnRlCrk0mOSXRI50n3O0CdWwTZFKkSNzbCQ7BrWSdwkzJHlFO7LZAhuDmsmlA1h5lOIxDnHp/LrwnuLkeGQdUJxh0yJPfIIS/Bo+MJ+cI+XPr7lJeckgkaAJOdXkKj4icIIPv+tzcaLTD1Esb1L0j72weetVZ2QmjAX1mZXYZwzyuazMmC5W865WIzJub8ZG3X2CqZKTMnFogjR1CQWP5X2TIs1qnSsoGJmxrhBs/hkMIA4lZY/baoVftxuS5RbgL10gfmMbq7lBPYo/xDS3PnSG7Qthlowvvo/nzgn16V3QvO3/HbXBKxJLLCUnXSggQ8rEjoTc8hgahwvP+Y7N1Ly6EvuF+yGIeoXMEQud4wvWQfKgc8ABuDZlHKGIMC597pMMmebRAvWozhy6lZ9SLFIiQALvJ+GTZEyde2hii8tlW1pB5xY5RUOv0mDsw5Hw0p4mIOUxBXWfZWUO2ucrVDmBcmen2LjO3McRW0TtbYL8uSvZCzig2yMNjWplLbUlsuzVjk7uT1XqGEMJSIQNCR+jMWAdUeyrr/QVC2zPS8QjuFiIvKMMh3RHk2pIcqWLdYoI61EG3p+Z2qHsJCJ1nX5rA2lFCi3Ly3tN5rlDpGDnhNWPAIxzfEjgvFzqHcBjEVrFjtD9RYtJ0sUMd3Fwqz5jUAvZjxY4x/gWyRLmw5dBh/IPTIXjEHpzRQWiQTlBm//ZBMgRDwT8tekxLyui2sOXfkmFtstX6kbbCI9yF8ukScxqYiMgkiam4sMW0M/SRkowtES7YGE5t2Q3xLuT7XtekHQ+TNnHrYG/0eKElpn9IMQyxHUt+lvDILjF//WSYHxAaqxocrmFlnn3X8X9K7FPtnCp2ZmrjeZAfovsf5kCY7QZPC6kAAAAASUVORK5CYII="
            alt="Logo-img"
            className="logo-img"
          />
        </div>
        <span className="LOGO-text">LOGO</span>
        <div className="icons">
          <span>
            ENG{" "}
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACoSURBVHgB7ZExCsIwFIbfS3WvUhS3TpLBwqM38AbeQI/SG4hH8AieQEcnJ/EKVongLvTZFAKFJm2Hbu03vST//xF4AAPdIaN4JyWFjbk8s4xoY87CDIyZj2NxrpPoN50ZsSBz55nh80qvwWwxQQ/3wXR+Uir92srIcHzcb0lFoFHv58UmcZU1aP3qKk4QYcu/bF2EHGWnoCzJAz4wHGzlRiRR2GYzfecP40I4bURwVv0AAAAASUVORK5CYII="
              alt="Arrow"
            />
          </span>
          <span className="icon-img" />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI5SURBVHgB3VVdTttAEJ5ZG6GqqvAR/AJyIoy2LgdITkB6g+QEHAE4QdsTUE4QbpD0AIhtqSqLPtRHCE+R2nqnM+s6cZM4pvw8wPcQx+OZ+XZnZ74FeOrAVcZod7+DYHuIuEVENzni+Prq4rz8HoY6ePHK6wBRp85nJUG7rTV5aig5EGhCABN2CAgwYFtGZAcAPiDa01qfX7abpiZbIogiHaoNdUkSRDRIv5rxfEdaVspJMSwslC35xLqPgEfsE/zObff7N2P+IWjFyQ8OBPKom5r5CkporYOfFkdEEEw9ep0ZM1n0ibQOMceRpJ16du4TxUmfCWgn1j1oQMhE677LbiVXO94/kHf1dxsHsu3rK3MODVi18iqkbJxvYrlJZgRSN65OBg8EPnCDRGGFgFwnwCNAFYx0Q4ghPBC4fTX/fp4RoEVpqUBaFe4JyUEyF8pezgg2N+xH9+KrPtwT6KmiExV8Kh4M4zqDxoRw2NSGjVBwyBIyLmdJlXaezBN+BC9zdQR3RLSXSGxIPg1WOrR2k/cyJDIs8J/Yid/0JFZyVO2q+rLp22NEMohquM3CB7eEiKQPdCrDOuUctQRyFlbRW5kL31Oj20iHSDuwrxNJ1rHFSVeLAXI44igkHqhhu6jrEuROaO0l71i6WQApqxNJhDVw9eTOAtF5xOP0y8WZWzWLIwe6A+Up/SBlqdOotQSCbdZpP8eh3AUiYmJzg8StyP9OqnfCnQhKuEsHVI/vgy0e/bOmxM8HfwDZCQ6BoK5ACQAAAABJRU5ErkJggg=="
            alt="Logo-img"
            className="icon-img"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAI2SURBVHgBtVXbcdNAFD13ZX/kgxlRQcQX9kyw14ECkgogFYQOSCogqQCXQCqghFBBLEMgYviIShA/TCDR3tyVIkVrS7KtmZwfjfZxzn3uBZ4YtOrAYKAD6qkjEI3dixybW3MaRWHcWcCSq76aAQxmhM5FgmYrc2smbSI9tKn36YTlyx5PotAlGWgRT2kG6x1w1MSh0Aq1LaaHi+QWdk08EK943MbQ6EEQaN9+JYb+YOfNXt0ZIuNL9LKzcRwmtWfqiLee0VS2DrEBhOjzX88cx6ErtORBQS5JPZVEHkqIEknxcR2pUuoTG7bscwnX+61UWa8PGgW01v6/VMjFmujy4uTlSCfKKEQ/Zl/rBGT/TLHC1eXFdLCzG4tBHwPhqHrhCNzc9bTEVfJmzuz/r2/hFC2o7hNlCUf/PwL5LUvarSIydhOpQYINwV6akXpQurruCnCmjt8/wxAboixllXPUCxDbzRjdEUvCtxsFKG+sGB0hSU7k8XjeLEDsi8ofdIRhngvLuFFAal8z08bxL0BMtjiC6lpZpnkP2EOPFTQcvf4giX+HtZHlMHuFixe2FCh6gMmUHhikpHjlyHj0QCGRCCBV8Jc8qMNDI7U2WxX2URQjz72KQJmD1NzloTEqQFfUNKrj//DV5Br5lNpfNQoXkY3Wvjq33Xr1ffaiWHdCRCkfsIcvcvB6ONoNkVfFGpaznQtaTEvg8b6ztWSJjELJ9VsJ1Z5Y42MtkDzpmN/0zHRxHjw57gHcYeno+HIKegAAAABJRU5ErkJggg=="
            alt="Logo-img"
            className="icon-img"
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJ+SURBVHgBxVW9bhNBEJ7ZM1YS8XORggAJiUsBsiM7WTtQ2+4oQ0cXeILYb0CeIMkbOB1dwhPYdFT4gIhcl+sIEoUjCps4t8PMObKii+/HIMRYpz1rZr/Zne+bOYB/bJglqFDQjsqrTSLU/NcGok90YXY9z/XT9lppAcXV9S2l8C0BPGfgIQA/iC/Rwubd+w/Ofnz/9iFpv0pyPimvbzDoriFyB5ZZPD7qVfhpkGWW+eqHQLBTKOl6EkZiiVZWqz0iso+/9JajPq21/SvAHr/67G/ArDcQACLQYHBvmt913f7Yh3XhaOYEQyGTDZU5gdjd6MsSqHHsTAnmAPrhC6lKXAwYcmQZ5cGPC0nkoFiudDjEYYIrvpTkiklZ8IbqsAh8IT4OI1FFGFCLF2c+UL3HK8/0BLz0tI45dSA+ytHrRAxIsWJZb3DYjtwEL8vGPWEjUJ/l+8I7crt/lSA8sWaVBFBHUpqVdQct4w4U7EfLNs1SO1lsaemhRoWPGBz5dwaE84rU3K2Fe6f9/ukQ/uQGjqPthdtqi+vRJIiXIQO0zchsx82lqQkmChESibqItDewoHu1JDIiEPEVv9YYxiY0Te+zu58pQbFcPWES7SwkCj/K4AFPWodGphK9yTWZigTl5AapmQYu5rmun1fUkJOydJtR//U+QOOE6zm8h4wmc4n5d1nAa+kJyPjhmrdqkNFCzoA04Xg2JSYYl4WJ5e9A2qyfgHNXh0qzzHbUP11FTBwG2Lns3vYF4Lvzn0HX98cqEgnP3cxppUxNZCy9bQJseV8/tjMlmCQqVd+wRDclUWwQwSHlTEvInubONipE8wrWyKjFyUbkcRHpjf9ivwFogw8EfIWiTgAAAABJRU5ErkJggg=="
            alt="Logo-img"
            className="icon-img"
          />
        </div>
      </div>
      <nav className="bottom-header ">
        <div className="mobile-view">
          <span>SHOP</span>
          <span>SKILLS</span>
          <span>STORIES</span>
          <span>ABOUT</span>
          <span>CONTACT US</span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
