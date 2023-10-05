const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'delayed resolve'};
            resolve(success);
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try{
                throw new Error('error: delayed reject');
            } catch(e){
                reject({'error': 'delayed resolve'});
            }
        }, 500);
    });
}


logResolve = resolvedPromise()
    .then((logResolve) => {
        console.log(logResolve);
    })
    .catch((error) =>{
        console.log("Error: " + error)
    });

logReject = rejectedPromise()
    .then((logReject) => {
        console.log(logReject);
    })
    .catch((error) =>{
        console.log(error)
    });