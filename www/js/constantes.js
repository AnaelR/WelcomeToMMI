var host = "https://appmmi.anael-rodet.fr/wp-json/wp/v2/";

app.constant("BACKEND", {
  enfant: host + "posts?categories=",
  parent: host + "categories?parent="
});
