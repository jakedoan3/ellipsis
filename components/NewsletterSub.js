import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";


const NewsletterSub = () => {
    const url = "https://gmail.us5.list-manage.com/subscribe/post?u=f707d6691b876c064ae8d2189&amp;id=0bff596680&amp;f_id=0042a2e6f0"
//   const MAILCHIMP_URL = process.env.MAILCHIMP_URL;
  return (
    <div>
      <MailchimpSubscribe 
      url={url}
    //   MAILCHIMP_URL={MAILCHIMP_URL} 
      />
    </div>
  );
};

export default NewsletterSub;
