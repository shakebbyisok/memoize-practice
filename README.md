
# Pràctica de Memoització de Fibonacci

Aquest repositori es centra en la implementació d'una funció de memoització per a la seqüència de Fibonacci fent ús de TypeScript i proves unitàries. A més, inclou una Interfície de Línia de Comandes (CLI) i una interfície d'usuari front-end per demostrar i provar la seva funcionalitat en temps real.

## Característiques

- **Memoització de Fibonacci**: Millora l'eficiència de càlcul de la seqüència de Fibonacci mitjançant l'emmagatzematge de resultats previs.
- **CLI**: Una eina de línia de comandes que permet als usuaris interactuar amb la funció de Fibonacci i observar els beneficis de la memoització.
- **Interfície Front-end**: Una pàgina web senzilla que permet als usuaris introduir un número i calcular el seu corresponent valor a la seqüència de Fibonacci, mostrant tant el resultat com si el càlcul va ser obtingut de la caché.

## Com executar

Segueix aquests passos per executar el projecte:

1. **Clona aquest repositori a la teva màquina local**:
   ```
   git clone https://github.com/shakebbyisok/memoize-practice.git
   ```
   
2. **Entra al directori correcte**:
   ```
   cd memoize-practice
   ```
   
3. **Instal·lació de dependències**:
   ```
   npm install
   ```
   
4. **Executar els tests**:
   ```
   npm test
   ```
   
5. **Iniciar la CLI**:
   ```
   npm start
   ```
   
6. **Veure la funcionalitat en el front-end**:
   Obre l'arxiu `index.html` en un navegador, preferentment amb un servidor local com `live-server`.

(En el front-end, pots observar els resultats instantanis i si la resposta va ser recuperada de la caché).

### Notes Addicionals

- Pots ajustar la mida de la caché i altres paràmetres segons sigui necessari dins del codi.
- La implementació de la memoització mostra avantatges significatives en termes de rendiment quan es calculen números grans.
- A partir del 40 al ordinador li costa procesar el resultar
