import lsbShowcase from './images/lsbShowcase.jpg'
import lsb1 from './images/lsb1.jpg'
import lsb2 from './images/lsb2.jpg'

export default {
  title: '»Landessportbund Bremen«',
  showcase: {
    image: lsbShowcase,
    text:
      'Konzept einer redesignten Homepage für den »Landessportbund Bremen« (LSB), das ich im Rahmen eines neu gestalteten Corporate Designs entworfen habe. Das Redesign wurde von mir zu Demonstrationszwecken als Vue.js Webapp umgesetzt.',
  },
  blocks: [
    {
      image: lsb1,
      text:
        'Mein Redesign setzt auf eine klare visuelle Hierarchie und integriert die Designprinzipien, die ich in dem <a href="/detail?project=lsb-design">Corporate Design Manual</a> für den LSB definiert habe; dies ist besonders gut an Schriftart und Farbgestaltung zu erkennen. So entstanden mehrere neu gestaltete Seiten. Wechselt man zwischen den Seiten, so zeigt eine <a href="https://www.jonaskuske.com/lsb-loader/" rel="noopener" target="_blank">animierte Version</a> des neuen, treppenförmigen Logos den Ladevorgang an.',
    },
    {
      image: lsb2,
      text:
        'Eine der neugestalteten Seiten ist die Seite „Sportangebote“. Während Nutzer auf der alten Website erst aus mehreren Dropdown-Menüs wählen und dann manuell die Suche starten mussten, setzt die von mir redesignte Version auf eine Ergebnisliste, die sich mittels Radiobuttons und einem Suchfeld filtern lässt und die aktualisierten Ergebnisse sofort anzeigt. Umgesetzt wurde dies mittels verschiedener „computed properties“ in Vue.js. Das Aktualisieren der Liste wird durch "FLIP Transitions" animiert.',
    },
  ],
  footer:
    'Das Redesign habe ich dem „Landessportbund“ im Winter 17/18 live demonstriert, das Feedback war überaus positiv.',
}
