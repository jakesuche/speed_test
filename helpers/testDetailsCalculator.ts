
type values = {
    original:string;
    type:string;
}

export const testDetailsCalculator = (originalValue:values["original"], typedValue:values["type"]) => {
    const words = typedValue.split(' ').length;
    const characters = typedValue.length;
    const mistakes = typedValue.split('').reduce((acc, typedChar, index) => {
        
        return typedChar !== originalValue[index] ? acc+1 : acc 
    }, 0)

    return { words, characters, mistakes }
}