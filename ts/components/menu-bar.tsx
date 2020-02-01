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
                position: fixed;
                top: 5px; left: 0;
                width: auto;
                display: inline-block;
                padding: 5px;
            }

            menu-bar svg {
                margin: 5px;
            }

            menu-bar a {
                position: fixed;
                left: 10px;
                text-align: right !important; 
                display: inline-block; 
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