const { log } = require('console');
const fs = require('fs');
const path = require('path');

const mainPath = (__dirname)
const logPath = path.join(__dirname, 'Logs');

const rmLogs = (callback) =>{
    fs.stat(logPath, (error) => {
        if(error){
            console.log("Log folder does not exist yet");
            callback();
        }
        else{
            fs.readdir(logPath, (error, delFiles) =>{
                delFiles.forEach((delFiles) =>{
                    console.log(`Deleting file: ${delFiles}`);
                });
            });
            fs.rm(logPath, { recursive: true }, (error) => {
                console.log(`Log folder at ${logPath} has been deleted.`);
                callback();
            });
        }
    });
}

const mkLogs = () => {

    fs.stat(logPath, (error) => {
        if (fs.existsSync(logPath)){
            console.log("Log folder already exists");
        }
        else{
            fs.mkdir(logPath, { recursive: true }, (error) => {
                console.log('Log folder created');
            });
            console.log()
            if (fs.existsSync(logPath)){
                process.chdir(logPath)

                for (let i = 1; i <= 10; i++) {
                    const logFileName = `log${i}.txt`;
                    const logFilePath = path.join(logPath, logFileName);
                    const logFileContent = `Log file number: ${i}`;
                
                    fs.writeFileSync(logFilePath, logFileContent);
                    console.log(`Creating file: ${logFileName}`);
                }
            }
        }
    });
}


rmLogs(mkLogs);