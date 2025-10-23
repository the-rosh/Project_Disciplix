const ctx = document.getElementById('myChart');
const pb = document.getElementById('phy')
const sb = document.getElementById('soc')
const db = document.getElementById('dis')
const mb = document.getElementById('men')
const ib = document.getElementById('int')
const ab = document.getElementById('amb')
const userpoints = [80,20,40,20,70,40]

const mystatus = new Chart(ctx, {
        type: 'radar',
        data: {
                
                labels: ['PHYSICAL', 'SOCIAL', 'DISCIPLINE', 'MENTAL', 'INTELLECT', 'AMBITION'],
                datasets: [{
                    data:  {count: 6, min: 0, max: 100},
                    label: 'Skills',
                    data: userpoints,
                    borderWidth: 1,
                    borderColor: '#ff7373',
                    backgroundColor: 'rgba(210, 10, 10, 0.26)',
                    borderDash: [5],
                    pointStyle: 'rect'
                }]
        },
        options: {
            plugins:{
                legend: false
            },
                scales: {
                r: {
                    angleLines: {
                    display: false
                                },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    }

                },
                
        }
    })

pb.addEventListener('click' , ()=>{

    if(userpoints[0]<100){
        userpoints[0] += 10
    }else{
        pb.style.backgroundColor = 'orange'
        
    }

    
    mystatus.update()
    console.log('phys',userpoints[0])
})
sb.addEventListener('click' , ()=>{
    if(userpoints[1]<100){
    userpoints[1] += 10
    }else{
        sb.style.backgroundColor = 'orange'
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})
db.addEventListener('click' , ()=>{
    if(userpoints[2]<100){
    userpoints[2] += 10
    }else{
        db.style.backgroundColor = 'orange'
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})
mb.addEventListener('click' , ()=>{
    if(userpoints[3]<100){
    userpoints[3] += 10
    }else{
        mb.style.backgroundColor = 'orange'
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})
ib.addEventListener('click' , ()=>{
    if(userpoints[4]<100){
    userpoints[4] += 10
    }else{
        ib.style.backgroundColor = 'orange'
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})
ab.addEventListener('click' , ()=>{
    if(userpoints[5]<100){
    userpoints[5] += 10
    }else{
        ab.style.backgroundColor = 'orange'
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})