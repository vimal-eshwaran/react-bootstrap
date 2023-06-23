
import './App.css';

function App() {
  const data=[
    {
      subscription:"FREE",
      price:"$0/month",
      user:"✔Single User",
      storage:"✔5GB Storage",
      publicProjects:"✔Unlimited Public Projects",
      access:"✔Community Access",
      privateProjects:"✘Unlimited Private Projects",
      support:"✘Dedicated Phone Support",
      domain:"✘Free Subdomain",
      reports:"✘Monthly Status Reports"

    },
    {
      subscription:"PLUS",
      price:"$9/month",
      user:"✔5 User",
      storage:"✔50GB Storage",
      publicProjects:"✔Unlimited Public Projects",
      access:"✔Community Access",
      privateProjects:"✔Unlimited Private Projects",
      support:"✔Dedicated Phone Support",
      domain:"✔Free Subdomain",
      reports:"✘Monthly Status Reports"

    },
    {
      subscription:"PRO",
      price:"$49/month",
      user:"✔Unlimited User",
      storage:"✔150GB Storage",
      publicProjects:"✔Unlimited Public Projects",
      access:"✔Community Access",
      privateProjects:"✔Unlimited Public Projects",
      support:"✔Dedicated Phone Support",
      domain:"✔Unlimited Free Subdomain",
      reports:"✔Monthly Status Reports"

    }
  ];

  return (
    
    <div className="App">
    {data.map((value,index)=>(
      <Card
       key={index}
        subscription={value.subscription}
        price={value.price}
        user={value.user}
        storage={value.storage}
        publicProjects={value.publicProjects}
        access={value.access}
        privateProjects={value.privateProjects}
        support={value.support}
        domain={value.domain}
        reports={value.reports}
      />
   ) )}

    </div>
  );
}

export default App;

function Card({subscription,price,user,storage,publicProjects,access,privateProjects,support,domain,reports}){
  return(
    <div className='outercard'>
   
     <div className='innercard'>
       <h2 className='plan'>{subscription}</h2> 
       <h1>{price}</h1>
       <hr></hr>
       <div className='card-content'>
       <p>{user}</p>
       <p>{storage}</p>
       <p>{publicProjects}</p>
       <p>{access}</p>
       <p>{privateProjects}</p>
       <p>{support}</p>
       <p>{domain}</p>
       <p>{reports}</p>
       <div className='button-class'>
       <button >BUTTON</button>
       </div>
       </div>
       </div>
      
       
   </div>
  

    
  )
}