const token = ''
const runName = document.querySelector('.run-name');
// const inner = runs.innerHTML('Привет')


export default class Runs{

static getAllRuns(projectCode){
    const options = {
        mode: 'no-cors',
        method: 'GET',
        headers: {accept: 'application/json', Token: token}
      };
      
    axios.get(`https://api.qase.io/v1/run/CASE?limit=10&offset=0`,{
        headers: {
            accept: 'applcation/json',
            Token: '276fb7e2c784a579d2b8fcd5b681a98847a6bd66',
        }
    })
    .then((response) => {
        const runs = response.data.result.entities
        runs.forEach(res =>{
            console.log(res)
            const runsList = document.querySelector('#runs')
            const newRun = document.createElement('div')
            const run = document.createElement('div');
            run.className = 'names';
            newRun.className = 'run';
            runsList.append(newRun)
        })
    })
}

static test(){
    this.getAllRuns('CASE')
}

}
