import React from "react"
import SEO from "../components/seo"
import ContactForm from "../components/contactform"

const ContactPage = () => (
  <>
    <SEO title="Home" />
    {/* Page Title */}
    <div className="mt-8 mb-3 text-xl text-center">
      <h1>Контакти</h1>
    </div>
    <hr className="hr-line mx-auto mb-6"></hr>
    <ContactForm></ContactForm>
  </>
)

export default ContactPage
