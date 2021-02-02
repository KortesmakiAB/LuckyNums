function snakeToCamel(word) {
    if (typeof word !== 'string') return 'Please enter a string.';
    
    let camelCase = '';

    for (let i = 0; i < word.length; i++){
        if (word[i] === '_'){
            camelCase += word[i + 1].toUpperCase();
            i++;
        }
        else {
            camelCase += word[i];
        }
    }
    return camelCase;
}
