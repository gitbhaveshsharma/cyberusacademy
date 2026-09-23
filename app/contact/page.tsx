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
            <section className="contact contact-page-section">
                <div className="contact-heading">
                    <p className="eyebrow"><span /> 05 <b>/</b> CONTACT</p>
                    <h2>LET&apos;S BUILD<br />YOUR <em>NEXT MOVE.</em></h2>
                    <p>Tell us where you want to go. We&apos;ll help you find the right path to get there.</p>
                    <a className="contact-email" href="mailto:hello@cyberusacademy.in">hello@cyberusacademy.in</a>
                </div>
                <form className="contact-form">
                    <label><span>01 / YOUR NAME</span><input type="text" name="name" placeholder="Enter your name" required /></label>
                    <label><span>02 / EMAIL ADDRESS</span><input type="email" name="email" placeholder="you@company.com" required /></label>
                    <label className="message-field"><span>03 / WHAT WOULD YOU LIKE TO LEARN?</span><textarea name="message" placeholder="Tell us a little about your goals" rows={3} required /></label>
                    <button className="contact-submit" type="submit">START THE CONVERSATION <i>→</i></button>
                    <p className="contact-note"><i /> YOUR INFORMATION STAYS PRIVATE.</p>
                </form>
            </section>
        </SitePage>
    );
}
