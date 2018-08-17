import React, { Component } from "react";
//import Data from "../data/Data.json";
import Years from "./years";

class Body extends Component {
  state = {
    years: [
      {
        year: "2010",
        text:
          "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.",
        img:
          "https://www.securitymagazine.com/ext/resources/SEC/2018/January/Top-12-Practices-Secure-Coding-Security-Magazine.jpg"
      },
      {
        year: "2011",
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Deinde prima illa, quae in congressu solemus: Quid tu, inquit, huc? Duo Reges: constructio interrete. At cum de plurimis eadem dicit, tum certe de maximis. Quod autem in homine praestantissimum atque optimum est, id deseruit. Equidem etiam Epicurum, in physicis quidem, Democriteum puto. Aliter enim nosmet ipsos nosse non possumus.Dempta enim aeternitate nihilo beatior Iuppiter quam Epicurus; Sic enim censent, oportunitatis esse beate vivere. Quem quidem vos, cum improbis poenam proponitis, inpetibilem facitis, cum sapientem semper boni plus habere vultis, tolerabilem. Atque hoc loco similitudines eas, quibus illi uti solent, dissimillimas proferebas. Ergo adhuc, quantum equidem intellego, causa non videtur fuisse mutandi nominis. Occultum facinus esse potuerit, gaudebit; Id mihi magnum videtur. Velut ego nunc moveor. Septem autem illi non suo, sed populorum suffragio omnium nominati sunt. Ergo illi intellegunt quid Epicurus dicat, ego non intellego? Sed quoniam et advesperascit et mihi ad villam revertendum est, nunc quidem hactenus; Ita relinquet duas, de quibus etiam atque etiam consideret.Confecta res esset. Aut haec tibi, Torquate, sunt vituperanda aut patrocinium voluptatis repudiandum. Aufert enim sensus actionemque tollit omnem. Nam memini etiam quae nolo, oblivisci non possum quae volo.",
        img: "https://nmhshelpdesk.files.wordpress.com/2017/03/coding.jpg"
      },
      {
        year: "2012",
        text:
          "John Dewey YouTube Romenesko just across the wire stream Google News Alberto Ibarguen Buttry reality-based the medium is the massage, iPhone app commons-based peer production writing Andy Carvin bloggers in their mother's basement WordPress AP Jurgen Habermas nonprofit, explainer aggregation tweet the power of the press belongs to the person who owns one abundance I saw it on Mediagazer Wikipedia crowdsourcing. Tumblr ProPublica Walter Cronkite died for your sins location-based going forward perfect for starting a campfire should isn't a business model RSS social media morgue, the other longer Book Review collaboration Journal Register Django people formerly known as the audience open newsroom hyperlocal election-night hologram Clay Shirky syndicated, Dayton for under $900 a day link economy linking newsroom cafe Dan Fleckner social media West Seattle Blog hot news doctrine. ",
        img:
          "https://res.cloudinary.com/teepublic/image/private/s--74xJPnES--/t_Preview/b_rgb:262c3a,c_lpad,f_jpg,h_630,q_90,w_1200/v1493337683/production/designs/1533096_1.jpg"
      },
      {
        year: "2013",
        text:
          "CPC vast wasteland Tumblr location-based audience atomization overcome Steve Jobs bloggers in their mother's basement Politics & Socks page WikiLeaks hackgate, perfect for starting a campfire MinnPost Fuego Neil Postman Knight News Challenge paidContent community What Would Google Do curation, startups HuffPo church of the savvy Fuego explainer RT abundance Knight Foundation. innovation the medium is the message I love the Weather & Opera section privacy I saw it on Mediagazer Knight Foundation Arianna linkbait people formerly known as the audience, CPC TweetDeck learnings community CPM semipermeable Patch cops beat natural-born blogger, Alberto Ibarguen but what's the business model Demand Media the other longer Book Review meme we will make them pay Aron Pilhofer. ",
        img:
          "http://kellerelementary.weebly.com/uploads/2/5/7/9/25792133/coding.jpg"
      },
      {
        year: "2014",
        text:
          "open source +1 digital circulation strategy twitterati Patch abundance aggregation shoot a photo dingbat Quora election-night hologram, tweet twitterati shoot a photo Pulse Facebook community data visualization crowdfunding community. What Would Google Do every dog loves food API rubber cement future of narrative Flipboard syndicated right-sizing, eHow going forward Zite Alberto Ibarguen monetization nut graf I saw it on Mediagazer, privacy Paul Steiger TBD Flipboard community free as in beer.  ",
        img:
          "http://genesisnanotech.com/wp-content/uploads/2013/10/Printing-Graphene-Chips.jpg"
      }
    ]
  };
  render() {
    return <Years years={this.state.years} />;
  }
}

export default Body;
