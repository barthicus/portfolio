import Project from './Project';

const projects = [
  {
    img: 'https://via.placeholder.com/245x245',
    title: 'Planer tras',
    cat: 'Aplikacja',
    desc:
      'System zarządzania zamówieniami z lokalizacją na mapie OpenStreetMap w postaci markerów.',
    link: 'link'
  },
  {
    img: 'https://via.placeholder.com/245x245',
    title: 'TaxiBus Kraków',
    cat: 'Strona WWW',
    desc:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    link: 'link'
  },
  {
    img: 'https://via.placeholder.com/245x245',
    title: 'Konfigurator produktowy 3D',
    cat: 'Aplikacja',
    desc:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    link: 'link'
  },
  {
    img: 'https://via.placeholder.com/245x245',
    title: 'Curly Weddings',
    cat: 'Strona WWW',
    desc:
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    link: 'link'
  }
];

const Projects = () => (
  <div className="projects container">
    {projects.map(project => (
      <Project {...project} key={project.title} />
    ))}
  </div>
);

export default Projects;
