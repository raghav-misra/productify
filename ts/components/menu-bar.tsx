import { h, render } from '../helpers.js';

export class MenuBar extends HTMLElement {
    connectedCallback() {
        render((
            <fragment>
                <code><a href="/">Home<i data-feather="home"></i></a></code>
                <br />
                <code><a href="/#lists">Lists<i data-feather="list"></i></a></code>
                <br />
                <code><a href="/#notes">Notes<i data-feather="edit"></i></a></code>
                <br />
                <code><a target="blank" href="https://github.com/raghav-misra/productify">
                    Source
                    <i data-feather="github"></i>
                </a></code>
            </fragment>
        ), this);
    }

    static loadStyles() {
        const style = <style></style>;
        style.innerText = (`
            menu-bar {
                position: absolute;
                top: 5px; left: 0;
                width: auto;
                display: inline-block;
                padding: 5px;
            }

            menu-bar svg {
                left: 60px; bottom: 23px; 
                position: relative;
            }

            menu-bar a {
                position: absolute; 
                left: 10px; 
                display: block; 
                padding: 2.5px; 
                font-size: 1.25em;
            }
        `).replace("\n", "");

        document.body.appendChild(style);
    }

    static define() {
        // Load CSS:
        this.loadStyles();

        // Load Feather Icons:
        render(
            <script onload="feather.replace({ width: 12, height: 12 })" src="https://unpkg.com/feather-icons"></script>,
            document.body
        );

        // Define Element:
        customElements.define("menu-bar", this);
    }
}