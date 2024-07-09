const proImgUrl = (index, item) => {
    const name = index > 9 ? index : `0${index}`;
    const url = `./assets/${item}/image${name}.png`;
    return new URL(url, import.meta.url).href;
  }
  
export const skillImages = [
    {
      id: 1,
      url: proImgUrl(1, 'skill'),
      label: 'HTML'
    },
    {
      id: 2,
      url: proImgUrl(2, 'skill'),
      label: 'CSS'
    },
    {
      id: 3,
      url: proImgUrl(3, 'skill'),
      label: 'javascript'
    },
    {
      id: 4,
      url: proImgUrl(4, 'skill'),
      label: 'jQuery'
    },
    {
      id: 5,
      url: proImgUrl(5, 'skill'),
      label: 'PHP'
    },
    {
      id: 6,
      url: proImgUrl(6, 'skill'),
      label: 'JSP'
    },
    {
      id: 7,
      url: proImgUrl(7, 'skill'),
      label: 'React'
    },
    {
      id: 8,
      url: proImgUrl(8, 'skill'),
      label: 'Python'
    },
    {
      id: 9,
      url: proImgUrl(9, 'skill'),
      label: 'SQL&PL/SQL'
    },
    {
      id: 10,
      url: proImgUrl(10, 'skill'),
      label: 'PostgreSQL'
    }
  ]
  
  export const projectImages = [
    {
      id: 1,
      url: proImgUrl(1, 'project'),
      link: 'https://www.greenade.com/'
    },
    {
      id: 2,
      url: proImgUrl(2, 'project'),
      link: 'https://inspirationalquotesmr.netlify.app/'
    },
    {
      id: 3,
      url: proImgUrl(3, 'project'),
      link: 'https://www.excel-mito.com/'
    },
    {
      id: 4,
      url: proImgUrl(4, 'project'),
      link: 'https://www.e-mona.jp/'
    },
    {
      id: 5,
      url: proImgUrl(5, 'project'),
      link: 'https://nikke-parktown.com/'
    },
    {
      id: 6,
      url: proImgUrl(6, 'project'),
      link: 'https://tiara21.co.jp/'
    },
    {
      id: 7,
      url: proImgUrl(7, 'project'),
      link: 'https://youtu.be/X8RbL4rmCPM '
    },
    {
      id: 8,
      url: proImgUrl(8, 'project'),
      link: 'https://youtu.be/91qP8j5LOb0'
    },
    {
      id: 9,
      url: proImgUrl(9, 'project'),
      link: 'https://youtube.com/shorts/d1dZx0t6J4E?feature=share'
    }
  ]