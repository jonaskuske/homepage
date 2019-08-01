const ImprintPage = ({ state: { i18n }, ...props }) => {
  const className = 'legal ' + (props.class || '')

  const t = i18n.t.forNamespace('LegalPage')
  const imprintSection = t.forNamespace('imprint.section')

  return (
    <main key="legal" {...props} class={className}>
      <h1>{t.inline('title')`Legal Notice`}</h1>
      <section>
        <h1>{t.inline('imprint.title')`Imprint`}</h1>
        <h2>{t.inline('imprint.law')`Information in accordance with section §5 TMG`}</h2>
        <p>Jonas Kuske</p>
        <p>Sielstraße 5</p>
        <p>27568 Bremerhaven</p>
        <br />
        <h2>{t.inline('imprint.contact')`Contact`}</h2>
        <p>{t.inline('imprint.phone')`Phone: +491603336948`}</p>
        <p>
          Mail: <a href="mailto:mail@jonaskuske.com">mail@jonaskuske.com</a>
        </p>
        <br />
        <h2>{t.inline(
          'imprint.accountablePerson',
        )`Person responsible for content in accordance with 55 Abs. 2 RStV`}</h2>
        <p>Jonas Kuske, Sielstraße 5 27568 Bremerhaven</p>
        <br />
        <h2>{t.inline('imprint.disclaimer')`Disclaimer`}</h2>
        <h3>{imprintSection.inline('pageContents.title')`Accountability for content`}</h3>
        <p>{imprintSection.inline(
          'pageContents.text',
        )`The contents of our pages have been created with the utmost care. However, we cannot guarantee the contents' accuracy, completeness or topicality.According to statutory provisions, we are furthermore responsible for our own content on these web pages.In this context, please note that we are accordingly not obliged to monitor merely the transmitted or saved information of third parties, or investigate circumstances pointing to illegal activity.Our obligations to remove or block the use of information under generally applicable laws remain unaffected by this as per §§ 8 to 10 of the Telemedia Act(TMG).`}</p>
        <br />
        <h3>{imprintSection.inline('links.title')`Accountability for links`}</h3>
        <p>{imprintSection.inline(
          'links.text',
        )`Responsibility for the content of external links (to web pages of third parties) lies solely with the operators of the linked pages. No violations were evident to us at the time of linking. Should any legal infringement become known to us, we will remove the respective link immediately.`}</p>
        <br />
        <h3>{imprintSection.inline('copyright.title')`Copyright`}</h3>
        <p>
          {imprintSection.inline(
            'copyright.citationStart',
          )`The header image and the second regular image of project "DMP Portfolio" are based upon mockups created by Anthony Boyd. The showcase mockup can be found `}
          <a
            href="https://www.anthonyboyd.graphics/mockups/2017/modern-responsive-showcase-mockup/"
            rel="noopener"
            target="_blank"
          >
            {imprintSection.inline('copyright.citationLink')`here`}
          </a>
          {imprintSection.inline('copyright.citationMiddle')` the other mockup can be found `}
          <a
            href="https://www.anthonyboyd.graphics/mockups/2017/modern-iphone-x-macbook-pro-mockup-vol-2/"
            rel="noopener"
            target="_blank"
          >
            {imprintSection('copyright.citationLink')}
          </a>
          .
        </p>
        <p>{imprintSection.inline(
          'copyright.text',
        )`Our web pages and their contents are subject to German copyright law. Unless expressly permitted by law (§ 44a et seq. of the copyright law), every form of utilizing, reproducing or processing works subject to copyright protection on our web pages requires the prior consent of the respective owner of the rights. Individual reproductions of a work are allowed only for private use, so must not serve either directly or indirectly for earnings. Unauthorized utilization of copyrighted works is punishable (§ 106 of the copyright law).`}</p>
      </section>
      <section>
        <h1>{t.inline('privacy.title')`Privacy`}</h1>
        <p>{t.inline(
          'privacy.contactData',
        )`If you use the data from the imprint to contact us, we will use your contact data gathered from the sender information solely to respond to your inquiry. We will delete your contact data if you ask us to.`}</p>
        <p>{t.inline(
          'privacy.colorSync',
        )`If you use the remote control feature for this site's theme color, we generate a unique ID which is transmitted and stored on the server handling color sync. This is necessary so the server can establish a connection between the remote control and this site to sync the selected theme color. The ID is generated randomly, does not contain private information and is deleted from the server upon closing the page.`}</p>
        <p>{t.inline(
          'privacy.noOtherInformation',
        )`With exception of the cases described above, this site does not collect or use any personal information.`}</p>
      </section>
    </main>
  )
}

export default ImprintPage
