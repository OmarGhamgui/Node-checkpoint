const fs = require('fs');



fs.readFile(process.argv[2], 'utf-8', (error, data) => {
    if(error) {
        console.error(error);
        return;
    }

    const fileContent = data.split('\n').length - 1;
    console.log(fileContent);
});
