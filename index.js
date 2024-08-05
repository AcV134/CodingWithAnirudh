import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// app.get("/about",(req,res) =>{
//     res.render("about.ejs");
// })

// app.get("/blog",(req,res) =>{
//     res.render("blog.ejs");
// })

// app.get("/projects",(req,res) =>{
//     res.render("projects.ejs");
// })

app.get("/blog-:id", (req, res) => {
  let set = {
    id: req.params.id,
    title: "Create Cards Dynamically In Javascript " + req.params.id,
    content:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Cursus ac phasellus rutrum senectus parturient litora efficitur a eros. Finibus fermentum fusce nulla lobortis dictum mollis. Velit pulvinar semper magna ridiculus lacus habitasse tincidunt. Mus quis sapien natoque quis tempor ipsum inceptos mattis. Aenean hac litora morbi malesuada eleifend. Praesent sagittis eget id sem tristique ipsum. Tortor tortor tristique sit a nulla platea praesent lobortis felis.Vitae quisque mus tempor tellus fames. Sociosqu nisl porta ut inceptos porttitor est enim. Suspendisse blandit habitant ultrices integer massa tempor praesent. Habitant leo luctus semper vestibulum dui aliquet curae primis. Ridiculus himenaeos pulvinar vehicula dignissim, ex condimentum phasellus. Ornare ridiculus bibendum eros sed vivamus. Nisl ad sodales platea sapien suspendisse accumsan. Pharetra gravida duis tortor eget purus elit. Ligula in libero parturient ligula penatibus mus consequat congue?Hac senectus sem bibendum hac nostra feugiat aliquet. Quisque rhoncus consectetur curae hac congue; ullamcorper himenaeos faucibus. Etiam aptent primis commodo dictumst erat eleifend elit urna! Proin consequat arcu blandit aliquam neque risus lectus parturient. Orci nascetur libero neque penatibus semper risus. Integer et vel nisl gravida; praesent faucibus. Mollis pulvinar sem nostra euismod inceptos tempor leo volutpat. Scelerisque nibh interdum mattis erat aenean non phasellus penatibus rhoncus. Pellentesque egestas sollicitudin tincidunt scelerisque pulvinar mattis potenti habitasse.Donec etiam sociosqu auctor pharetra conubia. Erat aenean a duis varius libero at. Tortor dignissim rhoncus a posuere hac congue aenean, proin nam. Accumsan lobortis cursus phasellus taciti posuere aptent. Donec magnis cras potenti sapien donec turpis. Fames ultrices malesuada odio suspendisse lobortis fames scelerisque lectus. Accumsan lorem ut in nisl orci ligula scelerisque? Tristique iaculis eleifend, dui felis dui lacus penatibus litora. Lacinia eleifend parturient parturient hendrerit aliquam himenaeos fusce placerat justo.Augue habitasse purus dignissim interdum ex. Elementum tellus nam volutpat posuere vestibulum pharetra magnis. Massa etiam commodo sit cursus aliquet bibendum enim. Potenti habitant egestas nec; praesent integer laoreet quisque in. Sed sem lectus facilisis bibendum aenean mattis ultrices himenaeos. Porta ullamcorper luctus efficitur sit class. At at tempor ridiculus donec sagittis viverra. Ad laoreet malesuada interdum arcu hac inceptos tempus.",
  };
  res.render("blog-content.ejs", set);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
