import ImageText from '@@/ImageTextBlock';
import headerImg from '@img/typro_header.png';
import img1 from '@img/books.png';
import img2 from '@img/iPhoneX.png';
import img3 from '@img/iPhone Hand.png';


const view = ({ data: { project: { title, image, text }, page }, class: className = '', ...props }) => (
  <main key='details' class={`${className}`} {...props} >
    <h1>{title.toUpperCase()}</h1>
    <section class='detail-container'>
      {page.includes('typro')
        ? [
          <img class='new-detail-image' src={headerImg} />,
          <p class='new-detail-text'>„typro“ ist eine Progressive Web App, die es Nutzern erlaubt, mit Hilfe ihrer Smartphone-Kamera Schriftarten zu identifizieren, die gescannten Schriftarten samt Foto zu speichern und einen Katalog populärer Schriften zu durchsuchen. typro ist eines meiner ersten umfangreicheren Projekte und lässt sich <a href="https://typro.jonaskuske.com" target="_blank" rel="noopener">hier</a> live ausprobieren.</p>,
          <ImageText src={img1} mode='left'>Die Idee, verschiedene Marketingkonzepte sowie das Design entstanden im Modul „Marketing“. Gemeinsam mit meinen Kommilitonen <a href="http://riekehelmers.com" target="_blank" rel="noopener">Rieke Helmers</a> und <a href="https://maxmschneider.com" target="_blank" rel="noopener">Max M. Schneider</a> habe ich das Projekt anschließend als Abschlussarbeit im Modul „Programmieren“ prototypisch umgesetzt; das Projekt erhielt 99,5 von 100 möglichen Punkten. <br />
            Lernziel dieses Moduls war das Vertrautmachen mit den Grundlagen von JavaScript und jQuery.
      </ImageText>,
          <ImageText src={img3} mode='right'>Das Interface ist mit jQuery Mobile gebaut, was Anforderung von Seiten der Hochschule war. Dank modernen webRTC APIs lassen sich Fotos aufnehmen, die dann in einer Datenbank (IndexedDB) lokal gespeichert werden. Durch einen Service Worker samt Caching-Strategie ist die Web App auch ohne Internetzugriff nutzbar und lässt sich auf unterstützen Geräten installieren. Die in der App verfügbaren Schriftarten lassen sich im eingebundenen Fontkatalog näher betrachten, die hierfür nötigen Informationen werden bei Öffnen des Katalogs aus einer externen XML-Datei eingelesen, sodass sich der Katalog ohne großen Aufwand erweitern lässt.
      </ImageText>,
          <ImageText src={img2} mode='left'>typro kann von mehreren Nutzern gleichzeitig genutzt werden, es werden immer nur die Scans des aktuell eingeloggten Nutzers angezeigt. Der Schriftkatalog, die Kamerafunktion und vieles weitere ist voll funktional, lediglich die Schriftidentifizierung wird nur simuliert, da die Umsetzung der optischen Bildanalyse den Rahmen eines Prototyps überstiegen hätte.
      </ImageText>,
          <p class="new-detail-text">Eine Implementierung dieses Features unter Zuhilfenahme der Open Source Schrifterkennungs-Library „Typefont“ ist jedoch geplant. Da die Schriftanalyse einiges an Rechenleistung und Zeit in Anspruch nimmt, müsste diese serverseitig mit Node.js realisiert werden, um befriedigende Performance sicherzustellen. Auf schwächeren Mobilgeräten kann die Identifizierung (client-seitig) unter Umständen mehrere Minuten dauern, wie erste Tests gezeigt haben – dies bietet sich also, wenn überhaupt, nur als Offline-Fallback an.
      </p>]
        : [<img class='detail-image' src={image} />, <p class='detail-text'>{text}</p>]
      }

    </section>
  </main>
);

export default view;
