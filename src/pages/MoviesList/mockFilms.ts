export const mockFilms = (quant: number) => {
  let films = [];
  for (let i = 0; i < quant; i++) {
    films.push({
      id: i,
      title: `Movie ${i}`,
      image: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elita. Sed dignissim, felis eu porta bibendum, nunc mauris convallis mauris, vel suscipit neque ipsum non nisl. In et ligula a nisi vehicula iaculis. Donec ac ullamcorper nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam sed nunc eget dolor viverra luctus. Sed vitae augue eu lectus bibendum volutpat. Vestibulum ante ipsum primis in fa asd adsddss",
    });
  }
  return films;
};
