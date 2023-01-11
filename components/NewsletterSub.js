import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";


const NewsletterSub = () => {
    const url = "https://gmail.us5.list-manage.com/subscribe/post?u=f707d6691b876c064ae8d2189&amp;id=0bff596680&amp;f_id=0042a2e6f0"
  return (
    <div className="mailchimpform">
      <MailchimpSubscribe 
      url={url}
      />
    </div>
  );
};

export default NewsletterSub;
