var levels = [{
        name: 'grid-column-start 1',
        instructions: {
            'en': '<p>Welcome to Carrot Farm, here you will learn how to write code by tending to a carrot garden. As you can see the garden is divided into a grid map with squares where the carrots grow in. In order to water the carrots move the water to the area where the carrot is growing with the <code>grid-column-start</code> function.</p><p>For example, write <code>grid-column-start: 2;</code> in order to move the water to the 2nd column on the grid to water the carrots.</p>Hint: You can hover over the functions code in order to get a further explanation on what they do.</p>',
            'no': '<p>Velkommen til Carrot Farm, her lærer du hvordan du skriver kode ved å gå til en gulrothage. Som du kan se er hagen delt inn i et rutenettkart med firkanter der gulrøttene vokser i. For å vanne gulrøttene, flytter du vannet til området der gulroten vokser med <code>grid-column-start</code> funksjonen. </p> <p> Skriv for eksempel <code>grid-column-start: 2;</code> for å flytte vannet til den andre kolonnen på rutenettet for å vanne gulrøttene. </p> Tips: Du kan holde musepekeren over funksjonskoden for å få en ytterligere forklaring på hva de gjør. </p> ',
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
            'en': '<p>Well done! Lets try that again, water the carrots where you see them in the garden. Remember to use the <code>grid-column-start</code> function.</p>',
            'no': '<p>Bra gjort! La oss prøve det igjen, vanne gulrøttene der du ser dem i hagen. Husk å bruke funksjonen <code>grid-column-start</code>.</p>',
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
            'en': '<p>The function <code>grid-column-start</code> alone only moves the water to the spesified column stated, but with a <code>grid-column-end</code> function you can even water multiple carrots at once in several columns.</p><p>Try to use the <code>grid-column-end</code> function in order to water these 8 carrots. Make sure you do not water the dirt, as that would waste water. Keep in mind that the carrots starts at the 1st column and ends up until the 5th column.</p>',
            'no': '<p>Funksjonen <code>grid-column-start</code> alene flytter bare vannet til den angitte spesifikke kolonnen, men med en <code>grid-column-end</code> -funksjon kan du til og med vanne flere gulrøtter samtidig i flere kolonner. </p> <p> Forsøk å bruke funksjonen <code>grid-column-end</code> for å vanne disse 8 gulrøttene. Forsikre deg om at du ikke vanner skitten, da det vil kaste bort vann. Husk at gulrøttene starter ved første kolonne og ender til 5. kolonne.</p>',
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
            'en': '<p>Remember that the functions <code>grid-column-start</code> and <code>grid-column-end</code>, can also work backwards, with the end value being smaller than the start value.</p><p>Try doing this by setting the value of the <code>grid-column-end</code> function lower than 5.</p>',
            'no': '<p>Husk at funksjonene <code> grid-column-start </code> og <code> grid-column-end </code>, også kan fungere bakover, med sluttverdien mindre enn startverdien. </p> <p> Forsøk å gjøre dette ved å stille inn verdien til funksjonen <code> grid-column-end </code>lavere enn 5.</p>',
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
            'en': '<p>You can also use negative value to count the columns starting from left to right, instead of right to left. This means that -3 is the same as 4.</p><p>Trying watering these carrots by assigning a negative value to <code>grid-column-end</code>.</p>',
            'no': '<p>Du kan også bruke negativ verdi for å telle kolonnene som starter fra venstre til høyre, i stedet for fra høyre til venstre. Dette betyr at -3 er det samme som 4. </p> <p> Forsøk å vanne disse gulrøttene ved å tilordne en negativ verdi til <code>grid-column-end</code>.</p>',
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
            'en': '<p>Negative values can also be used in the <code>grid-column-start</code> function. Try this out by watering these carrots with a negative start value.</p>',
            'no': '<p>Negative verdier kan også brukes i funksjonen <code>grid-column-start</code>. Prøv dette ved å vanne disse gulrøttene med en negativ startverdi.</p>',
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
            'en': '<p>You can also define how many columns you wish to water with the <code>span</code> keyword. This means that when defining <code>grid-column-end</code> with <code>span 2</code> you define the water will cover two columns wide.</p><p>For example, to water these carrots you can use the function: <code>grid-column-end: span 3;</code>.</p>',
            'no': '<p>Du kan også definere hvor mange kolonner du vil vanne med <code> span </code> nøkkelordet. Dette betyr at når du definerer <code>grid-column-end</code> med <code>span 2</code>, definerer du at vannet skal dekke to kolonner bredt. </p> <p> For å vanne disse for eksempel gulrøtter du kan bruke funksjonen: <code> grid-column-end: span 3; </code>. </p>',
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
            'en': '<p>Now try yourself to see how you can use the <code>grid-column-end</code> and <code>span</code> functions to water these carrots.</p>',
            'no': '<p>Prøv deg nå å se hvordan du kan bruke funksjonene <code>grid-column-end</code> og <code>span</code> til å vanne disse gulrøttene.</p>',
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
            'en': '<p>The keyword <code>span</code> also works with <code>grid-column-start</code>, where the width of the area that will be watered is based on the end position. Trying using this combination to water these carrots in the upper right corner</p>',
            'no': '<p>Nøkkelordet <code> span</code> fungerer også med <code> grid-column-start </code>, der bredden på området som skal vannes er basert på sluttposisjonen. Prøver å bruke denne kombinasjonen til å vanne disse gulrøttene i øverste høyre hjørne </p>',
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
            'en': '<p>Instead of having to type both <code>grid-column-start</code> and <code>grid-column-end</code> you can use the function <code>grid-column</code> to spesify the start and end poition at the same time. Make sure you seperate the start and end value with a slash.</p><p>This means that <code>grid-column: 2 / 4;</code> will water the area from column 2 and ending with column 4. See if you can water these carrots with this function.</p>',
            'no': '<p>I stedet for å måtte skrive <code>grid-column-start</code> og <code>grid-column-end</code> kan du bruke funksjonen <code>grid-column</code> for å spesifisere starten og sluttposisjonen på samme tid. Forsikre deg om at du skiller start- og sluttverdien med en skråstrek. </p> <p> Dette betyr at <code>grid-column: 2 / 4;</code> vil vanne området fra kolonne 2 og slutte med kolonne 4 . Se om du kan vanne gulrøttene med denne funksjonen. </p>',
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
            'en': '<p>The <code>grid-column</code> function also works with the <code>span</code> function. Try to see if you can figure out how to water these carrots.</p>',
            'no': '<p>Funksjonen <code>grid-column</code> fungerer også med funksjonen <code>span</code>. Forsøk å se om du kan finne ut hvordan du vanner gulrøttene.</p>',
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
            'en': '<p>So far we have only been using columns to water the carrots, but what if we add a second dimension to our farm. Here we will need to use the <code>grid-row-start</code> function to specify the row, the same way we used the <code>grid-column-start</code> function. See if you can use this function to water the carrots in the 4th row.</p>',
            'no': '<p>Så langt har vi bare brukt søyler for å vanne gulrøttene, men hva om vi legger en annen dimensjon til gården vår. Her må vi bruke funksjonen <code>grid-row-start</code> for å spesifisere raden, på samme måte som vi brukte funksjonen <code>grid-column-start</code>. Se om du kan bruke denne funksjonen til å vanne gulrøttene i den fjerde raden. </p>',
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
            'en': '<p>Just like with the column we can use <code>grid-row</code> in order to specify where the water will start and end. How would use this function to water these carrots?</p>',
            'no': '<p>Akkurat som med kolonnen kan vi bruke <code>grid-row</code> for å spesifisere hvor vannet skal starte og slutte. Hvordan ville denne funksjonen brukt til å vanne gulrøttene? </p>',
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
            'en': '<p>We can combine both these functions <code>grid-column</code> and <code>grid-row</code> , in order to move the water anywhere in the garden. How will you use these functions to water the carrots in the middle of the garden?</p>',
            'no': '<p>Vi kan kombinere begge disse funksjonene <code>grid-column</code> og <code>grid-row</code>for å flytte vannet hvor som helst i hagen. Hvordan vil du bruke disse funksjonene til å vanne gulrøttene midt i hagen?</p>',
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
            'no': '<p>Ved å kombinere de to funksjonene <code>grid-column</code> og <code>grid-row</code> kan du dekke et stort område med vann. Bruk disse funksjonene til å vanne alle gulrøttene.</p>',
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
            'en': '<p>An even easier way to do this is by using the <code>grid-area</code> function.</p><p>This means that instead of writing <code>grid-column: 1/3 </code> and <code>grid-row: 1/6 </code> you can write <code>grid-area: 1 / 1 / 3 / 6;</code>. Try to use this function to water these carrots.</p>',
            'no': '<p>En enda enklere måte å gjøre dette på er å bruke funksjonen <code>grid-area</code>. </p> <p> Dette betyr at i stedet for å skrive <code>grid-column: 1/3 </code> og <code>grid-row: 1/6 </code> kan du skrive <code>grid-area: 1 / 1 / 3 / 6;</code>. Prøv å bruk denne funksjonen til å vanne gulrøttene. </p> ',
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
            'en': '<p>If the area that needs watering does not form a perfect square, multiple water items are needed. The first one is already done for you, try using the <code>grid-area</code> function to water the rest of the carrots. Note that the areas can overlap eachother.</p>',
            'no': '<p>Hvis området som trenger vanning ikke danner et perfekt torg, er det behov for flere vannelementer. Den første er allerede gjort for deg, prøv å bruke funksjonen <code>grid-area</code> or å vanne resten av gulrøttene. Legg merke til at områdene kan overlappe hverandre. </p>',
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
        'en': '<p>Congratulations you have completed all the challenges!</p> Now you have learned the basics of using a CSS grid system. This is one the fundamental aspects of programming and a good start to get familiar with how programming works. With some further learning into this language you can learn how to design websites and create games. Creating this game used a lot of the language that you just learned.</p>You can go back to the levels that you completed by pressing where it says Level 17 of 17. You can also press Reset from this menu if you want to remove all your answers.</p>',
        'no': '<p>Gratulerer, du har fullført alle utfordringene! </p> Nå har du lært det grunnleggende om å bruke et CSS-rutenett-system. Dette er en av de grunnleggende aspektene ved programmering og en god start på å bli kjent med hvordan programmering fungerer. Med litt videre læring av dette språket kan du lære å designe nettsteder og lage spill. Å lage dette spillet brukte mye av språket du nettopp har lært. </p> Du kan gå tilbake til nivåene du fullførte ved å trykke der det står Nivå 17 av 17. Du kan også trykke på Tilbakestill fra denne menyen hvis du vil fjern alle svarene dine.</p>',
    },
    board: '',
    classes: { '#garden, #plants, #overlay': 'win' },
    style: {},
    before: "#pond {\n  display: flex;\n",
    after: "}"
};