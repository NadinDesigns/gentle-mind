import type { Emotion } from "./types"; // Предполагая, что Emotion импортируется

// 1. Новое определение интерфейса для отдельной практики
export interface PracticeData {
  title: string;
  introText: string;
  practiceText: string;
  completionText: string;
}

// 2. Новое определение типа для ContentMap: теперь содержит массив PracticeData
export type ContentMap = Record<Emotion, PracticeData[]>;

// 🟢 НОВОЕ: Отдельный объект для меток кнопок, используемых в WelcomeScreen
export const emotionLabels: Record<Emotion, string> = {
  NO_ENERGY: "Ich bin erschöpft",
  UNFOCUS: "Kann mich nicht konzentrieren",
  OVERWHELMED: "Ich bin überfordert",
  ANXIETY: "Ich bin unruhig",
};

// 3. Обновление объекта content (остается без изменений, так как он содержит массив практик)
export const content: ContentMap = {
  // --- NO_ENERGY (Нет сил) ---
  NO_ENERGY: [
    {
      title: "Deine warme Hand",
      introText:
        "Du bist erschöpft. Dein Körper ist gerade ganz langsam. Lass uns ihm helfen, wieder ein kleines bisschen wach zu werden – nur 1 %.",
      practiceText:
        "Lege deine Hand sanft auf deine Brust.\nAtme ganz weich ein… und genauso sanft wieder aus.\nDu musst dich nicht anstrengen. Spüre einfach nur den Kontakt zu deiner Hand.",
      completionText:
        "Du bist wieder ein Stückchen mehr bei dir. Das reicht völlig aus.",
    },
    {
      title: "Sanfte Aktivierung",
      introText:
        "Dein Körper fühlt sich gerade etwas abgeschaltet an. Lass uns ihm ein kleines bisschen Energie schenken – nur ein ganz kleines bisschen.",
      practiceText:
        "Lege deine Hände auf deine Oberschenkel.\nDrücke sanft für 3 Sekunden nach unten… und lass wieder los.\nWiederhole das dreimal.\nDiese einfache Bewegung hilft dir, dich wieder ganz zu spüren.",
      completionText:
        "Die Energie kehrt langsam zurück. Jeder noch so kleine Schritt zählt.",
    },
  ],

  // --- UNFOCUS (Рассеянность) ---
  UNFOCUS: [
    {
      title: "Ankerpunkt",
      introText:
        "Du wirkst gerade etwas zerstreut. Lass uns versuchen, dich wieder ganz zu sammeln.",
      practiceText:
        "Lege deine Hände flach auf den Tisch.\nDrücke für 3 Sekunden fest auf… und lass wieder los.\nDrücke noch einmal… und lass los.\nWenn du einen festen Halt spürst, kommt deine Aufmerksamkeit schneller zurück.",
      completionText:
        "Du bist wieder ganz bei dir. Deine Konzentration ist zurück.",
    },
    {
      title: "Drei Atemzüge",
      introText:
        "Deine Gedanken sind gerade etwas sprunghaft. Lass uns den Fokus über den Atem zurückholen.",
      practiceText:
        "Mache drei langsame Ausatmungen.\nLass den Atem ganz von selbst fließen, mach den Ausatemzug ruhig etwas länger als den Einatemzug.\nDas lange Ausatmen beruhigt deinen Geist und bringt dich wieder in den Fokus.",
      completionText: "Du bist wieder ganz da. Dein Fokus ist bei dir.",
    },
  ],

  // --- OVERWHELMED (Перегруженность) ---
  OVERWHELMED: [
    {
      title: "Schultern hoch & loslassen",
      introText:
        "Du trägst gerade zu viel mit dir herum. Lass uns einen Teil dieser Last ablegen.",
      practiceText:
        "Ziehe deine Schultern hoch zu den Ohren.\nHalte die Spannung für 2 Sekunden… und lass sie dann bewusst nach unten sinken.\nSpüre, wie die Anspannung von dir abfällt.",
      completionText:
        "Es fühlt sich leichter an, oder? Du hast etwas Last losgelassen – das ist schon ein großer Schritt.",
    },
    {
      title: "Einfach abschütteln",
      introText:
        "Dein Körper fühlt sich unter Last angespannt an. Lass uns ein bisschen Platz in dir schaffen.",
      practiceText:
        "Lockere deine Handgelenke und schüttle sie für 5 Sekunden sanft aus.\nStell dir vor, wie du alles Überflüssige nach unten in den Boden abgibst.\nDas hilft deinem Körper, das loszulassen, was er gerade festhält.",
      completionText:
        "Du fühlst dich jetzt etwas freier. Dein Atem fließt wieder leichter.",
    },
  ],

  // --- ANXIETY (Тревога) ---
  ANXIETY: [
    {
      title: "Ein fester Punkt",
      introText: "Stopp. Du bist hier. Du bist sicher.",
      practiceText:
        "Suche dir einen Gegenstand in deiner Nähe.\nBetrachte ihn für 5 Sekunden: seine Farbe, seine Form, seine Linien.\nLass deinen Blick an etwas Stabilem haften bleiben.",
      completionText:
        "Du bist wieder im Hier und Jetzt. Du bist in Sicherheit.",
    },
    {
      title: "Kontakt zum Boden",
      introText:
        "Die Angst kommt hoch. Lass uns deinen Körper wieder erden – so findest du deinen Halt.",
      practiceText:
        "Stelle deine Füße flach auf den Boden.\nDrücke für 3 Sekunden mit den Fersen fest auf… und lass wieder los.\nWiederhole das ein paar Mal.\nSpüre: Die Erde unter dir hält dich fester als jede Angst.",
      completionText:
        "Du bist wieder in deinem Körper angekommen. Du hast festen Boden unter den Füßen.",
    },
  ],
};
