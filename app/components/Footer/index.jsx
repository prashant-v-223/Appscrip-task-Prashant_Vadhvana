import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className="footer-class">
            <div className="footer-top">
                <div className="first-top-footer">
                    <div className="footer-title">Be the first to know</div>
                    <div className="info">Sign up for updates from abc.</div>
                    <div className="input-class">
                        <input placeholder="Enter your Email" /> <button>SUBSCRIBE</button>
                    </div>
                </div>
                <div className="second-top-footer">
                    <div className="first">
                        <div className="footer-title">CONTACT US</div>
                        <div className="contact-info">
                            <div className="info">+44 221 133 5360</div>
                            <div className="info">customercare@abc.com</div>
                        </div>
                    </div>
                    <div className="second">
                        <div className="footer-title">Currency</div>
                        <div className="info">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJESURBVHgBtVNNSFRRFD6vXmCWI4KRYzNJYIyTRWgSWLoIQm0TRGSLoY3Q3yaSaFNQuPUHxY2ioiC6UETF1bgQF+q48AcFRUVB8A/FH8ZfVJDn/a5zL+/5nqCL+8F783HmvnO+c75zNffTT4YrJpp2dg8IuAw3Q8T/Rm+SXz+2/X8Nr7xXz2Tg49ssE8+W/HMgV/Jf397xxCIOHuW+S1EJ9kdDBziYy4po7DfYO0KZGX6KZR+BP/bdp0e+JGrt6rNwb2I8F1bb3M0LtdX9oRcZKbYOdFSH6paufqmohSVA24JPzCwwAek0ODxt4Uiez7qEkL25OQrrR/YCSBTsHeUJXRHVgoeGpyRfWtngPJV1AQ6gi8WVdc5nK6tId/BAx2uRfZAZaW+SKUQSD/u4mxUGRwEoRkJv4h0uAjyVjQscSHifQw88cbYCBA9Kq9oNX9ZXA/xfcZPk5nhNU9CR48zzN4XGwNCU4QRpMpTiaWVemDmUojvBherzJpe89FD6PXsHvADcD7ERYBTYlJAcR7yFw2AAZ8wcZy66B/qZ+iR+CMDsgW0YGnPLwsVFQ8vC/O1I7OGP75Tm8zoXQJvCTDEis5m4F2L389lKl1V3WjhwOzmZ4tJSnEdU9DtA/0uaeeAiXl/+kwoKK2S8rLqDd4FbjeIFJ8v0JPaGvQA2wMPULkX22cVHsU9XxZebYfJft3ugYZVIIfTw2DiphNaT/VptB+68HFIJ9R7MNzSSSij3QNsaHVNbQLUH2sCHgFqTD1fXSCVOAeaRUQKiy171AAAAAElFTkSuQmCC"
                                alt="Flag"
                                className="flag"
                            />{" "}
                            + USD
                        </div>
                        <div className="terms">
                            Transactions will be completed in Euros and a currency reference is
                            available on hover.
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ borderTop: "2px solid white", margin: "10px 0px 5%" }} />
            <div className="footer-bottom">
                <div className="first">
                    <div className="footer-title">
                        <span>abc</span>
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACoSURBVHgB7ZExCsIwFIbfS3WvUhS3TpLBwqM38AbeQI/SG4hH8AieQEcnJ/EKVongLvTZFAKFJm2Hbu03vST//xF4AAPdIaN4JyWFjbk8s4xoY87CDIyZj2NxrpPoN50ZsSBz55nh80qvwWwxQQ/3wXR+Uir92srIcHzcb0lFoFHv58UmcZU1aP3qKk4QYcu/bF2EHGWnoCzJAz4wHGzlRiRR2GYzfecP40I4bURwVv0AAAAASUVORK5CYII="
                            alt="downArrow"
                            className="down-Arrow-footer"
                        />
                    </div>
                    <div className="info">About Us</div>
                    <div className="info">Stories</div>
                    <div className="info">Artisans</div>
                    <div className="info">Boutiques</div>
                    <div className="info">Contact Us</div>
                    <div className="info">EU Compliances Docs</div>
                </div>
                <div className="first">
                    <div className="footer-title">
                        <span>Quick Links</span>
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACoSURBVHgB7ZExCsIwFIbfS3WvUhS3TpLBwqM38AbeQI/SG4hH8AieQEcnJ/EKVongLvTZFAKFJm2Hbu03vST//xF4AAPdIaN4JyWFjbk8s4xoY87CDIyZj2NxrpPoN50ZsSBz55nh80qvwWwxQQ/3wXR+Uir92srIcHzcb0lFoFHv58UmcZU1aP3qKk4QYcu/bF2EHGWnoCzJAz4wHGzlRiRR2GYzfecP40I4bURwVv0AAAAASUVORK5CYII="
                            alt="downArrow"
                            className="down-Arrow-footer"
                        />
                    </div>
                    <div className="info">Orders &amp; Shipping</div>
                    <div className="info">Orders &amp; Shipping</div>
                    <div className="info">Payment &amp; Pricing</div>
                    <div className="info">Return &amp; Refunds</div>
                    <div className="info">FAQs</div>
                    <div className="info">Privacy Policy</div>
                    <div className="info">Terms &amp; Conditions</div>
                </div>
                <div className="third">
                    <div>
                        <div className="footer-title">
                            <span>Follow Us</span>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACoSURBVHgB7ZExCsIwFIbfS3WvUhS3TpLBwqM38AbeQI/SG4hH8AieQEcnJ/EKVongLvTZFAKFJm2Hbu03vST//xF4AAPdIaN4JyWFjbk8s4xoY87CDIyZj2NxrpPoN50ZsSBz55nh80qvwWwxQQ/3wXR+Uir92srIcHzcb0lFoFHv58UmcZU1aP3qKk4QYcu/bF2EHGWnoCzJAz4wHGzlRiRR2GYzfecP40I4bURwVv0AAAAASUVORK5CYII="
                                alt="downArrow"
                                className="down-Arrow-footer"
                            />
                        </div>
                        <img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAAiCAYAAADxnO88AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAATzSURBVHgB7VrhdaM4EJ7k3f9wFSyp4HwdkArWHcQdnDswV4HpIHYFdgc4FdhXAU4FdiqYmw9GsUKQQIC9u+/t996EIAnx8TEjpJHvKBDMHMlhIvaX2J9i37TqTewk9t/d3d2OfhJci+9d14ZCIJHDAiTO53N0PB7pcDh81EdRVFqSoBmdxbZi6x8los1Xi45iB6tJpIZ24/MFAbH8dDpxlmUswrAIxKhyGdqsVitWFGLf6UYwfMVOYpmeRx2uWY3CFzcTW6KnNE1bxWqyOI5LsRXLtgcYApsvKPe5l1wTq9j9+GoH+6IoeDKZBAtGDQKiL32bMY0Mw1f7n9BAaH9FEF9z0Waz6eVlLkNf6HNs8ayH3Izp0erBm058tXEpGo0kWN1UvP0YD2n44gHpSlDx/HwR1wipMT2NGjxPw3ZJA6HjUHGDsbNw8pWKKZ4G4xFdSTRjGDcVCfWE4VsPIzl/1i9qXxToo9bnxMkXF+ALSB5PWSwWnOc5Y2riAur2+z0/Pz97xcOXWpBTf+HwgJmjfChODf2mX/hyNY/xehvECAWucYU9yvUFJBQuWqK3iBvqDAquvHLGPTywod9I+0nswtXLy4tTtNlsFnRTeK6OY6VnufrVOV6w13E1WX1x1BkkVlnGgXD0nX3iCyUx26ce3gavsUMXbXHNfD4vzxHarn5xT67eYtDgzvU3/7nO4LtVtuJxhEs++OqJdzxqGtMgiC02BnyUAZhymGtwJM+4GRquFl9XvUHB1bgULJpHuEu4yp+5zys+c7mIRuoxCHGEnBkfjXg1Em3ePKfuwsGVc0/9KPD0vy/5yp90u90GCQfvglB1QEgNv87CaTIgpe7CwYu2nnoDjEcxX5ZjJUU9T7Q+0msw3Si4m3AgnN7L/7GEC3WFpJTKdJKMYV/qZApCu92ubBOIbwFtY6ryaG04S4roCKMqbQSY84Mc52JluRyRbvrbatfK9556Arm3Ot7f3+lXAAQTr/lHPXFiyuSw7toHhDtSAEyyUkLsS52MdSRh3CiqCw8PDzi8UXccaSA0RDF5hmipVdXF40D47Q80xsOGQFYQ9PT0RI+Pj2XI4uHX6zUhKywfh6C+VOSQ2EbboYlR+80+UBiikgMGSkwJfAt713TEztXho9D0RfVNR+gylicdSX+eSzXXG6RWmSEW67n9ZcutdmmHj0PFl3Vu4psANwliC+Nbu5oJMXkmwBQAblr6fH2wqwjH+tLw/70OiofpdEouvL6+OuvMJo0LGPdckKUcDs6pRRMMX7Ep3R4zsvlyS7iivO8inxzeZs0DEwoEe8LV9iT1IFihZZme22vXwmqXuzzO8tKkXpH7FuQwLPYhRpe0UtsGz3JZ7qsU1BNGmIbyIbm4DzEb+l028mVdA46xOdNmlrf1Dje+pJYmtfIZD8vJQfhZrc/Yy1cqshumzt2DX0dwFXLo7Bap86yt0f4GmzWjPKzhy9ffrGnny7+3B02/3bcH62QQUmNs3mDc1PDcjylane9YL4Uv2ZJwvqp4+dnGF7CPgGaDR5HdYCyyf74QUyC0j8UofLna8CjdBUlL3wqDVCy0QXJTpy05D9gGHMIXlNvurWIlKtSpK9/Qn3nNqFpgRybvZufekCwQz8RKwszu//3BP/OakfIV21GVILATCpjKxPp/EN/OwjWQcv5Qj6pEYXA281q4Bt//AcfYyz7ZcekKAAAAAElFTkSuQmCC"
                            alt="social handles"
                            className="info"
                        />
                    </div>
                    <div>
                        <div className="footer-title">abc Accepts</div>
                        <img
                            src="data:image/png;base64,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"
                            alt="payments img"
                            className="info payImg"
                        />
                    </div>
                </div>
            </div>
            <div
                style={{
                    color: "white",
                    marginTop: "5%",
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                Copyright © 2023 abc. All rights reserved.
            </div>
        </div>
    )
}

export default Footer