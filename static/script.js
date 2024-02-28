const {useState,useEffect} = React;

function Kural(){
    const [kural, setKural] = useState({});
    useEffect(()=>{
        fetch(window.location.origin+"/randomKural")
        .then(res=>res.json())
        .then(data=>{
            console.log(data.number);
            setKural({s1:data.kural[0], s2:data.kural[1], no:data.number});
        })
        .catch(err=>console.log(err));
    },[]);
    function more(){
        window.open(window.location.origin+"/kuralNo/np/"+kural.no,"_blank");
    }
    return(
        <div class="column">
            <div class="card has-background-dark">
                <div class="card-content">
                    <h3 class="title is-3 has-text-info-light">{kural.s1}</h3>
                    <h3 class="title is-3 has-text-info-light">{kural.s2}</h3>
                    <button class="button is-rounded" onClick={more}>json</button>
                </div>
            </div>
        </div>
    );
}

function Home(){
    const [lis, updateLis] = useState([0]);
    function add(){
        updateLis([...lis, lis[lis.length-1]+1]);
    }
    return(
        <div>
            <center><h1 class="title is-1">Today's Kural</h1></center>
            <div>
                {lis.map(i=><Kural />)}
            </div>
            <center><button class="button is-dark" onClick={add}>More Kural</button></center>
        </div>
    );
}

function Contact(){
    return(
        <div class="container">
            <div class="column">
                <h1 class="title is-1">Developed by - Ganesh M</h1>
                <h2 class="title is-2"><a class="fa fa-linkedin" href="http://www.linkedin.com/in/ganesh-m-2a5720299"></a> - <a href="http://www.linkedin.com/in/ganesh-m-2a5720299">Click Here</a></h2>
                <h2 class="title is-2"><a class="fa fa-github" href="https://github.com/prodev717"></a> - @prodev717</h2>
                <h2 class="title is-2"><a class="fa fa-youtube" href="https://www.youtube.com/@blackboard717"></a> - @blackboard717</h2>
                <h2 class="title is-2"><a class="fa fa-instagram" href="https://instagram.com/musicon717?igshid=OGQ5ZDc2ODk2ZA=="></a> - @musicon717</h2>
            </div>
        </div>
    );
}

function Documentation(){
    return(
        <div>
            <br/>
            <h4 class="title is-4">{window.location.origin}/randomKural - returns a random kural json</h4>
            <br/>
            <h4 class="title is-4">{window.location.origin}/kuralNo/[no] - returns a specific kural json</h4>
            <br/>
            <h4 class="title is-4">{window.location.origin}/kuralNo/np/[no] - redricts to a static page with details of specific kural</h4>
            <br/>
            <h4 class="title is-4">Note : replace [no] with a specific kural number</h4>
        </div>
    );
}

function About(){
    return(
        <div class="container">
            <div class="column">
                <h1 class="title is-1">Thirukkural</h1>
                <br/>
                <p class="subtitle">Thirukkural, also known as the Kural, is a timeless Tamil literary masterpiece composed by the revered sage Thiruvalluvar. Written over 2,000 years ago, Thirukkural is celebrated as one of the greatest works of classical Tamil literature and is revered for its profound insights into various aspects of life, ethics, and governance.</p>
                <br/>
                <h4 class="title is-4">OpenThirukkural API will provide all data of all 1330 kurals as json.</h4>
            </div>
        </div>
    );
}

function App(){
    let content;
    switch(window.location.pathname){
        case "/home":
            content = <Home />
            break;
        case "/documentation":
            content = <Documentation />
            break;
        case "/about":
            content = <About />
            break;
        case "/contact":
            content = <Contact />
            break;
    }
    return(
        <div>
            {content}
        </div>
    );
}

ReactDOM.render(<App />,document.getElementById("root"));