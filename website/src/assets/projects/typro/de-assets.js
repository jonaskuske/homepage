/* eslint-disable quotes */
import showcase from './images/showcase.jpg'
import typroPixel from './images/block1.jpg'
import typroIPhone from './images/block2.jpg'
import typroIPhoneX from './images/block3.jpg'

export default {
  title: '»typro«',
  showcase: {
    image: showcase,
    text: `»typro« ist eine Progressive Web App, die es Nutzern erlaubt, mit Hilfe ihrer Smartphone-Kamera Schriftarten zu identifizieren, die gescannten Schriftarten samt Foto zu speichern und einen Katalog populärer Schriften zu durchsuchen. »typro« ist eines meiner ersten umfangreicheren Projekte und lässt sich <a href="https://typro.jonaskuske.com" target="_blank" rel="noopener">hier</a> live ausprobieren.`,
  },
  blocks: [
    {
      image: typroPixel,
      text: `Die Idee, verschiedene Marketingkonzepte sowie das Design entstanden im Modul „Marketing“. Gemeinsam mit meinen Kommilitonen <a href="http://riekehelmers.com" target="_blank" rel="noopener">Rieke Helmers</a> und <a href="https://maxmschneider.com" target="_blank" rel="noopener">Max M. Schneider</a> habe ich das Projekt anschließend als Abschlussarbeit im Modul „Programmieren“ prototypisch umgesetzt; das Projekt erhielt 99,5 von 100 möglichen Punkten. <br /> Lernziel dieses Moduls war das Vertrautmachen mit den Grundlagen von JavaScript und jQuery.`,
    },
    {
      image: typroIPhone,
      text: `Das Interface ist mit jQuery Mobile gebaut; dies war eine Anforderung seitens der Hochschule. Dank moderner webRTC APIs lassen sich Fotos aufnehmen, die dann in einer Datenbank (IndexedDB) lokal gespeichert werden. Durch einen Service Worker samt Caching-Strategie ist die Web App auch ohne Internetzugriff nutzbar und lässt sich auf unterstützten Geräten installieren. Die in der App verfügbaren Schriftarten können im eingebundenen Fontkatalog näher betrachtet werden; die hierfür nötigen Informationen werden beim Öffnen des Katalogs aus einer externen XML-Datei eingelesen, sodass sich der Katalog ohne großen Aufwand erweitern lässt.`,
    },
    {
      image: typroIPhoneX,
      text: `»typro« kann von mehreren Nutzern gleichzeitig verwendet werden, es werden immer nur die Scans des aktuell eingeloggten Nutzers angezeigt. Der Schriftkatalog, die Kamerafunktion und vieles weitere funktioniert bereits, lediglich die Schriftidentifizierung wird nur simuliert, da die Umsetzung der optischen Bildanalyse den Rahmen eines Prototyps überstiegen hätte.`,
    },
  ],
  footer: `Eine Implementierung dieses Features ist - unter Zuhilfenahme der Open Source Schrifterkennungs-Library „Typefont“ - jedoch bereits geplant. Da die Schriftanalyse einiges an Rechenleistung und Zeit in Anspruch nimmt, müsste diese serverseitig mit Node.js realisiert werden, um befriedigende Performance sicherzustellen. Auf leistungsschwächeren Mobilgeräten kann die Identifizierung unter Umständen mehrere Minuten dauern, wie erste Tests gezeigt haben – dies bietet sich also, wenn überhaupt, nur als Offline-Fallback an. Der Code von typro liegt in <a href="https://github.com/jonaskuske/typro" rel="noopener" target="_blank">diesem GitHub Repository</a>.`,
}
