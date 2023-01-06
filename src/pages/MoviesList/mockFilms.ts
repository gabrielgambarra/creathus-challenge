export const mockFilms = (quant: number) => {
  let films = [];
  for (let i = 0; i < quant; i++) {
    films.push({
      id: i,
      title: `Movie ${i}`,
      image: "https://image.tmdb.org/t/p/w500/8j58iEBw9pOXFD2L0nt0ZXeHviB.jpg",
      description: "Overview",
    });
  }
  return films;
};
