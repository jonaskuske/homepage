import lsbShowcase from './images/showcase.jpg'
import logo from './images/lsb-logo.jpg'
import businessCards from './images/businessCards.jpg'

export default {
  title: '»Landessportbund Bremen«',
  showcase: {
    image: lsbShowcase,
    text:
      'Ein brandneues Corporate Design, entworfen für den »Landessportbund Bremen« (LSB) im Rahmen eines Hochschulprojektes. Dessen Aufgabe ist es, „die Voraussetzungen für ein umfangreiches Angebot an sportlichen Aktivitäten und für ein attraktives, selbstbestimmtes Vereinsleben zu gewährleisten“. Deshalb wollte ich Designrichtlinien entwerfen, die zum einen die Verbindung zum Sport zum Ausdruck bringen, zum anderen aber auch seriös und modern wirken, damit der LSB bei seinen Verwaltungsaufgaben als verlässlicher Partner auftritt. Um dem gerecht zu werden, setzt mein Designvorschlag auf saubere, geometrische Grundformen und kombiniert diese mit der für Bremen typischen roten Farbgebung.',
  },
  blocks: [
    {
      image: logo,
      text:
        'Das Logo besteht aus Quadraten in unterschiedlichen Rottönen, die zu einer Treppe zusammengesetzt sind – in Anlehnung an ein Siegertreppchen, das gemeinhin mit Sport assoziiert wird. Die verschiedenen Rottöne stellen eine Verbindung zur Bremer Speckflagge und somit auch zur Heimat des LSB her. Gleichzeitig wirkt das Logo modern und geradlinig, während die zusammengesetzte Form auf Vielfalt und Gemeinschaft, essentielle Komponenten des Sports, hindeutet.',
    },
    {
      image: businessCards,
      text:
        'Zusätzlich zum neuen Logo habe ich allgemeine Designvorgaben erarbeitet, die sicherstellen, dass der Landessportbund bei seiner Kommunikation ein einheitliches und unverkennbares Auftreten hat. Diese habe ich in einem Design Manual zusammengefasst, das unter anderem Vorgaben für Typografie und Farbgestaltung sowie diverse Anwendungsbeispiele enthält. Das Manual selbst ist nach denselben Prinzipien gestaltet wie das Logo; es basiert auf einem quadratischen 3x3 Raster.',
    },
  ],
  footer:
    'Neben Beispielen für klassische Kommunikationsausstattung wie Visitenkarten und Briefbögen enthält das Design Manual auch ein Beispiel für ein Redesign der Website, das den neuen Designrichtlinien folgt. Dieses habe ich zu Demonstrationszwecken für den Klienten prototypisch als Vue.js - Webapp umgesetzt, mehr dazu ist <a href="/detail?project=lsb-homepage">hier</a> zu finden.',
}
