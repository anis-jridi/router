import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./Components/NavBar";
import Movies from "./Components/Movies";
import { useState } from "react";
import Add from "./Components/Add";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./Components/Description";
import star from "react-rating-stars-component/dist/star";

function App() {
  const [movie, setMovie] = useState([
    {
      id: 1,
      name: "Wonder Women",
      description:
        "Quand un avion s'écrase et que le pilote lui parle d'un conflit du monde extérieur, Diana, une guerrière amazone en formation, quitte son île natale pour le combat, découvrant ses pleins pouvoirs et son véritable destin.",
      rating: 3,
      date: "2021",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/p180x540/87038889_636017140500251_3154953250449391616_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=uz7uWlI1BUUAX_Dl7ec&_nc_ht=scontent.ftun1-2.fna&oh=4efe516359e556045befc774c1fc855d&oe=6170C30E",
      trailer: "https://www.youtube.com/embed/1Q8fG0TtVAY",
    },
    {
      id: 2,
      name: "Top Gun Maverick",
      description:
        "Les fans de Tom Cruise se donnent rendez-vous au cinéma pour découvrir (Top Gun : Maverick), long-métrage réalisé par Joseph Kosinski, dès le 17 novembre 2021. En attendant, on découvre les bandes-annonces !",
      rating: 2,
      date: "2020",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/p180x540/86802362_636016897166942_1608333817762807808_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=D80JkwMWVN4AX-l0QR7&_nc_ht=scontent.ftun1-2.fna&oh=67601fe57875c967ae83bb3c8b84cf7f&oe=616DCE8C",
      trailer: "https://www.youtube.com/embed/g4U4BQW9OEk",
    },
    {
      id: 3,
      name: "No Time To Die",
      description:
        "Bond a quitté les services secrets, mais son repos est de courte durée lorsque son vieil ami Felix Leiter de la CIA lui demande son aide, ce qui entraîne Bond sur la piste d'un ennemi armé de nouvelles armes technologiques redoutables.",
      rating: 1,
      date: "2020",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/87061584_636013653833933_9165488560743120896_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=gEbFYieZoiIAX_fSxa5&_nc_ht=scontent.ftun1-2.fna&oh=13874b23bb57c91de2d3c4ea55b2a0c6&oe=61705713",
      trailer: "https://www.youtube.com/embed/qetRmJWkm1Q",
    },
    {
      id: 4,
      name: "Jumanji",
      description:
        "Quatre adolescents sont aspirés dans un jeu vidéo magique, et la seule façon de s'échapper est de travailler ensemble pour finir le jeu.",
      rating: 5,
      date: "2019",
      image:
        "https://scontent.ftun1-2.fna.fbcdn.net/v/t1.6435-9/80449213_587069935394972_4265380752356540416_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_ohc=buiOK3B_H5QAX-VZ7U7&_nc_ht=scontent.ftun1-2.fna&oh=3adab86069d994e452885dbf22c4ca7e&oe=6170E6FF",
      trailer: "https://www.youtube.com/embed/2QKg5SZ_35I",
    },
    {
      id: 5,
      name: "Dynasty Warriors",
      description:
        "Adaptation du jeu vidéo du même titre. L'histoire se déroule à la fin de la turbulente dynastie Han orientale. L'ambitieux Dong Zhuo contrôle la cour et la population, et des héros de tout le pays commencent à se manifester.",
      rating: 4,
      date: "2020",
      image:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/7BCTdek5LFHglcgl7shsm7igJAH.jpg",
      trailer: "https://www.youtube.com/embed/K8pyNXNtZBM",
    },
    {
      id: 6,
      name: "Godzila Vs Kong",
      description:
        "Le Kong gigantesque rencontre le Godzilla inarretable. Le monde est spectateur pour voir qui deviendra le roi des monstres.",
      rating: 4,
      date: "2018",
      image:
        "https://wehco.media.clients.ellingtoncms.com/img/photos/2021/06/10/homemovies_0611_rgb_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d",
      trailer: "https://www.youtube.com/embed/odM92ap8_c0",
    },
    {
      id: 7,
      name: "The Fast Saga",
      description:
        "Dom et son équipe doivent affronter un terroriste international qui s'avère être le frère séparé de Dom et Mia.",
      rating: 3,
      date: "2017",
      image:
        "https://play-lh.googleusercontent.com/e2RT4NLIcganjzLMphYegrylKmMf1H-sA-d4kVv7I1ZKo24YrobowJTiLpNFA5LlaetWZFBLkVxuQej2ebtU",
      trailer: "https://www.youtube.com/embed/fEE4RO-_jug",
    },
  ]);
  const handelAdd = (x, y, z, t) => {
    let newAction = {
      name: x,
      rating: y,
      id: Math.random(),
      date: z,
      image: t,
    };
    setMovie([...movie, newAction]);
  };

  const [text, setText] = useState("");
  const [stars, setStars] = useState(1);
  let handelChange = (e) => {
    setText(e.target.value);
  };
  let handelRating = (x) => setStars(x);

  return (
    <div className="App">
      <Router>
        <NavBar
          text={text}
          handelChange={handelChange}
          handelRating={handelRating}
          rat={stars}
        />

        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Movies
                movie={movie}
                list={movie.filter(
                  (el) =>
                    el.name.toLowerCase().includes(text.toLowerCase()) &&
                    el.rating >= stars
                )}
              />
            )}
          />
          <Route  path="/description/:id" render={((props)=><Description {...props} list={movie}/>)}/>
           
        </Switch>
      </Router>
      <Add add={handelAdd} />
    </div>
  );
}

export default App;
