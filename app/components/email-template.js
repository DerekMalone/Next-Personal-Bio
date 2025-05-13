import * as React from "react";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';

export const ContactMeEmail = ({ contactName, email, message }) => {
//   year,
//   minutesSpentOnDocs,
//   uploadedDocuments,
//   sharedLinks,
//   receivedViews,
//   topDocumentName,
//   topDocumentViews,
//   mostActiveMonth,
//   mostActiveMonthViews,
//   sharerPercentile,
//   viewingLocations = [],
//  {
  return (
    <Html>
      <Head />
      
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-0">
            <Section className="p-8 text-center">
              <Text className="mx-0 mt-4 mb-8 p-0 text-center font-normal text-2xl">
                <span className="font-bold tracking-tighter">Derek Malone Website</span>
              </Text>
              <Text className="font-normal text-sm tracking-wider">
                {email}
              </Text>
              <Heading className="my-4 font-medium text-4xl leading-tight">
                From: {contactName}
              </Heading>
            </Section>

            <Section className="my-6 rounded-2xl bg-[#fb7a00]/10 bg-[radial-gradient(circle_at_bottom_right,#fb7a00_0%,transparent_60%)] p-8 text-center">
              <Heading className="m-0 font-medium text-3xl text-[#a63b00]">
                Message
              </Heading>
              <Text className="text-gray-900 text-sm leading-5">
                {message}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}


// export const EmailTemplate = ({ contactName, email, message }) => (
//   <div>
//     <h1>New Contact Form Submission</h1>
//     <p>You received a new message from your website contact form.</p>

//     <div
//       style={{
//         margin: "20px 0",
//         padding: "15px",
//         borderLeft: "4px solid #d0d0d0"
//       }}
//     >
//       <div style={{ marginBottom: "10px" }}>
//         <strong>Name:</strong> {contactName}
//       </div>
//       <div style={{ marginBottom: "10px" }}>
//         <strong>Email:</strong> {email}
//       </div>
//       <div>
//         <strong>Message:</strong>
//         <p style={{ marginTop: "5px", whiteSpace: "pre-wrap" }}>{message}</p>
//       </div>
//     </div>

//     <p>You can reply directly to this email to respond to {contactName}.</p>
//   </div>
// );

// export default EmailTemplate;
