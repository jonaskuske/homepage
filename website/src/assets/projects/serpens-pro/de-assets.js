import serpensShowcase from './images/serpens-showcase.jpg'
import serpens1 from './images/serpens1.jpg'
import serpens2 from './images/serpens2.jpg'

export default {
  title: '»Serpens Pro«',
  showcase: {
    image: serpensShowcase,
    text:
      'Ein Elementarfont, bei dem alle Buchstaben aus Einzelteilen zusammengesetzt sind, die durch das Zerteilen geometrischer Grundformen entstanden. Lesbarkeit stand bei diesem Projekt im Hintergrund, viel mehr ging es darum, klare Regeln zu definieren, anhand derer die Schriftart konstruiert werden sollte, und nicht von diesen abzuweichen. Die geschwungenen Linien geben dem Font seinen Namen: »Serpens Pro«.',
  },
  blocks: [
    {
      image: serpens1,
      text:
        'Die Grundelemente, aus denen die Buchstaben des Fonts gebildet werden, bestehen aus zwei geachtelten Kreisen mit unterschiedlichem Radius und Geraden in korrespondierender Länge. Bei den Majuskeln der Schriftart dürfen sich die Grundelemente nicht überlappen, stattdessen werden Abstände zwischen den Einzelteilen verwendet, um einheitliche Abmessungen zu erreichen. Bei Minuskeln ist das Überlappen der Basiselemente gestattet, um eine kompaktere Optik zu erzielen.',
    },
    {
      image: serpens2,
      text:
        'Die Schrift wurde zur Gestaltung von zwei Plakaten genutzt: Das eine zeigt alle Majuskeln des Alphabets und stellt diese kontrastreich auf einem Schachbrett-ähnlichen Raster zur Schau. Die Gestaltung des anderen Plakates konzentriert sich auf die verschiedenen Grundformen, aus denen die Lettern von »Serpens Pro« zusammengesetzt werden, und verdeutlicht so die technisch-abstrakte Konstruktionsweise, die dem Font zu Grunde liegt.',
    },
  ],
}
