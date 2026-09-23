import type { Metadata } from "next";
import { SitePage } from "../site-page";

export const metadata: Metadata = {
    title: "Contact Cyberus Academy | Start Learning",
    description:
        "Contact Cyberus Academy to find the right practical cybersecurity learning path for your goals.",
};
export default function ContactPage() {
    return (
        <SitePage
            section="CONTACT / START HERE"
            title={
                <>
                    MAKE YOUR <em>NEXT MOVE.</em>
                </>
            }
            intro="Tell us where you want to go. We will help you find a practical path to get there."
        >
            <div className="contact-layout">
                <div>
                    <p className="content-label">CYBERUS ACADEMY</p>
                    <h2>Ready to do the Learn?</h2>
                    <p>
                        Ask about courses, learning paths, live classes or the right place
                        to begin.
                    </p>
                    <a href="mailto:hello@cyberusacademy.com">hello@cyberusacademy.com</a>
                </div>
                <form className="simple-form">
                    <label>
                        Name
                        <input name="name" placeholder="Your name" />
                    </label>
                    <label>
                        Email
                        <input type="email" name="email" placeholder="you@company.com" />
                    </label>

                    <label>
                        What would you like to learn?
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Tell us about your goals"
                        />
                    </label>
                    <button className="button button-primary" type="submit">
                        SEND MESSAGE <span>→</span>
                    </button>
                </form>
            </div>
        </SitePage>
    );
}
