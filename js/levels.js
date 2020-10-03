var levels = [{
        name: 'grid-column-start 1',
        instructions: {
            'en': '<p>Let us start to learn one of the basic functions in CSS: <code>grid-column-start</code> </p> As you can see, the garden is divided into a grid map with squares where the carrots grow. To water the carrots you must point out where the carrots are. This can be done with the <code>grid-column-start</code> function. </p> Write <code>grid-column-start:2;</code> in the open field in the box below to water the carrots in the 2nd column.</p>Hint: You can hover over the functions code in order to get a further explanation on what they do.</p>',
            'no': '<p>Velkommen til Gulerotgården.</p> I dette spillet vil du lære å skrive programmeringskode. Dette vil du lære gjennom å dyrke gulerøtter i en grønnsakshage. Hagen er delt inn i et rutenettkart med firkanter der gulrøttene vokser. Du skal vanne gulerøttene for å få dem til å vokse. For å vanne gulerøtter så flytter du vannet til området der gulroten vokser med<code>grid-column-start</code> funksjonen. </p> <p> Eksempel: om du skriver <code>grid-column-start: 2;</code> så vanner du gulerøttene i den andre kolonnen på rutenettet. </p> Tips: Du kan holde musepekeren over funksjonskoden for å få en ytterligere forklaring på hva de gjør. </p> ',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column-start': '2' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-start 2',
        instructions: {
            'en': '<p>Well done! Let us try this again. Water the carrots where you see them in the garden. Remember to use the <code>grid-column-start</code> function that you used in the last level, but this time the carrots are in column 4 instead of 2. If you notice the box shaking it is because you made a mistake, but do not worry, you can try again as many times as you want.</p>',
            'no': '<p>Dette var bra gjort! Nå skal vi prøve dette igjen. Vi skal vanne gulrøttene der du ser dem i hagen. Husk å bruke funksjonen <code>grid-column-start</code>.</p>',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column-start': '4' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-end 1',
        instructions: {
            'en': '<p>We shall now learn the next step. The function <code>grid-column-start</code> alone only waters the carrots in the specified column stated, but with a <code>grid-column-end</code> function you can also water carrots in several columns.</p><p>Try to use the <code>grid-column-end</code> function to water these 8 carrots. Make sure you do not water the dirt, because that would be a waste of water. Keep in mind that the carrots starts at the 1st column and ends up until the 5th column.</p>',
            'no': '<p>Nå skal vi lære noe nytt. Funksjonen <code>grid-column-start</code> flytter bare vannet til den kolonnen du gir nummer på. Med en <code>grid-column-end</code> -funksjon kan du også vanne flere gulrøtter samtidig i flere kolonner. </p> <p> Nå kan du forsøke å bruke funksjonen <code>grid-column-end</code> for å vanne disse 8 gulrøttene. Du må ikke vanne jorden, da dette er sløsing av vann. Husk at gulrøttene starter ved første kolonne og fram til 5. kolonne.</p>',
        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-1' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': '5' },
        before: "#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 2',
        instructions: {
            'en': '<p>A tip: Remember that the functions <code>grid-column-start</code> and <code>grid-column-end</code> can also work backwards, with the end value being smaller than the start value.</p><p>Try doing this by setting the value of the <code>grid-column-end</code> function lower than 5.</p>',
            'no': '<p>Et lite tips: funksjonene <code> grid-column-start </code> og <code> grid-column-end </code>, kan også fungere bakover, med da må sluttverdien være mindre enn startverdien. </p> <p> Nå kan du forsøke å gjøre dette ved å legg inn verdien til funksjonen <code> grid-column-end </code>lavere enn 5.</p>',
        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-5' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': '1' },
        before: "#water {\n  grid-column-start: 5;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 3',
        instructions: {
            'en': '<p>Another tip: You can also use negative values to count the columns starting from left to right, instead of right to left. This means that -3 is the same as 4.</p><p>Trying watering these carrots by assigning a negative value to <code>grid-column-end</code>.</p>',
            'no': '<p>Enda et tips: du kan også bruke negativ verdi, som tilsvarer antall kolonner som starter fra venstre til høyre - dette i stedet for fra høyre til venstre som representeres ved positiv verdi. Dette betyr at -3 er det samme som 4. </p> <p> Nå kan du forsøk å vanne gulrøttene ved å tilordne en negativ verdi til <code>grid-column-end</code>.</p>',
        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-1' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': '-3' },
        before: "#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-start 3',
        instructions: {
            'en': '<p>Negative values can also be used in the <code>grid-column-start</code> function. Try this by watering these carrots using a negative start value.</p>',
            'no': '<p>Du kan også bruke negative verdier i funksjonen <code>grid-column-start</code>. Nå kan du prøve dette ved å vanne gulrøttene med en negativ startverdi.</p>',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column-start': '-4' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-end 4',
        instructions: {
            'en': '<p>Now it is time to learn a new keyword: You can define how many columns you wish to water with the <code>span</code> keyword. This means that combining <code>grid-column-end</code> with <code>span 2</code> will make the water cover two columns.</p><p>For example, to water these carrots you can use the function: <code>grid-column-end: span 3;</code> Try this for yourself now.</p>',
            'no': '<p>Nå skal du lære enda noe nytt. Du kan også definere hvor mange kolonner du vil vanne med <code> span </code> nøkkelordet. Dette betyr at når du skriver <code>grid-column-end</code> med <code>span 2</code>, så sier du at vannet skal dekke to kolonner bredt. Dette skrives som: <code> grid-column-end: span 2; </code> </p> <p> Hva vil du skrive for å kunne vanne gulrøttene du ser i hagen? </p>',
        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-2' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': 'span 3' },
        before: "#water {\n  grid-column-start: 2;\n",
        after: "}"
    },
    {
        name: 'grid-column-end 5',
        instructions: {
            'en': '<p>Now try for yourself to see how you can use the <code>grid-column-end</code> and <code>span</code> functions to water these carrots.</p>',
            'no': '<p>Når kan du prøve på egen hånd. Hvordan du kan bruke funksjonene <code>grid-column-end</code> og <code>span</code> til å vanne disse gulrøttene.</p>',
        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-start-1' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-end': 'span 4' },
        before: "#water {\n  grid-column-start: 1;\n",
        after: "}"
    },
    {
        name: 'grid-column-start 4',
        instructions: {
            'en': '<p>Tips: The keyword <code>span</code> also works with <code>grid-column-start</code>, where the width of the area that will be watered is based on the end position. Try to use this combination to water the carrots in the upper right corner.</p>',
            'no': '<p>Nøkkelordet <code> span</code> fungerer også med <code> grid-column-start </code>, der bredden på området som skal vannes er basert på sluttposisjonen. Prøver å bruke denne kombinasjonen til å vanne disse gulrøttene i øverste høyre hjørne.</p>',
        },
        board: 'c',
        classes: { '#garden > *, #plants > *': 'grid-column-end-6' },
        selector: '> :nth-child(1)',
        style: { 'grid-column-start': 'span 2' },
        before: "#water {\n",
        after: "  grid-column-end: 6;\n}"
    },
    {
        name: 'grid-column 1',
        instructions: {
            'en': '<p>Now you will learn even more coding: Instead of having to type both <code>grid-column-start</code> and <code>grid-column-end</code> you can use the function <code>grid-column</code> to specify the start and end positions at the same time. Make sure you seperate the start and end value with a slash.</p><p>This means that <code>grid-column: 2 / 4;</code> will water the area from column 2 and ending with column 4. See if you can water these carrots using this function.</p>',
            'no': '<p>Nå skal du lære enda noe mer: I stedet for å skrive <code>grid-column-start</code> og <code>grid-column-end</code> kan du bruke funksjonen <code>grid-column</code> for å spesifisere starten og slutten. Vær sikker på at du skiller start- og sluttverdien med en skråstrek. </p> <p> Dette betyr at <code>grid-column: 2 / 4;</code> vil vanne området fra kolonne 2 og slutte med kolonne 4 . Nå kan du prøve vanne gulrøttene med denne funksjonen. </p>',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column': '3 / 5' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column 2',
        instructions: {
            'en': '<p>Tip: The <code>grid-column</code> function also works with the <code>span</code> function. Try to see if you can figure out how to water these carrots.</p>',
            'no': '<p>Funksjonen <code>grid-column</code> fungerer også med funksjonen <code>span</code>. Nå kan du prøve å se om du kan finne ut hvordan du vanner gulrøttene.</p>',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column': '3 / 6' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-row-start 1',
        instructions: {
            'en': '<p>Now you will learn some more: So far we have only been using columns to water the carrots, but what if we add a second dimension to our farm. Here we will need to use the <code>grid-row-start</code> function to specify the row, the same way we used the <code>grid-column-start</code> function. See if you can use this function to water the carrots in the 4th row.</p>',
            'no': '<p>Nå skal du igjen lære noe nytt: til nå har vi brukt kolonner for å vanne gulrøttene, men hva om vi legger en annen dimensjon til hagen vår. Her skal vi bruke funksjonen <code>grid-row-start</code> for å spesifisere raden, på samme måte som vi brukte funksjonen <code>grid-column-start</code>. Prøv nå om du kan bruke denne funksjonen til å vanne gulrøttene i den fjerde raden.</p>',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-row-start': '4' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-row-start 2',
        instructions: {
            'en': '<p>Tip: Just like with the columns we can use <code>grid-row</code> in order to specify where the water will start and end. How would you use this function to water these carrots?</p>',
            'no': '<p>Tips: Akkurat som med kolonne kan vi bruke <code>grid-row</code> for å spesifisere hvor vannet skal starte og slutte på en rad. Nå kan du prøve å bruke denne funksjonen for å vanne gulrøttene? </p>',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-row': '2 / 5' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-row 1',
        instructions: {
            'en': '<p>Another tip: We can combine the functions <code>grid-column</code> and <code>grid-row</code> , in order to move the water anywhere in the garden. How will you use these functions to water the carrots in the middle of the garden? Remember to use ; between each line of code.</p>',
            'no': '<p>Nok et tips: Vi kan kombinere begge disse funksjonene <code>grid-column</code> og <code>grid-row</code>for å vanne hvor som helst i hagen. Hvordan vil du bruke disse funksjonene til å vanne gulrøttene midt i hagen? Husk bruk ; mellom ulike kodesetninger.</p>',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column': '3', 'grid-row': '4' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-column-row 2',
        instructions: {
            'en': '<p>By combining the two functions <code>grid-column</code> and <code>grid-row</code> you can cover a large area with water. Use these functions to water all the carrots.</p>',
            'no': '<p>Ved å kombinere de to funksjonene <code>grid-column</code> og <code>grid-row</code> kan du også dekke et stort område med vann. Nå kan du prøve å bruke disse funksjonene til å vanne alle gulrøttene.</p>',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-column': '3 / 5', 'grid-row': '2 / 5' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-area 1',
        instructions: {
            'en': '<p>Now you will learn to combine code lines: One way to do this is by using the <code>grid-area</code> function.</p><p>It will let us combine <code>grid-column: 1/3</code> and <code>grid-row: 1/6</code> into a single function:<code>grid-area: 1 / 1 / 6 / 3;</code>. Try to use this function to water these carrots.</p>',
            'no': '<p>Nå skal du lære å kombinere ulike kodesetninger: En enklere måte å gjøre det du utførte på nivå 15 er å bruke funksjonen <code>grid-area</code>. </p> <p> Dette betyr at i stedet for å skrive <code>grid-column: 1/3 </code> og <code>grid-row: 1/6 </code> kan du skrive <code>grid-area: 1 / 1 / 6 / 3;</code>. Nå kan du prøve dette til å vanne gulrøttene. </p> ',
        },
        board: 'c',
        selector: '> :nth-child(1)',
        style: { 'grid-area': '1 / 1 / 3 /6' },
        before: "#water {\n",
        after: "}"
    },
    {
        name: 'grid-area 2',
        instructions: {
            'en': '<p>Tip: If the area that needs watering does not form a perfect square, then you must divide it into several smaller squares. When these are combined, they will cover the whole area that needs water. The first square is already done for you, so try using the <code>grid-area</code> function to water the rest of the carrots. Note that the areas can overlap each other.</p>',
            'no': '<p>Tips: Hvis området som trenger vanning ikke er firkantet, så er det behov å dele området i ulike firkanter. Disse firkantene vil kunne settes sammen så hele området med gulerøtter vannes. Den ene firkanten er allerede programmert for deg; nå kan du prøve å bruke funksjonen <code>grid-area</code> or å vanne den andre firkanten, slik at alle gulrøttene blir vannet. Legg merke til at områdene kan overlappe hverandre. </p>',
        },
        board: 'cc',
        classes: { '#garden > :nth-child(2), #plants > :nth-child(2)': 'grid-column-4' },
        selector: '> :nth-child(1)',
        style: { 'grid-area': '1 / 2 / 4 / 6' },
        before: "#water-1 {\n  grid-area: 1 / 4 / 6 / 5;\n}\n\n#water-2 {\n",
        after: "}"
    }
];
var levelWin = {
    name: 'win',
    instructions: {
        'en': '<p>Congratulations, you have completed all the challenges!</p> You have now learned the basics of using a CSS grid system. This is one of the fundamental aspects of programming and a good start to get familiar with how programming works. With some more learning and practice using this language, you can actually design websites and create games. Creating this game used a lot of the language that you have just learned.</p>You can go back to the levels that you completed by pressing where it says Level 17 of 17. You can also press Reset from this menu if you want to remove all your answers and begin again.</p>',
        'no': '<p>Gratulerer, du har fullført alle utfordringene! </p> Nå har du lært det grunnleggende i å bruke et CSS-rutenett-system. Dette er en av de viktigste delene ved programmering og er en god start for å bli kjent med hvordan programmering fungerer. Med litt videre læring av dette språket kan du lære å designe nettsteder og å lage spill. Å lage dette spillet brukte mye av språket du nettopp har lært. </p> Du kan gå tilbake til nivåene du fullførte ved å trykke der det står Nivå 17 av 17. Du kan også trykke på Tilbakestill fra denne menyen hvis du vil fjerne alle svarene dine.</p>',
    },
    board: '',
    classes: { '#garden, #plants, #overlay': 'win' },
    style: {},
    before: "#pond {\n  display: flex;\n",
    after: "}"
};