import Head from "next/head";
import Button from "@/components/button";

export default function Data() {
  return (
    <>
      <Head>
        <title>cycleOn</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div class="header">
          <img src="/logo.png" href="#index" id="logo"></img>
          <div class="navbar">
            <a href="/aboutCycleOn">What is cycleOn?</a>
            <a href="/WhoIsCycleOn">Who is cycleOn?</a>
            <a href="/profile">How can I use it?</a>
            <Button />
          </div>
        </div>
        <div class="Contact">
          <a>
            This WebApp was built by: <br />
            Benjamin Schröder <br /> Bruno Moschetti <br />
            Carina Brinkmann <br /> Konstantin Münster <br /> Sara Brandt
          </a>
          <h2>
            Please drop us a message to xyz in case you encounter any bugs,
            issues or have any concerns about our WebApp.{" "}
            {/* We need a contact address, don't we? */}
          </h2>
        </div>
        <div class="DataInformation">
          <h1>Effective Date: 22. September 2023</h1>
          <a>
            Thank you for using CycleOn, our web application to be your biking
            companion around the city of Hamburg. This Data Privacy Statement
            explains how we collect, use, and protect user data when you sign up
            for our services. By registering with CycleOn, you agree to the
            terms outlined in this statement.{" "}
          </a>
          <ol>
            1. Information We Collect When you sign up for CycleOn, we collect
            the following information: <ul>Name</ul> <ul>Username</ul>
            <ul>Email Address</ul> <ul>Age</ul> <ul>City</ul>
          </ol>{" "}
          <br />
          <ol>
            2. How We Use Your Information: We utilize the collected data for
            the following purposes:
            <br /> Granting access to CycleOn's features and services.
            Personalizing your experience based on your age and city. Sending
            important notifications and updates relevant to the app. Addressing
            any inquiries, feedback, or support requests you may have.
          </ol>
          <br />
          <ol>
            3. Data Security Measures We are committed to ensuring the security
            of your information. We employ reasonable security measures to
            prevent unauthorized access, alteration, disclosure, or destruction
            of your personal data.
          </ol>
          <br />
          <ol>
            4. Sharing of Information We do not share your data with third
            parties, except in the circumstances below: With your explicit
            consent. When mandated by law or government authorities. To
            safeguard our rights, privacy, safety, property, and that of our
            users.
          </ol>
          <br />
          <ol>
            5. Data Retention We retain your personal data only for the duration
            necessary to provide services and fulfill the objectives stated in
            this statement. You may request the deletion of your account and
            associated data at any time.
          </ol>
          <br />
          <ol>
            6. Your Rights You have the following rights: Access your personal
            data held by us. Correct inaccuracies or incompleteness in your
            information. Withdraw your consent at any point. Request the erasure
            of your account and data. Voice concerns or complaints about our
            data practices.
          </ol>
          <br />
          <ol>
            7. Cookies and Tracking We may employ cookies and similar tracking
            technologies to enhance your browsing experience. Your browser
            settings allow you to manage your cookie preferences.
          </ol>
          <br />
          <ol>
            8. Changes to this Statement We may update this Data Privacy
            Statement occasionally. Significant changes will be communicated,
            and the latest version will be accessible on our website.
          </ol>
          <br />
          <ol>
            9. Contact Information For inquiries, concerns, or data-related
            requests, please reach out to us at [Insert Contact Information].
          </ol>
          <br />
          By registering and using CycleOn, you acknowledge understanding and
          agreement with this Data Privacy Statement, permitting us to collect
          and use your data as described. Sincerely, [Your Company Name] [Your
          Company Address] [CycleOn Website URL]
        </div>
      </main>
    </>
  );
}
