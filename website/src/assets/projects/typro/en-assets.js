/* eslint-disable quotes */

import showcase from './images/showcase.png';
import typroPixel from './images/block1.png';
import typroIPhone from './images/block2.png';
import typroIPhoneX from './images/block3.png';

export default {
  title: '»typro«',
  id: 'typro',
  showcase: {
    image: showcase,
    text: `„typro“ is a Progressive Web App allowing users to identify fonts using their smartphone's camera, storing the results including the photos and searching a catalogue containing many popular typefaces. It was one of my first projects and can be found <a href="https://typro.jonaskuske.com" target="_blank" rel="noopener">here</a>.`
  },
  blocks: [
    {
      image: typroPixel,
      text: `Die Idee, verschiedene Marketingkonzepte sowie das Design entstanden im Modul „Marketing“. Gemeinsam mit meinen Kommilitonen <a href="http://riekehelmers.com" target="_blank" rel="noopener">Rieke Helmers</a> und <a href="https://maxmschneider.com" target="_blank" rel="noopener">Max M. Schneider</a> habe ich das Projekt anschließend als Abschlussarbeit im Modul „Programmieren“ prototypisch umgesetzt; das Projekt erhielt 99,5 von 100 möglichen Punkten. <br /> Lernziel dieses Moduls war das Vertrautmachen mit den Grundlagen von JavaScript und jQuery.`
    },
    {
      image: typroIPhone,
      text: `Das Interface ist mit jQuery Mobile gebaut, was Anforderung von Seiten der Hochschule war. Dank modernen webRTC APIs lassen sich Fotos aufnehmen, die dann in einer Datenbank (IndexedDB) lokal gespeichert werden. Durch einen Service Worker samt Caching-Strategie ist die Web App auch ohne Internetzugriff nutzbar und lässt sich auf unterstützen Geräten installieren. Die in der App verfügbaren Schriftarten lassen sich im eingebundenen Fontkatalog näher betrachten, die hierfür nötigen Informationen werden bei Öffnen des Katalogs aus einer externen XML-Datei eingelesen, sodass sich der Katalog ohne großen Aufwand erweitern lässt.`
    },
    {
      image: typroIPhoneX,
      text: `typro kann von mehreren Nutzern gleichzeitig genutzt werden, es werden immer nur die Scans des aktuell eingeloggten Nutzers angezeigt. Der Schriftkatalog, die Kamerafunktion und vieles weitere ist voll funktional, lediglich die Schriftidentifizierung wird nur simuliert, da die Umsetzung der optischen Bildanalyse den Rahmen eines Prototyps überstiegen hätte.`
    }
  ],
  footer: `Eine Implementierung dieses Features ist - unter Zuhilfenahme der Open Source Schrifterkennungs-Library „Typefont“ - jedoch bereits geplant. Da die Schriftanalyse einiges an Rechenleistung und Zeit in Anspruch nimmt, müsste diese serverseitig mit Node.js realisiert werden, um befriedigende Performance sicherzustellen. Auf schwächeren Mobilgeräten kann die Identifizierung unter Umständen mehrere Minuten dauern, wie erste Tests gezeigt haben – dies bietet sich also, wenn überhaupt, nur als Offline-Fallback an.`
};