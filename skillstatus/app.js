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
              maintainAspectRatio: false,
            responsive: true,
            layout:{
                padding: 10
            },
            plugins:{
                legend: false
            },
                scales: {
                r: {
                    grid:{
                        color: 'grey'
                    },
                    ticks:{
                        display:false,
                        count: 5,
                    },
                    angleLines: {
                    display: false
                                },
                    suggestedMin: 0,
                    suggestedMax: 100,
                    pointLabels: {
                        font: {
                            size: 16,
                            weight : 'bold'
                        }
                    }
                    }

                },
                
        }
    })

pb.addEventListener('click' , ()=>{

    if(userpoints[0]<90){
        userpoints[0] += 10
    }else if(userpoints[0]=90){
        userpoints[0] +=10
        pb.style.backgroundColor = 'rgb(194, 126, 0)'
        pb.style.boxShadow = 'none'
        pb.style.translate = 'none'
         
        
        
    }

    
    mystatus.update()
    console.log('phys',userpoints[0])
})
sb.addEventListener('click' , ()=>{
    if(userpoints[1]<90){
        userpoints[1] += 10
    }else if(userpoints[1]=90){
        userpoints[1] += 10
        sb.style.backgroundColor = 'rgb(194, 126, 0)'
        sb.style.boxShadow = 'none'
        sb.style.translate = 'none'
        
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})
db.addEventListener('click' , ()=>{
    if(userpoints[2]<90){
    userpoints[2] += 10
    }else if(userpoints[2]=90){
        userpoints[2] +=10
        db.style.backgroundColor = 'rgb(194, 126, 0)'
        db.style.boxShadow = 'none'
        db.style.translate = 'none'
         
        
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})
mb.addEventListener('click' , ()=>{
    if(userpoints[3]<90){
    userpoints[3] += 10
    }else if(userpoints[3]=90){
        userpoints[3] +=10
        mb.style.backgroundColor = 'rgb(194, 126, 0)'
        mb.style.boxShadow = 'none'
        mb.style.translate = 'none'
         
        
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})
ib.addEventListener('click' , ()=>{
    if(userpoints[4]<90){
    userpoints[4] += 10
    }else if(userpoints[4]=90){
        userpoints[4] +=10
        ib.style.backgroundColor = 'rgb(194, 126, 0)'
        ib.style.boxShadow = 'none'
        ib.style.translate = 'none'
         
        
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})
ab.addEventListener('click' , ()=>{
    if(userpoints[5]<90){
    userpoints[5] += 10
    }else if(userpoints[5]=90){
        userpoints[5] +=10
        ab.style.backgroundColor = 'rgb(194, 126, 0)'
        ab.style.boxShadow = 'none'
        ab.style.translate = 'none'
         
        
    }
    mystatus.update()
    console.log('phys',userpoints[0])
})