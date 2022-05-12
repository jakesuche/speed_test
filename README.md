
# Next.js + Jest

This example shows how to configure Jest to work with Next.js.

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript.

## How to Start

Quickly get started using [Create Next App](https://github.com/vercel/next.js/tree/canary/packages/create-next-app#readme)!

In your terminal, run the following command:

```bash
yarn add all 
# or
npm install 
```
## Run Application
```bash
yarn dev
# or
npm run dev
```
## Run Jest Tests

```bash
npm test
```

.

    ├── components                          #covers the components of the project
    │   ├── containers      
    │   |   ├── DetailCard
    │   |   ├── TextContainer      
    │   |   ├── TryAgain
    │   |   ├── TypingChallange
    │   |   ├── TypingChallangeContainer
    ├── helpers    
    │   ├── randomSelector.ts                   #randomly select sentence  from the the arrays of sentence   
    │   ├── testDetailsCalculator.ts            #This function calculates the number of correct words, number of wrong words and total characters        
    ├── pages              
    ├── styles                    
    ├── utils   
    │   ├── data   
    │   │   ├── textSource.ts               #arrays of sentence       
                  
  
  